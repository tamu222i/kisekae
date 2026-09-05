import { useState, useEffect, useCallback, useMemo } from 'react';
import { IAsmrToyRepository } from '../../domain/repositories/IAsmrToyRepository';
import { AsmrToy } from '../../domain/models/AsmrToy';
import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { AsmrGameUseCases, IStudioStorage } from '../../application/usecases/AsmrGameUseCases';
import { IAsmrSoundPlayer, WebAudioAsmrPlayer } from '../../infrastructure/audio/WebAudioAsmrPlayer';
import { LocalStorageStudioRepository } from '../../infrastructure/repositories/LocalStorageStudioRepository';

export function useAsmrGame(
  toyRepo: IAsmrToyRepository,
  studioStorage: IStudioStorage = new LocalStorageStudioRepository(),
  soundPlayer: IAsmrSoundPlayer = WebAudioAsmrPlayer.getInstance()
) {
  const [studio, setStudio] = useState<AsmrStudio | null>(null);
  const [toys, setToys] = useState<readonly AsmrToy[]>([]);
  const [activeToy, setActiveToy] = useState<AsmrToy | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastEarned, setLastEarned] = useState<number>(0);
  const [tapCountTrigger, setTapCountTrigger] = useState<number>(0);

  const useCases = useMemo(
    () => new AsmrGameUseCases(toyRepo, studioStorage),
    [toyRepo, studioStorage]
  );

  // Initial load
  useEffect(() => {
    let isMounted = true;
    async function init() {
      setIsLoading(true);
      try {
        const loadedToys = await useCases.getAllToys();
        const defaultToyId = loadedToys[0]?.id || 'toy_bubble_wrap';
        const loadedStudio = await useCases.loadOrCreateStudio(defaultToyId);
        const currentActiveToy = loadedToys.find((t) => t.id === loadedStudio.activeToyId) || loadedToys[0] || null;

        if (isMounted) {
          setToys(loadedToys);
          setStudio(loadedStudio);
          setActiveToy(currentActiveToy);
        }
      } catch (err) {
        console.error('Failed to initialize ASMR game:', err);
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
  }, [useCases]);

  // Tap active toy
  const tapActiveToy = useCallback(async () => {
    if (!studio || !activeToy) return { earned: 0 };
    try {
      await soundPlayer.resume();
      soundPlayer.play(activeToy.soundType);

      const result = await useCases.tap(studio);
      await useCases.saveStudio(studio);

      // Create a fresh instance for React state update
      setStudio(AsmrStudio.fromJSON(studio.toJSON()));
      setLastEarned(result.coinsEarned);
      setTapCountTrigger((prev) => prev + 1);
      return { earned: result.coinsEarned };
    } catch (err) {
      console.error('Failed to tap active toy:', err);
      return { earned: 0 };
    }
  }, [studio, activeToy, soundPlayer, useCases]);

  // Select toy
  const selectToy = useCallback(
    async (toyId: string) => {
      if (!studio) return;
      try {
        await useCases.selectToy(studio, toyId);
        await useCases.saveStudio(studio);
        const newActive = toys.find((t) => t.id === toyId) || null;
        setStudio(AsmrStudio.fromJSON(studio.toJSON()));
        setActiveToy(newActive);
      } catch (err) {
        console.error('Failed to select toy:', err);
      }
    },
    [studio, toys, useCases]
  );

  // Unlock toy
  const unlockToy = useCallback(
    async (toyId: string) => {
      if (!studio) return;
      try {
        await useCases.unlockToy(studio, toyId);
        await useCases.saveStudio(studio);
        const newActive = toys.find((t) => t.id === toyId) || null;
        setStudio(AsmrStudio.fromJSON(studio.toJSON()));
        setActiveToy(newActive);
      } catch (err) {
        console.error('Failed to unlock toy:', err);
      }
    },
    [studio, toys, useCases]
  );

  // Upgrade tap power
  const upgradeTapPower = useCallback(async () => {
    if (!studio) return;
    try {
      await useCases.upgradeTapPower(studio);
      await useCases.saveStudio(studio);
      setStudio(AsmrStudio.fromJSON(studio.toJSON()));
    } catch (err) {
      console.error('Failed to upgrade tap power:', err);
    }
  }, [studio, useCases]);

  // Upgrade auto collector
  const upgradeAutoCollector = useCallback(async () => {
    if (!studio) return;
    try {
      await useCases.upgradeAutoCollector(studio);
      await useCases.saveStudio(studio);
      setStudio(AsmrStudio.fromJSON(studio.toJSON()));
    } catch (err) {
      console.error('Failed to upgrade auto collector:', err);
    }
  }, [studio, useCases]);

  // Auto collect tick
  useEffect(() => {
    if (!studio || studio.autoCollectorLevel <= 0) return;

    const interval = setInterval(async () => {
      try {
        const earned = await useCases.tickAutoCollect(studio, 1);
        if (earned > 0) {
          await useCases.saveStudio(studio);
          setStudio(AsmrStudio.fromJSON(studio.toJSON()));
        }
      } catch (err) {
        console.error('Auto collect error:', err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [studio?.autoCollectorLevel, studio?.activeToyId, useCases]);

  const tapPowerUpgradeCost = studio ? studio.getTapPowerUpgradeCost() : 25;
  const autoCollectorUpgradeCost = studio ? studio.getAutoCollectorUpgradeCost() : 50;
  const coinsPerSec = studio && activeToy ? studio.getCoinsPerSecond(activeToy) : 0;

  return {
    studio,
    toys,
    activeToy,
    isLoading,
    lastEarned,
    tapCountTrigger,
    tapActiveToy,
    unlockToy,
    selectToy,
    upgradeTapPower,
    upgradeAutoCollector,
    tapPowerUpgradeCost,
    autoCollectorUpgradeCost,
    coinsPerSec,
  };
}
