import React, { useEffect, useRef, useState } from 'react';
import { generatePreviewDocument } from '../../lib/preview';
import { 
  RefreshCw, 
  ShieldCheck, 
  AlertCircle,
  Monitor,
  Tablet,
  Smartphone
} from 'lucide-react';

export const HtmlPreview = ({
  html,
  css,
  applyCss,
  refreshTrigger = 0
}) => {
  const iframeRef = useRef(null);
  const [runtimeError, setRuntimeError] = useState(null);
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'

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
  };

  useEffect(() => {
    updatePreview();
  }, [html, css, applyCss, refreshTrigger]);

  const handleManualRefresh = () => {
    updatePreview();
  };

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[375px] shadow-xl border-x border-slate-300 dark:border-slate-700';
      case 'tablet':
        return 'max-w-[768px] shadow-lg border-x border-slate-300 dark:border-slate-700';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="flex flex-col h-full craft-card rounded-xl overflow-hidden">
      {/* Preview Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-craft-flame inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-craft-sand inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-craft-charcoal inline-block" />
          </div>
          <span className="font-semibold text-slate-700 dark:text-slate-300 ml-1">
            Live Preview
          </span>
          <span className="craft-badge-neutral flex items-center gap-1 text-[11px] px-1.5 py-0.5">
            <ShieldCheck className="w-3 h-3 text-craft-flame" />
            Sandboxed
          </span>
        </div>

        {/* Device Switcher & Refresh */}
        <div className="flex items-center gap-2">
          
          {/* Device viewport frame switcher */}
          <div className="flex items-center bg-slate-200/70 dark:bg-slate-700 p-0.5 rounded-lg text-xs">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              title="Desktop viewport (100%)"
              className={`p-1 rounded transition-colors ${
                deviceMode === 'desktop'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('tablet')}
              title="Tablet viewport (768px)"
              className={`p-1 rounded transition-colors ${
                deviceMode === 'tablet'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              title="Mobile viewport (375px)"
              className={`p-1 rounded transition-colors ${
                deviceMode === 'mobile'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            {deviceMode === 'mobile' ? '375px' : deviceMode === 'tablet' ? '768px' : '100%'}
          </span>

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
        <div className="px-3 py-1.5 bg-craft-flame/10 border-b border-craft-flame/30 text-slate-900 dark:text-craft-cream text-xs flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-craft-flame flex-shrink-0" />
            <span className="truncate">{runtimeError}</span>
          </div>
          <button
            type="button"
            onClick={() => setRuntimeError(null)}
            className="text-[11px] font-semibold text-craft-flame hover:underline ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Sandboxed iframe container with centered responsive frame support */}
      <div className="flex-1 w-full h-full min-h-[300px] bg-slate-100 dark:bg-slate-950 flex justify-center items-stretch overflow-hidden">
        <div className={`w-full h-full transition-all duration-300 bg-white ${getContainerWidth()}`}>
          <iframe
            ref={iframeRef}
            title="Student Live HTML/CSS Preview"
            sandbox="allow-scripts"
            className="w-full h-full border-none block"
          />
        </div>
      </div>
    </div>
  );
};
