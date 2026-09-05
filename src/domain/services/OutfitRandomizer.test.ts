import { describe, it, expect, beforeEach } from 'vitest';
import { OutfitRandomizer } from './OutfitRandomizer';
import { Item } from '../models/Item';
import { SlotCategory } from '../models/SlotCategory';

describe('OutfitRandomizer Domain Service', () => {
  let catalog: Item[];
  let baseBody: Item;

  beforeEach(() => {
    baseBody = new Item({
      id: 'body_default',
      name: 'ベースボディ',
      slotCategory: SlotCategory.BASE_BODY,
      svgContent: '<path id="body"/>',
      isRemovable: false,
    });

    catalog = [
      baseBody,
      new Item({ id: 'hair_back_1', name: '黒髪ロング', slotCategory: SlotCategory.HAIR_BACK, svgContent: '<path/>' }),
      new Item({ id: 'hair_back_2', name: '金髪ショート', slotCategory: SlotCategory.HAIR_BACK, svgContent: '<path/>' }),
      new Item({ id: 'hair_front_1', name: 'ぱっつん前髪', slotCategory: SlotCategory.HAIR_FRONT, svgContent: '<path/>' }),
      new Item({ id: 'hair_front_2', name: 'サイド分け前髪', slotCategory: SlotCategory.HAIR_FRONT, svgContent: '<path/>' }),
      new Item({ id: 'eyes_1', name: 'パッチリ目', slotCategory: SlotCategory.EYES, svgContent: '<path/>' }),
      new Item({ id: 'mouth_1', name: 'にっこり', slotCategory: SlotCategory.MOUTH, svgContent: '<path/>' }),
      new Item({ id: 'tops_1', name: 'Tシャツ', slotCategory: SlotCategory.TOPS, svgContent: '<path/>' }),
      new Item({ id: 'bottoms_1', name: 'スカート', slotCategory: SlotCategory.BOTTOMS, svgContent: '<path/>' }),
      new Item({
        id: 'dress_1',
        name: 'ワンピース',
        slotCategory: SlotCategory.ONE_PIECE,
        svgContent: '<path/>',
        conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
      }),
      new Item({ id: 'shoes_1', name: 'スニーカー', slotCategory: SlotCategory.SHOES, svgContent: '<path/>' }),
      new Item({ id: 'acc_1', name: 'リボン', slotCategory: SlotCategory.ACCESSORY, svgContent: '<path/>' }),
      new Item({ id: 'bg_1', name: '青空', slotCategory: SlotCategory.BACKGROUND, svgContent: '<path/>' }),
    ];
  });

  it('generates a complete valid outfit using pseudo-random selection', () => {
    const randomizer = new OutfitRandomizer();
    const outfit = randomizer.randomize({
      catalog,
      baseBody,
      rng: () => 0.1,
    });

    expect(outfit.hasItem(SlotCategory.BASE_BODY)).toBe(true);
    expect(outfit.hasItem(SlotCategory.HAIR_FRONT)).toBe(true);
    expect(outfit.hasItem(SlotCategory.EYES)).toBe(true);
    expect(outfit.hasItem(SlotCategory.MOUTH)).toBe(true);
  });

  it('never leaves an outfit in an invalid conflicted state (either tops+bottoms or one_piece)', () => {
    const randomizer = new OutfitRandomizer();

    // Test with multiple deterministic seeds
    for (let seed = 0; seed < 1; seed += 0.15) {
      const outfit = randomizer.randomize({
        catalog,
        baseBody,
        rng: () => seed,
      });

      const hasDress = outfit.hasItem(SlotCategory.ONE_PIECE);
      const hasTops = outfit.hasItem(SlotCategory.TOPS);
      const hasBottoms = outfit.hasItem(SlotCategory.BOTTOMS);

      if (hasDress) {
        expect(hasTops).toBe(false);
        expect(hasBottoms).toBe(false);
      } else {
        expect(hasTops || hasBottoms).toBe(true);
      }
    }
  });
});
