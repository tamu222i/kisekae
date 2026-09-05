import { forwardRef } from 'react';
import { Outfit } from '../../domain/models/Outfit';
import { SlotCategory } from '../../domain/models/SlotCategory';

export type CharacterMotion = 'idle' | 'twirl' | 'punch' | 'kick' | 'none';

export interface CharacterPreviewProps {
  outfit: Outfit | null;
  className?: string;
  motion?: CharacterMotion;
  showSparkles?: boolean;
  includeBackground?: boolean;
}

export const CharacterPreview = forwardRef<SVGSVGElement, CharacterPreviewProps>(
  (
    {
      outfit,
      className = '',
      motion = 'idle',
      showSparkles = false,
      includeBackground = true,
    },
    ref
  ) => {
    if (!outfit) {
      return (
        <div className="w-[300px] h-[400px] flex items-center justify-center bg-pink-50 rounded-2xl text-pink-400 font-medium animate-pulse">
          読み込み中...
        </div>
      );
    }

    const allItems = outfit.getItemsSortedByLayer();
    const items = includeBackground
      ? allItems
      : allItems.filter((item) => item.slotCategory !== SlotCategory.BACKGROUND);

    const motionClass =
      motion === 'idle'
        ? 'animate-avatar-breathe'
        : motion === 'twirl'
        ? 'animate-avatar-twirl'
        : motion === 'punch'
        ? 'animate-avatar-punch'
        : motion === 'kick'
        ? 'animate-avatar-kick'
        : '';

    const isTwirling = motion === 'twirl' || showSparkles;

    return (
      <div
        data-testid="character-preview-container"
        data-motion={motion}
        className={`relative flex items-center justify-center ${motionClass} ${className}`}
      >
        {/* Twirl & Dress-up Sparkle Burst Particles */}
        {isTwirling && (
          <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center overflow-visible">
            <span className="absolute -top-4 -left-3 text-2xl animate-sparkle-burst">✨</span>
            <span
              className="absolute -top-2 -right-4 text-2xl animate-sparkle-burst"
              style={{ animationDelay: '100ms' }}
            >
              💖
            </span>
            <span
              className="absolute -bottom-2 -left-4 text-2xl animate-sparkle-burst"
              style={{ animationDelay: '150ms' }}
            >
              ⭐
            </span>
            <span
              className="absolute -bottom-3 -right-2 text-2xl animate-sparkle-burst"
              style={{ animationDelay: '200ms' }}
            >
              ✨
            </span>
            <span
              className="absolute top-1/2 -right-6 text-xl animate-sparkle-burst"
              style={{ animationDelay: '80ms' }}
            >
              🌸
            </span>
            <span
              className="absolute top-1/3 -left-6 text-xl animate-sparkle-burst"
              style={{ animationDelay: '120ms' }}
            >
              💫
            </span>
          </div>
        )}

        <svg
          ref={ref}
          viewBox="0 0 300 400"
          className={`w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] aspect-[3/4] transition-transform ${
            includeBackground
              ? 'drop-shadow-xl rounded-2xl overflow-hidden bg-white'
              : 'drop-shadow-md overflow-visible bg-transparent'
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {items.map((item) => (
            <g
              key={item.id}
              data-layer={item.slotCategory}
              dangerouslySetInnerHTML={{ __html: item.svgContent }}
            />
          ))}
        </svg>
      </div>
    );
  }
);

CharacterPreview.displayName = 'CharacterPreview';
