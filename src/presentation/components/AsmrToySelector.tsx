import { useState, useMemo } from 'react';
import { AsmrToy, AsmrToyCategory } from '../../domain/models/AsmrToy';

export interface AsmrToySelectorProps {
  toys: readonly AsmrToy[];
  activeToyId: string;
  isUnlocked: (toyId: string) => boolean;
  onSelectToy: (toyId: string) => void;
  onUnlockToy: (toyId: string) => void;
  coins: number;
  className?: string;
}

const CATEGORY_TABS: { key: AsmrToyCategory; label: string }[] = [
  { key: AsmrToyCategory.ALL, label: '🌟 すべて' },
  { key: AsmrToyCategory.FOOD, label: '🍽️ たべもの' },
  { key: AsmrToyCategory.TACTILE, label: '✋ たたき・触感' },
  { key: AsmrToyCategory.RELAX, label: '☕ 癒やし' },
  { key: AsmrToyCategory.NATURE, label: '🍃 自然・環境' },
];

export function AsmrToySelector({
  toys,
  activeToyId,
  isUnlocked,
  onSelectToy,
  onUnlockToy,
  coins,
  className = '',
}: AsmrToySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<AsmrToyCategory>(AsmrToyCategory.ALL);

  const filteredToys = useMemo(() => {
    if (selectedCategory === AsmrToyCategory.ALL) {
      return toys;
    }
    return toys.filter((t) => t.category === selectedCategory);
  }, [toys, selectedCategory]);

  return (
    <div className={`w-full flex flex-col gap-3 ${className}`}>
      {/* Header Info */}
      <div className="flex items-center justify-between px-1">
        <h4 className="text-sm font-bold text-purple-950 flex items-center gap-1.5">
          <span>🧸</span> おもちゃコレクション
        </h4>
        <span className="text-xs text-purple-600 font-bold bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
          {toys.filter((t) => isUnlocked(t.id)).length} / {toys.length} 解放
        </span>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORY_TABS.map((tab) => {
          const isCurrent = selectedCategory === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isCurrent
                  ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                  : 'bg-white/80 text-purple-700 hover:bg-purple-50 border border-purple-100'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Toy Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {filteredToys.map((toy) => {
          const unlocked = isUnlocked(toy.id);
          const isActive = toy.id === activeToyId;
          const canAfford = coins >= toy.unlockCost;

          return (
            <div
              key={toy.id}
              className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all ${
                isActive
                  ? 'bg-purple-100/90 border-purple-400 shadow-md ring-2 ring-purple-300'
                  : unlocked
                  ? 'bg-white/90 border-purple-100 hover:border-purple-200 hover:shadow-sm'
                  : 'bg-slate-50/80 border-slate-200 opacity-80'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="text-2xl sm:text-3xl p-1.5 bg-purple-50 rounded-xl shrink-0">
                  {toy.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-800 truncate">{toy.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-amber-600">+{toy.baseCoinYield}🪙/tap</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                {isActive ? (
                  <span className="px-3 py-1.5 bg-purple-600 text-white text-xs font-black rounded-xl shadow-sm">
                    使用中
                  </span>
                ) : unlocked ? (
                  <button
                    type="button"
                    onClick={() => onSelectToy(toy.id)}
                    className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 active:scale-95 text-purple-800 text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    あそぶ
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!canAfford}
                    onClick={() => onUnlockToy(toy.id)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1 ${
                      canAfford
                        ? 'bg-amber-400 hover:bg-amber-500 active:scale-95 text-amber-950 cursor-pointer shadow-amber-200'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>🔒</span>
                    <span>{toy.unlockCost.toLocaleString()}🪙</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
