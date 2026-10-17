import React, { useState, useEffect } from 'react';
import { PlaygroundToolbar } from './PlaygroundToolbar';
import { CodeEditorPanel } from './CodeEditorPanel';
import { HtmlPreview } from './HtmlPreview';
import { useProgress } from '../../hooks/useProgress';
import { INITIAL_HTML_PLAYGROUND, INITIAL_CSS_PLAYGROUND, CSS_UNLOCK_REQUIREMENT_DESCRIPTION } from '../../lib/constants';
import { Eye, Code } from 'lucide-react';

export const PlaygroundLayout = ({
  initialHtml,
  initialCss,
  className = '',
  minEditorHeight = '420px'
}) => {
  const { state, updateEditorDrafts, isCssUnlocked } = useProgress();

  const [htmlCode, setHtmlCode] = useState(() => initialHtml || state.editorDrafts.html || INITIAL_HTML_PLAYGROUND);
  const [cssCode, setCssCode] = useState(() => initialCss || state.editorDrafts.css || INITIAL_CSS_PLAYGROUND);
  const [applyCss, setApplyCss] = useState(() => state.editorDrafts.applyCss);
  const [activeTab, setActiveTab] = useState('html');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // Mobile tab view mode: 'editor' or 'preview'
  const [mobileView, setMobileView] = useState('editor');

  // Sync to parent/storage drafts when user edits
  useEffect(() => {
    updateEditorDrafts(htmlCode, cssCode, applyCss);
  }, [htmlCode, cssCode, applyCss, updateEditorDrafts]);

  const handleRun = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleReset = () => {
    if (window.confirm('Reset code to starting template? Any unsaved edits will be cleared.')) {
      setHtmlCode(INITIAL_HTML_PLAYGROUND);
      setCssCode(INITIAL_CSS_PLAYGROUND);
      setApplyCss(true);
      setRefreshTrigger((prev) => prev + 1);
    }
  };

  const handleCopy = () => {
    const codeToCopy = activeTab === 'html' ? htmlCode : cssCode;
    navigator.clipboard.writeText(codeToCopy);
  };

  const handleSelectPreset = (preset) => {
    setHtmlCode(preset.html);
    setCssCode(preset.css);
    setApplyCss(true);
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Mobile view toggle switcher: Code vs Preview */}
      <div className="flex lg:hidden items-center justify-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg self-center text-xs font-medium">
        <button
          type="button"
          onClick={() => setMobileView('editor')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-all ${
            mobileView === 'editor'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Editor</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileView('preview')}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-all ${
            mobileView === 'preview'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Live Preview</span>
        </button>
      </div>

      {/* Main Split Grid (Desktop: 2 columns; Mobile: controlled by toggle) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        
        {/* Editor Panel Column */}
        <div className={`flex flex-col craft-card rounded-xl overflow-hidden ${
          mobileView === 'preview' ? 'hidden lg:flex' : 'flex'
        }`}>
          <PlaygroundToolbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isCssUnlocked={isCssUnlocked}
            applyCss={applyCss}
            setApplyCss={setApplyCss}
            onRun={handleRun}
            onReset={handleReset}
            onCopy={handleCopy}
            onSelectPreset={handleSelectPreset}
          />

          <div className="flex-1 min-h-[380px]">
            {activeTab === 'html' ? (
              <CodeEditorPanel
                language="html"
                value={htmlCode}
                onChange={setHtmlCode}
                minHeight={minEditorHeight}
              />
            ) : (
              <CodeEditorPanel
                language="css"
                value={cssCode}
                onChange={setCssCode}
                disabled={!isCssUnlocked}
                disabledReason={CSS_UNLOCK_REQUIREMENT_DESCRIPTION}
                minHeight={minEditorHeight}
              />
            )}
          </div>
        </div>

        {/* Live Preview Column */}
        <div className={`flex flex-col min-h-[380px] ${
          mobileView === 'editor' ? 'hidden lg:flex' : 'flex'
        }`}>
          <HtmlPreview
            html={htmlCode}
            css={cssCode}
            applyCss={applyCss}
            refreshTrigger={refreshTrigger}
          />
        </div>

      </div>
    </div>
  );
};
