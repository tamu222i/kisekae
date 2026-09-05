import { useState, useRef, useCallback } from 'react';
import { AsmrToy } from '../../domain/models/AsmrToy';

export interface AsmrToyInteractiveProps {
  toy: AsmrToy | null;
  onTap: () => void;
  lastEarned?: number;
  className?: string;
}

interface FloatingEffect {
  id: number;
  x: number;
  y: number;
  amount: number;
}

export function AsmrToyInteractive({
  toy,
  onTap,
  lastEarned = 1,
  className = '',
}: AsmrToyInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [floatingEffects, setFloatingEffects] = useState<FloatingEffect[]>([]);
  const effectCounter = useRef(0);

  // Toy-specific states
  const [poppedBubbles, setPoppedBubbles] = useState<Set<number>>(new Set());
  const [slicedCubes, setSlicedCubes] = useState<Set<number>>(new Set());
  const [crackedChips, setCrackedChips] = useState<Set<number>>(new Set());
  const [isSlimeSquished, setIsSlimeSquished] = useState(false);
  const [pressedKey, setPressedKey] = useState<number | null>(null);
  const [pulseActive, setPulseActive] = useState(false);

  // Common tap handler with floating coins & haptics
  const triggerTap = useCallback(
    (clientX?: number, clientY?: number) => {
      onTap();

      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 200);

      // Haptic feedback for mobile
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate?.(12);
      }

      // Calculate relative position for floating particle
      if (containerRef.current && clientX !== undefined && clientY !== undefined) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const id = ++effectCounter.current;
        setFloatingEffects((prev) => [...prev, { id, x, y, amount: lastEarned }]);

        setTimeout(() => {
          setFloatingEffects((prev) => prev.filter((eff) => eff.id !== id));
        }, 700);
      }
    },
    [onTap, lastEarned]
  );

  if (!toy) {
    return (
      <div className="flex items-center justify-center p-8 bg-purple-50 rounded-3xl text-purple-400">
        おもちゃを読み込み中...
      </div>
    );
  }

  // 1. Bubble Wrap Toy
  const handleBubbleClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setPoppedBubbles((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (next.size >= 16) {
        setTimeout(() => setPoppedBubbles(new Set()), 400);
      }
      return next;
    });
  };

  // 2. Soap Cutting Toy
  const handleSoapCubeClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setSlicedCubes((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (next.size >= 16) {
        setTimeout(() => setSlicedCubes(new Set()), 400);
      }
      return next;
    });
  };

  // 3. Potato Chips
  const handleChipClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setCrackedChips((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (next.size >= 6) {
        setTimeout(() => setCrackedChips(new Set()), 400);
      }
      return next;
    });
  };

  // 4. Slime Toy
  const handleSlimeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setIsSlimeSquished(true);
    setTimeout(() => setIsSlimeSquished(false), 200);
  };

  // 5. Keyboard Toy
  const handleKeyClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setPressedKey(index);
    setTimeout(() => setPressedKey(null), 150);
  };

  const KEYBOARD_SYMBOLS = ['🌸', '⭐', '🎵', '💖', '🐾', '✨', '🧁', '🌙', '🎀', '🍬', '💎', '🌈'];
  const SOAP_COLORS = [
    '#FCA5A5', '#FCD34D', '#A7F3D0', '#BAE6FD',
    '#F472B6', '#FBBF24', '#34D399', '#60A5FA',
    '#E879F9', '#F59E0B', '#10B981', '#3B82F6',
    '#C084FC', '#D97706', '#059669', '#2563EB',
  ];

  return (
    <div
      ref={containerRef}
      data-testid="asmr-toy-interactive"
      onClick={(e) => triggerTap(e.clientX, e.clientY)}
      className={`relative w-full max-w-[360px] sm:max-w-[400px] h-[360px] sm:h-[400px] flex flex-col items-center justify-between p-5 bg-gradient-to-b from-white/95 to-purple-50/90 backdrop-blur-md rounded-3xl shadow-xl border-4 border-purple-100 select-none cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Toy Header Info */}
      <div className="w-full flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">{toy.icon}</span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-purple-900 leading-tight">
              {toy.name}
            </h3>
            <p className="text-xs text-purple-500 font-medium line-clamp-1">{toy.description}</p>
          </div>
        </div>
        <div className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200 shadow-sm flex items-center gap-1 shrink-0">
          <span>🪙</span>
          <span>+{toy.baseCoinYield}/tap</span>
        </div>
      </div>

      {/* Floating Particles Layer */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {floatingEffects.map((eff) => (
          <div
            key={eff.id}
            style={{ left: `${eff.x}px`, top: `${eff.y}px` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-base sm:text-lg font-black text-amber-500 drop-shadow-md animate-float-fade flex items-center gap-0.5"
          >
            <span>+{eff.amount}</span>
            <span>🪙</span>
          </div>
        ))}
      </div>

      {/* Main Interactive Stage for Toy */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2">
        {/* 1. Bubble Wrap */}
        {toy.soundType === 'bubble_wrap' && (
          <div className="grid grid-cols-4 gap-2.5 p-3 bg-blue-50/60 rounded-2xl border-2 border-blue-100 shadow-inner">
            {Array.from({ length: 16 }).map((_, idx) => {
              const isPopped = poppedBubbles.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleBubbleClick(idx, e)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-100 flex items-center justify-center focus:outline-none ${
                    isPopped
                      ? 'bg-blue-100/50 scale-90 border-2 border-blue-200/40 shadow-inner opacity-60'
                      : 'bg-gradient-to-tr from-cyan-300 via-blue-200 to-white shadow-md hover:scale-105 active:scale-95 border-2 border-white/80'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      isPopped
                        ? 'bg-transparent'
                        : 'bg-white/80 -translate-y-1 -translate-x-1 blur-[1px]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Soap Cutting */}
        {toy.soundType === 'soap_cutting' && (
          <div className="grid grid-cols-4 gap-1.5 p-3 bg-pink-50/50 rounded-2xl border-2 border-pink-100 shadow-inner">
            {Array.from({ length: 16 }).map((_, idx) => {
              const isSliced = slicedCubes.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleSoapCubeClick(idx, e)}
                  style={{ backgroundColor: isSliced ? 'transparent' : SOAP_COLORS[idx] }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg transition-all duration-150 flex items-center justify-center shadow-sm active:scale-90 ${
                    isSliced
                      ? 'opacity-0 scale-50 pointer-events-none'
                      : 'opacity-100 scale-100 border-t-2 border-l-2 border-white/70 shadow-md hover:brightness-105'
                  }`}
                >
                  <span className="text-[10px] text-white/70 font-black">✦</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 3. Potato Chips */}
        {toy.soundType === 'potato_chips' && (
          <div className="flex flex-col items-center gap-3">
            <div className="grid grid-cols-3 gap-2.5 p-3 bg-amber-50/80 rounded-2xl border-2 border-amber-200 shadow-md">
              {Array.from({ length: 6 }).map((_, idx) => {
                const isCracked = crackedChips.has(idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => handleChipClick(idx, e)}
                    className={`w-16 h-14 sm:w-18 sm:h-16 rounded-3xl transition-all duration-100 flex items-center justify-center focus:outline-none ${
                      isCracked
                        ? 'scale-90 opacity-40 rotate-12 bg-amber-200'
                        : 'bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 shadow-md hover:scale-105 active:scale-95 border-2 border-amber-100 shadow-amber-300/50'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl drop-shadow-sm">🥔</span>
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-bold text-amber-700">チップスをタップしてザクザク噛み砕こう！</span>
          </div>
        )}

        {/* 4. Shaved Ice */}
        {toy.soundType === 'shaved_ice' && (
          <div
            className={`relative flex flex-col items-center justify-center p-6 bg-cyan-50/70 rounded-full border-4 border-cyan-200 shadow-lg transition-transform duration-150 ${
              pulseActive ? 'scale-105' : 'scale-100'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <span className="text-7xl sm:text-8xl filter drop-shadow-lg animate-pulse">🍧</span>
              <div
                className={`absolute inset-0 flex items-center justify-center text-cyan-500 font-extrabold text-sm transition-opacity duration-150 ${
                  pulseActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                ✨シャリッ✨
              </div>
            </div>
            <span className="text-xs font-bold text-cyan-800 mt-2">スプーンでシャリシャリ削ろう！</span>
          </div>
        )}

        {/* 5. Slime */}
        {toy.soundType === 'slime' && (
          <button
            type="button"
            onClick={handleSlimeClick}
            className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full transition-transform duration-200 flex items-center justify-center bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-400 shadow-xl border-4 border-white/80 active:scale-95 focus:outline-none ${
              isSlimeSquished ? 'scale-x-125 scale-y-75 translate-y-3' : 'scale-100'
            }`}
          >
            <div className="absolute top-4 left-8 w-14 h-8 bg-white/70 rounded-full rotate-[-25deg] blur-[1px]" />
            <div className="absolute top-12 left-6 w-5 h-3 bg-white/50 rounded-full rotate-[-25deg]" />
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-8">
                <div className="w-3.5 h-3.5 bg-emerald-950 rounded-full animate-bounce" />
                <div className="w-3.5 h-3.5 bg-emerald-950 rounded-full animate-bounce" />
              </div>
              <div className="w-5 h-2.5 border-b-4 border-emerald-950 rounded-full" />
              <div className="flex items-center gap-10 mt-0.5">
                <div className="w-4 h-2 bg-pink-400/80 rounded-full blur-[1px]" />
                <div className="w-4 h-2 bg-pink-400/80 rounded-full blur-[1px]" />
              </div>
            </div>
          </button>
        )}

        {/* 6. Keyboard */}
        {toy.soundType === 'keyboard' && (
          <div className="grid grid-cols-4 gap-2.5 p-3.5 bg-slate-100 rounded-2xl border-4 border-slate-200 shadow-md">
            {KEYBOARD_SYMBOLS.map((sym, idx) => {
              const isPressed = pressedKey === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleKeyClick(idx, e)}
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl font-bold flex items-center justify-center text-base transition-all duration-75 focus:outline-none ${
                    isPressed
                      ? 'bg-purple-100 translate-y-1.5 shadow-[0_0px_0px_#9333EA] border border-purple-300'
                      : 'bg-white shadow-[0_5px_0px_#CBD5E1] hover:shadow-[0_4px_0px_#CBD5E1] active:translate-y-1 active:shadow-[0_1px_0px_#CBD5E1] border border-slate-200 text-purple-800'
                  }`}
                >
                  {sym}
                </button>
              );
            })}
          </div>
        )}

        {/* 7. Carbonated Soda */}
        {toy.soundType === 'carbonated_soda' && (
          <div
            className={`relative flex flex-col items-center justify-center p-6 bg-blue-50/80 rounded-3xl border-4 border-blue-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105 -translate-y-1' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">🥤</span>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-0.5 bg-blue-200/80 text-blue-900 font-black rounded-full animate-bounce">
                🫧 シュワッ
              </span>
              <span className="text-xs px-2 py-0.5 bg-cyan-200/80 text-cyan-900 font-black rounded-full animate-bounce delay-100">
                🧊 ひんやり
              </span>
            </div>
          </div>
        )}

        {/* 8. Scissors Haircut */}
        {toy.soundType === 'scissors_haircut' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-slate-50/90 rounded-3xl border-4 border-slate-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110 rotate-6' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">✂️</span>
            <span className="text-xs font-bold text-slate-600 mt-3">チョキチョキ刃の開閉音</span>
          </div>
        )}

        {/* 9. Book Page Flip */}
        {toy.soundType === 'book_page_flip' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-amber-50/80 rounded-3xl border-4 border-amber-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105 -rotate-3' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">📖</span>
            <span className="text-xs font-bold text-amber-800 mt-3">ページをめくるパラパラ音</span>
          </div>
        )}

        {/* 10. Autumn Leaves */}
        {toy.soundType === 'autumn_leaves' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-orange-50/80 rounded-3xl border-4 border-orange-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105 translate-y-1' : 'scale-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-6xl sm:text-7xl">🍂</span>
              <span className="text-5xl sm:text-6xl">🍁</span>
            </div>
            <span className="text-xs font-bold text-orange-900 mt-3">落ち葉を踏みしめるザクザク音</span>
          </div>
        )}

        {/* 11. Wood Block Clack */}
        {toy.soundType === 'wood_block_clack' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-amber-50/90 rounded-3xl border-4 border-amber-300 shadow-xl transition-transform duration-100 ${
              pulseActive ? 'scale-95 translate-y-2' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">🪵</span>
            <span className="text-xs font-bold text-amber-900 mt-3">乾いた木魚・ウッドブロック音</span>
          </div>
        )}

        {/* 12. Match Ignite */}
        {toy.soundType === 'match_ignite' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-red-50/80 rounded-3xl border-4 border-red-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-lg">🔥</span>
            <span className="text-xs font-bold text-red-700 mt-3">シュッと擦ってマッチ着火</span>
          </div>
        )}

        {/* 13. Rain Umbrella */}
        {toy.soundType === 'rain_umbrella' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-sky-50/80 rounded-3xl border-4 border-sky-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">☔</span>
            <span className="text-xs font-bold text-sky-800 mt-3">傘にあたるしとしと雨音</span>
          </div>
        )}

        {/* 14. Clock Tick */}
        {toy.soundType === 'clock_tick' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-stone-50/90 rounded-3xl border-4 border-stone-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105 rotate-2' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">🕰️</span>
            <span className="text-xs font-bold text-stone-700 mt-3">秒針が刻むコチコチ音</span>
          </div>
        )}

        {/* 15. Water Drop Cave */}
        {toy.soundType === 'water_drop_cave' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-indigo-50/80 rounded-3xl border-4 border-indigo-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-lg">💧</span>
            <span className="text-xs font-bold text-indigo-800 mt-3">洞窟の神秘的な水滴音</span>
          </div>
        )}

        {/* 16. Fire Crackling */}
        {toy.soundType === 'fire_crackling' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-orange-50/90 rounded-3xl border-4 border-orange-300 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-lg">🏕️</span>
            <span className="text-xs font-bold text-orange-950 mt-3">パチパチはぜる焚き火の温もり</span>
          </div>
        )}

        {/* 17. Whisper Ear Pick */}
        {toy.soundType === 'whisper_ear_pick' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-purple-50/80 rounded-3xl border-4 border-purple-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-105' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">👂</span>
            <span className="text-xs font-bold text-purple-800 mt-3">ふわふわ綿毛の耳かき音</span>
          </div>
        )}

        {/* 18. Cat Purr */}
        {toy.soundType === 'cat_purr' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-rose-50/80 rounded-3xl border-4 border-rose-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110 -translate-y-1' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md animate-bounce">🐾</span>
            <span className="text-xs font-bold text-rose-800 mt-3">胸に響くゴロゴロのど鳴らし音</span>
          </div>
        )}

        {/* 19. Bell Wind Chime */}
        {toy.soundType === 'bell_wind_chime' && (
          <div
            className={`flex flex-col items-center justify-center p-6 bg-teal-50/80 rounded-3xl border-4 border-teal-200 shadow-xl transition-transform duration-150 ${
              pulseActive ? 'scale-110 rotate-6' : 'scale-100'
            }`}
          >
            <span className="text-7xl sm:text-8xl filter drop-shadow-md">🎐</span>
            <span className="text-xs font-bold text-teal-800 mt-3">透き通る南部風鈴のチリンチリン音</span>
          </div>
        )}

        {/* 20. Crystal Tap */}
        {toy.soundType === 'crystal_tap' && (
          <div
            className={`relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-3xl transition-transform duration-150 ${
              pulseActive ? 'scale-110' : 'scale-100'
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full bg-violet-400/30 blur-xl transition-opacity duration-300 ${
                pulseActive ? 'opacity-100 scale-125' : 'opacity-40 scale-90'
              }`}
            />
            <svg
              viewBox="0 0 100 100"
              className="w-36 h-36 drop-shadow-[0_10px_20px_rgba(168,85,247,0.4)]"
            >
              <defs>
                <linearGradient id="crystGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DDD6FE" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
                <linearGradient id="crystGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D0FE" />
                  <stop offset="60%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#7E22CE" />
                </linearGradient>
              </defs>
              <polygon points="30,75 20,40 38,30 45,70" fill="url(#crystGrad2)" opacity="0.9" />
              <polygon points="70,75 80,45 62,35 55,70" fill="url(#crystGrad2)" opacity="0.9" />
              <polygon points="50,12 34,48 40,82 60,82 66,48" fill="url(#crystGrad1)" />
              <polygon points="50,12 40,48 50,82 50,12" fill="#FFFFFF" opacity="0.35" />
              <polygon points="50,12 60,48 50,82 50,12" fill="#FAF5FF" opacity="0.15" />
            </svg>
          </div>
        )}
      </div>

      {/* Tap Guidance Hint */}
      <div className="text-center text-xs text-purple-400 font-semibold pointer-events-none">
        👆 画面をタップして極上ASMR音とコインをGET！
      </div>
    </div>
  );
}
