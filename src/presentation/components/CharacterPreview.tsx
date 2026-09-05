import { forwardRef } from 'react';
import { Outfit } from '../../domain/models/Outfit';

export interface CharacterPreviewProps {
  outfit: Outfit | null;
  className?: string;
}

export const CharacterPreview = forwardRef<SVGSVGElement, CharacterPreviewProps>(
  ({ outfit, className = '' }, ref) => {
    if (!outfit) {
      return (
        <div className="w-[300px] h-[400px] flex items-center justify-center bg-pink-50 rounded-2xl text-pink-400 font-medium animate-pulse">
          読み込み中...
        </div>
      );
    }

    const items = outfit.getItemsSortedByLayer();

    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg
          ref={ref}
          viewBox="0 0 300 400"
          className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-[3/4] drop-shadow-lg rounded-2xl overflow-hidden bg-white"
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
