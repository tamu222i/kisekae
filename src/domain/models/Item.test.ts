import { describe, it, expect } from 'vitest';
import { Item } from './Item';
import { SlotCategory } from './SlotCategory';

describe('Item Entity', () => {
  it('creates an item with valid parameters and defaults', () => {
    const item = new Item({
      id: 'tops_tshirt_white',
      name: 'しろいTシャツ',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<path d="M..." fill="#fff"/>',
    });

    expect(item.id).toBe('tops_tshirt_white');
    expect(item.name).toBe('しろいTシャツ');
    expect(item.slotCategory).toBe(SlotCategory.TOPS);
    expect(item.zIndex).toBeGreaterThan(0);
    expect(item.isRemovable).toBe(true);
    expect(item.conflictSlots).toEqual([]);
  });

  it('throws error when id or name is blank (invariant validation)', () => {
    expect(() => new Item({
      id: '',
      name: 'テスト',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<svg/>',
    })).toThrowError(/id must not be empty/i);

    expect(() => new Item({
      id: 'valid_id',
      name: '   ',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<svg/>',
    })).toThrowError(/name must not be empty/i);
  });

  it('allows defining conflict slots for complex items like one-piece dresses', () => {
    const dress = new Item({
      id: 'dress_pink',
      name: 'ピンクワンピース',
      slotCategory: SlotCategory.ONE_PIECE,
      svgContent: '<path d="..." />',
      conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    });

    expect(dress.conflictSlots).toContain(SlotCategory.TOPS);
    expect(dress.conflictSlots).toContain(SlotCategory.BOTTOMS);
  });

  it('allows base body to be marked as not removable', () => {
    const body = new Item({
      id: 'body_default',
      name: 'からだ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path d="..." />',
      isRemovable: false,
    });

    expect(body.isRemovable).toBe(false);
  });

  it('evaluates equality based on unique entity id', () => {
    const item1 = new Item({
      id: 'item_1',
      name: 'TシャツA',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<svg/>',
    });
    const item2 = new Item({
      id: 'item_1',
      name: 'TシャツB',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<svg/>',
    });
    const item3 = new Item({
      id: 'item_2',
      name: 'TシャツA',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<svg/>',
    });

    expect(item1.equals(item2)).toBe(true);
    expect(item1.equals(item3)).toBe(false);
  });
});

