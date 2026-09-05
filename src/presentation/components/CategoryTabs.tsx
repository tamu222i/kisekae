import React from 'react';
import { SlotCategory, SLOT_CATEGORY_LABELS } from '../../domain/models/SlotCategory';

export interface CategoryTabsProps {
  selectedCategory: SlotCategory;
  onSelectCategory: (category: SlotCategory) => void;
  isSlotEquipped: (category: SlotCategory) => boolean;
}

const DISPLAY_CATEGORIES: readonly SlotCategory[] = [
  SlotCategory.TOPS,
  SlotCategory.BOTTOMS,
  SlotCategory.ONE_PIECE,
  SlotCategory.HAIR_FRONT,
  SlotCategory.HAIR_BACK,
  SlotCategory.EYES,
  SlotCategory.MOUTH,
  SlotCategory.SHOES,
  SlotCategory.ACCESSORY,
  SlotCategory.BACKGROUND,
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  isSlotEquipped,
}) => {
  return (
    <div role="tablist" aria-label="カテゴリー一覧" className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pink-200">
      {DISPLAY_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        const equipped = isSlotEquipped(cat);
        const label = SLOT_CATEGORY_LABELS[cat] || cat;

        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
              isSelected
                ? 'bg-pink-500 text-white shadow-pink-200 ring-2 ring-pink-300 scale-105'
                : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
            }`}
          >
            <span>{label}</span>
            {equipped && (
              <span
                className={`w-2 h-2 rounded-full ${
                  isSelected ? 'bg-white' : 'bg-pink-400'
                }`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
