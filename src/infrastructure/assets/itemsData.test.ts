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

  it('includes 30 cute and stylish eyes, mouths, and backgrounds', async () => {
    const repo = createDefaultItemRepository();
    const newItems = [
      // 10 EYES
      'eyes_ruby_red',
      'eyes_violet_mystic',
      'eyes_heart_pink',
      'eyes_golden_amber',
      'eyes_droopy_puppy',
      'eyes_tsundere_cat',
      'eyes_starry_galaxy',
      'eyes_sweet_sleepy',
      'eyes_happy_closed',
      'eyes_nezuko_pink',
      // 10 MOUTH
      'mouth_pout_shy',
      'mouth_chupatto_bubble',
      'mouth_tongue_wink',
      'mouth_sparkle_teeth',
      'mouth_heart_kiss',
      'mouth_surprised_o',
      'mouth_glamour_red',
      'mouth_cat_fang',
      'mouth_freckles_smile',
      'mouth_drool_sleepy',
      // 10 BACKGROUND
      'bg_cherry_blossom',
      'bg_pastel_cloud_rainbow',
      'bg_tea_party',
      'bg_gothic_cathedral',
      'bg_cafe_terrace',
      'bg_sweet_candy_shop',
      'bg_underwater_aquarium',
      'bg_heart_pattern',
      'bg_sunset_beach',
      'bg_cyber_neon',
    ];

    expect(newItems).toHaveLength(30);

    for (const id of newItems) {
      const item = await repo.getById(id);
      expect(item, `Item ${id} should be defined in catalog`).toBeDefined();
      expect(item?.svgContent.length).toBeGreaterThan(10);
      expect(item?.name.length).toBeGreaterThan(0);
    }
  });

  it('includes exactly 100 famous anime inspired costume items', async () => {
    const { ANIME_ITEMS } = await import('./animeItemsData');
    expect(ANIME_ITEMS).toHaveLength(100);
    expect(ALL_ITEMS.length).toBe(213);

    const repo = createDefaultItemRepository();

    // Verify key iconic items across all categories
    const sampleIds = [
      // 1. One-piece / dresses
      'dress_anime_sailor_moon',
      'dress_anime_eva_unit01',
      'dress_anime_madoka_pink',
      'dress_anime_cardcaptor_pink',
      'dress_anime_kiki_navy',
      'dress_anime_eden_uniform',
      'dress_anime_thorn_princess',
      'dress_anime_frieren_robe',
      'dress_anime_bkomachi_idol',
      'dress_anime_sao_asuna',
      // 2. Tops
      'tops_anime_zenitsu_haori',
      'tops_anime_goku_orange_gi',
      'tops_anime_vegeta_armor',
      'tops_anime_luffy_red_vest',
      'tops_anime_naruto_jacket',
      'tops_anime_akatsuki_cloak',
      'tops_anime_itadori_hoodie',
      'tops_anime_scout_jacket',
      'tops_anime_deku_jumpsuit',
      'tops_anime_bocchi_track',
      // 3. Bottoms
      'bottoms_anime_luffy_denim',
      'bottoms_anime_demon_hakama',
      'bottoms_anime_scout_pants',
      'bottoms_anime_goku_pants',
      'bottoms_anime_eden_skirt',
      // 4. Shoes
      'shoes_anime_deku_sneakers',
      'shoes_anime_shinobi_sandals',
      'shoes_anime_scout_boots',
      'shoes_anime_sailor_heels',
      // 5. Accessories
      'acc_anime_straw_hat',
      'acc_anime_leaf_headband',
      'acc_anime_tanjiro_earrings',
      'acc_anime_inosuke_hood',
      'acc_anime_gojo_blindfold',
      'acc_anime_moon_tiara',
      'acc_anime_kiki_bow',
      'acc_anime_ace_hat',
      'acc_anime_anbu_mask',
      'acc_anime_anya_horns',
    ];

    for (const id of sampleIds) {
      const item = await repo.getById(id);
      expect(item, `Anime item ${id} must exist`).toBeDefined();
      expect(item?.svgContent.length).toBeGreaterThan(15);
      expect(item?.name.length).toBeGreaterThan(0);
    }

    // Verify all 100 items pass basic integrity check
    for (const animeItem of ANIME_ITEMS) {
      expect(animeItem.id.length).toBeGreaterThan(0);
      expect(animeItem.name.length).toBeGreaterThan(0);
      expect(animeItem.svgContent.length).toBeGreaterThan(10);
      expect(Object.values(SlotCategory)).toContain(animeItem.slotCategory);
    }
  });
});

