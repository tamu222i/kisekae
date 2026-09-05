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
  const [isSlimeSquished, setIsSlimeSquished] = useState(false);
  const [pressedKey, setPressedKey] = useState<number | null>(null);
  const [crystalPulse, setCrystalPulse] = useState(false);

  // Common tap handler with floating coins & haptics
  const triggerTap = useCallback(
    (clientX?: number, clientY?: number) => {
      onTap();

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

  // 3. Slime Toy
  const handleSlimeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setIsSlimeSquished(true);
    setTimeout(() => setIsSlimeSquished(false), 200);
  };

  // 4. Keyboard Toy
  const handleKeyClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setPressedKey(index);
    setTimeout(() => setPressedKey(null), 150);
  };

  // 5. Crystal Tap Toy
  const handleCrystalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerTap(e.clientX, e.clientY);
    setCrystalPulse(true);
    setTimeout(() => setCrystalPulse(false), 250);
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
      className={`relative w-full max-w-[360px] sm:max-w-[400px] h-[360px] sm:h-[400px] flex flex-col items-center justify-between p-5 bg-gradient-to-b from-white/90 to-purple-50/90 backdrop-blur-md rounded-3xl shadow-xl border-4 border-purple-100 select-none cursor-pointer overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Toy Header Info */}
      <div className="w-full flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{toy.icon}</span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-purple-900 leading-tight">
              {toy.name}
            </h3>
            <p className="text-xs text-purple-500 font-medium">{toy.description}</p>
          </div>
        </div>
        <div className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200 shadow-sm flex items-center gap-1">
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
        {/* Case 1: Bubble Wrap */}
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

        {/* Case 2: Soap Cutting */}
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

        {/* Case 3: Slime */}
        {toy.soundType === 'slime' && (
          <button
            type="button"
            onClick={handleSlimeClick}
            className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full transition-transform duration-200 flex items-center justify-center bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-400 shadow-xl border-4 border-white/80 active:scale-95 focus:outline-none ${
              isSlimeSquished ? 'scale-x-125 scale-y-75 translate-y-3' : 'scale-100'
            }`}
          >
            {/* Glossy highlights */}
            <div className="absolute top-4 left-8 w-14 h-8 bg-white/70 rounded-full rotate-[-25deg] blur-[1px]" />
            <div className="absolute top-12 left-6 w-5 h-3 bg-white/50 rounded-full rotate-[-25deg]" />

            {/* Cute Slime Face */}
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

        {/* Case 4: Keyboard */}
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

        {/* Case 5: Crystal Tap */}
        {toy.soundType === 'crystal_tap' && (
          <button
            type="button"
            onClick={handleCrystalClick}
            className={`relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-3xl transition-transform duration-150 focus:outline-none ${
              crystalPulse ? 'scale-110' : 'scale-100'
            }`}
          >
            {/* Expanding pulse glow */}
            <div
              className={`absolute inset-0 rounded-full bg-violet-400/30 blur-xl transition-opacity duration-300 ${
                crystalPulse ? 'opacity-100 scale-125' : 'opacity-40 scale-90'
              }`}
            />

            {/* Glowing Crystal Cluster SVG */}
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

              {/* Side shard left */}
              <polygon points="30,75 20,40 38,30 45,70" fill="url(#crystGrad2)" opacity="0.9" />
              {/* Side shard right */}
              <polygon points="70,75 80,45 62,35 55,70" fill="url(#crystGrad2)" opacity="0.9" />
              {/* Center main crystal */}
              <polygon points="50,12 34,48 40,82 60,82 66,48" fill="url(#crystGrad1)" />
              {/* Sparkle highlight faces */}
              <polygon points="50,12 40,48 50,82 50,12" fill="#FFFFFF" opacity="0.35" />
              <polygon points="50,12 60,48 50,82 50,12" fill="#FAF5FF" opacity="0.15" />
            </svg>
          </button>
        )}
      </div>

      {/* Tap Guidance Hint */}
      <div className="text-center text-xs text-purple-400 font-semibold pointer-events-none">
        👆 画面をタップしてASMR音とコインをGET！
      </div>
    </div>
  );
}
