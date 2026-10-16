import React, { useEffect, useRef, useState } from 'react';
import { generatePreviewDocument } from '../../lib/preview';
import { RefreshCw, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export const HtmlPreview = ({
  html,
  css,
  applyCss,
  refreshTrigger = 0
}) => {
  const iframeRef = useRef(null);
  const [runtimeError, setRuntimeError] = useState(null);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'PREVIEW_ERROR') {
        setRuntimeError(`Runtime notice: ${event.data.message}`);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const updatePreview = () => {
    setRuntimeError(null);
    if (!iframeRef.current) return;
    const documentContent = generatePreviewDocument(html, css, applyCss);
    // Setting srcdoc ensures isolated rendering under sandbox="allow-scripts"
    iframeRef.current.srcdoc = documentContent;
    setLastRefreshed(Date.now());
  };

  useEffect(() => {
    updatePreview();
  }, [html, css, applyCss, refreshTrigger]);

  const handleManualRefresh = () => {
    updatePreview();
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm">
      {/* Preview Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <span className="font-semibold text-slate-700 dark:text-slate-300 ml-1">
            Live Preview
          </span>
          <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80">
            <ShieldCheck className="w-3 h-3" />
            Sandboxed
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleManualRefresh}
            title="Refresh preview render"
            className="flex items-center gap-1 px-2 py-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      {/* Runtime warning / banner if detected */}
      {runtimeError && (
        <div className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/60 border-b border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{runtimeError}</span>
          </div>
          <button
            type="button"
            onClick={() => setRuntimeError(null)}
            className="text-[11px] font-semibold text-amber-700 hover:underline ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Sandboxed iframe container */}
      <div className="flex-1 w-full h-full min-h-[300px] relative bg-white">
        <iframe
          ref={iframeRef}
          title="Student Live HTML/CSS Preview"
          sandbox="allow-scripts"
          className="w-full h-full border-none block"
        />
      </div>
    </div>
  );
};
