import { describe, it, expect } from 'vitest';
import { InMemoryAsmrToyRepository } from './InMemoryAsmrToyRepository';
import { DEFAULT_ASMR_TOYS } from '../assets/asmrToysData';

describe('InMemoryAsmrToyRepository', () => {
  it('contains all 5 ASMR toys by default', async () => {
    const repo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
    const toys = await repo.getAll();

    expect(toys).toHaveLength(20);
    const ids = toys.map((t) => t.id);
    expect(ids).toContain('toy_bubble_wrap');
    expect(ids).toContain('toy_potato_chips');
    expect(ids).toContain('toy_shaved_ice');
    expect(ids).toContain('toy_crystal_tap');
  });

  it('retrieves an existing toy by id', async () => {
    const repo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
    const toy = await repo.getById('toy_bubble_wrap');

    expect(toy).toBeDefined();
    expect(toy?.soundType).toBe('bubble_wrap');
    expect(toy?.unlockCost).toBe(0);
  });

  it('returns undefined for non-existent toy', async () => {
    const repo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
    const toy = await repo.getById('non_existent');
    expect(toy).toBeUndefined();
  });
});
