import { Item } from '../../domain/models/Item';
import { SlotCategory } from '../../domain/models/SlotCategory';

export const EXTRA_CUTE_ITEMS: readonly Item[] = [
  new Item({
    id: 'hair_front_precure_wonderful_curls',
    name: 'わんだふるピンクカール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Precure Wonderful: Cute pink center bangs with side curl ribbons -->
  <path d="M 115 102 C 120 75 140 70 150 70 C 160 70 180 75 185 102 C 175 105 160 98 150 110 C 140 98 125 105 115 102 Z" fill="#fda4af"/>
  <path d="M 142 72 Q 150 100 148 112 Q 152 100 158 72" fill="#fb7185"/>
  <!-- Side wavy ringlets -->
  <path d="M 112 100 C 105 115 106 138 114 148 C 117 142 116 125 120 110 Z" fill="#fda4af"/>
  <path d="M 188 100 C 195 115 194 138 186 148 C 183 142 184 125 180 110 Z" fill="#fda4af"/>
  <!-- Golden dog hair pin -->
  <circle cx="122" cy="92" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
  <circle cx="122" cy="92" r="2.5" fill="#fef08a"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_friendy_straight',
    name: 'フレンディエアリーシースルー前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Precure Friendy: Soft brown see-through bangs with gentle curves -->
  <path d="M 118 100 C 125 76 142 70 150 70 C 158 70 175 76 182 100 C 172 102 165 96 158 106 C 152 95 148 95 142 106 C 135 96 128 102 118 100 Z" fill="#b45309"/>
  <!-- Airy strands -->
  <path d="M 132 78 Q 136 98 134 105 M 164 78 Q 162 98 166 105" stroke="#78350f" stroke-width="1.2" fill="none"/>
  <!-- Sweet mint hair ribbon -->
  <path d="M 174 88 C 168 84 168 94 174 92 C 180 94 180 84 174 88 Z" fill="#6ee7b7" stroke="#059669" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_nyammy_cat',
    name: 'ニャミー気品キャット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Precure Nyammy: Silver-lavender bangs with cat silhouette peaks -->
  <path d="M 114 98 C 120 72 135 68 150 68 C 165 68 180 72 186 98 C 176 96 166 108 150 102 C 134 108 124 96 114 98 Z" fill="#e0e7ff"/>
  <!-- Elegant side forelocks -->
  <path d="M 112 95 C 104 112 105 135 110 152 C 114 140 115 120 118 105 Z" fill="#c7d2fe"/>
  <path d="M 188 95 C 196 112 195 135 190 152 C 186 140 185 120 182 105 Z" fill="#c7d2fe"/>
  <!-- Pearl cat jewel clip -->
  <circle cx="178" cy="88" r="4" fill="#ffffff" stroke="#a5b4fc" stroke-width="1"/>
  <polygon points="175,85 178,81 181,85" fill="#818cf8"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_lillian_curtain',
    name: 'リリアンエメラルドカール前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Precure Lillian: Teal-mint bangs with curved curtain sweep -->
  <path d="M 116 100 C 122 74 138 68 150 68 C 162 68 178 74 184 100 C 174 104 162 94 150 105 C 138 94 126 104 116 100 Z" fill="#5eead4"/>
  <path d="M 114 98 Q 106 125 115 145 Q 119 125 119 104" fill="#2dd4bf"/>
  <path d="M 186 98 Q 194 125 185 145 Q 181 125 181 104" fill="#2dd4bf"/>
  <!-- Small knitting wool ball pin -->
  <circle cx="125" cy="86" r="4.5" fill="#f472b6" stroke="#db2777" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_sky_hero',
    name: 'スカイブルー勇気のアホ毛前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Hirogaru Sky: Heroic sky-blue bangs with cute bouncy ahoge -->
  <path d="M 115 102 C 120 72 138 68 150 68 C 162 68 180 72 185 102 C 172 100 162 106 150 98 C 138 106 128 100 115 102 Z" fill="#38bdf8"/>
  <!-- Hero Ahoge -->
  <path d="M 150 68 C 148 45 162 42 165 48 C 168 56 154 58 152 68 Z" fill="#0284c7"/>
  <!-- Sky side tufts -->
  <path d="M 114 96 L 106 126 L 115 122 Z" fill="#0284c7"/>
  <path d="M 186 96 L 194 126 L 185 122 Z" fill="#0284c7"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_prism_soft',
    name: 'プリズムふんわりマシュマロ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Cure Prism: Feathered soft pastel-pink bangs -->
  <path d="M 116 102 C 122 74 136 68 150 68 C 164 68 178 74 184 102 C 176 104 168 96 160 106 C 153 96 147 96 140 106 C 132 96 124 104 116 102 Z" fill="#fbcfe8"/>
  <!-- Feather highlights -->
  <path d="M 136 78 Q 140 96 144 92 M 156 78 Q 160 96 164 92" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <!-- Wing hairpin -->
  <path d="M 174 84 C 180 80 186 86 182 90 C 188 92 186 98 178 94 Z" fill="#ffffff" stroke="#f472b6" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'hair_front_precure_butterfly_gal',
    name: 'バタフライお姉さんアシメ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Cure Butterfly: Asymmetric stylish vibrant magenta bangs -->
  <path d="M 114 100 C 120 72 136 68 150 68 C 164 68 182 72 186 100 C 178 95 168 108 154 96 C 142 108 126 108 114 100 Z" fill="#e11d48"/>
  <!-- Chic long side lock sweeping across cheek -->
  <path d="M 182 92 C 192 110 190 138 180 152 C 178 140 182 120 178 102 Z" fill="#be123c"/>
  <!-- Yellow butterfly hairpin -->
  <path d="M 126 82 C 122 76 118 84 124 88 C 118 92 122 98 128 92 Z" fill="#facc15" stroke="#ca8a04" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'hair_front_aipri_himari_sparkle',
    name: 'アイプリひまりピンクぱっつん前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Himitsu no AiPri: Himari's bright coral-pink neat idol bangs with star clip -->
  <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 175 105 164 104 150 105 C 136 104 125 105 115 100 Z" fill="#ff7da7"/>
  <!-- Gloss shine band -->
  <path d="M 125 86 Q 150 92 175 86" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.8"/>
  <!-- Sparkling Star Hairpin -->
  <polygon points="126,82 128,87 133,88 129,91 130,96 126,93 122,96 123,91 119,88 124,87" fill="#fbbf24"/>
    `,
  }),
  new Item({
    id: 'hair_front_aipri_mitsuki_cool',
    name: 'アイプリみつきクールブルー前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- AiPri Mitsuki: Deep navy sleek bangs with side framing locks -->
  <path d="M 116 98 C 122 70 138 66 150 66 C 162 66 178 70 184 98 C 174 102 165 94 152 104 C 140 94 128 102 116 98 Z" fill="#1e3a8a"/>
  <!-- Sleek side strands -->
  <path d="M 114 96 L 108 140 L 116 135 Z" fill="#172554"/>
  <path d="M 186 96 L 192 140 L 184 135 Z" fill="#172554"/>
  <!-- Silver music note clip -->
  <circle cx="178" cy="85" r="3" fill="#cbd5e1"/>
  <path d="M 181 85 L 181 76 L 186 78" stroke="#cbd5e1" stroke-width="1.2" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_aipri_tsumugi_idol',
    name: 'アイプリつむぎミルキーイエロー前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- AiPri Tsumugi: Fluffy golden blonde bangs with daisy flower -->
  <path d="M 115 102 C 120 72 138 68 150 68 C 162 68 180 72 185 102 C 176 104 166 98 150 106 C 134 98 124 104 115 102 Z" fill="#fde047"/>
  <!-- Daisy flower clip -->
  <circle cx="124" cy="86" r="3" fill="#fbbf24"/>
  <circle cx="120" cy="86" r="2" fill="#ffffff"/>
  <circle cx="128" cy="86" r="2" fill="#ffffff"/>
  <circle cx="124" cy="82" r="2" fill="#ffffff"/>
  <circle cx="124" cy="90" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'hair_front_chiikawa_fluffy',
    name: 'ちいかわホワイトもふもふ前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Chiikawa Style: Pure white rounded fluffy fringe with cute bear tufts -->
  <path d="M 114 100 C 118 70 135 66 150 66 C 165 66 182 70 186 100 C 176 104 166 96 150 102 C 134 96 124 104 114 100 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <!-- Cute little ear tufts on top of forehead -->
  <path d="M 122 72 C 118 64 126 60 130 68 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <path d="M 178 72 C 182 64 174 60 170 68 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Pink ear insides -->
  <ellipse cx="125" cy="67" rx="2" ry="3" fill="#fbcfe8"/>
  <ellipse cx="175" cy="67" rx="2" ry="3" fill="#fbcfe8"/>
    `,
  }),
  new Item({
    id: 'hair_front_hachiware_blue_part',
    name: 'ハチワレブルー分け目カット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Hachiware Style: Inverted V-part blue bangs with white forehead center -->
  <path d="M 112 102 C 116 72 130 68 142 68 L 140 92 C 132 96 122 104 112 102 Z" fill="#38bdf8"/>
  <path d="M 188 102 C 184 72 170 68 158 68 L 160 92 C 168 96 178 104 188 102 Z" fill="#38bdf8"/>
  <!-- White peak in center -->
  <path d="M 140 68 L 150 68 L 160 68 L 150 96 Z" fill="#f8fafc"/>
  <!-- Cat ear tufts -->
  <polygon points="118,72 124,58 132,68" fill="#38bdf8"/>
  <polygon points="182,72 176,58 168,68" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'hair_front_usagi_bunny_ears_bangs',
    name: 'うさぎイエローぴょんぴょん前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Usagi Style: Energetic lemon-yellow bangs with long perky bunny ear tufts -->
  <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 176 104 164 96 150 102 C 136 96 124 104 115 100 Z" fill="#fef08a"/>
  <!-- Long upright bunny ear tufts -->
  <path d="M 126 72 C 120 45 132 38 136 50 C 138 60 134 68 132 72 Z" fill="#fde047" stroke="#eab308" stroke-width="0.8"/>
  <path d="M 174 72 C 180 45 168 38 164 50 C 162 60 166 68 168 72 Z" fill="#fde047" stroke="#eab308" stroke-width="0.8"/>
  <!-- Pink inner ears -->
  <ellipse cx="129" cy="54" rx="2" ry="7" fill="#fbcfe8"/>
  <ellipse cx="171" cy="54" rx="2" ry="7" fill="#fbcfe8"/>
    `,
  }),
  new Item({
    id: 'hair_front_momonga_curly_puff',
    name: 'モモンガふわふわボリューミー前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Momonga Style: Soft lilac fluffy curly bangs with cute side curls -->
  <path d="M 114 100 C 118 70 136 65 150 65 C 164 65 182 70 186 100 C 178 106 166 96 150 104 C 134 96 122 106 114 100 Z" fill="#c4b5fd"/>
  <!-- Fluffy curls on forehead -->
  <ellipse cx="134" cy="92" rx="10" ry="7" fill="#ddd6fe"/>
  <ellipse cx="166" cy="92" rx="10" ry="7" fill="#ddd6fe"/>
  <circle cx="120" cy="72" r="7" fill="#c4b5fd"/>
  <circle cx="180" cy="72" r="7" fill="#c4b5fd"/>
    `,
  }),
  new Item({
    id: 'hair_front_sumikko_neko_calico',
    name: 'すみっコねこ三毛猫ショート前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Sumikko Neko: Warm cream bangs with calico patches -->
  <path d="M 116 100 C 122 72 138 68 150 68 C 162 68 178 72 184 100 C 174 104 165 96 150 102 C 135 96 126 104 116 100 Z" fill="#fef3c7"/>
  <!-- Brown calico patch on left -->
  <path d="M 120 80 C 122 72 134 72 132 85 C 126 88 120 86 120 80 Z" fill="#d97706"/>
  <!-- Cute cat ears -->
  <polygon points="120,74 126,62 134,70" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.8"/>
  <polygon points="180,74 174,62 166,70" fill="#fef3c7" stroke="#f59e0b" stroke-width="0.8"/>
    `,
  }),
  new Item({
    id: 'hair_front_sumikko_tokage_aqua',
    name: 'すみっコとかげアクアしずく前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Sumikko Tokage: Soft pastel aqua droplet bangs -->
  <path d="M 116 100 C 122 72 138 68 150 68 C 162 68 178 72 184 100 C 175 104 164 96 150 104 C 136 96 125 104 116 100 Z" fill="#a5f3fc"/>
  <ellipse cx="140" cy="88" rx="4" ry="2" fill="#ffffff" opacity="0.8"/>
  <path d="M 148 68 Q 150 56 152 68" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_detective_kid_side',
    name: '怪盗シルクハット前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Detective / Kid Style: Cool dark-navy parted anime bangs with sharp forelock -->
  <path d="M 116 98 C 122 70 138 66 150 66 C 162 66 178 70 184 98 C 175 100 168 94 156 108 C 146 95 138 106 128 98 C 120 104 116 98 116 98 Z" fill="#1e293b"/>
  <polygon points="146,74 152,106 155,74" fill="#334155"/>
  <line x1="168" y1="90" x2="174" y2="110" stroke="#cbd5e1" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'hair_front_kimetsu_mitsuri_braids',
    name: '甘露寺みつり桜餅前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Mitsuri: Sakura pink bangs with lime green tips and center cross -->
  <path d="M 115 100 C 122 72 138 68 150 68 C 162 68 178 72 185 100 C 176 104 165 96 150 106 C 135 96 124 104 115 100 Z" fill="#f472b6"/>
  <path d="M 115 100 C 124 104 135 96 150 106 C 165 96 176 104 185 100 L 182 108 C 165 104 150 114 135 104 Z" fill="#84cc16"/>
  <path d="M 144 74 Q 153 96 148 106" stroke="#fb7185" stroke-width="2" fill="none"/>
  <path d="M 156 74 Q 147 96 152 106" stroke="#fb7185" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_front_kimetsu_shinobu_butterfly',
    name: 'しのぶ夜紫センター分け前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Shinobu: Jet black center-parted bangs fading into purple with side tendrils -->
  <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 175 100 166 94 154 102 C 146 102 135 94 125 100 Z" fill="#1e1b4b"/>
  <line x1="150" y1="66" x2="150" y2="88" stroke="#4c1d95" stroke-width="1.5"/>
  <path d="M 114 96 L 110 135 L 118 128 Z" fill="#9333ea"/>
  <path d="M 186 96 L 190 135 L 182 128 Z" fill="#9333ea"/>
    `,
  }),
  new Item({
    id: 'hair_front_kimetsu_kanao_ponytail_bangs',
    name: 'カナヲぱっつん横流し前髪',
    slotCategory: SlotCategory.HAIR_FRONT,
    svgContent: `
<!-- Kanao: Straight blunt bangs with soft angle and cute butterfly clip -->
  <path d="M 115 98 C 122 70 138 66 150 66 C 162 66 178 70 185 98 C 176 102 165 101 150 101 C 135 101 125 102 115 98 Z" fill="#18181b"/>
  <path d="M 184 96 C 190 115 192 140 186 155 C 182 142 184 120 180 102 Z" fill="#27272a"/>
  <path d="M 184 82 C 180 76 176 84 182 88 C 176 92 180 98 186 92 Z" fill="#f472b6"/>
  <path d="M 186 82 C 190 76 194 84 188 88 C 194 92 190 98 184 92 Z" fill="#6ee7b7"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_wonderful_twintail',
    name: 'わんだふる大盛りピンクロングツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Precure Wonderful: Big voluminous curly pink twin tails -->
  <path d="M 110 110 C 95 140 90 200 95 260 C 110 270 140 275 150 275 C 160 275 190 270 205 260 C 210 200 205 140 190 110 Z" fill="#fda4af"/>
  <path d="M 105 105 C 75 120 50 170 52 230 C 54 270 70 310 85 335 C 90 320 80 280 82 230 C 85 180 100 135 110 120 Z" fill="#f43f5e"/>
  <path d="M 195 105 C 225 120 250 170 248 230 C 246 270 230 310 215 335 C 210 320 220 280 218 230 C 215 180 200 135 190 120 Z" fill="#f43f5e"/>
  <circle cx="106" cy="112" r="5" fill="#facc15"/>
  <circle cx="194" cy="112" r="5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_friendy_pony',
    name: 'フレンディゆるふわサイドポニー',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Precure Friendy: Fluffy warm brown side ponytail -->
  <path d="M 112 110 C 98 140 95 190 100 240 C 115 250 140 255 150 255 C 160 255 185 250 200 240 C 205 190 202 140 188 110 Z" fill="#b45309"/>
  <path d="M 190 110 C 220 125 245 165 240 220 C 235 270 220 315 205 345 C 205 320 218 280 220 230 C 222 180 205 140 185 125 Z" fill="#92400e"/>
  <ellipse cx="192" cy="115" rx="7" ry="5" fill="#6ee7b7" stroke="#059669" stroke-width="1"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_nyammy_wave',
    name: 'ニャミープラチナロングウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Precure Nyammy: Regal platinum silver-lavender flowing long waves -->
  <path d="M 110 105 C 80 150 70 230 75 320 C 90 335 120 330 150 330 C 180 330 210 335 225 320 C 230 230 220 150 190 105 Z" fill="#e0e7ff"/>
  <path d="M 85 200 Q 75 260 85 315 M 215 200 Q 225 260 215 315" stroke="#c7d2fe" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_lillian_ringlets',
    name: 'リリアンティール縦ロールツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Precure Lillian: Teal-mint princess vertical drill ringlets -->
  <path d="M 112 110 C 100 140 98 200 102 260 C 115 270 140 275 150 275 C 160 275 185 270 198 260 C 202 200 200 140 188 110 Z" fill="#5eead4"/>
  <path d="M 104 115 C 80 130 68 175 72 230 C 74 275 66 315 76 345 C 86 335 84 290 82 245 C 80 190 95 145 106 125 Z" fill="#2dd4bf"/>
  <path d="M 196 115 C 220 130 232 175 228 230 C 226 275 234 315 224 345 C 214 335 216 290 218 245 C 220 190 205 145 194 125 Z" fill="#2dd4bf"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_sky_super_twin',
    name: 'スカイブルー超ロンググラデツイン',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Cure Sky: Very long sky-blue into magenta gradient super twintails -->
  <path d="M 110 105 C 96 140 94 200 98 270 C 115 280 140 285 150 285 C 160 285 185 280 202 270 C 206 200 204 140 190 105 Z" fill="#38bdf8"/>
  <path d="M 102 110 C 65 140 40 210 42 285 C 44 335 60 365 72 375 C 75 350 62 310 65 260 C 70 200 90 145 104 120 Z" fill="#0ea5e9"/>
  <path d="M 46 320 C 52 350 64 370 72 375 C 68 360 62 340 58 320 Z" fill="#f43f5e"/>
  <path d="M 198 110 C 235 140 260 210 258 285 C 256 335 240 365 228 375 C 225 350 238 310 235 260 C 230 200 210 145 196 120 Z" fill="#0ea5e9"/>
  <path d="M 254 320 C 248 350 236 370 228 375 C 232 360 238 340 242 320 Z" fill="#f43f5e"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_prism_halfup',
    name: 'プリズムエンジェルハーフアップ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Cure Prism: Pastel pink soft half-up flowing waves -->
  <path d="M 108 105 C 85 150 78 220 84 310 C 98 325 125 325 150 325 C 175 325 202 325 216 310 C 222 220 215 150 192 105 Z" fill="#fbcfe8"/>
  <ellipse cx="150" cy="98" rx="16" ry="12" fill="#f472b6"/>
  <circle cx="150" cy="98" r="5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'hair_back_precure_butterfly_long',
    name: 'バタフライグラデーションウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Cure Butterfly: Magenta into sunset yellow gradient beach waves -->
  <path d="M 108 105 C 80 150 72 230 76 325 C 92 340 120 340 150 340 C 180 340 208 340 224 325 C 228 230 220 150 192 105 Z" fill="#e11d48"/>
  <path d="M 76 300 C 85 335 120 340 150 340 C 180 340 215 335 224 300 C 218 330 185 336 150 336 C 115 336 82 330 76 300 Z" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_aipri_himari_twin',
    name: 'アイプリひまりスターライトツインテール',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- AiPri Himari: Coral-pink high bouncy twintails with star accessories -->
  <path d="M 112 110 C 98 140 95 190 100 250 C 115 260 140 265 150 265 C 160 265 185 260 200 250 C 205 190 202 140 188 110 Z" fill="#ff7da7"/>
  <path d="M 106 100 C 70 115 48 165 52 230 C 56 280 75 320 88 335 C 90 310 78 260 82 220 C 85 170 100 130 110 110 Z" fill="#fb7185"/>
  <path d="M 194 100 C 230 115 252 165 248 230 C 244 280 225 320 212 335 C 210 310 222 260 218 220 C 215 170 200 130 190 110 Z" fill="#fb7185"/>
  <polygon points="106,96 108,101 113,102 109,105 110,110 106,107 102,110 103,105 99,102 104,101" fill="#facc15"/>
  <polygon points="194,96 196,101 201,102 197,105 198,110 194,107 190,110 191,105 187,102 192,101" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_aipri_mitsuki_stream',
    name: 'アイプリみつきシルキーストレートロング',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- AiPri Mitsuki: Deep midnight blue silky straight floor-length hair -->
  <path d="M 110 105 C 88 150 82 230 84 340 C 98 355 125 355 150 355 C 175 355 202 355 216 340 C 218 230 212 150 190 105 Z" fill="#1e3a8a"/>
  <path d="M 96 180 Q 94 260 98 320 M 204 180 Q 206 260 202 320" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'hair_back_aipri_tsumugi_fluffy',
    name: 'アイプリつむぎプリンセスカール',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- AiPri Tsumugi: Blonde voluminous royal curls -->
  <path d="M 108 105 C 80 145 74 210 78 290 C 92 315 120 320 150 320 C 180 320 208 315 222 290 C 226 210 220 145 192 105 Z" fill="#fde047"/>
  <circle cx="90" cy="270" r="16" fill="#facc15"/>
  <circle cx="210" cy="270" r="16" fill="#facc15"/>
  <circle cx="150" cy="300" r="18" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_chiikawa_white_bob',
    name: 'ちいかわマシュマロショートボブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Chiikawa: Pure white rounded bob with sweet curves -->
  <path d="M 110 105 C 90 135 86 180 94 220 C 110 235 140 240 150 240 C 160 240 190 235 206 220 C 214 180 210 135 190 105 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <ellipse cx="150" cy="225" rx="35" ry="12" fill="#f1f5f9"/>
    `,
  }),
  new Item({
    id: 'hair_back_hachiware_soft_bob',
    name: 'ハチワレふんわりブルーボブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Hachiware: Sky blue soft layered bob with gentle curled-in tips -->
  <path d="M 110 105 C 88 140 85 190 92 235 C 108 248 138 252 150 252 C 162 252 192 248 208 235 C 215 190 212 140 190 105 Z" fill="#38bdf8"/>
  <path d="M 96 220 Q 150 258 204 220" stroke="#0284c7" stroke-width="3" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_usagi_super_high_twins',
    name: 'うさぎぴょんぴょんハイトリプルウェーブ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Usagi: Super high energetic yellow bouncing twintails -->
  <path d="M 112 110 C 98 140 96 190 100 240 C 115 250 140 255 150 255 C 160 255 185 250 200 240 C 204 190 202 140 188 110 Z" fill="#fde047"/>
  <path d="M 104 95 C 60 70 42 120 48 190 C 54 240 78 280 92 290 C 90 260 72 220 74 180 C 76 130 95 110 108 105 Z" fill="#facc15"/>
  <path d="M 196 95 C 240 70 258 120 252 190 C 246 240 222 280 208 290 C 210 260 228 220 226 180 C 224 130 205 110 192 105 Z" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'hair_back_momonga_mega_tail',
    name: 'モモンガもこもこメガテール',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Momonga: Giant fluffy lilac cloud back tail hair -->
  <path d="M 110 105 C 95 135 92 180 98 220 C 112 230 140 235 150 235 C 160 235 188 230 202 220 C 208 180 205 135 190 105 Z" fill="#ddd6fe"/>
  <circle cx="85" cy="220" r="28" fill="#c4b5fd"/>
  <circle cx="215" cy="220" r="28" fill="#c4b5fd"/>
  <circle cx="150" cy="265" r="32" fill="#c4b5fd"/>
  <circle cx="110" cy="250" r="24" fill="#ddd6fe"/>
  <circle cx="190" cy="250" r="24" fill="#ddd6fe"/>
    `,
  }),
  new Item({
    id: 'hair_back_sumikko_shirokuma_bun',
    name: 'すみっコしろくまおだんごヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Sumikko Shirokuma: Clean white tidy bob with cute round bear buns -->
  <path d="M 112 105 C 95 135 92 185 98 230 C 112 240 140 245 150 245 C 160 245 188 240 202 230 C 208 185 205 135 188 105 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <circle cx="108" cy="85" r="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <circle cx="192" cy="85" r="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <ellipse cx="108" cy="85" rx="7" ry="6" fill="#fbcfe8"/>
  <ellipse cx="192" cy="85" rx="7" ry="6" fill="#fbcfe8"/>
    `,
  }),
  new Item({
    id: 'hair_back_sumikko_tokage_wave',
    name: 'すみっコとかげせせらぎアクアロング',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Sumikko Tokage: Soft pastel aqua cascading wavy back hair -->
  <path d="M 110 105 C 85 145 78 220 84 315 C 98 330 125 335 150 335 C 175 335 202 330 216 315 C 222 220 215 145 190 105 Z" fill="#a5f3fc"/>
  <path d="M 96 210 Q 90 260 98 310 M 204 210 Q 210 260 202 310" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'hair_back_detective_kid_cape_hair',
    name: '月下のシルキーショートヘア',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Detective / Kid: Neat feathered dark navy back hair with breezy volume -->
  <path d="M 112 105 C 95 130 90 170 94 210 C 110 220 140 225 150 225 C 160 225 190 220 206 210 C 210 170 205 130 188 105 Z" fill="#1e293b"/>
  <polygon points="90,170 82,195 100,185" fill="#0f172a"/>
  <polygon points="210,170 218,195 200,185" fill="#0f172a"/>
  <polygon points="144,222 150,235 156,222" fill="#0f172a"/>
    `,
  }),
  new Item({
    id: 'hair_back_kimetsu_mitsuri_mega_braids',
    name: 'みつり三つ編み桜グラデーション',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Mitsuri: Big thick twin braids in sakura pink fading into lime green -->
  <path d="M 110 105 C 95 135 92 180 98 230 C 112 240 140 245 150 245 C 160 245 188 240 202 230 C 208 180 205 135 190 105 Z" fill="#f472b6"/>
  <circle cx="88" cy="140" r="13" fill="#f472b6"/>
  <circle cx="82" cy="165" r="14" fill="#f472b6"/>
  <circle cx="78" cy="195" r="14" fill="#ec4899"/>
  <circle cx="76" cy="225" r="13" fill="#ec4899"/>
  <circle cx="74" cy="255" r="13" fill="#a3e635"/>
  <circle cx="72" cy="285" r="12" fill="#84cc16"/>
  <circle cx="70" cy="315" r="10" fill="#65a30d"/>
  <circle cx="212" cy="140" r="13" fill="#f472b6"/>
  <circle cx="218" cy="165" r="14" fill="#f472b6"/>
  <circle cx="222" cy="195" r="14" fill="#ec4899"/>
  <circle cx="224" cy="225" r="13" fill="#ec4899"/>
  <circle cx="226" cy="255" r="13" fill="#a3e635"/>
  <circle cx="228" cy="285" r="12" fill="#84cc16"/>
  <circle cx="230" cy="315" r="10" fill="#65a30d"/>
    `,
  }),
  new Item({
    id: 'hair_back_kimetsu_shinobu_yakai',
    name: 'しのぶ夜会巻きパープルグラデ',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Shinobu: Graceful updo with purple butterfly fluttering back hair -->
  <path d="M 112 105 C 98 135 95 180 100 230 C 115 240 140 245 150 245 C 160 245 185 240 200 230 C 205 180 202 135 188 105 Z" fill="#1e1b4b"/>
  <ellipse cx="150" cy="85" rx="22" ry="16" fill="#1e1b4b"/>
  <path d="M 150 82 C 140 68 126 75 138 88 C 128 95 138 102 148 90 Z" fill="#c084fc" stroke="#581c87" stroke-width="1"/>
  <path d="M 150 82 C 160 68 174 75 162 88 C 172 95 162 102 152 90 Z" fill="#6ee7b7" stroke="#047857" stroke-width="1"/>
  <circle cx="150" cy="85" r="2.5" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'hair_back_kimetsu_kanao_side_pony',
    name: 'カナヲサイドハイポニーテール',
    slotCategory: SlotCategory.HAIR_BACK,
    svgContent: `
<!-- Kanao: High side ponytail in glossy dark black with purple sheen -->
  <path d="M 112 105 C 96 135 94 185 98 235 C 114 245 140 250 150 250 C 160 250 186 245 202 235 C 206 185 204 135 188 105 Z" fill="#18181b"/>
  <path d="M 190 95 C 225 105 250 140 246 195 C 242 245 228 290 216 325 C 214 300 226 260 226 215 C 226 165 208 125 188 105 Z" fill="#27272a"/>
  <path d="M 226 150 Q 235 210 224 270" stroke="#a855f7" stroke-width="2" fill="none" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'eyes_precure_wonderful_amber',
    name: 'わんだふるきらめきアンバーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Precure Wonderful: Bright amber golden eyes with heart highlights & cute lashes -->
  <g>
    <path d="M 124 105 Q 135 100 146 106" stroke="#451a03" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 122 108 L 126 105" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#d97706"/>
    <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#f59e0b"/>
    <circle cx="135" cy="118" r="3" fill="#78350f"/>
    <circle cx="132" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="138" cy="118" r="1.5" fill="#ffffff"/>
    <path d="M 134 114 C 132 112 131 114 133 116 C 131 118 133 119 135 117" fill="#ffffff" opacity="0.8"/>
  </g>
  <g>
    <path d="M 154 106 Q 165 100 176 105" stroke="#451a03" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 178 108 L 174 105" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#d97706"/>
    <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#f59e0b"/>
    <circle cx="165" cy="118" r="3" fill="#78350f"/>
    <circle cx="162" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="168" cy="118" r="1.5" fill="#ffffff"/>
    <path d="M 164 114 C 162 112 161 114 163 116 C 161 118 163 119 165 117" fill="#ffffff" opacity="0.8"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_precure_friendy_hazel',
    name: 'フレンディやさしいヘーゼルアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Precure Friendy: Gentle hazel-olive green eyes with star sparkle -->
  <g>
    <path d="M 124 106 Q 135 101 145 107" stroke="#14532d" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="115" rx="7" ry="9" fill="#15803d"/>
    <ellipse cx="135" cy="117" rx="5" ry="6" fill="#86efac"/>
    <circle cx="133" cy="112" r="2.4" fill="#ffffff"/>
    <circle cx="138" cy="117" r="1.2" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 155 107 Q 165 101 176 106" stroke="#14532d" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="115" rx="7" ry="9" fill="#15803d"/>
    <ellipse cx="165" cy="117" rx="5" ry="6" fill="#86efac"/>
    <circle cx="163" cy="112" r="2.4" fill="#ffffff"/>
    <circle cx="168" cy="117" r="1.2" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_precure_nyammy_ruby',
    name: 'ニャミークールルビーキャットアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Precure Nyammy: Glamorous ruby cat-eye with sharp wing lash -->
  <g>
    <path d="M 122 107 Q 135 100 146 105" stroke="#3b0764" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 120 104 L 125 106" stroke="#3b0764" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="135" cy="114" rx="7" ry="9" fill="#be185d"/>
    <ellipse cx="135" cy="116" rx="5" ry="6" fill="#f43f5e"/>
    <ellipse cx="135" cy="115" rx="2" ry="5" fill="#4c0519"/>
    <circle cx="132" cy="111" r="2.2" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 154 105 Q 165 100 178 107" stroke="#3b0764" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 180 104 L 175 106" stroke="#3b0764" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="165" cy="114" rx="7" ry="9" fill="#be185d"/>
    <ellipse cx="165" cy="116" rx="5" ry="6" fill="#f43f5e"/>
    <ellipse cx="165" cy="115" rx="2" ry="5" fill="#4c0519"/>
    <circle cx="162" cy="111" r="2.2" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_precure_lillian_emerald',
    name: 'リリアンうるうるエメラルドアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Precure Lillian: Deep emerald green jewel anime eyes with droplet highlights -->
  <g>
    <path d="M 124 106 Q 135 101 145 107" stroke="#064e3b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="115" rx="7.5" ry="9.5" fill="#047857"/>
    <ellipse cx="135" cy="117" rx="5.5" ry="6.5" fill="#34d399"/>
    <circle cx="133" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="137" cy="118" r="1.5" fill="#ffffff"/>
    <circle cx="133" cy="120" r="1" fill="#a7f3d0"/>
  </g>
  <g>
    <path d="M 155 107 Q 165 101 176 106" stroke="#064e3b" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="115" rx="7.5" ry="9.5" fill="#047857"/>
    <ellipse cx="165" cy="117" rx="5.5" ry="6.5" fill="#34d399"/>
    <circle cx="163" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="167" cy="118" r="1.5" fill="#ffffff"/>
    <circle cx="163" cy="120" r="1" fill="#a7f3d0"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_precure_sky_sapphire',
    name: 'スカイブルーヒーローサファイアアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Hirogaru Sky: Heroic sky-sapphire blue eyes with starburst brilliance -->
  <g>
    <path d="M 123 105 Q 135 99 146 106" stroke="#0c4a6e" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="114" rx="7.5" ry="9.5" fill="#0284c7"/>
    <ellipse cx="135" cy="116" rx="5.5" ry="6.5" fill="#38bdf8"/>
    <polygon points="133,110 135,113 137,110 135,107" fill="#ffffff"/>
    <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 154 106 Q 165 99 177 105" stroke="#0c4a6e" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="114" rx="7.5" ry="9.5" fill="#0284c7"/>
    <ellipse cx="165" cy="116" rx="5.5" ry="6.5" fill="#38bdf8"/>
    <polygon points="163,110 165,113 167,110 165,107" fill="#ffffff"/>
    <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_precure_prism_violet',
    name: 'プリズムドリーミーバイオレットアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Cure Prism: Gentle soft dreamy violet eyes with floating star ring -->
  <g>
    <path d="M 124 106 Q 135 101 145 107" stroke="#4c1d95" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="115" rx="7" ry="9" fill="#7c3aed"/>
    <ellipse cx="135" cy="117" rx="5" ry="6" fill="#c4b5fd"/>
    <circle cx="133" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="137" cy="117" r="1.5" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 155 107 Q 165 101 176 106" stroke="#4c1d95" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="115" rx="7" ry="9" fill="#7c3aed"/>
    <ellipse cx="165" cy="117" rx="5" ry="6" fill="#c4b5fd"/>
    <circle cx="163" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="167" cy="117" r="1.5" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_aipri_himari_sparkle_pink',
    name: 'アイプリひまりジュエルピンクアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- AiPri Himari: Vibrant magical pink idol eyes with star iris reflection -->
  <g>
    <path d="M 123 105 Q 135 99 146 106" stroke="#831843" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="114" rx="7.5" ry="9.5" fill="#db2777"/>
    <ellipse cx="135" cy="116" rx="5.5" ry="6.5" fill="#f472b6"/>
    <circle cx="135" cy="115" r="2.5" fill="#9d174d"/>
    <circle cx="132" cy="111" r="2.6" fill="#ffffff"/>
    <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 154 106 Q 165 99 177 105" stroke="#831843" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="114" rx="7.5" ry="9.5" fill="#db2777"/>
    <ellipse cx="165" cy="116" rx="5.5" ry="6.5" fill="#f472b6"/>
    <circle cx="165" cy="115" r="2.5" fill="#9d174d"/>
    <circle cx="162" cy="111" r="2.6" fill="#ffffff"/>
    <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_aipri_mitsuki_ocean',
    name: 'アイプリみつきミッドナイトブルーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- AiPri Mitsuki: Deep oceanic midnight eyes with crescent moon reflection -->
  <g>
    <path d="M 124 105 Q 135 100 145 106" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="114" rx="7" ry="9" fill="#1e3a8a"/>
    <ellipse cx="135" cy="116" rx="5" ry="6" fill="#3b82f6"/>
    <path d="M 133 113 Q 135 111 137 113 Q 136 116 133 113" fill="#ffffff"/>
    <circle cx="133" cy="111" r="2" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 155 106 Q 165 100 176 105" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="114" rx="7" ry="9" fill="#1e3a8a"/>
    <ellipse cx="165" cy="116" rx="5" ry="6" fill="#3b82f6"/>
    <path d="M 163 113 Q 165 111 167 113 Q 166 116 163 113" fill="#ffffff"/>
    <circle cx="163" cy="111" r="2" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_aipri_tsumugi_sunshine',
    name: 'アイプリつむぎサンシャインハニーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- AiPri Tsumugi: Warm honey golden eyes with daisy flower sparkle -->
  <g>
    <path d="M 124 106 Q 135 101 145 107" stroke="#713f12" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="115" rx="7" ry="9" fill="#ca8a04"/>
    <ellipse cx="135" cy="117" rx="5" ry="6" fill="#facc15"/>
    <circle cx="133" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="137" cy="118" r="1.4" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 155 107 Q 165 101 176 106" stroke="#713f12" stroke-width="2.8" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="115" rx="7" ry="9" fill="#ca8a04"/>
    <ellipse cx="165" cy="117" rx="5" ry="6" fill="#facc15"/>
    <circle cx="163" cy="112" r="2.5" fill="#ffffff"/>
    <circle cx="167" cy="118" r="1.4" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_chiikawa_tear_sparkle',
    name: 'ちいかわうるうる純真ビッグアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Chiikawa: Big adorable pure black pupil eyes with giant white reflection discs -->
  <g>
    <ellipse cx="134" cy="115" rx="8" ry="10" fill="#111827"/>
    <circle cx="132" cy="112" r="3.5" fill="#ffffff"/>
    <circle cx="137" cy="118" r="2" fill="#ffffff"/>
    <ellipse cx="135" cy="122" rx="3" ry="1" fill="#bae6fd" opacity="0.8"/>
  </g>
  <g>
    <ellipse cx="166" cy="115" rx="8" ry="10" fill="#111827"/>
    <circle cx="164" cy="112" r="3.5" fill="#ffffff"/>
    <circle cx="169" cy="118" r="2" fill="#ffffff"/>
    <ellipse cx="167" cy="122" rx="3" ry="1" fill="#bae6fd" opacity="0.8"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_hachiware_determined',
    name: 'ハチワレきりっと好奇心アイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Hachiware: Wide curious bright sapphire anime eyes full of courage -->
  <g>
    <path d="M 124 104 Q 135 100 146 105" stroke="#0369a1" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="135" cy="114" rx="7.5" ry="9" fill="#0284c7"/>
    <ellipse cx="135" cy="116" rx="5" ry="6" fill="#38bdf8"/>
    <circle cx="132" cy="111" r="2.6" fill="#ffffff"/>
    <circle cx="137" cy="116" r="1.5" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 154 105 Q 165 100 176 104" stroke="#0369a1" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="165" cy="114" rx="7.5" ry="9" fill="#0284c7"/>
    <ellipse cx="165" cy="116" rx="5" ry="6" fill="#38bdf8"/>
    <circle cx="162" cy="111" r="2.6" fill="#ffffff"/>
    <circle cx="167" cy="116" r="1.5" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_usagi_hyper_sparkle',
    name: 'うさぎハイテンションぐるぐるアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Usagi: Cheerful wild ruby-red anime eyes with spiral sparkle -->
  <g>
    <ellipse cx="135" cy="114" rx="7.5" ry="9.5" fill="#dc2626"/>
    <ellipse cx="135" cy="116" rx="5" ry="6" fill="#f87171"/>
    <path d="M 133 113 Q 135 110 137 113 Q 136 117 134 115" stroke="#ffffff" stroke-width="1.2" fill="none"/>
    <circle cx="132" cy="111" r="2.4" fill="#ffffff"/>
  </g>
  <g>
    <ellipse cx="165" cy="114" rx="7.5" ry="9.5" fill="#dc2626"/>
    <ellipse cx="165" cy="116" rx="5" ry="6" fill="#f87171"/>
    <path d="M 163 113 Q 165 110 167 113 Q 166 117 164 115" stroke="#ffffff" stroke-width="1.2" fill="none"/>
    <circle cx="162" cy="111" r="2.4" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_sumikko_tapioca_pastel',
    name: 'すみっコパステルミルキーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Sumikko Gurashi: Soft pastel dreamy rounded eyes with warm chocolate liner -->
  <g>
    <ellipse cx="135" cy="115" rx="6.5" ry="8" fill="#475569"/>
    <circle cx="133" cy="112" r="2.2" fill="#ffffff"/>
    <ellipse cx="135" cy="117" rx="3.5" ry="4" fill="#c084fc" opacity="0.6"/>
  </g>
  <g>
    <ellipse cx="165" cy="115" rx="6.5" ry="8" fill="#475569"/>
    <circle cx="163" cy="112" r="2.2" fill="#ffffff"/>
    <ellipse cx="165" cy="117" rx="3.5" ry="4" fill="#c084fc" opacity="0.6"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_detective_truth_blue',
    name: '真実を見抜くインテリジェントブルーアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Detective Style: Sharp keen intelligent deep cobalt eyes -->
  <g>
    <path d="M 124 104 Q 136 99 146 106" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 125 102 L 138 98" stroke="#334155" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="135" cy="114" rx="7" ry="8.5" fill="#1d4ed8"/>
    <ellipse cx="135" cy="116" rx="4.5" ry="5.5" fill="#60a5fa"/>
    <circle cx="133" cy="111" r="2.4" fill="#ffffff"/>
    <circle cx="137" cy="116" r="1.2" fill="#ffffff"/>
  </g>
  <g>
    <path d="M 154 106 Q 164 99 176 104" stroke="#0f172a" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 175 102 L 162 98" stroke="#334155" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="165" cy="114" rx="7" ry="8.5" fill="#1d4ed8"/>
    <ellipse cx="165" cy="116" rx="4.5" ry="5.5" fill="#60a5fa"/>
    <circle cx="163" cy="111" r="2.4" fill="#ffffff"/>
    <circle cx="167" cy="116" r="1.2" fill="#ffffff"/>
  </g>
    `,
  }),
  new Item({
    id: 'eyes_kimetsu_mitsuri_light_green',
    name: 'みつりときめきライムグリーンアイ',
    slotCategory: SlotCategory.EYES,
    svgContent: `
<!-- Mitsuri: Big heart-throbbing lime-green eyes with double beauty moles -->
  <g>
    <path d="M 123 105 Q 135 99 146 106" stroke="#166534" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 122 108 L 126 105" stroke="#166534" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="135" cy="114" rx="7.5" ry="9.5" fill="#65a30d"/>
    <ellipse cx="135" cy="116" rx="5.5" ry="6.5" fill="#a3e635"/>
    <circle cx="132" cy="111" r="2.8" fill="#ffffff"/>
    <circle cx="138" cy="117" r="1.5" fill="#ffffff"/>
    <circle cx="132" cy="127" r="1.1" fill="#713f12"/>
  </g>
  <g>
    <path d="M 154 106 Q 165 99 177 105" stroke="#166534" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M 178 108 L 174 105" stroke="#166534" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="165" cy="114" rx="7.5" ry="9.5" fill="#65a30d"/>
    <ellipse cx="165" cy="116" rx="5.5" ry="6.5" fill="#a3e635"/>
    <circle cx="162" cy="111" r="2.8" fill="#ffffff"/>
    <circle cx="168" cy="117" r="1.5" fill="#ffffff"/>
    <circle cx="168" cy="127" r="1.1" fill="#713f12"/>
  </g>
    `,
  }),
  new Item({
    id: 'mouth_precure_open_happy',
    name: 'わんだふるハッピーオープンマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Precure Wonderful: Energetic cheerful open smile with pink tongue -->
  <path d="M 143 138 Q 150 148 157 138 Z" fill="#e11d48"/>
  <path d="M 145 142 Q 150 147 155 142" fill="#fda4af"/>
  <path d="M 143 138 Q 150 140 157 138" stroke="#9f1239" stroke-width="1.5" fill="none"/>
    `,
  }),
  new Item({
    id: 'mouth_precure_cat_smile',
    name: 'ニャミーおすまし猫口リップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Precure Nyammy: Chic :3 cat-smile mouth with glossy pink lip tint -->
  <path d="M 143 140 Q 147 143 150 140 Q 153 143 157 140" stroke="#be185d" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <ellipse cx="150" cy="144" rx="3" ry="1.2" fill="#fda4af" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'mouth_precure_shy_smile',
    name: 'プリズムはにかみほほえみマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Cure Prism: Delicate soft shy closed smile with pink lip sheen -->
  <path d="M 145 141 Q 150 145 155 141" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round" fill="none"/>
  <circle cx="150" cy="144" r="1.2" fill="#fb7185" opacity="0.5"/>
    `,
  }),
  new Item({
    id: 'mouth_precure_energetic_shout',
    name: 'スカイ元気いっぱい笑顔マウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Cure Sky: Wide cheerful anime open mouth -->
  <path d="M 142 138 Q 150 152 158 138 Z" fill="#b91c1c"/>
  <path d="M 144 144 Q 150 151 156 144" fill="#f87171"/>
  <path d="M 144 139 L 156 139 L 150 141 Z" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_aipri_idol_wink_smile',
    name: 'アイプリウインクリップ',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- AiPri: Tilted cute idol smile with glossy cherry sheen -->
  <path d="M 144 141 Q 150 146 157 139" stroke="#db2777" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <ellipse cx="151" cy="144" rx="3.5" ry="1.4" fill="#f472b6" opacity="0.6"/>
  <circle cx="152" cy="143.5" r="0.6" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'mouth_aipri_tiny_pout',
    name: 'アイプリぷくっとふくれっ面',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- AiPri: Adorable tiny pouty mouth -->
  <path d="M 147 141 Q 150 139 153 141" stroke="#e11d48" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <ellipse cx="150" cy="143" rx="2" ry="1.5" fill="#fb7185" opacity="0.7"/>
    `,
  }),
  new Item({
    id: 'mouth_chiikawa_wobbly_cute',
    name: 'ちいかわ波型ぷるぷるマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Chiikawa: Classic wobbly wavy cute Chiikawa mouth -->
  <path d="M 144 141 Q 147 139 150 141 Q 153 143 156 141" stroke="#374151" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'mouth_chiikawa_gasp_delight',
    name: 'ちいかわ「わッ…！」感激マウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Chiikawa: Round tiny 'O' mouth of wholesome delight -->
  <ellipse cx="150" cy="141" rx="3" ry="3.5" fill="#f43f5e" stroke="#881337" stroke-width="1.2"/>
  <circle cx="149" cy="140" r="1" fill="#ffffff" opacity="0.7"/>
    `,
  }),
  new Item({
    id: 'mouth_hachiware_broad_smile',
    name: 'ハチワレ「なんとかなれー！」笑顔',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Hachiware: Wide confident V-smile full of encouragement -->
  <path d="M 142 139 Q 150 150 158 139" stroke="#1f2937" stroke-width="2" stroke-linecap="round" fill="none"/>
  <ellipse cx="150" cy="144" rx="4" ry="1.5" fill="#f472b6" opacity="0.4"/>
    `,
  }),
  new Item({
    id: 'mouth_usagi_yaaahaa',
    name: 'うさぎ「ヤハッ！」叫びマウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Usagi: Iconic mischievous open triangular smile -->
  <polygon points="144,138 156,138 150,147" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
  <polygon points="146,139 154,139 150,143" fill="#fca5a5"/>
    `,
  }),
  new Item({
    id: 'mouth_sumikko_tiny_dot',
    name: 'すみっコ控えめちょこん口',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Sumikko: Minimalist dainty line mouth -->
  <line x1="147" y1="141" x2="153" y2="141" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round"/>
    `,
  }),
  new Item({
    id: 'mouth_sumikko_happy_cat',
    name: 'すみっコふにゃっと笑顔',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Sumikko: Soft curving relaxed happy line mouth -->
  <path d="M 144 141 Q 150 144 156 141" stroke="#6b7280" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'mouth_detective_confident_smirk',
    name: '名探偵不敵なニヤリ口',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Detective: Cool confident one-side tilted smirk -->
  <path d="M 144 142 Q 148 142 156 139" stroke="#1e293b" stroke-width="2" stroke-linecap="round" fill="none"/>
    `,
  }),
  new Item({
    id: 'mouth_kimetsu_mitsuri_excited',
    name: 'みつり「きゃ～っ！」感激マウス',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Mitsuri: Blushing excited smiling open mouth -->
  <path d="M 143 139 Q 150 149 157 139 Z" fill="#e11d48"/>
  <path d="M 145 143 Q 150 148 155 143" fill="#fb7185"/>
  <line x1="145" y1="140" x2="155" y2="140" stroke="#ffffff" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'mouth_kimetsu_shinobu_soft_smile',
    name: 'しのぶミステリアス微笑み',
    slotCategory: SlotCategory.MOUTH,
    svgContent: `
<!-- Shinobu: Serene gentle mysterious closed smile -->
  <path d="M 145 141 Q 150 143.5 155 141" stroke="#581c87" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <ellipse cx="150" cy="143" rx="2.5" ry="1" fill="#c084fc" opacity="0.4"/>
    `,
  }),
  new Item({
    id: 'bg_precure_sparkle_palace',
    name: 'プリキュアきらめきミラクルキャッスル',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Precure: Magical castle terrace with rainbow arches and floating star gems -->
  <rect x="0" y="0" width="300" height="400" fill="#fdf2f8"/>
  <path d="M 20 280 L 20 180 L 45 150 L 70 180 L 70 280 Z" fill="#fbcfe8" opacity="0.6"/>
  <path d="M 230 280 L 230 180 L 255 150 L 280 180 L 280 280 Z" fill="#fbcfe8" opacity="0.6"/>
  <path d="M 110 280 L 110 140 L 150 100 L 190 140 L 190 280 Z" fill="#f472b6" opacity="0.4"/>
  <path d="M 10 320 Q 150 80 290 320" stroke="#fda4af" stroke-width="6" fill="none" opacity="0.5"/>
  <path d="M 10 326 Q 150 86 290 326" stroke="#fef08a" stroke-width="6" fill="none" opacity="0.5"/>
  <path d="M 10 332 Q 150 92 290 332" stroke="#a7f3d0" stroke-width="6" fill="none" opacity="0.5"/>
  <path d="M 10 338 Q 150 98 290 338" stroke="#bae6fd" stroke-width="6" fill="none" opacity="0.5"/>
  <circle cx="50" cy="80" r="8" fill="#fde047" opacity="0.8"/>
  <circle cx="250" cy="90" r="10" fill="#f472b6" opacity="0.7"/>
  <circle cx="80" cy="120" r="5" fill="#67e8f9" opacity="0.8"/>
  <circle cx="220" cy="130" r="6" fill="#fde047" opacity="0.8"/>
  <rect x="0" y="300" width="300" height="100" fill="#fff1f2"/>
  <line x1="0" y1="300" x2="300" y2="300" stroke="#f43f5e" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'bg_precure_sky_floating_island',
    name: 'スカイランド青空の浮島',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Hirogaru Sky: Brilliant cyan sky with floating islands and crystal ruins -->
  <rect x="0" y="0" width="300" height="400" fill="#e0f2fe"/>
  <ellipse cx="60" cy="100" rx="40" ry="20" fill="#ffffff" opacity="0.9"/>
  <ellipse cx="90" cy="90" rx="35" ry="25" fill="#ffffff" opacity="0.9"/>
  <ellipse cx="230" cy="140" rx="50" ry="25" fill="#ffffff" opacity="0.9"/>
  <ellipse cx="260" cy="130" rx="40" ry="20" fill="#ffffff" opacity="0.9"/>
  <path d="M 30 260 Q 90 240 150 260 Q 90 310 30 260 Z" fill="#86efac"/>
  <path d="M 40 260 Q 90 320 140 260 Z" fill="#78350f" opacity="0.5"/>
  <path d="M 80 270 L 78 350 M 95 275 L 94 360" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
  <polygon points="220,240 230,220 240,240 230,260" fill="#67e8f9" opacity="0.8"/>
  <polygon points="250,260 256,245 262,260 256,275" fill="#a855f7" opacity="0.8"/>
    `,
  }),
  new Item({
    id: 'bg_aipri_shining_stage',
    name: 'アイプリスターライトライブステージ',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Himitsu no AiPri: Vibrant concert idol stage with laser beams & neon lights -->
  <rect x="0" y="0" width="300" height="400" fill="#0f172a"/>
  <polygon points="150,0 20,400 80,400" fill="#f43f5e" opacity="0.3"/>
  <polygon points="150,0 220,400 280,400" fill="#38bdf8" opacity="0.3"/>
  <polygon points="150,0 110,400 190,400" fill="#facc15" opacity="0.25"/>
  <path d="M 40 330 Q 150 160 260 330" stroke="#e879f9" stroke-width="8" fill="none" opacity="0.8"/>
  <path d="M 40 330 Q 150 160 260 330" stroke="#ffffff" stroke-width="3" fill="none"/>
  <rect x="0" y="320" width="300" height="80" fill="#1e1b4b"/>
  <line x1="0" y1="320" x2="300" y2="320" stroke="#f472b6" stroke-width="4"/>
  <circle cx="80" cy="220" r="12" fill="#fb7185" opacity="0.6"/>
  <circle cx="220" cy="220" r="12" fill="#38bdf8" opacity="0.6"/>
    `,
  }),
  new Item({
    id: 'bg_aipri_secret_room',
    name: 'アイプリひみつのドレッサーサロン',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- AiPri: Romantic idol dressing room with gilded mirror and floral wallpaper -->
  <rect x="0" y="0" width="300" height="400" fill="#fdf4ff"/>
  <line x1="30" y1="0" x2="30" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <line x1="75" y1="0" x2="75" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <line x1="120" y1="0" x2="120" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <line x1="165" y1="0" x2="165" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <line x1="210" y1="0" x2="210" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <line x1="255" y1="0" x2="255" y2="300" stroke="#fae8ff" stroke-width="15"/>
  <ellipse cx="150" cy="170" rx="90" ry="110" fill="#f5d0fe" stroke="#eab308" stroke-width="4"/>
  <ellipse cx="150" cy="170" rx="82" ry="102" fill="#ffffff" opacity="0.8"/>
  <rect x="0" y="300" width="300" height="100" fill="#fed7aa"/>
  <line x1="0" y1="300" x2="300" y2="300" stroke="#d97706" stroke-width="3"/>
    `,
  }),
  new Item({
    id: 'bg_chiikawa_flower_field',
    name: 'ちいかわぽかぽか野原とお花畑',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Chiikawa: Gentle warm sunny green meadow with pastel blossoms -->
  <rect x="0" y="0" width="300" height="400" fill="#e0f2fe"/>
  <circle cx="250" cy="60" r="28" fill="#fef08a" opacity="0.85"/>
  <path d="M 0 260 Q 90 210 180 250 Q 240 230 300 250 L 300 400 L 0 400 Z" fill="#bbf7d0"/>
  <path d="M 0 290 Q 120 260 240 290 L 300 280 L 300 400 L 0 400 Z" fill="#86efac"/>
  <circle cx="40" cy="330" r="5" fill="#f43f5e"/>
  <circle cx="40" cy="330" r="2" fill="#fef08a"/>
  <circle cx="70" cy="355" r="4" fill="#fbbf24"/>
  <circle cx="230" cy="340" r="5" fill="#ec4899"/>
  <circle cx="230" cy="340" r="2" fill="#fef08a"/>
  <circle cx="265" cy="365" r="4" fill="#38bdf8"/>
    `,
  }),
  new Item({
    id: 'bg_chiikawa_giant_pudding',
    name: 'ちいかわ湧き出る巨大プリンの森',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Chiikawa: Surreal adorable giant caramel pudding mountain in the forest -->
  <rect x="0" y="0" width="300" height="400" fill="#fef3c7"/>
  <path d="M 40 310 L 70 170 Q 150 160 230 170 L 260 310 Z" fill="#fde047"/>
  <path d="M 70 170 Q 150 160 230 170 L 235 200 Q 215 225 200 195 Q 180 230 160 200 Q 140 235 120 200 Q 100 225 80 195 Z" fill="#b45309"/>
  <line x1="210" y1="180" x2="250" y2="90" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="255" cy="80" rx="14" ry="18" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
  <rect x="0" y="300" width="300" height="100" fill="#a7f3d0"/>
    `,
  }),
  new Item({
    id: 'bg_sumikko_cozy_corner',
    name: 'すみっコ落ち着くお部屋のすみっこ',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Sumikko Gurashi: Warm cozy wall corner with wood floor & polkadots -->
  <rect x="0" y="0" width="300" height="400" fill="#fef9c3"/>
  <line x1="150" y1="0" x2="150" y2="280" stroke="#fde047" stroke-width="2"/>
  <line x1="0" y1="280" x2="150" y2="280" stroke="#fde047" stroke-width="2"/>
  <line x1="150" y1="280" x2="300" y2="280" stroke="#fde047" stroke-width="2"/>
  <rect x="0" y="280" width="300" height="120" fill="#fed7aa"/>
  <line x1="0" y1="320" x2="300" y2="320" stroke="#f97316" stroke-width="1.5" opacity="0.4"/>
  <line x1="0" y1="360" x2="300" y2="360" stroke="#f97316" stroke-width="1.5" opacity="0.4"/>
  <ellipse cx="70" cy="270" rx="28" ry="16" fill="#fbcfe8"/>
  <circle cx="60" cy="270" r="2.5" fill="#f43f5e"/>
  <circle cx="75" cy="268" r="2.5" fill="#f43f5e"/>
  <rect x="230" y="265" width="16" height="20" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
  <ellipse cx="238" cy="266" rx="7" ry="2" fill="#86efac"/>
  <path d="M 236 260 Q 234 250 238 245" stroke="#94a3b8" stroke-width="1" fill="none"/>
    `,
  }),
  new Item({
    id: 'bg_sumikko_starry_sky',
    name: 'すみっコお星さまのプラネタリウム',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Sumikko: Gentle pastel navy night sky with hanging star lanterns -->
  <rect x="0" y="0" width="300" height="400" fill="#1e1b4b"/>
  <circle cx="240" cy="70" r="24" fill="#fef08a"/>
  <circle cx="232" cy="65" r="20" fill="#1e1b4b"/>
  <line x1="50" y1="0" x2="50" y2="90" stroke="#cbd5e1" stroke-width="1"/>
  <polygon points="50,88 52,93 57,94 53,97 54,102 50,99 46,102 47,97 43,94 48,93" fill="#facc15"/>
  <line x1="120" y1="0" x2="120" y2="130" stroke="#cbd5e1" stroke-width="1"/>
  <polygon points="120,128 122,133 127,134 123,137 124,142 120,139 116,142 117,137 113,134 118,133" fill="#f472b6"/>
  <line x1="200" y1="0" x2="200" y2="100" stroke="#cbd5e1" stroke-width="1"/>
  <polygon points="200,98 202,103 207,104 203,107 204,112 200,109 196,112 197,107 193,104 198,103" fill="#38bdf8"/>
  <ellipse cx="60" cy="380" rx="80" ry="30" fill="#312e81"/>
  <ellipse cx="220" cy="380" rx="100" ry="35" fill="#312e81"/>
    `,
  }),
  new Item({
    id: 'bg_detective_moonlight_rooftop',
    name: '月下の時計台ルーフトップ',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Detective / Kid: Big dramatic full moon behind Victorian gothic clocktower -->
  <rect x="0" y="0" width="300" height="400" fill="#020617"/>
  <circle cx="150" cy="140" r="75" fill="#f8fafc" opacity="0.9"/>
  <circle cx="150" cy="140" r="85" fill="#93c5fd" opacity="0.2"/>
  <line x1="150" y1="140" x2="150" y2="90" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <line x1="150" y1="140" x2="185" y2="150" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <polygon points="10,400 30,240 50,400" fill="#0f172a"/>
  <polygon points="250,400 270,240 290,400" fill="#0f172a"/>
  <rect x="0" y="320" width="300" height="80" fill="#1e293b"/>
  <rect x="10" y="300" width="30" height="30" fill="#334155"/>
  <rect x="80" y="300" width="30" height="30" fill="#334155"/>
  <rect x="190" y="300" width="30" height="30" fill="#334155"/>
  <rect x="260" y="300" width="30" height="30" fill="#334155"/>
    `,
  }),
  new Item({
    id: 'bg_kimetsu_wisteria_gazebo',
    name: '満開の藤の花と月夜の日本庭園',
    slotCategory: SlotCategory.BACKGROUND,
    svgContent: `
<!-- Demon Slayer: Lush purple wisteria flowers under nighttime lantern glow -->
  <rect x="0" y="0" width="300" height="400" fill="#1e1b4b"/>
  <path d="M 20 0 L 20 60 L 26 80 L 20 110" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 60 0 L 60 90 L 68 120 L 60 145" stroke="#a855f7" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M 100 0 L 100 50 L 105 75" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 200 0 L 200 65 L 206 90" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 240 0 L 240 100 L 248 135 L 240 155" stroke="#a855f7" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M 280 0 L 280 70 L 286 95" stroke="#c084fc" stroke-width="4" stroke-linecap="round" fill="none"/>
  <circle cx="40" cy="160" r="3" fill="#fef08a" opacity="0.8"/>
  <circle cx="120" cy="180" r="2.5" fill="#fef08a" opacity="0.8"/>
  <circle cx="220" cy="190" r="3" fill="#fef08a" opacity="0.8"/>
  <circle cx="260" cy="170" r="2.5" fill="#fef08a" opacity="0.8"/>
  <rect x="0" y="300" width="300" height="100" fill="#451a03"/>
  <line x1="0" y1="300" x2="300" y2="300" stroke="#78350f" stroke-width="3"/>
    `,
  }),
  new Item({
    id: 'shoes_precure_wonderful_boots',
    name: 'わんだふるリボンフリルロングブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Precure Wonderful: White & pink knee-high boots with gold dog tags -->
  <path d="M 126 315 L 145 315 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#ffffff" stroke="#fda4af" stroke-width="1.2"/>
  <path d="M 126 315 Q 135 318 145 315 L 145 325 Q 135 328 126 325 Z" fill="#f43f5e"/>
  <circle cx="135" cy="328" r="2.5" fill="#facc15"/>
  <path d="M 155 315 L 174 315 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#ffffff" stroke="#fda4af" stroke-width="1.2"/>
  <path d="M 155 315 Q 165 318 174 315 L 174 325 Q 165 328 155 325 Z" fill="#f43f5e"/>
  <circle cx="165" cy="328" r="2.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_precure_friendy_maryjane',
    name: 'フレンディミントストラップシューズ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Precure Friendy: Mint green Mary Janes with pink frill ankle socks -->
  <path d="M 128 330 L 144 330 L 144 345 L 128 345 Z" fill="#fff1f2"/>
  <path d="M 128 330 Q 136 333 144 330" stroke="#f472b6" stroke-width="1.2" fill="none"/>
  <path d="M 156 330 L 172 330 L 172 345 L 156 345 Z" fill="#fff1f2"/>
  <path d="M 156 330 Q 164 333 172 330" stroke="#f472b6" stroke-width="1.2" fill="none"/>
  <path d="M 126 345 L 144 345 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#34d399"/>
  <path d="M 156 345 L 174 345 L 178 350 C 180 358 178 358 156 358 Z" fill="#34d399"/>
  <line x1="126" y1="348" x2="144" y2="348" stroke="#059669" stroke-width="1.5"/>
  <line x1="156" y1="348" x2="174" y2="348" stroke="#059669" stroke-width="1.5"/>
    `,
  }),
  new Item({
    id: 'shoes_precure_nyammy_highheels',
    name: 'ニャミー高貴エレガントパンプス',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Precure Nyammy: Elegant lavender high pumps with cat-ear silver clips -->
  <path d="M 126 346 L 144 346 L 144 358 L 122 358 C 120 358 120 352 126 346 Z" fill="#c084fc"/>
  <polygon points="132,346 135,342 138,346" fill="#e0e7ff"/>
  <path d="M 156 346 L 174 346 L 178 352 C 180 358 176 358 156 358 Z" fill="#c084fc"/>
  <polygon points="162,346 165,342 168,346" fill="#e0e7ff"/>
    `,
  }),
  new Item({
    id: 'shoes_precure_sky_winged_boots',
    name: 'スカイランド翼のヒーローブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Cure Sky: Deep sapphire blue boots with golden wings on sides -->
  <path d="M 126 310 L 145 310 L 145 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#0284c7"/>
  <path d="M 120 320 C 114 315 110 325 118 330 C 112 332 115 338 122 335 Z" fill="#facc15"/>
  <path d="M 155 310 L 174 310 L 178 345 C 180 350 180 358 178 358 L 155 358 Z" fill="#0284c7"/>
  <path d="M 180 320 C 186 315 190 325 182 330 C 188 332 185 338 178 335 Z" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'shoes_precure_prism_lace_boots',
    name: 'プリズムレースアップアンクルブーツ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Cure Prism: Pastel pink boots with criss-cross ribbon laces and white pom-poms -->
  <path d="M 126 325 L 144 325 L 144 358 L 122 358 C 120 358 120 350 126 345 Z" fill="#fbcfe8"/>
  <line x1="128" y1="330" x2="142" y2="340" stroke="#f43f5e" stroke-width="1.2"/>
  <line x1="142" y1="330" x2="128" y2="340" stroke="#f43f5e" stroke-width="1.2"/>
  <circle cx="135" cy="326" r="2.5" fill="#ffffff"/>
  <path d="M 156 325 L 174 325 L 178 345 C 180 350 180 358 178 358 L 156 358 Z" fill="#fbcfe8"/>
  <line x1="158" y1="330" x2="172" y2="340" stroke="#f43f5e" stroke-width="1.2"/>
  <line x1="172" y1="330" x2="158" y2="340" stroke="#f43f5e" stroke-width="1.2"/>
  <circle cx="165" cy="326" r="2.5" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'shoes_aipri_sparkle_sneakers',
    name: 'アイプリグリッターステージスニーカー',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- AiPri: Trendy pastel chunky platform sneakers with glitter ribbons -->
  <path d="M 124 336 L 146 336 L 146 358 L 120 358 C 118 358 118 348 124 340 Z" fill="#f472b6"/>
  <rect x="119" y="353" width="28" height="6" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="126" y1="340" x2="144" y2="340" stroke="#38bdf8" stroke-width="2"/>
  <line x1="126" y1="346" x2="144" y2="346" stroke="#fde047" stroke-width="2"/>
  <path d="M 154 336 L 176 336 L 182 340 C 182 348 182 358 180 358 L 154 358 Z" fill="#f472b6"/>
  <rect x="153" y="353" width="29" height="6" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="156" y1="340" x2="174" y2="340" stroke="#38bdf8" stroke-width="2"/>
  <line x1="156" y1="346" x2="174" y2="346" stroke="#fde047" stroke-width="2"/>
    `,
  }),
  new Item({
    id: 'shoes_chiikawa_fluffy_slippers',
    name: 'ちいかわもこもこルームスリッパ',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Chiikawa: Plush white fluffy animal slippers with blushing faces -->
  <ellipse cx="132" cy="354" rx="14" ry="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <circle cx="128" cy="353" r="1" fill="#1e293b"/>
  <circle cx="134" cy="353" r="1" fill="#1e293b"/>
  <ellipse cx="126" cy="355" rx="1.5" ry="0.8" fill="#fda4af"/>
  <ellipse cx="136" cy="355" rx="1.5" ry="0.8" fill="#fda4af"/>
  <ellipse cx="168" cy="354" rx="14" ry="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
  <circle cx="164" cy="353" r="1" fill="#1e293b"/>
  <circle cx="170" cy="353" r="1" fill="#1e293b"/>
  <ellipse cx="162" cy="355" rx="1.5" ry="0.8" fill="#fda4af"/>
  <ellipse cx="172" cy="355" rx="1.5" ry="0.8" fill="#fda4af"/>
    `,
  }),
  new Item({
    id: 'shoes_sumikko_sneakers',
    name: 'すみっコなかよしパステルスリッポン',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Sumikko: Soft mint-cream slip-ons with tapioca pastel charms -->
  <path d="M 125 344 L 145 344 L 145 358 L 121 358 C 119 358 119 350 125 344 Z" fill="#a7f3d0"/>
  <circle cx="135" cy="346" r="3" fill="#fbcfe8"/>
  <path d="M 155 344 L 175 344 L 179 350 C 181 358 177 358 155 358 Z" fill="#a7f3d0"/>
  <circle cx="165" cy="346" r="3" fill="#fde047"/>
    `,
  }),
  new Item({
    id: 'shoes_detective_oxford',
    name: '名探偵クラシックオックスフォード靴',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Detective: Polished brown leather brogues with argyle socks -->
  <path d="M 128 325 L 144 325 L 144 345 L 128 345 Z" fill="#e2e8f0"/>
  <polygon points="136,328 140,335 136,342 132,335" fill="#3b82f6"/>
  <path d="M 156 325 L 172 325 L 172 345 L 156 345 Z" fill="#e2e8f0"/>
  <polygon points="164,328 168,335 164,342 160,335" fill="#3b82f6"/>
  <path d="M 124 345 L 145 345 L 145 358 L 120 358 C 118 358 118 350 124 345 Z" fill="#78350f"/>
  <path d="M 155 345 L 176 345 L 180 350 C 182 358 178 358 155 358 Z" fill="#78350f"/>
  <rect x="120" y="356" width="25" height="3" fill="#451a03"/>
  <rect x="155" y="356" width="25" height="3" fill="#451a03"/>
    `,
  }),
  new Item({
    id: 'shoes_kimetsu_mitsuri_knee_socks',
    name: 'みつりニーハイソックス＆草履',
    slotCategory: SlotCategory.SHOES,
    svgContent: `
<!-- Mitsuri: Striped light green over-knee socks with pink tied zori sandals -->
  <path d="M 129 270 L 146 270 L 144 354 L 126 354 Z" fill="#84cc16"/>
  <line x1="129" y1="285" x2="146" y2="285" stroke="#65a30d" stroke-width="2"/>
  <line x1="128" y1="305" x2="145" y2="305" stroke="#65a30d" stroke-width="2"/>
  <line x1="127" y1="325" x2="144" y2="325" stroke="#65a30d" stroke-width="2"/>
  <path d="M 154 270 L 171 270 L 173 354 L 156 354 Z" fill="#84cc16"/>
  <line x1="154" y1="285" x2="171" y2="285" stroke="#65a30d" stroke-width="2"/>
  <line x1="155" y1="305" x2="172" y2="305" stroke="#65a30d" stroke-width="2"/>
  <line x1="156" y1="325" x2="173" y2="325" stroke="#65a30d" stroke-width="2"/>
  <rect x="120" y="354" width="26" height="5" rx="2" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
  <path d="M 126 354 L 133 350 L 140 354" stroke="#f43f5e" stroke-width="2" fill="none"/>
  <rect x="154" y="354" width="26" height="5" rx="2" fill="#fde047" stroke="#ca8a04" stroke-width="1"/>
  <path d="M 160 354 L 167 350 L 174 354" stroke="#f43f5e" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_precure_wonderful_skirt',
    name: 'わんだふる3段フリルチュチュスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Precure Wonderful: Three-tiered pink fluffy tutu skirt with gold stars -->
  <path d="M 126 230 Q 150 238 174 230 L 182 250 Q 150 260 118 250 Z" fill="#fda4af"/>
  <path d="M 118 250 Q 150 260 182 250 L 188 270 Q 150 282 112 270 Z" fill="#fb7185"/>
  <path d="M 112 270 Q 150 282 188 270 L 194 290 Q 150 304 106 290 Z" fill="#fff1f2" stroke="#fda4af" stroke-width="1.2"/>
  <polygon points="135,260 137,264 141,264 138,267 139,271 135,269 131,271 132,267 129,264 133,264" fill="#facc15"/>
  <polygon points="165,260 167,264 171,264 168,267 169,271 165,269 161,271 162,267 159,264 163,264" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_precure_friendy_apron_skirt',
    name: 'フレンディカントリーチェックスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Precure Friendy: Mint & white country gingham flared skirt with scalloped lace -->
  <path d="M 126 230 Q 150 236 174 230 L 188 280 Q 150 292 112 280 Z" fill="#6ee7b7"/>
  <path d="M 122 245 Q 150 252 178 245 M 118 262 Q 150 270 182 262" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.8"/>
  <line x1="135" y1="233" x2="130" y2="282" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <line x1="150" y1="235" x2="150" y2="288" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <line x1="165" y1="233" x2="170" y2="282" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <path d="M 112 280 Q 118 285 124 280 Q 130 285 136 280 Q 142 285 148 280 Q 154 285 160 280 Q 166 285 172 280 Q 178 285 188 280" stroke="#ffffff" stroke-width="2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_precure_nyammy_flare',
    name: 'ニャミープリーツマーメイドスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Precure Nyammy: High-waist lavender mermaid flared skirt with pearl chain -->
  <path d="M 126 226 L 174 226 L 176 255 Q 150 260 124 255 Z" fill="#c084fc"/>
  <path d="M 124 255 Q 150 260 176 255 L 192 290 Q 150 302 108 290 Z" fill="#e0e7ff" stroke="#a855f7" stroke-width="1.2"/>
  <circle cx="135" cy="235" r="2" fill="#ffffff"/>
  <circle cx="142" cy="238" r="2" fill="#ffffff"/>
  <circle cx="150" cy="239" r="2.5" fill="#ffffff"/>
  <circle cx="158" cy="238" r="2.5" fill="#ffffff"/>
  <circle cx="165" cy="235" r="2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'bottoms_precure_sky_layered_skirt',
    name: 'スカイオーガンジーレイヤードスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Cure Sky: Cyan & magenta dual-layer fluttering organza skirt -->
  <path d="M 124 230 Q 150 236 176 230 L 190 284 Q 150 296 110 284 Z" fill="#f43f5e"/>
  <path d="M 124 230 Q 150 236 176 230 L 185 268 Q 150 278 115 268 Z" fill="#38bdf8" opacity="0.9"/>
  <rect x="126" y="228" width="48" height="5" rx="2" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_aipri_idol_pleated_skirt',
    name: 'アイプリスターライトチェックプリーツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- AiPri: Vibrant pink-purple idol pleated miniskirt with heart buckle belt -->
  <path d="M 125 228 L 175 228 L 186 270 Q 150 278 114 270 Z" fill="#ec4899"/>
  <line x1="128" y1="230" x2="122" y2="270" stroke="#be185d" stroke-width="1.5"/>
  <line x1="138" y1="230" x2="136" y2="273" stroke="#be185d" stroke-width="1.5"/>
  <line x1="150" y1="230" x2="150" y2="275" stroke="#be185d" stroke-width="1.5"/>
  <line x1="162" y1="230" x2="164" y2="273" stroke="#be185d" stroke-width="1.5"/>
  <line x1="172" y1="230" x2="178" y2="270" stroke="#be185d" stroke-width="1.5"/>
  <rect x="125" y="228" width="50" height="4" fill="#18181b"/>
  <circle cx="150" cy="230" r="3.5" fill="#facc15"/>
    `,
  }),
  new Item({
    id: 'bottoms_chiikawa_bloomers',
    name: 'ちいかわふわもこかぼちゃパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Chiikawa: Ultra-cute puffy white marshmallow pumpkin bloomers with fluffy tail -->
  <ellipse cx="150" cy="254" rx="28" ry="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <ellipse cx="136" cy="265" rx="12" ry="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <ellipse cx="164" cy="265" rx="12" ry="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <circle cx="150" cy="242" r="2" fill="#38bdf8"/>
  <path d="M 148 242 C 144 240 144 244 148 245 M 152 242 C 156 240 156 244 152 245" stroke="#38bdf8" stroke-width="1.2" fill="none"/>
    `,
  }),
  new Item({
    id: 'bottoms_hachiware_denim_shorts',
    name: 'ハチワレおでかけデニムショートパンツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Hachiware: Washed light-blue denim shorts with paw embroidery -->
  <path d="M 126 230 L 174 230 L 178 265 L 154 265 L 150 250 L 146 265 L 122 265 Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.2"/>
  <line x1="126" y1="234" x2="174" y2="234" stroke="#fef08a" stroke-width="1" stroke-dasharray="2,2"/>
  <circle cx="165" cy="252" r="2.5" fill="#ffffff"/>
  <circle cx="162" cy="248" r="1.2" fill="#ffffff"/>
  <circle cx="165" cy="247" r="1.2" fill="#ffffff"/>
  <circle cx="168" cy="248" r="1.2" fill="#ffffff"/>
    `,
  }),
  new Item({
    id: 'bottoms_sumikko_relaxed_skirt',
    name: 'すみっコナチュラルギャザースカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Sumikko: Soft beige gathered skirt with pastel dots -->
  <path d="M 126 230 L 174 230 L 185 285 Q 150 295 115 285 Z" fill="#fef3c7" stroke="#fde68a" stroke-width="1.2"/>
  <path d="M 135 235 Q 133 260 130 285 M 150 235 Q 150 260 150 290 M 165 235 Q 167 260 170 285" stroke="#fcd34d" stroke-width="1" fill="none"/>
  <circle cx="132" cy="255" r="2.5" fill="#fbcfe8"/>
  <circle cx="148" cy="270" r="2.5" fill="#a7f3d0"/>
  <circle cx="166" cy="252" r="2.5" fill="#bae6fd"/>
    `,
  }),
  new Item({
    id: 'bottoms_detective_trousers',
    name: '名探偵スマートサスペンダーショーツ',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Detective: Classic navy tailored shorts with buttoned suspenders -->
  <line x1="134" y1="180" x2="134" y2="230" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="166" y1="180" x2="166" y2="230" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="134" cy="232" r="2" fill="#facc15"/>
  <circle cx="166" cy="232" r="2" fill="#facc15"/>
  <path d="M 126 230 L 174 230 L 177 270 L 153 270 L 150 252 L 147 270 L 123 270 Z" fill="#1e293b"/>
  <line x1="135" y1="234" x2="135" y2="268" stroke="#334155" stroke-width="1.2"/>
  <line x1="165" y1="234" x2="165" y2="268" stroke="#334155" stroke-width="1.2"/>
    `,
  }),
  new Item({
    id: 'bottoms_kimetsu_hakama_skirt',
    name: '大正浪漫モダン袴プリーツスカート',
    slotCategory: SlotCategory.BOTTOMS,
    svgContent: `
<!-- Demon Slayer: Traditional pleated hakama skirt in deep plum with floral sash -->
  <path d="M 124 228 L 176 228 L 188 300 Q 150 310 112 300 Z" fill="#581c87"/>
  <line x1="126" y1="235" x2="120" y2="300" stroke="#3b0764" stroke-width="2"/>
  <line x1="138" y1="235" x2="135" y2="304" stroke="#3b0764" stroke-width="2"/>
  <line x1="150" y1="235" x2="150" y2="307" stroke="#3b0764" stroke-width="2"/>
  <line x1="162" y1="235" x2="165" y2="304" stroke="#3b0764" stroke-width="2"/>
  <line x1="174" y1="235" x2="180" y2="300" stroke="#3b0764" stroke-width="2"/>
  <rect x="124" y="228" width="52" height="6" fill="#ffffff"/>
  <circle cx="150" cy="231" r="3" fill="#facc15"/>
    `,
  }),
];