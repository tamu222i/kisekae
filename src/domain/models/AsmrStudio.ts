import { AsmrToy } from './AsmrToy';

export interface AsmrStudioProps {
  coins: number;
  totalTaps: number;
  activeToyId: string;
  unlockedToyIds: Set<string>;
  tapPowerLevel: number;
  autoCollectorLevel: number;
  isAutoCollectEnabled?: boolean;
}

export interface AsmrStudioJSON {
  coins: number;
  totalTaps: number;
  activeToyId: string;
  unlockedToyIds: string[];
  tapPowerLevel: number;
  autoCollectorLevel: number;
  isAutoCollectEnabled?: boolean;
}

export class AsmrStudio {
  private _coins: number;
  private _totalTaps: number;
  private _activeToyId: string;
  private _unlockedToyIds: Set<string>;
  private _tapPowerLevel: number;
  private _autoCollectorLevel: number;
  private _isAutoCollectEnabled: boolean;

  private constructor(props: AsmrStudioProps) {
    if (props.coins < 0) {
      throw new Error('Studio coins must be non-negative');
    }
    if (props.totalTaps < 0) {
      throw new Error('Studio totalTaps must be non-negative');
    }
    if (props.tapPowerLevel < 1) {
      throw new Error('Studio tapPowerLevel must be at least 1');
    }
    if (props.autoCollectorLevel < 0) {
      throw new Error('Studio autoCollectorLevel must be non-negative');
    }
    if (!props.unlockedToyIds.has(props.activeToyId)) {
      throw new Error('Studio activeToyId must be one of the unlocked toys');
    }

    this._coins = props.coins;
    this._totalTaps = props.totalTaps;
    this._activeToyId = props.activeToyId;
    this._unlockedToyIds = new Set(props.unlockedToyIds);
    this._tapPowerLevel = props.tapPowerLevel;
    this._autoCollectorLevel = props.autoCollectorLevel;
    this._isAutoCollectEnabled = props.isAutoCollectEnabled ?? true;
  }

  static create(props: AsmrStudioProps): AsmrStudio {
    return new AsmrStudio(props);
  }

  static createDefault(initialToyId: string): AsmrStudio {
    return new AsmrStudio({
      coins: 0,
      totalTaps: 0,
      activeToyId: initialToyId,
      unlockedToyIds: new Set([initialToyId]),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
      isAutoCollectEnabled: true,
    });
  }

  get coins(): number {
    return this._coins;
  }

  get totalTaps(): number {
    return this._totalTaps;
  }

  get activeToyId(): string {
    return this._activeToyId;
  }

  get unlockedToyIds(): ReadonlySet<string> {
    return this._unlockedToyIds;
  }

  get tapPowerLevel(): number {
    return this._tapPowerLevel;
  }

  get autoCollectorLevel(): number {
    return this._autoCollectorLevel;
  }

  get isAutoCollectEnabled(): boolean {
    return this._isAutoCollectEnabled;
  }

  toggleAutoCollect(): void {
    this._isAutoCollectEnabled = !this._isAutoCollectEnabled;
  }

  setAutoCollectEnabled(enabled: boolean): void {
    this._isAutoCollectEnabled = enabled;
  }

  isToyUnlocked(toyId: string): boolean {
    return this._unlockedToyIds.has(toyId);
  }

  tap(toy: AsmrToy): { coinsEarned: number; newTotalCoins: number; totalTaps: number } {
    if (toy.id !== this._activeToyId || !this.isToyUnlocked(toy.id)) {
      throw new Error('Cannot tap locked or inactive toy');
    }

    const coinsEarned = toy.baseCoinYield * this._tapPowerLevel;
    this._coins += coinsEarned;
    this._totalTaps += 1;

    return {
      coinsEarned,
      newTotalCoins: this._coins,
      totalTaps: this._totalTaps,
    };
  }

  selectToy(toyId: string): void {
    if (!this.isToyUnlocked(toyId)) {
      throw new Error(`Toy ${toyId} is locked`);
    }
    this._activeToyId = toyId;
  }

  unlockToy(toy: AsmrToy): void {
    if (this.isToyUnlocked(toy.id)) {
      throw new Error(`Toy ${toy.id} is already unlocked`);
    }
    if (this._coins < toy.unlockCost) {
      throw new Error('Not enough coins to unlock toy');
    }

    this._coins -= toy.unlockCost;
    this._unlockedToyIds.add(toy.id);
    this._activeToyId = toy.id;
  }

  getTapPowerUpgradeCost(): number {
    return Math.floor(25 * Math.pow(1.8, this._tapPowerLevel - 1));
  }

  upgradeTapPower(): void {
    const cost = this.getTapPowerUpgradeCost();
    if (this._coins < cost) {
      throw new Error('Not enough coins to upgrade tap power');
    }
    this._coins -= cost;
    this._tapPowerLevel += 1;
  }

  getAutoCollectorUpgradeCost(): number {
    return Math.floor(50 * Math.pow(2.0, this._autoCollectorLevel));
  }

  upgradeAutoCollector(): void {
    const cost = this.getAutoCollectorUpgradeCost();
    if (this._coins < cost) {
      throw new Error('Not enough coins to upgrade auto collector');
    }
    this._coins -= cost;
    this._autoCollectorLevel += 1;
  }

  getCoinsPerSecond(toy: AsmrToy): number {
    if (!this._isAutoCollectEnabled || this._autoCollectorLevel === 0) return 0;
    return this._autoCollectorLevel * (toy.baseCoinYield * 0.5);
  }

  tickAutoCollect(seconds: number, toy: AsmrToy): number {
    if (!this._isAutoCollectEnabled || seconds <= 0 || this._autoCollectorLevel === 0) return 0;
    const rate = this.getCoinsPerSecond(toy);
    const earned = Math.floor(rate * seconds);
    this._coins += earned;
    return earned;
  }

  toJSON(): AsmrStudioJSON {
    return {
      coins: this._coins,
      totalTaps: this._totalTaps,
      activeToyId: this._activeToyId,
      unlockedToyIds: Array.from(this._unlockedToyIds),
      tapPowerLevel: this._tapPowerLevel,
      autoCollectorLevel: this._autoCollectorLevel,
      isAutoCollectEnabled: this._isAutoCollectEnabled,
    };
  }

  static fromJSON(json: AsmrStudioJSON): AsmrStudio {
    return new AsmrStudio({
      coins: json.coins,
      totalTaps: json.totalTaps,
      activeToyId: json.activeToyId,
      unlockedToyIds: new Set(json.unlockedToyIds),
      tapPowerLevel: json.tapPowerLevel,
      autoCollectorLevel: json.autoCollectorLevel,
      isAutoCollectEnabled: json.isAutoCollectEnabled ?? true,
    });
  }
}

