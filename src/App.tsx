import React, { useRef, useState, useMemo } from 'react';
import { createDefaultItemRepository } from './infrastructure/assets/itemsData';
import { useKisekaeGame } from './presentation/hooks/useKisekaeGame';
import { CharacterPreview } from './presentation/components/CharacterPreview';
import { CategoryTabs } from './presentation/components/CategoryTabs';
import { ItemCatalogGrid } from './presentation/components/ItemCatalogGrid';
import { ActionToolbar } from './presentation/components/ActionToolbar';
import { CanvasImageExporter } from './infrastructure/export/CanvasImageExporter';
import { Heart, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const repository = useMemo(() => createDefaultItemRepository(), []);
  const exporter = useMemo(() => new CanvasImageExporter(), []);
  const svgRef = useRef<SVGSVGElement | null>(null);
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
      <header className="w-full max-w-4xl flex items-center justify-between py-3 mb-3 border-b border-pink-200/60">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-pink-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-pink-200">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-1.5">
              きせかえゲーム
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Webで楽しむかわいい着せ替えアバター
            </p>
          </div>
        </div>

        {/* Notification Toast */}
        {statusMessage && (
          <div className="fixed top-4 right-4 z-50 bg-slate-900/85 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm animate-fade-in flex items-center gap-2">
            <span>{statusMessage}</span>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Character Preview & Actions */}
        <section className="md:col-span-5 flex flex-col items-center gap-4 bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-sm border border-pink-100">
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
        <section className="md:col-span-7 flex flex-col gap-4 bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-sm border border-pink-100 min-h-[500px]">
          {/* Tabs */}
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelectCategory={selectCategory}
            isSlotEquipped={isSlotEquipped}
          />

          {/* Items Grid */}
          <div className="flex-1 overflow-y-auto max-h-[440px] pr-1">
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

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-8 py-4 text-center text-xs text-slate-400">
        <p>Built with React, TypeScript, DDD & TDD Architecture</p>
      </footer>
    </div>
  );
};

export default App;
