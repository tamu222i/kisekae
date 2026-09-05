import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useKisekaeGame } from './useKisekaeGame';
import { InMemoryItemRepository } from '../../infrastructure/repositories/InMemoryItemRepository';
import { ALL_ITEMS } from '../../infrastructure/assets/itemsData';
import { SlotCategory } from '../../domain/models/SlotCategory';

describe('useKisekaeGame hook', () => {
  let repository: InMemoryItemRepository;

  beforeEach(() => {
    repository = new InMemoryItemRepository(ALL_ITEMS);
  });

  it('initializes with default outfit and catalog', async () => {
    const { result } = renderHook(() => useKisekaeGame(repository));

    // Wait for initial async state to settle
    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.outfit).not.toBeNull();
    expect(result.current.catalog.length).toBeGreaterThan(0);
    expect(result.current.selectedCategory).toBe(SlotCategory.TOPS);
  });

  it('equips and unequips items', async () => {
    const { result } = renderHook(() => useKisekaeGame(repository));

    await act(async () => {
      await Promise.resolve();
    });

    // Equip accessory
    await act(async () => {
      await result.current.equipItem('acc_cat_ears');
    });

    expect(result.current.isEquipped('acc_cat_ears')).toBe(true);

    // Unequip accessory
    act(() => {
      result.current.unequipSlot(SlotCategory.ACCESSORY);
    });

    expect(result.current.isEquipped('acc_cat_ears')).toBe(false);
  });

  it('handles category selection', async () => {
    const { result } = renderHook(() => useKisekaeGame(repository));

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      result.current.selectCategory(SlotCategory.HAIR_FRONT);
    });

    expect(result.current.selectedCategory).toBe(SlotCategory.HAIR_FRONT);
    expect(result.current.itemsForSelectedCategory.every(i => i.slotCategory === SlotCategory.HAIR_FRONT)).toBe(true);
  });
});
