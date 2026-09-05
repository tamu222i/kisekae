import { useState, useEffect, useCallback, useMemo } from 'react';
import { IItemRepository } from '../../domain/repositories/IItemRepository';
import { Outfit } from '../../domain/models/Outfit';
import { SlotCategory } from '../../domain/models/SlotCategory';
import { Item } from '../../domain/models/Item';
import {
  EquipItemUseCase,
  UnequipSlotUseCase,
  RandomizeOutfitUseCase,
  ResetOutfitUseCase,
} from '../../application/usecases/KisekaeUseCases';

export function useKisekaeGame(repository: IItemRepository) {
  const [outfit, setOutfit] = useState<Outfit | null>(null);
  const [catalog, setCatalog] = useState<readonly Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<SlotCategory>(SlotCategory.TOPS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const equipUseCase = useMemo(() => new EquipItemUseCase(repository), [repository]);
  const unequipUseCase = useMemo(() => new UnequipSlotUseCase(), []);
  const randomizeUseCase = useMemo(() => new RandomizeOutfitUseCase(repository), [repository]);
  const resetUseCase = useMemo(() => new ResetOutfitUseCase(repository), [repository]);

  // Initial load
  useEffect(() => {
    let isMounted = true;
    async function init() {
      setIsLoading(true);
      try {
        const [loadedCatalog, initialOutfit] = await Promise.all([
          repository.getAll(),
          resetUseCase.execute(),
        ]);
        if (isMounted) {
          setCatalog(loadedCatalog);
          setOutfit(initialOutfit);
        }
      } catch (err) {
        console.error('Failed to initialize kisekae game:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    init();
    return () => {
      isMounted = false;
    };
  }, [repository, resetUseCase]);

  const selectCategory = useCallback((category: SlotCategory) => {
    setSelectedCategory(category);
  }, []);

  const equipItem = useCallback(
    async (itemId: string) => {
      if (!outfit) return;
      try {
        const updated = await equipUseCase.execute({
          currentOutfit: outfit,
          itemId,
        });
        setOutfit(updated);
      } catch (err) {
        console.error('Failed to equip item:', err);
      }
    },
    [outfit, equipUseCase]
  );

  const unequipSlot = useCallback(
    (slotCategory: SlotCategory) => {
      if (!outfit) return;
      try {
        const updated = unequipUseCase.execute({
          currentOutfit: outfit,
          slotCategory,
        });
        setOutfit(updated);
      } catch (err) {
        console.error('Failed to unequip slot:', err);
      }
    },
    [outfit, unequipUseCase]
  );

  const randomize = useCallback(async () => {
    try {
      const randomized = await randomizeUseCase.execute();
      setOutfit(randomized);
    } catch (err) {
      console.error('Failed to randomize outfit:', err);
    }
  }, [randomizeUseCase]);

  const reset = useCallback(async () => {
    try {
      const resetOutfit = await resetUseCase.execute();
      setOutfit(resetOutfit);
    } catch (err) {
      console.error('Failed to reset outfit:', err);
    }
  }, [resetUseCase]);

  const isEquipped = useCallback(
    (itemId: string) => {
      if (!outfit) return false;
      return outfit.getAllItems().some((item) => item.id === itemId);
    },
    [outfit]
  );

  const isSlotEquipped = useCallback(
    (slotCategory: SlotCategory) => {
      if (!outfit) return false;
      return outfit.hasItem(slotCategory);
    },
    [outfit]
  );

  const itemsForSelectedCategory = useMemo(() => {
    return catalog.filter((item) => item.slotCategory === selectedCategory);
  }, [catalog, selectedCategory]);

  return {
    outfit,
    catalog,
    selectedCategory,
    isLoading,
    selectCategory,
    equipItem,
    unequipSlot,
    randomize,
    reset,
    isEquipped,
    isSlotEquipped,
    itemsForSelectedCategory,
  };
}
