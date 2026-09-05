export interface AsmrUpgradePanelProps {
  coins: number;
  tapPowerLevel: number;
  tapPowerUpgradeCost: number;
  onUpgradeTapPower: () => void;
  autoCollectorLevel: number;
  autoCollectorUpgradeCost: number;
  onUpgradeAutoCollector: () => void;
  coinsPerSec: number;
  className?: string;
}

export function AsmrUpgradePanel({
  coins,
  tapPowerLevel,
  tapPowerUpgradeCost,
  onUpgradeTapPower,
  autoCollectorLevel,
  autoCollectorUpgradeCost,
  onUpgradeAutoCollector,
  coinsPerSec,
  className = '',
}: AsmrUpgradePanelProps) {
  const canAffordTap = coins >= tapPowerUpgradeCost;
  const canAffordAuto = coins >= autoCollectorUpgradeCost;

  return (
    <div className={`w-full flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between px-1">
        <h4 className="text-sm font-bold text-purple-950 flex items-center gap-1.5">
          <span>⚡</span> タイクーン強化ショップ
        </h4>
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
          <span>自動: +{coinsPerSec}🪙/秒</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Upgrade 1: Tap Power */}
        <div className="p-3.5 bg-gradient-to-br from-amber-50 to-orange-50/70 rounded-2xl border-2 border-amber-200/80 shadow-sm flex flex-col justify-between gap-2.5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                <span>👆</span> タップパワー
              </span>
              <span className="px-2 py-0.5 bg-amber-200/80 text-amber-950 text-xs font-black rounded-lg">
                Lv.{tapPowerLevel} (x{tapPowerLevel})
              </span>
            </div>
            <p className="text-xs text-amber-700/80 mt-1">
              タップ時の獲得コイン倍率がアップ！
            </p>
          </div>

          <button
            type="button"
            disabled={!canAffordTap}
            onClick={onUpgradeTapPower}
            className={`w-full py-2 px-3 rounded-xl text-xs font-black transition-all shadow-sm flex items-center justify-center gap-1.5 ${
              canAffordTap
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-amber-950 shadow-amber-200 cursor-pointer active:scale-98'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Lv.{tapPowerLevel + 1}に強化</span>
            <span>({tapPowerUpgradeCost}🪙)</span>
          </button>
        </div>

        {/* Upgrade 2: Auto Collector */}
        <div className="p-3.5 bg-gradient-to-br from-cyan-50 to-blue-50/70 rounded-2xl border-2 border-cyan-200/80 shadow-sm flex flex-col justify-between gap-2.5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-900 flex items-center gap-1">
                <span>🤖</span> 自動コイン収集
              </span>
              <span className="px-2 py-0.5 bg-cyan-200/80 text-cyan-950 text-xs font-black rounded-lg">
                Lv.{autoCollectorLevel}
              </span>
            </div>
            <p className="text-xs text-cyan-700/80 mt-1">
              放置しても自動でコインを回収！
            </p>
          </div>

          <button
            type="button"
            disabled={!canAffordAuto}
            onClick={onUpgradeAutoCollector}
            className={`w-full py-2 px-3 rounded-xl text-xs font-black transition-all shadow-sm flex items-center justify-center gap-1.5 ${
              canAffordAuto
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-cyan-950 shadow-cyan-200 cursor-pointer active:scale-98'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Lv.{autoCollectorLevel + 1}に強化</span>
            <span>({autoCollectorUpgradeCost}🪙)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
