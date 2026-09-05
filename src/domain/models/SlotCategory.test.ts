import { describe, it, expect } from 'vitest';
import {
  SlotCategory,
  DEFAULT_SLOT_Z_INDEX,
  SLOT_CATEGORY_LABELS,
  getSlotZIndex,
  isClothingSlot,
} from './SlotCategory';

describe('SlotCategory', () => {
  it('defines all required categories for dress-up layers', () => {
    expect(SlotCategory.BACKGROUND).toBe('background');
    expect(SlotCategory.HAIR_BACK).toBe('hair_back');
    expect(SlotCategory.BASE_BODY).toBe('base_body');
    expect(SlotCategory.EYES).toBe('eyes');
    expect(SlotCategory.MOUTH).toBe('mouth');
    expect(SlotCategory.BOTTOMS).toBe('bottoms');
    expect(SlotCategory.TOPS).toBe('tops');
    expect(SlotCategory.ONE_PIECE).toBe('one_piece');
    expect(SlotCategory.SHOES).toBe('shoes');
    expect(SlotCategory.HAIR_FRONT).toBe('hair_front');
    expect(SlotCategory.ACCESSORY).toBe('accessory');
  });

  it('assigns strictly ascending default Z-indices preserving proper visual layering', () => {
    expect(getSlotZIndex(SlotCategory.BACKGROUND)).toBeLessThan(getSlotZIndex(SlotCategory.HAIR_BACK));
    expect(getSlotZIndex(SlotCategory.HAIR_BACK)).toBeLessThan(getSlotZIndex(SlotCategory.BASE_BODY));
    expect(getSlotZIndex(SlotCategory.BASE_BODY)).toBeLessThan(getSlotZIndex(SlotCategory.EYES));
    expect(getSlotZIndex(SlotCategory.EYES)).toBeLessThan(getSlotZIndex(SlotCategory.BOTTOMS));
    expect(getSlotZIndex(SlotCategory.BOTTOMS)).toBeLessThan(getSlotZIndex(SlotCategory.TOPS));
    expect(getSlotZIndex(SlotCategory.TOPS)).toBeLessThan(getSlotZIndex(SlotCategory.HAIR_FRONT));
    expect(getSlotZIndex(SlotCategory.HAIR_FRONT)).toBeLessThan(getSlotZIndex(SlotCategory.ACCESSORY));
  });

  it('provides friendly Japanese display labels for each category', () => {
    expect(SLOT_CATEGORY_LABELS[SlotCategory.HAIR_FRONT]).toBe('まえがみ');
    expect(SLOT_CATEGORY_LABELS[SlotCategory.TOPS]).toBe('トップス');
    expect(SLOT_CATEGORY_LABELS[SlotCategory.ONE_PIECE]).toBe('ワンピース');
  });

  it('correctly identifies clothing vs body/face slots', () => {
    expect(isClothingSlot(SlotCategory.TOPS)).toBe(true);
    expect(isClothingSlot(SlotCategory.BOTTOMS)).toBe(true);
    expect(isClothingSlot(SlotCategory.ONE_PIECE)).toBe(true);
    expect(isClothingSlot(SlotCategory.BASE_BODY)).toBe(false);
    expect(isClothingSlot(SlotCategory.EYES)).toBe(false);
  });
});
