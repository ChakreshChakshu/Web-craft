import React from 'react';
import { AppHeader } from './AppHeader';

export const PageLayout = ({ children, fullWidth = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      <AppHeader />
      <main className={`flex-1 ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8'}`}>
        {children}
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 WebDev Lab — Sequential HTML & CSS Mastery System</p>
          <div className="flex items-center gap-4">
            <span>Learn Sequentially</span>
            <span>•</span>
            <span>Real-time Code Sandbox</span>
            <span>•</span>
            <span>Structural Validation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
