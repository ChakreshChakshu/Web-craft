import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, X } from 'lucide-react';

export const IncompleteLessonModal = ({
  isOpen,
  onClose,
  onConfirmWithoutMarking,
  onMarkCompleteAndProceed,
  currentLessonTitle,
  nextLessonTitle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 z-10 space-y-5 animate-in zoom-in-95">
        
        {/* Close icon */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Icon */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-craft-flame/15 text-craft-flame flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1 pr-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Lesson Not Marked as Complete
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kya aap sure hain ki bina complete mark kiye next lesson par jana chahte hain?
            </p>
          </div>
        </div>

        {/* Lesson context info */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs space-y-2">
          <div className="text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Current Lesson: </span>
            <span className="italic">{currentLessonTitle}</span>
          </div>
          {nextLessonTitle && (
            <div className="text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Next Target: </span>
              <span className="text-craft-flame">{nextLessonTitle}</span>
            </div>
          )}
          <p className="text-[11px] text-craft-flame pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
            💡 Tip: Lesson complete mark karne se aapka course progress percentage badhta hai aur agle courses unlock hote hain!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          {/* Option 1: Mark as Complete & Proceed (Recommended) */}
          <button
            type="button"
            onClick={onMarkCompleteAndProceed}
            className="craft-btn-primary w-full py-2.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Mark as Complete &amp; Proceed</span>
          </button>

          {/* Option 2: Proceed without marking */}
          <button
            type="button"
            onClick={onConfirmWithoutMarking}
            className="w-full py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <span>Proceed Anyway (Without Marking)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Option 3: Cancel / Stay */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs font-medium transition-colors text-center"
          >
            Cancel &amp; Stay on Current Lesson
          </button>
        </div>

      </div>
    </div>
  );
};
