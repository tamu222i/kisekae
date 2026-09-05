import { describe, it, expect } from 'vitest';
import { AsmrStudio } from './AsmrStudio';
import { AsmrToy } from './AsmrToy';

describe('AsmrStudio Aggregate', () => {
  const bubbleToy = new AsmrToy({
    id: 'toy_bubble_wrap',
    name: 'ぷちぷちバブルラップ',
    description: '気泡をつぶしてポコポコ爽快！',
    soundType: 'bubble_wrap',
    unlockCost: 0,
    baseCoinYield: 1,
    icon: '🫧',
  });

  const soapToy = new AsmrToy({
    id: 'toy_soap_cutting',
    name: 'サクサク石鹸カット',
    description: 'スワイプでサクサクキューブ！',
    soundType: 'soap_cutting',
    unlockCost: 50,
    baseCoinYield: 3,
    icon: '🧼',
  });

  it('creates default studio with initial toy unlocked and 0 coins', () => {
    const studio = AsmrStudio.createDefault('toy_bubble_wrap');
    expect(studio.coins).toBe(0);
    expect(studio.totalTaps).toBe(0);
    expect(studio.activeToyId).toBe('toy_bubble_wrap');
    expect(studio.isToyUnlocked('toy_bubble_wrap')).toBe(true);
    expect(studio.isToyUnlocked('toy_soap_cutting')).toBe(false);
    expect(studio.tapPowerLevel).toBe(1);
    expect(studio.autoCollectorLevel).toBe(0);
  });

  it('earns coins on tap according to toy yield and tap power', () => {
    const studio = AsmrStudio.createDefault('toy_bubble_wrap');
    const result = studio.tap(bubbleToy);

    expect(result.coinsEarned).toBe(1);
    expect(studio.coins).toBe(1);
    expect(studio.totalTaps).toBe(1);
  });

  it('fails to tap an unlocked toy if it is not the active toy', () => {
    const studio = AsmrStudio.createDefault('toy_bubble_wrap');
    expect(() => studio.tap(soapToy)).toThrowError('Cannot tap locked or inactive toy');
  });

  it('unlocks a toy when sufficient coins are available and switches active toy', () => {
    const studio = AsmrStudio.create({
      coins: 100,
      totalTaps: 50,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    studio.unlockToy(soapToy);

    expect(studio.coins).toBe(50); // 100 - 50
    expect(studio.isToyUnlocked('toy_soap_cutting')).toBe(true);
    expect(studio.activeToyId).toBe('toy_soap_cutting');
  });

  it('fails to unlock a toy without enough coins', () => {
    const studio = AsmrStudio.createDefault('toy_bubble_wrap');
    expect(() => studio.unlockToy(soapToy)).toThrowError('Not enough coins to unlock toy');
  });

  it('upgrades tap power and increases coin yield', () => {
    const studio = AsmrStudio.create({
      coins: 30,
      totalTaps: 10,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    const cost = studio.getTapPowerUpgradeCost();
    expect(cost).toBe(25);

    studio.upgradeTapPower();
    expect(studio.tapPowerLevel).toBe(2);
    expect(studio.coins).toBe(5);

    // Tap yield should now be baseCoinYield (1) * tapPowerLevel (2) = 2
    const result = studio.tap(bubbleToy);
    expect(result.coinsEarned).toBe(2);
    expect(studio.coins).toBe(7);
  });

  it('handles auto-collector upgrades and ticks', () => {
    const studio = AsmrStudio.create({
      coins: 100,
      totalTaps: 10,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: new Set(['toy_bubble_wrap']),
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });

    const cost = studio.getAutoCollectorUpgradeCost();
    expect(cost).toBe(50);

    studio.upgradeAutoCollector();
    expect(studio.autoCollectorLevel).toBe(1);
    expect(studio.coins).toBe(50);

    // 1 second tick with level 1 auto collector and bubbleToy (yield: 1, rate: 0.5)
    const earned = studio.tickAutoCollect(2, bubbleToy);
    expect(earned).toBe(1); // 2 sec * 1 * 0.5 = 1
    expect(studio.coins).toBe(51);
  });

  it('serializes to and from JSON cleanly', () => {
    const original = AsmrStudio.create({
      coins: 250,
      totalTaps: 400,
      activeToyId: 'toy_soap_cutting',
      unlockedToyIds: new Set(['toy_bubble_wrap', 'toy_soap_cutting']),
      tapPowerLevel: 3,
      autoCollectorLevel: 2,
    });

    const json = original.toJSON();
    const restored = AsmrStudio.fromJSON(json);

    expect(restored.coins).toBe(250);
    expect(restored.totalTaps).toBe(400);
    expect(restored.activeToyId).toBe('toy_soap_cutting');
    expect(restored.isToyUnlocked('toy_bubble_wrap')).toBe(true);
    expect(restored.isToyUnlocked('toy_soap_cutting')).toBe(true);
    expect(restored.tapPowerLevel).toBe(3);
    expect(restored.autoCollectorLevel).toBe(2);
  });
});
