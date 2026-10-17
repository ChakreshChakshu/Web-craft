import React from 'react';
import { CheckCircle2, Circle, ExternalLink, Bookmark, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TableOfContents = ({
  lesson,
  isCompleted,
  onToggleComplete
}) => {
  return (
    <aside className="w-full text-xs space-y-6">
      
      {/* Completion status card */}
      <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Progress Status
          </span>
          {isCompleted ? (
            <span className="craft-badge-accent inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5">
              <CheckCircle2 className="w-3 h-3" />
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              <Circle className="w-3 h-3" />
              In Progress
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleComplete}
          className={`w-full py-2 px-3 rounded-lg font-medium text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm ${
            isCompleted
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              : 'craft-btn-primary'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{isCompleted ? 'Mark Incomplete' : 'Mark as Complete'}</span>
        </button>
      </div>

      {/* On This Page Navigation Links */}
      <div className="space-y-2">
        <h3 className="font-semibold uppercase tracking-wider text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <Bookmark className="w-3.5 h-3.5" />
          On This Page
        </h3>
        <nav className="space-y-1 pl-1 border-l border-slate-200 dark:border-slate-800" aria-label="Table of Contents">
          <a
            href="#objectives"
            className="block py-1 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-l hover:border-blue-500 -ml-px transition-colors"
          >
            Learning Objectives
          </a>
          {lesson.sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="block py-1 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-l hover:border-blue-500 -ml-px transition-colors"
            >
              {sec.heading}
            </a>
          ))}
          {lesson.interactiveExample && (
            <a
              href="#interactive-playground"
              className="block py-1 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-l hover:border-blue-500 -ml-px transition-colors"
            >
              Interactive Example
            </a>
          )}
          {lesson.practiceTask && (
            <a
              href="#practice-task"
              className="block py-1 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-l hover:border-blue-500 -ml-px transition-colors"
            >
              Hands-on Task
            </a>
          )}
          <a
            href="#key-takeaways"
            className="block py-1 pl-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-l hover:border-blue-500 -ml-px transition-colors"
          >
            Key Takeaways
          </a>
        </nav>
      </div>

      {/* Key Takeaways snippet box */}
      {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Core Takeaways</span>
          </div>
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-400 pl-4 list-disc leading-relaxed">
            {lesson.keyTakeaways.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Quick link to Open in playground */}
      <div className="pt-2">
        <Link
          to="/playground"
          className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100/70 transition-colors"
        >
          <span className="font-medium">Open Full Playground</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

    </aside>
  );
};
