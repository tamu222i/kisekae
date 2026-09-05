export const AsmrSoundType = {
  BUBBLE_WRAP: 'bubble_wrap',
  SOAP_CUTTING: 'soap_cutting',
  SLIME: 'slime',
  KEYBOARD: 'keyboard',
  CRYSTAL_TAP: 'crystal_tap',
  POTATO_CHIPS: 'potato_chips',
  SHAVED_ICE: 'shaved_ice',
  CARBONATED_SODA: 'carbonated_soda',
  SCISSORS_HAIRCUT: 'scissors_haircut',
  BOOK_PAGE_FLIP: 'book_page_flip',
  AUTUMN_LEAVES: 'autumn_leaves',
  WOOD_BLOCK_CLACK: 'wood_block_clack',
  MATCH_IGNITE: 'match_ignite',
  RAIN_UMBRELLA: 'rain_umbrella',
  CLOCK_TICK: 'clock_tick',
  WATER_DROP_CAVE: 'water_drop_cave',
  FIRE_CRACKLING: 'fire_crackling',
  WHISPER_EAR_PICK: 'whisper_ear_pick',
  CAT_PURR: 'cat_purr',
  BELL_WIND_CHIME: 'bell_wind_chime',
} as const;

export type AsmrSoundType = (typeof AsmrSoundType)[keyof typeof AsmrSoundType];

export const AsmrToyCategory = {
  ALL: 'all',
  FOOD: 'food',
  TACTILE: 'tactile',
  RELAX: 'relax',
  NATURE: 'nature',
} as const;

export type AsmrToyCategory = (typeof AsmrToyCategory)[keyof typeof AsmrToyCategory];

export interface AsmrToyProps {
  id: string;
  name: string;
  description: string;
  soundType: AsmrSoundType;
  unlockCost: number;
  baseCoinYield: number;
  icon: string;
  category?: AsmrToyCategory;
}

export class AsmrToy {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly soundType: AsmrSoundType;
  readonly unlockCost: number;
  readonly baseCoinYield: number;
  readonly icon: string;
  readonly category: AsmrToyCategory;

  constructor(props: AsmrToyProps) {
    if (!props.id || props.id.trim() === '') {
      throw new Error('AsmrToy id must not be empty');
    }
    if (!props.name || props.name.trim() === '') {
      throw new Error('AsmrToy name must not be empty');
    }
    if (props.unlockCost < 0) {
      throw new Error('AsmrToy unlockCost must be non-negative');
    }
    if (props.baseCoinYield <= 0) {
      throw new Error('AsmrToy baseCoinYield must be greater than zero');
    }

    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.soundType = props.soundType;
    this.unlockCost = props.unlockCost;
    this.baseCoinYield = props.baseCoinYield;
    this.icon = props.icon;
    this.category = props.category ?? AsmrToyCategory.TACTILE;
  }

  isFreeToUnlock(): boolean {
    return this.unlockCost === 0;
  }
}
