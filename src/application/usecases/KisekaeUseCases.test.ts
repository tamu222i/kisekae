import { describe, it, expect, beforeEach } from 'vitest';
import {
  EquipItemUseCase,
  UnequipSlotUseCase,
  RandomizeOutfitUseCase,
  ResetOutfitUseCase,
} from './KisekaeUseCases';
import { InMemoryItemRepository } from '../../infrastructure/repositories/InMemoryItemRepository';
import { ALL_ITEMS } from '../../infrastructure/assets/itemsData';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { Outfit } from '../../domain/models/Outfit';

describe('Kisekae Application Use Cases', () => {
  let repository: InMemoryItemRepository;
  let defaultOutfit: Outfit;

  beforeEach(async () => {
    repository = new InMemoryItemRepository(ALL_ITEMS);
    const resetUseCase = new ResetOutfitUseCase(repository);
    defaultOutfit = await resetUseCase.execute();
  });

  it('ResetOutfitUseCase creates a valid default outfit with required basic clothing', async () => {
    expect(defaultOutfit.hasItem(SlotCategory.BASE_BODY)).toBe(true);
    expect(defaultOutfit.hasItem(SlotCategory.HAIR_FRONT)).toBe(true);
    expect(defaultOutfit.hasItem(SlotCategory.EYES)).toBe(true);
    expect(defaultOutfit.hasItem(SlotCategory.MOUTH)).toBe(true);
  });

  it('EquipItemUseCase equips an item by its ID from the repository', async () => {
    const useCase = new EquipItemUseCase(repository);
    const updated = await useCase.execute({
      currentOutfit: defaultOutfit,
      itemId: 'acc_cat_ears',
    });

    expect(updated.hasItem(SlotCategory.ACCESSORY)).toBe(true);
    expect(updated.getItem(SlotCategory.ACCESSORY)?.id).toBe('acc_cat_ears');
  });

  it('EquipItemUseCase throws error when item is not found', async () => {
    const useCase = new EquipItemUseCase(repository);
    await expect(
      useCase.execute({ currentOutfit: defaultOutfit, itemId: 'invalid_item_id' })
    ).rejects.toThrowError(/not found/i);
  });

  it('UnequipSlotUseCase removes an equipped item from a slot', async () => {
    const equipUseCase = new EquipItemUseCase(repository);
    const withAcc = await equipUseCase.execute({
      currentOutfit: defaultOutfit,
      itemId: 'acc_cat_ears',
    });
    expect(withAcc.hasItem(SlotCategory.ACCESSORY)).toBe(true);

    const unequipUseCase = new UnequipSlotUseCase();
    const unequipped = unequipUseCase.execute({
      currentOutfit: withAcc,
      slotCategory: SlotCategory.ACCESSORY,
    });

    expect(unequipped.hasItem(SlotCategory.ACCESSORY)).toBe(false);
  });

  it('RandomizeOutfitUseCase creates a completely random valid outfit', async () => {
    const useCase = new RandomizeOutfitUseCase(repository);
    const randomized = await useCase.execute();

    expect(randomized.hasItem(SlotCategory.BASE_BODY)).toBe(true);
    expect(randomized.hasItem(SlotCategory.HAIR_FRONT)).toBe(true);
    expect(randomized.getAllItems().length).toBeGreaterThan(3);
  });
});
