import { describe, it, expect, beforeEach } from 'vitest';
import { AsmrGameUseCases, IStudioStorage } from './AsmrGameUseCases';
import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { AsmrToy } from '../../domain/models/AsmrToy';
import { IAsmrToyRepository } from '../../domain/repositories/IAsmrToyRepository';

class MockToyRepository implements IAsmrToyRepository {
  private toys: AsmrToy[] = [
    new AsmrToy({
      id: 'toy_bubble_wrap',
      name: 'ぷちぷちバブルラップ',
      description: '気泡をつぶしてポコポコ爽快！',
      soundType: 'bubble_wrap',
      unlockCost: 0,
      baseCoinYield: 1,
      icon: '🫧',
    }),
    new AsmrToy({
      id: 'toy_soap_cutting',
      name: 'サクサク石鹸カット',
      description: 'スワイプでサクサク！',
      soundType: 'soap_cutting',
      unlockCost: 50,
      baseCoinYield: 3,
      icon: '🧼',
    }),
  ];

  async getAll(): Promise<readonly AsmrToy[]> {
    return this.toys;
  }

  async getById(id: string): Promise<AsmrToy | undefined> {
    return this.toys.find((t) => t.id === id);
  }
}

class MockStudioStorage implements IStudioStorage {
  public data: string | null = null;

  async load(): Promise<AsmrStudio | null> {
    if (!this.data) return null;
    return AsmrStudio.fromJSON(JSON.parse(this.data));
  }

  async save(studio: AsmrStudio): Promise<void> {
    this.data = JSON.stringify(studio.toJSON());
  }
}

describe('AsmrGameUseCases', () => {
  let toyRepo: MockToyRepository;
  let storage: MockStudioStorage;
  let useCases: AsmrGameUseCases;

  beforeEach(() => {
    toyRepo = new MockToyRepository();
    storage = new MockStudioStorage();
    useCases = new AsmrGameUseCases(toyRepo, storage);
  });

  it('loads existing studio or creates default if empty', async () => {
    const studio = await useCases.loadOrCreateStudio('toy_bubble_wrap');
    expect(studio.activeToyId).toBe('toy_bubble_wrap');
    expect(studio.coins).toBe(0);

    // Modify and save
    studio.tap(await toyRepo.getById('toy_bubble_wrap') as AsmrToy);
    await useCases.saveStudio(studio);

    // Reload
    const reloaded = await useCases.loadOrCreateStudio('toy_bubble_wrap');
    expect(reloaded.coins).toBe(1);
  });

  it('handles tap operation and returns soundType and coin details', async () => {
    const studio = await useCases.loadOrCreateStudio('toy_bubble_wrap');
    const result = await useCases.tap(studio);

    expect(result.soundType).toBe('bubble_wrap');
    expect(result.coinsEarned).toBe(1);
    expect(result.newTotalCoins).toBe(1);
    expect(result.totalTaps).toBe(1);
  });

  it('unlocks a toy through use case and switches active toy', async () => {
    const studio = AsmrStudio.create({
      coins: 100,
      totalTaps: 10,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    const success = await useCases.unlockToy(studio, 'toy_soap_cutting');
    expect(success).toBe(true);
    expect(studio.isToyUnlocked('toy_soap_cutting')).toBe(true);
    expect(studio.activeToyId).toBe('toy_soap_cutting');
    expect(studio.coins).toBe(50);
  });

  it('switches between unlocked toys', async () => {
    const studio = AsmrStudio.create({
      coins: 0,
      totalTaps: 10,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap', 'toy_soap_cutting']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    await useCases.selectToy(studio, 'toy_soap_cutting');
    expect(studio.activeToyId).toBe('toy_soap_cutting');
  });

  it('upgrades tap power and auto collector', async () => {
    const studio = AsmrStudio.create({
      coins: 100,
      totalTaps: 10,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    await useCases.upgradeTapPower(studio);
    expect(studio.tapPowerLevel).toBe(2);

    await useCases.upgradeAutoCollector(studio);
    expect(studio.autoCollectorLevel).toBe(1);
  });

  it('ticks auto collection using active toy yield', async () => {
    const studio = AsmrStudio.create({
      coins: 0,
      totalTaps: 10,
      activeToyId: 'toy_soap_cutting',
      unlockedToyIds: new Set(['toy_soap_cutting']),
      tapPowerLevel: 1,
      autoCollectorLevel: 2, // 2 * (3 * 0.5) = 3 coins/sec
    });

    const earned = await useCases.tickAutoCollect(studio, 2);
    expect(earned).toBe(6); // 2 sec * 3 = 6
    expect(studio.coins).toBe(6);
  });
});
