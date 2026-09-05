import React from 'react';
import { SlotCategory, SLOT_CATEGORY_LABELS } from '../../domain/models/SlotCategory';

export interface CategoryTabsProps {
  selectedCategory: SlotCategory;
  onSelectCategory: (category: SlotCategory) => void;
  isSlotEquipped: (category: SlotCategory) => boolean;
}

// Order categories intuitively in 2 rows of 5:
// Row 1: Clothes & Main items (Tops, Bottoms, One-piece, Shoes, Accessories)
// Row 2: Character features & Background (Front hair, Back hair, Eyes, Mouth, Background)
const DISPLAY_CATEGORIES: readonly SlotCategory[] = [
  SlotCategory.TOPS,
  SlotCategory.BOTTOMS,
  SlotCategory.ONE_PIECE,
  SlotCategory.SHOES,
  SlotCategory.ACCESSORY,
  SlotCategory.HAIR_FRONT,
  SlotCategory.HAIR_BACK,
  SlotCategory.EYES,
  SlotCategory.MOUTH,
  SlotCategory.BACKGROUND,
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
      className="grid grid-cols-5 gap-1.5 sm:gap-2 w-full pb-1"
    >
      {DISPLAY_CATEGORIES.map((cat) => {
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
            className={`relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-2 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm ${
              isSelected
                ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-pink-200 ring-2 ring-pink-300 scale-[1.02]'
                : 'bg-white text-gray-600 hover:bg-pink-50/70 hover:text-pink-600'
            }`}
          >
            <span className="text-sm sm:text-base leading-none">{icon}</span>
            <span className="truncate max-w-full text-[11px] sm:text-xs">{label}</span>
            {equipped && (
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSelected ? 'bg-white' : 'bg-pink-500'
                }`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
