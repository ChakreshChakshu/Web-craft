import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { useProgress } from '../hooks/useProgress';
import { COURSE_LIST, getCourse } from '../lib/courses';
import { isCourseUnlocked, getCourseUnlockInfo } from '../lib/progress';
import { exercises } from '../content/exercises/exercisesData';
import { quizzes } from '../content/quizzes/quizzesData';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  LockOpen, 
  Trophy, 
  RotateCcw,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProgressPage = () => {
  const { 
    state, 
    isCourseUnlocked: checkUnlock,
    getCourseStats,
    resetAllProgress 
  } = useProgress();

  const [activeCourseTab, setActiveCourseTab] = useState('html');

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset all learning progress? This cannot be undone.')) {
      resetAllProgress();
    }
  };

  const selectedCourse = getCourse(activeCourseTab);
  const selectedUnlocked = checkUnlock ? checkUnlock(activeCourseTab) : isCourseUnlocked(activeCourseTab, state?.completedLessons || []);
  const unlockInfo = getCourseUnlockInfo(activeCourseTab, state?.completedLessons || []);

  const selectedStats = getCourseStats ? getCourseStats(activeCourseTab) : {
    totalLessons: Object.keys(selectedCourse.lessons).length,
    completedLessonsCount: 0,
    completionPercentage: 0,
    isUnlocked: selectedUnlocked
  };

  return (
    <PageLayout>
      <div className="space-y-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Learning Progress &amp; Unlock Journey
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Sequential track: HTML ➔ CSS ➔ JavaScript ➔ React.js ➔ Node.js (70% required to unlock each next stage).
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetAll}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 hover:bg-red-100 text-xs font-semibold self-start sm:self-auto transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress</span>
          </button>
        </div>

        {/* Global Summary Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {COURSE_LIST.map((c) => {
            const isUnlocked = checkUnlock ? checkUnlock(c.id) : isCourseUnlocked(c.id, state?.completedLessons || []);
            const stats = getCourseStats ? getCourseStats(c.id) : {
              completionPercentage: 0,
              completedLessonsCount: 0,
              totalLessons: Object.keys(c.lessons).length
            };

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCourseTab(c.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeCourseTab === c.id
                    ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/40 dark:bg-blue-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  <span>{c.shortTitle}</span>
                  {!isUnlocked ? (
                    <Lock className="w-3 h-3 text-amber-500" />
                  ) : (
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {stats.completionPercentage}%
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block truncate">
                  {stats.completedLessonsCount} / {stats.totalLessons} lessons
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Unlock Status Box */}
        {unlockInfo.prerequisiteCourse ? (
          <div className={`p-6 rounded-2xl border ${
            selectedUnlocked
              ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
              : 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800'
          } space-y-4`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                {selectedUnlocked ? (
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    <LockOpen className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
                    <Lock className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedCourse.title} Unlock Gate
                  </h3>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {selectedUnlocked
                      ? `Unlocked! You reached at least 70% in ${unlockInfo.prerequisiteCourse.title}.`
                      : unlockInfo.unlockRequirementText}
                  </span>
                </div>
              </div>

              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                selectedUnlocked
                  ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                  : 'bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200'
              }`}>
                {selectedUnlocked ? 'STAGE UNLOCKED' : `${unlockInfo.currentPercentage}% / 70% NEEDED`}
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>{unlockInfo.prerequisiteCourse.title} Progress:</span>
                <span>{unlockInfo.completedPrereqCount}/{unlockInfo.totalPrereqLessons} lessons ({unlockInfo.currentPercentage}% / 70%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    selectedUnlocked ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${Math.min(100, Math.round((unlockInfo.currentPercentage / 70) * 100))}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                HTML5 Fundamentals — Foundation Stage
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                This initial foundation stage is always unlocked. Complete at least 70% of HTML to unlock CSS!
              </p>
            </div>
          </div>
        )}

        {/* Selected Course Module Breakdown */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedCourse.title} Modules
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedCourse.description}
              </p>
            </div>

            <Link
              to={`/learn/${selectedCourse.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 self-start sm:self-auto transition-colors"
            >
              <span>{selectedUnlocked ? 'View Full Curriculum' : 'View Requirements'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCourse.modules.map((mod) => {
              const finished = mod.lessonIds.filter((id) =>
                state?.completedLessons?.includes(id)
              ).length;
              const percent = mod.lessonIds.length > 0 ? Math.round((finished / mod.lessonIds.length) * 100) : 0;

              return (
                <div
                  key={mod.id}
                  className={`p-4 rounded-xl border ${
                    !selectedUnlocked 
                      ? 'bg-slate-50/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-75' 
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                  } space-y-2`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      Module {mod.moduleNumber}: {mod.title}
                    </span>
                    <span className="font-mono text-slate-500">{percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span>{finished}/{mod.lessonIds.length} lessons finished</span>
                    {selectedUnlocked && mod.lessonIds.length > 0 && (
                      <Link
                        to={`/learn/${selectedCourse.id}/${mod.id}/${mod.lessonIds[0]}`}
                        className="text-blue-600 hover:underline"
                      >
                        Open Module →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </PageLayout>
  );
};
