import { describe, it, expect, beforeEach } from 'vitest';
import { LocalStorageStudioRepository } from './LocalStorageStudioRepository';
import { AsmrStudio } from '../../domain/models/AsmrStudio';

describe('LocalStorageStudioRepository', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves and loads studio state from localStorage', async () => {
    const repo = new LocalStorageStudioRepository('test_studio_key');
    const studio = AsmrStudio.create({
      coins: 450,
      totalTaps: 120,
      activeToyId: 'toy_soap_cutting',
      unlockedToyIds: new Set(['toy_bubble_wrap', 'toy_soap_cutting']),
      tapPowerLevel: 2,
      autoCollectorLevel: 1,
    });

    await repo.save(studio);

    const loaded = await repo.load();
    expect(loaded).toBeDefined();
    expect(loaded?.coins).toBe(450);
    expect(loaded?.totalTaps).toBe(120);
    expect(loaded?.activeToyId).toBe('toy_soap_cutting');
    expect(loaded?.isToyUnlocked('toy_soap_cutting')).toBe(true);
  });

  it('returns null if no data in localStorage', async () => {
    const repo = new LocalStorageStudioRepository('test_empty_key');
    const loaded = await repo.load();
    expect(loaded).toBeNull();
  });
});
