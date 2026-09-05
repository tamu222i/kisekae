import { describe, it, expect, beforeEach } from 'vitest';
import { WebAudioAsmrPlayer } from './WebAudioAsmrPlayer';
import { AsmrSoundType } from '../../domain/models/AsmrToy';

describe('WebAudioAsmrPlayer', () => {
  let player: WebAudioAsmrPlayer;

  beforeEach(() => {
    player = new WebAudioAsmrPlayer();
  });

  it('instantiates without throwing in test environment', () => {
    expect(player).toBeDefined();
    expect(player.isMuted).toBe(false);
  });

  it('allows toggling mute state', () => {
    player.setMuted(true);
    expect(player.isMuted).toBe(true);

    player.setMuted(false);
    expect(player.isMuted).toBe(false);
  });

  it('safely plays all 20 sound types without crashing even if AudioContext is mocked or unavailable', () => {
    expect(() => {
      Object.values(AsmrSoundType).forEach((soundType) => {
        player.play(soundType);
      });
    }).not.toThrow();
  });
});
