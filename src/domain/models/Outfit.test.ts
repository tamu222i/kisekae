import { describe, it, expect, beforeEach } from 'vitest';
import { Outfit } from './Outfit';
import { Item } from './Item';
import { SlotCategory } from './SlotCategory';

describe('Outfit Aggregate Root', () => {
  let baseBodyItem: Item;
  let hairBackItem: Item;
  let hairFrontItem: Item;
  let topsItem: Item;
  let bottomsItem: Item;
  let dressItem: Item;
  let shoesItem: Item;
  let accessoryItem: Item;

  beforeEach(() => {
    baseBodyItem = new Item({
      id: 'body_default',
      name: 'ベースボディ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="body"/>',
      isRemovable: false,
    });

    hairBackItem = new Item({
      id: 'hair_back_long',
      name: 'ロングうしろ髪',
      slotCategory: SlotCategory.HAIR_BACK,
      svgContent: '<path id="hair_back"/>',
    });

    hairFrontItem = new Item({
      id: 'hair_front_bangs',
      name: '前髪',
      slotCategory: SlotCategory.HAIR_FRONT,
      svgContent: '<path id="hair_front"/>',
    });

    topsItem = new Item({
      id: 'tops_hoodie',
      name: 'パーカー',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<path id="tops"/>',
    });

    bottomsItem = new Item({
      id: 'bottoms_skirt',
      name: 'プリーツスカート',
      slotCategory: SlotCategory.BOTTOMS,
      svgContent: '<path id="bottoms"/>',
    });

    dressItem = new Item({
      id: 'dress_gothic',
      name: 'ゴスロリワンピース',
      slotCategory: SlotCategory.ONE_PIECE,
      svgContent: '<path id="dress"/>',
      conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    });

    shoesItem = new Item({
      id: 'shoes_boots',
      name: 'ブーツ',
      slotCategory: SlotCategory.SHOES,
      svgContent: '<path id="shoes"/>',
    });

    accessoryItem = new Item({
      id: 'acc_ribbon',
      name: 'リボンカチューシャ',
      slotCategory: SlotCategory.ACCESSORY,
      svgContent: '<path id="accessory"/>',
    });
  });

  it('creates an outfit with mandatory base body', () => {
    const outfit = Outfit.create({
      baseBody: baseBodyItem,
      initialItems: [hairFrontItem, topsItem],
    });

    expect(outfit.hasItem(SlotCategory.BASE_BODY)).toBe(true);
    expect(outfit.getItem(SlotCategory.BASE_BODY)?.id).toBe(baseBodyItem.id);
    expect(outfit.getItem(SlotCategory.TOPS)?.id).toBe(topsItem.id);
    expect(outfit.getItem(SlotCategory.HAIR_FRONT)?.id).toBe(hairFrontItem.id);
  });

  it('equips a new item to an empty slot', () => {
    const outfit = Outfit.create({ baseBody: baseBodyItem });
    const updated = outfit.equip(shoesItem);

    expect(updated.getItem(SlotCategory.SHOES)?.id).toBe(shoesItem.id);
    expect(outfit.hasItem(SlotCategory.SHOES)).toBe(false); // Immutability
  });

  it('replaces an existing item in the same slot', () => {
    const outfit = Outfit.create({ baseBody: baseBodyItem, initialItems: [topsItem] });
    const newTops = new Item({
      id: 'tops_blouse',
      name: 'ブラウス',
      slotCategory: SlotCategory.TOPS,
      svgContent: '<path id="blouse"/>',
    });

    const updated = outfit.equip(newTops);
    expect(updated.getItem(SlotCategory.TOPS)?.id).toBe('tops_blouse');
  });

  it('automatically unequips conflicting slots when equipping a conflict item (e.g. dress vs tops/bottoms)', () => {
    // Start with Tops and Bottoms equipped
    const outfit = Outfit.create({
      baseBody: baseBodyItem,
      initialItems: [topsItem, bottomsItem],
    });

    expect(outfit.hasItem(SlotCategory.TOPS)).toBe(true);
    expect(outfit.hasItem(SlotCategory.BOTTOMS)).toBe(true);

    // Equip one-piece dress (which conflicts with tops and bottoms)
    const withDress = outfit.equip(dressItem);

    expect(withDress.getItem(SlotCategory.ONE_PIECE)?.id).toBe(dressItem.id);
    expect(withDress.hasItem(SlotCategory.TOPS)).toBe(false);
    expect(withDress.hasItem(SlotCategory.BOTTOMS)).toBe(false);
  });

  it('automatically unequips a conflicting item when equipping an item into its conflicted slot', () => {
    // Start with Dress equipped
    const outfit = Outfit.create({
      baseBody: baseBodyItem,
      initialItems: [dressItem],
    });

    // Wear a top -> dress should be unequipped
    const withTop = outfit.equip(topsItem);

    expect(withTop.getItem(SlotCategory.TOPS)?.id).toBe(topsItem.id);
    expect(withTop.hasItem(SlotCategory.ONE_PIECE)).toBe(false);
  });

  it('unequips an item from a removable slot', () => {
    const outfit = Outfit.create({
      baseBody: baseBodyItem,
      initialItems: [accessoryItem],
    });

    const unequipped = outfit.unequip(SlotCategory.ACCESSORY);
    expect(unequipped.hasItem(SlotCategory.ACCESSORY)).toBe(false);
  });

  it('throws an invariant error when attempting to unequip a non-removable slot (e.g. base body)', () => {
    const outfit = Outfit.create({ baseBody: baseBodyItem });

    expect(() => outfit.unequip(SlotCategory.BASE_BODY)).toThrowError(
      /cannot unequip non-removable/i
    );
  });

  it('returns equipped items sorted by z-index for rendering layers correctly', () => {
    const outfit = Outfit.create({
      baseBody: baseBodyItem,
      initialItems: [
        accessoryItem, // z: 100
        hairBackItem,  // z: 20
        topsItem,      // z: 70
        hairFrontItem, // z: 90
      ],
    });

    const sortedItems = outfit.getItemsSortedByLayer();
    const sortedCategories = sortedItems.map((item) => item.slotCategory);

    expect(sortedCategories).toEqual([
      SlotCategory.HAIR_BACK,
      SlotCategory.BASE_BODY,
      SlotCategory.TOPS,
      SlotCategory.HAIR_FRONT,
      SlotCategory.ACCESSORY,
    ]);
  });
});
