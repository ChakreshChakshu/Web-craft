import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { PlaygroundLayout } from '../components/playground/PlaygroundLayout';
import { Terminal, Sparkles } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

export const PlaygroundPage = () => {
  const { isCssUnlocked } = useProgress();

  return (
    <PageLayout fullWidth>
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        
        {/* Playground header info bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Interactive Code Playground</span>
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  Live Sandboxed
                </span>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Write HTML and CSS in real-time. Code executes inside an isolated sandbox environment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {isCssUnlocked ? (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HTML &amp; CSS Unlocked</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                <span>CSS Tab Locked (Finish HTML Modules 1-3)</span>
              </span>
            )}
          </div>
        </div>

        {/* Playground Main Workbench */}
        <PlaygroundLayout minEditorHeight="560px" />

      </div>
    </PageLayout>
  );
};
