import { useEffect, useState, useMemo } from 'react';
import { Outfit } from '../../domain/models/Outfit';
import { CharacterPreview } from './CharacterPreview';

export interface AvatarCompanionProps {
  outfit: Outfit | null;
  tapCountTrigger: number;
  lastEarned?: number;
  className?: string;
}

const CHEER_MESSAGES = [
  'いい音〜♪',
  'きもちいい！✨',
  'ポチポチ楽しい♪',
  '最高のリズム！🎧',
  'コインいっぱい！🪙',
  'ずっと聴いてたい〜🥰',
  'ナイスタップ！💫',
];

export function AvatarCompanion({
  outfit,
  tapCountTrigger,
  lastEarned = 0,
  className = '',
}: AvatarCompanionProps) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (tapCountTrigger > 0) {
      setIsBouncing(true);
      setMessageIndex((prev) => (prev + 1) % CHEER_MESSAGES.length);
      const timer = setTimeout(() => setIsBouncing(false), 260);
      return () => clearTimeout(timer);
    }
  }, [tapCountTrigger]);

  const currentMessage = useMemo(() => {
    return CHEER_MESSAGES[messageIndex];
  }, [messageIndex]);

  if (!outfit) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-purple-50/80 rounded-2xl text-purple-400">
        読み込み中...
      </div>
    );
  }

  return (
    <div
      data-testid="avatar-companion"
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* Cute speech bubble */}
      <div className="relative mb-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm border-2 border-purple-200 text-purple-800 text-xs font-bold rounded-full shadow-md transition-transform duration-200 animate-fade-in flex items-center gap-1">
        <span>💬</span>
        <span>{currentMessage}</span>
        {lastEarned > 0 && tapCountTrigger > 0 && (
          <span className="text-amber-500 font-extrabold ml-1 animate-bounce">
            +{lastEarned}🪙
          </span>
        )}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-purple-200 rotate-45" />
      </div>

      {/* Avatar Container with Bounce Animation */}
      <div
        className={`relative transition-transform duration-150 ${
          isBouncing ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'
        }`}
      >
        <div className="w-[140px] sm:w-[170px] md:w-[200px] overflow-hidden rounded-2xl shadow-md border-2 border-purple-100 bg-gradient-to-b from-purple-50/60 to-pink-50/60">
          <CharacterPreview outfit={outfit} motion={isBouncing ? 'punch' : 'idle'} />
        </div>

        {/* 2.5D Roblox-style Circular Shadow / Glow Pedestal */}
        <div className="w-32 sm:w-40 h-4 bg-purple-900/10 rounded-full mx-auto mt-2 blur-[2px]" />
      </div>
    </div>
  );
}
