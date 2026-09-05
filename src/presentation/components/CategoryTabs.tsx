import React from 'react';
import { SlotCategory, SLOT_CATEGORY_LABELS } from '../../domain/models/SlotCategory';

export interface CategoryTabsProps {
  selectedCategory: SlotCategory;
  onSelectCategory: (category: SlotCategory) => void;
  isSlotEquipped: (category: SlotCategory) => boolean;
}

// Order categories in 2 distinct, balanced rows of 5:
// Row 1: Clothes & Shoes & Accessories (Tops, Bottoms, One-piece, Shoes, Accessories)
// Row 2: Hair, Face & Background (Front hair, Back hair, Eyes, Mouth, Background)
export const CATEGORY_ROWS: readonly (readonly SlotCategory[])[] = [
  [
    SlotCategory.TOPS,
    SlotCategory.BOTTOMS,
    SlotCategory.ONE_PIECE,
    SlotCategory.SHOES,
    SlotCategory.ACCESSORY,
  ],
  [
    SlotCategory.HAIR_FRONT,
    SlotCategory.HAIR_BACK,
    SlotCategory.EYES,
    SlotCategory.MOUTH,
    SlotCategory.BACKGROUND,
  ],
];

export const CATEGORY_ICONS: Record<SlotCategory, string> = {
  [SlotCategory.TOPS]: '👚',
  [SlotCategory.BOTTOMS]: '👖',
  [SlotCategory.ONE_PIECE]: '👗',
  [SlotCategory.SHOES]: '👠',
  [SlotCategory.ACCESSORY]: '🎀',
  [SlotCategory.HAIR_FRONT]: '💇‍♀️',
  [SlotCategory.HAIR_BACK]: '✨',
  [SlotCategory.EYES]: '👀',
  [SlotCategory.MOUTH]: '😊',
  [SlotCategory.BACKGROUND]: '🖼️',
  [SlotCategory.BASE_BODY]: '👤',
};

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  isSlotEquipped,
}) => {
  return (
    <div
      role="tablist"
      aria-label="カテゴリー一覧"
      className="grid grid-cols-1 gap-1.5 sm:gap-2 w-full pb-1"
    >
      {CATEGORY_ROWS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-5 gap-1 sm:gap-2 w-full"
        >
          {row.map((cat) => {
            const isSelected = selectedCategory === cat;
            const equipped = isSlotEquipped(cat);
            const label = SLOT_CATEGORY_LABELS[cat] || cat;
            const icon = CATEGORY_ICONS[cat] || '✨';

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2.5 px-0.5 sm:px-2 rounded-xl font-bold transition-all duration-200 shadow-sm overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-pink-200 ring-2 ring-pink-300 scale-[1.02]'
                    : 'bg-white text-gray-700 hover:bg-pink-50/70 hover:text-pink-600'
                }`}
              >
                <span className="text-sm sm:text-base leading-none shrink-0">{icon}</span>
                <span className="text-[10px] sm:text-xs font-bold leading-tight text-center truncate max-w-full">
                  {label}
                </span>
                {equipped && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isSelected ? 'bg-white' : 'bg-pink-500'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
