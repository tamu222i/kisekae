import { describe, it, expect } from 'vitest';
import { ALL_ITEMS, createDefaultItemRepository } from './itemsData';
import { SlotCategory } from '../../domain/models/SlotCategory';

describe('itemsData asset catalog', () => {
  it('contains valid items with non-empty SVG for all categories', () => {
    expect(ALL_ITEMS.length).toBeGreaterThan(15);

    const categories = new Set(ALL_ITEMS.map((item) => item.slotCategory));

    // Ensure all 11 categories have at least 1 item
    for (const cat of Object.values(SlotCategory)) {
      expect(categories.has(cat)).toBe(true);
    }

    for (const item of ALL_ITEMS) {
      expect(item.id.trim().length).toBeGreaterThan(0);
      expect(item.name.trim().length).toBeGreaterThan(0);
      expect(item.svgContent.trim().length).toBeGreaterThan(0);
    }
  });

  it('createDefaultItemRepository successfully finds base body and items', async () => {
    const repo = createDefaultItemRepository();
    const baseBody = await repo.getBaseBody();
    expect(baseBody.slotCategory).toBe(SlotCategory.BASE_BODY);

    const tops = await repo.getByCategory(SlotCategory.TOPS);
    expect(tops.length).toBeGreaterThan(1);
  });

  it('includes Demon Slayer inspired outfits and accessories', async () => {
    const repo = createDefaultItemRepository();
    const tanjiroHaori = await repo.getById('tops_haori_tanjiro');
    const nezukoKimono = await repo.getById('dress_kimono_nezuko');
    const shinobuHaori = await repo.getById('tops_haori_shinobu');
    const rengokuHaori = await repo.getById('tops_haori_rengoku');
    const bambooMuzzle = await repo.getById('acc_bamboo_muzzle');
    const butterflyAcc = await repo.getById('acc_butterfly_shinobu');

    expect(tanjiroHaori).toBeDefined();
    expect(nezukoKimono).toBeDefined();
    expect(shinobuHaori).toBeDefined();
    expect(rengokuHaori).toBeDefined();
    expect(bambooMuzzle).toBeDefined();
    expect(butterflyAcc).toBeDefined();
  });

  it('includes cute fantasy and magical girl costumes', async () => {
    const repo = createDefaultItemRepository();
    const magicalGirl = await repo.getById('dress_magical_girl');
    const strawberry = await repo.getById('dress_strawberry_lolita');
    const bunnyEars = await repo.getById('acc_bunny_ears');
    const angelWings = await repo.getById('acc_angel_wings');

    expect(magicalGirl).toBeDefined();
    expect(strawberry).toBeDefined();
    expect(bunnyEars).toBeDefined();
    expect(angelWings).toBeDefined();
  });

  it('includes over 20 additional ultra-cute clothes and accessories', async () => {
    const repo = createDefaultItemRepository();
    const newItems = [
      'tops_cat_sweater',
      'tops_cardigan_pastel',
      'tops_offshoulder_ribbon',
      'tops_chinese_blouse',
      'bottoms_chinese_skirt',
      'bottoms_tulle_skirt',
      'bottoms_check_pants',
      'bottoms_frill_shorts',
      'dress_princess_pastel',
      'dress_alice_blue',
      'dress_cherry_gingham',
      'dress_chinese_qipao',
      'dress_nightwear_bear',
      'dress_angel_wedding',
      'dress_school_idol',
      'dress_witch_gothic',
      'shoes_glass_slippers',
      'shoes_bear_slippers',
      'shoes_ribbon_heels',
      'shoes_mary_jane',
      'acc_tiara_sparkle',
      'acc_heart_sunglasses',
      'acc_panda_ears',
      'acc_halo_angel',
    ];

    expect(newItems.length).toBeGreaterThanOrEqual(20);

    for (const id of newItems) {
      const item = await repo.getById(id);
      expect(item, `Item ${id} should be defined in catalog`).toBeDefined();
    }
  });
});

