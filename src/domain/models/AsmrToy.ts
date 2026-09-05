export const AsmrSoundType = {
  BUBBLE_WRAP: 'bubble_wrap',
  SOAP_CUTTING: 'soap_cutting',
  SLIME: 'slime',
  KEYBOARD: 'keyboard',
  CRYSTAL_TAP: 'crystal_tap',
} as const;

export type AsmrSoundType = (typeof AsmrSoundType)[keyof typeof AsmrSoundType];

export interface AsmrToyProps {
  id: string;
  name: string;
  description: string;
  soundType: AsmrSoundType;
  unlockCost: number;
  baseCoinYield: number;
  icon: string;
}

export class AsmrToy {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly soundType: AsmrSoundType;
  readonly unlockCost: number;
  readonly baseCoinYield: number;
  readonly icon: string;

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
  }

  isFreeToUnlock(): boolean {
    return this.unlockCost === 0;
  }
}
