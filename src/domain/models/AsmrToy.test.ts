import { describe, it, expect } from 'vitest';
import { AsmrToy, AsmrSoundType } from './AsmrToy';

describe('AsmrToy Entity', () => {
  it('creates an AsmrToy with valid properties', () => {
    const toy = new AsmrToy({
      id: 'toy_bubble_wrap',
      name: 'ぷちぷちバブルラップ',
      description: '気泡をつぶしてポコポコ爽快！',
      soundType: 'bubble_wrap',
      unlockCost: 0,
      baseCoinYield: 1,
      icon: '🫧',
    });

    expect(toy.id).toBe('toy_bubble_wrap');
    expect(toy.name).toBe('ぷちぷちバブルラップ');
    expect(toy.soundType).toBe('bubble_wrap');
    expect(toy.unlockCost).toBe(0);
    expect(toy.baseCoinYield).toBe(1);
    expect(toy.isFreeToUnlock()).toBe(true);
  });

  it('validates invariants and throws on invalid properties', () => {
    expect(() => {
      new AsmrToy({
        id: '',
        name: 'Invalid',
        description: 'desc',
        soundType: 'slime',
        unlockCost: 0,
        baseCoinYield: 1,
        icon: '🟢',
      });
    }).toThrowError('AsmrToy id must not be empty');

    expect(() => {
      new AsmrToy({
        id: 'toy_1',
        name: '',
        description: 'desc',
        soundType: 'slime',
        unlockCost: 0,
        baseCoinYield: 1,
        icon: '🟢',
      });
    }).toThrowError('AsmrToy name must not be empty');

    expect(() => {
      new AsmrToy({
        id: 'toy_1',
        name: 'Toy',
        description: 'desc',
        soundType: 'slime',
        unlockCost: -10,
        baseCoinYield: 1,
        icon: '🟢',
      });
    }).toThrowError('AsmrToy unlockCost must be non-negative');

    expect(() => {
      new AsmrToy({
        id: 'toy_1',
        name: 'Toy',
        description: 'desc',
        soundType: 'slime',
        unlockCost: 50,
        baseCoinYield: 0,
        icon: '🟢',
      });
    }).toThrowError('AsmrToy baseCoinYield must be greater than zero');
  });

  it('correctly reports if toy is free to unlock', () => {
    const freeToy = new AsmrToy({
      id: 'free',
      name: 'Free',
      description: 'desc',
      soundType: 'bubble_wrap',
      unlockCost: 0,
      baseCoinYield: 1,
      icon: '🫧',
    });
    const paidToy = new AsmrToy({
      id: 'paid',
      name: 'Paid',
      description: 'desc',
      soundType: 'slime',
      unlockCost: 100,
      baseCoinYield: 5,
      icon: '🟢',
    });

    expect(freeToy.isFreeToUnlock()).toBe(true);
    expect(paidToy.isFreeToUnlock()).toBe(false);
  });
});
