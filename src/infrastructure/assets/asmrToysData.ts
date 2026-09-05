import { AsmrToy } from '../../domain/models/AsmrToy';

export const DEFAULT_ASMR_TOYS: readonly AsmrToy[] = [
  new AsmrToy({
    id: 'toy_bubble_wrap',
    name: 'ぷちぷちバブルラップ',
    description: '気泡をつぶしてポコポコ爽快！タップするたび心地よいパチン音。',
    soundType: 'bubble_wrap',
    unlockCost: 0,
    baseCoinYield: 1,
    icon: '🫧',
  }),
  new AsmrToy({
    id: 'toy_soap_cutting',
    name: 'サクサク石鹸カット',
    description: 'スワイプで色とりどりの石鹸キューブを削る、至高のサクサク音。',
    soundType: 'soap_cutting',
    unlockCost: 50,
    baseCoinYield: 3,
    icon: '🧼',
  }),
  new AsmrToy({
    id: 'toy_slime',
    name: 'むにむにスライム',
    description: '指でこねて広げる、ぷるぷる＆ウェットな癒やしのむにゅ音。',
    soundType: 'slime',
    unlockCost: 200,
    baseCoinYield: 8,
    icon: '🟢',
  }),
  new AsmrToy({
    id: 'toy_keyboard',
    name: 'カチカチキーボード',
    description: 'メカニカルキースイッチの心地よいタイピング音とコトコト反響音。',
    soundType: 'keyboard',
    unlockCost: 600,
    baseCoinYield: 20,
    icon: '⌨️',
  }),
  new AsmrToy({
    id: 'toy_crystal_tap',
    name: 'きらめくクリスタル',
    description: '神秘的な宝石やクリスタルガラスを爪先で優しくタッピングする美音。',
    soundType: 'crystal_tap',
    unlockCost: 1500,
    baseCoinYield: 50,
    icon: '💎',
  }),
];
