import React, { useState } from 'react';
import { validateHtmlStructure } from '../../lib/html-validation';
import { useProgress } from '../../hooks/useProgress';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { useTheme } from '../../context/ThemeContext';
import { generatePreviewDocument } from '../../lib/preview';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Send, 
  HelpCircle, 
  Eye, 
  Code2, 
  Trophy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ExerciseEditor = ({ exercise, onCompleted }) => {
  const { theme } = useTheme();
  const { state, recordExerciseCompletion } = useProgress();
  const isAlreadyCompleted = state.completedExercises.includes(exercise.id);

  const [code, setCode] = useState(exercise.starterCode);
  const [validationResult, setValidationResult] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');

  const handleSubmit = () => {
    const result = validateHtmlStructure(code, exercise.requirements);
    setValidationResult(result);

    if (result.allPassed) {
      recordExerciseCompletion(exercise.id);
      if (onCompleted) onCompleted();
    }
  };

  const handleReset = () => {
    setCode(exercise.starterCode);
    setValidationResult(null);
  };

  const previewContent = generatePreviewDocument(code, '', false);

  return (
    <div className="space-y-6">
      
      {/* Exercise Task & Requirements header */}
      <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              {exercise.difficulty}
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {exercise.title}
            </h2>
          </div>

          {isAlreadyCompleted && (
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <Trophy className="w-3.5 h-3.5" />
              Completed
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          {exercise.task}
        </p>

        {/* Requirements checklist */}
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Requirements Checklist:
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {exercise.requirements.map((req, idx) => (
              <li key={req.id} className="flex items-start gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  {idx + 1}.
                </span>
                <span>{req.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Editor & Preview Split or Tab switcher */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
        
        {/* Sub-toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs">
          <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-0.5 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
                activeTab === 'editor'
                  ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>HTML Solution</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Render Preview</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 px-2.5 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit & Validate</span>
            </button>
          </div>
        </div>

        {/* Code Editor or Preview Frame */}
        <div className="min-h-[280px]">
          {activeTab === 'editor' ? (
            <CodeMirror
              value={code}
              height="280px"
              theme={theme === 'dark' ? 'dark' : 'light'}
              extensions={[html()]}
              onChange={setCode}
              className="text-xs sm:text-sm font-mono"
            />
          ) : (
            <div className="h-[280px] bg-white">
              <iframe
                title="Exercise Live Preview"
                srcDoc={previewContent}
                sandbox="allow-scripts"
                className="w-full h-full border-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Validation Feedback Report */}
      {validationResult && (
        <div className={`p-5 rounded-xl border ${
          validationResult.allPassed
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
            : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'
        } space-y-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {validationResult.allPassed ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <XCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              )}
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {validationResult.allPassed
                  ? 'All Requirements Passed! Great job!'
                  : `Validation Score: ${validationResult.scorePercentage}% (${validationResult.results.filter(r => r.passed).length}/${exercise.requirements.length} Passed)`}
              </h3>
            </div>
          </div>

          {/* Itemized feedback list */}
          <div className="space-y-2 pt-1">
            {validationResult.results.map((res) => (
              <div
                key={res.requirementId}
                className={`p-3 rounded-lg text-xs flex items-start gap-2.5 ${
                  res.passed
                    ? 'bg-emerald-100/60 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-200'
                    : 'bg-amber-100/60 dark:bg-amber-900/40 text-amber-950 dark:text-amber-200'
                }`}
              >
                {res.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="font-semibold">{res.requirementText}</div>
                  <div className="text-[11px] opacity-80 mt-0.5">{res.message}</div>
                </div>
              </div>
            ))}
          </div>

          {!validationResult.allPassed && (
            <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
              Review the feedback above, adjust your HTML code, and submit again to verify.
            </p>
          )}
        </div>
      )}

      {/* Solution Toggle */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showSolution ? 'Hide Reference Solution' : 'View Reference Solution'}</span>
          {showSolution ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showSolution && (
          <div className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono space-y-2 border border-slate-800">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-sans font-semibold">
              Reference Solution
            </div>
            <pre className="overflow-x-auto p-2 bg-slate-950 rounded">
              <code>{exercise.solutionCode}</code>
            </pre>
            <p className="text-xs text-slate-400 font-sans pt-1">
              {exercise.explanation}
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
