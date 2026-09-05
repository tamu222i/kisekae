import React from 'react';
import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { Check, XCircle } from 'lucide-react';

export interface ItemCatalogGridProps {
  items: readonly Item[];
  selectedCategory: SlotCategory;
  isEquipped: (itemId: string) => boolean;
  isSlotEquipped: (category: SlotCategory) => boolean;
  onEquipItem: (itemId: string) => void;
  onUnequipSlot: (category: SlotCategory) => void;
}

export function getItemThumbnailViewBox(category: SlotCategory): string {
  switch (category) {
    case SlotCategory.TOPS:
      // Focus on upper torso & arms
      return '45 110 210 160';
    case SlotCategory.BOTTOMS:
      // Focus on waist, hips & legs
      return '50 180 200 170';
    case SlotCategory.ONE_PIECE:
      // Focus on dress & full costume silhouette
      return '40 100 220 230';
    case SlotCategory.SHOES:
      // Zoom in on feet & shoes
      return '60 280 180 120';
    case SlotCategory.ACCESSORY:
      // Focus on head & accessories
      return '40 20 220 200';
    case SlotCategory.HAIR_FRONT:
    case SlotCategory.HAIR_BACK:
      // Focus on head & hair
      return '40 20 220 200';
    case SlotCategory.EYES:
    case SlotCategory.MOUTH:
      // Close-up on face details
      return '60 65 180 110';
    case SlotCategory.BACKGROUND:
    case SlotCategory.BASE_BODY:
    default:
      return '0 0 300 400';
  }
}

export const ItemCatalogGrid: React.FC<ItemCatalogGridProps> = ({
  items,
  selectedCategory,
  isEquipped,
  isSlotEquipped,
  onEquipItem,
  onUnequipSlot,
}) => {
  const hasEquippedInSlot = isSlotEquipped(selectedCategory);
  // Base body is not removable
  const canUnequipThisSlot = hasEquippedInSlot && selectedCategory !== SlotCategory.BASE_BODY;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-1">
      {/* Unequip button card if slot has removable item */}
      {canUnequipThisSlot && (
        <button
          type="button"
          onClick={() => onUnequipSlot(selectedCategory)}
          className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-dashed border-gray-300 bg-white/70 hover:bg-red-50 hover:border-red-300 text-gray-500 hover:text-red-500 transition-all aspect-square group shadow-sm"
        >
          <XCircle className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold">はずす</span>
        </button>
      )}

      {items.map((item) => {
        const active = isEquipped(item.id);
        const viewBox = getItemThumbnailViewBox(item.slotCategory);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (active && item.isRemovable) {
                onUnequipSlot(item.slotCategory);
              } else {
                onEquipItem(item.id);
              }
            }}
            className={`relative group flex flex-col items-center justify-between p-2.5 rounded-2xl border-2 transition-all duration-200 aspect-square shadow-sm ${
              active
                ? 'border-pink-500 bg-pink-50/80 shadow-pink-100 ring-2 ring-pink-300/60 scale-[1.02]'
                : 'border-pink-100 bg-white hover:border-pink-300 hover:bg-pink-50/40 hover:scale-[1.01]'
            }`}
          >
            {/* Active checkmark badge */}
            {active && (
              <span className="absolute top-2 right-2 bg-pink-500 text-white rounded-full p-1 shadow-sm z-10">
                <Check className="w-3.5 h-3.5" />
              </span>
            )}

            {/* Thumbnail SVG render - with Category-specific Zoom */}
            <div className="w-full flex-1 flex items-center justify-center overflow-hidden pointer-events-none p-1 min-h-[85px]">
              <svg
                viewBox={viewBox}
                className="w-full h-full max-h-[105px] object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g dangerouslySetInnerHTML={{ __html: item.thumbnailSvg }} />
              </svg>
            </div>

            {/* Item Title */}
            <span
              className={`text-xs font-semibold text-center w-full truncate px-1 mt-1 ${
                active ? 'text-pink-700' : 'text-gray-700'
              }`}
              title={item.name}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

