import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert,
  FileCode,
  Layers,
  Code2,
  Atom,
  Server
} from 'lucide-react';

const COURSE_CONFIG = {
  html: {
    icon: FileCode,
    badgeBg: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400',
    bar: 'bg-orange-500',
    hoverBorder: 'hover:border-orange-300 dark:hover:border-orange-800'
  },
  css: {
    icon: Layers,
    badgeBg: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
    bar: 'bg-blue-600',
    hoverBorder: 'hover:border-blue-300 dark:hover:border-blue-800'
  },
  javascript: {
    icon: Code2,
    badgeBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
    bar: 'bg-amber-500',
    hoverBorder: 'hover:border-amber-300 dark:hover:border-amber-800'
  },
  react: {
    icon: Atom,
    badgeBg: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400',
    bar: 'bg-cyan-500',
    hoverBorder: 'hover:border-cyan-300 dark:hover:border-cyan-800'
  },
  nodejs: {
    icon: Server,
    badgeBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
    bar: 'bg-emerald-500',
    hoverBorder: 'hover:border-emerald-300 dark:hover:border-emerald-800'
  }
};

export const CourseCard = ({
  courseId,
  title,
  subtitle,
  stats,
  description
}) => {
  const isLocked = !stats?.isUnlocked;
  const config = COURSE_CONFIG[courseId] || COURSE_CONFIG.html;
  const IconComponent = config.icon;

  return (
    <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
      isLocked 
        ? 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-90' 
        : `bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md ${config.hoverBorder}`
    }`}>
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${config.badgeBg}`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {subtitle}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
            </div>
          </div>

          {isLocked ? (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              <Lock className="w-3.5 h-3.5" />
              Locked
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Available
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Stats bar */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-slate-600 dark:text-slate-400">Course Progress</span>
            <span className="text-slate-900 dark:text-white font-mono">{stats?.completionPercentage || 0}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${config.bar}`}
              style={{ width: `${stats?.completionPercentage || 0}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
            <span>Completed: {stats?.completedLessonsCount || 0} / {stats?.totalLessons || 0} Lessons</span>
            <span>{stats?.totalExercises || 0} Exercises</span>
          </div>
        </div>

        {/* Lock Requirement note if locked */}
        {isLocked && stats?.unlockRequirementText && (
          <div className="p-3 mb-6 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>{stats.unlockRequirementText}</span>
          </div>
        )}

        {/* Action CTA */}
        <Link
          to={`/learn/${courseId}`}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
            isLocked
              ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300'
              : 'bg-slate-900 hover:bg-black dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-sm'
          }`}
        >
          <span>{isLocked ? 'View Unlock Requirements' : (stats?.completionPercentage || 0) > 0 ? 'Continue Curriculum' : 'Start Curriculum'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
