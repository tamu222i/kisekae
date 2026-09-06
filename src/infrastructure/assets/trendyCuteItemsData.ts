import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export const TRENDY_CUTE_ITEMS: readonly Item[] = [
  // =========================================================================
  // 1. プリキュア風（わんだふるぷりきゅあ / ひろがるスカイ！）- 6点
  // =========================================================================
  new Item({
    id: 'dress_trendy_precure_wonderful',
    name: 'わんだふるドッグフリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Precure Wonderful: Pink Dog Ribbon Frill Dress -->
      <!-- Bodice -->
      <path d="M 130 174 C 122 186 122 205 122 230 L 178 230 C 178 205 178 186 170 174 Z" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
      <!-- Collar & Heart Brooch -->
      <path d="M 135 172 Q 150 185 165 172 L 160 190 Q 150 196 140 190 Z" fill="#fb7185"/>
      <circle cx="150" cy="192" r="5" fill="#facc15" stroke="#e11d48" stroke-width="1"/>
      <path d="M 150 190 C 147 187 144 191 150 196 C 156 191 153 187 150 190 Z" fill="#e11d48"/>
      <!-- Big Pink Waist Bow -->
      <path d="M 150 228 C 138 218 128 226 136 238 C 142 242 148 234 150 228 Z" fill="#f43f5e"/>
      <path d="M 150 228 C 162 218 172 226 164 238 C 158 242 152 234 150 228 Z" fill="#f43f5e"/>
      <circle cx="150" cy="228" r="4.5" fill="#ffe4e6"/>
      <!-- Tiered Frill Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 188 262 Q 150 274 112 262 Z" fill="#fda4af"/>
      <path d="M 112 262 Q 150 274 188 262 L 194 286 Q 150 298 106 286 Z" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5"/>
      <!-- Gold Ribbon Trails -->
      <path d="M 140 236 Q 130 260 126 280" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M 160 236 Q 170 260 174 280" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <!-- Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#fff1f2" stroke="#fda4af" stroke-width="1.2"/>
      <circle cx="182" cy="180" r="9" fill="#fff1f2" stroke="#fda4af" stroke-width="1.2"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_precure_friendy',
    name: 'フレンディエプロンリボンドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Precure Friendy: Mint & Pastel Pink Apron Dress -->
      <!-- Base dress -->
      <path d="M 128 175 L 122 230 L 178 230 L 172 175 Z" fill="#a7f3d0"/>
      <!-- White Frill Apron -->
      <path d="M 134 178 L 130 230 L 170 230 L 166 178 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Pink Cross Straps -->
      <line x1="134" y1="178" x2="166" y2="230" stroke="#f472b6" stroke-width="2"/>
      <line x1="166" y1="178" x2="134" y2="230" stroke="#f472b6" stroke-width="2"/>
      <!-- Mint Green Fluffy Skirt -->
      <path d="M 120 230 Q 150 240 180 230 L 192 276 Q 150 288 108 276 Z" fill="#6ee7b7"/>
      <!-- Apron Bottom Lace -->
      <path d="M 124 230 Q 150 238 176 230 L 180 258 Q 150 266 120 258 Z" fill="#ffffff" opacity="0.9"/>
      <!-- Bow at waist -->
      <circle cx="150" cy="230" r="4.5" fill="#ec4899"/>
      <!-- Sleeves -->
      <ellipse cx="118" cy="182" rx="8" ry="7" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <ellipse cx="182" cy="182" rx="8" ry="7" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_precure_nyamy',
    name: 'ニャミーノーブルキャットドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Precure Nyamy: Royal White & Cyan Cat Frill Dress -->
      <!-- White Noble Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Cyan Royal V-Line & Gem -->
      <polygon points="140,174 160,174 150,198" fill="#38bdf8"/>
      <polygon points="150,192 153,196 150,200 147,196" fill="#e0f2fe"/>
      <!-- Elegant Tiered Petal Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 190 268 Q 150 280 110 268 Z" fill="#38bdf8"/>
      <path d="M 116 255 Q 150 268 184 255 L 188 285 Q 150 298 112 285 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Cat Silhouette Brooch on Waist -->
      <circle cx="150" cy="228" r="5" fill="#facc15"/>
      <polygon points="146,224 148,220 150,224" fill="#facc15"/>
      <polygon points="150,224 152,220 154,224" fill="#facc15"/>
      <!-- Royal Shoulder Capes -->
      <path d="M 124 174 C 110 180 108 195 116 205 C 122 195 125 185 126 176 Z" fill="#bae6fd"/>
      <path d="M 176 174 C 190 180 192 195 184 205 C 178 195 175 185 174 176 Z" fill="#bae6fd"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_precure_lilian',
    name: 'リリアンレースネットドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Precure Lilian: Emerald Ribbon Knit & Lace Dress -->
      <!-- Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <!-- Emerald Corset Lacing -->
      <line x1="144" y1="184" x2="156" y2="194" stroke="#059669" stroke-width="1.8"/>
      <line x1="156" y1="184" x2="144" y2="194" stroke="#059669" stroke-width="1.8"/>
      <line x1="144" y1="198" x2="156" y2="208" stroke="#059669" stroke-width="1.8"/>
      <line x1="156" y1="198" x2="144" y2="208" stroke="#059669" stroke-width="1.8"/>
      <line x1="144" y1="212" x2="156" y2="222" stroke="#059669" stroke-width="1.8"/>
      <line x1="156" y1="212" x2="144" y2="222" stroke="#059669" stroke-width="1.8"/>
      <!-- Layered Mint & Emerald Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 192 278 Q 150 290 108 278 Z" fill="#34d399"/>
      <path d="M 114 265 Q 150 276 186 265 L 190 286 Q 150 298 110 286 Z" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
      <!-- Sleeves -->
      <circle cx="118" cy="180" r="8" fill="#a7f3d0"/>
      <circle cx="182" cy="180" r="8" fill="#a7f3d0"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_precure_sky',
    name: 'スカイブリーズ勇者ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Precure Sky: Hero Sky Blue Cape Dress -->
      <!-- Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#0284c7" stroke="#bae6fd" stroke-width="1.5"/>
      <polygon points="144,174 156,174 150,192" fill="#ffffff"/>
      <!-- Gold Star Emblem -->
      <circle cx="150" cy="195" r="4.5" fill="#facc15"/>
      <!-- Cape flowing on back -->
      <path d="M 122 176 C 104 200 102 245 106 280 L 116 280 C 114 245 116 200 126 180 Z" fill="#38bdf8" opacity="0.85"/>
      <!-- Flared Heroine Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 194 276 Q 150 288 106 276 Z" fill="#0284c7"/>
      <!-- White Ruffle Petticoat -->
      <path d="M 108 274 Q 150 286 192 274 L 196 288 Q 150 300 104 288 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1.2"/>
      <!-- Waist Ribbon -->
      <path d="M 122 230 Q 150 238 178 230" stroke="#facc15" stroke-width="3" fill="none"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_precure_prism',
    name: 'プリズムパステルフェザーブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Precure Prism: Off-shoulder Pastel Pink Feather Blouse -->
      <!-- Main Blouse -->
      <path d="M 128 176 C 122 188 122 205 122 234 L 178 234 C 178 205 178 188 172 176 Z" fill="#fff1f2" stroke="#fbcfe8" stroke-width="1.5"/>
      <!-- Off-shoulder Feather Flounce -->
      <path d="M 112 174 C 120 166 180 166 188 174 C 182 186 118 186 112 174 Z" fill="#fce7f3" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Heart Crystal Brooch -->
      <circle cx="150" cy="180" r="5" fill="#f43f5e"/>
      <circle cx="150" cy="180" r="2" fill="#ffffff"/>
      <!-- Pastel Bows on Sleeves -->
      <circle cx="114" cy="184" r="3" fill="#ec4899"/>
      <circle cx="186" cy="184" r="3" fill="#ec4899"/>
      <!-- Hem Frill -->
      <path d="M 122 230 Q 150 238 178 230 L 180 236 Q 150 244 120 236 Z" fill="#fbcfe8"/>
    `,
  }),

  // =========================================================================
  // 2. ひみつのアイプリ風（アイドルステージ衣装）- 6点
  // =========================================================================
  new Item({
    id: 'dress_trendy_aipri_himari',
    name: 'アイプリ・スターライトブルームドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Himitsu no AiPri: Himari Starlight Bloom Dress -->
      <!-- Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#fdf2f8" stroke="#f472b6" stroke-width="1.5"/>
      <!-- Star Corset Detail -->
      <path d="M 142 174 L 158 174 L 150 196 Z" fill="#fef08a"/>
      <polygon points="150,188 152,192 156,193 153,196 154,200 150,198 146,200 147,196 144,193 148,192" fill="#e11d48"/>
      <!-- Layered Starlight Skirt with Star Petals -->
      <path d="M 122 230 Q 150 242 178 230 L 194 274 Q 150 286 106 274 Z" fill="#f472b6"/>
      <!-- Yellow Under-petticoat -->
      <path d="M 110 270 Q 150 282 190 270 L 196 288 Q 150 300 104 288 Z" fill="#fef08a" stroke="#facc15" stroke-width="1"/>
      <!-- Star sparkles on skirt -->
      <circle cx="134" cy="254" r="2.5" fill="#ffffff"/>
      <circle cx="166" cy="258" r="2.5" fill="#ffffff"/>
      <circle cx="150" cy="272" r="3" fill="#ffffff"/>
      <!-- Puff Sleeves with cuffs -->
      <circle cx="118" cy="180" r="8" fill="#fce7f3" stroke="#f472b6" stroke-width="1"/>
      <circle cx="182" cy="180" r="8" fill="#fce7f3" stroke="#f472b6" stroke-width="1"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_aipri_mitsuki',
    name: 'アイプリ・クリスタルムーンアイドルワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Himitsu no AiPri: Mitsuki Crystal Moon Dress -->
      <!-- Indigo & Lavender Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
      <!-- Crescent Moon Brooch -->
      <path d="M 148 184 A 6 6 0 1 0 154 196 A 5 5 0 1 1 148 184 Z" fill="#fef08a"/>
      <!-- Midnight Gradient Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 192 276 Q 150 288 108 276 Z" fill="#4338ca"/>
      <!-- Organza Lavender Ruffle -->
      <path d="M 110 272 Q 150 284 190 272 L 194 288 Q 150 300 106 288 Z" fill="#c7d2fe" stroke="#818cf8" stroke-width="1.2"/>
      <!-- Moon Dust Sparkles -->
      <polygon points="132,250 134,254 138,255 134,257 132,261 130,257 126,255 130,254" fill="#fef08a"/>
      <polygon points="168,252 170,256 174,257 170,259 168,263 166,259 162,257 166,256" fill="#fef08a"/>
      <!-- Elegant Frill Sleeves -->
      <ellipse cx="118" cy="180" rx="7" ry="9" fill="#c7d2fe"/>
      <ellipse cx="182" cy="180" rx="7" ry="9" fill="#c7d2fe"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_aipri_buzz',
    name: 'バズリウムスパークルオーラワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Buzzrium Aurora Hologram Idol Dress -->
      <defs>
        <linearGradient id="auroraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f472b6"/>
          <stop offset="35%" stop-color="#c084fc"/>
          <stop offset="70%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#fde047"/>
        </linearGradient>
      </defs>
      <!-- Rainbow Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="url(#auroraGrad)" opacity="0.9"/>
      <!-- Hologram Heart Harness -->
      <path d="M 136 176 L 150 200 L 164 176" stroke="#ffffff" stroke-width="2" fill="none"/>
      <circle cx="150" cy="200" r="5" fill="#ffffff" stroke="#ec4899" stroke-width="1.5"/>
      <!-- Glowing Multi-tier Skirt -->
      <path d="M 122 230 Q 150 242 178 230 L 194 278 Q 150 292 106 278 Z" fill="url(#auroraGrad)"/>
      <path d="M 108 274 Q 150 288 192 274 L 198 292 Q 150 304 102 292 Z" fill="#ffffff" opacity="0.8"/>
      <!-- Shimmer Wing Shoulder Straps -->
      <path d="M 124 174 Q 106 168 112 184 Q 122 186 126 178 Z" fill="#ffffff"/>
      <path d="M 176 174 Q 194 168 188 184 Q 178 186 174 178 Z" fill="#ffffff"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_aipri_check',
    name: 'アイプリ・リボンチェックステージブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- AiPri: Pink Plaid Stage Vest & Blouse -->
      <!-- Blouse Base -->
      <path d="M 130 174 L 122 232 L 178 232 L 170 174 Z" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.5"/>
      <!-- Pink Plaid Vest -->
      <path d="M 130 174 L 124 230 L 146 230 L 140 186 L 160 186 L 154 230 L 176 230 L 170 174 Z" fill="#fb7185"/>
      <line x1="126" y1="200" x2="174" y2="200" stroke="#fda4af" stroke-width="1.5"/>
      <line x1="126" y1="215" x2="174" y2="215" stroke="#fda4af" stroke-width="1.5"/>
      <!-- Golden Tie & Star -->
      <rect x="147" y="186" width="6" height="24" rx="2" fill="#facc15"/>
      <!-- Puff Sleeves -->
      <circle cx="118" cy="180" r="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <circle cx="182" cy="180" r="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_aipri_sailor',
    name: 'アイプリ・シャイニーセーラートップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- AiPri: Lavender Sailor Idol Top -->
      <path d="M 130 174 L 122 232 L 178 232 L 170 174 Z" fill="#ffffff" stroke="#e0e7ff" stroke-width="1.5"/>
      <!-- Lavender Sailor Collar -->
      <path d="M 124 170 L 142 202 L 158 202 L 176 170 L 168 165 L 150 176 L 132 165 Z" fill="#a5b4fc"/>
      <!-- Big Sparkle Lavender Bow -->
      <path d="M 150 200 C 138 190 128 198 136 210 C 142 214 148 204 150 200 Z" fill="#6366f1"/>
      <path d="M 150 200 C 162 190 172 198 164 210 C 158 214 152 204 150 200 Z" fill="#6366f1"/>
      <circle cx="150" cy="200" r="3.5" fill="#fef08a"/>
      <!-- Striped Cuffs -->
      <rect x="112" y="184" width="10" height="4" rx="1" fill="#818cf8"/>
      <rect x="178" y="184" width="10" height="4" rx="1" fill="#818cf8"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_aipri_rock',
    name: 'アイプリ・ネオロックグリッターベスト',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- AiPri: Black & Neon Pink Rock Vest Top -->
      <path d="M 130 174 L 122 232 L 178 232 L 170 174 Z" fill="#18181b"/>
      <!-- Neon Pink Lapels -->
      <polygon points="130,174 146,198 134,228 124,228" fill="#f43f5e"/>
      <polygon points="170,174 154,198 166,228 176,228" fill="#f43f5e"/>
      <!-- Chain Detail -->
      <path d="M 136 212 Q 150 220 164 212" stroke="#e4e4e7" stroke-width="1.8" fill="none"/>
      <!-- Inner White Top -->
      <polygon points="144,174 156,174 150,190" fill="#ffffff"/>
      <!-- Studded Belt at Bottom -->
      <rect x="122" y="226" width="56" height="6" fill="#27272a"/>
      <circle cx="132" cy="229" r="1.5" fill="#fafafa"/>
      <circle cx="144" cy="229" r="1.5" fill="#fafafa"/>
      <circle cx="156" cy="229" r="1.5" fill="#fafafa"/>
      <circle cx="168" cy="229" r="1.5" fill="#fafafa"/>
    `,
  }),

  // =========================================================================
  // 3. ちいかわ風（ほわほわマスコット系）- 6点
  // =========================================================================
  new Item({
    id: 'dress_trendy_chiikawa_fluffy',
    name: 'ちいかわ風ほわほわ白くまワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Chiikawa: Pure White Fluffy Bear Dress -->
      <!-- Fluffy White Boa Bodice & Skirt -->
      <path d="M 126 174 C 114 195 110 230 110 270 Q 150 286 190 270 C 190 230 186 195 174 174 Z" fill="#ffffff" stroke="#f1f5f9" stroke-width="2"/>
      <!-- Soft Pink Cheek Pockets -->
      <ellipse cx="130" cy="242" rx="9" ry="7" fill="#fbcfe8" opacity="0.8"/>
      <ellipse cx="170" cy="242" rx="9" ry="7" fill="#fbcfe8" opacity="0.8"/>
      <!-- Cute Smiling Pocket Faces -->
      <circle cx="127" cy="241" r="1.2" fill="#475569"/>
      <circle cx="133" cy="241" r="1.2" fill="#475569"/>
      <circle cx="167" cy="241" r="1.2" fill="#475569"/>
      <circle cx="173" cy="241" r="1.2" fill="#475569"/>
      <!-- Round Furry Bear Sleeves -->
      <circle cx="116" cy="184" r="11" fill="#ffffff" stroke="#f1f5f9" stroke-width="1.5"/>
      <circle cx="184" cy="184" r="11" fill="#ffffff" stroke="#f1f5f9" stroke-width="1.5"/>
      <!-- Pink Collar Bow -->
      <circle cx="150" cy="180" r="3.5" fill="#f43f5e"/>
      <polygon points="144,178 150,180 144,184" fill="#f43f5e"/>
      <polygon points="156,178 150,180 156,184" fill="#f43f5e"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_hachiware_sweater',
    name: 'ハチワレ風ブルーもこもこセーター',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Hachiware: Blue Pattern Fluffy Sweater -->
      <!-- White Body Base -->
      <path d="M 126 174 C 120 190 120 210 120 235 L 180 235 C 180 210 180 190 174 174 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Blue Hachiware V-Pattern on Chest -->
      <path d="M 126 174 L 140 174 L 150 196 L 160 174 L 174 174 L 180 194 L 120 194 Z" fill="#60a5fa"/>
      <!-- Camera Strap Detail -->
      <path d="M 128 174 L 172 234" stroke="#d97706" stroke-width="2.5"/>
      <rect x="160" y="218" width="14" height="10" rx="2" fill="#3b82f6"/>
      <circle cx="167" cy="223" r="3" fill="#ffffff"/>
      <!-- Sleeves with Blue Cuffs -->
      <path d="M 124 178 C 114 195 110 215 112 230 L 120 230 C 122 215 124 195 130 180 Z" fill="#ffffff"/>
      <rect x="110" y="226" width="10" height="5" rx="1" fill="#60a5fa"/>
      <path d="M 176 178 C 186 195 190 215 188 230 L 180 230 C 178 215 176 195 170 180 Z" fill="#ffffff"/>
      <rect x="180" y="226" width="10" height="5" rx="1" fill="#60a5fa"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_usagi_hoodie',
    name: 'うさぎ風ヤハッ！うさ耳イエローパーカー',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Usagi: Yellow Fluffy Hoodie -->
      <path d="M 124 174 C 118 190 118 212 118 236 L 182 236 C 182 212 182 190 176 174 Z" fill="#fde047" stroke="#eab308" stroke-width="1.5"/>
      <!-- Kangaroo Front Pocket -->
      <path d="M 132 212 Q 150 220 168 212 L 172 234 L 128 234 Z" fill="#facc15"/>
      <!-- Hood Collar Ruffle -->
      <ellipse cx="150" cy="174" rx="22" ry="7" fill="#fef08a" stroke="#eab308" stroke-width="1"/>
      <!-- White Sleeves -->
      <path d="M 124 178 C 112 196 110 218 112 232 L 120 232 C 122 218 124 196 130 180 Z" fill="#fde047"/>
      <path d="M 176 178 C 188 196 190 218 188 232 L 180 232 C 178 218 176 196 170 180 Z" fill="#fde047"/>
      <!-- "Yaha!" Sparkle patch on chest -->
      <polygon points="142,192 144,196 148,197 145,200 146,204 142,202 138,204 139,200 136,197 140,196" fill="#ea580c"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_momonga_frill',
    name: 'モモンガ風ふわふわしっぽドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Momonga: Sky Blue & Huge Fluffy Tail Dress -->
      <!-- Giant Fluffy Tail on Back Left -->
      <path d="M 116 230 C 90 210 80 250 86 280 C 94 310 120 295 120 270 Z" fill="#bae6fd" stroke="#7dd3fc" stroke-width="2"/>
      <ellipse cx="98" cy="265" rx="12" ry="18" fill="#e0f2fe"/>
      <!-- Soft Blue Bodice -->
      <path d="M 128 175 L 120 230 L 180 230 L 172 175 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Tiered White Ruffle Skirt -->
      <path d="M 120 230 Q 150 240 180 230 L 192 276 Q 150 288 108 276 Z" fill="#ffffff" stroke="#bae6fd" stroke-width="1.5"/>
      <path d="M 112 274 Q 150 286 188 274 L 192 288 Q 150 298 108 288 Z" fill="#bae6fd"/>
      <!-- Cute Pink Ribbons on Shoulders -->
      <circle cx="124" cy="176" r="3" fill="#f43f5e"/>
      <circle cx="176" cy="176" r="3" fill="#f43f5e"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_kurimanju_cafe',
    name: 'くりまんじゅう風レトロカフェエプロン',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Kurimanju: Retro Chestnut Cafe Apron Top -->
      <!-- Brown Knit Base -->
      <path d="M 128 174 L 122 234 L 178 234 L 172 174 Z" fill="#78350f"/>
      <!-- Beige Cafe Apron -->
      <path d="M 134 178 L 128 234 L 172 234 L 166 178 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
      <!-- Small Tea Mug Embroidery -->
      <rect x="146" y="196" width="8" height="8" rx="1.5" fill="#b45309"/>
      <path d="M 154 198 Q 157 200 154 202" stroke="#b45309" stroke-width="1" fill="none"/>
      <!-- Checkered Necktie -->
      <polygon points="147,178 153,178 150,192" fill="#92400e"/>
      <!-- Flannel Checkered Sleeves -->
      <path d="M 126 178 C 116 195 112 215 114 230 L 122 230 Z" fill="#b45309"/>
      <path d="M 174 178 C 184 195 188 215 186 230 L 178 230 Z" fill="#b45309"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_shisa_aloha',
    name: 'シーサー風はいさいフラワーワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Shisa: Tropical Orange Aloha Sun Dress -->
      <!-- Orange & Yellow Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#fb923c" stroke="#f97316" stroke-width="1.5"/>
      <!-- Big Hibiscus Floral Applique -->
      <circle cx="150" cy="195" r="7" fill="#ef4444"/>
      <circle cx="150" cy="195" r="2.5" fill="#fef08a"/>
      <!-- Sun Yellow Flared Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 194 278 Q 150 290 106 278 Z" fill="#fde047"/>
      <!-- Tropical Red Frill Hem -->
      <path d="M 108 274 Q 150 286 192 274 L 196 286 Q 150 298 104 286 Z" fill="#f87171"/>
      <!-- Halter Neck Ties -->
      <path d="M 134 174 Q 150 162 166 174" stroke="#f97316" stroke-width="2.5" fill="none"/>
    `,
  }),

  // =========================================================================
  // 4. すみっコぐらし風（ほっこりパステル・ぬくぬく）- 6点
  // =========================================================================
  new Item({
    id: 'dress_trendy_sumikko_shirokuma',
    name: 'しろくま風あったかぬくぬくボアドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Sumikko Shirokuma: Warm Polar Boa Dress with Furoshiki Bag -->
      <!-- Cozy White Fleece Dress -->
      <path d="M 126 174 C 114 195 110 230 110 274 Q 150 290 190 274 C 190 230 186 195 174 174 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <!-- Cross-body Pink Polka Furoshiki Bag -->
      <path d="M 124 178 L 172 242" stroke="#fda4af" stroke-width="2.5"/>
      <circle cx="170" cy="242" r="9" fill="#f43f5e"/>
      <circle cx="168" cy="240" r="1.5" fill="#ffffff"/>
      <circle cx="173" cy="244" r="1.5" fill="#ffffff"/>
      <circle cx="167" cy="245" r="1.5" fill="#ffffff"/>
      <!-- Soft Round Collar -->
      <ellipse cx="150" cy="174" rx="16" ry="6" fill="#f1f5f9"/>
      <!-- Sleeves -->
      <circle cx="116" cy="184" r="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="184" cy="184" r="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_sumikko_penguin',
    name: 'ぺんぎん？風きゅうりグリーンスウェット',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Sumikko Penguin?: Pastel Lime Green Sweatshirt with Cucumber Patch -->
      <path d="M 126 174 C 118 190 118 212 118 236 L 182 236 C 182 212 182 190 174 174 Z" fill="#bbf7d0" stroke="#86efac" stroke-width="1.5"/>
      <!-- White Belly Patch -->
      <ellipse cx="150" cy="210" rx="18" ry="16" fill="#ffffff" opacity="0.9"/>
      <!-- Cucumber Patch on Chest -->
      <path d="M 136 192 Q 146 186 156 194" stroke="#16a34a" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <!-- Sleeves with Pastel Yellow Cuffs -->
      <path d="M 124 178 C 112 195 110 216 112 230 L 120 230 Z" fill="#bbf7d0"/>
      <rect x="110" y="226" width="10" height="5" rx="1" fill="#fef08a"/>
      <path d="M 176 178 C 188 195 190 216 188 230 L 180 230 Z" fill="#bbf7d0"/>
      <rect x="180" y="226" width="10" height="5" rx="1" fill="#fef08a"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_sumikko_tonkatsu',
    name: 'とんかつ＆えびふらい仲良しケープワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Sumikko Tonkatsu & Ebifurai: Crispy Cape Dress -->
      <!-- Crispy Golden-Brown Dress -->
      <path d="M 126 174 C 116 196 112 230 112 274 Q 150 288 188 274 C 188 230 184 196 174 174 Z" fill="#d97706" stroke="#b45309" stroke-width="1.5"/>
      <!-- Pink Nose/Meat Center Patch -->
      <ellipse cx="150" cy="225" rx="10" ry="8" fill="#fda4af"/>
      <!-- Ebifurai Red Tail Ribbon Brooch -->
      <path d="M 150 178 L 144 170 L 150 174 L 156 170 Z" fill="#ef4444"/>
      <circle cx="150" cy="178" r="3" fill="#fef08a"/>
      <!-- Fluffy Golden Hem -->
      <path d="M 112 270 Q 150 282 188 270 L 192 284 Q 150 296 108 284 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
      <!-- Rounded Sleeves -->
      <circle cx="116" cy="184" r="9" fill="#d97706"/>
      <circle cx="184" cy="184" r="9" fill="#d97706"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_sumikko_neko',
    name: 'ねこ風ぽかぽかキャットセーター',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Sumikko Neko: Calico Cream Cat Sweater -->
      <path d="M 126 174 C 118 190 118 212 118 236 L 182 236 C 182 212 182 190 174 174 Z" fill="#fef3c7" stroke="#fde047" stroke-width="1.5"/>
      <!-- Calico Brown & Grey Shoulder Patches -->
      <path d="M 126 174 C 120 185 130 195 136 186 Z" fill="#b45309"/>
      <path d="M 174 174 C 180 185 170 195 164 186 Z" fill="#9ca3af"/>
      <!-- Fish Bone Charm Necklace -->
      <path d="M 140 182 Q 150 192 160 182" stroke="#d97706" stroke-width="1.5" fill="none"/>
      <ellipse cx="150" cy="192" rx="4" ry="2" fill="#78350f"/>
      <line x1="147" y1="190" x2="147" y2="194" stroke="#78350f" stroke-width="1"/>
      <line x1="153" y1="190" x2="153" y2="194" stroke="#78350f" stroke-width="1"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_sumikko_tokage',
    name: 'とかげ風みずいろきょうりゅうワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Sumikko Tokage: Pastel Blue Dinosaur Dress -->
      <!-- Light Blue Dress Body -->
      <path d="M 126 174 C 114 195 110 230 110 274 Q 150 288 190 274 C 190 230 186 195 174 174 Z" fill="#7dd3fc" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Cream White Belly Oval -->
      <ellipse cx="150" cy="235" rx="20" ry="24" fill="#ffffff" opacity="0.9"/>
      <!-- Dinosaur Dorsal Spikes on Back -->
      <polygon points="106,200 100,205 107,212" fill="#38bdf8"/>
      <polygon points="106,218 100,223 107,230" fill="#38bdf8"/>
      <polygon points="106,236 100,241 107,248" fill="#38bdf8"/>
      <!-- Little Fish Pin on Collar -->
      <ellipse cx="150" cy="180" rx="5" ry="3" fill="#ec4899"/>
      <polygon points="154,180 158,177 158,183" fill="#ec4899"/>
      <!-- Sleeves -->
      <circle cx="116" cy="182" r="9" fill="#7dd3fc"/>
      <circle cx="184" cy="182" r="9" fill="#7dd3fc"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_sumikko_tapioca',
    name: 'カラフルたぴおかパステルカーデ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Sumikko Tapioca: Pastel Cardigan with 3 Tapioca Buttons -->
      <path d="M 126 174 L 120 234 L 180 234 L 174 174 Z" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.5"/>
      <!-- V-Neck Opening -->
      <polygon points="144,174 156,174 150,192" fill="#ffffff"/>
      <!-- 3 Cute Tapioca Buttons: Pink, Yellow, Sky Blue -->
      <circle cx="150" cy="198" r="4" fill="#f472b6"/>
      <circle cx="149" cy="197" r="0.8" fill="#18181b"/>
      <circle cx="151" cy="197" r="0.8" fill="#18181b"/>
      <circle cx="150" cy="210" r="4" fill="#fde047"/>
      <circle cx="149" cy="209" r="0.8" fill="#18181b"/>
      <circle cx="151" cy="209" r="0.8" fill="#18181b"/>
      <circle cx="150" cy="222" r="4" fill="#38bdf8"/>
      <circle cx="149" cy="221" r="0.8" fill="#18181b"/>
      <circle cx="151" cy="221" r="0.8" fill="#18181b"/>
      <!-- Sleeves -->
      <path d="M 124 178 C 112 196 110 216 112 230 L 120 230 Z" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1"/>
      <path d="M 176 178 C 188 196 190 216 188 230 L 180 230 Z" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1"/>
    `,
  }),

  // =========================================================================
  // 5. 名探偵・ミステリー風（コナン・怪盗・レトロ喫茶）- 4点
  // =========================================================================
  new Item({
    id: 'dress_trendy_detective_cape',
    name: '名探偵チェックケープマントワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Detective Conan / Sherlock: British Plaid Cape Dress -->
      <!-- Beige Plaid Dress Body -->
      <path d="M 128 174 L 122 230 L 178 230 L 172 174 Z" fill="#e7e5e4" stroke="#a8a29e" stroke-width="1.5"/>
      <!-- Plaid Capelet on Shoulders -->
      <path d="M 114 174 C 110 200 130 208 150 208 C 170 208 190 200 186 174 Z" fill="#d6d3d1" stroke="#78716c" stroke-width="1.5"/>
      <line x1="120" y1="188" x2="180" y2="188" stroke="#78350f" stroke-width="1.2"/>
      <line x1="124" y1="198" x2="176" y2="198" stroke="#78350f" stroke-width="1.2"/>
      <!-- Magnifying Glass Charm -->
      <circle cx="150" cy="204" r="4.5" fill="none" stroke="#ca8a04" stroke-width="1.5"/>
      <line x1="153" y1="207" x2="157" y2="212" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Pleated Plaid Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 190 274 Q 150 286 110 274 Z" fill="#e7e5e4" stroke="#a8a29e" stroke-width="1.5"/>
      <line x1="130" y1="235" x2="124" y2="274" stroke="#a8a29e" stroke-width="1.5"/>
      <line x1="150" y1="238" x2="150" y2="276" stroke="#a8a29e" stroke-width="1.5"/>
      <line x1="170" y1="235" x2="176" y2="274" stroke="#a8a29e" stroke-width="1.5"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_detective_kid',
    name: '月下の白き怪盗ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Kaitou Kid: Phantom Thief Pure White Tuxedo Dress -->
      <!-- White Tuxedo Bodice -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Blue Dress Shirt & Red Necktie -->
      <polygon points="144,174 156,174 150,192" fill="#38bdf8"/>
      <polygon points="148,184 152,184 150,204" fill="#dc2626"/>
      <!-- Left Side Monocle Chain Silhouette -->
      <path d="M 144 176 Q 136 190 142 206" stroke="#facc15" stroke-width="1.2" fill="none"/>
      <!-- Asymmetric Flowing White Cape -->
      <path d="M 124 176 C 104 200 98 250 102 284 L 114 284 C 112 250 114 200 126 180 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Pure White Tailored Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 192 276 Q 150 288 108 276 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_detective_bow',
    name: '名探偵の蝶ネクタイ付きブレザー',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Detective Conan: Royal Blue Blazer with Red Voice Changer Bowtie -->
      <!-- Royal Blue Blazer -->
      <path d="M 128 174 L 120 234 L 180 234 L 172 174 Z" fill="#1d4ed8" stroke="#1e40af" stroke-width="1.5"/>
      <!-- White Shirt V-Neck -->
      <polygon points="142,174 158,174 150,206" fill="#ffffff"/>
      <!-- Red Voice-Changer Bowtie -->
      <path d="M 150 186 C 140 176 132 184 138 196 C 142 200 148 190 150 186 Z" fill="#dc2626"/>
      <path d="M 150 186 C 160 176 168 184 162 196 C 158 200 152 190 150 186 Z" fill="#dc2626"/>
      <circle cx="150" cy="186" r="3.5" fill="#b91c1c"/>
      <!-- 2 Gold Buttons -->
      <circle cx="150" cy="214" r="2.5" fill="#facc15"/>
      <circle cx="150" cy="226" r="2.5" fill="#facc15"/>
    `,
  }),

  new Item({
    id: 'dress_trendy_detective_poirot',
    name: '喫茶ポアロ風レトロカフェワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Cafe Poirot: Retro Brick Red & White Cafe Dress -->
      <!-- White Puff Blouse -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#ffffff"/>
      <!-- Brick Red Pinafore Apron -->
      <path d="M 134 178 L 130 230 L 170 230 L 166 178 Z" fill="#991b1b"/>
      <!-- Coffee Bean Embroidered Pocket -->
      <rect x="144" y="198" width="12" height="12" rx="2" fill="#7f1d1d"/>
      <ellipse cx="150" cy="204" rx="3" ry="2" fill="#fef08a"/>
      <!-- Brick Red Flared Skirt -->
      <path d="M 122 230 Q 150 240 178 230 L 192 276 Q 150 288 108 276 Z" fill="#991b1b"/>
      <!-- White Lace Apron Over-skirt -->
      <path d="M 128 230 Q 150 238 172 230 L 176 256 Q 150 264 124 256 Z" fill="#ffffff" opacity="0.95"/>
    `,
  }),

  // =========================================================================
  // 6. トレンドかわいい（天使界隈・地雷系ドーリー）- 2点
  // =========================================================================
  new Item({
    id: 'dress_trendy_yumekawa_dolly',
    name: '天使界隈オーガンジードーリーワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Tenshi Kaiwai: Sheer Sky Blue & White Dolly Dress -->
      <!-- Sheer Bodice with Cross Ribbons -->
      <path d="M 130 174 L 122 230 L 178 230 L 170 174 Z" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
      <line x1="140" y1="182" x2="160" y2="202" stroke="#38bdf8" stroke-width="1.8"/>
      <line x1="160" y1="182" x2="140" y2="202" stroke="#38bdf8" stroke-width="1.8"/>
      <!-- Angel Wings Brooch -->
      <path d="M 150 180 Q 140 172 136 182 Q 146 186 150 184 Z" fill="#ffffff"/>
      <path d="M 150 180 Q 160 172 164 182 Q 154 186 150 184 Z" fill="#ffffff"/>
      <!-- Multi-tier Organza Ruffle Skirt -->
      <path d="M 122 230 Q 150 242 178 230 L 194 274 Q 150 288 106 274 Z" fill="#e0f2fe" opacity="0.95"/>
      <path d="M 110 270 Q 150 284 190 270 L 198 290 Q 150 304 102 290 Z" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.2"/>
      <!-- Sheer Shoulder Ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="8" fill="#f0f9ff" opacity="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="8" fill="#f0f9ff" opacity="0.8"/>
    `,
  }),

  new Item({
    id: 'tops_trendy_jirai_frill',
    name: '地雷系リボンフリルブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Jirai-kei: Black Lace & Dusty Pink Ribbon Frill Blouse -->
      <!-- Dusty Pink Blouse -->
      <path d="M 128 174 L 122 232 L 178 232 L 172 174 Z" fill="#fce7f3" stroke="#f472b6" stroke-width="1.5"/>
      <!-- Black Lace Front Bib -->
      <path d="M 136 174 L 132 216 L 168 216 L 164 174 Z" fill="#18181b"/>
      <!-- Huge Black Ribbon with Cross Charm -->
      <path d="M 150 186 C 138 176 128 184 136 196 C 142 200 148 190 150 186 Z" fill="#09090b"/>
      <path d="M 150 186 C 162 176 172 184 164 196 C 158 200 152 190 150 186 Z" fill="#09090b"/>
      <!-- Silver Cross Charm -->
      <line x1="150" y1="190" x2="150" y2="204" stroke="#e4e4e7" stroke-width="1.8"/>
      <line x1="146" y1="194" x2="154" y2="194" stroke="#e4e4e7" stroke-width="1.8"/>
      <!-- Frilly Sleeves with Black Ribbon Cuffs -->
      <ellipse cx="118" cy="182" rx="8" ry="7" fill="#fce7f3"/>
      <rect x="110" y="222" width="10" height="4" rx="1" fill="#18181b"/>
      <ellipse cx="182" cy="182" rx="8" ry="7" fill="#fce7f3"/>
      <rect x="180" y="222" width="10" height="4" rx="1" fill="#18181b"/>
    `,
  }),
];
