import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { InMemoryItemRepository } from '../repositories/InMemoryItemRepository';

export const ALL_ITEMS: readonly Item[] = [
  // ==========================================
  // BACKGROUNDS (z-index: 10)
  // ==========================================
  new Item({
    id: 'bg_pastel_dots',
    name: 'ピンクドット',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
      <defs>
        <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill="#fbcfe8" opacity="0.6"/>
        </pattern>
      </defs>
      <rect width="300" height="400" fill="#fff1f2" rx="16"/>
      <rect width="300" height="400" fill="url(#dotPattern)" rx="16"/>
    `,
  }),
  new Item({
    id: 'bg_starry_sky',
    name: 'ほしのよる',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="60%" stop-color="#312e81"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#nightSky)" rx="16"/>
      <!-- Moon -->
      <circle cx="60" cy="70" r="28" fill="#fef08a" opacity="0.9"/>
      <circle cx="70" cy="65" r="24" fill="#1e1b4b"/>
      <!-- Stars -->
      <circle cx="230" cy="50" r="2.5" fill="#ffffff" opacity="0.9"/>
      <circle cx="260" cy="100" r="2" fill="#ffffff" opacity="0.8"/>
      <circle cx="190" cy="110" r="1.5" fill="#fef08a" opacity="0.8"/>
      <circle cx="40" cy="160" r="2" fill="#ffffff" opacity="0.7"/>
      <circle cx="250" cy="220" r="2.5" fill="#ffffff" opacity="0.8"/>
      <circle cx="70" cy="270" r="1.5" fill="#fef08a" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'bg_sunny_park',
    name: 'あおぞらとのはら',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bae6fd"/>
          <stop offset="70%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#skyGrad)" rx="16"/>
      <!-- Clouds -->
      <ellipse cx="60" cy="60" rx="35" ry="18" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="80" cy="55" rx="25" ry="15" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="230" cy="80" rx="40" ry="20" fill="#ffffff" opacity="0.75"/>
      <!-- Hills -->
      <ellipse cx="80" cy="430" rx="200" ry="90" fill="#bbf7d0"/>
      <ellipse cx="240" cy="430" rx="180" ry="80" fill="#86efac"/>
    `,
  }),
  new Item({
    id: 'bg_room_cozy',
    name: 'マイルーム',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
      <rect width="300" height="400" fill="#fef3c7" rx="16"/>
      <rect y="280" width="300" height="120" fill="#fed7aa" rx="0"/>
      <line x1="0" y1="280" x2="300" y2="280" stroke="#f97316" stroke-width="2" opacity="0.3"/>
      <!-- Window -->
      <rect x="180" y="40" width="90" height="110" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="4"/>
      <line x1="225" y1="40" x2="225" y2="150" stroke="#93c5fd" stroke-width="3"/>
      <line x1="180" y1="95" x2="270" y2="95" stroke="#93c5fd" stroke-width="3"/>
      <!-- Garland banner -->
      <path d="M 10 30 Q 80 60 150 30 Q 220 60 290 30" fill="none" stroke="#f472b6" stroke-width="2"/>
      <polygon points="40,43 55,48 48,63" fill="#f43f5e"/>
      <polygon points="90,47 105,44 98,62" fill="#38bdf8"/>
      <polygon points="170,44 185,48 178,63" fill="#facc15"/>
      <polygon points="230,48 245,43 238,62" fill="#a855f7"/>
    `,
  }),
  new Item({
    id: 'bg_magic_circle',
    name: '星屑の魔法陣',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
      <defs>
        <linearGradient id="magicGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3b0764"/>
          <stop offset="50%" stop-color="#581c87"/>
          <stop offset="100%" stop-color="#831843"/>
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#magicGrad)" rx="16"/>
      <!-- Magical Summoning Circle -->
      <circle cx="150" cy="200" r="110" stroke="#f472b6" stroke-width="2" fill="none" opacity="0.6"/>
      <circle cx="150" cy="200" r="95" stroke="#fbcfe8" stroke-width="1.5" stroke-dasharray="6,4" fill="none" opacity="0.7"/>
      <circle cx="150" cy="200" r="75" stroke="#c084fc" stroke-width="1.5" fill="none" opacity="0.5"/>
      <polygon points="150,90 195,175 105,175" stroke="#fef08a" stroke-width="1.5" fill="none" opacity="0.6"/>
      <polygon points="150,230 195,145 105,145" stroke="#fef08a" stroke-width="1.5" fill="none" opacity="0.6"/>
      <circle cx="80" cy="70" r="2" fill="#fef08a" opacity="0.9"/>
      <circle cx="220" cy="80" r="2.5" fill="#f472b6" opacity="0.8"/>
      <circle cx="60" cy="310" r="2" fill="#c084fc" opacity="0.8"/>
      <circle cx="240" cy="320" r="2.5" fill="#fef08a" opacity="0.9"/>
    `,
  }),

  // ==========================================
  // HAIR BACK (z-index: 20)
  // ==========================================
  new Item({
    id: 'hair_back_twintail_pink',
    name: 'ピンクツインテール（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <!-- Left Twintail -->
      <path d="M 100 120 C 70 140 50 190 60 270 C 68 250 85 220 95 180 Z" fill="#f472b6"/>
      <path d="M 60 270 C 65 290 75 310 85 320 C 80 290 85 250 95 180 Z" fill="#f472b6"/>
      <!-- Right Twintail -->
      <path d="M 200 120 C 230 140 250 190 240 270 C 232 250 215 220 205 180 Z" fill="#f472b6"/>
      <path d="M 240 270 C 235 290 225 310 215 320 C 220 290 215 250 205 180 Z" fill="#f472b6"/>
      <!-- Back hair base -->
      <ellipse cx="150" cy="115" rx="55" ry="50" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'hair_back_twintail_brown',
    name: 'ブラウントラッドツイン（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <path d="M 100 120 C 70 140 50 190 60 270 C 68 250 85 220 95 180 Z" fill="#78350f"/>
      <path d="M 60 270 C 65 290 75 310 85 320 C 80 290 85 250 95 180 Z" fill="#78350f"/>
      <path d="M 200 120 C 230 140 250 190 240 270 C 232 250 215 220 205 180 Z" fill="#78350f"/>
      <path d="M 240 270 C 235 290 225 310 215 320 C 220 290 215 250 205 180 Z" fill="#78350f"/>
      <ellipse cx="150" cy="115" rx="55" ry="50" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'hair_back_long_black',
    name: '黒髪ストレートロング（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <ellipse cx="150" cy="120" rx="56" ry="52" fill="#1e293b"/>
      <path d="M 95 125 C 90 200 85 270 90 330 C 105 340 135 340 150 335 C 165 340 195 340 210 330 C 215 270 210 200 205 125 Z" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'hair_back_long_blonde',
    name: 'ブロンドウェーブロング（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <ellipse cx="150" cy="120" rx="56" ry="52" fill="#fde047"/>
      <path d="M 95 125 C 80 180 75 240 85 320 C 100 335 120 330 150 325 C 180 330 200 335 215 320 C 225 240 220 180 205 125 Z" fill="#fde047"/>
      <!-- Curls / Waves -->
      <path d="M 85 320 C 80 340 95 355 105 345" stroke="#eab308" stroke-width="4" fill="none"/>
      <path d="M 215 320 C 220 340 205 355 195 345" stroke="#eab308" stroke-width="4" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_bob_short',
    name: 'ショートボブ（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <ellipse cx="150" cy="120" rx="58" ry="55" fill="#a855f7"/>
      <path d="M 95 130 C 95 175 105 195 120 205 C 150 210 150 210 180 205 C 195 195 205 175 205 130 Z" fill="#a855f7"/>
    `,
  }),
  new Item({
    id: 'hair_back_nezuko',
    name: '黒髪オレンジウェーブ（後）',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
      <ellipse cx="150" cy="120" rx="56" ry="52" fill="#18181b"/>
      <path d="M 95 125 C 80 180 70 260 78 335 C 90 345 120 340 150 335 C 180 340 210 345 222 335 C 230 260 220 180 205 125 Z" fill="#18181b"/>
      <path d="M 78 300 C 76 325 80 345 88 350 C 105 345 130 340 150 338 C 170 340 195 345 212 350 C 220 345 224 325 222 300 Z" fill="#ea580c"/>
      <path d="M 85 320 Q 95 345 105 330 M 195 330 Q 205 345 215 320" stroke="#f97316" stroke-width="2" fill="none"/>
    `,
  }),

  // ==========================================
  // BASE BODY (z-index: 30)
  // ==========================================
  new Item({
    id: 'body_default',
    name: '基本素体',
    slotCategory: SlotCategory.BASE_BODY,
    isRemovable: false,
    svgContent: `
      <!-- Neck & Chest Base -->
      <path d="M 143 145 L 143 168 L 132 175 C 122 180 120 195 120 210 L 120 240 L 180 240 L 180 210 C 180 195 178 180 168 175 L 157 168 L 157 145 Z" fill="#ffedd5"/>
      <!-- Arms -->
      <path d="M 124 180 C 112 205 108 235 106 270 C 108 275 116 276 118 270 C 122 245 126 215 133 190 Z" fill="#ffedd5"/>
      <path d="M 176 180 C 188 205 192 235 194 270 C 192 275 184 276 182 270 C 178 245 174 215 167 190 Z" fill="#ffedd5"/>
      <!-- Legs -->
      <path d="M 132 235 L 130 350 C 130 358 143 358 143 350 L 147 235 Z" fill="#ffedd5"/>
      <path d="M 153 235 L 157 350 C 157 358 170 358 170 350 L 168 235 Z" fill="#ffedd5"/>
      <!-- Head Contour -->
      <ellipse cx="150" cy="115" rx="46" ry="43" fill="#ffedd5"/>
      <!-- Chin / Jawline tapering -->
      <path d="M 108 120 Q 150 165 192 120 Z" fill="#ffedd5"/>
      <!-- Ears -->
      <ellipse cx="103" cy="118" rx="6" ry="9" fill="#ffedd5"/>
      <ellipse cx="197" cy="118" rx="6" ry="9" fill="#ffedd5"/>
      <!-- Nose subtle dot -->
      <circle cx="150" cy="122" r="1.5" fill="#fbcfe8"/>
      <!-- Subtle underwear -->
      <rect x="130" y="235" width="40" height="25" rx="5" fill="#ffffff" opacity="0.6"/>
      <rect x="132" y="195" width="36" height="15" rx="4" fill="#ffffff" opacity="0.6"/>
    `,
  }),

  // ==========================================
  // EYES (z-index: 40)
  // ==========================================
  new Item({
    id: 'eyes_sparkle_blue',
    name: 'キラキラブルーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
      <!-- Left Eye -->
      <g>
        <path d="M 125 106 Q 136 102 144 108" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="135" cy="114" rx="7" ry="9" fill="#0284c7"/>
        <ellipse cx="135" cy="116" rx="5" ry="6" fill="#0369a1"/>
        <!-- Highlights -->
        <circle cx="133" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <!-- Eyebrow -->
        <path d="M 127 99 Q 136 96 143 100" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 156 108 Q 164 102 175 106" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="165" cy="114" rx="7" ry="9" fill="#0284c7"/>
        <ellipse cx="165" cy="116" rx="5" ry="6" fill="#0369a1"/>
        <!-- Highlights -->
        <circle cx="163" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <!-- Eyebrow -->
        <path d="M 157 100 Q 164 96 173 99" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_sparkle_brown',
    name: 'やさしいブラウンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
      <!-- Left Eye -->
      <g>
        <path d="M 125 106 Q 136 102 144 108" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="135" cy="114" rx="7" ry="9" fill="#b45309"/>
        <ellipse cx="135" cy="116" rx="5" ry="6" fill="#78350f"/>
        <circle cx="133" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <path d="M 127 99 Q 136 96 143 100" stroke="#a8a29e" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 156 108 Q 164 102 175 106" stroke="#451a03" stroke-width="2.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="165" cy="114" rx="7" ry="9" fill="#b45309"/>
        <ellipse cx="165" cy="116" rx="5" ry="6" fill="#78350f"/>
        <circle cx="163" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <path d="M 157 100 Q 164 96 173 99" stroke="#a8a29e" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_wink',
    name: 'ウインク＆スター',
    slotCategory: SlotCategory.EYES,
    svgContent: `
      <!-- Left Eye: Wink -->
      <g>
        <path d="M 126 114 Q 135 120 144 113" stroke="#1e293b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M 127 99 Q 136 96 143 100" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
      <!-- Right Eye: Wide sparkle with star -->
      <g>
        <path d="M 156 108 Q 164 102 175 106" stroke="#1e293b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
        <ellipse cx="165" cy="114" rx="7" ry="9" fill="#ec4899"/>
        <ellipse cx="165" cy="116" rx="5" ry="6" fill="#be185d"/>
        <!-- Star highlight -->
        <polygon points="164,109 166,113 170,114 166,115 164,119 162,115 158,114 162,113" fill="#ffffff"/>
        <circle cx="168" cy="118" r="1.5" fill="#ffffff"/>
        <path d="M 157 100 Q 164 96 173 99" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
    `,
  }),
  new Item({
    id: 'eyes_emerald',
    name: 'エメラルドキャットアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
      <!-- Left Eye -->
      <g>
        <path d="M 124 107 Q 135 101 145 107" stroke="#064e3b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <ellipse cx="135" cy="114" rx="7.5" ry="9" fill="#10b981"/>
        <ellipse cx="135" cy="114" rx="4" ry="7" fill="#047857"/>
        <circle cx="133" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
        <path d="M 127 98 Q 136 95 143 99" stroke="#6ee7b7" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
      <!-- Right Eye -->
      <g>
        <path d="M 155 107 Q 165 101 176 107" stroke="#064e3b" stroke-width="3" stroke-linecap="round" fill="none"/>
        <ellipse cx="165" cy="114" rx="7.5" ry="9" fill="#10b981"/>
        <ellipse cx="165" cy="114" rx="4" ry="7" fill="#047857"/>
        <circle cx="163" cy="111" r="2.8" fill="#ffffff"/>
        <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
        <path d="M 157 99 Q 164 95 173 98" stroke="#6ee7b7" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      </g>
    `,
  }),

  // ==========================================
  // MOUTH & BLUSH (z-index: 50)
  // ==========================================
  new Item({
    id: 'mouth_smile_blush',
    name: 'ほほえみ＆ピンクチーク',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
      <!-- Cheeks -->
      <ellipse cx="123" cy="123" rx="7" ry="4.5" fill="#f472b6" opacity="0.65"/>
      <ellipse cx="177" cy="123" rx="7" ry="4.5" fill="#f472b6" opacity="0.65"/>
      <!-- Mouth -->
      <path d="M 145 130 Q 150 134 155 130" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'mouth_open',
    name: 'にっこりオープンマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
      <!-- Cheeks -->
      <ellipse cx="122" cy="122" rx="8" ry="5" fill="#fb7185" opacity="0.7"/>
      <ellipse cx="178" cy="122" rx="8" ry="5" fill="#fb7185" opacity="0.7"/>
      <!-- Open Mouth -->
      <path d="M 144 128 Q 150 138 156 128 Z" fill="#e11d48"/>
      <path d="M 146 132 Q 150 136 154 132 Z" fill="#fda4af"/>
    `,
  }),
  new Item({
    id: 'mouth_cat',
    name: 'ねこくち :3',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
      <ellipse cx="123" cy="123" rx="7" ry="4" fill="#f472b6" opacity="0.6"/>
      <ellipse cx="177" cy="123" rx="7" ry="4" fill="#f472b6" opacity="0.6"/>
      <path d="M 144 130 Q 147 133 150 130 Q 153 133 156 130" stroke="#be123c" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    `,
  }),

  // ==========================================
  // BOTTOMS (z-index: 60)
  // ==========================================
  new Item({
    id: 'bottoms_skirt_navy',
    name: 'ネイビープリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <path d="M 130 225 L 170 225 L 180 270 L 120 270 Z" fill="#1e3a8a"/>
      <!-- Pleats lines -->
      <line x1="138" y1="225" x2="132" y2="270" stroke="#172554" stroke-width="1.5"/>
      <line x1="146" y1="225" x2="144" y2="270" stroke="#172554" stroke-width="1.5"/>
      <line x1="154" y1="225" x2="156" y2="270" stroke="#172554" stroke-width="1.5"/>
      <line x1="162" y1="225" x2="168" y2="270" stroke="#172554" stroke-width="1.5"/>
      <!-- White hem stripe -->
      <path d="M 121 266 L 179 266" stroke="#ffffff" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'bottoms_skirt_pink',
    name: 'ピンクリボンスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <path d="M 130 225 L 170 225 L 182 272 L 118 272 Z" fill="#f472b6"/>
      <!-- Hem lace -->
      <path d="M 118 272 Q 125 277 132 272 Q 139 277 146 272 Q 153 277 160 272 Q 167 277 174 272 Q 181 277 182 272" fill="#ffffff"/>
      <!-- Bow at waist -->
      <polygon points="146,227 154,227 150,232" fill="#db2777"/>
    `,
  }),
  new Item({
    id: 'bottoms_shorts_denim',
    name: 'デニムショートパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <path d="M 130 225 L 170 225 L 173 258 L 153 258 L 150 250 L 147 258 L 127 258 Z" fill="#38bdf8"/>
      <!-- Pockets and stitching -->
      <line x1="130" y1="230" x2="170" y2="230" stroke="#fbbf24" stroke-width="1.5"/>
      <path d="M 134 235 Q 138 245 144 242" stroke="#fbbf24" stroke-width="1.2" fill="none"/>
      <path d="M 166 235 Q 162 245 156 242" stroke="#fbbf24" stroke-width="1.2" fill="none"/>
      <!-- Rolled cuff -->
      <rect x="126" y="254" width="22" height="4" rx="1" fill="#e0f2fe"/>
      <rect x="152" y="254" width="22" height="4" rx="1" fill="#e0f2fe"/>
    `,
  }),
  new Item({
    id: 'bottoms_skirt_frill',
    name: 'ゴシックフリルスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <path d="M 130 225 L 170 225 L 183 275 L 117 275 Z" fill="#0f172a"/>
      <!-- Frill tiers -->
      <path d="M 124 250 Q 150 256 176 250" stroke="#64748b" stroke-width="2" fill="none"/>
      <path d="M 117 275 Q 150 282 183 275" stroke="#e2e8f0" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_chinese_skirt',
    name: 'チャイナスリットスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <!-- Red Chinese wrap skirt -->
      <path d="M 130 225 L 170 225 L 176 275 L 124 275 Z" fill="#dc2626"/>
      <!-- Gold cloud border at hem -->
      <path d="M 124 270 Q 150 274 176 270" stroke="#facc15" stroke-width="2.5" fill="none"/>
      <!-- Side slit with gold frog knot -->
      <line x1="162" y1="248" x2="164" y2="275" stroke="#991b1b" stroke-width="2"/>
      <circle cx="162" cy="248" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_tulle_skirt',
    name: '星屑チュールスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <!-- Lavender base skirt -->
      <path d="M 130 225 L 170 225 L 182 275 L 118 275 Z" fill="#e9d5ff"/>
      <!-- Puffy translucent tulle overlay (Pink) -->
      <path d="M 128 226 L 172 226 L 188 280 L 112 280 Z" fill="#f5d0fe" opacity="0.8"/>
      <!-- Golden glitter stars -->
      <circle cx="132" cy="245" r="2" fill="#fde047"/>
      <circle cx="152" cy="255" r="2.5" fill="#fde047"/>
      <circle cx="168" cy="248" r="2" fill="#fde047"/>
      <circle cx="140" cy="268" r="2" fill="#fde047"/>
      <circle cx="160" cy="272" r="2.2" fill="#fde047"/>
      <!-- Scalloped Hem -->
      <path d="M 112 280 Q 131 286 150 280 Q 169 286 188 280" stroke="#ffffff" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_check_pants',
    name: 'ピンクチェックパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <!-- Pastel Pink Checked Wide Trousers -->
      <path d="M 130 225 L 170 225 L 174 285 L 152 285 L 150 245 L 148 285 L 126 285 Z" fill="#fbcfe8"/>
      <!-- Grid Lines -->
      <line x1="130" y1="240" x2="170" y2="240" stroke="#f472b6" stroke-width="1.2"/>
      <line x1="128" y1="260" x2="172" y2="260" stroke="#f472b6" stroke-width="1.2"/>
      <line x1="138" y1="225" x2="136" y2="285" stroke="#f472b6" stroke-width="1.2"/>
      <line x1="162" y1="225" x2="164" y2="285" stroke="#f472b6" stroke-width="1.2"/>
      <!-- Suspenders -->
      <line x1="136" y1="180" x2="136" y2="225" stroke="#78350f" stroke-width="2"/>
      <line x1="164" y1="180" x2="164" y2="225" stroke="#78350f" stroke-width="2"/>
      <circle cx="136" cy="226" r="2" fill="#d97706"/>
      <circle cx="164" cy="226" r="2" fill="#d97706"/>
    `,
  }),
  new Item({
    id: 'bottoms_frill_shorts',
    name: 'レースかぼちゃパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
      <!-- Puffy Bloomer Shorts -->
      <path d="M 130 225 L 170 225 L 178 260 L 153 260 L 150 248 L 147 260 L 122 260 Z" fill="#fef2f2"/>
      <!-- Left leg puff -->
      <ellipse cx="135" cy="250" rx="14" ry="12" fill="#fef2f2"/>
      <ellipse cx="165" cy="250" rx="14" ry="12" fill="#fef2f2"/>
      <!-- Ruffled Leg cuffs -->
      <path d="M 122 258 Q 135 264 148 258" stroke="#f472b6" stroke-width="2.5" fill="none"/>
      <path d="M 152 258 Q 165 264 178 258" stroke="#f472b6" stroke-width="2.5" fill="none"/>
      <!-- Little Pink Side Bows -->
      <circle cx="123" cy="256" r="2" fill="#ec4899"/>
      <circle cx="177" cy="256" r="2" fill="#ec4899"/>
    `,
  }),

  // ==========================================
  // TOPS (z-index: 70)
  // ==========================================
  new Item({
    id: 'tops_sailor',
    name: 'セーラー服トップス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Main Shirt -->
      <path d="M 130 168 L 170 168 L 172 230 L 128 230 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Sleeves -->
      <path d="M 130 168 L 115 195 L 125 198 L 133 182 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <path d="M 170 168 L 185 195 L 175 198 L 167 182 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Navy Sailor Collar -->
      <path d="M 135 168 L 122 195 L 140 195 L 150 188 L 160 195 L 178 195 L 165 168 Z" fill="#1e3a8a"/>
      <path d="M 125 193 L 138 193" stroke="#ffffff" stroke-width="1"/>
      <path d="M 162 193 L 175 193" stroke="#ffffff" stroke-width="1"/>
      <!-- Red Ribbon Bow -->
      <polygon points="144,188 150,192 146,204 150,195 154,204 150,192 156,188" fill="#e11d48"/>
      <circle cx="150" cy="191" r="3" fill="#be123c"/>
    `,
  }),
  new Item({
    id: 'tops_hoodie_pink',
    name: 'ゆったりピンクパーカー',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <path d="M 125 166 L 175 166 L 176 235 L 124 235 Z" fill="#f472b6"/>
      <!-- Big sleeves -->
      <path d="M 125 166 L 108 215 L 120 220 L 130 185 Z" fill="#f472b6"/>
      <path d="M 175 166 L 192 215 L 180 220 L 170 185 Z" fill="#f472b6"/>
      <!-- Kangaroo pocket -->
      <path d="M 134 210 L 166 210 L 168 230 L 132 230 Z" fill="#ec4899" opacity="0.6"/>
      <!-- Cords -->
      <line x1="145" y1="172" x2="145" y2="195" stroke="#ffffff" stroke-width="2"/>
      <line x1="155" y1="172" x2="155" y2="195" stroke="#ffffff" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'tops_blouse_frill',
    name: 'フリルブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <path d="M 130 166 L 170 166 L 171 228 L 129 228 Z" fill="#f8fafc"/>
      <!-- Puff sleeves -->
      <ellipse cx="122" cy="180" rx="9" ry="12" fill="#f8fafc"/>
      <ellipse cx="178" cy="180" rx="9" ry="12" fill="#f8fafc"/>
      <!-- Frills & Cameo -->
      <path d="M 143 166 Q 150 174 157 166 L 157 210 Q 150 216 143 210 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <circle cx="150" cy="178" r="4" fill="#a855f7"/>
      <circle cx="150" cy="178" r="2" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'tops_tee_striped',
    name: 'ミントボーダーTシャツ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <path d="M 129 168 L 171 168 L 172 230 L 128 230 Z" fill="#ffffff"/>
      <!-- Stripes -->
      <rect x="129" y="178" width="42" height="6" fill="#34d399"/>
      <rect x="129" y="192" width="42" height="6" fill="#34d399"/>
      <rect x="129" y="206" width="42" height="6" fill="#34d399"/>
      <rect x="128" y="220" width="44" height="6" fill="#34d399"/>
      <!-- Sleeves -->
      <path d="M 129 168 L 115 190 L 123 194 L 132 180 Z" fill="#34d399"/>
      <path d="M 171 168 L 185 190 L 177 194 L 168 180 Z" fill="#34d399"/>
    `,
  }),
  new Item({
    id: 'tops_haori_tanjiro',
    name: '市松模様の羽織（炭治郎風）',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Dark Corps Uniform base collar -->
      <path d="M 136 166 L 164 166 L 165 230 L 135 230 Z" fill="#18181b"/>
      <polygon points="144,166 156,166 150,178" fill="#ffffff"/>
      <!-- Green and Black Checkered Haori (Tanjiro) -->
      <path d="M 125 166 L 175 166 L 178 238 L 122 238 Z" fill="#15803d"/>
      <!-- Wide Haori Sleeves -->
      <path d="M 125 166 L 102 215 L 122 225 L 132 185 Z" fill="#15803d"/>
      <path d="M 175 166 L 198 215 L 178 225 L 168 185 Z" fill="#15803d"/>
      <!-- Checkered Pattern Blocks -->
      <rect x="123" y="166" width="13" height="15" fill="#18181b"/>
      <rect x="149" y="166" width="13" height="15" fill="#18181b"/>
      <rect x="136" y="181" width="13" height="15" fill="#18181b"/>
      <rect x="162" y="181" width="13" height="15" fill="#18181b"/>
      <rect x="123" y="196" width="13" height="15" fill="#18181b"/>
      <rect x="149" y="196" width="13" height="15" fill="#18181b"/>
      <rect x="136" y="211" width="13" height="15" fill="#18181b"/>
      <rect x="162" y="211" width="13" height="15" fill="#18181b"/>
      <rect x="123" y="226" width="13" height="12" fill="#18181b"/>
      <rect x="149" y="226" width="13" height="12" fill="#18181b"/>
      <!-- Sleeve blocks -->
      <rect x="108" y="180" width="10" height="12" fill="#18181b"/>
      <rect x="114" y="200" width="10" height="14" fill="#18181b"/>
      <rect x="182" y="180" width="10" height="12" fill="#18181b"/>
      <rect x="176" y="200" width="10" height="14" fill="#18181b"/>
      <!-- White Haori Cord -->
      <line x1="144" y1="190" x2="156" y2="190" stroke="#ffffff" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'tops_haori_shinobu',
    name: '蝶の羽織（しのぶ風）',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Dark Uniform Inset -->
      <path d="M 136 166 L 164 166 L 165 230 L 135 230 Z" fill="#1e1b4b"/>
      <polygon points="144,166 156,166 150,178" fill="#ffffff"/>
      <!-- White Butterfly Wing Haori (Shinobu) -->
      <path d="M 125 166 L 175 166 L 180 240 L 120 240 Z" fill="#ffffff"/>
      <!-- Wide Sleeves -->
      <path d="M 125 166 L 98 220 L 120 230 L 132 185 Z" fill="#ffffff"/>
      <path d="M 175 166 L 202 220 L 180 230 L 168 185 Z" fill="#ffffff"/>
      <!-- Turquoise & Pink Wing Hem Border -->
      <path d="M 120 232 Q 135 240 150 232 Q 165 240 180 232 L 180 240 Q 165 248 150 240 Q 135 248 120 240 Z" fill="#5eead4"/>
      <path d="M 120 236 Q 135 244 150 236 Q 165 244 180 236 L 180 240 Q 165 248 150 240 Q 135 248 120 240 Z" fill="#f472b6"/>
      <!-- Sleeve Hem Scallops -->
      <path d="M 100 215 L 120 225 L 118 230 L 98 220 Z" fill="#5eead4"/>
      <path d="M 200 215 L 180 225 L 182 230 L 202 220 Z" fill="#5eead4"/>
      <!-- Black veining lines -->
      <path d="M 130 190 Q 135 215 135 235 M 150 185 L 150 235 M 170 190 Q 165 215 165 235" stroke="#0f172a" stroke-width="1.2" fill="none"/>
    `,
  }),
  new Item({
    id: 'tops_haori_rengoku',
    name: '炎の羽織（煉獄風）',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Dark Uniform Inset -->
      <path d="M 136 166 L 164 166 L 165 230 L 135 230 Z" fill="#3f3f46"/>
      <polygon points="144,166 156,166 150,178" fill="#ffffff"/>
      <!-- White Cape / Haori with Flame Hem -->
      <path d="M 124 166 L 176 166 L 182 242 L 118 242 Z" fill="#ffffff"/>
      <path d="M 124 166 L 98 222 L 122 230 L 132 185 Z" fill="#ffffff"/>
      <path d="M 176 166 L 202 222 L 178 230 L 168 185 Z" fill="#ffffff"/>
      <!-- Yellow Flame Tier -->
      <path d="M 118 242 L 125 220 L 132 230 L 140 215 L 150 230 L 160 215 L 168 230 L 175 220 L 182 242 Z" fill="#facc15"/>
      <!-- Orange / Red Flame Border -->
      <path d="M 118 242 L 125 228 L 132 236 L 140 224 L 150 236 L 160 224 L 168 236 L 175 228 L 182 242 Z" fill="#ef4444"/>
      <!-- Sleeve Flames -->
      <polygon points="100,215 110,210 115,222 105,224" fill="#facc15"/>
      <polygon points="200,215 190,210 185,222 195,224" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'tops_haori_zenitsu',
    name: '鱗文様の羽織（善逸風）',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Dark Uniform -->
      <path d="M 136 166 L 164 166 L 165 230 L 135 230 Z" fill="#27272a"/>
      <!-- Yellow/Orange Gradient Haori (Zenitsu) -->
      <defs>
        <linearGradient id="zenitsuGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#f97316"/>
        </linearGradient>
      </defs>
      <path d="M 125 166 L 175 166 L 178 238 L 122 238 Z" fill="url(#zenitsuGrad)"/>
      <path d="M 125 166 L 102 215 L 122 225 L 132 185 Z" fill="url(#zenitsuGrad)"/>
      <path d="M 175 166 L 198 215 L 178 225 L 168 185 Z" fill="url(#zenitsuGrad)"/>
      <!-- White Triangles Pattern (Scale/Uroko) -->
      <polygon points="135,175 140,183 130,183" fill="#ffffff"/>
      <polygon points="155,175 160,183 150,183" fill="#ffffff"/>
      <polygon points="145,190 150,198 140,198" fill="#ffffff"/>
      <polygon points="165,190 170,198 160,198" fill="#ffffff"/>
      <polygon points="135,205 140,213 130,213" fill="#ffffff"/>
      <polygon points="155,205 160,213 150,213" fill="#ffffff"/>
      <polygon points="145,220 150,228 140,228" fill="#ffffff"/>
      <polygon points="165,220 170,228 160,228" fill="#ffffff"/>
      <polygon points="112,192 117,200 107,200" fill="#ffffff"/>
      <polygon points="188,192 193,200 183,200" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'tops_bear_hoodie',
    name: 'もこもこくま耳パーカー',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Fluffy Brown Bear Hoodie -->
      <path d="M 124 166 L 176 166 L 178 236 L 122 236 Z" fill="#b45309"/>
      <path d="M 124 166 L 105 215 L 120 220 L 132 185 Z" fill="#b45309"/>
      <path d="M 176 166 L 195 215 L 180 220 L 168 185 Z" fill="#b45309"/>
      <ellipse cx="150" cy="205" rx="16" ry="18" fill="#fef3c7"/>
      <path d="M 134 218 L 166 218 L 164 234 L 136 234 Z" fill="#92400e"/>
      <ellipse cx="150" cy="226" rx="4" ry="3" fill="#fef3c7"/>
      <circle cx="144" cy="222" r="1.5" fill="#fef3c7"/>
      <circle cx="150" cy="220" r="1.5" fill="#fef3c7"/>
      <circle cx="156" cy="222" r="1.5" fill="#fef3c7"/>
    `,
  }),
  new Item({
    id: 'tops_cat_sweater',
    name: 'ねこ耳柄セーター',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Cream White Knit Sweater -->
      <path d="M 125 166 L 175 166 L 176 235 L 124 235 Z" fill="#fdf4ff"/>
      <path d="M 125 166 L 108 215 L 120 220 L 130 185 Z" fill="#fdf4ff"/>
      <path d="M 175 166 L 192 215 L 180 220 L 170 185 Z" fill="#fdf4ff"/>
      <!-- Ribbed Hem -->
      <rect x="124" y="230" width="52" height="5" fill="#fae8ff"/>
      <!-- Cat Face Emblem -->
      <ellipse cx="150" cy="200" rx="14" ry="11" fill="#f472b6"/>
      <!-- Cat Ears -->
      <polygon points="138,192 142,183 146,191" fill="#f472b6"/>
      <polygon points="154,191 158,183 162,192" fill="#f472b6"/>
      <!-- Closed cute happy eyes & nose -->
      <path d="M 142 199 Q 145 202 148 199" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <path d="M 152 199 Q 155 202 158 199" stroke="#ffffff" stroke-width="1.2" fill="none"/>
      <circle cx="150" cy="203" r="1" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'tops_cardigan_pastel',
    name: 'パステルゆるカーデ',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- White Camisole Inner -->
      <path d="M 138 170 L 162 170 L 162 230 L 138 230 Z" fill="#ffffff"/>
      <!-- Oversized Lavender Cardigan -->
      <path d="M 123 166 L 177 166 L 178 238 L 162 238 L 150 185 L 138 238 L 122 238 Z" fill="#e9d5ff"/>
      <!-- Slouchy Sleeves -->
      <path d="M 123 166 L 100 215 L 118 225 L 130 185 Z" fill="#e9d5ff"/>
      <path d="M 177 166 L 200 215 L 182 225 L 170 185 Z" fill="#e9d5ff"/>
      <!-- Candy Colored Buttons -->
      <circle cx="150" cy="195" r="2.5" fill="#f472b6"/>
      <circle cx="150" cy="208" r="2.5" fill="#fde047"/>
      <circle cx="150" cy="221" r="2.5" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'tops_offshoulder_ribbon',
    name: 'オフショルリボンブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Off-shoulder ruffle frill -->
      <path d="M 115 178 Q 150 186 185 178 L 182 186 Q 150 194 118 186 Z" fill="#fbcfe8"/>
      <!-- Main Blouse Body -->
      <path d="M 130 182 L 170 182 L 171 230 L 129 230 Z" fill="#fdf2f8"/>
      <!-- Short puffy ruffled sleeves -->
      <ellipse cx="118" cy="190" rx="7" ry="9" fill="#fbcfe8"/>
      <ellipse cx="182" cy="190" rx="7" ry="9" fill="#fbcfe8"/>
      <!-- Center Red Ribbon Bow -->
      <circle cx="150" cy="186" r="3" fill="#e11d48"/>
      <polygon points="144,183 150,186 142,192" fill="#e11d48"/>
      <polygon points="156,183 150,186 158,192" fill="#e11d48"/>
    `,
  }),
  new Item({
    id: 'tops_chinese_blouse',
    name: 'チャイナ風ブラウス',
    slotCategory: SlotCategory.TOPS,
    svgContent: `
      <!-- Red Mandarin Collar Blouse -->
      <path d="M 130 166 L 170 166 L 172 230 L 128 230 Z" fill="#dc2626"/>
      <!-- Mandarin Stand-up Collar -->
      <path d="M 143 162 L 157 162 L 157 167 L 143 167 Z" fill="#dc2626" stroke="#facc15" stroke-width="1"/>
      <!-- Asymmetric diagonal front opening -->
      <path d="M 157 166 Q 166 178 172 195" stroke="#facc15" stroke-width="1.8" fill="none"/>
      <!-- Gold Frog Knots -->
      <circle cx="150" cy="165" r="2" fill="#facc15"/>
      <circle cx="160" cy="175" r="2" fill="#facc15"/>
      <circle cx="166" cy="188" r="2" fill="#facc15"/>
      <!-- Capped Sleeves with gold trim -->
      <path d="M 130 166 L 118 185 L 126 188 L 132 178 Z" fill="#dc2626"/>
      <path d="M 170 166 L 182 185 L 174 188 L 168 178 Z" fill="#dc2626"/>
      <line x1="118" y1="185" x2="126" y2="188" stroke="#facc15" stroke-width="1.5"/>
      <line x1="182" y1="185" x2="174" y2="188" stroke="#facc15" stroke-width="1.5"/>
    `,
  }),

  // ==========================================
  // ONE PIECE DRESSES (z-index: 75)
  // Conflicts with TOPS and BOTTOMS
  // ==========================================
  new Item({
    id: 'dress_gothic_lolita',
    name: 'ゴシックロリータドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Dress Bodice -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#0f172a"/>
      <!-- White lace chest inset -->
      <polygon points="144,166 156,166 152,192 148,192" fill="#ffffff"/>
      <line x1="145" y1="175" x2="155" y2="175" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="146" y1="183" x2="154" y2="183" stroke="#0f172a" stroke-width="1.5"/>
      <!-- Puffed sleeves -->
      <ellipse cx="122" cy="178" rx="8" ry="11" fill="#0f172a"/>
      <ellipse cx="178" cy="178" rx="8" ry="11" fill="#0f172a"/>
      <!-- Big Flared Skirt -->
      <path d="M 132 215 L 168 215 L 188 285 L 112 285 Z" fill="#0f172a"/>
      <!-- Apron & White Ruffles -->
      <path d="M 138 215 L 162 215 L 166 270 L 134 270 Z" fill="#ffffff" opacity="0.95"/>
      <path d="M 112 285 Q 150 295 188 285" stroke="#ffffff" stroke-width="4" stroke-dasharray="4,2" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_maid',
    name: 'メイド服ワンピース',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Black base dress -->
      <path d="M 128 166 L 172 166 L 169 220 L 131 220 Z" fill="#18181b"/>
      <path d="M 131 220 L 169 220 L 185 280 L 115 280 Z" fill="#18181b"/>
      <!-- White puffed sleeves -->
      <ellipse cx="122" cy="178" rx="8" ry="10" fill="#ffffff"/>
      <ellipse cx="178" cy="178" rx="8" ry="10" fill="#ffffff"/>
      <!-- White Maid Apron -->
      <path d="M 138 170 L 162 170 L 166 265 L 134 265 Z" fill="#ffffff"/>
      <!-- Apron Straps & Frills -->
      <path d="M 134 166 L 140 215 M 166 166 L 160 215" stroke="#ffffff" stroke-width="4"/>
      <!-- Big Red Bow -->
      <circle cx="150" cy="176" r="3.5" fill="#ef4444"/>
      <polygon points="144,174 150,176 145,182" fill="#ef4444"/>
      <polygon points="156,174 150,176 155,182" fill="#ef4444"/>
    `,
  }),
  new Item({
    id: 'dress_summer_sunflower',
    name: 'ひまわりサマードレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Dress Top with shoulder straps -->
      <rect x="135" y="165" width="4" height="15" fill="#facc15"/>
      <rect x="161" y="165" width="4" height="15" fill="#facc15"/>
      <path d="M 132 178 L 168 178 L 169 222 L 131 222 Z" fill="#fef08a"/>
      <!-- Flared yellow skirt -->
      <path d="M 131 222 L 169 222 L 186 280 L 114 280 Z" fill="#fef08a"/>
      <!-- Sunflower Motifs -->
      <circle cx="140" cy="250" r="3" fill="#78350f"/>
      <circle cx="140" cy="250" r="6" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2" fill="none"/>
      <circle cx="165" cy="265" r="3" fill="#78350f"/>
      <circle cx="165" cy="265" r="6" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2" fill="none"/>
      <!-- Green ribbon belt -->
      <rect x="131" y="218" width="38" height="5" fill="#84cc16"/>
    `,
  }),
  new Item({
    id: 'dress_kimono_nezuko',
    name: '麻の葉の着物（禰豆子風）',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Dark Haori outer cloak borders -->
      <path d="M 120 170 L 132 170 L 125 285 L 110 285 Z" fill="#18181b"/>
      <path d="M 168 170 L 180 170 L 190 285 L 175 285 Z" fill="#18181b"/>
      <!-- Pink Asanoha Kimono Base -->
      <path d="M 130 166 L 170 166 L 176 285 L 124 285 Z" fill="#f472b6"/>
      <!-- White Kimono Collar -->
      <polygon points="144,166 156,166 150,178" fill="#ffffff"/>
      <!-- Geometric Asanoha (Hemp leaf) Lines -->
      <line x1="130" y1="235" x2="170" y2="235" stroke="#db2777" stroke-width="1"/>
      <line x1="130" y1="260" x2="170" y2="260" stroke="#db2777" stroke-width="1"/>
      <path d="M 140 235 L 150 248 L 160 235 L 150 222 Z" stroke="#db2777" stroke-width="1" fill="none"/>
      <path d="M 140 260 L 150 273 L 160 260 L 150 247 Z" stroke="#db2777" stroke-width="1" fill="none"/>
      <!-- Red and White Ichimatsu (Checkered) Obi -->
      <rect x="130" y="202" width="40" height="22" fill="#ef4444"/>
      <rect x="130" y="202" width="10" height="11" fill="#ffffff"/>
      <rect x="150" y="202" width="10" height="11" fill="#ffffff"/>
      <rect x="140" y="213" width="10" height="11" fill="#ffffff"/>
      <rect x="160" y="213" width="10" height="11" fill="#ffffff"/>
      <!-- Green / Orange Obi Cord (Obijime) -->
      <line x1="129" y1="213" x2="171" y2="213" stroke="#84cc16" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'dress_magical_girl',
    name: 'きらきら魔法少女ドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Bodice (Pink & Lavender) -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#f472b6"/>
      <!-- White frilly chest bib & golden star brooch -->
      <path d="M 142 166 Q 150 178 158 166 L 154 188 L 146 188 Z" fill="#ffffff"/>
      <polygon points="150,175 152,179 157,180 153,184 154,188 150,186 146,188 147,184 143,180 148,179" fill="#facc15"/>
      <!-- Fluffy puff sleeves with lavender bows -->
      <ellipse cx="120" cy="176" rx="9" ry="11" fill="#ffffff"/>
      <ellipse cx="180" cy="176" rx="9" ry="11" fill="#ffffff"/>
      <circle cx="120" cy="180" r="3" fill="#c084fc"/>
      <circle cx="180" cy="180" r="3" fill="#c084fc"/>
      <!-- Multi-layered Magical Skirt -->
      <path d="M 132 215 L 168 215 L 188 285 L 112 285 Z" fill="#c084fc"/>
      <!-- Over-skirt petals (Pink) -->
      <path d="M 132 215 Q 150 250 168 215 Q 185 255 180 270 Q 150 260 120 270 Q 115 255 132 215" fill="#f472b6"/>
      <!-- Golden hem stars and lace -->
      <path d="M 112 285 Q 131 292 150 285 Q 169 292 188 285" stroke="#ffffff" stroke-width="4" fill="none"/>
      <circle cx="135" cy="275" r="2.5" fill="#facc15"/>
      <circle cx="165" cy="275" r="2.5" fill="#facc15"/>
      <!-- Waist Ribbon -->
      <circle cx="150" cy="215" r="4" fill="#ec4899"/>
      <polygon points="144,213 150,215 142,223" fill="#ec4899"/>
      <polygon points="156,213 150,215 158,223" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'dress_strawberry_lolita',
    name: 'いちごロリータドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Cream and Strawberry Red Lolita Dress -->
      <path d="M 130 166 L 170 166 L 168 215 L 132 215 Z" fill="#dc2626"/>
      <!-- White bib with red lace-up ribbon -->
      <polygon points="143,166 157,166 153,205 147,205" fill="#fef2f2"/>
      <line x1="145" y1="175" x2="155" y2="175" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="146" y1="185" x2="154" y2="185" stroke="#dc2626" stroke-width="1.5"/>
      <line x1="147" y1="195" x2="153" y2="195" stroke="#dc2626" stroke-width="1.5"/>
      <!-- Sleeves -->
      <ellipse cx="122" cy="176" rx="8" ry="11" fill="#fef2f2"/>
      <ellipse cx="178" cy="176" rx="8" ry="11" fill="#fef2f2"/>
      <!-- Big Frilly Skirt with White Polka Dots and Strawberries -->
      <path d="M 132 215 L 168 215 L 188 285 L 112 285 Z" fill="#dc2626"/>
      <!-- Dots -->
      <circle cx="130" cy="235" r="2" fill="#ffffff"/>
      <circle cx="150" cy="235" r="2" fill="#ffffff"/>
      <circle cx="170" cy="235" r="2" fill="#ffffff"/>
      <circle cx="140" cy="255" r="2" fill="#ffffff"/>
      <circle cx="160" cy="255" r="2" fill="#ffffff"/>
      <circle cx="125" cy="270" r="2" fill="#ffffff"/>
      <circle cx="175" cy="270" r="2" fill="#ffffff"/>
      <!-- Strawberry Icons -->
      <g transform="translate(146, 260) scale(0.7)">
        <polygon points="5,2 1,7 5,11 9,7" fill="#ef4444"/>
        <polygon points="5,0 3,3 7,3" fill="#22c55e"/>
      </g>
      <!-- Hem Ruffles -->
      <path d="M 112 285 Q 150 295 188 285" stroke="#ffffff" stroke-width="4" stroke-dasharray="3,2" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_princess_pastel',
    name: 'プリンセスブルードレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Cinderella Sky Blue Ballgown -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#38bdf8"/>
      <polygon points="144,166 156,166 150,185" fill="#ffffff"/>
      <!-- Silver sparkle gem -->
      <polygon points="150,180 152,184 156,185 152,186 150,190 148,186 144,185 148,184" fill="#fef08a"/>
      <!-- Puffy sleeves -->
      <ellipse cx="120" cy="176" rx="9" ry="11" fill="#bae6fd"/>
      <ellipse cx="180" cy="176" rx="9" ry="11" fill="#bae6fd"/>
      <!-- Grand Flared Ballgown Skirt -->
      <path d="M 132 215 L 168 215 L 192 288 L 108 288 Z" fill="#38bdf8"/>
      <!-- White Draped Side Panniers -->
      <path d="M 132 215 Q 120 245 138 255 Q 148 240 138 215" fill="#ffffff" opacity="0.9"/>
      <path d="M 168 215 Q 180 245 162 255 Q 152 240 162 215" fill="#ffffff" opacity="0.9"/>
      <!-- Sparkles -->
      <circle cx="150" cy="245" r="2.5" fill="#ffffff"/>
      <circle cx="135" cy="275" r="2" fill="#ffffff"/>
      <circle cx="165" cy="275" r="2" fill="#ffffff"/>
      <path d="M 108 288 Q 150 298 192 288" stroke="#bae6fd" stroke-width="4" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_alice_blue',
    name: 'アリスのエプロンドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Alice Sky Blue Dress -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#0284c7"/>
      <ellipse cx="122" cy="176" rx="8" ry="10" fill="#0284c7"/>
      <ellipse cx="178" cy="176" rx="8" ry="10" fill="#0284c7"/>
      <!-- Skirt -->
      <path d="M 132 215 L 168 215 L 186 282 L 114 282 Z" fill="#0284c7"/>
      <!-- White Pinafore Apron -->
      <path d="M 138 170 L 162 170 L 165 270 L 135 270 Z" fill="#ffffff"/>
      <!-- Apron Frilly Straps -->
      <path d="M 134 166 L 140 215 M 166 166 L 160 215" stroke="#ffffff" stroke-width="4"/>
      <!-- Playing Card Heart Symbol -->
      <path d="M 148 240 C 148 236 144 236 144 240 C 144 244 150 248 150 248 C 150 248 156 244 156 240 C 156 236 152 236 152 240 Z" fill="#ef4444"/>
      <!-- Waist Ribbon Bow -->
      <circle cx="150" cy="214" r="3" fill="#18181b"/>
      <polygon points="144,212 150,214 145,219" fill="#18181b"/>
      <polygon points="156,212 150,214 155,219" fill="#18181b"/>
    `,
  }),
  new Item({
    id: 'dress_cherry_gingham',
    name: 'チェリーギンガムワンピ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Red Gingham Check Dress -->
      <path d="M 130 168 L 170 168 L 169 220 L 131 220 Z" fill="#fca5a5"/>
      <path d="M 131 220 L 169 220 L 186 280 L 114 280 Z" fill="#fca5a5"/>
      <!-- Checks -->
      <rect x="135" y="172" width="8" height="8" fill="#ef4444"/>
      <rect x="151" y="172" width="8" height="8" fill="#ef4444"/>
      <rect x="143" y="185" width="8" height="8" fill="#ef4444"/>
      <rect x="159" y="185" width="8" height="8" fill="#ef4444"/>
      <rect x="135" y="230" width="10" height="10" fill="#ef4444"/>
      <rect x="155" y="230" width="10" height="10" fill="#ef4444"/>
      <rect x="145" y="245" width="10" height="10" fill="#ef4444"/>
      <rect x="165" y="245" width="10" height="10" fill="#ef4444"/>
      <!-- Embroidered Cherries -->
      <circle cx="147" cy="204" r="2.5" fill="#dc2626"/>
      <circle cx="153" cy="205" r="2.5" fill="#dc2626"/>
      <path d="M 147 202 Q 150 196 150 198 Q 150 196 153 203" stroke="#16a34a" stroke-width="1.2" fill="none"/>
      <!-- Eyelet Lace Hem -->
      <path d="M 114 280 Q 150 288 186 280" stroke="#ffffff" stroke-width="3" stroke-dasharray="3,2" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_chinese_qipao',
    name: '蓮のチャイナドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Mint Green Silk Qipao with Slit -->
      <path d="M 130 166 L 170 166 L 174 282 L 126 282 Z" fill="#6ee7b7"/>
      <!-- Stand-up Mandarin Collar -->
      <path d="M 143 162 L 157 162 L 157 167 L 143 167 Z" fill="#6ee7b7" stroke="#facc15" stroke-width="1"/>
      <!-- Gold diagonal piping -->
      <path d="M 157 166 Q 166 178 172 195" stroke="#facc15" stroke-width="1.5" fill="none"/>
      <!-- Lotus Flower Motifs -->
      <path d="M 145 235 C 140 230 145 220 150 228 C 155 220 160 230 155 235 Z" fill="#f472b6"/>
      <circle cx="150" cy="232" r="1.5" fill="#fde047"/>
      <!-- Gold Slit on left side -->
      <line x1="134" y1="250" x2="132" y2="282" stroke="#facc15" stroke-width="2"/>
      <circle cx="134" cy="250" r="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'dress_nightwear_bear',
    name: 'もこもこくまパジャマ',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Soft Yellow Cozy Nightgown -->
      <path d="M 126 166 L 174 166 L 180 278 L 120 278 Z" fill="#fef08a"/>
      <!-- Loose Cozy Sleeves -->
      <path d="M 126 166 L 110 215 L 122 220 L 132 185 Z" fill="#fef08a"/>
      <path d="M 174 166 L 190 215 L 178 220 L 168 185 Z" fill="#fef08a"/>
      <!-- Big Bear Face on Chest -->
      <ellipse cx="150" cy="205" rx="14" ry="11" fill="#fef9c3"/>
      <!-- Bear Ears on chest -->
      <circle cx="140" cy="196" r="3.5" fill="#fef9c3"/>
      <circle cx="160" cy="196" r="3.5" fill="#fef9c3"/>
      <!-- Bear Snout -->
      <ellipse cx="150" cy="206" rx="5" ry="3.5" fill="#ffffff"/>
      <circle cx="150" cy="205" r="1.5" fill="#78350f"/>
      <circle cx="145" cy="203" r="1" fill="#78350f"/>
      <circle cx="155" cy="203" r="1" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'dress_angel_wedding',
    name: '純白エンジェルレースドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Bridal White Lace Gown -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#f8fafc"/>
      <polygon points="144,166 156,166 150,185" fill="#f1f5f9"/>
      <!-- Flowing Tiered Lace Skirt -->
      <path d="M 132 215 L 168 215 L 192 288 L 108 288 Z" fill="#f8fafc"/>
      <!-- Semi-translucent Overlay -->
      <path d="M 128 220 Q 150 255 172 220 Q 185 270 115 270 Z" fill="#ffffff" opacity="0.6"/>
      <!-- Rose flower belt -->
      <circle cx="150" cy="215" r="3.5" fill="#fda4af"/>
      <circle cx="144" cy="216" r="2.5" fill="#f43f5e"/>
      <circle cx="156" cy="216" r="2.5" fill="#f43f5e"/>
      <!-- Hem lace waves -->
      <path d="M 108 288 Q 150 298 192 288" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="3,2" fill="none"/>
    `,
  }),
  new Item({
    id: 'dress_school_idol',
    name: 'アイドルステージ衣装',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Navy Blue Idol Jacket & Pink Plaid Skirt -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#1e1b4b"/>
      <!-- Gold Epaulets on shoulders -->
      <rect x="124" y="165" width="8" height="4" fill="#facc15"/>
      <rect x="168" y="165" width="8" height="4" fill="#facc15"/>
      <!-- Golden Double Breast Buttons -->
      <circle cx="146" cy="180" r="2" fill="#facc15"/>
      <circle cx="154" cy="180" r="2" fill="#facc15"/>
      <circle cx="146" cy="195" r="2" fill="#facc15"/>
      <circle cx="154" cy="195" r="2" fill="#facc15"/>
      <!-- Pleated Pink Plaid Idol Skirt -->
      <path d="M 132 215 L 168 215 L 186 275 L 114 275 Z" fill="#f472b6"/>
      <path d="M 114 275 Q 150 282 186 275" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- Star Mic Belt -->
      <rect x="130" y="213" width="40" height="4" fill="#facc15"/>
      <polygon points="150,210 152,214 156,215 152,217 150,221 148,217 144,215 148,214" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'dress_witch_gothic',
    name: '小悪魔ゴシックドレス',
    slotCategory: SlotCategory.ONE_PIECE,
    conflictSlots: [SlotCategory.TOPS, SlotCategory.BOTTOMS],
    svgContent: `
      <!-- Deep Purple & Black Gothic Dress -->
      <path d="M 128 166 L 172 166 L 168 215 L 132 215 Z" fill="#3b0764"/>
      <!-- Bat-wing Scalloped Collar -->
      <path d="M 134 166 Q 142 178 150 172 Q 158 178 166 166" fill="#1e1b4b"/>
      <!-- Corset Cross-lacing -->
      <line x1="146" y1="180" x2="154" y2="190" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="154" y1="180" x2="146" y2="190" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="146" y1="190" x2="154" y2="200" stroke="#c084fc" stroke-width="1.5"/>
      <line x1="154" y1="190" x2="146" y2="200" stroke="#c084fc" stroke-width="1.5"/>
      <!-- Flared Jagged Bat Skirt -->
      <path d="M 132 215 L 168 215 L 188 282 L 176 272 L 164 282 L 150 272 L 136 282 L 124 272 L 112 282 Z" fill="#3b0764"/>
      <!-- Little devil wings at waist -->
      <polygon points="128,214 118,206 122,216" fill="#1e1b4b"/>
      <polygon points="172,214 182,206 178,216" fill="#1e1b4b"/>
    `,
  }),

  // ==========================================
  // SHOES (z-index: 80)
  // ==========================================
  new Item({
    id: 'shoes_loafers',
    name: 'ローファー＆ソックス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- White Socks -->
      <rect x="129" y="315" width="14" height="35" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <rect x="157" y="315" width="14" height="35" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Brown Loafers -->
      <path d="M 126 348 C 126 343 144 343 144 348 L 145 358 C 145 361 125 361 125 358 Z" fill="#78350f"/>
      <path d="M 156 348 C 156 343 174 343 174 348 L 175 358 C 175 361 155 361 155 358 Z" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'shoes_sneakers_pink',
    name: 'ピンクスニーカー',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Ankle Socks -->
      <rect x="129" y="340" width="13" height="12" fill="#ffffff"/>
      <rect x="158" y="340" width="13" height="12" fill="#ffffff"/>
      <!-- Sneakers -->
      <path d="M 125 348 C 125 344 144 344 144 348 L 145 358 L 124 358 Z" fill="#f472b6"/>
      <rect x="123" y="356" width="23" height="4" rx="2" fill="#ffffff"/>
      <path d="M 156 348 C 156 344 175 344 175 348 L 176 358 L 155 358 Z" fill="#f472b6"/>
      <rect x="154" y="356" width="23" height="4" rx="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_boots_black',
    name: 'ブラックレースアップブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <path d="M 128 320 L 144 320 L 146 358 L 124 358 Z" fill="#0f172a"/>
      <path d="M 156 320 L 172 320 L 176 358 L 154 358 Z" fill="#0f172a"/>
      <!-- Laces -->
      <line x1="131" y1="326" x2="141" y2="326" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="131" y1="334" x2="141" y2="334" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="131" y1="342" x2="141" y2="342" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="159" y1="326" x2="169" y2="326" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="159" y1="334" x2="169" y2="334" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="159" y1="342" x2="169" y2="342" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Thick soles -->
      <rect x="123" y="356" width="24" height="4" fill="#334155"/>
      <rect x="153" y="356" width="24" height="4" fill="#334155"/>
    `,
  }),
  new Item({
    id: 'shoes_ballet_red',
    name: 'あかいストラップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <rect x="129" y="332" width="13" height="20" fill="#fdf2f8"/>
      <rect x="158" y="332" width="13" height="20" fill="#fdf2f8"/>
      <!-- Red Shoes -->
      <path d="M 125 350 C 125 346 144 346 144 350 L 145 358 L 124 358 Z" fill="#dc2626"/>
      <path d="M 156 350 C 156 346 175 346 175 350 L 176 358 L 155 358 Z" fill="#dc2626"/>
      <!-- Strap -->
      <line x1="128" y1="349" x2="142" y2="349" stroke="#dc2626" stroke-width="2"/>
      <line x1="158" y1="349" x2="172" y2="349" stroke="#dc2626" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'shoes_strawberry_boots',
    name: 'いちごリボンブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Cream Boots with Strawberry Ribbons -->
      <rect x="128" y="325" width="14" height="25" fill="#fef2f2"/>
      <rect x="158" y="325" width="14" height="25" fill="#fef2f2"/>
      <path d="M 125 348 C 125 344 144 344 144 348 L 145 358 L 124 358 Z" fill="#fef2f2"/>
      <path d="M 156 348 C 156 344 175 344 175 348 L 176 358 L 155 358 Z" fill="#fef2f2"/>
      <!-- Red Soles -->
      <rect x="123" y="356" width="23" height="4" fill="#dc2626"/>
      <rect x="154" y="356" width="23" height="4" fill="#dc2626"/>
      <!-- Strawberry Ribbon Ties -->
      <circle cx="135" cy="336" r="2.5" fill="#dc2626"/>
      <circle cx="165" cy="336" r="2.5" fill="#dc2626"/>
    `,
  }),
  new Item({
    id: 'shoes_glass_slippers',
    name: 'ガラスの靴風パンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Translucent Glass Slippers -->
      <path d="M 125 348 C 125 344 144 344 144 348 L 145 358 L 124 358 Z" fill="#a5f3fc" opacity="0.85" stroke="#38bdf8" stroke-width="1"/>
      <path d="M 156 348 C 156 344 175 344 175 348 L 176 358 L 155 358 Z" fill="#a5f3fc" opacity="0.85" stroke="#38bdf8" stroke-width="1"/>
      <!-- Sparkle gems -->
      <polygon points="135,348 136,351 139,352 136,353 135,356 134,353 131,352 134,351" fill="#ffffff"/>
      <polygon points="166,348 167,351 170,352 167,353 166,356 165,353 162,352 165,351" fill="#ffffff"/>
      <!-- Glass heel shimmer -->
      <line x1="125" y1="357" x2="144" y2="357" stroke="#ffffff" stroke-width="1.5"/>
      <line x1="156" y1="357" x2="175" y2="357" stroke="#ffffff" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'shoes_bear_slippers',
    name: 'くまさんスリッパ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Fluffy Bear Slippers -->
      <ellipse cx="135" cy="352" rx="14" ry="9" fill="#b45309"/>
      <ellipse cx="166" cy="352" rx="14" ry="9" fill="#b45309"/>
      <!-- Bear Ears -->
      <circle cx="125" cy="347" r="3.5" fill="#b45309"/>
      <circle cx="125" cy="347" r="1.8" fill="#fef3c7"/>
      <circle cx="145" cy="347" r="3.5" fill="#b45309"/>
      <circle cx="145" cy="347" r="1.8" fill="#fef3c7"/>
      <circle cx="156" cy="347" r="3.5" fill="#b45309"/>
      <circle cx="156" cy="347" r="1.8" fill="#fef3c7"/>
      <circle cx="176" cy="347" r="3.5" fill="#b45309"/>
      <circle cx="176" cy="347" r="1.8" fill="#fef3c7"/>
      <!-- Muzzle & Face -->
      <ellipse cx="135" cy="354" rx="4.5" ry="3" fill="#fef3c7"/>
      <circle cx="135" cy="353" r="1.2" fill="#78350f"/>
      <circle cx="131" cy="351" r="1" fill="#78350f"/>
      <circle cx="139" cy="351" r="1" fill="#78350f"/>
      <ellipse cx="166" cy="354" rx="4.5" ry="3" fill="#fef3c7"/>
      <circle cx="166" cy="353" r="1.2" fill="#78350f"/>
      <circle cx="162" cy="351" r="1" fill="#78350f"/>
      <circle cx="170" cy="351" r="1" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'shoes_ribbon_heels',
    name: 'ピンクリボンヒール',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- White Lace Ankle Socks -->
      <path d="M 128 340 Q 135 344 142 340" stroke="#ffffff" stroke-width="3" fill="none"/>
      <path d="M 158 340 Q 165 344 172 340" stroke="#ffffff" stroke-width="3" fill="none"/>
      <!-- Pink Heels -->
      <path d="M 125 348 C 125 344 144 344 144 348 L 145 358 L 124 358 Z" fill="#f472b6"/>
      <path d="M 156 348 C 156 344 175 344 175 348 L 176 358 L 155 358 Z" fill="#f472b6"/>
      <!-- Heel Lift -->
      <rect x="124" y="354" width="4" height="5" fill="#db2777"/>
      <rect x="155" y="354" width="4" height="5" fill="#db2777"/>
      <!-- Front Bows -->
      <circle cx="135" cy="349" r="2.5" fill="#ec4899"/>
      <polygon points="131,347 135,349 130,352" fill="#ec4899"/>
      <polygon points="139,347 135,349 140,352" fill="#ec4899"/>
      <circle cx="166" cy="349" r="2.5" fill="#ec4899"/>
      <polygon points="162,347 166,349 161,352" fill="#ec4899"/>
      <polygon points="170,347 166,349 171,352" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'shoes_mary_jane',
    name: 'クラシックメリージェーン',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
      <!-- Frilly White Socks -->
      <rect x="128" y="330" width="14" height="20" fill="#ffffff"/>
      <rect x="158" y="330" width="14" height="20" fill="#ffffff"/>
      <path d="M 127 330 Q 135 334 143 330" stroke="#fbcfe8" stroke-width="2" fill="none"/>
      <path d="M 157 330 Q 165 334 173 330" stroke="#fbcfe8" stroke-width="2" fill="none"/>
      <!-- Black Patent Leather Shoes -->
      <path d="M 125 348 C 125 343 144 343 144 348 L 145 358 C 145 360 124 360 124 358 Z" fill="#0f172a"/>
      <path d="M 156 348 C 156 343 175 343 175 348 L 176 358 C 176 360 155 360 155 358 Z" fill="#0f172a"/>
      <!-- Ankle Straps & Silver Buckle -->
      <line x1="127" y1="347" x2="143" y2="347" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="141" cy="347" r="1.5" fill="#e2e8f0"/>
      <line x1="157" y1="347" x2="173" y2="347" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="171" cy="347" r="1.5" fill="#e2e8f0"/>
      <!-- Gloss shine -->
      <ellipse cx="132" cy="354" rx="3" ry="1.5" fill="#475569" opacity="0.6"/>
      <ellipse cx="163" cy="354" rx="3" ry="1.5" fill="#475569" opacity="0.6"/>
    `,
  }),

  // ==========================================
  // HAIR FRONT (z-index: 90)
  // ==========================================
  new Item({
    id: 'hair_front_bangs_pink',
    name: 'ピンクストレートバング',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <!-- Top volume -->
      <path d="M 102 110 C 102 70 198 70 198 110 C 198 120 194 135 192 145 C 190 125 186 110 180 102 C 172 100 162 100 150 100 C 138 100 128 100 120 102 C 114 110 110 125 108 145 C 106 135 102 120 102 110 Z" fill="#f472b6"/>
      <!-- Bangs fringe -->
      <path d="M 118 100 L 118 112 L 126 104 L 134 113 L 144 103 L 154 113 L 164 104 L 172 112 L 172 100 Z" fill="#f472b6"/>
      <!-- Side tufts -->
      <path d="M 104 115 C 102 135 106 160 112 170 C 112 155 110 135 112 120 Z" fill="#f472b6"/>
      <path d="M 196 115 C 198 135 194 160 188 170 C 188 155 190 135 188 120 Z" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'hair_front_bangs_brown',
    name: 'ブラウントラッドバング',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <path d="M 102 110 C 102 70 198 70 198 110 C 198 120 194 135 192 145 C 190 125 186 110 180 102 C 172 100 162 100 150 100 C 138 100 128 100 120 102 C 114 110 110 125 108 145 C 106 135 102 120 102 110 Z" fill="#78350f"/>
      <path d="M 118 100 L 118 112 L 126 104 L 134 113 L 144 103 L 154 113 L 164 104 L 172 112 L 172 100 Z" fill="#78350f"/>
      <path d="M 104 115 C 102 135 106 160 112 170 C 112 155 110 135 112 120 Z" fill="#78350f"/>
      <path d="M 196 115 C 198 135 194 160 188 170 C 188 155 190 135 188 120 Z" fill="#78350f"/>
    `,
  }),
  new Item({
    id: 'hair_front_bangs_black',
    name: '黒髪姫カットバング',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <path d="M 102 110 C 102 68 198 68 198 110 C 198 120 192 140 190 150 C 188 125 186 108 180 102 C 172 100 162 100 150 100 C 138 100 128 100 120 102 C 114 108 112 125 110 150 C 108 140 102 120 102 110 Z" fill="#1e293b"/>
      <!-- Neat straight fringe -->
      <path d="M 116 100 L 116 112 Q 150 115 174 112 L 174 100 Z" fill="#1e293b"/>
      <!-- Hime side cuts -->
      <rect x="106" y="112" width="7" height="42" fill="#1e293b"/>
      <rect x="187" y="112" width="7" height="42" fill="#1e293b"/>
    `,
  }),
  new Item({
    id: 'hair_front_bangs_blonde',
    name: 'ブロンドふわふわバング',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <path d="M 102 110 C 102 68 198 68 198 110 C 198 120 194 135 192 145 C 190 125 186 110 180 102 C 172 100 162 100 150 100 C 138 100 128 100 120 102 C 114 110 110 125 108 145 C 106 135 102 120 102 110 Z" fill="#fde047"/>
      <path d="M 118 100 Q 130 114 138 106 Q 150 116 160 106 Q 168 114 174 100 Z" fill="#fde047"/>
      <path d="M 104 115 C 100 135 108 160 114 170 C 112 155 110 135 112 120 Z" fill="#fde047"/>
      <path d="M 196 115 C 200 135 192 160 186 170 C 188 155 190 135 188 120 Z" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'hair_front_nezuko',
    name: '黒髪サイドピン前髪（禰豆子風）',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <path d="M 102 110 C 102 68 198 68 198 110 C 198 120 194 135 192 145 C 190 125 186 110 180 102 C 172 100 162 100 150 100 C 138 100 128 100 120 102 C 114 110 110 125 108 145 C 106 135 102 120 102 110 Z" fill="#18181b"/>
      <path d="M 115 100 Q 140 118 165 105 L 165 98 Z" fill="#18181b"/>
      <rect x="156" y="98" width="10" height="4" rx="2" fill="#ec4899"/>
      <polygon points="154,96 160,100 154,104" fill="#f472b6"/>
      <polygon points="168,96 162,100 168,104" fill="#f472b6"/>
      <path d="M 104 115 C 100 135 106 165 110 175 C 110 155 108 135 112 120 Z" fill="#18181b"/>
      <path d="M 196 115 C 200 135 194 165 190 175 C 190 155 192 135 188 120 Z" fill="#18181b"/>
    `,
  }),
  new Item({
    id: 'hair_front_tanjiro',
    name: 'オールバック赤黒髪（炭治郎風）',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
      <!-- Swept Back Burgundy Hair (Tanjiro) -->
      <path d="M 102 110 C 102 65 198 65 198 110 C 198 120 190 135 188 140 C 185 115 178 100 170 95 C 160 90 150 90 140 95 C 132 100 125 115 122 140 C 120 135 102 120 102 110 Z" fill="#7f1d1d"/>
      <!-- Spiky forehead tufts -->
      <polygon points="135,92 140,75 146,92" fill="#7f1d1d"/>
      <polygon points="144,90 150,72 156,90" fill="#7f1d1d"/>
      <polygon points="154,92 160,76 165,92" fill="#7f1d1d"/>
      <!-- Forehead Scar mark -->
      <path d="M 160 95 Q 164 100 162 106 Q 167 103 168 108" stroke="#991b1b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    `,
  }),

  // ==========================================
  // ACCESSORIES (z-index: 100)
  // ==========================================
  new Item({
    id: 'acc_cat_ears',
    name: 'ねこみみカチューシャ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Headband -->
      <path d="M 106 100 C 115 78 185 78 194 100" stroke="#1e293b" stroke-width="3.5" fill="none"/>
      <!-- Left Cat Ear -->
      <polygon points="112,85 118,52 135,76" fill="#1e293b"/>
      <polygon points="116,80 120,60 130,76" fill="#f472b6"/>
      <!-- Right Cat Ear -->
      <polygon points="188,85 182,52 165,76" fill="#1e293b"/>
      <polygon points="184,80 180,60 170,76" fill="#f472b6"/>
    `,
  }),
  new Item({
    id: 'acc_ribbon_red',
    name: 'おっきな赤リボン',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Center Knot -->
      <circle cx="150" cy="74" r="5.5" fill="#991b1b"/>
      <!-- Left Bow Wing -->
      <path d="M 150 74 C 135 55 105 50 115 75 C 120 85 140 80 150 74 Z" fill="#dc2626"/>
      <!-- Right Bow Wing -->
      <path d="M 150 74 C 165 55 195 50 185 75 C 180 85 160 80 150 74 Z" fill="#dc2626"/>
      <!-- Tails -->
      <path d="M 148 76 L 138 95 L 144 94 L 149 80 Z" fill="#b91c1c"/>
      <path d="M 152 76 L 162 95 L 156 94 L 151 80 Z" fill="#b91c1c"/>
    `,
  }),
  new Item({
    id: 'acc_glasses_round',
    name: 'まるメガネ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Left Lens Frame -->
      <circle cx="135" cy="114" r="12" stroke="#d97706" stroke-width="2.2" fill="none"/>
      <!-- Right Lens Frame -->
      <circle cx="165" cy="114" r="12" stroke="#d97706" stroke-width="2.2" fill="none"/>
      <!-- Bridge -->
      <path d="M 147 114 Q 150 111 153 114" stroke="#d97706" stroke-width="2.2" fill="none"/>
      <!-- Temples -->
      <line x1="123" y1="114" x2="108" y2="110" stroke="#d97706" stroke-width="1.8"/>
      <line x1="177" y1="114" x2="192" y2="110" stroke="#d97706" stroke-width="1.8"/>
    `,
  }),
  new Item({
    id: 'acc_witch_hat',
    name: 'まほうつかいのぼうし',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Wide Brim -->
      <ellipse cx="150" cy="80" rx="55" ry="15" fill="#312e81"/>
      <!-- Cone Peak -->
      <path d="M 115 80 Q 150 35 170 20 Q 155 45 185 80 Z" fill="#312e81"/>
      <!-- Gold Belt & Star Buckle -->
      <path d="M 125 78 Q 150 83 175 78" stroke="#f59e0b" stroke-width="5" fill="none"/>
      <polygon points="150,75 152,79 156,80 153,83 154,87 150,85 146,87 147,83 144,80 148,79" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'acc_beret_cream',
    name: 'クリームベレーぼう',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Beret Cap tilted to right -->
      <ellipse cx="155" cy="72" rx="46" ry="18" fill="#fef3c7" stroke="#fde68a" stroke-width="1.5"/>
      <path d="M 120 78 Q 155 90 190 75 Z" fill="#fde68a"/>
      <!-- Stalk at top -->
      <rect x="154" y="50" width="3" height="6" rx="1" fill="#d97706"/>
    `,
  }),
  new Item({
    id: 'acc_bamboo_muzzle',
    name: '竹の口枷（禰豆子風）',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Bamboo tube across mouth (Nezuko) -->
      <rect x="136" y="127" width="28" height="10" rx="4" fill="#65a30d" stroke="#3f6212" stroke-width="1"/>
      <line x1="142" y1="127" x2="142" y2="137" stroke="#3f6212" stroke-width="1.5"/>
      <line x1="158" y1="127" x2="158" y2="137" stroke="#3f6212" stroke-width="1.5"/>
      <line x1="112" y1="130" x2="136" y2="132" stroke="#dc2626" stroke-width="2"/>
      <line x1="164" y1="132" x2="188" y2="130" stroke="#dc2626" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'acc_butterfly_shinobu',
    name: '紫の蝶髪飾り（しのぶ風）',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Big Purple Butterfly Hairpin (Shinobu) on top right of head -->
      <g transform="translate(170, 75)">
        <path d="M 0 10 C 5 0 25 -5 20 15 C 18 20 5 15 0 10 Z" fill="#a855f7"/>
        <path d="M 0 10 C 8 15 20 28 12 30 C 5 30 2 18 0 10 Z" fill="#c084fc"/>
        <path d="M 15 2 C 22 2 20 12 16 12 Z" fill="#2dd4bf"/>
        <ellipse cx="0" cy="12" rx="2" ry="6" fill="#1e1b4b"/>
      </g>
    `,
  }),
  new Item({
    id: 'acc_earrings_hanafuda',
    name: '日輪の花札ピアス（炭治郎風）',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Left Earring -->
      <line x1="105" y1="125" x2="105" y2="133" stroke="#94a3b8" stroke-width="1"/>
      <rect x="101" y="133" width="8" height="15" fill="#ffffff" stroke="#0f172a" stroke-width="0.8"/>
      <circle cx="105" cy="138" r="2.5" fill="#dc2626"/>
      <line x1="102" y1="145" x2="108" y2="145" stroke="#0f172a" stroke-width="0.8"/>
      <!-- Right Earring -->
      <line x1="195" y1="125" x2="195" y2="133" stroke="#94a3b8" stroke-width="1"/>
      <rect x="191" y="133" width="8" height="15" fill="#ffffff" stroke="#0f172a" stroke-width="0.8"/>
      <circle cx="195" cy="138" r="2.5" fill="#dc2626"/>
      <line x1="192" y1="145" x2="198" y2="145" stroke="#0f172a" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'acc_bunny_ears',
    name: 'うさぎのたれ耳カチューシャ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Headband -->
      <path d="M 110 98 C 120 78 180 78 190 98" stroke="#fbcfe8" stroke-width="3.5" fill="none"/>
      <!-- Left Floppy Ear -->
      <path d="M 115 85 C 95 65 75 80 80 110 C 85 115 95 110 98 98 Z" fill="#ffffff" stroke="#fce7f3" stroke-width="1"/>
      <path d="M 110 86 C 96 73 83 83 87 104 C 89 107 94 105 97 96 Z" fill="#f472b6" opacity="0.6"/>
      <circle cx="112" cy="85" r="3" fill="#ec4899"/>
      <!-- Right Floppy Ear -->
      <path d="M 185 85 C 205 65 225 80 220 110 C 215 115 205 110 202 98 Z" fill="#ffffff" stroke="#fce7f3" stroke-width="1"/>
      <path d="M 190 86 C 204 73 217 83 213 104 C 211 107 206 105 203 96 Z" fill="#f472b6" opacity="0.6"/>
      <circle cx="188" cy="85" r="3" fill="#ec4899"/>
    `,
  }),
  new Item({
    id: 'acc_angel_wings',
    name: 'ふわふわ天使のはね',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Left Wing -->
      <path d="M 120 175 C 90 150 60 140 40 160 C 45 180 65 195 85 205 C 105 200 115 190 120 185 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1.5" opacity="0.95"/>
      <path d="M 60 165 C 75 178 95 188 115 188" stroke="#cbd5e1" stroke-width="1" fill="none"/>
      <!-- Right Wing -->
      <path d="M 180 175 C 210 150 240 140 260 160 C 255 180 235 195 215 205 C 195 200 185 190 180 185 Z" fill="#ffffff" stroke="#e0f2fe" stroke-width="1.5" opacity="0.95"/>
      <path d="M 240 165 C 225 178 205 188 185 188" stroke="#cbd5e1" stroke-width="1" fill="none"/>
    `,
  }),
  new Item({
    id: 'acc_tiara_sparkle',
    name: 'きらきらティアラ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Sparkle Tiara -->
      <!-- Tiara Band -->
      <path d="M 132 84 Q 150 80 168 84" stroke="#e2e8f0" stroke-width="2.5" fill="none"/>
      <!-- Tiara Peaks -->
      <polygon points="150,68 146,81 154,81" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <polygon points="142,73 138,82 145,82" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <polygon points="158,73 155,82 162,82" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <polygon points="135,78 132,83 138,83" fill="#f8fafc"/>
      <polygon points="165,78 162,83 168,83" fill="#f8fafc"/>
      <!-- Center Heart / Star Gem -->
      <circle cx="150" cy="74" r="3" fill="#f472b6"/>
      <circle cx="150" cy="74" r="1.5" fill="#ffffff"/>
      <circle cx="142" cy="77" r="1.8" fill="#67e8f9"/>
      <circle cx="158" cy="77" r="1.8" fill="#67e8f9"/>
    `,
  }),
  new Item({
    id: 'acc_heart_sunglasses',
    name: 'ハートサングラス',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Pink Heart Sunglasses -->
      <!-- Left Heart -->
      <path d="M 135 120 C 135 120 122 112 122 105 C 122 100 128 98 135 106 C 142 98 148 100 148 105 C 148 112 135 120 135 120 Z" fill="#ec4899" opacity="0.85" stroke="#be123c" stroke-width="1.5"/>
      <!-- Right Heart -->
      <path d="M 165 120 C 165 120 152 112 152 105 C 152 100 158 98 165 106 C 172 98 178 100 178 105 C 178 112 165 120 165 120 Z" fill="#ec4899" opacity="0.85" stroke="#be123c" stroke-width="1.5"/>
      <!-- Center Bridge & Temples -->
      <line x1="145" y1="108" x2="155" y2="108" stroke="#be123c" stroke-width="2"/>
      <line x1="122" y1="106" x2="108" y2="104" stroke="#be123c" stroke-width="2"/>
      <line x1="178" y1="106" x2="192" y2="104" stroke="#be123c" stroke-width="2"/>
      <!-- Glare reflection -->
      <line x1="126" y1="104" x2="130" y2="110" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="156" y1="104" x2="160" y2="110" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
    `,
  }),
  new Item({
    id: 'acc_panda_ears',
    name: 'パンダ耳カチューシャ',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Panda Ears Headband -->
      <path d="M 108 98 C 118 78 182 78 192 98" stroke="#18181b" stroke-width="3.5" fill="none"/>
      <!-- Left Ear -->
      <ellipse cx="118" cy="74" rx="14" ry="13" fill="#18181b"/>
      <ellipse cx="118" cy="74" rx="8" ry="7" fill="#f472b6" opacity="0.6"/>
      <!-- Right Ear -->
      <ellipse cx="182" cy="74" rx="14" ry="13" fill="#18181b"/>
      <ellipse cx="182" cy="74" rx="8" ry="7" fill="#f472b6" opacity="0.6"/>
      <!-- Pink Mini Bow on right ear -->
      <circle cx="174" cy="80" r="2.5" fill="#f43f5e"/>
      <polygon points="170,78 174,80 169,84" fill="#f43f5e"/>
      <polygon points="178,78 174,80 179,84" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'acc_halo_angel',
    name: '天使の光の輪',
    slotCategory: SlotCategory.ACCESSORY,
    svgContent: `
      <!-- Glowing Angel Halo -->
      <defs>
        <linearGradient id="haloGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#fde047"/>
        </linearGradient>
      </defs>
      <!-- Halo Ring -->
      <ellipse cx="150" cy="56" rx="34" ry="10" fill="none" stroke="url(#haloGlow)" stroke-width="5"/>
      <ellipse cx="150" cy="56" rx="34" ry="10" fill="none" stroke="#ffffff" stroke-width="1.8"/>
      <!-- Floating Sparkles -->
      <circle cx="120" cy="52" r="2" fill="#fef08a"/>
      <circle cx="180" cy="52" r="2" fill="#fef08a"/>
      <polygon points="150,42 152,46 156,47 152,49 150,53 148,49 144,47 148,46" fill="#ffffff"/>
    `,
  }),
];

export function createDefaultItemRepository(): InMemoryItemRepository {
  return new InMemoryItemRepository(ALL_ITEMS);
}
