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
];

export function createDefaultItemRepository(): InMemoryItemRepository {
  return new InMemoryItemRepository(ALL_ITEMS);
}
