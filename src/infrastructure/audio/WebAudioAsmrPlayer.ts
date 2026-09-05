import { AsmrSoundType } from '../../domain/models/AsmrToy';

export interface IAsmrSoundPlayer {
  play(soundType: AsmrSoundType): void;
  resume(): Promise<void>;
  readonly isMuted: boolean;
  setMuted(muted: boolean): void;
}

export class WebAudioAsmrPlayer implements IAsmrSoundPlayer {
  private static instance: WebAudioAsmrPlayer | null = null;
  private ctx: AudioContext | null = null;
  private _isMuted: boolean = false;
  private noiseBuffer: AudioBuffer | null = null;

  static getInstance(): WebAudioAsmrPlayer {
    if (!WebAudioAsmrPlayer.instance) {
      WebAudioAsmrPlayer.instance = new WebAudioAsmrPlayer();
    }
    return WebAudioAsmrPlayer.instance;
  }

  async resume(): Promise<void> {
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume().catch(() => {});
    }
  }

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
      case AsmrSoundType.POTATO_CHIPS:
        this.playPotatoChips(ctx);
        break;
      case AsmrSoundType.SHAVED_ICE:
        this.playShavedIce(ctx);
        break;
      case AsmrSoundType.CARBONATED_SODA:
        this.playCarbonatedSoda(ctx);
        break;
      case AsmrSoundType.SCISSORS_HAIRCUT:
        this.playScissorsHaircut(ctx);
        break;
      case AsmrSoundType.BOOK_PAGE_FLIP:
        this.playBookPageFlip(ctx);
        break;
      case AsmrSoundType.AUTUMN_LEAVES:
        this.playAutumnLeaves(ctx);
        break;
      case AsmrSoundType.WOOD_BLOCK_CLACK:
        this.playWoodBlockClack(ctx);
        break;
      case AsmrSoundType.MATCH_IGNITE:
        this.playMatchIgnite(ctx);
        break;
      case AsmrSoundType.RAIN_UMBRELLA:
        this.playRainUmbrella(ctx);
        break;
      case AsmrSoundType.CLOCK_TICK:
        this.playClockTick(ctx);
        break;
      case AsmrSoundType.WATER_DROP_CAVE:
        this.playWaterDropCave(ctx);
        break;
      case AsmrSoundType.FIRE_CRACKLING:
        this.playFireCrackling(ctx);
        break;
      case AsmrSoundType.WHISPER_EAR_PICK:
        this.playWhisperEarPick(ctx);
        break;
      case AsmrSoundType.CAT_PURR:
        this.playCatPurr(ctx);
        break;
      case AsmrSoundType.BELL_WIND_CHIME:
        this.playBellWindChime(ctx);
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

  /**
   * Potato Chips Crunch:
   * Crisp fracture noise bursts with multi-layer tooth snaps (ザクッ！パリッ！)
   */
  private playPotatoChips(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    // Layer 1: High crisp fracture crackles
    const src1 = ctx.createBufferSource();
    src1.buffer = this.noiseBuffer;
    const filter1 = ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(2600 + Math.random() * 500, now);
    filter1.Q.setValueAtTime(3.5, now);
    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.45, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    src1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);
    src1.start(now);
    src1.stop(now + 0.065);

    // Layer 2: Secondary crack (15ms delay)
    const src2 = ctx.createBufferSource();
    src2.buffer = this.noiseBuffer;
    const filter2 = ctx.createBiquadFilter();
    filter2.type = 'highpass';
    filter2.frequency.setValueAtTime(3200, now + 0.015);
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.setValueAtTime(0.35, now + 0.015);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    src2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(ctx.destination);
    src2.start(now + 0.015);
    src2.stop(now + 0.075);

    // Layer 3: Low jaw crunch impact
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190 + Math.random() * 40, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.04);
    oscGain.gain.setValueAtTime(0.25, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  /**
   * Shaved Ice Crunch:
   * High-frequency icy crystal friction and fine frozen slush (シャリシャリッ！)
   */
  private playShavedIce(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    const source = ctx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(4200 + Math.random() * 600, now);
    filter.Q.setValueAtTime(4.0, now);

    const gain = ctx.createGain();
    // Two rapid micro-envelope ripples for "シャリッ"
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.025);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.045);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start(now);
    source.stop(now + 0.085);
  }

  /**
   * Carbonated Soda:
   * Tiny fizzing micro-bubbles bursting with high-pitch pops (シュワシュワ)
   */
  private playCarbonatedSoda(ctx: AudioContext): void {
    const now = ctx.currentTime;

    // Cluster of 3 tiny bubble blips
    [0, 0.015, 0.032].forEach((delay, idx) => {
      const t = now + delay;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const freq = 2200 + idx * 400 + (Math.random() * 300 - 150);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, t + 0.012);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.02);
    });

    // Gentle carbonation hiss
    if (this.noiseBuffer) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(5500, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(now);
      src.stop(now + 0.075);
    }
  }

  /**
   * Scissors Haircut:
   * Sharp metallic shear strokes with razor snip friction (チョキッ)
   */
  private playScissorsHaircut(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3600 + Math.random() * 400, now);
    filter.Q.setValueAtTime(3.2, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    // High metal harmonic ring
    const ring = ctx.createOscillator();
    const ringGain = ctx.createGain();
    ring.type = 'triangle';
    ring.frequency.setValueAtTime(4500, now);
    ringGain.gain.setValueAtTime(0.12, now);
    ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    ring.connect(ringGain);
    ringGain.connect(ctx.destination);

    src.start(now);
    src.stop(now + 0.055);
    ring.start(now);
    ring.stop(now + 0.04);
  }

  /**
   * Book Page Flip:
   * Paper rustling and airy flutter (パラパラ)
   */
  private playBookPageFlip(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 0.04);
    filter.frequency.exponentialRampToValueAtTime(600, now + 0.09);
    filter.Q.setValueAtTime(1.8, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    src.start(now);
    src.stop(now + 0.1);
  }

  /**
   * Autumn Leaves Crunch:
   * Stepping on crisp dry foliage (ザクザク)
   */
  private playAutumnLeaves(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    [0, 0.02, 0.042].forEach((delay) => {
      if (!this.noiseBuffer) return;
      const t = now + delay;
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600 + Math.random() * 800, t);
      filter.Q.setValueAtTime(2.2, t);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(t);
      src.stop(t + 0.05);
    });
  }

  /**
   * Wood Block Clack:
   * Dry hollow percussion knock (カンカン)
   */
  private playWoodBlockClack(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    const freq = 920 + (Math.random() * 120 - 60);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, now + 0.03);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, now);
    filter.Q.setValueAtTime(9.0, now);

    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.055);
  }

  /**
   * Match Ignite:
   * Scratch friction burst followed by flame flare (シュッ！)
   */
  private playMatchIgnite(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    // Friction strike
    const strike = ctx.createBufferSource();
    strike.buffer = this.noiseBuffer;
    const strikeFilter = ctx.createBiquadFilter();
    strikeFilter.type = 'bandpass';
    strikeFilter.frequency.setValueAtTime(2500, now);
    strikeFilter.Q.setValueAtTime(2.5, now);
    const strikeGain = ctx.createGain();
    strikeGain.gain.setValueAtTime(0.35, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    strike.connect(strikeFilter);
    strikeFilter.connect(strikeGain);
    strikeGain.connect(ctx.destination);
    strike.start(now);
    strike.stop(now + 0.045);

    // Warm flame whoosh
    const flame = ctx.createOscillator();
    const flameGain = ctx.createGain();
    flame.type = 'sine';
    flame.frequency.setValueAtTime(160, now + 0.03);
    flame.frequency.exponentialRampToValueAtTime(65, now + 0.1);
    flameGain.gain.setValueAtTime(0.001, now);
    flameGain.gain.setValueAtTime(0.2, now + 0.03);
    flameGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
    flame.connect(flameGain);
    flameGain.connect(ctx.destination);
    flame.start(now + 0.03);
    flame.stop(now + 0.12);
  }

  /**
   * Rain on Umbrella:
   * Soft droplet fabric patter (しとしと)
   */
  private playRainUmbrella(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const freq = 340 + (Math.random() * 80 - 40);
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.03);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  /**
   * Clock Tick:
   * Antique mechanical escapement click (コチコチ)
   */
  private playClockTick(ctx: AudioContext): void {
    const now = ctx.currentTime;

    // High escapement tick
    const click = ctx.createOscillator();
    const clickGain = ctx.createGain();
    click.type = 'square';
    click.frequency.setValueAtTime(3100 + Math.random() * 200, now);
    clickGain.gain.setValueAtTime(0.18, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(now);
    click.stop(now + 0.015);

    // Warm wooden case thud
    const body = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    body.type = 'sine';
    body.frequency.setValueAtTime(260, now);
    bodyGain.gain.setValueAtTime(0.22, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
    body.connect(bodyGain);
    bodyGain.connect(ctx.destination);
    body.start(now);
    body.stop(now + 0.04);
  }

  /**
   * Water Drop in Cave:
   * Resonant plop with subtle cavern echo (ポタポタ)
   */
  private playWaterDropCave(ctx: AudioContext): void {
    const now = ctx.currentTime;

    // Primary water plop
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(1750, now + 0.035);
    gain.gain.setValueAtTime(0.38, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.045);

    // Soft cavern echo
    const echo = ctx.createOscillator();
    const echoGain = ctx.createGain();
    echo.type = 'sine';
    echo.frequency.setValueAtTime(1100, now + 0.075);
    echo.frequency.exponentialRampToValueAtTime(2100, now + 0.105);
    echoGain.gain.setValueAtTime(0.001, now);
    echoGain.gain.setValueAtTime(0.1, now + 0.075);
    echoGain.gain.exponentialRampToValueAtTime(0.001, now + 0.115);
    echo.connect(echoGain);
    echoGain.connect(ctx.destination);
    echo.start(now + 0.075);
    echo.stop(now + 0.12);
  }

  /**
   * Campfire Crackle:
   * Wood resin micro-explosions and soothing fire embers (パチパチ)
   */
  private playFireCrackling(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    // Micro pop 1
    const pop1 = ctx.createBufferSource();
    pop1.buffer = this.noiseBuffer;
    const filter1 = ctx.createBiquadFilter();
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(2200 + Math.random() * 800, now);
    filter1.Q.setValueAtTime(6.0, now);
    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
    pop1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(ctx.destination);
    pop1.start(now);
    pop1.stop(now + 0.03);

    // Micro pop 2 (delayed)
    const pop2 = ctx.createBufferSource();
    pop2.buffer = this.noiseBuffer;
    const filter2 = ctx.createBiquadFilter();
    filter2.type = 'bandpass';
    filter2.frequency.setValueAtTime(3400 + Math.random() * 800, now + 0.022);
    filter2.Q.setValueAtTime(5.0, now + 0.022);
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.setValueAtTime(0.3, now + 0.022);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
    pop2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(ctx.destination);
    pop2.start(now + 0.022);
    pop2.stop(now + 0.05);
  }

  /**
   * Whisper Ear Pick:
   * Soft cotton swab / feather ear cleaning rustle (ふわふわ)
   */
  private playWhisperEarPick(ctx: AudioContext): void {
    const now = ctx.currentTime;
    if (!this.noiseBuffer) return;

    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900 + Math.random() * 200, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    src.start(now);
    src.stop(now + 0.08);
  }

  /**
   * Cat Purr:
   * Deep soothing chest vibration and motor purr (ゴロゴロ)
   */
  private playCatPurr(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(28, now);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(110, now);

    // Amplitude modulation pulse
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Wind Chime:
   * Crystalline bell ring with delicate inharmonic overtones (チリンチリン)
   */
  private playBellWindChime(ctx: AudioContext): void {
    const now = ctx.currentTime;
    const tones = [2420, 3860];
    tones.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() * 40 - 20), now);

      gain.gain.setValueAtTime(idx === 0 ? 0.35 : 0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.95);
    });
  }
}
