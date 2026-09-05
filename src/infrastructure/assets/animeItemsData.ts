import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export const ANIME_ITEMS: readonly Item[] = [
  // ==========================================
  // 1. ONE_PIECE / SUITS / DRESSES (30 items)
  // ==========================================
  new Item({
    id: 'dress_anime_sailor_moon',
    name: '月の美少女戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White Leotard -->
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Blue Sailor Collar -->
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#2563eb"/>
      <path d="M 126 172 L 140 200 M 174 172 L 160 200" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <!-- Big Red Chest Bow -->
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#dc2626"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#dc2626"/>
      <!-- Golden Brooch -->
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <circle cx="150" cy="198" r="2.2" fill="#ef4444"/>
      <!-- Golden Waist Band -->
      <path d="M 124 230 Q 150 240 176 230" stroke="#facc15" stroke-width="3" fill="none"/>
      <!-- Blue Pleated Skirt -->
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#2563eb"/>
      <path d="M 128 234 L 123 270 M 140 237 L 138 274 M 150 238 L 150 276 M 160 237 L 162 274 M 172 234 L 177 270" stroke="#1d4ed8" stroke-width="1.5"/>
      <!-- White Shoulder Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Red Back Ribbons peek -->
      <path d="M 118 245 C 108 260 110 278 116 285" stroke="#dc2626" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 182 245 C 192 260 190 278 184 285" stroke="#dc2626" stroke-width="4" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_mars',
    name: '情熱の火星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White Leotard -->
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Red Sailor Collar -->
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#b91c1c"/>
      <!-- Purple Chest Bow -->
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#7e22ce"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#7e22ce"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <!-- Red Pleated Skirt -->
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#b91c1c"/>
      <path d="M 128 234 L 123 270 M 140 237 L 138 274 M 150 238 L 150 276 M 160 237 L 162 274 M 172 234 L 177 270" stroke="#991b1b" stroke-width="1.5"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_mercury',
    name: '知性の水星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White Leotard -->
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Cyan Sailor Collar -->
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#0284c7"/>
      <!-- Sky Blue Chest Bow -->
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#38bdf8"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#38bdf8"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <!-- Cyan Pleated Skirt -->
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#0284c7"/>
      <path d="M 128 234 L 123 270 M 140 237 L 138 274 M 150 238 L 150 276 M 160 237 L 162 274 M 172 234 L 177 270" stroke="#0369a1" stroke-width="1.5"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_jupiter',
    name: '勇気の木星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#15803d"/>
      <!-- Pink Chest Bow -->
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#ec4899"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#ec4899"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#15803d"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_venus',
    name: '愛の金星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#ea580c"/>
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#2563eb"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#2563eb"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#ea580c"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_neo_queen',
    name: '銀河の月の女王ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White & Gold Neo Queen Gown -->
      <path d="M 130 175 Q 150 190 170 175 L 182 345 Q 150 355 118 345 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Gold Rings pattern on Chest -->
      <circle cx="140" cy="185" r="5" fill="none" stroke="#facc15" stroke-width="2"/>
      <circle cx="150" cy="188" r="6" fill="none" stroke="#facc15" stroke-width="2.2"/>
      <circle cx="160" cy="185" r="5" fill="none" stroke="#facc15" stroke-width="2"/>
      <!-- Angelic Back Wing Ribbon Silhouettes -->
      <path d="M 120 180 C 100 200 95 240 110 270 C 115 240 125 210 130 185 Z" fill="#fef08a" opacity="0.6"/>
      <path d="M 180 180 C 200 200 205 240 190 270 C 185 240 175 210 170 185 Z" fill="#fef08a" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eva_unit01',
    name: '人造人間01パイロットスーツ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Purple & Neon Green Plugsuit -->
      <path d="M 132 170 L 168 170 L 175 240 L 170 340 L 157 340 L 154 260 L 146 260 L 143 340 L 130 340 L 125 240 Z" fill="#581c87"/>
      <!-- Neon Green Accents -->
      <path d="M 144 175 L 156 175 L 158 205 L 142 205 Z" fill="#4ade80"/>
      <line x1="130" y1="215" x2="170" y2="215" stroke="#22c55e" stroke-width="2"/>
      <!-- Arm Sections -->
      <path d="M 124 180 L 110 250 L 118 252 L 130 195 Z" fill="#581c87"/>
      <path d="M 176 180 L 190 250 L 182 252 L 170 195 Z" fill="#581c87"/>
      <!-- Neon Stripes on Arms -->
      <rect x="112" y="210" width="8" height="4" fill="#4ade80" rx="1"/>
      <rect x="180" y="210" width="8" height="4" fill="#4ade80" rx="1"/>
      <!-- Orange Core Dial -->
      <circle cx="150" cy="190" r="4" fill="#f97316"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eva_unit00',
    name: '純白の00パイロットスーツ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White & Orange Plugsuit -->
      <path d="M 132 170 L 168 170 L 175 240 L 170 340 L 157 340 L 154 260 L 146 260 L 143 340 L 130 340 L 125 240 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M 144 175 L 156 175 L 158 205 L 142 205 Z" fill="#f97316"/>
      <line x1="130" y1="215" x2="170" y2="215" stroke="#ea580c" stroke-width="2"/>
      <path d="M 124 180 L 110 250 L 118 252 L 130 195 Z" fill="#f8fafc"/>
      <path d="M 176 180 L 190 250 L 182 252 L 170 195 Z" fill="#f8fafc"/>
      <circle cx="150" cy="190" r="4" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eva_unit02',
    name: '真紅の02パイロットスーツ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Red & Orange Plugsuit -->
      <path d="M 132 170 L 168 170 L 175 240 L 170 340 L 157 340 L 154 260 L 146 260 L 143 340 L 130 340 L 125 240 Z" fill="#dc2626"/>
      <path d="M 144 175 L 156 175 L 158 205 L 142 205 Z" fill="#f97316"/>
      <line x1="130" y1="215" x2="170" y2="215" stroke="#ea580c" stroke-width="2"/>
      <path d="M 124 180 L 110 250 L 118 252 L 130 195 Z" fill="#dc2626"/>
      <path d="M 176 180 L 190 250 L 182 252 L 170 195 Z" fill="#dc2626"/>
      <rect x="112" y="210" width="8" height="4" fill="#fbbf24" rx="1"/>
      <rect x="180" y="210" width="8" height="4" fill="#fbbf24" rx="1"/>
      <circle cx="150" cy="190" r="4" fill="#22c55e"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eva_school',
    name: '第3新東京市立制服',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White Shirt with Blue Ribbon -->
      <path d="M 134 168 L 166 168 L 168 200 L 132 200 Z" fill="#ffffff"/>
      <path d="M 150 180 L 142 195 M 150 180 L 158 195" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Light Blue Jumper Skirt -->
      <path d="M 130 195 L 170 195 L 182 275 L 118 275 Z" fill="#38bdf8"/>
      <!-- Suspenders -->
      <rect x="133" y="170" width="6" height="30" fill="#38bdf8"/>
      <rect x="161" y="170" width="6" height="30" fill="#38bdf8"/>
      <!-- White short sleeves -->
      <circle cx="122" cy="182" r="7" fill="#ffffff"/>
      <circle cx="178" cy="182" r="7" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_anime_madoka_pink',
    name: '魔法少女の祈りドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Pink Bodice with Heart Cutout -->
      <path d="M 132 170 L 168 170 L 174 225 L 126 225 Z" fill="#f472b6"/>
      <circle cx="150" cy="185" r="5" fill="#fbcfe8"/>
      <!-- Red Soul Gem -->
      <polygon points="150,172 153,178 150,182 147,178" fill="#e11d48"/>
      <!-- Multilayer Pink Frill Skirt -->
      <path d="M 124 225 Q 150 232 176 225 L 188 270 Q 150 282 112 270 Z" fill="#fbcfe8"/>
      <path d="M 120 250 Q 150 260 180 250 L 186 275 Q 150 285 114 275 Z" fill="#f472b6"/>
      <path d="M 112 270 Q 150 284 188 270 L 184 280 Q 150 292 116 280 Z" fill="#ffffff"/>
      <!-- Puffy White Sleeves -->
      <circle cx="120" cy="180" r="9" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.5"/>
      <circle cx="180" cy="180" r="9" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_homura_black',
    name: '時をかける魔法少女スーツ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White & Gray Top with Purple Ribbon -->
      <path d="M 130 170 L 170 170 L 174 225 L 126 225 Z" fill="#f8fafc"/>
      <path d="M 150 178 L 140 195 L 150 190 L 160 195 Z" fill="#581c87"/>
      <!-- Dark Gray Pleated Skirt -->
      <path d="M 124 225 L 176 225 L 185 270 L 115 270 Z" fill="#334155"/>
      <path d="M 128 225 L 122 270 M 140 225 L 138 270 M 150 225 L 150 270 M 160 225 L 162 270 M 172 225 L 178 270" stroke="#1e293b" stroke-width="1.5"/>
      <!-- Black Tights -->
      <rect x="130" y="270" width="16" height="70" fill="#0f172a"/>
      <rect x="154" y="270" width="16" height="70" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'dress_anime_cardcaptor_pink',
    name: '星の封印解除ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Cute Pink Frill Battle Costume -->
      <path d="M 132 170 L 168 170 L 175 220 L 125 220 Z" fill="#fb7185"/>
      <circle cx="150" cy="185" r="5" fill="#fef08a"/>
      <!-- Large White Ribbon on Chest -->
      <path d="M 150 185 C 138 175 130 185 138 195 C 144 198 148 190 150 185 Z" fill="#ffffff"/>
      <path d="M 150 185 C 162 175 170 185 162 195 C 156 198 152 190 150 185 Z" fill="#ffffff"/>
      <!-- Flare Skirt with White Tier -->
      <path d="M 122 220 Q 150 230 178 220 L 192 275 Q 150 290 108 275 Z" fill="#fb7185"/>
      <path d="M 112 265 Q 150 282 188 265 L 192 278 Q 150 295 108 278 Z" fill="#ffffff"/>
      <!-- Angel Wings on Back -->
      <path d="M 118 180 C 95 170 90 200 105 215 C 112 200 118 190 125 185 Z" fill="#ffffff" stroke="#fecdd3" stroke-width="1.5"/>
      <path d="M 182 180 C 205 170 210 200 195 215 C 188 200 182 190 175 185 Z" fill="#ffffff" stroke="#fecdd3" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_cardcaptor_alice',
    name: '時計の国のバトルコス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Alice Blue Dress with Apron -->
      <path d="M 130 170 L 170 170 L 188 280 L 112 280 Z" fill="#38bdf8"/>
      <!-- White Frill Apron -->
      <path d="M 138 175 L 162 175 L 166 265 L 134 265 Z" fill="#ffffff"/>
      <!-- Card Suits Embroidery -->
      <polygon points="150,210 154,217 150,224 146,217" fill="#ef4444"/>
      <!-- Puff Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#38bdf8"/>
      <circle cx="180" cy="180" r="8" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'dress_anime_kiki_navy',
    name: '空飛ぶ魔女のネイビーワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Classic Loose Witch Navy One-piece -->
      <path d="M 136 168 L 164 168 L 194 285 Q 150 295 106 285 Z" fill="#1e1b4b"/>
      <!-- Loose 3/4 Sleeves -->
      <path d="M 136 170 L 110 215 L 118 220 L 140 185 Z" fill="#1e1b4b"/>
      <path d="M 164 170 L 190 215 L 182 220 L 160 185 Z" fill="#1e1b4b"/>
      <!-- Cute Round Collar -->
      <path d="M 140 168 Q 150 176 160 168" stroke="#312e81" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eden_uniform',
    name: '名門イーデン校の正装ワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Black Elite Dress with Gold Embroidery -->
      <path d="M 134 168 L 166 168 L 182 275 L 118 275 Z" fill="#0f172a"/>
      <!-- White High Collar -->
      <rect x="142" y="165" width="16" height="8" rx="2" fill="#ffffff"/>
      <!-- Gold Lapels & Trim -->
      <path d="M 136 172 L 150 200 L 164 172" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <!-- Gold Stars/Cuffs -->
      <circle cx="150" cy="210" r="3" fill="#facc15"/>
      <circle cx="150" cy="225" r="3" fill="#facc15"/>
      <!-- Skirt Gold Hem -->
      <path d="M 118 272 Q 150 280 182 272" stroke="#facc15" stroke-width="3" fill="none"/>
      <!-- White Socks peek -->
      <rect x="133" y="280" width="12" height="40" fill="#ffffff"/>
      <rect x="155" y="280" width="12" height="40" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_anime_thorn_princess',
    name: 'いばら姫の暗殺ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Black Halterneck Dress with Red Lining -->
      <path d="M 140 168 L 160 168 L 176 220 L 185 285 L 168 285 L 150 240 L 132 285 L 115 285 L 124 220 Z" fill="#09090b"/>
      <!-- Red Rose Underskirt Lining -->
      <path d="M 132 285 L 150 240 L 168 285 Q 150 270 132 285 Z" fill="#991b1b"/>
      <!-- Gold Crossed Straps on Chest -->
      <line x1="138" y1="175" x2="162" y2="195" stroke="#facc15" stroke-width="1.8"/>
      <line x1="162" y1="175" x2="138" y2="195" stroke="#facc15" stroke-width="1.8"/>
      <!-- Thigh High Boots peek -->
      <rect x="130" y="275" width="15" height="65" fill="#09090b"/>
      <rect x="155" y="275" width="15" height="65" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'dress_anime_frieren_robe',
    name: '千年の旅人エルフローブ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White & Gold Mage Robe -->
      <path d="M 132 168 L 168 168 L 186 280 L 114 280 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Gold Stripes on Skirt -->
      <line x1="126" y1="260" x2="174" y2="260" stroke="#facc15" stroke-width="2.5"/>
      <line x1="122" y1="270" x2="178" y2="270" stroke="#facc15" stroke-width="2.5"/>
      <!-- White Capelet over Shoulders -->
      <path d="M 120 172 Q 150 188 180 172 L 185 205 Q 150 215 115 205 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Black/Gold Scarf knot -->
      <rect x="145" y="185" width="10" height="15" rx="3" fill="#334155"/>
      <circle cx="150" cy="192" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_anime_fern_black_robe',
    name: '静謐の魔術師ブラックローブ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Full-length Dark Priestess Robe -->
      <path d="M 134 166 L 166 166 L 194 330 Q 150 338 106 330 Z" fill="#1e293b"/>
      <!-- High White Collar -->
      <path d="M 144 165 L 156 165 L 158 178 L 142 178 Z" fill="#ffffff"/>
      <!-- Vertical Silver Buttons -->
      <circle cx="150" cy="190" r="2" fill="#cbd5e1"/>
      <circle cx="150" cy="205" r="2" fill="#cbd5e1"/>
      <circle cx="150" cy="220" r="2" fill="#cbd5e1"/>
      <!-- Wide Sleeves -->
      <path d="M 134 170 L 110 230 L 120 235 L 142 195 Z" fill="#1e293b"/>
      <path d="M 166 170 L 190 230 L 180 235 L 158 195 Z" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'dress_anime_bkomachi_idol',
    name: 'B小町スターライトドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Sparkly Pink Frill Stage Costume -->
      <path d="M 132 172 L 168 172 L 175 220 L 125 220 Z" fill="#f43f5e"/>
      <!-- Gold Star Brooch on Center -->
      <polygon points="150,180 153,188 161,188 155,193 157,200 150,196 143,200 145,193 139,188 147,188" fill="#facc15"/>
      <!-- Multi-tier Ruffled Skirt -->
      <path d="M 122 220 Q 150 230 178 220 L 192 265 Q 150 280 108 265 Z" fill="#fda4af"/>
      <path d="M 114 250 Q 150 265 186 250 L 194 278 Q 150 292 106 278 Z" fill="#f43f5e"/>
      <path d="M 106 275 Q 150 292 194 275 L 192 284 Q 150 300 108 284 Z" fill="#ffffff"/>
      <!-- Cute Arm Warmers -->
      <rect x="106" y="225" width="10" height="30" rx="3" fill="#fda4af"/>
      <rect x="184" y="225" width="10" height="30" rx="3" fill="#fda4af"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sao_asuna',
    name: '血盟騎士団副団長バトルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- White & Red Crimson Knight Dress -->
      <path d="M 132 170 L 168 170 L 178 225 L 186 275 L 114 275 L 122 225 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Red Cross Lines & Epaulets -->
      <rect x="148" y="175" width="4" height="45" fill="#dc2626"/>
      <line x1="135" y1="190" x2="165" y2="190" stroke="#dc2626" stroke-width="3"/>
      <!-- Red Hem Details -->
      <path d="M 114 270 Q 150 280 186 270 L 186 275 Q 150 285 114 275 Z" fill="#dc2626"/>
      <!-- Silver Breastplate Trim -->
      <path d="M 132 172 Q 150 185 168 172" stroke="#cbd5e1" stroke-width="2" fill="none"/>
      <!-- White Detached Sleeves -->
      <rect x="106" y="210" width="10" height="40" rx="2" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="184" y="210" width="10" height="40" rx="2" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="106" y="210" width="10" height="5" fill="#dc2626"/>
      <rect x="184" y="210" width="10" height="5" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sao_kirito_coat',
    name: '黒の剣士ロングコートワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Black Swordsman Long Coat -->
      <path d="M 132 168 L 168 168 L 196 325 L 104 325 Z" fill="#09090b"/>
      <!-- Silver Trim & Belts -->
      <line x1="132" y1="168" x2="104" y2="325" stroke="#94a3b8" stroke-width="2"/>
      <line x1="168" y1="168" x2="196" y2="325" stroke="#94a3b8" stroke-width="2"/>
      <!-- Chest Buckle -->
      <rect x="136" y="195" width="28" height="5" rx="1" fill="#475569"/>
      <rect x="146" y="193" width="8" height="9" fill="#e2e8f0"/>
      <!-- Inner Dark Shirt -->
      <path d="M 142 168 L 158 168 L 158 195 L 142 195 Z" fill="#1e293b"/>
      <!-- Long Sleeves -->
      <path d="M 132 170 L 110 245 L 120 250 L 140 195 Z" fill="#09090b"/>
      <path d="M 168 170 L 190 245 L 180 250 L 160 195 Z" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'dress_anime_marcille_robe',
    name: '迷宮の青い魔術師ローブ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Sky Blue Mage Robe -->
      <path d="M 134 168 L 166 168 L 186 280 L 114 280 Z" fill="#0284c7"/>
      <!-- White Capelet with Red Ribbon -->
      <path d="M 124 172 Q 150 188 176 172 L 182 205 Q 150 215 118 205 Z" fill="#f8fafc"/>
      <path d="M 150 185 L 142 205 M 150 185 L 158 205" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
      <!-- Brown Leather Belt -->
      <rect x="124" y="225" width="52" height="7" rx="2" fill="#78350f"/>
      <rect x="146" y="223" width="8" height="11" fill="#facc15" rx="1"/>
    `,
  }),
  new Item({
    id: 'dress_anime_slime_rimuru',
    name: '盟主のブルージップコート',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Blue High-tech Long Coat -->
      <path d="M 134 168 L 166 168 L 188 310 L 112 310 Z" fill="#0ea5e9"/>
      <!-- Gold Vertical Zipper & Accents -->
      <line x1="150" y1="170" x2="150" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <!-- White Fur Scarf / Collar -->
      <ellipse cx="150" cy="172" rx="22" ry="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Sleeves -->
      <path d="M 134 170 L 112 245 L 120 248 L 140 195 Z" fill="#0ea5e9"/>
      <path d="M 166 170 L 188 245 L 180 248 L 160 195 Z" fill="#0ea5e9"/>
    `,
  }),
  new Item({
    id: 'dress_anime_rem_maid',
    name: '鬼の双子メイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Gothic Maid Dress with Blue Ribbon -->
      <path d="M 130 170 L 170 170 L 188 275 L 112 275 Z" fill="#0f172a"/>
      <!-- White Apron -->
      <path d="M 138 172 L 162 172 L 174 275 L 126 275 Z" fill="#ffffff"/>
      <!-- Sky Blue Ribbons -->
      <path d="M 150 185 C 142 178 135 185 142 192 C 146 195 148 190 150 185 Z" fill="#38bdf8"/>
      <path d="M 150 185 C 158 178 165 185 158 192 C 154 195 152 190 150 185 Z" fill="#38bdf8"/>
      <!-- Frill Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#ffffff"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_anime_emilia_robe',
    name: '氷結のハーフエルフドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Elegant White & Lavender Gown -->
      <path d="M 132 168 L 168 168 L 190 320 L 110 320 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Lavender Hem & Accents -->
      <path d="M 110 310 Q 150 322 190 310 L 190 320 Q 150 332 110 320 Z" fill="#a855f7"/>
      <!-- Chest Crest & Green Gem -->
      <polygon points="150,180 155,188 150,195 145,188" fill="#10b981"/>
      <!-- High Collar -->
      <path d="M 138 165 L 162 165 L 165 174 L 135 174 Z" fill="#a855f7"/>
      <!-- Flowing Sleeves -->
      <path d="M 132 170 L 105 255 L 115 260 L 140 195 Z" fill="#f8fafc"/>
      <path d="M 168 170 L 195 255 L 185 260 L 160 195 Z" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'dress_anime_maomao_hanfu',
    name: '薬草摘みの翡翠色漢服',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Jade Green & Peach Hanfu -->
      <path d="M 132 168 L 168 168 L 190 310 L 110 310 Z" fill="#10b981"/>
      <!-- Peach Upper Wrap -->
      <path d="M 130 168 L 155 210 L 145 215 L 125 175 Z" fill="#fda4af"/>
      <!-- High Waist Ribbon Sash -->
      <rect x="124" y="210" width="52" height="12" fill="#f43f5e" rx="2"/>
      <path d="M 148 222 L 144 265 M 152 222 L 156 265" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
      <!-- Long Kimono Style Sleeves -->
      <path d="M 132 170 L 100 240 L 112 250 L 140 195 Z" fill="#10b981"/>
      <path d="M 168 170 L 200 240 L 188 250 L 160 195 Z" fill="#10b981"/>
    `,
  }),
  new Item({
    id: 'dress_anime_tokkofuku_black',
    name: '天下無敵の特攻服セット',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Long Black Tokkofuku Jacket with Gold Characters -->
      <path d="M 130 166 L 170 166 L 186 310 L 114 310 Z" fill="#09090b"/>
      <!-- High Collar -->
      <rect x="138" y="163" width="24" height="10" fill="#09090b" stroke="#facc15" stroke-width="1.5"/>
      <!-- Gold Kanji-style Markings -->
      <text x="140" y="210" fill="#facc15" font-size="10" font-weight="900" font-family="serif">天</text>
      <text x="140" y="225" fill="#facc15" font-size="10" font-weight="900" font-family="serif">上</text>
      <text x="152" y="210" fill="#facc15" font-size="10" font-weight="900" font-family="serif">唯</text>
      <text x="152" y="225" fill="#facc15" font-size="10" font-weight="900" font-family="serif">我</text>
      <!-- White Sarashi Bandage at Chest -->
      <rect x="144" y="173" width="12" height="18" fill="#f8fafc"/>
      <line x1="144" y1="180" x2="156" y2="180" stroke="#cbd5e1" stroke-width="1"/>
      <!-- White Belt -->
      <rect x="124" y="235" width="52" height="6" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'dress_anime_mononoke_tunic',
    name: '山犬の姫の部族チュニック',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Navy Sleeveless Dress & White Fur Cape -->
      <path d="M 132 170 L 168 170 L 180 270 L 120 270 Z" fill="#1e3a8a"/>
      <!-- Fluffy White Wolf Pelt / Cape -->
      <path d="M 116 172 C 100 185 100 230 114 265 C 120 230 124 195 128 175 Z" fill="#f8fafc"/>
      <path d="M 184 172 C 200 185 200 230 186 265 C 180 230 176 195 172 175 Z" fill="#f8fafc"/>
      <!-- Tribal Tooth Necklace -->
      <path d="M 138 175 Q 150 190 162 175" stroke="#78350f" stroke-width="1.8" fill="none"/>
      <polygon points="144,182 147,190 142,189" fill="#fef08a"/>
      <polygon points="150,185 153,195 147,194" fill="#fef08a"/>
      <polygon points="156,182 159,190 154,189" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_anime_nausicaa_blue',
    name: '青き衣の飛行服ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Valley of the Wind Blue Tunic Dress -->
      <path d="M 132 168 L 168 168 L 184 280 L 116 280 Z" fill="#0284c7"/>
      <!-- Red Emblem on Chest -->
      <circle cx="150" cy="188" r="5" fill="#ef4444"/>
      <polygon points="150,183 154,189 146,189" fill="#ffffff"/>
      <!-- Brown Leather Ammo Belt -->
      <rect x="124" y="230" width="52" height="8" fill="#78350f" rx="1"/>
      <rect x="134" y="228" width="6" height="12" fill="#b45309" rx="1"/>
      <rect x="144" y="228" width="6" height="12" fill="#b45309" rx="1"/>
      <rect x="154" y="228" width="6" height="12" fill="#b45309" rx="1"/>
      <rect x="164" y="228" width="6" height="12" fill="#b45309" rx="1"/>
      <!-- Long Sleeves -->
      <path d="M 132 170 L 112 245 L 120 248 L 140 195 Z" fill="#0284c7"/>
      <path d="M 168 170 L 188 245 L 180 248 L 160 195 Z" fill="#0284c7"/>
    `,
  }),

  // ==========================================
  // 2. TOPS (25 items)
  // ==========================================
  new Item({
    id: 'tops_anime_zenitsu_haori',
    name: '雷光の三角鱗羽織',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Yellow Haori with White Triangles -->
      <path d="M 124 165 L 176 165 L 192 245 L 108 245 Z" fill="#facc15"/>
      <!-- White Triangles Pattern -->
      <polygon points="120,185 125,178 130,185" fill="#ffffff"/>
      <polygon points="135,185 140,178 145,185" fill="#ffffff"/>
      <polygon points="155,185 160,178 165,185" fill="#ffffff"/>
      <polygon points="170,185 175,178 180,185" fill="#ffffff"/>
      <polygon points="128,210 133,203 138,210" fill="#ffffff"/>
      <polygon points="145,210 150,203 155,210" fill="#ffffff"/>
      <polygon points="162,210 167,203 172,210" fill="#ffffff"/>
      <polygon points="135,235 140,228 145,235" fill="#ffffff"/>
      <polygon points="155,235 160,228 165,235" fill="#ffffff"/>
      <!-- Inner Dark Corps Uniform -->
      <path d="M 138 168 L 162 168 L 158 245 L 142 245 Z" fill="#1e293b"/>
      <!-- White Haori String -->
      <path d="M 143 195 Q 150 205 157 195" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'tops_anime_giyuu_haori',
    name: '義勇の半々羽織',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Half Red Wine, Half Geometric Haori -->
      <!-- Left side: Solid Wine Red -->
      <path d="M 124 165 L 150 165 L 150 245 L 108 245 Z" fill="#881337"/>
      <!-- Right side: Green/Yellow Geometric -->
      <path d="M 150 165 L 176 165 L 192 245 L 150 245 Z" fill="#15803d"/>
      <polygon points="155,175 165,175 160,185" fill="#facc15"/>
      <polygon points="165,185 175,185 170,195" fill="#facc15"/>
      <polygon points="155,195 165,195 160,205" fill="#facc15"/>
      <polygon points="165,205 175,205 170,215" fill="#facc15"/>
      <polygon points="155,215 165,215 160,225" fill="#facc15"/>
      <polygon points="165,225 175,225 170,235" fill="#facc15"/>
      <!-- Inner Dark Corps Uniform -->
      <path d="M 142 168 L 158 168 L 155 245 L 145 245 Z" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'tops_anime_goku_orange_gi',
    name: '亀仙流の山吹色道着',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Orange Martial Arts Gi with Navy Inner -->
      <path d="M 126 168 L 174 168 L 178 245 L 122 245 Z" fill="#f97316"/>
      <!-- Dark Navy V-Neck Undershirt -->
      <path d="M 136 168 L 164 168 L 150 195 Z" fill="#1e3a8a"/>
      <!-- Blue Waist Sash Belt -->
      <rect x="122" y="230" width="56" height="12" fill="#1e3a8a"/>
      <path d="M 145 242 L 140 268 M 150 242 L 148 268" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
      <!-- Turtle Master 'Kame' Circle Badge on Chest -->
      <circle cx="138" cy="195" r="7" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>
      <text x="134" y="198" fill="#000000" font-size="7" font-weight="bold">亀</text>
      <!-- Blue Wristbands -->
      <rect x="106" y="240" width="10" height="12" rx="2" fill="#1e3a8a"/>
      <rect x="184" y="240" width="10" height="12" rx="2" fill="#1e3a8a"/>
    `,
  }),
  new Item({
    id: 'tops_anime_vegeta_armor',
    name: 'サイヤ王子戦闘ベスト',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Blue Body Suit Underneath -->
      <path d="M 126 168 L 174 168 L 178 245 L 122 245 Z" fill="#1e3a8a"/>
      <!-- White & Gold Battle Armor Plate -->
      <path d="M 130 178 L 170 178 L 166 235 L 134 235 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Golden Chest Ribs -->
      <rect x="140" y="190" width="20" height="6" rx="2" fill="#fbbf24"/>
      <rect x="140" y="202" width="20" height="6" rx="2" fill="#fbbf24"/>
      <rect x="140" y="214" width="20" height="6" rx="2" fill="#fbbf24"/>
      <!-- White Shoulder Guards -->
      <path d="M 116 172 L 136 172 L 132 185 L 114 185 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <path d="M 184 172 L 164 172 L 168 185 L 186 185 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'tops_anime_piccolo_gi',
    name: '魔族の紫道着＆白マント',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Purple Gi with Sky Blue Belt -->
      <path d="M 128 175 L 172 175 L 176 245 L 124 245 Z" fill="#6b21a8"/>
      <rect x="124" y="230" width="52" height="10" fill="#0284c7"/>
      <!-- Heavy White Shoulder Cape & High Neck Wrap -->
      <ellipse cx="150" cy="172" rx="24" ry="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M 110 170 C 95 185 95 240 106 265 L 124 185 Z" fill="#f8fafc"/>
      <path d="M 190 170 C 205 185 205 240 194 265 L 176 185 Z" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'tops_anime_luffy_red_vest',
    name: '麦わら船長のオープン赤ベスト',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Open Bright Red Vest -->
      <path d="M 126 168 L 140 168 L 134 235 L 122 235 Z" fill="#dc2626"/>
      <path d="M 174 168 L 160 168 L 166 235 L 178 235 Z" fill="#dc2626"/>
      <!-- Yellow Buttons -->
      <circle cx="137" cy="188" r="2.5" fill="#facc15"/>
      <circle cx="136" cy="205" r="2.5" fill="#facc15"/>
      <circle cx="135" cy="222" r="2.5" fill="#facc15"/>
      <!-- Open Chest with X-scar hint -->
      <line x1="145" y1="195" x2="155" y2="205" stroke="#fca5a5" stroke-width="2"/>
      <line x1="155" y1="195" x2="145" y2="205" stroke="#fca5a5" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_marine_admiral',
    name: '海軍本部『正義』コート',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- White Overcoat Draped on Shoulders -->
      <path d="M 112 165 L 188 165 L 202 265 L 98 265 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Golden Shoulder Epaulets & Tassels -->
      <rect x="110" y="165" width="22" height="7" rx="2" fill="#facc15"/>
      <rect x="168" y="165" width="22" height="7" rx="2" fill="#facc15"/>
      <!-- Red Inner Neck Collar -->
      <path d="M 134 168 L 166 168 L 158 205 L 142 205 Z" fill="#b91c1c"/>
      <!-- Navy Blue Tie -->
      <polygon points="150,185 153,210 150,225 147,210" fill="#1e3a8a"/>
    `,
  }),
  new Item({
    id: 'tops_anime_law_hoodie',
    name: '死の外科医の斑点パーカー',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black & Yellow Hoodie with Jolly Roger -->
      <path d="M 126 168 L 174 168 L 178 238 L 122 238 Z" fill="#09090b"/>
      <!-- Yellow Chest Section -->
      <path d="M 134 175 L 166 175 L 162 215 L 138 215 Z" fill="#facc15"/>
      <!-- Heart Pirate Logo Smiley -->
      <circle cx="150" cy="195" r="6" fill="none" stroke="#000000" stroke-width="1.5"/>
      <!-- Sleeves with Spots -->
      <path d="M 126 170 L 110 245 L 118 248 L 134 195 Z" fill="#09090b"/>
      <path d="M 174 170 L 190 245 L 182 248 L 166 195 Z" fill="#09090b"/>
      <!-- Spot spots -->
      <ellipse cx="116" cy="225" rx="3" ry="2" fill="#f8fafc"/>
      <ellipse cx="184" cy="225" rx="3" ry="2" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'tops_anime_naruto_jacket',
    name: '木ノ葉のオレンジトラックジャケット',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Orange Jacket with Blue Collar & White Swirl -->
      <path d="M 126 168 L 174 168 L 178 240 L 122 240 Z" fill="#ea580c"/>
      <!-- Blue High Standing Collar -->
      <path d="M 132 162 L 168 162 L 164 176 L 136 176 Z" fill="#1e40af"/>
      <!-- White Swirl Spiral on Left Arm / Chest -->
      <circle cx="138" cy="195" r="5" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
      <!-- White Shoulders Accent -->
      <rect x="124" y="172" width="12" height="6" fill="#f8fafc"/>
      <rect x="164" y="172" width="12" height="6" fill="#f8fafc"/>
      <!-- Center Zipper -->
      <line x1="150" y1="168" x2="150" y2="240" stroke="#f8fafc" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_sasuke_shirt',
    name: 'うちはの紺ハイネックシャツ',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- High Collar Navy Shirt with Uchiha Fan Fan Logo -->
      <path d="M 128 166 L 172 166 L 176 240 L 124 240 Z" fill="#1e1b4b"/>
      <!-- Standing White Lined Collar -->
      <path d="M 134 160 L 166 160 L 162 174 L 138 174 Z" fill="#1e1b4b" stroke="#f8fafc" stroke-width="1"/>
      <!-- White Arm Warmers -->
      <rect x="108" y="215" width="10" height="35" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <rect x="182" y="215" width="10" height="35" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'tops_anime_akatsuki_cloak',
    name: '暁の漆黒赤雲マント',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black High-Collar Cloak with Red Clouds -->
      <path d="M 124 160 L 176 160 L 194 260 L 106 260 Z" fill="#09090b"/>
      <!-- Red High Collar Inside -->
      <path d="M 132 158 L 168 158 L 164 175 L 136 175 Z" fill="#dc2626"/>
      <!-- Iconic Akatsuki Red Cloud -->
      <path d="M 142 205 Q 138 198 145 195 Q 152 192 158 197 Q 164 200 160 207 Q 155 212 146 210 Z" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/>
      <path d="M 122 230 Q 118 225 124 222 Q 128 220 132 224 Q 136 226 134 231 Z" fill="#dc2626" stroke="#ffffff" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_kakashi_vest',
    name: '木ノ葉上忍タクティカルベスト',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Navy Shirt Base -->
      <path d="M 126 168 L 174 168 L 178 240 L 122 240 Z" fill="#1e1b4b"/>
      <!-- Olive Green Tactical Flak Vest -->
      <path d="M 128 172 L 172 172 L 170 235 L 130 235 Z" fill="#3f6212"/>
      <!-- Vest Pockets with Flaps -->
      <rect x="134" y="195" width="12" height="14" rx="2" fill="#4d7c0f"/>
      <rect x="154" y="195" width="12" height="14" rx="2" fill="#4d7c0f"/>
      <!-- Red Swirl Badge on Left Shoulder -->
      <circle cx="122" cy="180" r="4" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'tops_anime_itadori_hoodie',
    name: '呪術高専制服（赤フード）',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Navy Stand Collar High School Uniform -->
      <path d="M 126 168 L 174 168 L 178 240 L 122 240 Z" fill="#0f172a"/>
      <!-- Red Hoodie Coming Out from Neck -->
      <path d="M 134 164 Q 150 176 166 164 L 160 185 Q 150 192 140 185 Z" fill="#dc2626"/>
      <!-- Gold Button on Stand Collar -->
      <circle cx="140" cy="174" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_anime_gojo_trench',
    name: '特級術師の漆黒スタンドコート',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Sleek All-Black Sorcerer Jacket -->
      <path d="M 126 164 L 174 164 L 180 245 L 120 245 Z" fill="#09090b"/>
      <!-- High Collar -->
      <rect x="138" y="160" width="24" height="12" fill="#09090b" rx="2"/>
      <!-- Minimalist Zip Line -->
      <line x1="150" y1="165" x2="150" y2="245" stroke="#27272a" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'tops_anime_scout_jacket',
    name: '調査兵団の自由ショートジャケット',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Brown Cropped Scout Jacket -->
      <path d="M 124 168 L 176 168 L 174 215 L 126 215 Z" fill="#92400e"/>
      <!-- Inner White Shirt -->
      <path d="M 140 168 L 160 168 L 150 195 Z" fill="#f8fafc"/>
      <!-- Wings of Freedom Emblem on Left Pocket -->
      <rect x="130" y="188" width="10" height="12" rx="1" fill="#78350f"/>
      <polygon points="132,192 138,190 135,198" fill="#38bdf8"/>
      <polygon points="135,190 139,196 133,198" fill="#f8fafc"/>
      <!-- Flap Pockets -->
      <rect x="160" y="188" width="10" height="12" rx="1" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'tops_anime_scout_cape',
    name: '兵団のダークグリーンマント',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Green Hooded Cape -->
      <path d="M 122 168 Q 150 185 178 168 L 194 265 Q 150 275 106 265 Z" fill="#14532d"/>
      <!-- Wings of Freedom on Back / Chest button -->
      <circle cx="150" cy="182" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_anime_deku_jumpsuit',
    name: '継承者の緑ヒーロージャケット',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Green Hero Bodysuit Jacket -->
      <path d="M 126 168 L 174 168 L 178 240 L 122 240 Z" fill="#047857"/>
      <!-- White Shoulder & Chest Harness Lines -->
      <line x1="130" y1="170" x2="148" y2="240" stroke="#f8fafc" stroke-width="2.5"/>
      <line x1="170" y1="170" x2="152" y2="240" stroke="#f8fafc" stroke-width="2.5"/>
      <!-- Red Belt with Pouch -->
      <rect x="122" y="232" width="56" height="8" fill="#dc2626"/>
      <rect x="135" y="230" width="8" height="12" rx="2" fill="#ef4444"/>
      <rect x="157" y="230" width="8" height="12" rx="2" fill="#ef4444"/>
      <!-- White Gloves peek -->
      <rect x="106" y="235" width="10" height="20" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <rect x="184" y="235" width="10" height="20" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'tops_anime_todoroki_jacket',
    name: '半冷半熱デュアルジャケット',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Blue Hero Bodysuit with Red Combat Straps -->
      <path d="M 126 168 L 174 168 L 178 240 L 122 240 Z" fill="#1e3a8a"/>
      <!-- Silver Collar/Back Harness -->
      <path d="M 134 168 L 166 168 L 160 190 L 140 190 Z" fill="#cbd5e1"/>
      <!-- Crossed Red Belts -->
      <line x1="126" y1="180" x2="174" y2="235" stroke="#dc2626" stroke-width="3"/>
      <line x1="174" y1="180" x2="126" y2="235" stroke="#dc2626" stroke-width="3"/>
    `,
  }),
  new Item({
    id: 'tops_anime_edward_coat',
    name: '鋼の錬金術師の赤フードコート',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Red Long Hooded Coat with Flamel Cross -->
      <path d="M 124 168 L 176 168 L 190 260 L 110 260 Z" fill="#b91c1c"/>
      <!-- Black Inner Shirt -->
      <path d="M 136 168 L 164 168 L 158 240 L 142 240 Z" fill="#09090b"/>
      <!-- White Gloves on Arms -->
      <path d="M 124 172 L 106 245 L 116 248 L 134 195 Z" fill="#b91c1c"/>
      <path d="M 176 172 L 194 245 L 184 248 L 166 195 Z" fill="#b91c1c"/>
      <rect x="106" y="235" width="10" height="15" rx="2" fill="#f8fafc"/>
      <rect x="184" y="235" width="10" height="15" rx="2" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'tops_anime_gon_jacket',
    name: '少年の緑ハンタージャケット',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Green Zip Jacket with Red Trim -->
      <path d="M 126 168 L 174 168 L 178 238 L 122 238 Z" fill="#15803d"/>
      <path d="M 134 166 L 166 166 L 160 178 L 140 178 Z" fill="#dc2626"/>
      <!-- White Undershirt scoop -->
      <path d="M 142 168 L 158 168 L 150 185 Z" fill="#f8fafc"/>
      <line x1="150" y1="178" x2="150" y2="238" stroke="#dc2626" stroke-width="2.5"/>
    `,
  }),
  new Item({
    id: 'tops_anime_killua_layers',
    name: '雷光少年のダブルTシャツ',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- White Loose V-Neck T-Shirt over Dark Purple Turtle Neck -->
      <path d="M 122 172 L 178 172 L 174 235 L 126 235 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Purple Long Sleeve & Turtle Neck -->
      <path d="M 136 164 L 164 164 L 160 176 L 140 176 Z" fill="#581c87"/>
      <!-- V-neck Cutout -->
      <polygon points="150,192 158,172 142,172" fill="#581c87"/>
      <!-- Purple Sleeves -->
      <rect x="108" y="200" width="10" height="40" rx="2" fill="#581c87"/>
      <rect x="182" y="200" width="10" height="40" rx="2" fill="#581c87"/>
    `,
  }),
  new Item({
    id: 'tops_anime_jotaro_coat',
    name: '星屑の学ラン＆黄金チェーン',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black Open Long High School Coat -->
      <path d="M 124 162 L 176 162 L 188 260 L 112 260 Z" fill="#09090b"/>
      <!-- Stand Collar -->
      <rect x="134" y="158" width="32" height="12" fill="#09090b" rx="2"/>
      <!-- Heavy Gold Chain on Left Lapel -->
      <path d="M 136 164 C 130 180 134 195 142 205" stroke="#facc15" stroke-width="3" fill="none"/>
      <!-- Turquoise / Purple Inner Shirt -->
      <path d="M 142 170 L 158 170 L 154 240 L 146 240 Z" fill="#06b6d4"/>
    `,
  }),
  new Item({
    id: 'tops_anime_bocchi_track',
    name: '結束ピンクジャージ',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Loose Pink Zip-up Track Jacket -->
      <path d="M 124 168 L 176 168 L 180 245 L 120 245 Z" fill="#f472b6"/>
      <!-- White High Neck Zip -->
      <rect x="138" y="164" width="24" height="10" rx="2" fill="#fbcfe8"/>
      <line x1="150" y1="164" x2="150" y2="245" stroke="#ffffff" stroke-width="2"/>
      <!-- Droopy Long Sleeves Hiding Hands -->
      <path d="M 124 170 L 104 255 L 114 260 L 136 195 Z" fill="#f472b6"/>
      <path d="M 176 170 L 196 255 L 186 260 L 164 195 Z" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'tops_anime_karasuno_jersey',
    name: '烏野高校ブラックバレーユニフォーム',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black & Orange Volleyball Jersey -->
      <path d="M 126 168 L 174 168 L 176 240 L 124 240 Z" fill="#09090b"/>
      <!-- Orange Side Panels & Collar -->
      <path d="M 126 168 L 132 168 L 128 240 L 124 240 Z" fill="#ea580c"/>
      <path d="M 174 168 L 168 168 L 172 240 L 176 240 Z" fill="#ea580c"/>
      <path d="M 140 168 L 160 168 L 150 182 Z" fill="#ea580c"/>
      <!-- Number 10 on Chest -->
      <text x="144" y="215" fill="#f8fafc" font-size="16" font-weight="900">10</text>
    `,
  }),
  new Item({
    id: 'tops_anime_gintoki_kimono',
    name: '銀髪侍の白地青波片肌着物',
    slotCategory: SlotCategory.TOPS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black Inner Shirt with Red Collar -->
      <path d="M 132 166 L 168 166 L 174 240 L 126 240 Z" fill="#09090b"/>
      <path d="M 140 166 L 160 166 L 150 182 Z" fill="#dc2626"/>
      <!-- Draped White Kimono on One Side with Blue Wave Swirls -->
      <path d="M 126 168 L 148 168 L 152 240 L 112 240 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <path d="M 118 210 Q 128 200 138 215" stroke="#0284c7" stroke-width="2.5" fill="none"/>
      <path d="M 122 225 Q 132 215 142 230" stroke="#0284c7" stroke-width="2.5" fill="none"/>
    `,
  }),

  // ==========================================
  // 3. BOTTOMS (15 items)
  // ==========================================
  new Item({
    id: 'bottoms_anime_luffy_denim',
    name: '海賊の折り返しデニムショーツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Blue Denim Cutoff Shorts with White Fur/Fringe Cuffs -->
      <path d="M 126 235 L 174 235 L 178 280 L 154 280 L 150 250 L 146 280 L 122 280 Z" fill="#2563eb"/>
      <!-- White Fluffy Folded Cuffs -->
      <rect x="120" y="278" width="28" height="7" rx="3" fill="#f8fafc"/>
      <rect x="152" y="278" width="28" height="7" rx="3" fill="#f8fafc"/>
      <!-- Yellow Rope/Sash -->
      <rect x="125" y="235" width="50" height="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_demon_hakama',
    name: '鬼殺隊の黒袴＆白脚絆',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black Pleated Hakama Pants -->
      <path d="M 126 235 L 174 235 L 180 305 L 153 305 L 150 255 L 147 305 L 120 305 Z" fill="#0f172a"/>
      <!-- White Leg Wraps (Kyahan) with Black Straps -->
      <rect x="128" y="305" width="16" height="35" fill="#f8fafc"/>
      <rect x="156" y="305" width="16" height="35" fill="#f8fafc"/>
      <line x1="128" y1="315" x2="144" y2="320" stroke="#000000" stroke-width="1.5"/>
      <line x1="128" y1="325" x2="144" y2="330" stroke="#000000" stroke-width="1.5"/>
      <line x1="156" y1="315" x2="172" y2="320" stroke="#000000" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="330" stroke="#000000" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_scout_pants',
    name: '調査兵団白パンツ＆革ベルトハーネス',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- White Fitted Pants -->
      <path d="M 128 235 L 172 235 L 175 330 L 156 330 L 150 255 L 144 330 L 125 330 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Brown ODM Gear Harness Straps around Thighs -->
      <line x1="126" y1="250" x2="146" y2="280" stroke="#78350f" stroke-width="2.5"/>
      <line x1="174" y1="250" x2="154" y2="280" stroke="#78350f" stroke-width="2.5"/>
      <line x1="126" y1="280" x2="146" y2="250" stroke="#78350f" stroke-width="2.5"/>
      <line x1="174" y1="280" x2="154" y2="250" stroke="#78350f" stroke-width="2.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_goku_pants',
    name: '亀仙流の山吹色道着ズボン',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Orange Baggy Martial Arts Pants -->
      <path d="M 124 235 L 176 235 L 180 325 L 154 325 L 150 255 L 146 325 L 120 325 Z" fill="#f97316"/>
      <!-- Blue Cuffed Ankles -->
      <rect x="124" y="322" width="22" height="8" rx="2" fill="#1e3a8a"/>
      <rect x="154" y="322" width="22" height="8" rx="2" fill="#1e3a8a"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_naruto_pants',
    name: '忍のオレンジテーパードパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Orange Shinobi Pants -->
      <path d="M 126 235 L 174 235 L 176 325 L 154 325 L 150 255 L 146 325 L 124 325 Z" fill="#ea580c"/>
      <!-- White Bandage Wrap & Shuriken Holster on Right Thigh -->
      <rect x="154" y="260" width="18" height="15" fill="#f8fafc"/>
      <rect x="166" y="262" width="8" height="11" rx="1" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_jujutsu_slacks',
    name: '呪術高専のストレート黒スラックス',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Sleek Dark Navy/Black Slacks -->
      <path d="M 128 235 L 172 235 L 174 340 L 156 340 L 150 255 L 144 340 L 126 340 Z" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_akatsuki_pants',
    name: '暁の漆黒ワイドパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Wide Black Shinobi Pants with White Bandage Ankles -->
      <path d="M 126 235 L 174 235 L 178 315 L 154 315 L 150 255 L 146 315 L 122 315 Z" fill="#09090b"/>
      <rect x="126" y="315" width="20" height="20" fill="#f8fafc"/>
      <rect x="154" y="315" width="20" height="20" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_eden_skirt',
    name: '名門イーデン校のプリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black Pleated Skirt with Gold Hem -->
      <path d="M 126 235 L 174 235 L 184 275 L 116 275 Z" fill="#0f172a"/>
      <path d="M 116 272 Q 150 280 184 272" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <line x1="135" y1="235" x2="130" y2="275" stroke="#334155" stroke-width="1.5"/>
      <line x1="150" y1="235" x2="150" y2="275" stroke="#334155" stroke-width="1.5"/>
      <line x1="165" y1="235" x2="170" y2="275" stroke="#334155" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_vegeta_tights',
    name: 'サイヤ戦士のダークブルースパッツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Blue Tight Fighting Spats -->
      <path d="M 128 235 L 172 235 L 174 335 L 156 335 L 150 255 L 144 335 L 126 335 Z" fill="#1e3a8a"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_deku_pants',
    name: 'ヒーローのダークグリーンパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Dark Green Hero Pants with Black Knee Pads -->
      <path d="M 126 235 L 174 235 L 176 335 L 156 335 L 150 255 L 144 335 L 124 335 Z" fill="#047857"/>
      <!-- Black Knee Armor Pads -->
      <rect x="128" y="275" width="16" height="20" rx="4" fill="#0f172a"/>
      <rect x="156" y="275" width="16" height="20" rx="4" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_tokkofuku_pants',
    name: '特攻ボンタン黒ズボン',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Very Baggy Delinquent Black Trousers -->
      <path d="M 124 235 L 176 235 L 186 335 L 156 335 L 150 255 L 144 335 L 114 335 Z" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_sailor_skirt',
    name: '正義のセーラープリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Bright Royal Blue Pleated Mini Skirt with White Stripes -->
      <path d="M 126 235 L 174 235 L 186 270 L 114 270 Z" fill="#2563eb"/>
      <path d="M 116 266 Q 150 274 184 266" stroke="#ffffff" stroke-width="2" fill="none"/>
      <line x1="134" y1="235" x2="128" y2="270" stroke="#1d4ed8" stroke-width="1.5"/>
      <line x1="150" y1="235" x2="150" y2="270" stroke="#1d4ed8" stroke-width="1.5"/>
      <line x1="166" y1="235" x2="172" y2="270" stroke="#1d4ed8" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_gon_shorts',
    name: '野生児のグリーンスポーツ短パン',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Short Green Sports Shorts -->
      <path d="M 126 235 L 174 235 L 176 275 L 154 275 L 150 252 L 146 275 L 124 275 Z" fill="#15803d"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_karasuno_shorts',
    name: '烏野バレー黒オレンジパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Black Volleyball Shorts with Orange Side Lines -->
      <path d="M 126 235 L 174 235 L 176 280 L 154 280 L 150 252 L 146 280 L 124 280 Z" fill="#09090b"/>
      <line x1="125" y1="235" x2="124" y2="280" stroke="#ea580c" stroke-width="3"/>
      <line x1="175" y1="235" x2="176" y2="280" stroke="#ea580c" stroke-width="3"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_frieren_skirt',
    name: 'エルフの金ボーダースカート',
    slotCategory: SlotCategory.BOTTOMS,
    conflictSlots: [SlotCategory.ONE_PIECE],
    svgContent: `
      <!-- Off-white Flare Skirt with Two Gold Bands -->
      <path d="M 126 235 L 174 235 L 186 285 L 114 285 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
      <path d="M 118 272 Q 150 282 182 272" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <path d="M 115 280 Q 150 290 185 280" stroke="#facc15" stroke-width="2.5" fill="none"/>
    `,
  }),

  // ==========================================
  // 4. SHOES (12 items)
  // ==========================================
  new Item({
    id: 'shoes_anime_deku_sneakers',
    name: 'ヒーローの特大レッドハイカット',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Chunky Red High-top Sneakers with Black Soles -->
      <path d="M 124 330 L 146 330 L 148 358 L 118 358 Z" fill="#dc2626"/>
      <path d="M 154 330 L 176 330 L 182 358 L 152 358 Z" fill="#dc2626"/>
      <!-- White Toe Caps & Laces -->
      <ellipse cx="126" cy="355" rx="8" ry="4" fill="#f8fafc"/>
      <ellipse cx="174" cy="355" rx="8" ry="4" fill="#f8fafc"/>
      <!-- Black Thick Soles -->
      <rect x="116" y="356" width="34" height="6" rx="2" fill="#09090b"/>
      <rect x="150" y="356" width="34" height="6" rx="2" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_shinobi_sandals',
    name: '忍者の青足袋オープンサンダル',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Open-toe Blue Ninja Sandals -->
      <path d="M 126 335 L 144 335 L 146 358 L 124 358 Z" fill="#1e40af"/>
      <path d="M 156 335 L 174 335 L 176 358 L 154 358 Z" fill="#1e40af"/>
      <!-- Toes Peeking Out -->
      <ellipse cx="128" cy="356" rx="5" ry="3" fill="#ffedd5"/>
      <ellipse cx="172" cy="356" rx="5" ry="3" fill="#ffedd5"/>
      <!-- Flat Soles -->
      <line x1="122" y1="358" x2="148" y2="358" stroke="#000000" stroke-width="2"/>
      <line x1="152" y1="358" x2="178" y2="358" stroke="#000000" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_scout_boots',
    name: '調査兵団のロングレザーブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Knee-high Dark Brown Leather Boots -->
      <path d="M 126 315 L 146 315 L 148 360 L 120 360 Z" fill="#78350f"/>
      <path d="M 154 315 L 174 315 L 180 360 L 152 360 Z" fill="#78350f"/>
      <!-- Black Soles & Heel -->
      <rect x="118" y="357" width="32" height="4" fill="#09090b"/>
      <rect x="150" y="357" width="32" height="4" fill="#09090b"/>
      <rect x="138" y="360" width="10" height="3" fill="#09090b"/>
      <rect x="152" y="360" width="10" height="3" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_goku_boots',
    name: '亀仙流の武道ブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Black/Dark Blue Kung-fu Boots with Red Laces -->
      <path d="M 126 325 L 146 325 L 148 358 L 120 358 Z" fill="#1e1b4b"/>
      <path d="M 154 325 L 174 325 L 180 358 L 152 358 Z" fill="#1e1b4b"/>
      <!-- Red Lacing Center Line -->
      <line x1="136" y1="326" x2="136" y2="356" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="164" y1="326" x2="164" y2="356" stroke="#dc2626" stroke-width="2.5"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_pirate_sandals',
    name: '海賊王の編み込み草履',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Woven Straw Sandals with Black Thong Strap -->
      <ellipse cx="134" cy="358" rx="14" ry="4" fill="#d97706"/>
      <ellipse cx="166" cy="358" rx="14" ry="4" fill="#d97706"/>
      <!-- Y-shaped Black Strap -->
      <path d="M 128 358 L 134 353 L 140 358" stroke="#000000" stroke-width="2" fill="none"/>
      <path d="M 160 358 L 166 353 L 172 358" stroke="#000000" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_sailor_heels',
    name: 'セーラー戦士のエナメル赤パンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Glossy Red High Heels -->
      <path d="M 126 345 Q 138 340 146 355 L 122 358 Z" fill="#dc2626"/>
      <path d="M 174 345 Q 162 340 154 355 L 178 358 Z" fill="#dc2626"/>
      <!-- High Heel Pegs -->
      <rect x="142" y="355" width="4" height="6" fill="#991b1b"/>
      <rect x="154" y="355" width="4" height="6" fill="#991b1b"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_magical_boots',
    name: '魔法少女のレースアップブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Pink & White Lace-up Boots -->
      <path d="M 126 325 L 146 325 L 148 358 L 122 358 Z" fill="#f472b6"/>
      <path d="M 154 325 L 174 325 L 178 358 L 152 358 Z" fill="#f472b6"/>
      <!-- White Ribbons -->
      <line x1="130" y1="335" x2="142" y2="335" stroke="#ffffff" stroke-width="2"/>
      <line x1="130" y1="345" x2="142" y2="345" stroke="#ffffff" stroke-width="2"/>
      <line x1="158" y1="335" x2="170" y2="335" stroke="#ffffff" stroke-width="2"/>
      <line x1="158" y1="345" x2="170" y2="345" stroke="#ffffff" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_eva_boots',
    name: '初号機サイバーハイトップブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Purple & Neon Green Tech Boots -->
      <path d="M 126 325 L 146 325 L 148 358 L 120 358 Z" fill="#581c87"/>
      <path d="M 154 325 L 174 325 L 180 358 L 152 358 Z" fill="#581c87"/>
      <rect x="120" y="355" width="30" height="5" fill="#4ade80"/>
      <rect x="150" y="355" width="30" height="5" fill="#4ade80"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_eden_loafers',
    name: '名門校のコインローファー＆白ソックス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- White Folded Socks -->
      <rect x="128" y="335" width="16" height="15" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <rect x="156" y="335" width="16" height="15" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Black Glossy Loafers -->
      <path d="M 126 348 L 146 348 L 148 358 L 120 358 Z" fill="#0f172a"/>
      <path d="M 154 348 L 174 348 L 180 358 L 152 358 Z" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_thorn_boots',
    name: 'いばら姫のゴールドピンヒール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Black Strappy Ankle High Heels with Gold Studs -->
      <path d="M 126 345 L 146 345 L 148 358 L 122 358 Z" fill="#09090b"/>
      <path d="M 154 345 L 174 345 L 178 358 L 152 358 Z" fill="#09090b"/>
      <circle cx="136" cy="347" r="2" fill="#facc15"/>
      <circle cx="164" cy="347" r="2" fill="#facc15"/>
      <rect x="142" y="356" width="3" height="6" fill="#facc15"/>
      <rect x="155" y="356" width="3" height="6" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_frieren_boots',
    name: '千年の旅路レザーショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Cuffed Brown Soft Leather Boots -->
      <path d="M 126 332 L 146 332 L 148 358 L 122 358 Z" fill="#92400e"/>
      <path d="M 154 332 L 174 332 L 178 358 L 152 358 Z" fill="#92400e"/>
      <!-- Folded Cuff -->
      <rect x="124" y="330" width="24" height="6" rx="2" fill="#b45309"/>
      <rect x="152" y="330" width="24" height="6" rx="2" fill="#b45309"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_swordsman_boots',
    name: '黒の剣士バックルロングブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Black Leather Boots with Silver Metal Buckles -->
      <path d="M 126 320 L 146 320 L 148 360 L 120 360 Z" fill="#09090b"/>
      <path d="M 154 320 L 174 320 L 180 360 L 152 360 Z" fill="#09090b"/>
      <rect x="130" y="335" width="12" height="4" fill="#cbd5e1"/>
      <rect x="158" y="335" width="12" height="4" fill="#cbd5e1"/>
    `,
  }),

  // ==========================================
  // 5. ACCESSORY (18 items)
  // ==========================================
  new Item({
    id: 'acc_anime_straw_hat',
    name: '伝説の麦わら帽子（赤リボン）',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Straw Hat with Red Ribbon -->
      <ellipse cx="150" cy="72" rx="48" ry="16" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <path d="M 130 70 C 130 52 170 52 170 70 Z" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Red Ribbon -->
      <path d="M 130 68 Q 150 72 170 68" stroke="#dc2626" stroke-width="4.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_anime_leaf_headband',
    name: '木ノ葉隠れの青額当て',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Blue Bandana with Metal Plate & Leaf Symbol -->
      <rect x="118" y="86" width="64" height="12" rx="3" fill="#1e40af"/>
      <rect x="134" y="87" width="32" height="10" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
      <!-- Leaf Spiral Insignia -->
      <path d="M 150 92 Q 146 90 148 93 Q 152 95 150 92" stroke="#0f172a" stroke-width="1.2" fill="none"/>
      <!-- Metal Rivets -->
      <circle cx="136" cy="92" r="1" fill="#475569"/>
      <circle cx="164" cy="92" r="1" fill="#475569"/>
    `,
  }),
  new Item({
    id: 'acc_anime_tanjiro_earrings',
    name: '日輪の耳飾り＆炎の傷痕',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Hanafuda Earrings -->
      <rect x="94" y="118" width="6" height="15" rx="1" fill="#f8fafc" stroke="#dc2626" stroke-width="1"/>
      <circle cx="97" cy="122" r="2" fill="#dc2626"/>
      <rect x="200" y="118" width="6" height="15" rx="1" fill="#f8fafc" stroke="#dc2626" stroke-width="1"/>
      <circle cx="203" cy="122" r="2" fill="#dc2626"/>
      <!-- Forehead Flame Scar -->
      <path d="M 126 88 Q 123 93 126 98 Q 128 92 126 88" fill="#991b1b"/>
    `,
  }),
  new Item({
    id: 'acc_anime_inosuke_hood',
    name: '猪突猛進の毛皮フード',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Wild Boar Mask Hood -->
      <ellipse cx="150" cy="80" rx="40" ry="32" fill="#94a3b8"/>
      <!-- Pink Snout -->
      <ellipse cx="150" cy="95" rx="14" ry="9" fill="#f472b6"/>
      <circle cx="145" cy="95" r="2.5" fill="#831843"/>
      <circle cx="155" cy="95" r="2.5" fill="#831843"/>
      <!-- Tusks -->
      <polygon points="134,98 130,108 138,103" fill="#f8fafc"/>
      <polygon points="166,98 170,108 162,103" fill="#f8fafc"/>
      <!-- Big Blue Eyes -->
      <circle cx="132" cy="85" r="6" fill="#38bdf8"/>
      <circle cx="168" cy="85" r="6" fill="#38bdf8"/>
      <!-- Boar Ears -->
      <ellipse cx="118" cy="62" rx="8" ry="12" fill="#64748b"/>
      <ellipse cx="182" cy="62" rx="8" ry="12" fill="#64748b"/>
    `,
  }),
  new Item({
    id: 'acc_anime_scout_hood',
    name: '兵団の深緑フードケープ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Dark Green Scout Hood -->
      <path d="M 112 105 C 108 60 192 60 188 105 C 178 80 122 80 112 105 Z" fill="#14532d"/>
    `,
  }),
  new Item({
    id: 'acc_anime_gojo_blindfold',
    name: '六眼を封じる漆黒アイマスク',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Black Blindfold over Eyes -->
      <rect x="110" y="105" width="80" height="22" rx="4" fill="#09090b"/>
      <line x1="110" y1="116" x2="190" y2="116" stroke="#27272a" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_anime_moon_tiara',
    name: '月の守護者の三日月ティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Golden Tiara with Red Ruby -->
      <path d="M 124 94 Q 150 99 176 94" stroke="#facc15" stroke-width="3" fill="none"/>
      <!-- Red Gem in Center -->
      <circle cx="150" cy="96" r="3.5" fill="#ef4444" stroke="#facc15" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_anime_eva_headset',
    name: 'シンクロ率を高める頭部インターフェース',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- A10 Interface Headset Clips on Both Temples -->
      <rect x="105" y="90" width="8" height="18" rx="2" fill="#dc2626"/>
      <rect x="107" y="94" width="4" height="6" fill="#f8fafc"/>
      <rect x="187" y="90" width="8" height="18" rx="2" fill="#dc2626"/>
      <rect x="189" y="94" width="4" height="6" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'acc_anime_kiki_bow',
    name: '空飛ぶ魔女の特大レッドリボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Oversized Bright Red Head Ribbon -->
      <path d="M 150 72 C 130 52 110 65 125 80 C 135 84 145 76 150 72 Z" fill="#dc2626"/>
      <path d="M 150 72 C 170 52 190 65 175 80 C 165 84 155 76 150 72 Z" fill="#dc2626"/>
      <circle cx="150" cy="74" r="5" fill="#b91c1c"/>
    `,
  }),
  new Item({
    id: 'acc_anime_mononoke_headband',
    name: '山犬の赤い額当て＆首飾り',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Red Tribal Headband & Shell Earrings -->
      <rect x="116" y="88" width="68" height="6" rx="2" fill="#b91c1c"/>
      <circle cx="150" cy="91" r="3" fill="#f8fafc"/>
      <!-- White Shell Disc Earrings -->
      <circle cx="98" cy="120" r="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="202" cy="120" r="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_anime_ace_hat',
    name: '火拳のオレンジテンガロンハット',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Orange Cowboy Hat with Blue Beaded Band & Smiley/Frowny Medallions -->
      <ellipse cx="150" cy="74" rx="46" ry="14" fill="#ea580c"/>
      <path d="M 132 72 C 132 50 168 50 168 72 Z" fill="#ea580c"/>
      <!-- Blue Beaded Band -->
      <path d="M 132 70 Q 150 74 168 70" stroke="#0284c7" stroke-width="3" fill="none"/>
      <!-- Red Beaded Hanging Strap -->
      <path d="M 120 74 C 112 95 115 130 135 145" stroke="#dc2626" stroke-width="2.5" fill="none"/>
      <path d="M 180 74 C 188 95 185 130 165 145" stroke="#dc2626" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_anime_law_cap',
    name: '死の外科医の斑点キャスケット',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- White Fluffy Newsboy Cap with Black Spots -->
      <ellipse cx="150" cy="76" rx="44" ry="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <ellipse cx="134" cy="72" rx="4" ry="3" fill="#09090b"/>
      <ellipse cx="162" cy="70" rx="5" ry="3" fill="#09090b"/>
      <ellipse cx="148" cy="80" rx="4" ry="2.5" fill="#09090b"/>
      <ellipse cx="125" cy="82" rx="3" ry="2" fill="#09090b"/>
      <ellipse cx="172" cy="80" rx="3" ry="2" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'acc_anime_anbu_mask',
    name: '暗部の狐面（斜めがけ）',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- ANBU Fox Mask Slanted on Head -->
      <g transform="translate(160, 65) rotate(15)">
        <ellipse cx="0" cy="0" rx="18" ry="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
        <polygon points="-12,-18 -16,-30 -6,-20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <polygon points="12,-18 16,-30 6,-20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <!-- Red Fox Whisker Markings -->
        <path d="M -10 -2 Q -4 4 0 6 Q 4 4 10 -2" stroke="#dc2626" stroke-width="2" fill="none"/>
        <circle cx="0" cy="6" r="2" fill="#09090b"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_soul_gem',
    name: '願いを叶えるソウルジェム',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Glowing Soul Gem Pendant -->
      <path d="M 144 170 Q 150 180 156 170" stroke="#facc15" stroke-width="2" fill="none"/>
      <polygon points="150,175 155,185 150,192 145,185" fill="#f43f5e" stroke="#facc15" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_anime_frieren_earrings',
    name: 'エルフの長寿ルビーピアス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Long Red Teardrop Earrings -->
      <line x1="97" y1="120" x2="97" y2="132" stroke="#facc15" stroke-width="1.5"/>
      <polygon points="97,132 100,138 97,144 94,138" fill="#dc2626"/>
      <line x1="203" y1="120" x2="203" y2="132" stroke="#facc15" stroke-width="1.5"/>
      <polygon points="203,132 206,138 203,144 200,138" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'acc_anime_anya_horns',
    name: '古の魔法使いの三角髪飾り',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Black & Gold Triangular Horn Cones on Hair Sides -->
      <polygon points="112,85 118,68 124,85" fill="#09090b" stroke="#facc15" stroke-width="1.5"/>
      <polygon points="176,85 182,68 188,85" fill="#09090b" stroke="#facc15" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_anime_alchemist_watch',
    name: '国家錬金術師の銀時計チェーン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Silver Pocket Watch & Chain on Hip -->
      <path d="M 135 235 Q 142 250 148 238" stroke="#cbd5e1" stroke-width="2" fill="none"/>
      <circle cx="136" cy="245" r="4.5" fill="#94a3b8" stroke="#e2e8f0" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_anime_bocchi_guitar_strap',
    name: 'ギタリストのブラックストラップ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Black Guitar Strap Slung Across Chest -->
      <line x1="124" y1="172" x2="176" y2="245" stroke="#09090b" stroke-width="6"/>
      <line x1="124" y1="172" x2="176" y2="245" stroke="#3f3f46" stroke-width="1.5"/>
    `,
  }),
];
