import React, { useRef, useState, useMemo } from 'react';
import { createDefaultItemRepository } from './infrastructure/assets/itemsData';
import { useKisekaeGame } from './presentation/hooks/useKisekaeGame';
import { CharacterPreview } from './presentation/components/CharacterPreview';
import { CategoryTabs } from './presentation/components/CategoryTabs';
import { ItemCatalogGrid } from './presentation/components/ItemCatalogGrid';
import { ActionToolbar } from './presentation/components/ActionToolbar';
import { CanvasImageExporter } from './infrastructure/export/CanvasImageExporter';
import { AsmrGameView } from './presentation/components/AsmrGameView';
import { Heart, Sparkles, Headphones, Shirt } from 'lucide-react';

export type GameMode = 'kisekae' | 'asmr';

export const App: React.FC = () => {
  const repository = useMemo(() => createDefaultItemRepository(), []);
  const exporter = useMemo(() => new CanvasImageExporter(), []);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [gameMode, setGameMode] = useState<GameMode>('kisekae');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const {
    outfit,
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
  } = useKisekaeGame(repository);

  const showNotification = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => {
      setStatusMessage(null);
    }, 2500);
  };

  const handleRandomize = async () => {
    await randomize();
    showNotification('✨ コーディネートをおまかせで変えました！');
  };

  const handleReset = async () => {
    await reset();
    showNotification('🔄 初期コーディネートに戻しました');
  };

  const handleExport = async () => {
    if (!svgRef.current) return;
    setIsExporting(true);
    try {
      await exporter.exportSvgToPng(svgRef.current, `kisekae-${Date.now()}.png`);
      showNotification('📸 PNG画像を保存しました！');
    } catch (err) {
      console.error('Failed to export image:', err);
      showNotification('⚠️ 保存に失敗しました');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex flex-col items-center p-3 sm:p-6 text-slate-800">
      {/* Header */}
      <header className="w-full max-w-5xl xl:max-w-6xl flex flex-wrap items-center justify-between gap-3 py-3 mb-4 border-b border-pink-200/60">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-md shadow-pink-200">
            {gameMode === 'kisekae' ? (
              <Heart className="w-5 h-5 fill-current" />
            ) : (
              <Headphones className="w-5 h-5" />
            )}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-1.5">
              {gameMode === 'kisekae' ? 'きせかえゲーム' : '音フェチスタジオ'}
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {gameMode === 'kisekae'
                ? 'Webで楽しむかわいい着せ替えアバター'
                : '作ったアバターと一緒に楽しむASMRタイクーン'}
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <nav className="flex items-center p-1 bg-white/80 backdrop-blur-md rounded-2xl border border-pink-200 shadow-sm">
          <button
            type="button"
            onClick={() => setGameMode('kisekae')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              gameMode === 'kisekae'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-sm shadow-pink-200'
                : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
            }`}
          >
            <Shirt className="w-4 h-4" />
            <span>👗 きせかえ</span>
          </button>
          <button
            type="button"
            onClick={() => setGameMode('asmr')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              gameMode === 'asmr'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm shadow-purple-200'
                : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50/50'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>🎧 音フェチ</span>
          </button>
        </nav>

        {/* Notification Toast */}
        {statusMessage && (
          <div className="fixed top-4 right-4 z-50 bg-slate-900/85 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm animate-fade-in flex items-center gap-2">
            <span>{statusMessage}</span>
          </div>
        )}
      </header>

      {/* Main Container - Conditional by Mode */}
      {gameMode === 'kisekae' ? (
        <main className="w-full max-w-5xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start animate-fade-in">
          {/* Left: Character Preview & Actions */}
          <section className="md:col-span-5 md:sticky md:top-4 flex flex-col items-center gap-3 sm:gap-4 bg-white/70 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-sm border border-pink-100">
            <div className="w-full flex items-center justify-center">
              <CharacterPreview ref={svgRef} outfit={outfit} />
            </div>

            <div className="w-full">
              <ActionToolbar
                onRandomize={handleRandomize}
                onReset={handleReset}
                onExport={handleExport}
                isExporting={isExporting}
              />
            </div>
          </section>

          {/* Right: Item Selectors & Category Tabs */}
          <section className="md:col-span-7 flex flex-col gap-3 sm:gap-4 bg-white/70 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-sm border border-pink-100">
            {/* Tabs */}
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={selectCategory}
              isSlotEquipped={isSlotEquipped}
            />

            {/* Items Grid - Unified page scroll without nested double scroll */}
            <div className="flex-1 pr-1">
              {isLoading ? (
                <div className="h-64 flex items-center justify-center text-pink-400 font-medium">
                  アイテムを読み込み中...
                </div>
              ) : (
                <ItemCatalogGrid
                  items={itemsForSelectedCategory}
                  selectedCategory={selectedCategory}
                  isEquipped={isEquipped}
                  isSlotEquipped={isSlotEquipped}
                  onEquipItem={equipItem}
                  onUnequipSlot={unequipSlot}
                />
              )}
            </div>
          </section>
        </main>
      ) : (
        <main className="w-full max-w-5xl xl:max-w-6xl animate-fade-in">
          <AsmrGameView outfit={outfit} />
        </main>
      )}

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-8 py-4 text-center text-xs text-slate-400">
        <p>Built with React, TypeScript, DDD & TDD Architecture</p>
      </footer>
    </div>
  );
};

export default App;

