import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Lock, 
  Sliders, 
  FileCode, 
  Palette 
} from 'lucide-react';

export const PlaygroundToolbar = ({
  activeTab,
  setActiveTab,
  isCssUnlocked,
  applyCss,
  setApplyCss,
  onRun,
  onReset,
  onCopy
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-t-lg">
      
      {/* Editor Tabs: [ HTML ] [ CSS ] */}
      <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800 p-0.5 rounded-lg text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('html')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeTab === 'html'
              ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileCode className="w-3.5 h-3.5" />
          <span>HTML</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('css')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
            activeTab === 'css'
              ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>CSS</span>
          {!isCssUnlocked && (
            <Lock className="w-3 h-3 text-amber-500 ml-0.5" />
          )}
        </button>
      </div>

      {/* Right controls: Apply CSS Toggle, Run, Reset, Copy */}
      <div className="flex items-center flex-wrap gap-2 text-xs">
        
        {/* Apply CSS Toggle */}
        <label 
          className="flex items-center gap-2 cursor-pointer select-none px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          title="Toggle whether CSS styles are injected into preview"
        >
          <input
            type="checkbox"
            checked={applyCss}
            onChange={(e) => setApplyCss(e.target.checked)}
            className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
          />
          <span className="font-medium text-[11px] sm:text-xs">Apply CSS</span>
          <span className={`w-2 h-2 rounded-full ${applyCss ? 'bg-emerald-500' : 'bg-slate-400'}`} />
        </label>

        {/* Copy current tab code */}
        <button
          type="button"
          onClick={handleCopyClick}
          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
          title="Copy code to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
        </button>

        {/* Reset Editor */}
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
          title="Reset editors to initial starting examples"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">Reset</span>
        </button>

        {/* Run Button */}
        <button
          type="button"
          onClick={onRun}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors active:scale-95"
          title="Execute and refresh output preview"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Run</span>
        </button>
      </div>

    </div>
  );
};
