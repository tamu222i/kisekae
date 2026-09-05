import React from 'react';
import { Sparkles, RotateCcw, Download } from 'lucide-react';

export interface ActionToolbarProps {
  onRandomize: () => void;
  onReset: () => void;
  onExport: () => void;
  isExporting?: boolean;
}

export const ActionToolbar: React.FC<ActionToolbarProps> = ({
  onRandomize,
  onReset,
  onExport,
  isExporting = false,
}) => {
  return (
    <div className="flex flex-wrap gap-2.5 items-center justify-center p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-pink-100">
      <button
        type="button"
        onClick={onRandomize}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm shadow-sm hover:shadow-md hover:from-purple-600 hover:to-pink-600 active:scale-95 transition-all"
        title="ランダムコーディネート"
      >
        <Sparkles className="w-4 h-4" />
        <span>おまかせ</span>
      </button>

      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-sm active:scale-95 transition-all"
        title="初期コーディネートに戻す"
      >
        <RotateCcw className="w-4 h-4" />
        <span>リセット</span>
      </button>

      <button
        type="button"
        onClick={onExport}
        disabled={isExporting}
        className="flex items-center gap-1.5 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white rounded-xl font-bold text-sm shadow-sm hover:shadow-md active:scale-95 transition-all"
        title="PNG画像としてダウンロード保存"
      >
        <Download className="w-4 h-4" />
        <span>{isExporting ? '保存中...' : 'PNG保存'}</span>
      </button>
    </div>
  );
};

