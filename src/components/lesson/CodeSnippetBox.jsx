import React, { useState } from 'react';
import { Copy, Check, Terminal, Eye, Code, Columns, ArrowUpRight } from 'lucide-react';
import { generatePreviewDocument } from '../../lib/preview';
import { useProgress } from '../../hooks/useProgress';
import { useNavigate } from 'react-router-dom';

export const CodeSnippetBox = ({
  language,
  code,
  title,
  description,
  previewHtmlOverride
}) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('code');
  const { updateEditorDrafts, state } = useProgress();
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendToPlayground = () => {
    if (language === 'html') {
      updateEditorDrafts(code, state.editorDrafts.css, state.editorDrafts.applyCss);
    } else {
      updateEditorDrafts(state.editorDrafts.html, code, true);
    }
    navigate('/playground');
  };

  // Generate preview document
  const previewDoc = language === 'html'
    ? generatePreviewDocument(code, '', false)
    : generatePreviewDocument(
        previewHtmlOverride || '<div class="demo-box"><h2>Demo Heading</h2><p>This element has the CSS rules applied to it.</p><button type="button">Button</button></div>',
        code,
        true
      );

  return (
    <div className="my-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-3.5 py-2.5 bg-slate-950 border-b border-slate-800 text-xs gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-mono text-slate-200 font-semibold">
            {title || (language === 'html' ? 'HTML Markup' : 'CSS Rule')}
          </span>
        </div>

        {/* View Mode Switcher: Code | Live Result | Split */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-[11px]">
            <button
              type="button"
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                viewMode === 'code' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Show code source"
            >
              <Code className="w-3 h-3" />
              <span>Code</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                viewMode === 'preview' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Show live rendered output"
            >
              <Eye className="w-3 h-3" />
              <span>Result</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                viewMode === 'split' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
              title="Show code and result side-by-side"
            >
              <Columns className="w-3 h-3" />
              <span>Split</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-800 transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3 h-3 text-craft-flame" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          {/* Send to Playground button */}
          <button
            type="button"
            onClick={handleSendToPlayground}
            className="flex items-center gap-1 text-[11px] text-blue-300 hover:text-white px-2 py-1 rounded bg-blue-950/70 border border-blue-800/60 hover:bg-blue-900 transition-colors"
            title="Open and edit this snippet in Playground"
          >
            <ArrowUpRight className="w-3 h-3" />
            <span className="hidden md:inline">Open in Sandbox</span>
          </button>
        </div>
      </div>

      {/* Content Area: Code, Preview, or Split */}
      {viewMode === 'code' && (
        <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-blue-100 selection:bg-blue-600/50 max-h-[360px]">
          <code>{code}</code>
        </pre>
      )}

      {viewMode === 'preview' && (
        <div className="bg-white p-2 min-h-[160px] max-h-[360px] overflow-hidden">
          <iframe
            title="Live Snippet Output"
            srcDoc={previewDoc}
            sandbox="allow-scripts"
            className="w-full h-48 border-none bg-white rounded"
          />
        </div>
      )}

      {viewMode === 'split' && (
        <div className="grid grid-cols-2 divide-x divide-slate-800">
          <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-blue-100 selection:bg-blue-600/50 max-h-[300px]">
            <code>{code}</code>
          </pre>
          <div className="bg-white p-2 h-full min-h-[160px]">
            <iframe
              title="Live Snippet Output"
              srcDoc={previewDoc}
              sandbox="allow-scripts"
              className="w-full h-full min-h-[140px] border-none bg-white rounded"
            />
          </div>
        </div>
      )}

      {description && (
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span>{description}</span>
        </div>
      )}
    </div>
  );
};
