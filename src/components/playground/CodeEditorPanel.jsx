import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { useTheme } from '../../context/ThemeContext';
import { Lock, FileCode, Check, Copy } from 'lucide-react';

export const CodeEditorPanel = ({
  language,
  value,
  onChange,
  disabled = false,
  disabledReason,
  minHeight = '350px'
}) => {
  const { theme } = useTheme();

  const extensions = React.useMemo(() => {
    return language === 'html' ? [html()] : [css()];
  }, [language]);

  if (disabled) {
    return (
      <div 
        className="flex flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-b-lg"
        style={{ minHeight }}
      >
        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 mb-3">
          <Lock className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">
          {language.toUpperCase()} Editor Locked
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
          {disabledReason || 'Complete the prerequisite lessons to unlock this editor tab.'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-slate-950 overflow-hidden rounded-b-lg">
      <CodeMirror
        value={value}
        height="100%"
        minHeight={minHeight}
        theme={theme === 'dark' ? 'dark' : 'light'}
        extensions={extensions}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          history: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true
        }}
        className="text-sm font-mono flex-1 overflow-auto"
      />
    </div>
  );
};
