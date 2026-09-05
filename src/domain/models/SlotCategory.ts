export const SlotCategory = {
  BACKGROUND: 'background',
  HAIR_BACK: 'hair_back',
  BASE_BODY: 'base_body',
  EYES: 'eyes',
  MOUTH: 'mouth',
  BOTTOMS: 'bottoms',
  TOPS: 'tops',
  ONE_PIECE: 'one_piece',
  SHOES: 'shoes',
  HAIR_FRONT: 'hair_front',
  ACCESSORY: 'accessory',
} as const;

export type SlotCategory = (typeof SlotCategory)[keyof typeof SlotCategory];

export const DEFAULT_SLOT_Z_INDEX: Record<SlotCategory, number> = {
  [SlotCategory.BACKGROUND]: 10,
  [SlotCategory.HAIR_BACK]: 20,
  [SlotCategory.BASE_BODY]: 30,
  [SlotCategory.EYES]: 40,
  [SlotCategory.MOUTH]: 50,
  [SlotCategory.BOTTOMS]: 60,
  [SlotCategory.TOPS]: 70,
  [SlotCategory.ONE_PIECE]: 75,
  [SlotCategory.SHOES]: 80,
  [SlotCategory.HAIR_FRONT]: 90,
  [SlotCategory.ACCESSORY]: 100,
};

export const SLOT_CATEGORY_LABELS: Record<SlotCategory, string> = {
  [SlotCategory.BACKGROUND]: 'はいけい',
  [SlotCategory.HAIR_BACK]: 'うしろがみ',
  [SlotCategory.BASE_BODY]: 'からだ',
  [SlotCategory.EYES]: 'め',
  [SlotCategory.MOUTH]: 'くち・チーク',
  [SlotCategory.BOTTOMS]: 'ボトムス',
  [SlotCategory.TOPS]: 'トップス',
  [SlotCategory.ONE_PIECE]: 'ワンピース',
  [SlotCategory.SHOES]: 'くつ',
  [SlotCategory.HAIR_FRONT]: 'まえがみ',
  [SlotCategory.ACCESSORY]: 'アクセサリー',
};

export function getSlotZIndex(category: SlotCategory): number {
  return DEFAULT_SLOT_Z_INDEX[category];
}

export function isClothingSlot(category: SlotCategory): boolean {
  return (
    category === SlotCategory.TOPS ||
    category === SlotCategory.BOTTOMS ||
    category === SlotCategory.ONE_PIECE ||
    category === SlotCategory.SHOES ||
    category === SlotCategory.ACCESSORY
  );
}
