import { useMemo } from 'react';
import { Outfit } from '../../domain/models/Outfit';
import { IAsmrToyRepository } from '../../domain/repositories/IAsmrToyRepository';
import { IStudioStorage } from '../../application/usecases/AsmrGameUseCases';
import { IAsmrSoundPlayer, WebAudioAsmrPlayer } from '../../infrastructure/audio/WebAudioAsmrPlayer';
import { InMemoryAsmrToyRepository } from '../../infrastructure/repositories/InMemoryAsmrToyRepository';
import { LocalStorageStudioRepository } from '../../infrastructure/repositories/LocalStorageStudioRepository';
import { DEFAULT_ASMR_TOYS } from '../../infrastructure/assets/asmrToysData';
import { useAsmrGame } from '../hooks/useAsmrGame';
import { AvatarCompanion } from './AvatarCompanion';
import { AsmrToyInteractive } from './AsmrToyInteractive';
import { AsmrToySelector } from './AsmrToySelector';
import { AsmrUpgradePanel } from './AsmrUpgradePanel';

export interface AsmrGameViewProps {
  outfit: Outfit | null;
  toyRepo?: IAsmrToyRepository;
  studioStorage?: IStudioStorage;
  soundPlayer?: IAsmrSoundPlayer;
}

const defaultToyRepo = new InMemoryAsmrToyRepository(DEFAULT_ASMR_TOYS);
const defaultStudioStorage = new LocalStorageStudioRepository();

export function AsmrGameView({
  outfit,
  toyRepo = defaultToyRepo,
  studioStorage = defaultStudioStorage,
  soundPlayer = WebAudioAsmrPlayer.getInstance(),
}: AsmrGameViewProps) {
  const {
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
    toggleAutoCollect,
    isAutoCollectEnabled,
    tapPowerUpgradeCost,
    autoCollectorUpgradeCost,
    coinsPerSec,
  } = useAsmrGame(toyRepo, studioStorage, soundPlayer);

  const isToyUnlocked = useMemo(() => {
    return (toyId: string) => studio?.isToyUnlocked(toyId) ?? false;
  }, [studio]);

  if (isLoading || !studio) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-purple-400 font-bold gap-3">
        <span className="text-4xl animate-bounce">🎧</span>
        <p>スタジオを読み込み中...</p>
      </div>
    );
  }

  return (
    <div
      data-testid="asmr-game-view"
      className="w-full max-w-5xl mx-auto flex flex-col gap-6 py-2 px-3 sm:px-4 animate-fade-in"
    >
      {/* Top HUD: Tycoon Stats Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-md border-2 border-purple-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl animate-bounce">🪙</span>
          <div>
            <span className="text-xs text-purple-600 font-semibold">所持コイン</span>
            <div className="text-xl sm:text-2xl font-black text-amber-500 tracking-wide">
              {studio.coins.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[11px] text-purple-500 font-semibold">総タップ数</span>
            <span className="text-sm sm:text-base font-extrabold text-purple-900">
              👆 {studio.totalTaps.toLocaleString()}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[11px] text-purple-500 font-semibold">放置収入</span>
            <span
              className={`text-sm sm:text-base font-extrabold ${
                isAutoCollectEnabled ? 'text-cyan-600' : 'text-slate-400'
              }`}
            >
              {isAutoCollectEnabled ? `⚡ +${coinsPerSec}🪙/秒` : '⏸️ 停止中'}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[11px] text-purple-500 font-semibold">タップ倍率</span>
            <span className="text-sm sm:text-base font-extrabold text-amber-600">
              🔥 x{studio.tapPowerLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Main Game Stage: 2.5D Avatar Companion + Interactive ASMR Toy */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center justify-items-center bg-gradient-to-b from-purple-100/60 via-pink-50/50 to-indigo-50/40 p-4 sm:p-6 rounded-3xl border-2 border-purple-200/80 shadow-lg">
        {/* Left Column: Avatar Companion */}
        <div className="w-full md:col-span-5 flex flex-col items-center justify-center">
          <AvatarCompanion
            outfit={outfit}
            tapCountTrigger={tapCountTrigger}
            lastEarned={lastEarned}
          />
        </div>

        {/* Right Column: Active ASMR Toy */}
        <div className="w-full md:col-span-7 flex flex-col items-center justify-center">
          <AsmrToyInteractive
            toy={activeToy}
            onTap={tapActiveToy}
            lastEarned={lastEarned}
          />
        </div>
      </div>

      {/* Tycoon Shop & Toy Collection */}
      <div className="w-full flex flex-col gap-6">
        <AsmrUpgradePanel
          coins={studio.coins}
          tapPowerLevel={studio.tapPowerLevel}
          tapPowerUpgradeCost={tapPowerUpgradeCost}
          onUpgradeTapPower={upgradeTapPower}
          autoCollectorLevel={studio.autoCollectorLevel}
          autoCollectorUpgradeCost={autoCollectorUpgradeCost}
          onUpgradeAutoCollector={upgradeAutoCollector}
          coinsPerSec={coinsPerSec}
          isAutoCollectEnabled={isAutoCollectEnabled}
          onToggleAutoCollect={toggleAutoCollect}
        />

        <AsmrToySelector
          toys={toys}
          activeToyId={studio.activeToyId}
          isUnlocked={isToyUnlocked}
          onSelectToy={selectToy}
          onUnlockToy={unlockToy}
          coins={studio.coins}
        />
      </div>
    </div>
  );
}
