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
    expect(ALL_ITEMS.length).toBe(343);

    const repo = createDefaultItemRepository();

    // Verify key iconic items across all categories
    const sampleIds = [
      // 1. One-piece / dresses
      'dress_anime_sailor_moon',
      'dress_anime_sailor_chibi',
      'dress_anime_madoka_pink',
      'dress_anime_cardcaptor_pink',
      'dress_anime_kiki_navy',
      'dress_anime_eden_uniform',
      'dress_anime_thorn_princess',
      'dress_anime_frieren_robe',
      'dress_anime_bkomachi_ai',
      'dress_anime_mitsuri_uniform',
      'dress_anime_rem_maid',
      // 2. Tops
      'tops_anime_nezuko_haori',
      'tops_anime_zenitsu_haori',
      'tops_anime_shinobu_haori',
      'tops_anime_kanao_cape',
      'tops_anime_tanjiro_haori',
      'tops_anime_bocchi_track',
      'tops_anime_miku_sleeveless',
      'tops_anime_kita_school',
      'tops_anime_bunny_hoodie',
      // 3. Bottoms
      'bottoms_anime_demon_hakama',
      'bottoms_anime_mitsuri_skirt',
      'bottoms_anime_bocchi_skirt',
      'bottoms_anime_miku_skirt',
      'bottoms_anime_eden_skirt',
      'bottoms_anime_rainbow_tulle',
      // 4. Shoes
      'shoes_anime_demon_zori',
      'shoes_anime_mitsuri_socks',
      'shoes_anime_sailor_heels',
      'shoes_anime_cardcaptor_boots',
      'shoes_anime_eden_loafers',
      'shoes_anime_bunny_slippers',
      // 5. Accessories
      'acc_anime_tanjiro_earrings',
      'acc_anime_nezuko_bamboo',
      'acc_anime_shinobu_butterfly',
      'acc_anime_zenitsu_chuntaro',
      'acc_anime_moon_tiara',
      'acc_anime_cardcaptor_wand',
      'acc_anime_kero_chan',
      'acc_anime_kiki_bow',
      'acc_anime_anya_horns',
      'acc_anime_ai_rabbit_clip',
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

  it('contains 30 fashionable cute one-pieces and tops (Precure, AiPri, Chiikawa, Sumikko, Detective)', async () => {
    const { TRENDY_CUTE_ITEMS } = await import('./trendyCuteItemsData');
    expect(TRENDY_CUTE_ITEMS).toHaveLength(30);

    const repo = createDefaultItemRepository();

    // Verify sample items across all requested themes
    const samples = [
      'dress_trendy_precure_wonderful',
      'dress_trendy_precure_friendy',
      'dress_trendy_precure_nyamy',
      'dress_trendy_precure_lilian',
      'dress_trendy_precure_sky',
      'tops_trendy_precure_prism',
      'dress_trendy_aipri_himari',
      'dress_trendy_aipri_mitsuki',
      'dress_trendy_aipri_buzz',
      'tops_trendy_aipri_check',
      'tops_trendy_aipri_sailor',
      'tops_trendy_aipri_rock',
      'dress_trendy_chiikawa_fluffy',
      'tops_trendy_hachiware_sweater',
      'tops_trendy_usagi_hoodie',
      'dress_trendy_momonga_frill',
      'tops_trendy_kurimanju_cafe',
      'dress_trendy_shisa_aloha',
      'dress_trendy_sumikko_shirokuma',
      'tops_trendy_sumikko_penguin',
      'dress_trendy_sumikko_tonkatsu',
      'tops_trendy_sumikko_neko',
      'dress_trendy_sumikko_tokage',
      'tops_trendy_sumikko_tapioca',
      'dress_trendy_detective_cape',
      'dress_trendy_detective_kid',
      'tops_trendy_detective_bow',
      'dress_trendy_detective_poirot',
      'dress_trendy_yumekawa_dolly',
      'tops_trendy_jirai_frill',
    ];

    for (const id of samples) {
      const item = await repo.getById(id);
      expect(item, `Item ${id} should exist in repository`).toBeDefined();
      expect(item?.svgContent.length).toBeGreaterThan(20);
      expect(item?.name.length).toBeGreaterThan(0);
      expect(
        item?.slotCategory === SlotCategory.ONE_PIECE || item?.slotCategory === SlotCategory.TOPS
      ).toBe(true);
    }

    // Verify all item IDs are distinct in the entire catalog
    const allIds = ALL_ITEMS.map((item) => item.id);
    const uniqueIds = new Set(allIds);
    expect(uniqueIds.size).toBe(allIds.length);
  });

  it('includes exactly 100 extra cute items across the 7 fewest categories, expanding catalog to 343 items', async () => {
    const repo = createDefaultItemRepository();
    expect(ALL_ITEMS.length).toBe(343);

    const hairFront = await repo.getByCategory(SlotCategory.HAIR_FRONT);
    const hairBack = await repo.getByCategory(SlotCategory.HAIR_BACK);
    const eyes = await repo.getByCategory(SlotCategory.EYES);
    const mouth = await repo.getByCategory(SlotCategory.MOUTH);
    const bg = await repo.getByCategory(SlotCategory.BACKGROUND);
    const shoes = await repo.getByCategory(SlotCategory.SHOES);
    const bottoms = await repo.getByCategory(SlotCategory.BOTTOMS);

    // Verify minimum counts reflecting the additions (+20, +20, +15, +15, +10, +10, +10)
    expect(hairFront.length).toBeGreaterThanOrEqual(26);
    expect(hairBack.length).toBeGreaterThanOrEqual(26);
    expect(eyes.length).toBeGreaterThanOrEqual(29);
    expect(mouth.length).toBeGreaterThanOrEqual(28);
    expect(bg.length).toBeGreaterThanOrEqual(25);
    expect(shoes.length).toBeGreaterThanOrEqual(31);
    expect(bottoms.length).toBeGreaterThanOrEqual(32);

    // Verify key sample IDs across all 7 categories
    const testIds = [
      'hair_front_precure_wonderful_curls',
      'hair_front_chiikawa_fluffy',
      'hair_front_aipri_himari_sparkle',
      'hair_back_precure_wonderful_twintail',
      'hair_back_hachiware_soft_bob',
      'hair_back_kimetsu_mitsuri_mega_braids',
      'eyes_precure_wonderful_amber',
      'eyes_chiikawa_tear_sparkle',
      'eyes_detective_truth_blue',
      'mouth_precure_open_happy',
      'mouth_precure_cat_smile',
      'mouth_chiikawa_wobbly_cute',
      'bg_precure_sparkle_palace',
      'bg_aipri_shining_stage',
      'bg_chiikawa_flower_field',
      'shoes_precure_wonderful_boots',
      'shoes_chiikawa_fluffy_slippers',
      'shoes_detective_oxford',
      'bottoms_precure_wonderful_skirt',
      'bottoms_chiikawa_bloomers',
      'bottoms_kimetsu_hakama_skirt',
    ];

    for (const id of testIds) {
      const item = await repo.getById(id);
      expect(item, `Item ${id} must exist`).toBeDefined();
      expect(item?.svgContent.length).toBeGreaterThan(20);
      expect(item?.name.length).toBeGreaterThan(0);
    }

    // Verify base body has cute anime styling
    const baseBody = await repo.getBaseBody();
    expect(baseBody.svgContent).toContain('bodyCheekBlush');
    expect(baseBody.svgContent).toContain('bodySkinSoftGrad');
    expect(baseBody.svgContent).toContain('camisoleGrad');
  });
});

