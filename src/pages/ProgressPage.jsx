import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { useProgress } from '../hooks/useProgress';
import { COURSE_LIST, getCourse } from '../lib/courses';
import { isCourseUnlocked, getCourseUnlockInfo } from '../lib/progress';
import { 
  CheckCircle2, 
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
            className="craft-btn-secondary !text-craft-flame !border-craft-flame/40 hover:!bg-craft-flame/10 flex items-center gap-1.5 px-3 py-2 text-xs font-semibold self-start sm:self-auto transition-colors"
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
                    ? 'border-craft-flame ring-2 ring-craft-flame/20 bg-craft-flame/10'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                } ${c.isComingSoon ? 'opacity-70' : ''}`}
              >
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                  <span>{c.shortTitle}</span>
                  {c.isComingSoon ? (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Soon</span>
                  ) : !isUnlocked ? (
                    <Lock className="w-3 h-3 text-slate-400" />
                  ) : (
                    <CheckCircle2 className="w-3 h-3 text-craft-flame" />
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {c.isComingSoon ? '—' : `${stats.completionPercentage}%`}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block truncate">
                  {c.isComingSoon ? 'In Development' : `${stats.completedLessonsCount} / ${stats.totalLessons} lessons`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Course Status Box */}
        {selectedCourse.isComingSoon ? (
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {selectedCourse.title} — Track In Development
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  This track is currently disabled to help students focus 100% on mastering HTML5 structure and CSS3 modern layouts. It will be released in an upcoming update!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveCourseTab('html')}
              className="craft-btn-primary px-3.5 py-2 text-xs font-semibold shadow-sm transition-colors"
            >
              Switch to HTML5 Track
            </button>
          </div>
        ) : unlockInfo.prerequisiteCourse ? (
          <div className={`p-6 rounded-2xl border ${
            selectedUnlocked
              ? 'bg-craft-flame/10 border-craft-flame/30'
              : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800'
          } space-y-4`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                {selectedUnlocked ? (
                  <div className="p-2 rounded-xl bg-craft-flame text-white">
                    <LockOpen className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
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
                  ? 'craft-badge-accent'
                  : 'craft-badge-neutral'
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
                  className="h-full rounded-full transition-all duration-500 bg-craft-flame"
                  style={{ width: `${Math.min(100, Math.round((unlockInfo.currentPercentage / 70) * 100))}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-craft-flame/10 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-craft-flame text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                HTML5 Fundamentals — Foundation Stage
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                This initial foundation stage is always unlocked. Complete at least 70% of HTML to unlock CSS3 &amp; Modern Layout!
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

            {selectedCourse.isComingSoon ? (
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed">
                Coming Soon
              </span>
            ) : (
              <Link
                to={`/learn/${selectedCourse.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 self-start sm:self-auto transition-colors"
              >
                <span>{selectedUnlocked ? 'View Full Curriculum' : 'View Requirements'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
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

        {/* Milestone Badges & Developer Credentials */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-craft-flame" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Milestone Badges &amp; Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Badge 1: HTML5 Foundation */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 ${
              (getCourseStats('html')?.completionPercentage || 0) >= 100
                ? 'bg-craft-flame/10 border-craft-flame/30'
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className={`p-2.5 rounded-xl ${
                (getCourseStats('html')?.completionPercentage || 0) >= 100
                  ? 'bg-craft-flame text-white'
                  : 'bg-slate-200 text-slate-400 dark:bg-slate-700'
              }`}>
                <Trophy className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                  HTML5 Certified Apprentice
                </div>
                <div className="text-[11px] text-slate-500">
                  {(getCourseStats('html')?.completionPercentage || 0) >= 100 ? 'Earned & Verified' : `${getCourseStats('html')?.completionPercentage || 0}% / 100% Required`}
                </div>
              </div>
            </div>

            {/* Badge 2: CSS Unlocked Gate */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 ${
              (getCourseStats('html')?.completionPercentage || 0) >= 70
                ? 'bg-craft-flame/10 border-craft-flame/30'
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className={`p-2.5 rounded-xl ${
                (getCourseStats('html')?.completionPercentage || 0) >= 70
                  ? 'bg-craft-flame text-white'
                  : 'bg-slate-200 text-slate-400 dark:bg-slate-700'
              }`}>
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                  CSS3 Layout Unlocker
                </div>
                <div className="text-[11px] text-slate-500">
                  {(getCourseStats('html')?.completionPercentage || 0) >= 70 ? 'Stage Unlocked (70% HTML)' : `${getCourseStats('html')?.completionPercentage || 0}% / 70% Required`}
                </div>
              </div>
            </div>

            {/* Badge 3: CSS3 Architect */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 ${
              (getCourseStats('css')?.completionPercentage || 0) >= 100
                ? 'bg-craft-flame/10 border-craft-flame/30'
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className={`p-2.5 rounded-xl ${
                (getCourseStats('css')?.completionPercentage || 0) >= 100
                  ? 'bg-craft-flame text-white'
                  : 'bg-slate-200 text-slate-400 dark:bg-slate-700'
              }`}>
                <Trophy className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                  CSS3 Layout Architect
                </div>
                <div className="text-[11px] text-slate-500">
                  {(getCourseStats('css')?.completionPercentage || 0) >= 100 ? 'Earned & Verified' : `${getCourseStats('css')?.completionPercentage || 0}% / 100% Required`}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};
