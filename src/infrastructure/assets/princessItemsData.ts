import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export const PRINCESS_ITEMS: readonly Item[] = [
  new Item({
    id: 'dress_princess_cinderella_1',
    name: 'シンデレラ・ロイヤルクリスタルドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_cinderella_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#facc15" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#facc15" stroke="#0284c7" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ffffff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#38bdf8" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#facc15" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#facc15"/>
      <circle cx="182" cy="180" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_cinderella_2',
    name: 'シンデレラ・ロイヤルクリスタルドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_cinderella_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ffffff" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#e0f2fe"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#facc15"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#38bdf8"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#facc15"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#38bdf8" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#e0f2fe" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#e0f2fe"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#e0f2fe"/>
    `,
  }),
  new Item({
    id: 'dress_princess_cinderella_3',
    name: 'シンデレラ・ロイヤルクリスタルドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_cinderella_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#facc15" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#facc15"/>
      <circle cx="194" cy="245" r="4" fill="#facc15"/>
      <circle cx="150" cy="232" r="4.5" fill="#facc15"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ffffff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_cinderella_4',
    name: 'シンデレラ・ロイヤルクリスタルドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_cinderella_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ffffff"/>
      <circle cx="150" cy="192" r="2.5" fill="#facc15"/>
      <circle cx="162" cy="188" r="2" fill="#ffffff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#38bdf8"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_cinderella_5',
    name: 'シンデレラ・ロイヤルクリスタルドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_cinderella_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#facc15"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#38bdf8"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#facc15" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#facc15"/>
      <circle cx="170" cy="310" r="3" fill="#facc15"/>
      <circle cx="150" cy="330" r="3.5" fill="#ffffff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#facc15"/>
      <polygon points="174,174 190,165 184,185" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_snow_white_1',
    name: '白雪姫・アップルブロッサムドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_snow_white_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#1d4ed8" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#1d4ed8" stroke="#991b1b" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#fef9c3"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#fde047" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#ef4444" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#1d4ed8"/>
      <circle cx="182" cy="180" r="3.5" fill="#1d4ed8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_snow_white_2',
    name: '白雪姫・アップルブロッサムドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_snow_white_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#fef9c3" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#fde047"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#1d4ed8"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#ef4444"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#1d4ed8"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#ef4444" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#fde047" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#1d4ed8" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#fde047"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'dress_princess_snow_white_3',
    name: '白雪姫・アップルブロッサムドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_snow_white_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#fde047" stroke="#991b1b" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#1d4ed8" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#fde047" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#1d4ed8"/>
      <circle cx="194" cy="245" r="4" fill="#1d4ed8"/>
      <circle cx="150" cy="232" r="4.5" fill="#1d4ed8"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#fef9c3"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#fef9c3"/>
    `,
  }),
  new Item({
    id: 'dress_princess_snow_white_4',
    name: '白雪姫・アップルブロッサムドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_snow_white_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#fef9c3"/>
      <circle cx="150" cy="192" r="2.5" fill="#1d4ed8"/>
      <circle cx="162" cy="188" r="2" fill="#fef9c3"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#ef4444"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#fde047" stroke="#991b1b" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#1d4ed8" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#fef9c3" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#fef9c3" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_snow_white_5',
    name: '白雪姫・アップルブロッサムドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_snow_white_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#1d4ed8"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#ef4444"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#1d4ed8" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#fde047" stroke="#991b1b" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#1d4ed8"/>
      <circle cx="170" cy="310" r="3" fill="#1d4ed8"/>
      <circle cx="150" cy="330" r="3.5" fill="#fef9c3"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#1d4ed8"/>
      <polygon points="174,174 190,165 184,185" fill="#1d4ed8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_aurora_1',
    name: 'オーロラ姫・ローズドリームガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_aurora_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#f472b6" stroke="#be185d" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#f59e0b" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#f59e0b" stroke="#be185d" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#fff1f2"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#f472b6" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#f472b6" stroke="#be185d" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#f472b6" stroke="#be185d" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#f59e0b"/>
      <circle cx="182" cy="180" r="3.5" fill="#f59e0b"/>
    `,
  }),
  new Item({
    id: 'dress_princess_aurora_2',
    name: 'オーロラ姫・ローズドリームガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_aurora_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#fff1f2" stroke="#be185d" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#fce7f3"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#f59e0b"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#f472b6"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#f59e0b"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#f472b6" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#f472b6" stroke="#be185d" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#fce7f3" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#fce7f3"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#fce7f3"/>
    `,
  }),
  new Item({
    id: 'dress_princess_aurora_3',
    name: 'オーロラ姫・ローズドリームガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_aurora_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#f472b6" stroke="#be185d" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#f472b6" stroke="#be185d" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#f59e0b"/>
      <circle cx="194" cy="245" r="4" fill="#f59e0b"/>
      <circle cx="150" cy="232" r="4.5" fill="#f59e0b"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#fff1f2"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#fff1f2"/>
    `,
  }),
  new Item({
    id: 'dress_princess_aurora_4',
    name: 'オーロラ姫・ローズドリームガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_aurora_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#f472b6" stroke="#be185d" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#fff1f2"/>
      <circle cx="150" cy="192" r="2.5" fill="#f59e0b"/>
      <circle cx="162" cy="188" r="2" fill="#fff1f2"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#f472b6"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#fff1f2" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#fff1f2" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_aurora_5',
    name: 'オーロラ姫・ローズドリームガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_aurora_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#be185d" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#f59e0b"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#f472b6"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#f59e0b" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#fce7f3" stroke="#be185d" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#f59e0b"/>
      <circle cx="170" cy="310" r="3" fill="#f59e0b"/>
      <circle cx="150" cy="330" r="3.5" fill="#fff1f2"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#f59e0b"/>
      <polygon points="174,174 190,165 184,185" fill="#f59e0b"/>
    `,
  }),
  new Item({
    id: 'dress_princess_belle_1',
    name: 'ベル・ノーブルゴールデンドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_belle_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#dc2626" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#dc2626" stroke="#a16207" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#fefce8"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#eab308" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#eab308" stroke="#a16207" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#eab308" stroke="#a16207" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#dc2626"/>
      <circle cx="182" cy="180" r="3.5" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'dress_princess_belle_2',
    name: 'ベル・ノーブルゴールデンドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_belle_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#fefce8" stroke="#a16207" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#fef08a"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#dc2626"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#eab308"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#dc2626"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#eab308" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#fef08a" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#dc2626" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#fef08a"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_belle_3',
    name: 'ベル・ノーブルゴールデンドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_belle_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#dc2626"/>
      <circle cx="194" cy="245" r="4" fill="#dc2626"/>
      <circle cx="150" cy="232" r="4.5" fill="#dc2626"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#fefce8"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#fefce8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_belle_4',
    name: 'ベル・ノーブルゴールデンドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_belle_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#fefce8"/>
      <circle cx="150" cy="192" r="2.5" fill="#dc2626"/>
      <circle cx="162" cy="188" r="2" fill="#fefce8"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#eab308"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#dc2626" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#fefce8" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#fefce8" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_belle_5',
    name: 'ベル・ノーブルゴールデンドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_belle_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#a16207" stroke="#eab308" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#dc2626"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#eab308"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#dc2626" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#dc2626"/>
      <circle cx="170" cy="310" r="3" fill="#dc2626"/>
      <circle cx="150" cy="330" r="3.5" fill="#fefce8"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#dc2626"/>
      <polygon points="174,174 190,165 184,185" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ariel_1',
    name: 'アリエル・アクアマーメイドドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ariel_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#f43f5e" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#f43f5e" stroke="#047857" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ecfdf5"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#10b981" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#10b981" stroke="#047857" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#10b981" stroke="#047857" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#f43f5e"/>
      <circle cx="182" cy="180" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ariel_2',
    name: 'アリエル・アクアマーメイドドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ariel_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ecfdf5" stroke="#047857" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#a7f3d0"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#f43f5e"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#10b981"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#f43f5e"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#10b981" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#a7f3d0" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#f43f5e" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#a7f3d0"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#a7f3d0"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ariel_3',
    name: 'アリエル・アクアマーメイドドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ariel_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#f43f5e" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#f43f5e"/>
      <circle cx="194" cy="245" r="4" fill="#f43f5e"/>
      <circle cx="150" cy="232" r="4.5" fill="#f43f5e"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ecfdf5"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ecfdf5"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ariel_4',
    name: 'アリエル・アクアマーメイドドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ariel_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ecfdf5"/>
      <circle cx="150" cy="192" r="2.5" fill="#f43f5e"/>
      <circle cx="162" cy="188" r="2" fill="#ecfdf5"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#10b981"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#f43f5e" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ecfdf5" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ecfdf5" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ariel_5',
    name: 'アリエル・アクアマーメイドドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ariel_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#047857" stroke="#10b981" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#f43f5e"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#10b981"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#f43f5e" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#a7f3d0" stroke="#047857" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#f43f5e"/>
      <circle cx="170" cy="310" r="3" fill="#f43f5e"/>
      <circle cx="150" cy="330" r="3.5" fill="#ecfdf5"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#f43f5e"/>
      <polygon points="174,174 190,165 184,185" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'dress_princess_rapunzel_1',
    name: 'ラプンツェル・フラワーブレイズドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_rapunzel_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#a855f7" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#facc15" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#facc15" stroke="#7e22ce" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#faf5ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#a855f7" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#facc15" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#a855f7" stroke="#7e22ce" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#a855f7" stroke="#7e22ce" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#facc15"/>
      <circle cx="182" cy="180" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_rapunzel_2',
    name: 'ラプンツェル・フラワーブレイズドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_rapunzel_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#faf5ff" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#f3e8ff"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#facc15"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#a855f7"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#facc15"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#a855f7" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#a855f7" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#f3e8ff" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#f3e8ff"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#f3e8ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_rapunzel_3',
    name: 'ラプンツェル・フラワーブレイズドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_rapunzel_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#facc15" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#a855f7" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#a855f7" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#facc15"/>
      <circle cx="194" cy="245" r="4" fill="#facc15"/>
      <circle cx="150" cy="232" r="4.5" fill="#facc15"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#faf5ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#faf5ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_rapunzel_4',
    name: 'ラプンツェル・フラワーブレイズドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_rapunzel_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#a855f7" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#faf5ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#facc15"/>
      <circle cx="162" cy="188" r="2" fill="#faf5ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#a855f7"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#faf5ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#faf5ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_rapunzel_5',
    name: 'ラプンツェル・フラワーブレイズドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_rapunzel_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#7e22ce" stroke="#a855f7" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#facc15"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#a855f7"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#facc15" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#f3e8ff" stroke="#7e22ce" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#facc15"/>
      <circle cx="170" cy="310" r="3" fill="#facc15"/>
      <circle cx="150" cy="330" r="3.5" fill="#faf5ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#facc15"/>
      <polygon points="174,174 190,165 184,185" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_jasmine_1',
    name: 'ジャスミン・アラビアンスターガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_jasmine_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#eab308" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#eab308" stroke="#0e7490" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ecfeff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#cffafe" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#06b6d4" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#eab308" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#06b6d4" stroke="#0e7490" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#06b6d4" stroke="#0e7490" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#eab308"/>
      <circle cx="182" cy="180" r="3.5" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'dress_princess_jasmine_2',
    name: 'ジャスミン・アラビアンスターガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_jasmine_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ecfeff" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#cffafe"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#eab308"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#06b6d4"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#eab308"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#06b6d4" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#cffafe" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#eab308" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#cffafe"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#cffafe"/>
    `,
  }),
  new Item({
    id: 'dress_princess_jasmine_3',
    name: 'ジャスミン・アラビアンスターガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_jasmine_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#cffafe" stroke="#0e7490" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#eab308" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#cffafe" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#eab308"/>
      <circle cx="194" cy="245" r="4" fill="#eab308"/>
      <circle cx="150" cy="232" r="4.5" fill="#eab308"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ecfeff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ecfeff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_jasmine_4',
    name: 'ジャスミン・アラビアンスターガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_jasmine_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ecfeff"/>
      <circle cx="150" cy="192" r="2.5" fill="#eab308"/>
      <circle cx="162" cy="188" r="2" fill="#ecfeff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#06b6d4"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#cffafe" stroke="#0e7490" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#eab308" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ecfeff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ecfeff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_jasmine_5',
    name: 'ジャスミン・アラビアンスターガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_jasmine_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#0e7490" stroke="#06b6d4" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#eab308"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#06b6d4"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#eab308" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#cffafe" stroke="#0e7490" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#eab308"/>
      <circle cx="170" cy="310" r="3" fill="#eab308"/>
      <circle cx="150" cy="330" r="3.5" fill="#ecfeff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#eab308"/>
      <polygon points="174,174 190,165 184,185" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'dress_princess_alice_1',
    name: 'アリス・ワンダーランドクイーンドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_alice_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#1e293b" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#1e293b" stroke="#2563eb" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#eff6ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#60a5fa" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#1e293b" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#60a5fa" stroke="#2563eb" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#60a5fa" stroke="#2563eb" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#1e293b"/>
      <circle cx="182" cy="180" r="3.5" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'dress_princess_alice_2',
    name: 'アリス・ワンダーランドクイーンドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_alice_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#ffffff"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#1e293b"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#60a5fa"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#1e293b"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#60a5fa" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#ffffff" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#1e293b" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#ffffff"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_alice_3',
    name: 'アリス・ワンダーランドクイーンドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_alice_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#1e293b" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#1e293b"/>
      <circle cx="194" cy="245" r="4" fill="#1e293b"/>
      <circle cx="150" cy="232" r="4.5" fill="#1e293b"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#eff6ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#eff6ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_alice_4',
    name: 'アリス・ワンダーランドクイーンドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_alice_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#eff6ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#1e293b"/>
      <circle cx="162" cy="188" r="2" fill="#eff6ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#60a5fa"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#1e293b" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#eff6ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#eff6ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_alice_5',
    name: 'アリス・ワンダーランドクイーンドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_alice_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#2563eb" stroke="#60a5fa" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#1e293b"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#60a5fa"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#1e293b" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#1e293b"/>
      <circle cx="170" cy="310" r="3" fill="#1e293b"/>
      <circle cx="150" cy="330" r="3.5" fill="#eff6ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#1e293b"/>
      <polygon points="174,174 190,165 184,185" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_white_1',
    name: 'オデット・白鳥のフェザードレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_white_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#94a3b8" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ffffff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#f8fafc" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#94a3b8"/>
      <circle cx="182" cy="180" r="3.5" fill="#94a3b8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_white_2',
    name: 'オデット・白鳥のフェザードレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_white_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#e2e8f0"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#94a3b8"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#f8fafc"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#94a3b8"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#f8fafc" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#e2e8f0" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#94a3b8" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#e2e8f0"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#e2e8f0"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_white_3',
    name: 'オデット・白鳥のフェザードレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_white_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#94a3b8"/>
      <circle cx="194" cy="245" r="4" fill="#94a3b8"/>
      <circle cx="150" cy="232" r="4.5" fill="#94a3b8"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ffffff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_white_4',
    name: 'オデット・白鳥のフェザードレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_white_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ffffff"/>
      <circle cx="150" cy="192" r="2.5" fill="#94a3b8"/>
      <circle cx="162" cy="188" r="2" fill="#ffffff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#f8fafc"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#94a3b8" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_white_5',
    name: 'オデット・白鳥のフェザードレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_white_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#cbd5e1" stroke="#f8fafc" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#94a3b8"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#f8fafc"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#94a3b8" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#94a3b8"/>
      <circle cx="170" cy="310" r="3" fill="#94a3b8"/>
      <circle cx="150" cy="330" r="3.5" fill="#ffffff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#94a3b8"/>
      <polygon points="174,174 190,165 184,185" fill="#94a3b8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_black_1',
    name: 'オディール・黒鳥のゴシックガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_black_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#e11d48" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#e11d48" stroke="#09090b" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#71717a"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#3f3f46" stroke="#09090b" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#18181b" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#18181b" stroke="#09090b" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#18181b" stroke="#09090b" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#e11d48"/>
      <circle cx="182" cy="180" r="3.5" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_black_2',
    name: 'オディール・黒鳥のゴシックガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_black_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#71717a" stroke="#09090b" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#3f3f46"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#e11d48"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#18181b"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#e11d48"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#18181b" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#3f3f46" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#e11d48" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#3f3f46"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#3f3f46"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_black_3',
    name: 'オディール・黒鳥のゴシックガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_black_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#3f3f46" stroke="#09090b" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#e11d48" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#3f3f46" stroke="#09090b" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#e11d48"/>
      <circle cx="194" cy="245" r="4" fill="#e11d48"/>
      <circle cx="150" cy="232" r="4.5" fill="#e11d48"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#71717a"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#71717a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_black_4',
    name: 'オディール・黒鳥のゴシックガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_black_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#18181b" stroke="#09090b" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#71717a"/>
      <circle cx="150" cy="192" r="2.5" fill="#e11d48"/>
      <circle cx="162" cy="188" r="2" fill="#71717a"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#18181b"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#3f3f46" stroke="#09090b" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#e11d48" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#71717a" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#71717a" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_swan_black_5',
    name: 'オディール・黒鳥のゴシックガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_swan_black_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#09090b" stroke="#18181b" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#e11d48"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#18181b"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#e11d48" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#3f3f46" stroke="#09090b" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#e11d48"/>
      <circle cx="170" cy="310" r="3" fill="#e11d48"/>
      <circle cx="150" cy="330" r="3.5" fill="#71717a"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#e11d48"/>
      <polygon points="174,174 190,165 184,185" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'dress_princess_diamond_1',
    name: 'ダイヤモンド・プリズムスターガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_diamond_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#ffffff" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#ffffff" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#f0f9ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#e0f2fe" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#ffffff"/>
      <circle cx="182" cy="180" r="3.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_diamond_2',
    name: 'ダイヤモンド・プリズムスターガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_diamond_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#f0f9ff" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#bae6fd"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#ffffff"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#e0f2fe"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#ffffff"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#e0f2fe" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#bae6fd" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#ffffff" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#bae6fd"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#bae6fd"/>
    `,
  }),
  new Item({
    id: 'dress_princess_diamond_3',
    name: 'ダイヤモンド・プリズムスターガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_diamond_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#ffffff" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#ffffff"/>
      <circle cx="194" cy="245" r="4" fill="#ffffff"/>
      <circle cx="150" cy="232" r="4.5" fill="#ffffff"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#f0f9ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#f0f9ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_diamond_4',
    name: 'ダイヤモンド・プリズムスターガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_diamond_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#f0f9ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#ffffff"/>
      <circle cx="162" cy="188" r="2" fill="#f0f9ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#e0f2fe"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#ffffff" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#f0f9ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#f0f9ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_diamond_5',
    name: 'ダイヤモンド・プリズムスターガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_diamond_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#ffffff"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#e0f2fe"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#ffffff" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#ffffff"/>
      <circle cx="170" cy="310" r="3" fill="#ffffff"/>
      <circle cx="150" cy="330" r="3.5" fill="#f0f9ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#ffffff"/>
      <polygon points="174,174 190,165 184,185" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ruby_1',
    name: 'ルビー・クリムゾンローズガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ruby_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#fbbf24" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#fbbf24" stroke="#9f1239" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#fff1f2"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#e11d48" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#e11d48" stroke="#9f1239" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#e11d48" stroke="#9f1239" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#fbbf24"/>
      <circle cx="182" cy="180" r="3.5" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ruby_2',
    name: 'ルビー・クリムゾンローズガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ruby_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#fff1f2" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#ffe4e6"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#fbbf24"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#e11d48"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#fbbf24"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#e11d48" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#ffe4e6" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#fbbf24" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#ffe4e6"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#ffe4e6"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ruby_3',
    name: 'ルビー・クリムゾンローズガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ruby_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#fbbf24" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#fbbf24"/>
      <circle cx="194" cy="245" r="4" fill="#fbbf24"/>
      <circle cx="150" cy="232" r="4.5" fill="#fbbf24"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#fff1f2"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#fff1f2"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ruby_4',
    name: 'ルビー・クリムゾンローズガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ruby_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#e11d48" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#fff1f2"/>
      <circle cx="150" cy="192" r="2.5" fill="#fbbf24"/>
      <circle cx="162" cy="188" r="2" fill="#fff1f2"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#e11d48"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#fbbf24" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#fff1f2" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#fff1f2" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_ruby_5',
    name: 'ルビー・クリムゾンローズガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_ruby_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#9f1239" stroke="#e11d48" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#fbbf24"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#e11d48"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#fbbf24" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#ffe4e6" stroke="#9f1239" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#fbbf24"/>
      <circle cx="170" cy="310" r="3" fill="#fbbf24"/>
      <circle cx="150" cy="330" r="3.5" fill="#fff1f2"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#fbbf24"/>
      <polygon points="174,174 190,165 184,185" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sapphire_1',
    name: 'サファイア・ミッドナイトブルードレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sapphire_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#fde047" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#fde047" stroke="#1e3a8a" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#eff6ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#1d4ed8" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#fde047" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#fde047"/>
      <circle cx="182" cy="180" r="3.5" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sapphire_2',
    name: 'サファイア・ミッドナイトブルードレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sapphire_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#eff6ff" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#dbeafe"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#fde047"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#1d4ed8"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#fde047"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#1d4ed8" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#dbeafe" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#fde047" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#dbeafe"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#dbeafe"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sapphire_3',
    name: 'サファイア・ミッドナイトブルードレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sapphire_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#fde047" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#fde047"/>
      <circle cx="194" cy="245" r="4" fill="#fde047"/>
      <circle cx="150" cy="232" r="4.5" fill="#fde047"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#eff6ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#eff6ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sapphire_4',
    name: 'サファイア・ミッドナイトブルードレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sapphire_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#eff6ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#fde047"/>
      <circle cx="162" cy="188" r="2" fill="#eff6ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#1d4ed8"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#fde047" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#eff6ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#eff6ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sapphire_5',
    name: 'サファイア・ミッドナイトブルードレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sapphire_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#fde047"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#1d4ed8"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#fde047" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#fde047"/>
      <circle cx="170" cy="310" r="3" fill="#fde047"/>
      <circle cx="150" cy="330" r="3.5" fill="#eff6ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#fde047"/>
      <polygon points="174,174 190,165 184,185" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'dress_princess_emerald_1',
    name: 'エメラルド・フォレストフェアリードレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_emerald_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#059669" stroke="#065f46" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#facc15" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#facc15" stroke="#065f46" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ecfdf5"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#d1fae5" stroke="#065f46" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#059669" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#facc15" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#059669" stroke="#065f46" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#059669" stroke="#065f46" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#facc15"/>
      <circle cx="182" cy="180" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_emerald_2',
    name: 'エメラルド・フォレストフェアリードレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_emerald_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ecfdf5" stroke="#065f46" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#d1fae5"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#facc15"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#059669"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#facc15"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#059669" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#059669" stroke="#065f46" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#d1fae5" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#d1fae5"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#d1fae5"/>
    `,
  }),
  new Item({
    id: 'dress_princess_emerald_3',
    name: 'エメラルド・フォレストフェアリードレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_emerald_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#d1fae5" stroke="#065f46" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#facc15" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#059669" stroke="#065f46" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#d1fae5" stroke="#065f46" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#059669" stroke="#065f46" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#facc15"/>
      <circle cx="194" cy="245" r="4" fill="#facc15"/>
      <circle cx="150" cy="232" r="4.5" fill="#facc15"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ecfdf5"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ecfdf5"/>
    `,
  }),
  new Item({
    id: 'dress_princess_emerald_4',
    name: 'エメラルド・フォレストフェアリードレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_emerald_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#059669" stroke="#065f46" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ecfdf5"/>
      <circle cx="150" cy="192" r="2.5" fill="#facc15"/>
      <circle cx="162" cy="188" r="2" fill="#ecfdf5"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#059669"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#d1fae5" stroke="#065f46" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ecfdf5" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ecfdf5" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_emerald_5',
    name: 'エメラルド・フォレストフェアリードレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_emerald_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#065f46" stroke="#059669" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#facc15"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#059669"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#facc15" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#d1fae5" stroke="#065f46" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#facc15"/>
      <circle cx="170" cy="310" r="3" fill="#facc15"/>
      <circle cx="150" cy="330" r="3.5" fill="#ecfdf5"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#facc15"/>
      <polygon points="174,174 190,165 184,185" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_amethyst_1',
    name: 'アメジスト・ミスティックムーンガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_amethyst_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#f472b6" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#f472b6" stroke="#5b21b6" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#f5f3ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#7c3aed" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#f472b6" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#7c3aed" stroke="#5b21b6" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#7c3aed" stroke="#5b21b6" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#f472b6"/>
      <circle cx="182" cy="180" r="3.5" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'dress_princess_amethyst_2',
    name: 'アメジスト・ミスティックムーンガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_amethyst_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#f5f3ff" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#ede9fe"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#f472b6"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#7c3aed"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#f472b6"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#7c3aed" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#ede9fe" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#f472b6" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#ede9fe"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#ede9fe"/>
    `,
  }),
  new Item({
    id: 'dress_princess_amethyst_3',
    name: 'アメジスト・ミスティックムーンガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_amethyst_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#f472b6"/>
      <circle cx="194" cy="245" r="4" fill="#f472b6"/>
      <circle cx="150" cy="232" r="4.5" fill="#f472b6"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#f5f3ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#f5f3ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_amethyst_4',
    name: 'アメジスト・ミスティックムーンガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_amethyst_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#f5f3ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#f472b6"/>
      <circle cx="162" cy="188" r="2" fill="#f5f3ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#7c3aed"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#f472b6" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#f5f3ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#f5f3ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_amethyst_5',
    name: 'アメジスト・ミスティックムーンガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_amethyst_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#5b21b6" stroke="#7c3aed" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#f472b6"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#7c3aed"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#f472b6" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#f472b6"/>
      <circle cx="170" cy="310" r="3" fill="#f472b6"/>
      <circle cx="150" cy="330" r="3.5" fill="#f5f3ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#f472b6"/>
      <polygon points="174,174 190,165 184,185" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'dress_princess_opal_1',
    name: 'オパール・オーロライリディセントドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_opal_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#fef08a" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#fef08a" stroke="#f472b6" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ffffff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#cffafe" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#fbcfe8" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#fef08a" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#fbcfe8" stroke="#f472b6" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#fbcfe8" stroke="#f472b6" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#fef08a"/>
      <circle cx="182" cy="180" r="3.5" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_opal_2',
    name: 'オパール・オーロライリディセントドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_opal_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ffffff" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#cffafe"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#fef08a"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#fbcfe8"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#fef08a"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#fbcfe8" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#cffafe" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#fef08a" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#cffafe"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#cffafe"/>
    `,
  }),
  new Item({
    id: 'dress_princess_opal_3',
    name: 'オパール・オーロライリディセントドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_opal_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#cffafe" stroke="#f472b6" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#fef08a" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#cffafe" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#fef08a"/>
      <circle cx="194" cy="245" r="4" fill="#fef08a"/>
      <circle cx="150" cy="232" r="4.5" fill="#fef08a"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ffffff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_opal_4',
    name: 'オパール・オーロライリディセントドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_opal_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ffffff"/>
      <circle cx="150" cy="192" r="2.5" fill="#fef08a"/>
      <circle cx="162" cy="188" r="2" fill="#ffffff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#fbcfe8"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#cffafe" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#fef08a" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_opal_5',
    name: 'オパール・オーロライリディセントドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_opal_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#f472b6" stroke="#fbcfe8" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#fef08a"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#fbcfe8"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#fef08a" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#cffafe" stroke="#f472b6" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#fef08a"/>
      <circle cx="170" cy="310" r="3" fill="#fef08a"/>
      <circle cx="150" cy="330" r="3.5" fill="#ffffff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#fef08a"/>
      <polygon points="174,174 190,165 184,185" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pearl_1',
    name: 'パール・オーシャンマーメイドガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_pearl_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#cbd5e1" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#cbd5e1" stroke="#f59e0b" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#ffffff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#fffbeb" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#fffbeb" stroke="#f59e0b" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#fffbeb" stroke="#f59e0b" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#cbd5e1"/>
      <circle cx="182" cy="180" r="3.5" fill="#cbd5e1"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pearl_2',
    name: 'パール・オーシャンマーメイドガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_pearl_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#ffffff" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#fef3c7"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#cbd5e1"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#fffbeb"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#cbd5e1"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#fffbeb" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#fef3c7" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#cbd5e1" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#fef3c7"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#fef3c7"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pearl_3',
    name: 'パール・オーシャンマーメイドガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_pearl_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#cbd5e1"/>
      <circle cx="194" cy="245" r="4" fill="#cbd5e1"/>
      <circle cx="150" cy="232" r="4.5" fill="#cbd5e1"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#ffffff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pearl_4',
    name: 'パール・オーシャンマーメイドガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_pearl_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#ffffff"/>
      <circle cx="150" cy="192" r="2.5" fill="#cbd5e1"/>
      <circle cx="162" cy="188" r="2" fill="#ffffff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#fffbeb"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#cbd5e1" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#ffffff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pearl_5',
    name: 'パール・オーシャンマーメイドガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_pearl_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#f59e0b" stroke="#fffbeb" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#cbd5e1"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#fffbeb"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#cbd5e1" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#cbd5e1"/>
      <circle cx="170" cy="310" r="3" fill="#cbd5e1"/>
      <circle cx="150" cy="330" r="3.5" fill="#ffffff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#cbd5e1"/>
      <polygon points="174,174 190,165 184,185" fill="#cbd5e1"/>
    `,
  }),
  new Item({
    id: 'dress_princess_starlight_1',
    name: 'スターライト・ギャラクシークイーンドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_starlight_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#312e81" stroke="#1e1b4b" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#facc15" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#facc15" stroke="#1e1b4b" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#e0e7ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#818cf8" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#312e81" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#facc15" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#312e81" stroke="#1e1b4b" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#312e81" stroke="#1e1b4b" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#facc15"/>
      <circle cx="182" cy="180" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_starlight_2',
    name: 'スターライト・ギャラクシークイーンドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_starlight_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#e0e7ff" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#818cf8"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#facc15"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#312e81"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#facc15"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#312e81" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#312e81" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#818cf8" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#818cf8"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#818cf8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_starlight_3',
    name: 'スターライト・ギャラクシークイーンドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_starlight_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#818cf8" stroke="#1e1b4b" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#facc15" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#312e81" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#818cf8" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#312e81" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#facc15"/>
      <circle cx="194" cy="245" r="4" fill="#facc15"/>
      <circle cx="150" cy="232" r="4.5" fill="#facc15"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#e0e7ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#e0e7ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_starlight_4',
    name: 'スターライト・ギャラクシークイーンドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_starlight_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#312e81" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#e0e7ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#facc15"/>
      <circle cx="162" cy="188" r="2" fill="#e0e7ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#312e81"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#818cf8" stroke="#1e1b4b" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#e0e7ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#e0e7ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_starlight_5',
    name: 'スターライト・ギャラクシークイーンドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_starlight_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#1e1b4b" stroke="#312e81" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#facc15"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#312e81"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#facc15" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#818cf8" stroke="#1e1b4b" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#facc15"/>
      <circle cx="170" cy="310" r="3" fill="#facc15"/>
      <circle cx="150" cy="330" r="3.5" fill="#e0e7ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#facc15"/>
      <polygon points="174,174 190,165 184,185" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_princess_moonlight_1',
    name: 'ムーンライト・セレニティガウン・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_moonlight_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#4338ca" stroke="#312e81" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#fef08a" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#fef08a" stroke="#312e81" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#e0e7ff"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#a5b4fc" stroke="#312e81" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#4338ca" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#fef08a" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#4338ca" stroke="#312e81" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#4338ca" stroke="#312e81" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#fef08a"/>
      <circle cx="182" cy="180" r="3.5" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_moonlight_2',
    name: 'ムーンライト・セレニティガウン・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_moonlight_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#e0e7ff" stroke="#312e81" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#a5b4fc"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#fef08a"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#4338ca"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#fef08a"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#4338ca" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#4338ca" stroke="#312e81" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#a5b4fc" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#fef08a" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#a5b4fc"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#a5b4fc"/>
    `,
  }),
  new Item({
    id: 'dress_princess_moonlight_3',
    name: 'ムーンライト・セレニティガウン・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_moonlight_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#a5b4fc" stroke="#312e81" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#fef08a" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#4338ca" stroke="#312e81" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#a5b4fc" stroke="#312e81" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#4338ca" stroke="#312e81" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#fef08a"/>
      <circle cx="194" cy="245" r="4" fill="#fef08a"/>
      <circle cx="150" cy="232" r="4.5" fill="#fef08a"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#e0e7ff"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#e0e7ff"/>
    `,
  }),
  new Item({
    id: 'dress_princess_moonlight_4',
    name: 'ムーンライト・セレニティガウン・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_moonlight_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#4338ca" stroke="#312e81" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#e0e7ff"/>
      <circle cx="150" cy="192" r="2.5" fill="#fef08a"/>
      <circle cx="162" cy="188" r="2" fill="#e0e7ff"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#4338ca"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#a5b4fc" stroke="#312e81" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#fef08a" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#e0e7ff" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#e0e7ff" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_moonlight_5',
    name: 'ムーンライト・セレニティガウン・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_moonlight_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#312e81" stroke="#4338ca" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#fef08a"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#4338ca"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#fef08a" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#a5b4fc" stroke="#312e81" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#fef08a"/>
      <circle cx="170" cy="310" r="3" fill="#fef08a"/>
      <circle cx="150" cy="330" r="3.5" fill="#e0e7ff"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#fef08a"/>
      <polygon points="174,174 190,165 184,185" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sunshine_1',
    name: 'サンシャイン・ソーラーゴールデンドレス・舞踏会大輪ガウン',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sunshine_1: Grand Royal Ballgown -->
      <!-- Bodice -->
      <path d="M 128 174 Q 150 184 172 174 L 176 230 Q 150 236 124 230 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <path d="M 134 176 L 146 232 M 166 176 L 154 232" stroke="#ef4444" stroke-width="1" fill="none"/>
      <!-- Heart Brooch / Gem on Chest -->
      <circle cx="150" cy="190" r="4.5" fill="#ef4444" stroke="#b45309" stroke-width="1"/>
      <circle cx="150" cy="190" r="2" fill="#fffbeb"/>
      <!-- Giant Royal Hooped Skirt -->
      <path d="M 124 230 Q 150 236 176 230 C 220 250 230 300 220 345 C 190 355 110 355 80 345 C 70 300 80 250 124 230 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.2"/>
      <!-- Over-drape ruffles -->
      <path d="M 124 230 Q 150 280 84 330 M 176 230 Q 150 280 216 330" stroke="#f59e0b" stroke-width="3.5" fill="none"/>
      <!-- Gold Ribbon Garland & Star Brooches -->
      <path d="M 95 340 Q 150 352 205 340" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" fill="none"/>
      <!-- Royal Puff Sleeves -->
      <circle cx="118" cy="180" r="9" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
      <circle cx="182" cy="180" r="9" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
      <circle cx="118" cy="180" r="3.5" fill="#ef4444"/>
      <circle cx="182" cy="180" r="3.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sunshine_2',
    name: 'サンシャイン・ソーラーゴールデンドレス・クラシカル宮廷ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sunshine_2: Fairy Tale Empire Princess Gown -->
      <path d="M 130 174 L 170 174 L 174 212 L 126 212 Z" fill="#fffbeb" stroke="#b45309" stroke-width="1.2"/>
      <!-- Lace Collar -->
      <path d="M 130 174 Q 150 188 170 174 L 165 190 Q 150 198 135 190 Z" fill="#fef3c7"/>
      <!-- Gem Brooch -->
      <polygon points="150,186 153,191 150,196 147,191" fill="#ef4444"/>
      <!-- High Waist Satin Sash -->
      <rect x="124" y="210" width="52" height="6" rx="2" fill="#f59e0b"/>
      <!-- Waist Bow -->
      <circle cx="150" cy="213" r="3.5" fill="#ef4444"/>
      <path d="M 147 213 Q 140 225 142 240 M 153 213 Q 160 225 158 240" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <!-- Elegant A-line Falling Skirt -->
      <path d="M 124 216 Q 150 220 176 216 L 205 348 Q 150 358 95 348 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <!-- Shimmering front drape -->
      <path d="M 136 216 L 115 348 M 164 216 L 185 348" stroke="#fef3c7" stroke-width="2.5" fill="none"/>
      <!-- Scalloped Hem Frills -->
      <path d="M 98 346 Q 110 352 122 346 Q 134 352 146 346 Q 158 352 170 346 Q 182 352 202 346" stroke="#ef4444" stroke-width="1.8" fill="none"/>
      <!-- Off-shoulder ruffles -->
      <ellipse cx="118" cy="180" rx="8" ry="6" fill="#fef3c7"/>
      <ellipse cx="182" cy="180" rx="8" ry="6" fill="#fef3c7"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sunshine_3',
    name: 'サンシャイン・ソーラーゴールデンドレス・ロココ多重フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sunshine_3: Rococo Multi-Tiered Princess Dress -->
      <!-- Bodice with corset lacing -->
      <path d="M 126 174 L 174 174 L 178 228 L 122 228 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.2"/>
      <path d="M 135 178 L 165 224 M 165 178 L 135 224" stroke="#ef4444" stroke-width="1.2"/>
      <!-- Tier 1 Pannier -->
      <path d="M 122 228 Q 150 236 178 228 C 210 240 215 268 190 278 Q 150 286 110 278 C 85 268 90 240 122 228 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <!-- Tier 2 Flounce -->
      <path d="M 110 278 Q 150 286 190 278 L 202 312 Q 150 324 98 312 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.2"/>
      <!-- Tier 3 Ruffle Train -->
      <path d="M 98 312 Q 150 324 202 312 L 214 348 Q 150 360 86 348 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <!-- Rose Garlands on hips -->
      <circle cx="106" cy="245" r="4" fill="#ef4444"/>
      <circle cx="194" cy="245" r="4" fill="#ef4444"/>
      <circle cx="150" cy="232" r="4.5" fill="#ef4444"/>
      <!-- Bell sleeves -->
      <path d="M 122 178 C 110 185 106 205 112 215 C 118 215 125 198 128 185 Z" fill="#fffbeb"/>
      <path d="M 178 178 C 190 185 194 205 188 215 C 182 215 175 198 172 185 Z" fill="#fffbeb"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sunshine_4',
    name: 'サンシャイン・ソーラーゴールデンドレス・クリスタルマーメイドドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sunshine_4: Mermaid Crystal Princess Dress -->
      <!-- Sweetheart neckline bodice -->
      <path d="M 128 178 Q 139 170 150 178 Q 161 170 172 178 L 176 230 Q 150 236 124 230 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <!-- Pearl chain detail -->
      <circle cx="138" cy="188" r="2" fill="#fffbeb"/>
      <circle cx="150" cy="192" r="2.5" fill="#ef4444"/>
      <circle cx="162" cy="188" r="2" fill="#fffbeb"/>
      <!-- Sleek mermaid hips -->
      <path d="M 124 230 Q 150 236 176 230 L 174 275 Q 150 280 126 275 Z" fill="#f59e0b"/>
      <!-- Flaring mermaid wave skirt -->
      <path d="M 126 275 Q 150 280 174 275 C 185 305 225 330 216 348 Q 150 358 84 348 C 75 330 115 305 126 275 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.2"/>
      <!-- Crystal scale overlays -->
      <path d="M 135 285 Q 150 295 165 285 M 120 310 Q 150 325 180 310" stroke="#ef4444" stroke-width="2" fill="none"/>
      <!-- Organza Shoulder Fins/Frills -->
      <ellipse cx="118" cy="178" rx="9" ry="5" fill="#fffbeb" opacity="0.8"/>
      <ellipse cx="182" cy="178" rx="9" ry="5" fill="#fffbeb" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_princess_sunshine_5',
    name: 'サンシャイン・ソーラーゴールデンドレス・星煌めく魔法姫ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- dress_princess_sunshine_5: Starlight Magical Princess Dress -->
      <!-- Bodice -->
      <path d="M 128 174 L 172 174 L 178 228 L 122 228 Z" fill="#b45309" stroke="#f59e0b" stroke-width="1.2"/>
      <!-- Star Crest on Chest -->
      <polygon points="150,184 153,191 160,192 155,197 157,204 150,200 143,204 145,197 140,192 147,191" fill="#ef4444"/>
      <!-- Layered Peplum (Petal skirt) -->
      <path d="M 122 228 Q 150 240 178 228 L 188 260 Q 150 272 112 260 Z" fill="#f59e0b"/>
      <path d="M 130 228 Q 150 244 170 228 L 176 252 Q 150 262 124 252 Z" fill="#ef4444" opacity="0.7"/>
      <!-- Under skirt with stars -->
      <path d="M 116 256 Q 150 268 184 256 L 208 348 Q 150 360 92 348 Z" fill="#fef3c7" stroke="#b45309" stroke-width="1.2"/>
      <circle cx="130" cy="310" r="3" fill="#ef4444"/>
      <circle cx="170" cy="310" r="3" fill="#ef4444"/>
      <circle cx="150" cy="330" r="3.5" fill="#fffbeb"/>
      <!-- Sparkle Wing Sleeves -->
      <polygon points="126,174 110,165 116,185" fill="#ef4444"/>
      <polygon points="174,174 190,165 184,185" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_diamond',
    name: 'ダイヤモンドのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: ダイヤモンド -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#ffffff"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#ffffff"/>
      <polygon points="138,54 142,66 136,66" fill="#ffffff"/>
      <polygon points="162,54 164,66 158,66" fill="#ffffff"/>
      <polygon points="128,62 131,69 126,69" fill="#ffffff"/>
      <polygon points="172,62 174,69 169,69" fill="#ffffff"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#e0f2fe"/>
      <circle cx="161" cy="59" r="3" fill="#e0f2fe"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_diamond',
    name: 'ダイヤモンドの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: ダイヤモンド -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#ffffff" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#ffffff"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#ffffff"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_diamond',
    name: 'ダイヤモンドの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: ダイヤモンド -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#ffffff" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#ffffff" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#e0f2fe"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#e0f2fe"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_ruby',
    name: 'ルビーのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: ルビー -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#fbbf24"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#fbbf24"/>
      <polygon points="138,54 142,66 136,66" fill="#fbbf24"/>
      <polygon points="162,54 164,66 158,66" fill="#fbbf24"/>
      <polygon points="128,62 131,69 126,69" fill="#fbbf24"/>
      <polygon points="172,62 174,69 169,69" fill="#fbbf24"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#e11d48" stroke="#9f1239" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#e11d48"/>
      <circle cx="161" cy="59" r="3" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_ruby',
    name: 'ルビーの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: ルビー -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#fbbf24" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#fbbf24"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#fbbf24"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#e11d48" stroke="#9f1239" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_ruby',
    name: 'ルビーの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: ルビー -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#fbbf24" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#fbbf24" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#e11d48" stroke="#9f1239" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#e11d48"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#e11d48"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_sapphire',
    name: 'サファイアのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: サファイア -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#fde047"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#fde047"/>
      <polygon points="138,54 142,66 136,66" fill="#fde047"/>
      <polygon points="162,54 164,66 158,66" fill="#fde047"/>
      <polygon points="128,62 131,69 126,69" fill="#fde047"/>
      <polygon points="172,62 174,69 169,69" fill="#fde047"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#1d4ed8"/>
      <circle cx="161" cy="59" r="3" fill="#1d4ed8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_sapphire',
    name: 'サファイアの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: サファイア -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#fde047" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#fde047"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#fde047"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_sapphire',
    name: 'サファイアの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: サファイア -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#fde047" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#fde047" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#1d4ed8"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#1d4ed8"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_emerald',
    name: 'エメラルドのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: エメラルド -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#facc15"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#facc15"/>
      <polygon points="138,54 142,66 136,66" fill="#facc15"/>
      <polygon points="162,54 164,66 158,66" fill="#facc15"/>
      <polygon points="128,62 131,69 126,69" fill="#facc15"/>
      <polygon points="172,62 174,69 169,69" fill="#facc15"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#059669" stroke="#065f46" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#059669"/>
      <circle cx="161" cy="59" r="3" fill="#059669"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_emerald',
    name: 'エメラルドの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: エメラルド -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#facc15"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#facc15"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#059669" stroke="#065f46" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_emerald',
    name: 'エメラルドの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: エメラルド -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#facc15" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#059669" stroke="#065f46" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#059669"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#059669"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_amethyst',
    name: 'アメジストのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: アメジスト -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#f472b6"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#f472b6"/>
      <polygon points="138,54 142,66 136,66" fill="#f472b6"/>
      <polygon points="162,54 164,66 158,66" fill="#f472b6"/>
      <polygon points="128,62 131,69 126,69" fill="#f472b6"/>
      <polygon points="172,62 174,69 169,69" fill="#f472b6"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#7c3aed" stroke="#5b21b6" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#7c3aed"/>
      <circle cx="161" cy="59" r="3" fill="#7c3aed"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_amethyst',
    name: 'アメジストの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: アメジスト -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#f472b6" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#f472b6"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#f472b6"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#7c3aed" stroke="#5b21b6" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_amethyst',
    name: 'アメジストの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: アメジスト -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#f472b6" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#f472b6" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#7c3aed" stroke="#5b21b6" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#7c3aed"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#7c3aed"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_rose',
    name: 'ローズクォーツのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: ローズクォーツ -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#ffe4e6"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#ffe4e6"/>
      <polygon points="138,54 142,66 136,66" fill="#ffe4e6"/>
      <polygon points="162,54 164,66 158,66" fill="#ffe4e6"/>
      <polygon points="128,62 131,69 126,69" fill="#ffe4e6"/>
      <polygon points="172,62 174,69 169,69" fill="#ffe4e6"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#fb7185" stroke="#e11d48" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#fb7185"/>
      <circle cx="161" cy="59" r="3" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_rose',
    name: 'ローズクォーツの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: ローズクォーツ -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#ffe4e6" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#ffe4e6"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#ffe4e6"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#fb7185" stroke="#e11d48" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_rose',
    name: 'ローズクォーツの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: ローズクォーツ -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#ffe4e6" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#ffe4e6" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#fb7185" stroke="#e11d48" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#fb7185"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#fb7185"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_pearl',
    name: '真珠のロイヤルのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: 真珠のロイヤル -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#cbd5e1"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#cbd5e1"/>
      <polygon points="138,54 142,66 136,66" fill="#cbd5e1"/>
      <polygon points="162,54 164,66 158,66" fill="#cbd5e1"/>
      <polygon points="128,62 131,69 126,69" fill="#cbd5e1"/>
      <polygon points="172,62 174,69 169,69" fill="#cbd5e1"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#fffbeb" stroke="#f59e0b" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#fffbeb"/>
      <circle cx="161" cy="59" r="3" fill="#fffbeb"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_pearl',
    name: '真珠のロイヤルの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: 真珠のロイヤル -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#cbd5e1"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#cbd5e1"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#fffbeb" stroke="#f59e0b" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_pearl',
    name: '真珠のロイヤルの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: 真珠のロイヤル -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#cbd5e1" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#cbd5e1" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#fffbeb" stroke="#f59e0b" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#fffbeb"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#fffbeb"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_starlight',
    name: 'スターライト星屑のロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: スターライト星屑 -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#facc15"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#facc15"/>
      <polygon points="138,54 142,66 136,66" fill="#facc15"/>
      <polygon points="162,54 164,66 158,66" fill="#facc15"/>
      <polygon points="128,62 131,69 126,69" fill="#facc15"/>
      <polygon points="172,62 174,69 169,69" fill="#facc15"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#38bdf8" stroke="#1e1b4b" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#38bdf8"/>
      <circle cx="161" cy="59" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_starlight',
    name: 'スターライト星屑の翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: スターライト星屑 -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#facc15"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#facc15"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#38bdf8" stroke="#1e1b4b" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_starlight',
    name: 'スターライト星屑の額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: スターライト星屑 -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#facc15" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#38bdf8" stroke="#1e1b4b" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#38bdf8"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#38bdf8"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_moon',
    name: '三日月ルナのロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: 三日月ルナ -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#c084fc"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#c084fc"/>
      <polygon points="138,54 142,66 136,66" fill="#c084fc"/>
      <polygon points="162,54 164,66 158,66" fill="#c084fc"/>
      <polygon points="128,62 131,69 126,69" fill="#c084fc"/>
      <polygon points="172,62 174,69 169,69" fill="#c084fc"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#fef08a" stroke="#4338ca" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#fef08a"/>
      <circle cx="161" cy="59" r="3" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_moon',
    name: '三日月ルナの翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: 三日月ルナ -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#c084fc" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#c084fc"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#c084fc"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#fef08a" stroke="#4338ca" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_moon',
    name: '三日月ルナの額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: 三日月ルナ -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#c084fc" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#c084fc" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#fef08a" stroke="#4338ca" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#fef08a"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#fef08a"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_royal_sun',
    name: '太陽光輪のロイヤルアーチティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Arch Tiara: 太陽光輪 -->
      <path d="M 125 74 Q 150 64 175 74 L 173 70 Q 150 60 127 70 Z" fill="#ef4444"/>
      <!-- Peaks -->
      <polygon points="150,48 153,64 147,64" fill="#ef4444"/>
      <polygon points="138,54 142,66 136,66" fill="#ef4444"/>
      <polygon points="162,54 164,66 158,66" fill="#ef4444"/>
      <polygon points="128,62 131,69 126,69" fill="#ef4444"/>
      <polygon points="172,62 174,69 169,69" fill="#ef4444"/>
      <!-- Main Center Gem -->
      <circle cx="150" cy="54" r="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="0.8"/>
      <circle cx="149" cy="53" r="1.5" fill="#ffffff"/>
      <!-- Side Gems -->
      <circle cx="139" cy="59" r="3" fill="#f59e0b"/>
      <circle cx="161" cy="59" r="3" fill="#f59e0b"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_wing_sun',
    name: '太陽光輪の翼舞うプリンセスクラウン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Wing Princess Coronet: 太陽光輪 -->
      <path d="M 130 73 Q 150 67 170 73" stroke="#ef4444" stroke-width="2.5" fill="none"/>
      <!-- Winged crest -->
      <path d="M 150 66 C 144 50 132 45 125 50 C 130 58 140 60 148 66 Z" fill="#ef4444"/>
      <path d="M 150 66 C 156 50 168 45 175 50 C 170 58 160 60 152 66 Z" fill="#ef4444"/>
      <!-- Heart Gem -->
      <path d="M 150 56 C 146 51 140 55 146 62 L 150 66 L 154 62 C 160 55 154 51 150 56 Z" fill="#f59e0b" stroke="#b45309" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_drop_sun',
    name: '太陽光輪の額雫ドロップティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Drop Tiara: 太陽光輪 -->
      <path d="M 122 75 Q 150 65 178 75" stroke="#ef4444" stroke-width="1.8" fill="none"/>
      <!-- Forehead Drop Jewel -->
      <line x1="150" y1="67" x2="150" y2="82" stroke="#ef4444" stroke-width="1.2"/>
      <polygon points="150,80 153,85 150,90 147,85" fill="#f59e0b" stroke="#b45309" stroke-width="0.8"/>
      <!-- Arch pearls -->
      <circle cx="132" cy="71" r="2" fill="#ffffff"/>
      <circle cx="141" cy="68" r="2.5" fill="#f59e0b"/>
      <circle cx="150" cy="67" r="3" fill="#ffffff"/>
      <circle cx="159" cy="68" r="2.5" fill="#f59e0b"/>
      <circle cx="168" cy="71" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_diamond',
    name: 'ダイヤモンドの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: ダイヤモンド -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#ffffff" stroke="#38bdf8" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#e0f2fe"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_diamond',
    name: 'ダイヤモンドの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: ダイヤモンド -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#ffffff"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#e0f2fe" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_ruby',
    name: 'ルビーの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: ルビー -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#fbbf24" stroke="#9f1239" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#e11d48"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_ruby',
    name: 'ルビーの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: ルビー -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#e11d48" stroke="#9f1239" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#fbbf24"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#e11d48" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_sapphire',
    name: 'サファイアの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: サファイア -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#fde047" stroke="#1e3a8a" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#1d4ed8"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_sapphire',
    name: 'サファイアの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: サファイア -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#fde047"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#1d4ed8" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_emerald',
    name: 'エメラルドの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: エメラルド -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#facc15" stroke="#065f46" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#059669"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_emerald',
    name: 'エメラルドの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: エメラルド -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#059669" stroke="#065f46" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#facc15"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#059669" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_amethyst',
    name: 'アメジストの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: アメジスト -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#f472b6" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#f472b6" stroke="#5b21b6" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#7c3aed"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_amethyst',
    name: 'アメジストの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: アメジスト -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#f472b6" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#7c3aed" stroke="#5b21b6" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#f472b6"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#7c3aed" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_rose',
    name: 'ローズクォーツの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: ローズクォーツ -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#ffe4e6" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#ffe4e6" stroke="#e11d48" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#fb7185"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_rose',
    name: 'ローズクォーツの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: ローズクォーツ -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#ffe4e6" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#fb7185" stroke="#e11d48" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#ffe4e6"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#fb7185" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_pearl',
    name: '真珠のロイヤルの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: 真珠のロイヤル -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#cbd5e1" stroke="#f59e0b" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#fffbeb"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_pearl',
    name: '真珠のロイヤルの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: 真珠のロイヤル -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#fffbeb" stroke="#f59e0b" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#cbd5e1"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#fffbeb" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_starlight',
    name: 'スターライト星屑の星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: スターライト星屑 -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#facc15" stroke="#1e1b4b" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#38bdf8"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_starlight',
    name: 'スターライト星屑の結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: スターライト星屑 -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#38bdf8" stroke="#1e1b4b" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#facc15"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_moon',
    name: '三日月ルナの星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: 三日月ルナ -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#c084fc" stroke="#4338ca" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#fef08a"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_moon',
    name: '三日月ルナの結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: 三日月ルナ -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#fef08a" stroke="#4338ca" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#c084fc"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#fef08a" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wand_star_sun',
    name: '太陽光輪の星輝く魔法の王笏',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Scepter: 太陽光輪 -->
      <line x1="192" y1="230" x2="202" y2="310" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <!-- Wand Head Star -->
      <polygon points="192,216 195,223 203,224 197,229 199,237 192,233 185,237 187,229 181,224 189,223" fill="#ef4444" stroke="#b45309" stroke-width="0.8"/>
      <circle cx="192" cy="227" r="3.5" fill="#f59e0b"/>
      <!-- Floating sparkles -->
      <circle cx="198" cy="218" r="1.5" fill="#ffffff"/>
      <circle cx="186" cy="220" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_wand_flower_sun',
    name: '太陽光輪の結晶ローズステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Rose Wand: 太陽光輪 -->
      <line x1="108" y1="230" x2="98" y2="310" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <!-- Flower Jewel Head -->
      <circle cx="108" cy="225" r="7" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
      <circle cx="108" cy="225" r="3.5" fill="#ef4444"/>
      <!-- Ribbon trailing from wand head -->
      <path d="M 106 230 Q 100 250 102 265 M 110 230 Q 115 250 112 265" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_diamond_0',
    name: 'ダイヤモンドのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: ダイヤモンド -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#ffffff" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_ruby_1',
    name: 'ルビーのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: ルビー -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#fbbf24" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#fbbf24" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#e11d48" stroke="#9f1239" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_sapphire_2',
    name: 'サファイアのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: サファイア -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#fde047" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#fde047" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_emerald_3',
    name: 'エメラルドのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: エメラルド -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#facc15" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#059669" stroke="#065f46" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_amethyst_4',
    name: 'アメジストのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: アメジスト -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#f472b6" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#f472b6" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#7c3aed" stroke="#5b21b6" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_rose_5',
    name: 'ローズクォーツのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: ローズクォーツ -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#ffe4e6" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#ffe4e6" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#fb7185" stroke="#e11d48" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_pearl_6',
    name: '真珠のロイヤルのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: 真珠のロイヤル -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#cbd5e1" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#cbd5e1" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#fffbeb" stroke="#f59e0b" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_starlight_7',
    name: 'スターライト星屑のプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: スターライト星屑 -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#facc15" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#38bdf8" stroke="#1e1b4b" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_moon_8',
    name: '三日月ルナのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: 三日月ルナ -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#c084fc" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#c084fc" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#fef08a" stroke="#4338ca" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_sun_9',
    name: '太陽光輪のプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: 太陽光輪 -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#ef4444" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#ef4444" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#f59e0b" stroke="#b45309" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_diamond_10',
    name: 'ダイヤモンドのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: ダイヤモンド -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#ffffff" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_ruby_11',
    name: 'ルビーのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: ルビー -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#fbbf24" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#fbbf24" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#e11d48" stroke="#9f1239" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_sapphire_12',
    name: 'サファイアのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: サファイア -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#fde047" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#fde047" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_emerald_13',
    name: 'エメラルドのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: エメラルド -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#facc15" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#059669" stroke="#065f46" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_necklace_royal_amethyst_14',
    name: 'アメジストのプリンセスチョーカーネックレス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Royal Necklace: アメジスト -->
      <path d="M 139 160 Q 150 168 161 160" stroke="#f472b6" stroke-width="1.8" fill="none"/>
      <path d="M 141 164 Q 150 174 159 164" stroke="#f472b6" stroke-width="1.2" fill="none"/>
      <!-- Pendant -->
      <polygon points="150,172 154,178 150,184 146,178" fill="#7c3aed" stroke="#5b21b6" stroke-width="0.8"/>
      <circle cx="150" cy="177" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_veil_cathedral',
    name: '大聖堂のロングウェディングベール',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 120 70 Q 150 60 180 70 C 210 120 230 250 220 360 C 180 375 120 375 80 360 C 70 250 90 120 120 70 Z" fill="#ffffff" opacity="0.45" stroke="#e0f2fe" stroke-width="1"/>
      <circle cx="150" cy="65" r="4" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_veil_short_lace',
    name: 'マリアージュショートレースベール',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 125 72 Q 150 64 175 72 C 190 110 195 180 185 220 Q 150 230 115 220 C 105 180 110 110 125 72 Z" fill="#ffffff" opacity="0.55" stroke="#fbcfe8" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_cape_fur_royal',
    name: '王族の白狐ファーショール',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 125 168 C 115 180 112 205 125 215 Q 150 220 175 215 C 188 205 185 180 175 168 Q 150 175 125 168 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <circle cx="150" cy="190" r="4" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'acc_cape_velvet_crimson',
    name: '深紅ベルベットのマジェスティックケープ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 128 172 L 95 330 Q 150 350 205 330 L 172 172 Z" fill="#881337" stroke="#eab308" stroke-width="1.5"/>
      <path d="M 128 172 Q 150 180 172 172" stroke="#eab308" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_wings_swan_white',
    name: '純白の白鳥プリンセスフェザーウィング',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 125 180 C 80 140 45 160 40 210 C 35 250 65 280 115 240 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M 175 180 C 220 140 255 160 260 210 C 265 250 235 280 185 240 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_wings_butterfly_crystal',
    name: 'クリスタルフェアリーバタフライウィング',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 125 185 C 70 120 40 150 45 220 C 50 260 90 270 120 235 Z" fill="#e0f2fe" opacity="0.7" stroke="#38bdf8" stroke-width="1.5"/>
      <path d="M 175 185 C 230 120 260 150 255 220 C 250 260 210 270 180 235 Z" fill="#e0f2fe" opacity="0.7" stroke="#38bdf8" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_gloves_satin_white',
    name: '純白シルクオペラグローブ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 112 215 L 106 270 C 108 275 116 276 118 270 L 126 215 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <path d="M 188 215 L 194 270 C 192 275 184 276 182 270 L 174 215 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="119" cy="216" r="2" fill="#facc15"/>
      <circle cx="181" cy="216" r="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'acc_gloves_lace_black',
    name: '黒レース貴婦人のレース手袋',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 112 225 L 106 270 C 108 275 116 276 118 270 L 124 225 Z" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
      <path d="M 188 225 L 194 270 C 192 275 184 276 182 270 L 176 225 Z" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_fan_feather_rococo',
    name: 'ロココ宮廷の白鳥羽根扇子',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 114 265 L 85 240 Q 105 230 125 245 Z" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <circle cx="114" cy="265" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'acc_parasol_lace_princess',
    name: '貴婦人のアンティークレース日傘',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<line x1="85" y1="210" x2="110" y2="280" stroke="#78350f" stroke-width="2.5"/>
      <path d="M 60 210 Q 85 180 110 210 Z" fill="#ffffff" stroke="#f472b6" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'acc_earrings_drop_diamond',
    name: 'ダイヤモンドティアドロップイヤリング',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<circle cx="98" cy="126" r="2" fill="#38bdf8"/>
      <polygon points="98,128 100,134 98,138 96,134" fill="#ffffff" stroke="#38bdf8" stroke-width="0.8"/>
      <circle cx="202" cy="126" r="2" fill="#38bdf8"/>
      <polygon points="202,128 204,134 202,138 200,134" fill="#ffffff" stroke="#38bdf8" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_earrings_pearl_cascade',
    name: 'カスケードパール揺れるイヤリング',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<circle cx="98" cy="125" r="2" fill="#ffffff"/>
      <circle cx="98" cy="130" r="2.5" fill="#ffffff"/>
      <circle cx="98" cy="136" r="3" fill="#ffffff"/>
      <circle cx="202" cy="125" r="2" fill="#ffffff"/>
      <circle cx="202" cy="130" r="2.5" fill="#ffffff"/>
      <circle cx="202" cy="136" r="3" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'acc_mask_masquerade_gold',
    name: '仮面舞踏会の黄金キャッツアイマスク',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 120 106 Q 135 98 150 106 Q 165 98 180 106 C 185 120 165 125 150 115 C 135 125 115 120 120 106 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.2"/>
      <circle cx="135" cy="112" r="5" fill="#ffffff" opacity="0.3"/>
      <circle cx="165" cy="112" r="5" fill="#ffffff" opacity="0.3"/>
    `,
  }),
  new Item({
    id: 'acc_sash_royal_order',
    name: 'ロイヤルオーダーの栄誉サッシュ綬',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 132 172 L 175 235 L 168 238 L 126 175 Z" fill="#1d4ed8"/>
      <circle cx="172" cy="236" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'acc_bouquet_royal_roses',
    name: 'プリンセスの百花ロイヤルブーケ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<circle cx="110" cy="265" r="14" fill="#ffe4e6"/>
      <circle cx="106" cy="262" r="4.5" fill="#ef4444"/>
      <circle cx="114" cy="262" r="4.5" fill="#f43f5e"/>
      <circle cx="110" cy="269" r="4.5" fill="#ffffff"/>
      <circle cx="104" cy="270" r="3" fill="#fb7185"/>
      <circle cx="116" cy="270" r="3" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blonde_1',
    name: 'ロイヤルブロンド・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: ロイヤルブロンド・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#fde047"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#fde047"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#fde047"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_platinum_1',
    name: 'プラチナシルバー・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: プラチナシルバー・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#f1f5f9"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#f1f5f9"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#f1f5f9"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_pink_1',
    name: 'プリンセスピンク・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: プリンセスピンク・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#fda4af"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#fda4af"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#fda4af"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_rose_1',
    name: 'ローズブロンド・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: ローズブロンド・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#fbcfe8"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#fbcfe8"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#fbcfe8"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_brown_1',
    name: 'ショコラブラウン・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: ショコラブラウン・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#b45309"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#b45309"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#b45309"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_black_1',
    name: 'ミッドナイトブラック・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: ミッドナイトブラック・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#18181b"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#18181b"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#18181b"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blue_1',
    name: 'サファイアブルー・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: サファイアブルー・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#38bdf8"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#38bdf8"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#38bdf8"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_lavender_1',
    name: 'アメジストラベンダー・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: アメジストラベンダー・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#c084fc"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#c084fc"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#c084fc"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_mint_1',
    name: 'エメラルドミント・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: エメラルドミント・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#5eead4"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#5eead4"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#5eead4"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_amber_1',
    name: 'サンシャインアンバー・優雅なサイドリングレット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Arched Princess Bangs: サンシャインアンバー・優雅なサイドリングレット前髪 -->
      <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 104 165 96 150 105 C 135 96 125 104 115 100 Z" fill="#fbbf24"/>
      <!-- Gloss shine -->
      <path d="M 126 84 Q 150 90 174 84" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.75"/>
      <!-- Side Royal Ringlets -->
      <path d="M 114 96 C 105 115 106 142 115 155 C 119 146 118 125 121 106 Z" fill="#fbbf24"/>
      <path d="M 186 96 C 195 115 194 142 185 155 C 181 146 182 125 179 106 Z" fill="#fbbf24"/>
      <circle cx="120" cy="90" r="3" fill="#facc15"/>
      <circle cx="180" cy="90" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blonde_2',
    name: 'ロイヤルブロンド・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: ロイヤルブロンド・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#fde047"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#eab308"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_platinum_2',
    name: 'プラチナシルバー・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: プラチナシルバー・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#f1f5f9"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#94a3b8"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_pink_2',
    name: 'プリンセスピンク・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: プリンセスピンク・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#fda4af"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#f43f5e"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_rose_2',
    name: 'ローズブロンド・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: ローズブロンド・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#fbcfe8"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#db2777"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_brown_2',
    name: 'ショコラブラウン・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: ショコラブラウン・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#b45309"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#78350f"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_black_2',
    name: 'ミッドナイトブラック・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: ミッドナイトブラック・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#18181b"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#09090b"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blue_2',
    name: 'サファイアブルー・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: サファイアブルー・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#38bdf8"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#0284c7"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_lavender_2',
    name: 'アメジストラベンダー・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: アメジストラベンダー・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#c084fc"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#7e22ce"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_mint_2',
    name: 'エメラルドミント・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: エメラルドミント・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#5eead4"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#0d9488"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_amber_2',
    name: 'サンシャインアンバー・気品のアシメサイド前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Swept Side Bangs: サンシャインアンバー・気品のアシメサイド前髪 -->
      <path d="M 114 98 C 120 70 136 66 150 66 C 164 66 180 70 186 98 C 178 95 168 108 148 98 C 136 108 124 104 114 98 Z" fill="#fbbf24"/>
      <path d="M 182 92 C 194 110 192 138 182 152 C 180 140 184 120 179 102 Z" fill="#d97706"/>
      <!-- Mini Golden Tiara Hairpin -->
      <polygon points="126,78 130,83 128,87 122,87 120,83" fill="#facc15"/>
      <circle cx="125" cy="83" r="1.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blonde_3',
    name: 'ロイヤルブロンド・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: ロイヤルブロンド・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#fde047"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#eab308" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#eab308" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_platinum_3',
    name: 'プラチナシルバー・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: プラチナシルバー・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#f1f5f9"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#94a3b8" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_pink_3',
    name: 'プリンセスピンク・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: プリンセスピンク・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#fda4af"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#f43f5e" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#f43f5e" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_rose_3',
    name: 'ローズブロンド・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: ローズブロンド・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#fbcfe8"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#db2777" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#db2777" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_brown_3',
    name: 'ショコラブラウン・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: ショコラブラウン・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#b45309"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#78350f" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#78350f" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_black_3',
    name: 'ミッドナイトブラック・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: ミッドナイトブラック・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#18181b"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#09090b" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#09090b" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blue_3',
    name: 'サファイアブルー・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: サファイアブルー・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#38bdf8"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#0284c7" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_lavender_3',
    name: 'アメジストラベンダー・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: アメジストラベンダー・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#c084fc"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#7e22ce" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_mint_3',
    name: 'エメラルドミント・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: エメラルドミント・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#5eead4"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#0d9488" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#0d9488" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_amber_3',
    name: 'サンシャインアンバー・可憐なシースルーパール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- See-Through Princess Fringe: サンシャインアンバー・可憐なシースルーパール前髪 -->
      <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#fbbf24"/>
      <line x1="134" y1="78" x2="136" y2="102" stroke="#d97706" stroke-width="1.2"/>
      <line x1="166" y1="78" x2="164" y2="102" stroke="#d97706" stroke-width="1.2"/>
      <!-- Pearl Headband -->
      <path d="M 118 85 Q 150 78 182 85" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="1,4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blonde_4',
    name: 'ロイヤルブロンド・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: ロイヤルブロンド・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#fde047"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#eab308" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#eab308"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#eab308"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_platinum_4',
    name: 'プラチナシルバー・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: プラチナシルバー・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#f1f5f9"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#94a3b8"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#94a3b8"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_pink_4',
    name: 'プリンセスピンク・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: プリンセスピンク・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#fda4af"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#f43f5e" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#f43f5e"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#f43f5e"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_rose_4',
    name: 'ローズブロンド・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: ローズブロンド・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#fbcfe8"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#db2777" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#db2777"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#db2777"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_brown_4',
    name: 'ショコラブラウン・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: ショコラブラウン・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#b45309"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#78350f" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#78350f"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#78350f"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_black_4',
    name: 'ミッドナイトブラック・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: ミッドナイトブラック・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#18181b"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#09090b" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#09090b"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#09090b"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blue_4',
    name: 'サファイアブルー・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: サファイアブルー・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#38bdf8"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#0284c7"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#0284c7"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_lavender_4',
    name: 'アメジストラベンダー・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: アメジストラベンダー・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#c084fc"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#7e22ce" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#7e22ce"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#7e22ce"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_mint_4',
    name: 'エメラルドミント・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: エメラルドミント・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#5eead4"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#0d9488" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#0d9488"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#0d9488"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_amber_4',
    name: 'サンシャインアンバー・クラシカルセンター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Center-Parted Royal Bangs: サンシャインアンバー・クラシカルセンター分け前髪 -->
      <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 96 166 104 154 100 C 146 100 134 96 125 98 Z" fill="#fbbf24"/>
      <line x1="150" y1="66" x2="150" y2="88" stroke="#d97706" stroke-width="1.5"/>
      <!-- Side Framing Strands -->
      <path d="M 114 96 L 108 140 L 116 135 Z" fill="#d97706"/>
      <path d="M 186 96 L 192 140 L 184 135 Z" fill="#d97706"/>
      <!-- Rose hairpin -->
      <circle cx="122" cy="85" r="3.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blonde_5',
    name: 'ロイヤルブロンド・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: ロイヤルブロンド・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#fde047"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#eab308" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_platinum_5',
    name: 'プラチナシルバー・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: プラチナシルバー・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#f1f5f9"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#94a3b8" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_pink_5',
    name: 'プリンセスピンク・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: プリンセスピンク・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#fda4af"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#f43f5e" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_rose_5',
    name: 'ローズブロンド・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: ローズブロンド・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#fbcfe8"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#db2777" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_brown_5',
    name: 'ショコラブラウン・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: ショコラブラウン・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#b45309"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#78350f" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_black_5',
    name: 'ミッドナイトブラック・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: ミッドナイトブラック・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#18181b"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#09090b" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_blue_5',
    name: 'サファイアブルー・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: サファイアブルー・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#38bdf8"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#0284c7" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_lavender_5',
    name: 'アメジストラベンダー・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: アメジストラベンダー・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#c084fc"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#7e22ce" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_mint_5',
    name: 'エメラルドミント・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: エメラルドミント・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#5eead4"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#0d9488" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_princess_amber_5',
    name: 'サンシャインアンバー・ロマンティックウェーブ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Wavy Romantic Bangs: サンシャインアンバー・ロマンティックウェーブ前髪 -->
      <path d="M 114 100 C 118 70 136 66 150 66 C 164 66 182 70 186 100 C 176 104 165 96 150 104 C 135 96 124 104 114 100 Z" fill="#fbbf24"/>
      <!-- Soft waves -->
      <path d="M 130 92 Q 138 98 144 92 M 156 92 Q 162 98 170 92" stroke="#d97706" stroke-width="1.8" fill="none"/>
      <!-- Satin Ribbon Bow -->
      <circle cx="174" cy="84" r="3" fill="#f472b6"/>
      <path d="M 172 84 C 166 80 166 88 172 86 M 176 84 C 182 80 182 88 176 86" stroke="#f472b6" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blonde_1',
    name: 'ロイヤルブロンド・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: ロイヤルブロンド・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#fde047"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#eab308"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#eab308"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_platinum_1',
    name: 'プラチナシルバー・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: プラチナシルバー・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#f1f5f9"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#94a3b8"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#94a3b8"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_pink_1',
    name: 'プリンセスピンク・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: プリンセスピンク・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#fda4af"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#f43f5e"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#f43f5e"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_rose_1',
    name: 'ローズブロンド・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: ローズブロンド・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#fbcfe8"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#db2777"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#db2777"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_brown_1',
    name: 'ショコラブラウン・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: ショコラブラウン・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#b45309"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#78350f"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#78350f"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_black_1',
    name: 'ミッドナイトブラック・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: ミッドナイトブラック・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#18181b"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#09090b"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#09090b"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blue_1',
    name: 'サファイアブルー・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: サファイアブルー・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#38bdf8"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#0284c7"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#0284c7"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_lavender_1',
    name: 'アメジストラベンダー・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: アメジストラベンダー・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#c084fc"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#7e22ce"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#7e22ce"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_mint_1',
    name: 'エメラルドミント・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: エメラルドミント・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#5eead4"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#0d9488"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#0d9488"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_amber_1',
    name: 'サンシャインアンバー・豪華な王族縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Twin Drill Ringlets: サンシャインアンバー・豪華な王族縦ロールツイン -->
      <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#fbbf24"/>
      <!-- Left Drill Roll -->
      <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#d97706"/>
      <!-- Right Drill Roll -->
      <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#d97706"/>
      <circle cx="106" cy="120" r="4.5" fill="#facc15"/>
      <circle cx="194" cy="120" r="4.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blonde_2',
    name: 'ロイヤルブロンド・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: ロイヤルブロンド・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#fde047"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#eab308" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_platinum_2',
    name: 'プラチナシルバー・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: プラチナシルバー・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#f1f5f9"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#94a3b8" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_pink_2',
    name: 'プリンセスピンク・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: プリンセスピンク・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#fda4af"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#f43f5e" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_rose_2',
    name: 'ローズブロンド・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: ローズブロンド・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#fbcfe8"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#db2777" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_brown_2',
    name: 'ショコラブラウン・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: ショコラブラウン・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#b45309"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#78350f" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_black_2',
    name: 'ミッドナイトブラック・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: ミッドナイトブラック・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#18181b"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#09090b" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blue_2',
    name: 'サファイアブルー・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: サファイアブルー・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#38bdf8"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#0284c7" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_lavender_2',
    name: 'アメジストラベンダー・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: アメジストラベンダー・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#c084fc"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#7e22ce" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_mint_2',
    name: 'エメラルドミント・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: エメラルドミント・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#5eead4"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#0d9488" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_amber_2',
    name: 'サンシャインアンバー・床まで届くロイヤルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Floor-Length Waves: サンシャインアンバー・床まで届くロイヤルウェーブ -->
      <path d="M 108 105 C 80 150 70 230 74 335 C 90 350 120 350 150 350 C 180 350 210 350 226 335 C 230 230 220 150 192 105 Z" fill="#fbbf24"/>
      <path d="M 85 200 Q 76 260 86 320 M 215 200 Q 224 260 214 320" stroke="#d97706" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blonde_3',
    name: 'ロイヤルブロンド・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: ロイヤルブロンド・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#fde047"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#fde047"/>
      <circle cx="150" cy="85" r="14" fill="#eab308"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_platinum_3',
    name: 'プラチナシルバー・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: プラチナシルバー・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#f1f5f9"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#f1f5f9"/>
      <circle cx="150" cy="85" r="14" fill="#94a3b8"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_pink_3',
    name: 'プリンセスピンク・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: プリンセスピンク・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#fda4af"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#fda4af"/>
      <circle cx="150" cy="85" r="14" fill="#f43f5e"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_rose_3',
    name: 'ローズブロンド・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: ローズブロンド・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#fbcfe8"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#fbcfe8"/>
      <circle cx="150" cy="85" r="14" fill="#db2777"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_brown_3',
    name: 'ショコラブラウン・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: ショコラブラウン・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#b45309"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#b45309"/>
      <circle cx="150" cy="85" r="14" fill="#78350f"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_black_3',
    name: 'ミッドナイトブラック・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: ミッドナイトブラック・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#18181b"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#18181b"/>
      <circle cx="150" cy="85" r="14" fill="#09090b"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blue_3',
    name: 'サファイアブルー・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: サファイアブルー・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#38bdf8"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#38bdf8"/>
      <circle cx="150" cy="85" r="14" fill="#0284c7"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_lavender_3',
    name: 'アメジストラベンダー・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: アメジストラベンダー・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#c084fc"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#c084fc"/>
      <circle cx="150" cy="85" r="14" fill="#7e22ce"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_mint_3',
    name: 'エメラルドミント・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: エメラルドミント・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#5eead4"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#5eead4"/>
      <circle cx="150" cy="85" r="14" fill="#0d9488"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_amber_3',
    name: 'サンシャインアンバー・気品の編み込みシニヨンヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Royal Updo Chignon: サンシャインアンバー・気品の編み込みシニヨンヘア -->
      <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#fbbf24"/>
      <ellipse cx="150" cy="85" rx="22" ry="16" fill="#fbbf24"/>
      <circle cx="150" cy="85" r="14" fill="#d97706"/>
      <circle cx="150" cy="85" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blonde_4',
    name: 'ロイヤルブロンド・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: ロイヤルブロンド・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#fde047"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#eab308"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_platinum_4',
    name: 'プラチナシルバー・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: プラチナシルバー・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#f1f5f9"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#94a3b8"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_pink_4',
    name: 'プリンセスピンク・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: プリンセスピンク・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#fda4af"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#f43f5e"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_rose_4',
    name: 'ローズブロンド・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: ローズブロンド・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#fbcfe8"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#db2777"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_brown_4',
    name: 'ショコラブラウン・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: ショコラブラウン・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#b45309"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#78350f"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_black_4',
    name: 'ミッドナイトブラック・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: ミッドナイトブラック・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#18181b"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#09090b"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blue_4',
    name: 'サファイアブルー・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: サファイアブルー・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#38bdf8"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#0284c7"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_lavender_4',
    name: 'アメジストラベンダー・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: アメジストラベンダー・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#c084fc"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#7e22ce"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_mint_4',
    name: 'エメラルドミント・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: エメラルドミント・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#5eead4"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#0d9488"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_amber_4',
    name: 'サンシャインアンバー・お姫様ハーフアップリボン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Half-Up with Bow: サンシャインアンバー・お姫様ハーフアップリボン -->
      <path d="M 108 105 C 85 150 78 220 84 315 C 98 330 125 330 150 330 C 175 330 202 330 216 315 C 222 220 215 150 192 105 Z" fill="#fbbf24"/>
      <ellipse cx="150" cy="98" rx="16" ry="12" fill="#d97706"/>
      <!-- Giant Ribbon Bow -->
      <circle cx="150" cy="98" r="4.5" fill="#f472b6"/>
      <path d="M 150 98 C 138 88 128 96 136 108 M 150 98 C 162 88 172 96 164 108" stroke="#f472b6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blonde_5',
    name: 'ロイヤルブロンド・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: ロイヤルブロンド・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#fde047"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#eab308"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_platinum_5',
    name: 'プラチナシルバー・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: プラチナシルバー・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#f1f5f9"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#94a3b8"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#94a3b8"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_pink_5',
    name: 'プリンセスピンク・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: プリンセスピンク・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#fda4af"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#f43f5e"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_rose_5',
    name: 'ローズブロンド・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: ローズブロンド・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#fbcfe8"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#db2777"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#db2777"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_brown_5',
    name: 'ショコラブラウン・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: ショコラブラウン・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#b45309"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#78350f"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_black_5',
    name: 'ミッドナイトブラック・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: ミッドナイトブラック・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#18181b"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#09090b"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_blue_5',
    name: 'サファイアブルー・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: サファイアブルー・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#38bdf8"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#0284c7"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#0284c7"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_lavender_5',
    name: 'アメジストラベンダー・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: アメジストラベンダー・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#c084fc"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#7e22ce"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#7e22ce"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_mint_5',
    name: 'エメラルドミント・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: エメラルドミント・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#5eead4"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#0d9488"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#0d9488"/>
    `,
  }),
  new Item({
    id: 'hair_back_princess_amber_5',
    name: 'サンシャインアンバー・華麗なる大盛りスターツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Super Long Twintails: サンシャインアンバー・華麗なる大盛りスターツイン -->
      <path d="M 110 105 C 95 140 92 190 98 250 C 112 260 140 265 150 265 C 160 265 188 260 202 250 C 208 190 205 140 190 105 Z" fill="#fbbf24"/>
      <path d="M 104 100 C 68 115 45 165 50 230 C 54 280 74 320 86 340 C 88 315 76 265 80 225 C 84 175 98 135 108 115 Z" fill="#d97706"/>
      <path d="M 196 100 C 232 115 255 165 250 230 C 246 280 226 320 214 340 C 212 315 224 265 220 225 C 216 175 202 135 192 115 Z" fill="#d97706"/>
    `,
  }),
  new Item({
    id: 'tops_princess_sky_1',
    name: 'スカイサファイア・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: スカイサファイア・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#facc15" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#facc15"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#0284c7" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#0284c7" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_rose_1',
    name: 'ローズピンク・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: ローズピンク・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#fef08a" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#fef08a"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#e11d48" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#e11d48" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_gold_1',
    name: 'ロイヤルゴールド・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: ロイヤルゴールド・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#ef4444" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#ef4444"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#fefce8" stroke="#a16207" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#fefce8" stroke="#a16207" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_crimson_1',
    name: 'クリムゾンルビー・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: クリムゾンルビー・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#facc15" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#facc15"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ffe4e6" stroke="#881337" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ffe4e6" stroke="#881337" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_emerald_1',
    name: 'フォレストエメラルド・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: フォレストエメラルド・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#fbbf24" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#fbbf24"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ecfdf5" stroke="#047857" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ecfdf5" stroke="#047857" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_violet_1',
    name: 'ノーブルバイオレット・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: ノーブルバイオレット・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#f472b6" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#f472b6"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#f5f3ff" stroke="#5b21b6" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#f5f3ff" stroke="#5b21b6" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_snow_1',
    name: 'スノーホワイト・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: スノーホワイト・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#38bdf8"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_midnight_1',
    name: 'ミッドナイトブラック・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: ミッドナイトブラック・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#e11d48" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#e11d48"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#475569" stroke="#0f172a" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#475569" stroke="#0f172a" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_mint_1',
    name: 'パステルミント・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: パステルミント・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#f472b6" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#f472b6"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#059669" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#ffffff" stroke="#059669" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_lavender_1',
    name: 'トワイライトラベンダー・オフショルダー宝石ビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Off-Shoulder Corset: トワイライトラベンダー・オフショルダー宝石ビスチェ -->
      <path d="M 126 178 Q 150 186 174 178 L 176 230 Q 150 236 124 230 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 136 182 L 148 232 M 164 182 L 152 232" stroke="#fde047" stroke-width="1"/>
      <circle cx="150" cy="192" r="4" fill="#fde047"/>
      <!-- Off shoulder lace ruffles -->
      <ellipse cx="118" cy="180" rx="9" ry="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="0.8"/>
      <ellipse cx="182" cy="180" rx="9" ry="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_sky_2',
    name: 'スカイサファイア・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: スカイサファイア・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ffffff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#38bdf8"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_rose_2',
    name: 'ローズピンク・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: ローズピンク・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ffffff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#fef08a" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#fb7185"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'tops_princess_gold_2',
    name: 'ロイヤルゴールド・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: ロイヤルゴールド・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#fefce8"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#ef4444" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#eab308"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'tops_princess_crimson_2',
    name: 'クリムゾンルビー・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: クリムゾンルビー・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ffe4e6"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#facc15" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#e11d48"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'tops_princess_emerald_2',
    name: 'フォレストエメラルド・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: フォレストエメラルド・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ecfdf5"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#fbbf24" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#10b981"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#10b981"/>
    `,
  }),
  new Item({
    id: 'tops_princess_violet_2',
    name: 'ノーブルバイオレット・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: ノーブルバイオレット・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#f5f3ff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#f472b6" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#8b5cf6"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#8b5cf6"/>
    `,
  }),
  new Item({
    id: 'tops_princess_snow_2',
    name: 'スノーホワイト・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: スノーホワイト・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ffffff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#38bdf8" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#f8fafc"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'tops_princess_midnight_2',
    name: 'ミッドナイトブラック・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: ミッドナイトブラック・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#475569"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#e11d48" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#1e293b"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'tops_princess_mint_2',
    name: 'パステルミント・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: パステルミント・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#ffffff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#f472b6" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#6ee7b7"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#6ee7b7"/>
    `,
  }),
  new Item({
    id: 'tops_princess_lavender_2',
    name: 'トワイライトラベンダー・ロイヤルレースボレロトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Royal Bolero: トワイライトラベンダー・ロイヤルレースボレロトップス -->
      <path d="M 128 174 L 172 174 L 174 230 L 126 230 Z" fill="#faf5ff"/>
      <!-- Cropped Bolero Jacket -->
      <path d="M 126 172 L 174 172 L 170 205 Q 150 195 130 205 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 126 172 Q 150 185 174 172" stroke="#fde047" stroke-width="2" fill="none"/>
      <!-- Long sleeves -->
      <path d="M 126 175 L 112 215 L 122 215 L 132 185 Z" fill="#c084fc"/>
      <path d="M 174 175 L 188 215 L 178 215 L 168 185 Z" fill="#c084fc"/>
    `,
  }),
  new Item({
    id: 'tops_princess_sky_3',
    name: 'スカイサファイア・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: スカイサファイア・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#38bdf8"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#0284c7"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_princess_rose_3',
    name: 'ローズピンク・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: ローズピンク・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#fb7185"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#e11d48"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'tops_princess_gold_3',
    name: 'ロイヤルゴールド・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: ロイヤルゴールド・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#eab308"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#a16207"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#fefce8" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'tops_princess_crimson_3',
    name: 'クリムゾンルビー・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: クリムゾンルビー・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#e11d48"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#881337"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ffe4e6" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_princess_emerald_3',
    name: 'フォレストエメラルド・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: フォレストエメラルド・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#10b981"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#047857"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ecfdf5" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'tops_princess_violet_3',
    name: 'ノーブルバイオレット・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: ノーブルバイオレット・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#8b5cf6"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#5b21b6"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#f5f3ff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'tops_princess_snow_3',
    name: 'スノーホワイト・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: スノーホワイト・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#f8fafc"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#94a3b8"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_midnight_3',
    name: 'ミッドナイトブラック・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: ミッドナイトブラック・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#1e293b"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#0f172a"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#475569" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'tops_princess_mint_3',
    name: 'パステルミント・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: パステルミント・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#6ee7b7"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#059669"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'tops_princess_lavender_3',
    name: 'トワイライトラベンダー・白毛皮ケープ付ベルベットトップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fur-Trimmed Capelet: トワイライトラベンダー・白毛皮ケープ付ベルベットトップス -->
      <path d="M 130 174 L 170 174 L 175 230 L 125 230 Z" fill="#c084fc"/>
      <!-- Velvet Capelet -->
      <path d="M 134 168 C 115 185 110 210 125 220 Q 150 225 175 220 C 190 210 185 185 166 168 Z" fill="#7e22ce"/>
      <!-- Fur Trim Border -->
      <path d="M 125 220 Q 150 225 175 220" stroke="#faf5ff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <circle cx="150" cy="190" r="3.5" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'tops_princess_sky_4',
    name: 'スカイサファイア・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: スカイサファイア・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#facc15"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#38bdf8"/>
      <circle cx="182" cy="180" r="8" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'tops_princess_rose_4',
    name: 'ローズピンク・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: ローズピンク・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ffffff" stroke="#e11d48" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#fef08a"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#fb7185"/>
      <circle cx="182" cy="180" r="8" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'tops_princess_gold_4',
    name: 'ロイヤルゴールド・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: ロイヤルゴールド・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#fefce8" stroke="#a16207" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#ef4444"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#eab308"/>
      <circle cx="182" cy="180" r="8" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'tops_princess_crimson_4',
    name: 'クリムゾンルビー・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: クリムゾンルビー・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ffe4e6" stroke="#881337" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#facc15"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#e11d48"/>
      <circle cx="182" cy="180" r="8" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'tops_princess_emerald_4',
    name: 'フォレストエメラルド・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: フォレストエメラルド・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ecfdf5" stroke="#047857" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#fbbf24"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#10b981"/>
      <circle cx="182" cy="180" r="8" fill="#10b981"/>
    `,
  }),
  new Item({
    id: 'tops_princess_violet_4',
    name: 'ノーブルバイオレット・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: ノーブルバイオレット・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#f5f3ff" stroke="#5b21b6" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#f472b6"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#8b5cf6"/>
      <circle cx="182" cy="180" r="8" fill="#8b5cf6"/>
    `,
  }),
  new Item({
    id: 'tops_princess_snow_4',
    name: 'スノーホワイト・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: スノーホワイト・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#38bdf8"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#f8fafc"/>
      <circle cx="182" cy="180" r="8" fill="#f8fafc"/>
    `,
  }),
  new Item({
    id: 'tops_princess_midnight_4',
    name: 'ミッドナイトブラック・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: ミッドナイトブラック・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#475569" stroke="#0f172a" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#e11d48"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#1e293b"/>
      <circle cx="182" cy="180" r="8" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'tops_princess_mint_4',
    name: 'パステルミント・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: パステルミント・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#ffffff" stroke="#059669" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#f472b6"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#6ee7b7"/>
      <circle cx="182" cy="180" r="8" fill="#6ee7b7"/>
    `,
  }),
  new Item({
    id: 'tops_princess_lavender_4',
    name: 'トワイライトラベンダー・ペプラムフリルパフブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Peplum Blouse: トワイライトラベンダー・ペプラムフリルパフブラウス -->
      <path d="M 128 176 Q 139 168 150 176 Q 161 168 172 176 L 176 226 L 124 226 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Peplum flare -->
      <path d="M 124 226 Q 150 232 176 226 L 184 242 Q 150 250 116 242 Z" fill="#faf5ff" stroke="#7e22ce" stroke-width="1"/>
      <!-- Center Bow -->
      <circle cx="150" cy="190" r="3" fill="#fde047"/>
      <!-- Puff sleeves -->
      <circle cx="118" cy="180" r="8" fill="#c084fc"/>
      <circle cx="182" cy="180" r="8" fill="#c084fc"/>
    `,
  }),
  new Item({
    id: 'tops_princess_sky_5',
    name: 'スカイサファイア・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: スカイサファイア・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ffffff" stroke="#0284c7" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ffffff" stroke="#0284c7" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#facc15"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#0284c7" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#0284c7" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_rose_5',
    name: 'ローズピンク・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: ローズピンク・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ffffff" stroke="#e11d48" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ffffff" stroke="#e11d48" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#fef08a"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#e11d48" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#e11d48" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_gold_5',
    name: 'ロイヤルゴールド・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: ロイヤルゴールド・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#fefce8" stroke="#a16207" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#fefce8" stroke="#a16207" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#ef4444"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#a16207" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#a16207" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_crimson_5',
    name: 'クリムゾンルビー・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: クリムゾンルビー・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ffe4e6" stroke="#881337" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ffe4e6" stroke="#881337" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#facc15"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#881337" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#881337" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_emerald_5',
    name: 'フォレストエメラルド・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: フォレストエメラルド・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ecfdf5" stroke="#047857" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ecfdf5" stroke="#047857" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#fbbf24"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#047857" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#047857" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_violet_5',
    name: 'ノーブルバイオレット・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: ノーブルバイオレット・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#f5f3ff" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#f5f3ff" stroke="#5b21b6" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#f472b6"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#5b21b6" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#5b21b6" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_snow_5',
    name: 'スノーホワイト・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: スノーホワイト・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#38bdf8"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#94a3b8" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#94a3b8" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_midnight_5',
    name: 'ミッドナイトブラック・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: ミッドナイトブラック・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#475569" stroke="#0f172a" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#475569" stroke="#0f172a" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#e11d48"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#0f172a" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#0f172a" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_mint_5',
    name: 'パステルミント・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: パステルミント・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#ffffff" stroke="#059669" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#ffffff" stroke="#059669" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#f472b6"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#059669" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#059669" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'tops_princess_lavender_5',
    name: 'トワイライトラベンダー・ヴィクトリアンハイネックブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- High-Neck Lace Blouse: トワイライトラベンダー・ヴィクトリアンハイネックブラウス -->
      <path d="M 126 174 L 174 174 L 176 230 L 124 230 Z" fill="#faf5ff" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- High Neck Collar -->
      <rect x="140" y="160" width="20" height="14" fill="#faf5ff" stroke="#7e22ce" stroke-width="0.8"/>
      <polygon points="150,172 153,176 150,180 147,176" fill="#fde047"/>
      <!-- Pin tuck lines -->
      <line x1="144" y1="174" x2="144" y2="230" stroke="#7e22ce" stroke-width="1" opacity="0.5"/>
      <line x1="156" y1="174" x2="156" y2="230" stroke="#7e22ce" stroke-width="1" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_sky_1',
    name: 'スカイサファイア・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: スカイサファイア・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#facc15" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_rose_1',
    name: 'ローズピンク・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: ローズピンク・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#fef08a" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_gold_1',
    name: 'ロイヤルゴールド・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: ロイヤルゴールド・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_crimson_1',
    name: 'クリムゾンルビー・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: クリムゾンルビー・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#facc15" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_emerald_1',
    name: 'フォレストエメラルド・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: フォレストエメラルド・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_violet_1',
    name: 'ノーブルバイオレット・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: ノーブルバイオレット・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#f472b6" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_snow_1',
    name: 'スノーホワイト・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: スノーホワイト・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_midnight_1',
    name: 'ミッドナイトブラック・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: ミッドナイトブラック・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_mint_1',
    name: 'パステルミント・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: パステルミント・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#f472b6" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_lavender_1',
    name: 'トワイライトラベンダー・金糸刺繍の豪華ボールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Grand Ball Skirt: トワイライトラベンダー・金糸刺繍の豪華ボールスカート -->
      <path d="M 124 230 Q 150 236 176 230 C 215 250 225 300 216 345 C 190 355 110 355 84 345 C 75 300 85 250 124 230 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 100 340 Q 150 352 200 340" stroke="#fde047" stroke-width="2.5" stroke-dasharray="5,3" fill="none"/>
      <polygon points="150,260 154,266 150,272 146,266" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_sky_2',
    name: 'スカイサファイア・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: スカイサファイア・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#38bdf8"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ffffff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_rose_2',
    name: 'ローズピンク・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: ローズピンク・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#fb7185"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ffffff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_gold_2',
    name: 'ロイヤルゴールド・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: ロイヤルゴールド・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#eab308"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#fefce8"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_crimson_2',
    name: 'クリムゾンルビー・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: クリムゾンルビー・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#e11d48"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ffe4e6"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_emerald_2',
    name: 'フォレストエメラルド・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: フォレストエメラルド・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#10b981"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ecfdf5"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_violet_2',
    name: 'ノーブルバイオレット・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: ノーブルバイオレット・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#8b5cf6"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#f5f3ff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_snow_2',
    name: 'スノーホワイト・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: スノーホワイト・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#f8fafc"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ffffff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_midnight_2',
    name: 'ミッドナイトブラック・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: ミッドナイトブラック・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#1e293b"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#475569"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_mint_2',
    name: 'パステルミント・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: パステルミント・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#6ee7b7"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#ffffff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_lavender_2',
    name: 'トワイライトラベンダー・3段ティアードオーガンジースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Tiered Organza Tutu: トワイライトラベンダー・3段ティアードオーガンジースカート -->
      <path d="M 126 230 Q 150 236 174 230 L 186 260 Q 150 270 114 260 Z" fill="#c084fc"/>
      <path d="M 114 260 Q 150 270 186 260 L 196 295 Q 150 308 104 295 Z" fill="#faf5ff"/>
      <path d="M 104 295 Q 150 308 196 295 L 206 335 Q 150 348 94 335 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_sky_3',
    name: 'スカイサファイア・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: スカイサファイア・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#0284c7"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#38bdf8" stroke="#facc15" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_rose_3',
    name: 'ローズピンク・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: ローズピンク・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#e11d48"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#fb7185" stroke="#fef08a" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_gold_3',
    name: 'ロイヤルゴールド・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: ロイヤルゴールド・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#a16207"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#eab308" stroke="#ef4444" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_crimson_3',
    name: 'クリムゾンルビー・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: クリムゾンルビー・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#881337"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#e11d48" stroke="#facc15" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_emerald_3',
    name: 'フォレストエメラルド・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: フォレストエメラルド・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#047857"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#10b981" stroke="#fbbf24" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_violet_3',
    name: 'ノーブルバイオレット・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: ノーブルバイオレット・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#5b21b6"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#8b5cf6" stroke="#f472b6" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_snow_3',
    name: 'スノーホワイト・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: スノーホワイト・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#94a3b8"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_midnight_3',
    name: 'ミッドナイトブラック・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: ミッドナイトブラック・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#0f172a"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#1e293b" stroke="#e11d48" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_mint_3',
    name: 'パステルミント・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: パステルミント・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#059669"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#6ee7b7" stroke="#f472b6" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_lavender_3',
    name: 'トワイライトラベンダー・バッスルリボンクラシカルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Bustle Train Skirt: トワイライトラベンダー・バッスルリボンクラシカルスカート -->
      <path d="M 126 230 L 174 230 L 195 345 Q 150 355 105 345 Z" fill="#7e22ce"/>
      <!-- Front Drapery -->
      <path d="M 126 230 Q 150 280 174 230 L 180 275 Q 150 290 120 275 Z" fill="#c084fc" stroke="#fde047" stroke-width="1.2"/>
      <circle cx="150" cy="235" r="3" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_sky_4',
    name: 'スカイサファイア・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: スカイサファイア・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#38bdf8"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ffffff" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#facc15" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_rose_4',
    name: 'ローズピンク・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: ローズピンク・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#fb7185"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ffffff" stroke="#e11d48" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#fef08a" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_gold_4',
    name: 'ロイヤルゴールド・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: ロイヤルゴールド・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#eab308"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#fefce8" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#ef4444" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_crimson_4',
    name: 'クリムゾンルビー・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: クリムゾンルビー・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#e11d48"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ffe4e6" stroke="#881337" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#facc15" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_emerald_4',
    name: 'フォレストエメラルド・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: フォレストエメラルド・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#10b981"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ecfdf5" stroke="#047857" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#fbbf24" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_violet_4',
    name: 'ノーブルバイオレット・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: ノーブルバイオレット・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#8b5cf6"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#f5f3ff" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#f472b6" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_snow_4',
    name: 'スノーホワイト・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: スノーホワイト・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#f8fafc"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#38bdf8" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_midnight_4',
    name: 'ミッドナイトブラック・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: ミッドナイトブラック・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#1e293b"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#475569" stroke="#0f172a" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#e11d48" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_mint_4',
    name: 'パステルミント・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: パステルミント・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#6ee7b7"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#ffffff" stroke="#059669" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#f472b6" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_lavender_4',
    name: 'トワイライトラベンダー・マーメイドフレアプリンセススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Mermaid Flared Skirt: トワイライトラベンダー・マーメイドフレアプリンセススカート -->
      <path d="M 126 230 Q 150 235 174 230 L 172 275 Q 150 280 128 275 Z" fill="#c084fc"/>
      <path d="M 128 275 Q 150 280 172 275 C 185 305 220 330 212 348 Q 150 356 88 348 C 80 330 115 305 128 275 Z" fill="#faf5ff" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 110 330 Q 150 345 190 330" stroke="#fde047" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_sky_5',
    name: 'スカイサファイア・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: スカイサファイア・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_rose_5',
    name: 'ローズピンク・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: ローズピンク・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_gold_5',
    name: 'ロイヤルゴールド・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: ロイヤルゴールド・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#fefce8" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_crimson_5',
    name: 'クリムゾンルビー・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: クリムゾンルビー・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ffe4e6" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_emerald_5',
    name: 'フォレストエメラルド・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: フォレストエメラルド・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ecfdf5" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_violet_5',
    name: 'ノーブルバイオレット・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: ノーブルバイオレット・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#f5f3ff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_snow_5',
    name: 'スノーホワイト・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: スノーホワイト・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_midnight_5',
    name: 'ミッドナイトブラック・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: ミッドナイトブラック・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#475569" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_mint_5',
    name: 'パステルミント・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: パステルミント・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#ffffff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_princess_lavender_5',
    name: 'トワイライトラベンダー・スカラップレースパニエスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Scalloped Petticoat Skirt: トワイライトラベンダー・スカラップレースパニエスカート -->
      <path d="M 126 230 Q 150 236 174 230 L 188 340 Q 150 350 112 340 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <!-- Scallop hems -->
      <path d="M 112 340 Q 120 346 128 340 Q 136 346 144 340 Q 152 346 160 340 Q 168 346 176 340 Q 184 346 188 340" stroke="#faf5ff" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_sky_1',
    name: 'スカイサファイア・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: スカイサファイア・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ffffff" opacity="0.85" stroke="#38bdf8" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#facc15"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ffffff" opacity="0.85" stroke="#38bdf8" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_rose_1',
    name: 'ローズピンク・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: ローズピンク・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ffffff" opacity="0.85" stroke="#fb7185" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#fef08a"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ffffff" opacity="0.85" stroke="#fb7185" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_gold_1',
    name: 'ロイヤルゴールド・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: ロイヤルゴールド・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#fefce8" opacity="0.85" stroke="#eab308" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#ef4444"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#fefce8" opacity="0.85" stroke="#eab308" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_crimson_1',
    name: 'クリムゾンルビー・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: クリムゾンルビー・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ffe4e6" opacity="0.85" stroke="#e11d48" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#facc15"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ffe4e6" opacity="0.85" stroke="#e11d48" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_emerald_1',
    name: 'フォレストエメラルド・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: フォレストエメラルド・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ecfdf5" opacity="0.85" stroke="#10b981" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#fbbf24"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ecfdf5" opacity="0.85" stroke="#10b981" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_violet_1',
    name: 'ノーブルバイオレット・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: ノーブルバイオレット・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#f5f3ff" opacity="0.85" stroke="#8b5cf6" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#f472b6"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#f5f3ff" opacity="0.85" stroke="#8b5cf6" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_snow_1',
    name: 'スノーホワイト・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: スノーホワイト・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ffffff" opacity="0.85" stroke="#f8fafc" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#38bdf8"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ffffff" opacity="0.85" stroke="#f8fafc" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_midnight_1',
    name: 'ミッドナイトブラック・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: ミッドナイトブラック・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#475569" opacity="0.85" stroke="#1e293b" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#e11d48"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#475569" opacity="0.85" stroke="#1e293b" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_mint_1',
    name: 'パステルミント・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: パステルミント・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#ffffff" opacity="0.85" stroke="#6ee7b7" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#f472b6"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#ffffff" opacity="0.85" stroke="#6ee7b7" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_lavender_1',
    name: 'トワイライトラベンダー・ガラスの煌めきミュール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Glass Slippers: トワイライトラベンダー・ガラスの煌めきミュール -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#faf5ff" opacity="0.85" stroke="#c084fc" stroke-width="1.2"/>
      <polygon points="135,342 137,346 141,346 138,349 139,353 135,351 131,353 132,349 129,346 133,346" fill="#fde047"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#faf5ff" opacity="0.85" stroke="#c084fc" stroke-width="1.2"/>
      <polygon points="165,342 167,346 171,346 168,349 169,353 165,351 161,353 162,349 159,346 163,346" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_sky_2',
    name: 'スカイサファイア・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: スカイサファイア・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#facc15" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#facc15"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#facc15" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_rose_2',
    name: 'ローズピンク・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: ローズピンク・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#fef08a" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#fef08a"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#fef08a" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_gold_2',
    name: 'ロイヤルゴールド・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: ロイヤルゴールド・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#ef4444" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#ef4444"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#ef4444" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_crimson_2',
    name: 'クリムゾンルビー・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: クリムゾンルビー・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#facc15" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#facc15"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#facc15" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_emerald_2',
    name: 'フォレストエメラルド・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: フォレストエメラルド・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#fbbf24"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_violet_2',
    name: 'ノーブルバイオレット・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: ノーブルバイオレット・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#f472b6" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#f472b6"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#f472b6" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_snow_2',
    name: 'スノーホワイト・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: スノーホワイト・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#38bdf8"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_midnight_2',
    name: 'ミッドナイトブラック・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: ミッドナイトブラック・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#e11d48" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#e11d48"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#e11d48" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_mint_2',
    name: 'パステルミント・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: パステルミント・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#f472b6" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#f472b6"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#f472b6" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_lavender_2',
    name: 'トワイライトラベンダー・宝石ストラッププリンセスパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Jewel Strap Pumps: トワイライトラベンダー・宝石ストラッププリンセスパンプス -->
      <path d="M 126 344 L 144 344 L 144 358 L 122 358 C 120 358 120 350 126 344 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <line x1="126" y1="346" x2="144" y2="346" stroke="#fde047" stroke-width="2"/>
      <circle cx="135" cy="346" r="2" fill="#fde047"/>
      <path d="M 156 344 L 174 344 L 178 350 C 180 358 178 358 156 358 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <line x1="156" y1="346" x2="174" y2="346" stroke="#fde047" stroke-width="2"/>
      <circle cx="165" cy="346" r="2" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_sky_3',
    name: 'スカイサファイア・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: スカイサファイア・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_rose_3',
    name: 'ローズピンク・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: ローズピンク・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#fb7185" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#fb7185" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#fb7185" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#fb7185" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_gold_3',
    name: 'ロイヤルゴールド・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: ロイヤルゴールド・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#eab308" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#eab308" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#eab308" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#eab308" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_crimson_3',
    name: 'クリムゾンルビー・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: クリムゾンルビー・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#e11d48" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_emerald_3',
    name: 'フォレストエメラルド・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: フォレストエメラルド・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#10b981" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#10b981" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#10b981" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#10b981" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_violet_3',
    name: 'ノーブルバイオレット・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: ノーブルバイオレット・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#8b5cf6" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#8b5cf6" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#8b5cf6" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#8b5cf6" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_snow_3',
    name: 'スノーホワイト・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: スノーホワイト・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#f8fafc" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#f8fafc" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#f8fafc" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#f8fafc" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_midnight_3',
    name: 'ミッドナイトブラック・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: ミッドナイトブラック・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#1e293b" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_mint_3',
    name: 'パステルミント・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: パステルミント・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#6ee7b7" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#6ee7b7" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#6ee7b7" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#6ee7b7" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_lavender_3',
    name: 'トワイライトラベンダー・サテンリボンレースアップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Satin Ballet Shoes: トワイライトラベンダー・サテンリボンレースアップシューズ -->
      <!-- Criss-cross ribbons -->
      <line x1="128" y1="325" x2="144" y2="345" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="144" y1="325" x2="128" y2="345" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="156" y1="325" x2="172" y2="345" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="172" y1="325" x2="156" y2="345" stroke="#c084fc" stroke-width="1.5"/>
      <!-- Slipper -->
      <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_sky_4',
    name: 'スカイサファイア・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: スカイサファイア・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="140" cy="340" r="1.5" fill="#ffffff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="160" cy="340" r="1.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_rose_4',
    name: 'ローズピンク・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: ローズピンク・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="140" cy="340" r="1.5" fill="#ffffff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#fb7185" stroke="#e11d48" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="160" cy="340" r="1.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_gold_4',
    name: 'ロイヤルゴールド・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: ロイヤルゴールド・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#fefce8"/>
      <circle cx="140" cy="340" r="1.5" fill="#fefce8"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#fefce8"/>
      <circle cx="160" cy="340" r="1.5" fill="#fefce8"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_crimson_4',
    name: 'クリムゾンルビー・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: クリムゾンルビー・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ffe4e6"/>
      <circle cx="140" cy="340" r="1.5" fill="#ffe4e6"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#e11d48" stroke="#881337" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ffe4e6"/>
      <circle cx="160" cy="340" r="1.5" fill="#ffe4e6"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_emerald_4',
    name: 'フォレストエメラルド・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: フォレストエメラルド・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ecfdf5"/>
      <circle cx="140" cy="340" r="1.5" fill="#ecfdf5"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#10b981" stroke="#047857" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ecfdf5"/>
      <circle cx="160" cy="340" r="1.5" fill="#ecfdf5"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_violet_4',
    name: 'ノーブルバイオレット・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: ノーブルバイオレット・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#f5f3ff"/>
      <circle cx="140" cy="340" r="1.5" fill="#f5f3ff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#8b5cf6" stroke="#5b21b6" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#f5f3ff"/>
      <circle cx="160" cy="340" r="1.5" fill="#f5f3ff"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_snow_4',
    name: 'スノーホワイト・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: スノーホワイト・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="140" cy="340" r="1.5" fill="#ffffff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="160" cy="340" r="1.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_midnight_4',
    name: 'ミッドナイトブラック・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: ミッドナイトブラック・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#475569"/>
      <circle cx="140" cy="340" r="1.5" fill="#475569"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#475569"/>
      <circle cx="160" cy="340" r="1.5" fill="#475569"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_mint_4',
    name: 'パステルミント・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: パステルミント・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="140" cy="340" r="1.5" fill="#ffffff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#ffffff"/>
      <circle cx="160" cy="340" r="1.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_princess_lavender_4',
    name: 'トワイライトラベンダー・真珠ボタンのロイヤルショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Royal Ankle Boots: トワイライトラベンダー・真珠ボタンのロイヤルショートブーツ -->
      <path d="M 126 325 L 145 325 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <circle cx="140" cy="332" r="1.5" fill="#faf5ff"/>
      <circle cx="140" cy="340" r="1.5" fill="#faf5ff"/>
      <path d="M 155 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.2"/>
      <circle cx="160" cy="332" r="1.5" fill="#faf5ff"/>
      <circle cx="160" cy="340" r="1.5" fill="#faf5ff"/>
    `,
  }),
  new Item({
    id: 'bg_princess_ballroom_gold',
    name: '豪華絢爛・黄金の大舞踏会',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fffbeb"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#fde047" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#fde047" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#eab308" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#eab308" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#eab308" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#78350f" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#eab308" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#eab308" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#eab308" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#eab308"/>
      <circle cx="220" cy="180" r="3" fill="#eab308"/>
    `,
  }),
  new Item({
    id: 'bg_princess_ballroom_crystal',
    name: '舞踏会・水晶シャンデリア広間',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#f8fafc"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#93c5fd" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#93c5fd" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#3b82f6" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#3b82f6" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#3b82f6" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#1e293b" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#3b82f6" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#3b82f6" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#3b82f6"/>
      <circle cx="220" cy="180" r="3" fill="#3b82f6"/>
    `,
  }),
  new Item({
    id: 'bg_princess_ballroom_rose',
    name: '薔薇のロココ舞踏会サロン',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf2f8"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#db2777" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#db2777" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#db2777" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#831843" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#db2777" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#db2777" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#db2777" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#db2777"/>
      <circle cx="220" cy="180" r="3" fill="#db2777"/>
    `,
  }),
  new Item({
    id: 'bg_princess_throne_royal',
    name: '王宮・威厳あふれる玉座の間',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#450a0a"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#dc2626" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#dc2626" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#1c1917" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_throne_moon',
    name: '月影の静謐なる蒼き王座',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#0f172a"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#3b82f6" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#3b82f6" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#93c5fd" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#93c5fd" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#93c5fd" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#020617" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#93c5fd" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#93c5fd" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#93c5fd" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#93c5fd"/>
      <circle cx="220" cy="180" r="3" fill="#93c5fd"/>
    `,
  }),
  new Item({
    id: 'bg_princess_palace_terrace',
    name: '宮殿・星降る夜のバルコニー',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#020617"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#1e1b4b" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#1e1b4b" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#f8fafc" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_palace_sunset',
    name: '夕陽に染まる王宮テラス',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#451a03"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#ea580c" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#ea580c" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fde047" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fde047" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fde047" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#7c2d12" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fde047" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fde047" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fde047" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fde047"/>
      <circle cx="220" cy="180" r="3" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'bg_princess_palace_dawn',
    name: '朝露きらめく暁の王宮回廊',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf4ff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#e879f9" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#e879f9" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fef08a" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fef08a" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#86198f" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fef08a" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fef08a"/>
      <circle cx="220" cy="180" r="3" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'bg_princess_garden_rose',
    name: '満開のプリンセスローズガーデン',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf2f8"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#15803d" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#15803d" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fb7185" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fb7185" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fb7185" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#be123c" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fb7185" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fb7185" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fb7185" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fb7185"/>
      <circle cx="220" cy="180" r="3" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'bg_princess_garden_gazebo',
    name: '純白ガゼボと噴水の王室庭園',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#f0fdf4"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#16a34a" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#16a34a" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#38bdf8" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#38bdf8" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#14532d" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#38bdf8"/>
      <circle cx="220" cy="180" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_princess_garden_night',
    name: '夜光蝶舞う月の魔法庭園',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#022c22"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#059669" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#059669" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#6ee7b7" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#6ee7b7" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#6ee7b7" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef08a" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#6ee7b7" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#6ee7b7" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#6ee7b7" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#6ee7b7"/>
      <circle cx="220" cy="180" r="3" fill="#6ee7b7"/>
    `,
  }),
  new Item({
    id: 'bg_princess_crystal_palace',
    name: '氷と星のクリスタルパレス',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#f0f9ff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#38bdf8" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#38bdf8" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#0284c7" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#0284c7" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#0284c7" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#bae6fd" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#0284c7" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#0284c7" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#0284c7" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#0284c7"/>
      <circle cx="220" cy="180" r="3" fill="#0284c7"/>
    `,
  }),
  new Item({
    id: 'bg_princess_cinderella_carriage',
    name: 'カボチャの黄金馬車と時計塔',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#0f172a"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#facc15" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#facc15" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#38bdf8" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#38bdf8" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#38bdf8"/>
      <circle cx="220" cy="180" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_princess_swan_lake',
    name: '月光照らす白鳥の湖畔',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#020617"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#1e3a8a" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#1e3a8a" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#93c5fd" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#93c5fd" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#93c5fd" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#93c5fd" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#93c5fd" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#93c5fd" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#93c5fd"/>
      <circle cx="220" cy="180" r="3" fill="#93c5fd"/>
    `,
  }),
  new Item({
    id: 'bg_princess_rapunzel_lanterns',
    name: '夜空に舞い上がる光のランタン',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#1e1b4b"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f59e0b" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f59e0b" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fbbf24" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fbbf24" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fbbf24" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef08a" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fbbf24" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fbbf24" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fbbf24" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fbbf24"/>
      <circle cx="220" cy="180" r="3" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'bg_princess_underwater_palace',
    name: '珊瑚と真珠の海底マーメイド宮殿',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#082f49"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#0284c7" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#0284c7" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#38bdf8" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#38bdf8" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#67e8f9" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#38bdf8"/>
      <circle cx="220" cy="180" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_princess_arabian_palace',
    name: '千夜一夜・黄金ドームの砂漠宮殿',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#172554"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f59e0b" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f59e0b" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#38bdf8" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#38bdf8" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef08a" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#38bdf8"/>
      <circle cx="220" cy="180" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_princess_alice_teaparty',
    name: '不思議の国のロイヤルティーパーティー',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#ecfeff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#06b6d4" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#06b6d4" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#f43f5e" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#f43f5e" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#f43f5e" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#facc15" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#f43f5e" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#f43f5e" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#f43f5e" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#f43f5e"/>
      <circle cx="220" cy="180" r="3" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'bg_princess_library_grand',
    name: '宮廷・天まで届く大図書館',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#451a03"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#92400e" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#92400e" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef3c7" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_chamber_canopy',
    name: '天蓋カーテンのプリンセスベッドルーム',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf2f8"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fef08a" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fef08a" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fef08a" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fef08a"/>
      <circle cx="220" cy="180" r="3" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'bg_princess_mirror_dressing',
    name: '黄金彫刻ミラーのドレッシングルーム',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fffbeb"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#facc15" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#facc15" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#f472b6" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#f472b6" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#f472b6" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#78350f" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#f472b6" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#f472b6" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#f472b6" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#f472b6"/>
      <circle cx="220" cy="180" r="3" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'bg_princess_grand_staircase',
    name: '赤絨毯敷く大理石のグランド階段',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#450a0a"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#b91c1c" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#b91c1c" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_cathedral_glass',
    name: 'ステンドグラス輝く王立大聖堂',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#1e1b4b"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#e11d48" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#e11d48" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#38bdf8" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#38bdf8" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fde047" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#38bdf8" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#38bdf8"/>
      <circle cx="220" cy="180" r="3" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_princess_sugar_castle',
    name: 'お菓子とお砂糖のパステルパレス',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf4ff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#a7f3d0" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#a7f3d0" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#a7f3d0" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef08a" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#a7f3d0" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#a7f3d0" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#a7f3d0" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#a7f3d0"/>
      <circle cx="220" cy="180" r="3" fill="#a7f3d0"/>
    `,
  }),
  new Item({
    id: 'bg_princess_snow_frozen',
    name: '白銀の氷雪フロストパレス',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#f0f9ff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#7dd3fc" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#7dd3fc" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#bae6fd" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#bae6fd" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#bae6fd" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#bae6fd" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#bae6fd" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#bae6fd" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#bae6fd"/>
      <circle cx="220" cy="180" r="3" fill="#bae6fd"/>
    `,
  }),
  new Item({
    id: 'bg_princess_starlight_temple',
    name: '銀河の果ての星辰神殿',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#020617"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#4338ca" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#4338ca" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#c084fc" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_spring_cherry_palace',
    name: '春風そよぐ桜花満開の宮廷',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#fdf2f8"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#f472b6" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#86efac" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#86efac" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#86efac" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#ffffff" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#86efac" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#86efac" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#86efac" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#86efac"/>
      <circle cx="220" cy="180" r="3" fill="#86efac"/>
    `,
  }),
  new Item({
    id: 'bg_princess_autumn_maple_court',
    name: '黄金の紅葉舞い散る秋の庭園',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#451a03"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#ea580c" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#ea580c" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#facc15" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#facc15" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#facc15" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#fef08a" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#facc15" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#facc15" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#facc15"/>
      <circle cx="220" cy="180" r="3" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bg_princess_gothic_spire',
    name: '深紅の薔薇咲く漆黒ゴシック古城',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#0f172a"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#881337" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#881337" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#e11d48" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#e11d48" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#e11d48" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#334155" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#e11d48" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#e11d48" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#e11d48" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#e11d48"/>
      <circle cx="220" cy="180" r="3" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'bg_princess_rainbow_arch',
    name: '祝福の七色レインボーパレス',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<rect x="0" y="0" width="300" height="400" fill="#f0f9ff"/>
      <!-- Palace Pillars -->
      <rect x="15" y="0" width="25" height="340" fill="#fda4af" opacity="0.6"/>
      <rect x="260" y="0" width="25" height="340" fill="#fda4af" opacity="0.6"/>
      <!-- Grand Arch -->
      <path d="M 0 160 Q 150 40 300 160" stroke="#fef08a" stroke-width="5" fill="none"/>
      <!-- Chandelier / Lantern / Star Centerpiece -->
      <circle cx="150" cy="70" r="14" fill="#fef08a" opacity="0.8"/>
      <circle cx="150" cy="70" r="6" fill="#ffffff"/>
      <line x1="150" y1="0" x2="150" y2="56" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Marble Floor with reflections -->
      <rect x="0" y="310" width="300" height="90" fill="#67e8f9" opacity="0.85"/>
      <line x1="0" y1="310" x2="300" y2="310" stroke="#fef08a" stroke-width="2.5"/>
      <line x1="40" y1="310" x2="0" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <line x1="260" y1="310" x2="300" y2="400" stroke="#fef08a" stroke-width="1" opacity="0.4"/>
      <!-- Sparkle dots -->
      <circle cx="80" cy="180" r="3" fill="#fef08a"/>
      <circle cx="220" cy="180" r="3" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'eyes_princess_diamond',
    name: 'ダイヤモンドスターアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ダイヤモンドスターアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#0c4a6e" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#0c4a6e" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#0284c7"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#38bdf8"/>
        <circle cx="135" cy="118" r="2.8" fill="#0c4a6e"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#0c4a6e" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#0c4a6e" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#0284c7"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#38bdf8"/>
        <circle cx="165" cy="118" r="2.8" fill="#0c4a6e"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_sapphire',
    name: 'ロイヤルサファイアアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ロイヤルサファイアアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#1d4ed8"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#60a5fa"/>
        <circle cx="135" cy="118" r="2.8" fill="#1e3a8a"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#1e3a8a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#1d4ed8"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#60a5fa"/>
        <circle cx="165" cy="118" r="2.8" fill="#1e3a8a"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_ruby',
    name: 'クリムゾンルビーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- クリムゾンルビーアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#4c0519" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#4c0519" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#be185d"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#f43f5e"/>
        <circle cx="135" cy="118" r="2.8" fill="#4c0519"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#4c0519" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#4c0519" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#be185d"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#f43f5e"/>
        <circle cx="165" cy="118" r="2.8" fill="#4c0519"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_emerald',
    name: 'ノーブルエメラルドアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ノーブルエメラルドアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#064e3b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#047857"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#34d399"/>
        <circle cx="135" cy="118" r="2.8" fill="#064e3b"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#064e3b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#064e3b" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#047857"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#34d399"/>
        <circle cx="165" cy="118" r="2.8" fill="#064e3b"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_amethyst',
    name: 'ミスティックアメジストアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ミスティックアメジストアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#4c1d95" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#4c1d95" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#7c3aed"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#c4b5fd"/>
        <circle cx="135" cy="118" r="2.8" fill="#4c1d95"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#4c1d95" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#4c1d95" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#7c3aed"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#c4b5fd"/>
        <circle cx="165" cy="118" r="2.8" fill="#4c1d95"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_topaz',
    name: 'サンシャイントパーズアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- サンシャイントパーズアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#d97706"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#f59e0b"/>
        <circle cx="135" cy="118" r="2.8" fill="#78350f"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#d97706"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#f59e0b"/>
        <circle cx="165" cy="118" r="2.8" fill="#78350f"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_aquamarine',
    name: 'シレーナアクアマリンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- シレーナアクアマリンアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#164e63" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#164e63" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#0891b2"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#22d3ee"/>
        <circle cx="135" cy="118" r="2.8" fill="#164e63"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#164e63" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#164e63" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#0891b2"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#22d3ee"/>
        <circle cx="165" cy="118" r="2.8" fill="#164e63"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_rosequartz',
    name: '愛のローズクォーツアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 愛のローズクォーツアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#831843" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#831843" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#db2777"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#f472b6"/>
        <circle cx="135" cy="118" r="2.8" fill="#831843"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#831843" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#831843" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#db2777"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#f472b6"/>
        <circle cx="165" cy="118" r="2.8" fill="#831843"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_peridot',
    name: '若葉のペリドットアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 若葉のペリドットアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#365314" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#365314" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#65a30d"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#a3e635"/>
        <circle cx="135" cy="118" r="2.8" fill="#365314"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#365314" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#365314" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#65a30d"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#a3e635"/>
        <circle cx="165" cy="118" r="2.8" fill="#365314"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_garnet',
    name: '情熱のガーネットアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 情熱のガーネットアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#450a0a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#450a0a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#b91c1c"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#ef4444"/>
        <circle cx="135" cy="118" r="2.8" fill="#450a0a"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#450a0a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#450a0a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#b91c1c"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#ef4444"/>
        <circle cx="165" cy="118" r="2.8" fill="#450a0a"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_tanzanite',
    name: '夕暮れタンザナイトアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 夕暮れタンザナイトアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#312e81" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#312e81" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#4f46e5"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#818cf8"/>
        <circle cx="135" cy="118" r="2.8" fill="#312e81"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#312e81" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#312e81" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#4f46e5"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#818cf8"/>
        <circle cx="165" cy="118" r="2.8" fill="#312e81"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_morganite',
    name: '可憐なモルガナイトアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 可憐なモルガナイトアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#881337" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#881337" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#e11d48"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#fda4af"/>
        <circle cx="135" cy="118" r="2.8" fill="#881337"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#881337" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#881337" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#e11d48"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#fda4af"/>
        <circle cx="165" cy="118" r="2.8" fill="#881337"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_citrine',
    name: 'ハニーシトリンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ハニーシトリンアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#713f12" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#713f12" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#ca8a04"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#facc15"/>
        <circle cx="135" cy="118" r="2.8" fill="#713f12"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#713f12" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#713f12" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#ca8a04"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#facc15"/>
        <circle cx="165" cy="118" r="2.8" fill="#713f12"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_alexandrite',
    name: '幻惑のアレキサンドライトアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 幻惑のアレキサンドライトアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#134e4a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#134e4a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#0f766e"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#14b8a6"/>
        <circle cx="135" cy="118" r="2.8" fill="#134e4a"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#134e4a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#134e4a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#0f766e"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#14b8a6"/>
        <circle cx="165" cy="118" r="2.8" fill="#134e4a"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_opal',
    name: '虹彩のオパールアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 虹彩のオパールアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#581c87" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#581c87" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#9333ea"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#67e8f9"/>
        <circle cx="135" cy="118" r="2.8" fill="#581c87"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#581c87" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#581c87" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#9333ea"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#67e8f9"/>
        <circle cx="165" cy="118" r="2.8" fill="#581c87"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_moonstone',
    name: '月光のムーンストーンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 月光のムーンストーンアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#3730a3" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#3730a3" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#6366f1"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#a5b4fc"/>
        <circle cx="135" cy="118" r="2.8" fill="#3730a3"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#3730a3" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#3730a3" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#6366f1"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#a5b4fc"/>
        <circle cx="165" cy="118" r="2.8" fill="#3730a3"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_sunstone',
    name: '陽光のサンストーンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 陽光のサンストーンアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#7c2d12" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#7c2d12" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#ea580c"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#fb923c"/>
        <circle cx="135" cy="118" r="2.8" fill="#7c2d12"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#7c2d12" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#7c2d12" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#ea580c"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#fb923c"/>
        <circle cx="165" cy="118" r="2.8" fill="#7c2d12"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_lapis',
    name: '天空のラピスラズリアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 天空のラピスラズリアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#172554" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#172554" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#1e40af"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#3b82f6"/>
        <circle cx="135" cy="118" r="2.8" fill="#172554"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#172554" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#172554" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#1e40af"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#3b82f6"/>
        <circle cx="165" cy="118" r="2.8" fill="#172554"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_pearl',
    name: '純真のオーシャンパールアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 純真のオーシャンパールアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#334155" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#64748b"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#cbd5e1"/>
        <circle cx="135" cy="118" r="2.8" fill="#334155"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#334155" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#64748b"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#cbd5e1"/>
        <circle cx="165" cy="118" r="2.8" fill="#334155"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_blackdiamond',
    name: '漆黒のブラックダイヤアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 漆黒のブラックダイヤアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#1e293b"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#64748b"/>
        <circle cx="135" cy="118" r="2.8" fill="#0f172a"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#1e293b"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#64748b"/>
        <circle cx="165" cy="118" r="2.8" fill="#0f172a"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_aurora',
    name: '極光のオーロラジュエルアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 極光のオーロラジュエルアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#6b21a8" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#6b21a8" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#c084fc"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#f472b6"/>
        <circle cx="135" cy="118" r="2.8" fill="#6b21a8"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#6b21a8" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#6b21a8" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#c084fc"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#f472b6"/>
        <circle cx="165" cy="118" r="2.8" fill="#6b21a8"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_starlight',
    name: '星夜のスターダストアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 星夜のスターダストアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#3b82f6"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#fde047"/>
        <circle cx="135" cy="118" r="2.8" fill="#1d4ed8"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#3b82f6"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#fde047"/>
        <circle cx="165" cy="118" r="2.8" fill="#1d4ed8"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_cinderella',
    name: 'ガラスのシンデレラアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- ガラスのシンデレラアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#0369a1" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#0369a1" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#0ea5e9"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#bae6fd"/>
        <circle cx="135" cy="118" r="2.8" fill="#0369a1"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#0369a1" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#0369a1" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#0ea5e9"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#bae6fd"/>
        <circle cx="165" cy="118" r="2.8" fill="#0369a1"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_aurora_pink',
    name: '眠れる森のローズアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 眠れる森のローズアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#9d174d" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#9d174d" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#ec4899"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#fbcfe8"/>
        <circle cx="135" cy="118" r="2.8" fill="#9d174d"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#9d174d" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#9d174d" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#ec4899"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#fbcfe8"/>
        <circle cx="165" cy="118" r="2.8" fill="#9d174d"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_princess_belle_hazel',
    name: '聡明なベルヘーゼルアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- 聡明なベルヘーゼルアイ -->
      <!-- Left Eye -->
      <g>
        <path d="M 123 105 Q 135 99 146 106" stroke="#422006" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 122 108 L 126 105" stroke="#422006" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#854d0e"/>
        <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#facc15"/>
        <circle cx="135" cy="118" r="2.8" fill="#422006"/>
        <!-- Sparkles -->
        <circle cx="132" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="135,114 136,117 139,117 137,119 138,122 135,120 132,122 133,119 131,117 134,117" fill="#ffffff" opacity="0.8"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 154 106 Q 165 99 177 105" stroke="#422006" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 178 108 L 174 105" stroke="#422006" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#854d0e"/>
        <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#facc15"/>
        <circle cx="165" cy="118" r="2.8" fill="#422006"/>
        <circle cx="162" cy="111" r="2.5" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <polygon points="165,114 166,117 169,117 167,119 168,122 165,120 162,122 163,119 161,117 164,117" fill="#ffffff" opacity="0.8"/>
      </g>
    `,
  }),
  new Item({
    id: 'mouth_princess_noble_smile_pink',
    name: '気品あふれるローズ微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 気品あふれるローズ微笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#be185d" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fda4af" opacity="0.6"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_graceful_smile_cherry',
    name: '優美なチェリーリップの笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 優美なチェリーリップの笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#9f1239" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fb7185" opacity="0.7"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_gentle_smile_peach',
    name: 'おだやかなピーチピンクの微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- おだやかなピーチピンクの微笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fecdd3" opacity="0.5"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_radiant_smile_open',
    name: '輝かしいロイヤルハッピースマイル',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 輝かしいロイヤルハッピースマイル -->
          <path d="M 143 139 Q 150 149 157 139 Z" fill="#e11d48"/>
          <path d="M 145 143 Q 150 148 155 143" fill="#fda4af"/>
          <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
          <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#fda4af" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_sweet_giggle_cat',
    name: '愛嬌あるプリンセスの猫口リップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 愛嬌あるプリンセスの猫口リップ -->
          <path d="M 143 140 Q 147 143 150 140 Q 153 143 157 140" stroke="#be185d" stroke-width="1.8" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="144" rx="3.5" ry="1.2" fill="#f472b6" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_shy_smile_coral',
    name: '恥じらいのコーラルピンクリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 恥じらいのコーラルピンクリップ -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#db2777" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fbcfe8" opacity="0.5"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_dignified_closed',
    name: '高貴なるおすましリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 高貴なるおすましリップ -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#881337" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f43f5e" opacity="0.4"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_enchanted_parted',
    name: 'うっとり息づく魅惑の口元',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- うっとり息づく魅惑の口元 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#b91c1c" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f87171" opacity="0.6"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_delicate_pout',
    name: '可憐なお姫様の小首かしげリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 可憐なお姫様の小首かしげリップ -->
          <path d="M 143 140 Q 147 143 150 140 Q 153 143 157 140" stroke="#9d174d" stroke-width="1.8" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="144" rx="3.5" ry="1.2" fill="#fda4af" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_singing_open',
    name: '愛の歌を歌うプリンセスマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 愛の歌を歌うプリンセスマウス -->
          <path d="M 143 139 Q 150 149 157 139 Z" fill="#dc2626"/>
          <path d="M 145 143 Q 150 148 155 143" fill="#fca5a5"/>
          <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
          <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#fca5a5" opacity="0.7"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_innocent_tiny',
    name: '純真無垢なちょこん口',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 純真無垢なちょこん口 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fda4af" opacity="0.4"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_charming_wink',
    name: '小悪魔プリンセスのウインクリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 小悪魔プリンセスのウインクリップ -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#c026d3" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f5d0fe" opacity="0.6"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_serene_mona',
    name: '静謐なるモナリザの微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 静謐なるモナリザの微笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#78350f" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fed7aa" opacity="0.4"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_sparkle_teeth',
    name: '真珠の歯がのぞく華やか笑顔',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 真珠の歯がのぞく華やか笑顔 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#be123c" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fb7185" opacity="0.8"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_whisper_soft',
    name: '秘密をささやく柔らかな唇',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 秘密をささやく柔らかな唇 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#9f1239" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fecdd3" opacity="0.5"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_regal_confidence',
    name: '女王の風格ただよう微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 女王の風格ただよう微笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#881337" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f472b6" opacity="0.6"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_playful_smile',
    name: 'おてんばプリンセスの笑顔',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- おてんばプリンセスの笑顔 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fda4af" opacity="0.7"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_dreamy_open',
    name: '夢見る乙女のため息マウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 夢見る乙女のため息マウス -->
          <path d="M 143 139 Q 150 149 157 139 Z" fill="#db2777"/>
          <path d="M 145 143 Q 150 148 155 143" fill="#fbcfe8"/>
          <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
          <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#fbcfe8" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_strawberry_gloss',
    name: '苺シロップのつややかリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 苺シロップのつややかリップ -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#ffccd5" opacity="0.8"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_rose_petal',
    name: '薔薇の花びらのような紅唇',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 薔薇の花びらのような紅唇 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#be185d" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f43f5e" opacity="0.7"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_ballroom_joy',
    name: '舞踏会の喜びに咲く笑顔',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 舞踏会の喜びに咲く笑顔 -->
          <path d="M 143 139 Q 150 149 157 139 Z" fill="#e11d48"/>
          <path d="M 145 143 Q 150 148 155 143" fill="#fda4af"/>
          <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
          <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#fda4af" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_modest_smile',
    name: '淑女のつつましやかな微笑',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 淑女のつつましやかな微笑 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#9f1239" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fecdd3" opacity="0.5"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_festive_cheer',
    name: '祝祭に輝くハッピーマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 祝祭に輝くハッピーマウス -->
          <path d="M 143 139 Q 150 149 157 139 Z" fill="#dc2626"/>
          <path d="M 145 143 Q 150 148 155 143" fill="#fca5a5"/>
          <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
          <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#fca5a5" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_tender_whisper',
    name: '優しい愛の言葉を紡ぐ口元',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 優しい愛の言葉を紡ぐ口元 -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#be185d" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#fda4af" opacity="0.5"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_princess_coronation_smile',
    name: '戴冠式の誓いの微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- 戴冠式の誓いの微笑み -->
          <path d="M 144 141 Q 150 145 156 141" stroke="#9f1239" stroke-width="1.6" stroke-linecap="round" fill="none"/>
          <ellipse cx="150" cy="143.5" rx="3" ry="1.3" fill="#f472b6" opacity="0.7"/>
          <circle cx="151" cy="143" r="0.6" fill="#ffffff"/>
    `,
  }),
];
