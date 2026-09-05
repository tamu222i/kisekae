import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAsmrGame } from './useAsmrGame';
import { InMemoryAsmrToyRepository } from '../../infrastructure/repositories/InMemoryAsmrToyRepository';
import { DEFAULT_ASMR_TOYS } from '../../infrastructure/assets/asmrToysData';
import { AsmrStudio } from '../../domain/models/AsmrStudio';
import { IStudioStorage } from '../../application/usecases/AsmrGameUseCases';
import { IAsmrSoundPlayer } from '../../infrastructure/audio/WebAudioAsmrPlayer';

class MockStudioStorage implements IStudioStorage {
  private studio: AsmrStudio | null = null;
  async load(): Promise<AsmrStudio | null> {
    return this.studio;
  }
  async save(studio: AsmrStudio): Promise<void> {
    this.studio = studio;
  }
}

describe('useAsmrGame hook', () => {
  let toyRepo: InMemoryAsmrToyRepository;
  let studioStorage: MockStudioStorage;
  let mockSoundPlayer: IAsmrSoundPlayer;

  beforeEach(() => {
    toyRepo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
    studioStorage = new MockStudioStorage();
    mockSoundPlayer = {
      play: vi.fn(),
      resume: vi.fn().mockResolvedValue(undefined),
      isMuted: false,
      setMuted: vi.fn(),
    };
  });

  it('initializes with default studio and toys', async () => {
    const { result } = renderHook(() =>
      useAsmrGame(toyRepo, studioStorage, mockSoundPlayer)
    );

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.studio).not.toBeNull();
    expect(result.current.toys.length).toBe(5);
    expect(result.current.activeToy?.id).toBe('toy_bubble_wrap');
    expect(result.current.studio?.coins).toBe(0);
  });

  it('taps active toy, plays sound, and accumulates coins', async () => {
    const { result } = renderHook(() =>
      useAsmrGame(toyRepo, studioStorage, mockSoundPlayer)
    );

    await act(async () => {
      await Promise.resolve();
    });

    await act(async () => {
      await result.current.tapActiveToy();
    });

    expect(mockSoundPlayer.play).toHaveBeenCalledWith('bubble_wrap');
    expect(result.current.studio?.coins).toBe(1);
    expect(result.current.studio?.totalTaps).toBe(1);
    expect(result.current.lastEarned).toBe(1);
  });

  it('upgrades tap power when coins are sufficient', async () => {
    // Start studio with 50 coins
    const studio = AsmrStudio.createDefault('toy_bubble_wrap');
    studio.tap(DEFAULT_ASMR_TOYS[0]); // +1
    // Let's create studio with coins
    const studioWithCoins = AsmrStudio.fromJSON({
      coins: 50,
      totalTaps: 50,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: ['toy_bubble_wrap'],
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });
    await studioStorage.save(studioWithCoins);

    const { result } = renderHook(() =>
      useAsmrGame(toyRepo, studioStorage, mockSoundPlayer)
    );

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.studio?.tapPowerLevel).toBe(1);
    expect(result.current.tapPowerUpgradeCost).toBe(25);

    await act(async () => {
      await result.current.upgradeTapPower();
    });

    expect(result.current.studio?.tapPowerLevel).toBe(2);
    expect(result.current.studio?.coins).toBe(25);
  });

  it('unlocks and selects a new toy', async () => {
    // Start studio with 100 coins
    const studioWithCoins = AsmrStudio.fromJSON({
      coins: 100,
      totalTaps: 100,
      activeToyId: 'toy_bubble_wrap',
      unlockedToyIds: ['toy_bubble_wrap'],
      tapPowerLevel: 1,
      autoCollectorLevel: 0,
    });
    await studioStorage.save(studioWithCoins);

    const { result } = renderHook(() =>
      useAsmrGame(toyRepo, studioStorage, mockSoundPlayer)
    );

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.studio?.isToyUnlocked('toy_soap_cutting')).toBe(false);

    await act(async () => {
      await result.current.unlockToy('toy_soap_cutting');
    });

    expect(result.current.studio?.isToyUnlocked('toy_soap_cutting')).toBe(true);

    await act(async () => {
      await result.current.selectToy('toy_soap_cutting');
    });

    expect(result.current.activeToy?.id).toBe('toy_soap_cutting');
  });
});
