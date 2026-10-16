import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { useTheme } from '../../context/ThemeContext';
import { generatePreviewDocument } from '../../lib/preview';
import { HelpCircle, Play, RotateCcw, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const PracticeTaskBox = ({ task, courseId }) => {
  const { theme } = useTheme();
  const [code, setCode] = useState(task.starterCode);
  const [showHint, setShowHint] = useState(false);
  const [previewHtml, setPreviewHtml] = useState(null);

  const handleRun = () => {
    if (courseId === 'html') {
      setPreviewHtml(generatePreviewDocument(code, '', false));
    } else {
      const basicHtml = '<div class="practice-box"><h2>Practice Element</h2><p>Testing styles</p></div>';
      setPreviewHtml(generatePreviewDocument(basicHtml, code, true));
    }
  };

  const handleReset = () => {
    setCode(task.starterCode);
    setPreviewHtml(null);
  };

  return (
    <div className="my-6 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">
            Hands-on Task
          </span>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mt-1.5">
            {task.instruction}
          </h3>
        </div>

        {task.hint && (
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
            {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>

      {showHint && task.hint && (
        <div className="p-3 mb-3 rounded-lg bg-blue-100/70 dark:bg-blue-900/40 text-xs text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
          <strong className="font-semibold">Hint: </strong>
          {task.hint}
        </div>
      )}

      {/* Mini editor */}
      <div className="rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-950 shadow-inner">
        <CodeMirror
          value={code}
          height="140px"
          theme={theme === 'dark' ? 'dark' : 'light'}
          extensions={courseId === 'html' ? [html()] : [css()]}
          onChange={setCode}
          className="text-xs font-mono"
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Code</span>
        </button>

        <button
          type="button"
          onClick={handleRun}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Test in Preview</span>
        </button>
      </div>

      {/* Mini Output preview */}
      {previewHtml && (
        <div className="mt-4 pt-3 border-t border-blue-200 dark:border-blue-900/60">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
            Output:
          </span>
          <iframe
            title="Practice Task Output"
            srcDoc={previewHtml}
            sandbox="allow-scripts"
            className="w-full h-32 bg-white rounded-lg border border-slate-200 dark:border-slate-700"
          />
        </div>
      )}
    </div>
  );
};
