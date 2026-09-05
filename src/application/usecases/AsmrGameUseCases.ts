import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { AsmrToy, AsmrSoundType } from '../../domain/models/AsmrToy';
import { IAsmrToyRepository } from '../../domain/repositories/IAsmrToyRepository';

export interface IStudioStorage {
  load(): Promise<AsmrStudio | null>;
  save(studio: AsmrStudio): Promise<void>;
}

export interface TapResult {
  soundType: AsmrSoundType;
  coinsEarned: number;
  newTotalCoins: number;
  totalTaps: number;
}

export class AsmrGameUseCases {
  constructor(
    private readonly toyRepository: IAsmrToyRepository,
    private readonly studioStorage: IStudioStorage
  ) {}

  async loadOrCreateStudio(defaultToyId: string): Promise<AsmrStudio> {
    const existing = await this.studioStorage.load();
    if (existing) {
      return existing;
    }
    const defaultStudio = AsmrStudio.createDefault(defaultToyId);
    await this.studioStorage.save(defaultStudio);
    return defaultStudio;
  }

  async saveStudio(studio: AsmrStudio): Promise<void> {
    await this.studioStorage.save(studio);
  }

  async getAllToys(): Promise<readonly AsmrToy[]> {
    return this.toyRepository.getAll();
  }

  async getToyById(id: string): Promise<AsmrToy | undefined> {
    return this.toyRepository.getById(id);
  }

  async getActiveToy(studio: AsmrStudio): Promise<AsmrToy> {
    const toy = await this.toyRepository.getById(studio.activeToyId);
    if (!toy) {
      throw new Error(`Active toy ${studio.activeToyId} not found in catalog`);
    }
    return toy;
  }

  async tap(studio: AsmrStudio): Promise<TapResult> {
    const toy = await this.getActiveToy(studio);
    const result = studio.tap(toy);
    return {
      soundType: toy.soundType,
      coinsEarned: result.coinsEarned,
      newTotalCoins: result.newTotalCoins,
      totalTaps: result.totalTaps,
    };
  }

  async selectToy(studio: AsmrStudio, toyId: string): Promise<void> {
    studio.selectToy(toyId);
  }

  async unlockToy(studio: AsmrStudio, toyId: string): Promise<boolean> {
    const toy = await this.toyRepository.getById(toyId);
    if (!toy) {
      throw new Error(`Toy ${toyId} not found in catalog`);
    }
    studio.unlockToy(toy);
    return true;
  }

  async upgradeTapPower(studio: AsmrStudio): Promise<void> {
    studio.upgradeTapPower();
  }

  async upgradeAutoCollector(studio: AsmrStudio): Promise<void> {
    studio.upgradeAutoCollector();
  }

  async tickAutoCollect(studio: AsmrStudio, deltaSeconds: number): Promise<number> {
    const toy = await this.getActiveToy(studio);
    return studio.tickAutoCollect(deltaSeconds, toy);
  }
}
