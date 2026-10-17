import React, { useState, useEffect } from 'react';
import { evaluateExerciseSubmission } from '../../lib/exercise-evaluator';
import { useProgress } from '../../hooks/useProgress';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
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
  Palette,
  Trophy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ExerciseEditor = ({ exercise, onCompleted }) => {
  const { theme } = useTheme();
  const { state, recordExerciseCompletion } = useProgress();
  const isAlreadyCompleted = state.completedExercises.includes(exercise.id);

  const hasCss = Boolean(exercise.starterCss || (exercise.cssRequirements && exercise.cssRequirements.length > 0));

  const [htmlCode, setHtmlCode] = useState(exercise.starterCode || '');
  const [cssCode, setCssCode] = useState(exercise.starterCss || '');
  const [validationResult, setValidationResult] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [activeTab, setActiveTab] = useState(hasCss ? 'css' : 'html');

  // Reset editors when exercise changes
  useEffect(() => {
    setHtmlCode(exercise.starterCode || '');
    setCssCode(exercise.starterCss || '');
    setValidationResult(null);
    setShowSolution(false);
    setActiveTab(hasCss ? 'css' : 'html');
  }, [exercise.id]);

  const handleSubmit = () => {
    const result = evaluateExerciseSubmission(exercise, htmlCode, cssCode);
    setValidationResult(result);

    if (result.allPassed) {
      recordExerciseCompletion(exercise.id);
      if (onCompleted) onCompleted();
    }
  };

  const handleReset = () => {
    setHtmlCode(exercise.starterCode || '');
    setCssCode(exercise.starterCss || '');
    setValidationResult(null);
  };

  const previewContent = generatePreviewDocument(htmlCode, cssCode, hasCss);

  const htmlReqs = exercise.requirements || [];
  const cssReqs = exercise.cssRequirements || [];

  return (
    <div className="space-y-6">
      
      {/* Exercise Task & Requirements header */}
      <div className="p-5 rounded-xl craft-card space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              {exercise.difficulty}
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
              exercise.courseId === 'css' 
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                : 'bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300 border border-orange-200 dark:border-orange-800'
            }`}>
              {exercise.courseId === 'css' ? 'CSS Challenge' : 'HTML Challenge'}
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {exercise.title}
            </h2>
          </div>

          {isAlreadyCompleted && (
            <span className="craft-badge-accent flex items-center gap-1 text-xs font-semibold px-2.5 py-1">
              <Trophy className="w-3.5 h-3.5" />
              Completed
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {exercise.task}
        </p>

        {/* Requirements checklist */}
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            Requirements Checklist:
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {htmlReqs.map((req, idx) => (
              <li key={req.id} className="flex items-start gap-2">
                <span className="font-mono text-orange-600 dark:text-orange-400 font-semibold flex-shrink-0">
                  HTML {idx + 1}.
                </span>
                <span>{req.text}</span>
              </li>
            ))}
            {cssReqs.map((req, idx) => (
              <li key={req.id} className="flex items-start gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold flex-shrink-0">
                  CSS {idx + 1}.
                </span>
                <span>{req.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Editor & Preview Split or Tab switcher */}
      <div className="craft-card rounded-xl overflow-hidden">
        
        {/* Sub-toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs">
          <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-0.5 rounded-lg">
            {hasCss && (
              <button
                type="button"
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
                  activeTab === 'css'
                    ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>CSS Stylesheet</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
                activeTab === 'html'
                  ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>HTML Markup</span>
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
              className="craft-btn-primary py-1.5 px-4"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit &amp; Validate</span>
            </button>
          </div>
        </div>

        {/* Code Editor or Preview Frame */}
        <div className="min-h-[300px]">
          {activeTab === 'html' && (
            <CodeMirror
              value={htmlCode}
              height="300px"
              theme={theme === 'dark' ? 'dark' : 'light'}
              extensions={[html()]}
              onChange={setHtmlCode}
              className="text-xs sm:text-sm font-mono"
            />
          )}

          {activeTab === 'css' && (
            <CodeMirror
              value={cssCode}
              height="300px"
              theme={theme === 'dark' ? 'dark' : 'light'}
              extensions={[css()]}
              onChange={setCssCode}
              className="text-xs sm:text-sm font-mono"
            />
          )}

          {activeTab === 'preview' && (
            <div className="h-[300px] bg-white">
              <iframe
                title="Exercise Live Preview"
                srcDoc={previewContent}
                sandbox="allow-scripts"
                className="w-full h-full border-none block"
              />
            </div>
          )}
        </div>

      </div>

      {/* Validation Results Drawer */}
      {validationResult && (
        <div className={`p-5 rounded-xl border transition-all ${
          validationResult.allPassed 
            ? 'bg-craft-flame/10 border-craft-flame/30' 
            : 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {validationResult.allPassed ? (
                <CheckCircle2 className="w-5 h-5 text-craft-flame" />
              ) : (
                <XCircle className="w-5 h-5 text-slate-500" />
              )}
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {validationResult.allPassed ? 'Excellent! All Requirements Passed' : 'Validation Failed — Issues Detected'}
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-craft-flame">
              Score: {validationResult.scorePercentage}% ({validationResult.passedCount} / {validationResult.totalCount})
            </span>
          </div>

          <div className="space-y-2">
            {validationResult.results.map((r) => (
              <div 
                key={r.requirementId}
                className={`p-2.5 rounded-lg text-xs flex items-start gap-2 ${
                  r.passed 
                    ? 'bg-craft-flame/10 text-slate-900 dark:text-white border border-craft-flame/20' 
                    : 'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700'
                }`}
              >
                {r.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-craft-flame flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-mono px-1 py-0.2 rounded bg-white/60 dark:bg-black/20">
                      {r.category || 'Rule'}
                    </span>
                    <span>{r.requirementText}</span>
                  </div>
                  {!r.passed && (
                    <div className="text-[11px] opacity-90 mt-0.5 font-mono">
                      Feedback: {r.message}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solution & Explanation Toggle */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowSolution((prev) => !prev)}
          className="w-full px-4 py-3 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Need Help? View Reference Solution &amp; Explanation</span>
          </div>
          {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showSolution && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-4 text-xs">
            {exercise.solutionCss && (
              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  CSS Solution:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                  {exercise.solutionCss}
                </pre>
              </div>
            )}

            {exercise.solutionCode && (
              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  HTML Solution:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                  {exercise.solutionCode}
                </pre>
              </div>
            )}

            <div>
              <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Why this solution works:
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {exercise.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
