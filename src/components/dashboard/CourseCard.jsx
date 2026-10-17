import React from 'react';
import { Link } from 'react-router-dom';
import { 
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
    badgeBg: 'bg-[#EB5E28]/15 text-[#EB5E28]',
    bar: 'bg-[#EB5E28]',
    hoverBorder: 'hover:border-[#EB5E28]'
  },
  css: {
    icon: Layers,
    badgeBg: 'bg-[#EB5E28]/15 text-[#EB5E28]',
    bar: 'bg-[#EB5E28]',
    hoverBorder: 'hover:border-[#EB5E28]'
  },
  javascript: {
    icon: Code2,
    badgeBg: 'bg-[#403D39]/40 text-[#CCC5B9]',
    bar: 'bg-[#403D39]',
    hoverBorder: 'hover:border-[#403D39]'
  },
  react: {
    icon: Atom,
    badgeBg: 'bg-[#403D39]/40 text-[#CCC5B9]',
    bar: 'bg-[#403D39]',
    hoverBorder: 'hover:border-[#403D39]'
  },
  nodejs: {
    icon: Server,
    badgeBg: 'bg-[#403D39]/40 text-[#CCC5B9]',
    bar: 'bg-[#403D39]',
    hoverBorder: 'hover:border-[#403D39]'
  }
};

export const CourseCard = ({
  courseId,
  title,
  subtitle,
  stats,
  description
}) => {
  const isComingSoon = Boolean(stats?.unlockInfo?.isComingSoon || stats?.isComingSoon);
  const isLocked = !isComingSoon && !stats?.isUnlocked;
  const config = COURSE_CONFIG[courseId] || COURSE_CONFIG.html;
  const IconComponent = config.icon;

  return (
    <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between craft-card ${
      isComingSoon
        ? 'opacity-80 bg-slate-50/50 dark:bg-slate-900/30'
        : isLocked 
          ? 'opacity-90 bg-slate-50/70 dark:bg-slate-900/40' 
          : 'craft-card-interactive'
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

          {isComingSoon ? (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              Coming Soon
            </span>
          ) : isLocked ? (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#403D39]/30 text-[#CCC5B9] border border-[#403D39]">
              <Lock className="w-3.5 h-3.5" />
              Locked
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EB5E28]/15 text-[#EB5E28] border border-[#EB5E28]/30">
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
        {/* Stats bar or Coming Soon banner */}
        {isComingSoon ? (
          <div className="p-3 mb-6 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <span className="font-semibold block text-slate-800 dark:text-slate-200">Track In Development</span>
            <p className="text-[11px] text-slate-500">Currently focused on HTML5 &amp; CSS3 skill enhancement. Released in a future update.</p>
          </div>
        ) : (
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
        )}

        {/* Lock Requirement note if locked */}
        {isLocked && stats?.unlockRequirementText && (
          <div className="p-3 mb-6 rounded-lg bg-[#403D39]/30 border border-[#403D39] text-xs text-[#CCC5B9] flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-[#EB5E28] flex-shrink-0 mt-0.5" />
            <span>{stats.unlockRequirementText}</span>
          </div>
        )}

        {/* Action CTA */}
        {isComingSoon ? (
          <div className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed">
            <span>Coming Soon (Focus on HTML &amp; CSS)</span>
          </div>
        ) : (
          <Link
            to={`/learn/${courseId}`}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
              isLocked
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300'
                : 'craft-btn-primary shadow-sm'
            }`}
          >
            <span>{isLocked ? 'View Unlock Requirements' : (stats?.completionPercentage || 0) > 0 ? 'Continue Curriculum' : 'Start Curriculum'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

    </div>
  );
};
