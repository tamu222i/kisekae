import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export const ANIME_ITEMS: readonly Item[] = [
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
      <!-- Red Back Ribbons -->
      <path d="M 118 245 C 108 260 110 278 116 285" stroke="#dc2626" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 182 245 C 192 260 190 278 184 285" stroke="#dc2626" stroke-width="4" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_chibi',
    name: 'ちびうさのピンクセーラードレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- White Leotard -->
      <path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#fce7f3" stroke-width="1.5"/>
      <!-- Pink Sailor Collar -->
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#f43f5e"/>
      <path d="M 126 172 L 140 200 M 174 172 L 160 200" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <!-- Red Chest Bow with Heart -->
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#e11d48"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#e11d48"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#e11d48" stroke-width="1"/>
      <path d="M 150 196 C 148 194 146 197 150 201 C 154 197 152 194 150 196 Z" fill="#e11d48"/>
      <!-- Pink Pleated Mini Skirt -->
      <path d="M 124 230 Q 150 238 176 230 L 184 266 Q 150 276 116 266 Z" fill="#fb7185"/>
      <path d="M 128 234 L 124 266 M 140 237 L 138 270 M 150 238 L 150 272 M 160 237 L 162 270 M 172 234 L 176 266" stroke="#f43f5e" stroke-width="1.5"/>
      <!-- Puff sleeves -->
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#fce7f3" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#fce7f3" stroke-width="1.2"/>
      <!-- Yellow Waist band -->
      <path d="M 124 230 Q 150 238 176 230" stroke="#facc15" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_mercury',
    name: '知性の水星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#0284c7"/>
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#38bdf8"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#38bdf8"/>
      <circle cx="150" cy="198" r="4" fill="#0284c7"/>
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#0284c7"/>
      <path d="M 128 234 L 123 270 M 150 238 L 150 276 M 172 234 L 177 270" stroke="#0369a1" stroke-width="1.5"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_sailor_mars',
    name: '情熱の火星戦士ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<path d="M 132 175 C 122 185 122 205 122 230 L 178 230 C 178 205 178 185 168 175 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M 125 170 L 140 202 L 160 202 L 175 170 L 168 165 L 150 178 L 132 165 Z" fill="#b91c1c"/>
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#7e22ce"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#7e22ce"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#b91c1c"/>
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
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#f43f5e"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#f43f5e"/>
      <circle cx="150" cy="198" r="4.5" fill="#15803d"/>
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
      <path d="M 150 198 C 140 188 132 195 138 206 C 142 210 148 202 150 198 Z" fill="#1e3a8a"/>
      <path d="M 150 198 C 160 188 168 195 162 206 C 158 210 152 202 150 198 Z" fill="#1e3a8a"/>
      <circle cx="150" cy="198" r="4.5" fill="#facc15"/>
      <path d="M 124 230 Q 150 240 176 230 L 186 270 Q 150 282 114 270 Z" fill="#ea580c"/>
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_serenity',
    name: '銀河の月の女王プリンセスドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<defs>
        <linearGradient id="serenityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#fdf4ff"/>
          <stop offset="100%" stop-color="#fae8ff"/>
        </linearGradient>
      </defs>
      <!-- Empire Waist Bodice -->
      <path d="M 132 178 Q 150 184 168 178 L 168 205 Q 150 210 132 205 Z" fill="#ffffff" stroke="#facc15" stroke-width="1.5"/>
      <!-- Golden Chest Rings -->
      <circle cx="142" cy="192" r="5" fill="none" stroke="#facc15" stroke-width="1.5"/>
      <circle cx="150" cy="190" r="6" fill="none" stroke="#facc15" stroke-width="1.8"/>
      <circle cx="158" cy="192" r="5" fill="none" stroke="#facc15" stroke-width="1.5"/>
      <!-- Flowing Empire Gown -->
      <path d="M 132 205 Q 150 210 168 205 L 196 325 Q 150 335 104 325 Z" fill="url(#serenityGrad)" stroke="#f5d0fe" stroke-width="1"/>
      <!-- Golden Sheer Ribbons at Back -->
      <path d="M 132 205 C 110 240 100 290 108 335" stroke="#fef08a" stroke-width="2.5" fill="none" opacity="0.8"/>
      <path d="M 168 205 C 190 240 200 290 192 335" stroke="#fef08a" stroke-width="2.5" fill="none" opacity="0.8"/>
      <!-- Angelic Sheer Sleeve Puffs -->
      <ellipse cx="122" cy="180" rx="9" ry="6" fill="#ffffff" opacity="0.85" stroke="#facc15" stroke-width="0.8"/>
      <ellipse cx="178" cy="180" rx="9" ry="6" fill="#ffffff" opacity="0.85" stroke="#facc15" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'dress_anime_cardcaptor_pink',
    name: '星の封印解除ピンクフリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Pink Bodice -->
      <path d="M 130 175 L 170 175 L 168 225 Q 150 230 132 225 Z" fill="#fb7185"/>
      <!-- Giant Red Chest Bow -->
      <path d="M 150 192 C 136 178 126 190 134 205 C 142 212 148 198 150 192 Z" fill="#e11d48"/>
      <path d="M 150 192 C 164 178 174 190 166 205 C 158 212 152 198 150 192 Z" fill="#e11d48"/>
      <circle cx="150" cy="194" r="5" fill="#facc15"/>
      <!-- White Frilly Collar -->
      <path d="M 134 175 Q 150 186 166 175" stroke="#ffffff" stroke-width="3.5" fill="none"/>
      <!-- Multi-tier Pink & White Skirt -->
      <path d="M 132 225 Q 150 230 168 225 L 192 275 Q 150 290 108 275 Z" fill="#fb7185"/>
      <path d="M 104 275 Q 150 296 196 275 L 192 284 Q 150 304 108 284 Z" fill="#ffffff" stroke="#fce7f3" stroke-width="1"/>
      <!-- Back Angelic Wings -->
      <path d="M 125 190 C 105 170 95 195 110 215 C 118 220 126 210 125 190 Z" fill="#ffffff" stroke="#f43f5e" stroke-width="1.2"/>
      <path d="M 175 190 C 195 170 205 195 190 215 C 182 220 174 210 175 190 Z" fill="#ffffff" stroke="#f43f5e" stroke-width="1.2"/>
      <!-- Puffy Sleeves -->
      <circle cx="120" cy="182" r="9" fill="#fb7185" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="180" cy="182" r="9" fill="#fb7185" stroke="#ffffff" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_cardcaptor_alice',
    name: '時計の国のアリスエプロンドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Sky Blue Dress -->
      <path d="M 130 175 L 170 175 L 168 225 L 190 280 Q 150 292 110 280 L 132 225 Z" fill="#38bdf8"/>
      <!-- White Frilly Apron -->
      <path d="M 138 180 L 162 180 L 160 225 Q 150 228 140 225 Z" fill="#ffffff"/>
      <path d="M 136 226 Q 150 230 164 226 L 174 276 Q 150 284 126 276 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1"/>
      <!-- Shoulder Frills -->
      <path d="M 134 176 Q 124 195 136 215" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 166 176 Q 176 195 164 215" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Black Spade / Heart on Apron -->
      <path d="M 150 248 C 147 244 143 247 146 252 L 150 256 L 154 252 C 157 247 153 244 150 248 Z" fill="#e11d48"/>
      <!-- Puffy Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="180" cy="180" r="8" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_cardcaptor_school',
    name: '友枝小学校のセーラー制服ワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- White Bodice -->
      <path d="M 130 175 L 170 175 L 168 225 L 132 225 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <!-- Black Sailor Collar -->
      <path d="M 124 172 L 140 200 L 160 200 L 176 172 L 166 166 L 150 178 L 134 166 Z" fill="#0f172a"/>
      <path d="M 126 174 L 140 198 M 174 174 L 160 198" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <!-- Red Ribbon Tie -->
      <path d="M 150 198 L 142 216 L 150 212 L 158 216 Z" fill="#ef4444"/>
      <!-- Black Pleated Skirt -->
      <path d="M 130 225 L 170 225 L 186 278 Q 150 288 114 278 Z" fill="#0f172a"/>
      <path d="M 128 228 L 122 278 M 140 228 L 138 282 M 150 228 L 150 284 M 160 228 L 162 282 M 172 228 L 178 278" stroke="#334155" stroke-width="1.5"/>
      <!-- White sleeves with black cuffs -->
      <rect x="114" y="176" width="12" height="26" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="114" y="196" width="12" height="6" fill="#0f172a"/>
      <rect x="174" y="176" width="12" height="26" rx="5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="174" y="196" width="12" height="6" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'dress_anime_madoka_pink',
    name: '魔法少女の祈りピンクフリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Pink Bodice with Heart Cutout -->
      <path d="M 130 175 L 170 175 L 168 225 Q 150 230 132 225 Z" fill="#fb7185"/>
      <path d="M 144 195 C 140 190 136 195 142 202 L 150 210 L 158 202 C 164 195 160 190 156 195 C 153 190 147 190 144 195 Z" fill="#ffffff"/>
      <!-- Red Neck Ribbon -->
      <path d="M 142 173 L 158 173 L 150 180 Z" fill="#e11d48"/>
      <!-- Multi-layer Petticoat Skirt -->
      <path d="M 132 225 Q 150 230 168 225 L 192 275 Q 150 292 108 275 Z" fill="#fb7185"/>
      <path d="M 104 275 Q 150 298 196 275 L 192 284 Q 150 306 108 284 Z" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <!-- Big Back Red Ribbon tails -->
      <path d="M 120 235 C 108 255 106 280 114 290" stroke="#e11d48" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 180 235 C 192 255 194 280 186 290" stroke="#e11d48" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Puffy Sleeves with Red Ribbons -->
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#fb7185" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#fb7185" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_homura_purple',
    name: '時をかける紫リボン魔法少女ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- White Collared Blouse with Purple Bow -->
      <path d="M 130 175 L 170 175 L 168 225 L 132 225 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 126 174 L 140 196 L 160 196 L 174 174 L 166 170 L 150 180 L 134 170 Z" fill="#cbd5e1"/>
      <!-- Big Purple Bow -->
      <path d="M 150 196 C 140 188 134 195 140 204 L 150 198 L 160 204 C 166 195 160 188 150 196 Z" fill="#7c3aed"/>
      <!-- Grey Bolero Jacket -->
      <path d="M 124 175 L 134 220 L 126 222 Z" fill="#64748b"/>
      <path d="M 176 175 L 166 220 L 174 222 Z" fill="#64748b"/>
      <!-- Black/Purple Layered Pleated Skirt -->
      <path d="M 132 225 L 168 225 L 186 278 Q 150 288 114 278 Z" fill="#334155"/>
      <path d="M 112 278 Q 150 294 188 278 L 186 284 Q 150 300 114 284 Z" fill="#7c3aed"/>
    `,
  }),
  new Item({
    id: 'dress_anime_mami_yellow',
    name: '黄色いリボンのコルセットフリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- White Puff Blouse -->
      <path d="M 130 175 L 170 175 L 168 225 L 132 225 Z" fill="#ffffff"/>
      <!-- Brown Corset -->
      <path d="M 134 195 L 166 195 L 164 225 L 136 225 Z" fill="#78350f"/>
      <path d="M 142 198 L 158 206 M 158 198 L 142 206 M 142 208 L 158 216 M 158 208 L 142 216" stroke="#fef3c7" stroke-width="1.2"/>
      <!-- Yellow Check Pleated Skirt -->
      <path d="M 132 225 L 168 225 L 188 278 Q 150 290 112 278 Z" fill="#facc15"/>
      <path d="M 126 230 L 120 276 M 142 230 L 140 280 M 158 230 L 160 280 M 174 230 L 180 276" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- White Lace Petticoat rim -->
      <path d="M 110 278 Q 150 296 190 278" stroke="#ffffff" stroke-width="4" fill="none"/>
      <!-- Puffy sleeves -->
      <circle cx="118" cy="180" r="9" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5"/>
      <circle cx="182" cy="180" r="9" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_kiki_navy',
    name: '空飛ぶ魔女のネイビーワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Simple Elegant Navy Blue A-Line Dress -->
      <path d="M 132 174 C 124 190 120 220 110 280 Q 150 290 190 280 C 180 220 176 190 168 174 Z" fill="#1e1b4b" stroke="#312e81" stroke-width="1.2"/>
      <!-- Cute Round Neckline -->
      <path d="M 138 174 Q 150 184 162 174" stroke="#ffffff" stroke-width="1.5" fill="none"/>
      <!-- Loose Long Sleeves -->
      <path d="M 132 174 L 112 215 L 122 218 L 134 186 Z" fill="#1e1b4b"/>
      <path d="M 168 174 L 188 215 L 178 218 L 166 186 Z" fill="#1e1b4b"/>
      <!-- Hem fold lines -->
      <path d="M 136 250 Q 150 256 164 250" stroke="#312e81" stroke-width="1.5" fill="none" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'dress_anime_eden_uniform',
    name: '名門イーデン校の正装ワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Black Elegant Dress -->
      <path d="M 130 175 L 170 175 L 166 225 L 186 280 Q 150 290 114 280 L 134 225 Z" fill="#0f172a"/>
      <!-- Intricate Gold Embroidered Collar -->
      <path d="M 136 174 L 144 194 L 156 194 L 164 174 Z" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
      <circle cx="150" cy="186" r="3" fill="#facc15"/>
      <!-- Gold Chest Line & Buttons -->
      <line x1="150" y1="194" x2="150" y2="230" stroke="#facc15" stroke-width="1.5"/>
      <circle cx="150" cy="204" r="2" fill="#facc15"/>
      <circle cx="150" cy="216" r="2" fill="#facc15"/>
      <!-- Gold Sleeve Cuffs -->
      <rect x="114" y="196" width="12" height="4" fill="#facc15"/>
      <rect x="174" y="196" width="12" height="4" fill="#facc15"/>
      <!-- Sleeves -->
      <path d="M 130 175 L 114 198 L 126 198 Z" fill="#0f172a"/>
      <path d="M 170 175 L 186 198 L 174 198 Z" fill="#0f172a"/>
      <!-- Gold Hem Band -->
      <path d="M 116 276 Q 150 286 184 276" stroke="#facc15" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_anya_pink',
    name: 'アーニャのおでかけピンクワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Pastel Pink Cute Dress -->
      <path d="M 132 174 L 168 174 L 166 225 L 184 278 Q 150 288 116 278 L 134 225 Z" fill="#f472b6"/>
      <!-- White Frilly Collar -->
      <path d="M 134 174 Q 150 188 166 174" stroke="#ffffff" stroke-width="4" fill="none"/>
      <!-- White Patch Pocket with Peanut icon -->
      <rect x="156" y="235" width="14" height="16" rx="3" fill="#ffffff"/>
      <ellipse cx="163" cy="243" rx="3" ry="4" fill="#d97706"/>
      <!-- Cute Short Sleeves -->
      <circle cx="120" cy="180" r="7" fill="#f472b6"/>
      <circle cx="180" cy="180" r="7" fill="#f472b6"/>
      <!-- White Hem Frill -->
      <path d="M 114 278 Q 150 290 186 278" stroke="#ffffff" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_thorn_princess',
    name: 'いばら姫のエレガントブラックドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Off-shoulder Black Dress with Red Rose Lining -->
      <path d="M 132 186 L 168 186 L 164 230 L 180 270 Q 150 282 120 270 L 136 230 Z" fill="#09090b" stroke="#27272a" stroke-width="1"/>
      <!-- Criss-cross Golden Neck straps -->
      <path d="M 138 170 L 162 186 M 162 170 L 138 186" stroke="#facc15" stroke-width="1.2" fill="none"/>
      <circle cx="150" cy="178" r="2.5" fill="#facc15"/>
      <!-- Red Rose Petal Interior Peek -->
      <path d="M 124 266 Q 150 278 176 266 L 182 272 Q 150 286 118 272 Z" fill="#b91c1c"/>
      <!-- Asymmetric Thigh Slit Accents -->
      <path d="M 160 230 L 176 268" stroke="#facc15" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_frieren_robe',
    name: '千年の旅人エルフローブ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Black/White Striped Long Skirt -->
      <path d="M 130 220 L 170 220 L 192 310 Q 150 320 108 310 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 122 225 L 116 308 M 136 225 L 134 314 M 150 225 L 150 316 M 164 225 L 166 314 M 178 225 L 184 308" stroke="#0f172a" stroke-width="2"/>
      <!-- White & Gold Shoulder Capelet -->
      <path d="M 126 170 Q 150 178 174 170 L 186 215 Q 150 226 114 215 Z" fill="#ffffff" stroke="#facc15" stroke-width="1.5"/>
      <!-- Gold Brooch & Red Gem -->
      <polygon points="150,188 155,196 150,204 145,196" fill="#facc15"/>
      <circle cx="150" cy="196" r="2.5" fill="#dc2626"/>
      <!-- White Sleeves with Gold Cuffs -->
      <path d="M 126 175 L 110 220 L 120 222 L 132 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="108" y="218" width="12" height="4" fill="#facc15"/>
      <path d="M 174 175 L 190 220 L 180 222 L 168 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="180" y="218" width="12" height="4" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_anime_fern_dress',
    name: '静謐の黒リボンロングローブワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Deep Purple/Black Long Modest Dress -->
      <path d="M 132 174 L 168 174 L 166 225 L 192 315 Q 150 325 108 315 L 134 225 Z" fill="#1e1b4b" stroke="#312e81" stroke-width="1"/>
      <!-- White High Collar & Black Ribbon Tie -->
      <path d="M 136 172 Q 150 180 164 172" stroke="#ffffff" stroke-width="3" fill="none"/>
      <path d="M 150 180 L 144 196 L 150 192 L 156 196 Z" fill="#0f172a"/>
      <!-- Cute Violet Shoulder Capelet -->
      <path d="M 126 174 Q 150 182 174 174 L 182 208 Q 150 216 118 208 Z" fill="#4c1d95" opacity="0.9"/>
      <!-- Flowing Long Sleeves -->
      <path d="M 128 175 L 112 230 L 124 230 Z" fill="#1e1b4b"/>
      <path d="M 172 175 L 188 230 L 176 230 Z" fill="#1e1b4b"/>
    `,
  }),
  new Item({
    id: 'dress_anime_bkomachi_ai',
    name: '星野アイのうさぎアイドルピンクドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<defs>
        <linearGradient id="aiPinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#db2777"/>
        </linearGradient>
      </defs>
      <!-- Vibrant Pink Bodice with Ruffles -->
      <path d="M 130 175 L 170 175 L 166 225 Q 150 232 134 225 Z" fill="url(#aiPinkGrad)"/>
      <path d="M 136 182 Q 150 192 164 182" stroke="#ffffff" stroke-width="2" fill="none"/>
      <!-- Heart & Stars on Chest -->
      <polygon points="150,188 152,194 158,194 153,198 155,204 150,200 145,204 147,198 142,194 148,194" fill="#facc15"/>
      <!-- Tiered Ruffle Skirt -->
      <path d="M 134 225 Q 150 232 166 225 L 192 270 Q 150 286 108 270 Z" fill="#ec4899"/>
      <path d="M 104 270 Q 150 292 196 270 L 192 282 Q 150 302 108 282 Z" fill="#f43f5e"/>
      <path d="M 102 282 Q 150 306 198 282" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- Big Back Bow ribbon tails -->
      <path d="M 120 230 C 104 250 102 275 110 288" stroke="#ec4899" stroke-width="4.5" fill="none"/>
      <path d="M 180 230 C 196 250 198 275 190 288" stroke="#ec4899" stroke-width="4.5" fill="none"/>
      <!-- Puffy sleeves -->
      <circle cx="118" cy="180" r="9" fill="#fce7f3" stroke="#f43f5e" stroke-width="1.2"/>
      <circle cx="182" cy="180" r="9" fill="#fce7f3" stroke="#f43f5e" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'dress_anime_bkomachi_ruby',
    name: 'ルビーのB小町レッドステージドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<path d="M 130 175 L 170 175 L 166 225 L 134 225 Z" fill="#e11d48"/>
      <!-- White Vest Overlay & Gold Buttons -->
      <path d="M 136 175 L 144 225 L 156 225 L 164 175 Z" fill="#ffffff"/>
      <circle cx="150" cy="188" r="2.5" fill="#facc15"/>
      <circle cx="150" cy="202" r="2.5" fill="#facc15"/>
      <circle cx="150" cy="216" r="2.5" fill="#facc15"/>
      <!-- Red & White Tiered Frill Skirt -->
      <path d="M 132 225 L 168 225 L 190 274 Q 150 286 110 274 Z" fill="#e11d48"/>
      <path d="M 106 274 Q 150 292 194 274 L 190 282 Q 150 300 110 282 Z" fill="#ffffff"/>
      <!-- Sleeves -->
      <circle cx="118" cy="180" r="8" fill="#e11d48" stroke="#ffffff" stroke-width="1"/>
      <circle cx="182" cy="180" r="8" fill="#e11d48" stroke="#ffffff" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'dress_anime_bkomachi_kana',
    name: '有馬かなのB小町ネイビーステージドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<path d="M 130 175 L 170 175 L 166 225 L 134 225 Z" fill="#1e3a8a"/>
      <!-- White Ascott Tie & Gold Brooch -->
      <path d="M 144 175 L 156 175 L 153 205 L 147 205 Z" fill="#ffffff"/>
      <circle cx="150" cy="186" r="3" fill="#facc15"/>
      <!-- Gold Double Breasted Buttons -->
      <circle cx="140" cy="198" r="2" fill="#facc15"/>
      <circle cx="160" cy="198" r="2" fill="#facc15"/>
      <circle cx="140" cy="212" r="2" fill="#facc15"/>
      <circle cx="160" cy="212" r="2" fill="#facc15"/>
      <!-- Navy Pleated Skirt with White Trim -->
      <path d="M 132 225 L 168 225 L 188 275 Q 150 288 112 275 Z" fill="#1e3a8a"/>
      <path d="M 108 275 Q 150 292 192 275" stroke="#ffffff" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_bkomachi_mem',
    name: 'MEMちょのB小町イエローステージドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<path d="M 130 175 L 170 175 L 166 225 L 134 225 Z" fill="#eab308"/>
      <!-- Black Ribbon & Heart -->
      <path d="M 142 178 L 158 178 L 150 188 Z" fill="#0f172a"/>
      <circle cx="150" cy="188" r="3" fill="#ec4899"/>
      <!-- Yellow & Black Check Skirt -->
      <path d="M 132 225 L 168 225 L 190 274 Q 150 288 110 274 Z" fill="#fde047"/>
      <path d="M 126 228 L 120 274 M 142 228 L 140 278 M 158 228 L 160 278 M 174 228 L 180 274" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Black Lace Hem -->
      <path d="M 108 274 Q 150 292 192 274" stroke="#0f172a" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_maomao_hanfu',
    name: '薬草摘みの翡翠色漢服ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Traditional Chinese Jade Green Hanfu -->
      <path d="M 132 174 L 168 174 L 164 220 L 186 315 Q 150 325 114 315 L 136 220 Z" fill="#059669"/>
      <!-- Cream Crossed Collar Wrap -->
      <path d="M 132 174 L 156 215 L 148 218 L 130 184 Z" fill="#fef3c7"/>
      <path d="M 168 174 L 144 215 L 152 218 L 170 184 Z" fill="#10b981"/>
      <!-- Peach Orange Ribbon Obi Sash -->
      <rect x="134" y="215" width="32" height="14" rx="2" fill="#fb923c"/>
      <path d="M 148 229 L 144 260 M 152 229 L 154 256" stroke="#fb923c" stroke-width="2"/>
      <!-- Wide Flowing Sleeves -->
      <path d="M 132 174 C 110 200 102 240 114 265 L 124 260 C 118 235 124 205 136 185 Z" fill="#059669"/>
      <path d="M 168 174 C 190 200 198 240 186 265 L 176 260 C 182 235 176 205 164 185 Z" fill="#059669"/>
    `,
  }),
  new Item({
    id: 'dress_anime_banquet_hanfu',
    name: '園遊会の華やかピンク牡丹漢服',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Gorgeous Imperial Palace Banquet Hanfu -->
      <path d="M 132 174 L 168 174 L 164 215 L 194 320 Q 150 330 106 320 L 136 215 Z" fill="#f472b6"/>
      <!-- Gold Peony Embroidery -->
      <circle cx="150" cy="265" r="8" fill="#fef08a" opacity="0.6"/>
      <circle cx="140" cy="285" r="6" fill="#fef08a" opacity="0.6"/>
      <circle cx="160" cy="285" r="6" fill="#fef08a" opacity="0.6"/>
      <!-- Crimson Red Sash -->
      <rect x="132" y="210" width="36" height="16" rx="2" fill="#e11d48"/>
      <!-- Long Flowing Billowing Sleeves -->
      <path d="M 132 174 C 100 210 90 260 104 290 L 118 280 C 112 250 120 210 136 185 Z" fill="#f472b6"/>
      <path d="M 168 174 C 200 210 210 260 196 290 L 182 280 C 188 250 180 210 164 185 Z" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'dress_anime_miku_sakura',
    name: '桜ミクのピンク桜花フリルワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Pastel Pink & White Bodice -->
      <path d="M 132 175 L 168 175 L 166 225 L 134 225 Z" fill="#ffffff" stroke="#fbcfe8" stroke-width="1"/>
      <!-- Pink Collar & Tie with Cherry Blossom motif -->
      <path d="M 130 174 L 142 196 L 158 196 L 170 174 Z" fill="#f472b6"/>
      <path d="M 150 196 L 146 220 L 154 220 Z" fill="#fb7185"/>
      <circle cx="150" cy="208" r="3" fill="#ffffff"/>
      <!-- Pink Pleated Mini Skirt with Cherry Blossom Print -->
      <path d="M 132 225 L 168 225 L 188 274 Q 150 286 112 274 Z" fill="#fb7185"/>
      <path d="M 108 274 Q 150 292 192 274" stroke="#ffffff" stroke-width="2.5" fill="none"/>
      <!-- Detached Sleeves -->
      <path d="M 112 196 L 104 250 L 116 250 L 122 196 Z" fill="#fbcfe8" stroke="#fb7185" stroke-width="1"/>
      <path d="M 188 196 L 196 250 L 184 250 L 178 196 Z" fill="#fbcfe8" stroke="#fb7185" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'dress_anime_miku_snow',
    name: '雪ミクの白銀スノークリスタルケープドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Crystal White & Cyan Dress -->
      <path d="M 132 175 L 168 175 L 164 225 L 188 280 Q 150 292 112 280 L 136 225 Z" fill="#f0fdf4" stroke="#bae6fd" stroke-width="1"/>
      <!-- Fur-trimmed Capelet with Snowflake Clasp -->
      <path d="M 126 174 Q 150 182 174 174 L 184 212 Q 150 220 116 212 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="150" cy="196" r="4" fill="#38bdf8"/>
      <!-- Snowflake detail on skirt -->
      <path d="M 150 248 L 150 262 M 143 255 L 157 255 M 145 250 L 155 260 M 145 260 L 155 250" stroke="#0284c7" stroke-width="1.2"/>
      <!-- Fluffy White Hem -->
      <path d="M 110 280 Q 150 294 190 280" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_anime_reimu_miko',
    name: '紅白巫女のフリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- White Bodice with Red Collar -->
      <path d="M 132 175 L 168 175 L 164 225 L 136 225 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <!-- Big Red Chest Bow -->
      <path d="M 150 192 C 138 180 130 190 138 202 L 150 195 L 162 202 C 170 190 162 180 150 192 Z" fill="#dc2626"/>
      <!-- Red Pleated Miko Skirt -->
      <path d="M 132 225 L 168 225 L 190 285 Q 150 298 110 285 Z" fill="#dc2626"/>
      <path d="M 126 230 L 120 282 M 142 230 L 140 288 M 158 230 L 160 288 M 174 230 L 180 282" stroke="#b91c1c" stroke-width="1.5"/>
      <!-- White Frill Hem -->
      <path d="M 108 285 Q 150 302 192 285" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- Detached Red & White Sleeves -->
      <path d="M 112 190 L 102 245 L 114 245 L 122 190 Z" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
      <path d="M 188 190 L 198 245 L 186 245 L 178 190 Z" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'dress_anime_marisa_witch',
    name: '星詠みの白黒エプロン魔女ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Black Bodice -->
      <path d="M 132 175 L 168 175 L 164 225 L 136 225 Z" fill="#0f172a"/>
      <!-- White Frilly Apron Overlay -->
      <path d="M 140 178 L 160 178 L 158 225 L 142 225 Z" fill="#ffffff"/>
      <path d="M 136 225 L 164 225 L 176 278 Q 150 286 124 278 Z" fill="#ffffff"/>
      <!-- Black Bell Skirt underneath -->
      <path d="M 132 225 L 168 225 L 190 282 Q 150 294 110 282 Z" fill="#0f172a"/>
      <!-- White Ruffled Petticoat Hem -->
      <path d="M 108 282 Q 150 298 192 282" stroke="#ffffff" stroke-width="3.5" fill="none"/>
      <!-- White Puff Sleeves -->
      <circle cx="118" cy="180" r="8" fill="#ffffff"/>
      <circle cx="182" cy="180" r="8" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_anime_flandre_red',
    name: '虹の翼の真紅フリルドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Crimson Red Bodice -->
      <path d="M 132 175 L 168 175 L 164 225 L 136 225 Z" fill="#dc2626"/>
      <!-- Yellow Neck Ribbon -->
      <path d="M 144 175 L 156 175 L 150 184 Z" fill="#facc15"/>
      <!-- Pink Apron Frills -->
      <path d="M 138 225 L 162 225 L 170 265 Q 150 272 130 265 Z" fill="#fbcfe8"/>
      <!-- Red Tiered Frill Skirt -->
      <path d="M 132 225 L 168 225 L 190 280 Q 150 294 110 280 Z" fill="#dc2626"/>
      <!-- White Lace Hem -->
      <path d="M 108 280 Q 150 298 192 280" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- White Puff Sleeves -->
      <circle cx="118" cy="180" r="8" fill="#ffffff"/>
      <circle cx="182" cy="180" r="8" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_anime_rem_maid',
    name: '鬼の双子のクラシックフリルメイド服',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Black Bodice -->
      <path d="M 132 175 L 168 175 L 164 225 L 136 225 Z" fill="#0f172a"/>
      <!-- White Ruffled Pinafore Apron -->
      <path d="M 138 178 L 162 178 L 160 225 L 140 225 Z" fill="#ffffff"/>
      <path d="M 134 176 Q 124 195 136 215" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M 166 176 Q 176 195 164 215" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Black Flared Skirt -->
      <path d="M 132 225 L 168 225 L 188 280 Q 150 292 112 280 Z" fill="#0f172a"/>
      <!-- White Apron Front -->
      <path d="M 136 225 L 164 225 L 174 274 Q 150 282 126 274 Z" fill="#ffffff"/>
      <!-- Frill Hem -->
      <path d="M 110 280 Q 150 296 190 280" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- Pink / Blue Ribbon on chest -->
      <circle cx="150" cy="190" r="3" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'dress_anime_mitsuri_uniform',
    name: '恋柱の桜餅カラー隊服＆白羽織',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
<!-- Pure White Haori -->
      <path d="M 126 172 L 174 172 L 186 280 L 172 280 L 164 195 L 136 195 L 128 280 L 114 280 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Open-collar Demon Slayer Uniform -->
      <path d="M 134 185 L 166 185 L 162 230 L 138 230 Z" fill="#1e1b4b"/>
      <!-- Open Chest V-shape peek -->
      <polygon points="150,208 142,185 158,185" fill="#fed7aa"/>
      <circle cx="150" cy="216" r="2" fill="#facc15"/>
      <!-- White Belt with Pink/Green accents -->
      <rect x="136" y="228" width="28" height="6" fill="#ffffff"/>
      <rect x="146" y="228" width="8" height="6" fill="#ec4899"/>
      <!-- Pleated Mini Skirt -->
      <path d="M 136 234 L 164 234 L 176 268 Q 150 276 124 268 Z" fill="#1e1b4b"/>
      <path d="M 130 236 L 128 266 M 150 236 L 150 270 M 170 236 L 172 266" stroke="#312e81" stroke-width="1.5"/>
      <!-- Wide White Sleeves -->
      <path d="M 126 172 L 106 240 L 120 240 L 134 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 174 172 L 194 240 L 180 240 L 166 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'tops_anime_nezuko_haori',
    name: '禰豆子の漆黒羽織＆麻の葉着物',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Black Haori Coat -->
      <path d="M 126 172 L 174 172 L 186 240 L 172 240 L 164 195 L 136 195 L 128 240 L 114 240 Z" fill="#09090b"/>
      <!-- Pink Hemp-leaf Kimono Inner -->
      <path d="M 136 185 L 164 185 L 162 230 L 138 230 Z" fill="#f472b6"/>
      <!-- Red & White Checkered Obi Sash -->
      <rect x="136" y="218" width="28" height="12" fill="#dc2626"/>
      <rect x="142" y="218" width="6" height="6" fill="#ffffff"/>
      <rect x="154" y="218" width="6" height="6" fill="#ffffff"/>
      <rect x="136" y="224" width="6" height="6" fill="#ffffff"/>
      <rect x="148" y="224" width="6" height="6" fill="#ffffff"/>
      <!-- Orange cord -->
      <line x1="136" y1="224" x2="164" y2="224" stroke="#f97316" stroke-width="1.5"/>
      <!-- Wide Black Sleeves -->
      <path d="M 126 172 L 106 235 L 118 235 L 134 185 Z" fill="#09090b"/>
      <path d="M 174 172 L 194 235 L 182 235 L 166 185 Z" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'tops_anime_zenitsu_haori',
    name: '善逸の三角鱗イエロー羽織',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<defs>
        <linearGradient id="zenitsuGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#ea580c"/>
        </linearGradient>
      </defs>
      <!-- Haori Coat -->
      <path d="M 126 172 L 174 172 L 184 240 L 170 240 L 162 195 L 138 195 L 130 240 L 116 240 Z" fill="url(#zenitsuGrad)"/>
      <!-- White Triangles -->
      <polygon points="122,215 126,208 130,215" fill="#ffffff"/>
      <polygon points="170,215 174,208 178,215" fill="#ffffff"/>
      <polygon points="120,230 124,222 128,230" fill="#ffffff"/>
      <polygon points="172,230 176,222 180,230" fill="#ffffff"/>
      <!-- Black Demon Slayer Uniform Inner -->
      <path d="M 138 185 L 162 185 L 160 230 L 140 230 Z" fill="#0f172a"/>
      <circle cx="150" cy="200" r="2.5" fill="#facc15"/>
      <circle cx="150" cy="214" r="2.5" fill="#facc15"/>
      <!-- Wide Gradient Sleeves -->
      <path d="M 126 172 L 106 235 L 118 235 L 134 185 Z" fill="url(#zenitsuGrad)"/>
      <path d="M 174 172 L 194 235 L 182 235 L 166 185 Z" fill="url(#zenitsuGrad)"/>
      <polygon points="110,210 114,203 118,210" fill="#ffffff"/>
      <polygon points="182,210 186,203 190,210" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'tops_anime_giyu_haori',
    name: '義勇の半々羽織',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Right Side: Solid Maroon Red -->
      <path d="M 126 172 L 150 172 L 150 240 L 116 240 Z" fill="#881337"/>
      <path d="M 126 172 L 106 235 L 118 235 L 134 185 Z" fill="#881337"/>
      <!-- Left Side: Geometric Green & Orange Pattern -->
      <path d="M 150 172 L 174 172 L 184 240 L 150 240 Z" fill="#15803d"/>
      <path d="M 174 172 L 194 235 L 182 235 L 166 185 Z" fill="#15803d"/>
      <!-- Orange Diamond accents -->
      <polygon points="158,190 166,198 158,206 150,198" fill="#f97316"/>
      <polygon points="166,214 174,222 166,230 158,222" fill="#f97316"/>
      <!-- Uniform Inner -->
      <path d="M 138 185 L 162 185 L 160 230 L 140 230 Z" fill="#0f172a"/>
      <circle cx="150" cy="200" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_anime_shinobu_haori',
    name: 'しのぶの蝶羽織',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<defs>
        <linearGradient id="shinobuGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#e9d5ff"/>
          <stop offset="100%" stop-color="#99f6e4"/>
        </linearGradient>
      </defs>
      <!-- Haori Coat -->
      <path d="M 126 172 L 174 172 L 186 240 L 172 240 L 164 195 L 136 195 L 128 240 L 114 240 Z" fill="url(#shinobuGrad)" stroke="#c084fc" stroke-width="1"/>
      <!-- Butterfly Wing Pattern at bottom -->
      <path d="M 114 236 C 120 228 126 236 128 240" stroke="#09090b" stroke-width="2.5" fill="none"/>
      <path d="M 172 240 C 174 236 180 228 186 236" stroke="#09090b" stroke-width="2.5" fill="none"/>
      <circle cx="120" cy="234" r="2" fill="#09090b"/>
      <circle cx="180" cy="234" r="2" fill="#09090b"/>
      <!-- Uniform Inner -->
      <path d="M 138 185 L 162 185 L 160 230 L 140 230 Z" fill="#0f172a"/>
      <circle cx="150" cy="200" r="2" fill="#facc15"/>
      <!-- Wide Butterfly Sleeves -->
      <path d="M 126 172 L 104 235 L 118 235 L 134 185 Z" fill="url(#shinobuGrad)"/>
      <path d="M 174 172 L 196 235 L 182 235 L 166 185 Z" fill="url(#shinobuGrad)"/>
      <path d="M 104 230 C 110 224 116 230 118 235" stroke="#09090b" stroke-width="2.5" fill="none"/>
      <path d="M 182 235 C 184 230 190 224 196 230" stroke="#09090b" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'tops_anime_kanao_cape',
    name: 'カナヲの白マント＆ピンク紐リボン',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Black Demon Slayer Uniform Top -->
      <path d="M 134 175 L 166 175 L 164 230 L 136 230 Z" fill="#1e1b4b"/>
      <!-- White Cape fastened on left shoulder -->
      <path d="M 128 174 Q 150 182 172 174 L 176 235 Q 150 242 124 235 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Pink Cord Ribbon Bow -->
      <circle cx="140" cy="186" r="3.5" fill="#f43f5e"/>
      <path d="M 140 186 C 132 180 130 190 136 194 Z" fill="#f43f5e"/>
      <path d="M 140 186 C 148 180 150 190 144 194 Z" fill="#f43f5e"/>
      <path d="M 138 190 L 134 204 M 142 190 L 144 202" stroke="#f43f5e" stroke-width="1.8"/>
      <!-- Uniform Sleeves -->
      <path d="M 128 175 L 112 215 L 122 218 L 134 185 Z" fill="#1e1b4b"/>
      <path d="M 172 175 L 188 215 L 178 218 L 166 185 Z" fill="#1e1b4b"/>
    `,
  }),
  new Item({
    id: 'tops_anime_tanjiro_haori',
    name: '炭治郎の市松グリーン羽織',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<defs>
        <pattern id="tanjiroTopPat" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#059669"/>
          <rect x="6" width="6" height="6" fill="#09090b"/>
          <rect y="6" width="6" height="6" fill="#09090b"/>
          <rect x="6" y="6" width="6" height="6" fill="#059669"/>
        </pattern>
      </defs>
      <!-- Checkered Haori -->
      <path d="M 126 172 L 174 172 L 186 240 L 172 240 L 164 195 L 136 195 L 128 240 L 114 240 Z" fill="url(#tanjiroTopPat)"/>
      <!-- Uniform Inner -->
      <path d="M 138 185 L 162 185 L 160 230 L 140 230 Z" fill="#09090b"/>
      <circle cx="150" cy="200" r="2" fill="#ffffff"/>
      <!-- Checkered Sleeves -->
      <path d="M 126 172 L 106 235 L 118 235 L 134 185 Z" fill="url(#tanjiroTopPat)"/>
      <path d="M 174 172 L 194 235 L 182 235 L 166 185 Z" fill="url(#tanjiroTopPat)"/>
    `,
  }),
  new Item({
    id: 'tops_anime_muichiro_kimono',
    name: '無一郎の霞エメラルド隊服',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Teal Oversized Loose Kimono Top -->
      <path d="M 130 174 L 170 174 L 166 235 L 134 235 Z" fill="#0f766e"/>
      <path d="M 134 174 L 154 210 L 146 214 L 130 184 Z" fill="#14b8a6"/>
      <!-- Gold Buttons -->
      <circle cx="150" cy="202" r="2.5" fill="#facc15"/>
      <circle cx="150" cy="216" r="2.5" fill="#facc15"/>
      <!-- Very Baggy Loose Sleeves -->
      <path d="M 130 174 C 105 200 95 240 108 260 L 122 255 C 114 230 120 205 134 185 Z" fill="#0f766e"/>
      <path d="M 170 174 C 195 200 205 240 192 260 L 178 255 C 186 230 180 205 166 185 Z" fill="#0f766e"/>
    `,
  }),
  new Item({
    id: 'tops_anime_bocchi_track',
    name: 'ぼっちちゃんのピンクジャージ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Pastel Pink Track Jacket -->
      <path d="M 128 174 L 172 174 L 168 232 L 132 232 Z" fill="#f472b6" stroke="#db2777" stroke-width="1"/>
      <!-- White Collar & Center Zipper -->
      <path d="M 136 174 Q 150 182 164 174" stroke="#ffffff" stroke-width="3" fill="none"/>
      <line x1="150" y1="180" x2="150" y2="232" stroke="#ffffff" stroke-width="2"/>
      <!-- White Sleeves Stripes -->
      <path d="M 128 174 L 112 225 L 122 228 L 134 186 Z" fill="#f472b6"/>
      <line x1="120" y1="180" x2="114" y2="226" stroke="#ffffff" stroke-width="2"/>
      <path d="M 172 174 L 188 225 L 178 228 L 166 186 Z" fill="#f472b6"/>
      <line x1="180" y1="180" x2="186" y2="226" stroke="#ffffff" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_miku_sleeveless',
    name: '初音ミクのシルバーノースリーブ＆エメラルドネクタイ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Silver Gray Sleeveless Bodice -->
      <path d="M 132 175 L 168 175 L 164 225 L 136 225 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Emerald Teal Sailor Collar & Tie -->
      <path d="M 130 174 L 142 194 L 158 194 L 170 174 Z" fill="#0d9488"/>
      <path d="M 150 194 L 146 224 L 154 224 Z" fill="#14b8a6"/>
      <rect x="146" y="200" width="8" height="3" fill="#0f766e"/>
      <!-- Detached Cyber Sleeves with Equalizer UI -->
      <path d="M 116 195 L 106 250 L 118 250 L 124 195 Z" fill="#0f172a"/>
      <rect x="110" y="210" width="4" height="2" fill="#14b8a6"/>
      <rect x="110" y="214" width="6" height="2" fill="#14b8a6"/>
      <rect x="110" y="218" width="8" height="2" fill="#14b8a6"/>
      <path d="M 184 195 L 194 250 L 182 250 L 176 195 Z" fill="#0f172a"/>
      <rect x="186" y="210" width="4" height="2" fill="#14b8a6"/>
      <rect x="184" y="214" width="6" height="2" fill="#14b8a6"/>
      <rect x="182" y="218" width="8" height="2" fill="#14b8a6"/>
    `,
  }),
  new Item({
    id: 'tops_anime_kita_school',
    name: '喜多ちゃんの赤チェックベスト制服',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- White School Shirt with Red Ribbon -->
      <path d="M 132 174 L 168 174 L 164 228 L 136 228 Z" fill="#ffffff"/>
      <!-- Red Plaid Vest -->
      <path d="M 134 185 L 166 185 L 164 228 L 136 228 Z" fill="#b91c1c"/>
      <path d="M 142 185 L 142 228 M 158 185 L 158 228" stroke="#f87171" stroke-width="1.2"/>
      <!-- Red Bow Tie -->
      <path d="M 150 182 C 144 176 140 182 146 188 L 150 185 L 154 188 C 160 182 156 176 150 182 Z" fill="#dc2626"/>
      <!-- White Long Sleeves -->
      <path d="M 132 174 L 114 220 L 124 222 L 136 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 168 174 L 186 220 L 176 222 L 164 185 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'tops_anime_nadeshiko_poncho',
    name: 'なでしこ風もこもこ北欧ポンチョ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Pastel Warm Poncho -->
      <path d="M 130 174 Q 150 184 170 174 L 194 235 Q 150 248 106 235 Z" fill="#fed7aa" stroke="#fb923c" stroke-width="1"/>
      <!-- Geometric Folk Pattern -->
      <path d="M 112 215 L 188 215" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4,4"/>
      <!-- White Tassel Fringe -->
      <path d="M 108 235 Q 150 248 192 235" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- Big Round Pink Buttons -->
      <circle cx="150" cy="195" r="4" fill="#f43f5e"/>
      <circle cx="150" cy="210" r="4" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'tops_anime_gochiusa_vest',
    name: 'ラビットハウス風カフェベストブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- White Frill Blouse -->
      <path d="M 132 174 L 168 174 L 164 226 L 136 226 Z" fill="#ffffff"/>
      <!-- Pastel Blue Cafe Vest -->
      <path d="M 134 186 L 166 186 L 162 226 L 138 226 Z" fill="#38bdf8"/>
      <!-- White Ribbon Bow -->
      <path d="M 150 182 C 144 176 142 184 148 188 L 150 185 L 152 188 C 158 184 156 176 150 182 Z" fill="#ffffff"/>
      <!-- Gold Buttons -->
      <circle cx="145" cy="202" r="2" fill="#facc15"/>
      <circle cx="155" cy="202" r="2" fill="#facc15"/>
      <!-- Frilly Puff Sleeves -->
      <circle cx="120" cy="182" r="8" fill="#ffffff" stroke="#bae6fd" stroke-width="1.2"/>
      <circle cx="180" cy="182" r="8" fill="#ffffff" stroke="#bae6fd" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_pastel_cardigan',
    name: 'ふわもこパステルくま耳カーディガン',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Fluffy Pastel Cardigan -->
      <path d="M 128 174 L 172 174 L 168 234 L 132 234 Z" fill="#fbcfe8" stroke="#f472b6" stroke-width="1"/>
      <!-- Bear Pocket on Left Chest -->
      <circle cx="140" cy="205" r="6" fill="#fce7f3"/>
      <circle cx="136" cy="200" r="2" fill="#fbcfe8"/>
      <circle cx="144" cy="200" r="2" fill="#fbcfe8"/>
      <circle cx="140" cy="206" r="1.5" fill="#db2777"/>
      <!-- Cute Round Cream Buttons -->
      <circle cx="150" cy="190" r="3" fill="#fef3c7"/>
      <circle cx="150" cy="206" r="3" fill="#fef3c7"/>
      <circle cx="150" cy="222" r="3" fill="#fef3c7"/>
      <!-- Fluffy Sleeves -->
      <path d="M 128 174 L 112 225 L 122 228 L 134 186 Z" fill="#fbcfe8"/>
      <path d="M 172 174 L 188 225 L 178 228 L 166 186 Z" fill="#fbcfe8"/>
    `,
  }),
  new Item({
    id: 'tops_anime_bunny_hoodie',
    name: 'うさ耳ロングスリーブパーカー',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Oversized Pink Hoodie -->
      <path d="M 128 174 L 172 174 L 168 238 L 132 238 Z" fill="#f9a8d4"/>
      <!-- Kangaroo Pocket -->
      <rect x="140" y="216" width="20" height="14" rx="4" fill="#f472b6"/>
      <!-- Pompom Drawstrings -->
      <circle cx="144" cy="202" r="3.5" fill="#ffffff"/>
      <circle cx="156" cy="202" r="3.5" fill="#ffffff"/>
      <line x1="144" y1="184" x2="144" y2="198" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="156" y1="184" x2="156" y2="198" stroke="#ffffff" stroke-width="1.5"/>
      <!-- Slouchy Long Sleeves -->
      <path d="M 128 174 L 110 230 L 122 232 L 134 186 Z" fill="#f9a8d4"/>
      <path d="M 172 174 L 190 230 L 178 232 L 166 186 Z" fill="#f9a8d4"/>
    `,
  }),
  new Item({
    id: 'tops_anime_angel_blouse',
    name: '天使のレースフリルオフショルブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- White Off-shoulder Lace Blouse -->
      <path d="M 132 182 L 168 182 L 164 225 L 136 225 Z" fill="#ffffff" stroke="#f1f5f9" stroke-width="1"/>
      <path d="M 120 182 Q 150 194 180 182" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Gold Tiny Cross Charm -->
      <path d="M 150 192 L 150 202 M 146 195 L 154 195" stroke="#facc15" stroke-width="1.5"/>
      <!-- Flowing Ruffle Sleeves -->
      <path d="M 122 186 C 114 200 114 220 120 228 L 126 225 C 122 215 124 200 130 190 Z" fill="#ffffff"/>
      <path d="M 178 186 C 186 200 186 220 180 228 L 174 225 C 178 215 176 200 170 190 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'tops_anime_devil_corset',
    name: '小悪魔レースアップパープルビスチェ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Purple Velvet Corset -->
      <path d="M 134 184 L 166 184 L 162 226 L 138 226 Z" fill="#6b21a8"/>
      <!-- Black Lace-up Ribbons -->
      <path d="M 142 190 L 158 198 M 158 190 L 142 198 M 142 200 L 158 208 M 158 200 L 142 208 M 142 210 L 158 218 M 158 210 L 142 218" stroke="#0f172a" stroke-width="1.5"/>
      <!-- Black Frill Border -->
      <path d="M 132 184 Q 150 190 168 184" stroke="#09090b" stroke-width="3" fill="none"/>
      <!-- Tiny Bat Wing accents on sides -->
      <path d="M 134 186 C 124 180 120 190 128 196 Z" fill="#09090b"/>
      <path d="M 166 186 C 176 180 180 190 172 196 Z" fill="#09090b"/>
    `,
  }),
  new Item({
    id: 'tops_anime_sweet_sailor',
    name: 'スイートピンクセーラーブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- White Blouse with Pink Collar -->
      <path d="M 132 174 L 168 174 L 164 226 L 136 226 Z" fill="#ffffff"/>
      <path d="M 126 172 L 140 198 L 160 198 L 174 172 L 166 168 L 150 178 L 134 168 Z" fill="#f472b6"/>
      <!-- Heart Red Bow -->
      <path d="M 150 198 C 142 190 136 198 144 204 L 150 200 L 156 204 C 164 198 158 190 150 198 Z" fill="#e11d48"/>
      <!-- Puff Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_strawberry_camisole',
    name: 'いちごフリルキャミブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Cream Camisole with Strawberry print -->
      <path d="M 134 182 L 166 182 L 164 225 L 136 225 Z" fill="#fef2f2"/>
      <!-- Red Strawberries -->
      <circle cx="142" cy="196" r="3" fill="#ef4444"/>
      <circle cx="158" cy="196" r="3" fill="#ef4444"/>
      <circle cx="150" cy="210" r="3" fill="#ef4444"/>
      <!-- Red Shoulder Ribbon Straps -->
      <line x1="138" y1="172" x2="138" y2="184" stroke="#dc2626" stroke-width="2"/>
      <line x1="162" y1="172" x2="162" y2="184" stroke="#dc2626" stroke-width="2"/>
      <!-- Red Ribbon Bows on straps -->
      <circle cx="138" cy="180" r="2.5" fill="#dc2626"/>
      <circle cx="162" cy="180" r="2.5" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'tops_anime_magical_cape',
    name: '魔法少女のハートショートケープ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Pink Magical Cape -->
      <path d="M 130 174 Q 150 182 170 174 L 186 220 Q 150 230 114 220 Z" fill="#fb7185" stroke="#f43f5e" stroke-width="1"/>
      <!-- Gold Clasp & Red Heart Gem -->
      <circle cx="150" cy="186" r="5" fill="#facc15"/>
      <path d="M 150 184 C 148 182 145 185 150 189 C 155 185 152 182 150 184 Z" fill="#e11d48"/>
      <!-- Gold Hem with Star Charms -->
      <path d="M 116 218 Q 150 228 184 218" stroke="#facc15" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'tops_anime_fairy_corset',
    name: '花の妖精のグリーンスモック',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Pastel Mint Green Smock -->
      <path d="M 132 174 L 168 174 L 164 226 L 136 226 Z" fill="#a7f3d0"/>
      <!-- Floral Petal Collar -->
      <circle cx="140" cy="178" r="4" fill="#fbcfe8"/>
      <circle cx="150" cy="180" r="4" fill="#fbcfe8"/>
      <circle cx="160" cy="178" r="4" fill="#fbcfe8"/>
      <circle cx="150" cy="180" r="1.5" fill="#facc15"/>
      <!-- Puff Sleeves -->
      <circle cx="120" cy="180" r="8" fill="#a7f3d0" stroke="#6ee7b7" stroke-width="1.2"/>
      <circle cx="180" cy="180" r="8" fill="#a7f3d0" stroke="#6ee7b7" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'tops_anime_cat_knit',
    name: 'ねこみみケーブルニットセーター',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Oversized Cream Cable Knit -->
      <path d="M 128 174 L 172 174 L 168 235 L 132 235 Z" fill="#fefce8" stroke="#fef08a" stroke-width="1.2"/>
      <!-- Cute Cat Face Embroidered on chest -->
      <circle cx="146" cy="198" r="1.5" fill="#78350f"/>
      <circle cx="154" cy="198" r="1.5" fill="#78350f"/>
      <polygon points="150,202 148,205 152,205" fill="#f472b6"/>
      <!-- Cable textures -->
      <line x1="138" y1="180" x2="138" y2="232" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="162" y1="180" x2="162" y2="232" stroke="#fef08a" stroke-width="1.5"/>
      <!-- Cozy Long Sleeves -->
      <path d="M 128 174 L 112 228 L 122 230 L 134 186 Z" fill="#fefce8"/>
      <path d="M 172 174 L 188 228 L 178 230 L 166 186 Z" fill="#fefce8"/>
    `,
  }),
  new Item({
    id: 'tops_anime_alice_apron_top',
    name: 'アリスの水色フリルエプロントップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
<!-- Sky Blue Top with White Ruffled Apron -->
      <path d="M 132 174 L 168 174 L 164 226 L 136 226 Z" fill="#38bdf8"/>
      <path d="M 140 178 L 160 178 L 158 226 L 142 226 Z" fill="#ffffff"/>
      <path d="M 136 176 Q 126 195 136 215" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M 164 176 Q 174 195 164 215" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Black Bow Tie -->
      <path d="M 150 180 L 144 192 L 150 188 L 156 192 Z" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_demon_hakama',
    name: '鬼殺隊の漆黒プリーツ袴',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Black Hakama Pants -->
      <path d="M 136 228 L 164 228 L 174 300 L 154 300 L 150 250 L 146 300 L 126 300 Z" fill="#09090b"/>
      <!-- Pleat lines -->
      <line x1="140" y1="235" x2="134" y2="295" stroke="#27272a" stroke-width="1.5"/>
      <line x1="160" y1="235" x2="166" y2="295" stroke="#27272a" stroke-width="1.5"/>
      <!-- White Belt Band -->
      <rect x="136" y="226" width="28" height="4" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_mitsuri_skirt',
    name: '恋柱のプリーツミニスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Black Pleated Mini Skirt -->
      <path d="M 136 228 L 164 228 L 178 268 Q 150 276 122 268 Z" fill="#1e1b4b"/>
      <path d="M 132 232 L 128 266 M 144 232 L 142 270 M 156 232 L 158 270 M 168 232 L 172 266" stroke="#312e81" stroke-width="1.5"/>
      <!-- Gold buckle white belt -->
      <rect x="136" y="226" width="28" height="5" fill="#ffffff"/>
      <rect x="148" y="226" width="4" height="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_bocchi_skirt',
    name: 'ぼっちちゃんのロングプリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Modest Long Pleated Grey School Skirt -->
      <path d="M 134 228 L 166 228 L 182 305 Q 150 315 118 305 Z" fill="#475569"/>
      <path d="M 130 235 L 124 302 M 140 235 L 138 308 M 150 235 L 150 310 M 160 235 L 162 308 M 170 235 L 176 302" stroke="#334155" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_miku_skirt',
    name: '初音ミクのエメラルドプリーツミニ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Black Pleated Mini Skirt with Teal Hem -->
      <path d="M 134 228 L 166 228 L 180 270 Q 150 280 120 270 Z" fill="#0f172a"/>
      <!-- Teal Edge -->
      <path d="M 118 268 Q 150 280 182 268" stroke="#14b8a6" stroke-width="3" fill="none"/>
      <!-- Pink Suspension Belt Detail -->
      <path d="M 136 232 C 142 245 158 245 164 232" stroke="#ec4899" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_eden_skirt',
    name: 'イーデン校の金刺繍プリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<path d="M 134 228 L 166 228 L 182 278 Q 150 288 118 278 Z" fill="#0f172a"/>
      <path d="M 128 232 L 124 274 M 142 232 L 140 280 M 158 232 L 160 280 M 172 232 L 176 274" stroke="#1e293b" stroke-width="1.5"/>
      <path d="M 118 276 Q 150 286 182 276" stroke="#facc15" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_sailor_skirt',
    name: 'セーラーマリンフレアスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<path d="M 134 228 L 166 228 L 184 274 Q 150 286 116 274 Z" fill="#1e3a8a"/>
      <!-- Double White Sailor Stripes -->
      <path d="M 118 268 Q 150 280 182 268" stroke="#ffffff" stroke-width="1.8" fill="none"/>
      <path d="M 117 272 Q 150 284 183 272" stroke="#ffffff" stroke-width="1.8" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_rainbow_tulle',
    name: 'ゆめかわレインボーツールパニエ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Fluffy Rainbow Layers -->
      <path d="M 134 228 L 166 228 L 186 255 Q 150 265 114 255 Z" fill="#fbcfe8"/>
      <path d="M 112 255 Q 150 268 188 255 L 190 270 Q 150 282 110 270 Z" fill="#fef08a"/>
      <path d="M 108 270 Q 150 285 192 270 L 194 282 Q 150 298 106 282 Z" fill="#bae6fd"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_strawberry_frill',
    name: 'いちごフリルティアードスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Pink Tiered Frills with Strawberry Details -->
      <path d="M 134 228 L 166 228 L 180 256 Q 150 265 120 256 Z" fill="#fb7185"/>
      <path d="M 118 256 Q 150 268 182 256 L 186 276 Q 150 288 114 276 Z" fill="#f43f5e"/>
      <!-- White Lace Hem -->
      <path d="M 112 276 Q 150 290 188 276" stroke="#ffffff" stroke-width="3.5" fill="none"/>
      <circle cx="150" cy="242" r="3" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_gothic_lace',
    name: 'ゴシックブラックレーススカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<path d="M 134 228 L 166 228 L 184 278 Q 150 290 116 278 Z" fill="#09090b"/>
      <!-- Purple Bows & Lace -->
      <path d="M 118 274 Q 150 286 182 274" stroke="#7c3aed" stroke-width="2" fill="none"/>
      <circle cx="138" cy="255" r="3" fill="#a855f7"/>
      <circle cx="162" cy="255" r="3" fill="#a855f7"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_denim_suspenders',
    name: 'ハートパッチのサスペンダーデニムショート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Blue Denim Shorts -->
      <path d="M 134 228 L 166 228 L 172 265 L 152 265 L 150 250 L 148 265 L 128 265 Z" fill="#3b82f6"/>
      <!-- Pink Heart Patch on Right Pocket -->
      <path d="M 160 248 C 158 245 155 248 160 253 C 165 248 162 245 160 248 Z" fill="#ec4899"/>
      <!-- Suspenders -->
      <line x1="138" y1="210" x2="138" y2="228" stroke="#ef4444" stroke-width="2.5"/>
      <line x1="162" y1="210" x2="162" y2="228" stroke="#ef4444" stroke-width="2.5"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_pastel_bloomer',
    name: 'ふわふわドロワーズ風かぼちゃパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Fluffy White & Pink Bloomer Pants -->
      <path d="M 134 228 L 166 228 C 180 245 178 268 164 268 C 156 268 152 258 150 250 C 148 258 144 268 136 268 C 122 268 120 245 134 228 Z" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.5"/>
      <!-- Pink Ribbons on leg cuffs -->
      <circle cx="136" cy="266" r="2.5" fill="#f43f5e"/>
      <circle cx="164" cy="266" r="2.5" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_check_school',
    name: '赤タータンチェックプリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<path d="M 134 228 L 166 228 L 180 274 Q 150 286 120 274 Z" fill="#dc2626"/>
      <path d="M 126 230 L 122 272 M 142 230 L 140 278 M 158 230 L 160 278 M 174 230 L 178 272" stroke="#7f1d1d" stroke-width="2"/>
      <path d="M 122 252 Q 150 262 178 252" stroke="#facc15" stroke-width="1" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_witch_frill',
    name: '魔女の星屑フリルバルーンスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Midnight Blue Balloon Skirt with Gold Stars -->
      <path d="M 134 228 L 166 228 C 186 248 184 278 166 278 Q 150 282 134 278 C 116 278 114 248 134 228 Z" fill="#1e1b4b"/>
      <!-- Gold Star details -->
      <polygon points="144,248 145,251 148,251 146,253 147,256 144,254 141,256 142,253 140,251 143,251" fill="#facc15"/>
      <polygon points="160,255 161,257 163,257 161,259 162,261 160,259 158,261 159,259 157,257 159,257" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_anime_fairy_petal',
    name: '花びらカットのパステルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Petal Cut Pastel Skirt -->
      <path d="M 134 228 L 166 228 L 180 260 C 172 275 162 278 150 268 C 138 278 128 275 120 260 Z" fill="#fbcfe8"/>
      <path d="M 128 240 C 138 278 144 282 150 274 C 156 282 162 278 172 240 Z" fill="#a7f3d0" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_demon_zori',
    name: '鬼殺隊の白足袋＆草履',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- White Tabi Socks -->
      <path d="M 134 320 L 146 320 L 148 375 L 132 375 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 154 320 L 166 320 L 168 375 L 152 375 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
      <!-- Straw Zori Soles -->
      <rect x="130" y="372" width="20" height="6" rx="2" fill="#d97706"/>
      <rect x="150" y="372" width="20" height="6" rx="2" fill="#d97706"/>
      <!-- Purple Straps -->
      <path d="M 134 374 L 140 368 L 146 374" stroke="#7e22ce" stroke-width="2.5" fill="none"/>
      <path d="M 154 374 L 160 368 L 166 374" stroke="#7e22ce" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_mitsuri_socks',
    name: '恋柱の緑縞ニーハイ＆ピンク草履',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Light Green Striped Knee-highs -->
      <path d="M 134 265 L 146 265 L 148 372 L 132 372 Z" fill="#86efac"/>
      <path d="M 154 265 L 166 265 L 168 372 L 152 372 Z" fill="#86efac"/>
      <!-- Dark Green Stripes -->
      <line x1="134" y1="285" x2="146" y2="285" stroke="#22c55e" stroke-width="3"/>
      <line x1="154" y1="285" x2="166" y2="285" stroke="#22c55e" stroke-width="3"/>
      <line x1="133" y1="315" x2="147" y2="315" stroke="#22c55e" stroke-width="3"/>
      <line x1="153" y1="315" x2="167" y2="315" stroke="#22c55e" stroke-width="3"/>
      <line x1="132" y1="345" x2="148" y2="345" stroke="#22c55e" stroke-width="3"/>
      <line x1="152" y1="345" x2="168" y2="345" stroke="#22c55e" stroke-width="3"/>
      <!-- Pink Straps Zori -->
      <rect x="130" y="372" width="20" height="6" rx="2" fill="#1e1b4b"/>
      <rect x="150" y="372" width="20" height="6" rx="2" fill="#1e1b4b"/>
      <path d="M 134 374 L 140 368 L 146 374" stroke="#ec4899" stroke-width="2.5" fill="none"/>
      <path d="M 154 374 L 160 368 L 166 374" stroke="#ec4899" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_sailor_heels',
    name: '月の戦士のレッドストラップパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 355 L 148 355 L 152 380 L 130 380 Z" fill="#dc2626"/>
      <path d="M 152 355 L 168 355 L 170 380 L 148 380 Z" fill="#dc2626"/>
      <rect x="132" y="378" width="5" height="6" fill="#991b1b"/>
      <rect x="163" y="378" width="5" height="6" fill="#991b1b"/>
      <!-- Gold Crescent on Ankle -->
      <circle cx="140" cy="358" r="2.5" fill="#facc15"/>
      <circle cx="160" cy="358" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_mercury_boots',
    name: '水星戦士のスカイブルーショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 340 L 148 340 L 150 380 L 130 380 Z" fill="#0284c7"/>
      <path d="M 152 340 L 168 340 L 170 380 L 150 380 Z" fill="#0284c7"/>
      <rect x="132" y="338" width="16" height="4" fill="#ffffff"/>
      <rect x="152" y="338" width="16" height="4" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_cardcaptor_boots',
    name: 'さくらの赤リボンホワイトブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 335 L 148 335 L 150 380 L 130 380 Z" fill="#ffffff" stroke="#f43f5e" stroke-width="1.2"/>
      <path d="M 152 335 L 168 335 L 170 380 L 150 380 Z" fill="#ffffff" stroke="#f43f5e" stroke-width="1.2"/>
      <!-- Red Bows on front -->
      <circle cx="140" cy="348" r="3" fill="#e11d48"/>
      <circle cx="160" cy="348" r="3" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_eden_loafers',
    name: 'イーデン校の茶色コインローファー＆白ソックス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- White Frilly Socks -->
      <rect x="134" y="340" width="14" height="22" fill="#ffffff"/>
      <rect x="152" y="340" width="14" height="22" fill="#ffffff"/>
      <path d="M 134 340 Q 141 336 148 340 M 152 340 Q 159 336 166 340" stroke="#f1f5f9" stroke-width="3"/>
      <!-- Brown Loafers -->
      <path d="M 132 362 L 148 362 L 150 380 L 130 380 Z" fill="#78350f"/>
      <path d="M 152 362 L 168 362 L 170 380 L 150 380 Z" fill="#78350f"/>
      <rect x="136" y="364" width="8" height="2" fill="#facc15"/>
      <rect x="156" y="364" width="8" height="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_miku_boots',
    name: '初音ミクのブラックサイバーロングブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 285 L 148 285 L 150 380 L 130 380 Z" fill="#0f172a"/>
      <path d="M 152 285 L 168 285 L 170 380 L 150 380 Z" fill="#0f172a"/>
      <!-- Teal Top Border & Equalizer lights -->
      <rect x="132" y="285" width="16" height="4" fill="#14b8a6"/>
      <rect x="152" y="285" width="16" height="4" fill="#14b8a6"/>
      <circle cx="140" cy="355" r="2" fill="#ec4899"/>
      <circle cx="160" cy="355" r="2" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_idol_ribbon',
    name: 'アイドルのピンクレースアップブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 315 L 148 315 L 150 380 L 130 380 Z" fill="#f43f5e"/>
      <path d="M 152 315 L 168 315 L 170 380 L 150 380 Z" fill="#f43f5e"/>
      <!-- White Fur Trim -->
      <rect x="130" y="312" width="20" height="6" rx="3" fill="#ffffff"/>
      <rect x="150" y="312" width="20" height="6" rx="3" fill="#ffffff"/>
      <!-- White Criss-cross Laces -->
      <path d="M 136 325 L 144 335 M 144 325 L 136 335 M 136 345 L 144 355 M 144 345 L 136 355" stroke="#ffffff" stroke-width="1.5"/>
      <path d="M 156 325 L 164 335 M 164 325 L 156 335 M 156 345 L 164 355 M 164 345 L 156 355" stroke="#ffffff" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_rem_pumps',
    name: 'メイドの黒ストラップおでこ靴',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- White Ankle Socks -->
      <rect x="134" y="345" width="14" height="20" fill="#ffffff"/>
      <rect x="152" y="345" width="14" height="20" fill="#ffffff"/>
      <!-- Black Rounded Mary Jane Shoes -->
      <path d="M 132 365 C 132 360 148 360 148 365 L 150 380 L 130 380 Z" fill="#09090b"/>
      <path d="M 152 365 C 152 360 168 360 168 365 L 170 380 L 150 380 Z" fill="#09090b"/>
      <line x1="134" y1="368" x2="146" y2="368" stroke="#facc15" stroke-width="1.5"/>
      <line x1="154" y1="368" x2="166" y2="368" stroke="#facc15" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_bunny_slippers',
    name: 'もこもこうさぎルームシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Fluffy White Bunny Slippers -->
      <ellipse cx="138" cy="372" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <ellipse cx="162" cy="372" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.2"/>
      <!-- Pink Bunny Ears on toes -->
      <ellipse cx="132" cy="364" rx="2.5" ry="5" fill="#f472b6"/>
      <ellipse cx="138" cy="364" rx="2.5" ry="5" fill="#f472b6"/>
      <ellipse cx="158" cy="364" rx="2.5" ry="5" fill="#f472b6"/>
      <ellipse cx="164" cy="364" rx="2.5" ry="5" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_glass_heels',
    name: 'ガラスの靴風クリスタルパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<defs>
        <linearGradient id="glassShoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <path d="M 132 360 L 148 360 L 150 380 L 130 380 Z" fill="url(#glassShoeGrad)" opacity="0.9"/>
      <path d="M 152 360 L 168 360 L 170 380 L 150 380 Z" fill="url(#glassShoeGrad)" opacity="0.9"/>
      <circle cx="140" cy="366" r="2.5" fill="#ffffff"/>
      <circle cx="160" cy="366" r="2.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_anime_cat_boots',
    name: '黒猫の肉球ショートブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<path d="M 132 350 L 148 350 L 150 380 L 130 380 Z" fill="#0f172a"/>
      <path d="M 152 350 L 168 350 L 170 380 L 150 380 Z" fill="#0f172a"/>
      <!-- Pink Cat Paw Print on side -->
      <circle cx="140" cy="364" r="3" fill="#f472b6"/>
      <circle cx="137" cy="358" r="1.2" fill="#f472b6"/>
      <circle cx="140" cy="357" r="1.2" fill="#f472b6"/>
      <circle cx="143" cy="358" r="1.2" fill="#f472b6"/>
      <circle cx="160" cy="364" r="3" fill="#f472b6"/>
      <circle cx="157" cy="358" r="1.2" fill="#f472b6"/>
      <circle cx="160" cy="357" r="1.2" fill="#f472b6"/>
      <circle cx="163" cy="358" r="1.2" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'acc_anime_tanjiro_earrings',
    name: '炭治郎の日輪花札耳飾り',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Left Earring -->
      <rect x="110" y="98" width="7" height="15" rx="1" fill="#ffffff" stroke="#09090b" stroke-width="0.8"/>
      <circle cx="113.5" cy="103" r="2.2" fill="#dc2626"/>
      <line x1="113.5" y1="105" x2="113.5" y2="112" stroke="#09090b" stroke-width="0.8"/>
      <line x1="113.5" y1="96" x2="113.5" y2="98" stroke="#71717a" stroke-width="1"/>
      <!-- Right Earring -->
      <rect x="183" y="98" width="7" height="15" rx="1" fill="#ffffff" stroke="#09090b" stroke-width="0.8"/>
      <circle cx="186.5" cy="103" r="2.2" fill="#dc2626"/>
      <line x1="186.5" y1="105" x2="186.5" y2="112" stroke="#09090b" stroke-width="0.8"/>
      <line x1="186.5" y1="96" x2="186.5" y2="98" stroke="#71717a" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'acc_anime_nezuko_bamboo',
    name: '禰豆子の竹筒＆ピンクリボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Green Bamboo Muzzle -->
      <rect x="138" y="112" width="24" height="9" rx="4.5" fill="#22c55e" stroke="#15803d" stroke-width="1.2"/>
      <line x1="145" y1="112" x2="145" y2="121" stroke="#16a34a" stroke-width="1"/>
      <line x1="155" y1="112" x2="155" y2="121" stroke="#16a34a" stroke-width="1"/>
      <!-- Red Cord tying behind head -->
      <path d="M 124 116 Q 138 116 138 116" stroke="#dc2626" stroke-width="1.8" fill="none"/>
      <path d="M 162 116 Q 176 116 176 116" stroke="#dc2626" stroke-width="1.8" fill="none"/>
      <!-- Cute Pink Head Ribbon on side -->
      <path d="M 128 62 C 122 55 116 64 124 68 Z" fill="#ec4899"/>
      <path d="M 128 62 C 134 55 140 64 132 68 Z" fill="#ec4899"/>
      <circle cx="128" cy="63" r="2.5" fill="#fb7185"/>
    `,
  }),
  new Item({
    id: 'acc_anime_shinobu_butterfly',
    name: 'しのぶの蝶の髪飾り',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Butterfly Hair Ornament at back of head -->
      <g transform="translate(150, 48)">
        <path d="M 0 0 C -15 -18 -30 -10 -22 6 C -18 12 -5 6 0 0 Z" fill="#c084fc" stroke="#581c87" stroke-width="1"/>
        <path d="M 0 0 C 15 -18 30 -10 22 6 C 18 12 5 6 0 0 Z" fill="#c084fc" stroke="#581c87" stroke-width="1"/>
        <!-- Turquoise Accents -->
        <circle cx="-14" cy="-4" r="3.5" fill="#2dd4bf"/>
        <circle cx="14" cy="-4" r="3.5" fill="#2dd4bf"/>
        <circle cx="0" cy="0" r="3" fill="#581c87"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_zenitsu_chuntaro',
    name: '善逸のすずめ（チュン太郎）頭乗り',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Cute Round Little Sparrow Sitting on top of head -->
      <g transform="translate(150, 36)">
        <!-- Body -->
        <ellipse cx="0" cy="0" rx="10" ry="8" fill="#92400e"/>
        <!-- White Belly -->
        <ellipse cx="0" cy="3" rx="7" ry="5" fill="#ffffff"/>
        <!-- Black Cheeks -->
        <circle cx="-5" cy="1" r="1.5" fill="#09090b"/>
        <circle cx="5" cy="1" r="1.5" fill="#09090b"/>
        <!-- Cute Eyes -->
        <circle cx="-3" cy="-1" r="1.2" fill="#09090b"/>
        <circle cx="3" cy="-1" r="1.2" fill="#09090b"/>
        <!-- Tiny Orange Beak -->
        <polygon points="0,0 -2,-2 2,-2" fill="#f97316"/>
        <!-- Tiny Feet -->
        <line x1="-3" y1="8" x2="-3" y2="11" stroke="#ea580c" stroke-width="1.2"/>
        <line x1="3" y1="8" x2="3" y2="11" stroke="#ea580c" stroke-width="1.2"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_mitsuri_ribbon',
    name: '恋柱のハート桜リボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Pink & Green Cherry Blossom Heart Ribbon -->
      <g transform="translate(150, 48)">
        <path d="M 0 0 C -12 -12 -24 -2 -14 8 Z" fill="#f472b6"/>
        <path d="M 0 0 C 12 -12 24 -2 14 8 Z" fill="#f472b6"/>
        <circle cx="0" cy="0" r="4" fill="#86efac"/>
        <path d="M 0 3 L -6 18 M 0 3 L 6 18" stroke="#86efac" stroke-width="2"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_moon_tiara',
    name: '月の美少女戦士ゴールドティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Golden Crescent Tiara on Forehead -->
      <path d="M 128 72 Q 150 78 172 72 Q 150 82 128 72 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
      <circle cx="150" cy="76" r="3.5" fill="#dc2626" stroke="#ca8a04" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_anime_luna_cat',
    name: '黒猫ルナの肩乗りマスコット',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Luna Black Cat sitting on left shoulder -->
      <g transform="translate(108, 160)">
        <ellipse cx="0" cy="0" rx="9" ry="8" fill="#1e1b4b"/>
        <!-- Cat Ears -->
        <polygon points="-7,-6 -5,-14 -1,-6" fill="#1e1b4b"/>
        <polygon points="1,-6 5,-14 7,-6" fill="#1e1b4b"/>
        <polygon points="-5,-6 -4,-11 -2,-6" fill="#f472b6"/>
        <polygon points="2,-6 4,-11 5,-6" fill="#f472b6"/>
        <!-- Crescent Moon on Forehead -->
        <path d="M -2 -2 C 0 -4 0 -4 2 -2 C 1 -1 1 -1 -2 -2 Z" fill="#facc15"/>
        <!-- Red/Yellow Eyes -->
        <ellipse cx="-3" cy="1" rx="1.5" ry="2" fill="#dc2626"/>
        <ellipse cx="3" cy="1" rx="1.5" ry="2" fill="#dc2626"/>
        <circle cx="-3" cy="1" r="0.6" fill="#ffffff"/>
        <circle cx="3" cy="1" r="0.6" fill="#ffffff"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_cardcaptor_wand',
    name: '封印解除の星のステッキ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Star Wand held in hand -->
      <g transform="translate(196, 175) rotate(-15)">
        <line x1="0" y1="10" x2="0" y2="70" stroke="#fb7185" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Golden Star Head -->
        <polygon points="0,-4 3,4 12,4 5,9 7,17 0,12 -7,17 -5,9 -12,4 -3,4" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
        <!-- White Angel Wings on Wand -->
        <path d="M -4 5 C -14 0 -18 10 -6 14 Z" fill="#ffffff"/>
        <path d="M 4 5 C 14 0 18 10 6 14 Z" fill="#ffffff"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_kero_chan',
    name: 'ケロちゃん肩乗りマスコット',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Cute Yellow Flying Kero-chan sitting on right shoulder -->
      <g transform="translate(192, 160)">
        <!-- Round Yellow Body -->
        <circle cx="0" cy="0" r="9" fill="#facc15"/>
        <!-- Round Ears -->
        <circle cx="-7" cy="-7" r="4" fill="#facc15"/>
        <circle cx="7" cy="-7" r="4" fill="#facc15"/>
        <circle cx="-7" cy="-7" r="2" fill="#fef08a"/>
        <circle cx="7" cy="-7" r="2" fill="#fef08a"/>
        <!-- Cute Closed Happy Eyes -->
        <path d="M -5 0 Q -3 -2 -1 0" stroke="#78350f" stroke-width="1.2" fill="none"/>
        <path d="M 1 0 Q 3 -2 5 0" stroke="#78350f" stroke-width="1.2" fill="none"/>
        <polygon points="0,2 -1,3 1,3" fill="#ea580c"/>
        <!-- White Angel Wings -->
        <ellipse cx="-9" cy="4" rx="4" ry="2" fill="#ffffff" transform="rotate(-20 -9 4)"/>
        <ellipse cx="9" cy="4" rx="4" ry="2" fill="#ffffff" transform="rotate(20 9 4)"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_madoka_bow',
    name: 'まどかの大きなピンクリボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Twin Pink Satin Bows -->
      <g transform="translate(118, 65)">
        <path d="M 0 0 C -12 -12 -22 -2 -12 8 Z" fill="#f43f5e"/>
        <path d="M 0 0 C -2 -12 8 -12 0 0 Z" fill="#f43f5e"/>
        <circle cx="0" cy="0" r="3" fill="#fda4af"/>
      </g>
      <g transform="translate(182, 65)">
        <path d="M 0 0 C 12 -12 22 -2 12 8 Z" fill="#f43f5e"/>
        <path d="M 0 0 C 2 -12 -8 -12 0 0 Z" fill="#f43f5e"/>
        <circle cx="0" cy="0" r="3" fill="#fda4af"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_kyubey_plush',
    name: 'キュゥべえ抱っこマスコット',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<g transform="translate(112, 195)">
        <ellipse cx="0" cy="0" rx="10" ry="9" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
        <polygon points="-8,-6 -6,-15 -2,-6" fill="#ffffff"/>
        <polygon points="2,-6 6,-15 8,-6" fill="#ffffff"/>
        <!-- Ring ears -->
        <circle cx="-10" cy="-2" r="3" fill="none" stroke="#facc15" stroke-width="1.5"/>
        <circle cx="10" cy="-2" r="3" fill="none" stroke="#facc15" stroke-width="1.5"/>
        <!-- Pink Ruby Eyes -->
        <circle cx="-4" cy="0" r="2" fill="#e11d48"/>
        <circle cx="4" cy="0" r="2" fill="#e11d48"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_kiki_bow',
    name: '魔女の宅急便のビッグ赤リボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Giant Iconic Red Head Bow -->
      <g transform="translate(150, 44)">
        <path d="M 0 0 C -20 -20 -38 -6 -20 12 Z" fill="#dc2626"/>
        <path d="M 0 0 C 20 -20 38 -6 20 12 Z" fill="#dc2626"/>
        <ellipse cx="0" cy="2" rx="5" ry="4" fill="#b91c1c"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_anya_horns',
    name: 'アーニャの三角ゴールドヘアコーン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Left Cone -->
      <polygon points="122,60 114,46 128,52" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
      <line x1="117" y1="52" x2="124" y2="55" stroke="#facc15" stroke-width="1.2"/>
      <!-- Right Cone -->
      <polygon points="178,60 186,46 172,52" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
      <line x1="183" y1="52" x2="176" y2="55" stroke="#facc15" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'acc_anime_chimera_plush',
    name: 'きめらちょうかんのぬいぐるみ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Anya's Chimera Plush held in left arm -->
      <g transform="translate(110, 205)">
        <circle cx="0" cy="0" r="9" fill="#ec4899"/>
        <!-- Yellow Horns -->
        <polygon points="-5,-8 -3,-14 -1,-8" fill="#facc15"/>
        <polygon points="1,-8 3,-14 5,-8" fill="#facc15"/>
        <!-- Green Wing -->
        <ellipse cx="-8" cy="2" rx="5" ry="3" fill="#22c55e"/>
        <!-- Cute Button Eyes -->
        <circle cx="-3" cy="-1" r="1.5" fill="#09090b"/>
        <circle cx="3" cy="-1" r="1.5" fill="#09090b"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_frieren_earrings',
    name: 'フリーレンの赤宝石ドロップピアス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Left Earring -->
      <g transform="translate(112, 102)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#facc15" stroke-width="1"/>
        <polygon points="0,8 3,18 0,22 -3,18" fill="#dc2626"/>
      </g>
      <!-- Right Earring -->
      <g transform="translate(188, 102)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#facc15" stroke-width="1"/>
        <polygon points="0,8 3,18 0,22 -3,18" fill="#dc2626"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_ai_rabbit_clip',
    name: '星野アイのうさぎヘアクリップ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Bunny Face Clip on Right side of hair -->
      <g transform="translate(174, 62)">
        <ellipse cx="0" cy="0" rx="7" ry="6" fill="#ffffff" stroke="#f43f5e" stroke-width="1"/>
        <ellipse cx="-4" cy="-7" rx="2" ry="5" fill="#ffffff" stroke="#f43f5e" stroke-width="1"/>
        <ellipse cx="4" cy="-7" rx="2" ry="5" fill="#ffffff" stroke="#f43f5e" stroke-width="1"/>
        <circle cx="-4" cy="-7" r="1" fill="#ec4899"/>
        <circle cx="4" cy="-7" r="1" fill="#ec4899"/>
        <!-- Eyes & Nose -->
        <circle cx="-2.5" cy="0" r="1" fill="#dc2626"/>
        <circle cx="2.5" cy="0" r="1" fill="#dc2626"/>
        <polygon points="0,2 -1,3 1,3" fill="#ec4899"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_miku_headset',
    name: '初音ミクのサイバーヘッドセットマイク',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<path d="M 112 85 Q 150 48 188 85" stroke="#0f172a" stroke-width="3" fill="none"/>
      <!-- Left/Right Ear Cups with Cyan glow -->
      <rect x="108" y="80" width="7" height="15" rx="3" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
      <rect x="185" y="80" width="7" height="15" rx="3" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
      <!-- Microphone arm extending to mouth -->
      <path d="M 112 92 L 132 110" stroke="#0f172a" stroke-width="1.8" fill="none"/>
      <circle cx="132" cy="110" r="2.5" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'acc_anime_bocchi_guitar_bag',
    name: 'ぼっちちゃんのギグバッグリュック',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Guitar gig bag poking out behind shoulder -->
      <g transform="translate(182, 120) rotate(15)">
        <rect x="0" y="-30" width="14" height="60" rx="5" fill="#1e1b4b" stroke="#312e81" stroke-width="1.5"/>
        <polygon points="0,30 14,30 20,70 -6,70" fill="#1e1b4b" stroke="#312e81" stroke-width="1.5"/>
        <!-- Cute Sticker on bag -->
        <circle cx="7" cy="50" r="4" fill="#f43f5e"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_reimu_big_bow',
    name: '霊夢の特大レッドリボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Giant Shrine Maiden Bow behind head -->
      <g transform="translate(150, 48)">
        <path d="M 0 0 C -26 -22 -48 -8 -26 14 Z" fill="#dc2626"/>
        <path d="M 0 0 C 26 -22 48 -8 26 14 Z" fill="#dc2626"/>
        <circle cx="0" cy="2" rx="6" ry="5" fill="#b91c1c"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_anime_angel_wings',
    name: 'ふわふわ純白の天使の翼',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
<!-- Big White Feathered Angel Wings on Back -->
      <g transform="translate(150, 200)">
        <path d="M -15 0 C -50 -40 -90 -20 -70 20 C -55 35 -30 25 -15 5 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1.5"/>
        <path d="M 15 0 C 50 -40 90 -20 70 20 C 55 35 30 25 15 5 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1.5"/>
        <!-- Feather layers -->
        <path d="M -45 5 C -60 15 -55 25 -35 15" stroke="#bae6fd" stroke-width="1.5" fill="none"/>
        <path d="M 45 5 C 60 15 55 25 35 15" stroke="#bae6fd" stroke-width="1.5" fill="none"/>
      </g>
    `,
  }),
];
