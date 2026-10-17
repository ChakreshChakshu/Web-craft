import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const LessonNavigation = ({
  previousLesson,
  nextLesson,
  courseId,
  isCompleted,
  onToggleComplete,
  onNextClick,
  quizId
}) => {
  const navigate = useNavigate();

  const handleNextAction = () => {
    if (!nextLesson) return;
    if (isCompleted) {
      navigate(`/learn/${courseId}/${nextLesson.moduleId}/${nextLesson.id}`);
    } else if (onNextClick) {
      onNextClick(nextLesson);
    } else {
      navigate(`/learn/${courseId}/${nextLesson.moduleId}/${nextLesson.id}`);
    }
  };

  return (
    <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Previous Button */}
      <div className="w-full sm:w-auto">
        {previousLesson ? (
          <Link
            to={`/learn/${courseId}/${previousLesson.moduleId}/${previousLesson.id}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-medium transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Previous</div>
              <div className="truncate max-w-[150px] sm:max-w-[180px]">{previousLesson.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Middle: Mark Complete button */}
      <button
        type="button"
        onClick={onToggleComplete}
        className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 transition-all shadow-sm ${
          isCompleted
            ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            : 'craft-btn-primary'
        }`}
      >
        <CheckCircle2 className="w-4 h-4" />
        <span>{isCompleted ? 'Completed (Mark Incomplete)' : 'Mark Lesson as Complete'}</span>
      </button>

      {/* Next Button */}
      <div className="w-full sm:w-auto flex items-center justify-end">
        {nextLesson ? (
          <button
            type="button"
            onClick={handleNextAction}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-medium transition-all shadow-sm"
          >
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Next</div>
              <div className="truncate max-w-[150px] sm:max-w-[180px]">{nextLesson.title}</div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          quizId && (
            <Link
              to={`/practice`}
              className="craft-btn-primary px-4 py-2.5 text-xs sm:text-sm"
            >
              <span>Practice Exercises</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )
        )}
      </div>
    </div>
  );
};
