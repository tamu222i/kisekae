import { AsmrSoundType } from '../../domain/models/AsmrToy';

export class WebAudioAsmrPlayer {
  private ctx: AudioContext | null = null;
  private _isMuted: boolean = false;
  private noiseBuffer: AudioBuffer | null = null;

  constructor() {
    // Lazy initialization of AudioContext on first user interaction to satisfy browser autoplay policies
  }

  get isMuted(): boolean {
    return this._isMuted;
  }

  setMuted(muted: boolean): void {
    this._isMuted = muted;
  }

  private initAudioContext(): AudioContext | null {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }

    try {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (!AudioCtxClass) {
        return null;
      }

      this.ctx = new AudioCtxClass();
      this.initNoiseBuffer(this.ctx);
      return this.ctx;
    } catch {
      return null;
    }
  }

  private initNoiseBuffer(ctx: AudioContext): void {
    try {
      const bufferSize = ctx.sampleRate * 1; // 1 second of noise
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      this.noiseBuffer = buffer;
    } catch {
      this.noiseBuffer = null;
    }
  }

  play(soundType: AsmrSoundType): void {
    if (this._isMuted) return;

    const ctx = this.initAudioContext();
    if (!ctx) return;

    switch (soundType) {
      case AsmrSoundType.BUBBLE_WRAP:
        this.playBubbleWrap(ctx);
        break;
      case AsmrSoundType.SOAP_CUTTING:
        this.playSoapCutting(ctx);
        break;
      case AsmrSoundType.SLIME:
        this.playSlime(ctx);
        break;
      case AsmrSoundType.KEYBOARD:
        this.playKeyboard(ctx);
        break;
      case AsmrSoundType.CRYSTAL_TAP:
        this.playCrystalTap(ctx);
        break;
    }
  }

  /**
   * Bubble Wrap Pop:
   * Quick resonant pop with slight pitch randomization (450Hz ~ 700Hz)
   */
  private playBubbleWrap(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const freq = 480 + (Math.random() * 220 - 110);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 1.5, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.04);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Soap Cutting:
   * Textured noise burst with bandpass filtering around 1.8kHz for crisp slicing texture
   */
  private playSoapCutting(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    const source = ctx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800 + Math.random() * 400, now);
    filter.Q.setValueAtTime(2.5, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start(now);
    source.stop(now + 0.075);
  }

  /**
   * Slime Knead:
   * Wet squishy downward pitch sweep with low-pass resonance
   */
  private playSlime(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const startFreq = 240 + Math.random() * 80;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.09);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.Q.setValueAtTime(5, now);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  }

  /**
   * Mechanical Keyboard:
   * Clicky tactile two-stage stroke: sharp high-frequency click + muted thud
   */
  private playKeyboard(ctx: AudioContext): void {
    const now = ctx.currentTime;

    // Stage 1: Sharp click
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'square';
    clickOsc.frequency.setValueAtTime(2200 + Math.random() * 300, now);
    clickGain.gain.setValueAtTime(0.2, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.02);

    // Stage 2: Bottom-out thud
    const thudOsc = ctx.createOscillator();
    const thudGain = ctx.createGain();
    thudOsc.type = 'sine';
    thudOsc.frequency.setValueAtTime(160 + Math.random() * 40, now);
    thudGain.gain.setValueAtTime(0.3, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    thudOsc.connect(thudGain);
    thudGain.connect(ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.045);
  }

  /**
   * Crystal Tapping:
   * Pure crystalline harmonics with shimmering ringing decay
   */
  private playCrystalTap(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const baseFreq = 1800 + (Math.random() * 200 - 100);

    const harmonics = [baseFreq, baseFreq * 2.14, baseFreq * 3.4];
    const gains = [0.3, 0.15, 0.08];

    harmonics.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(gains[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    });
  }
}
