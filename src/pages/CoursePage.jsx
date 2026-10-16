import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { useProgress } from '../hooks/useProgress';
import { getCourse, isValidCourseId } from '../lib/courses';
import { isCourseUnlocked, getCourseUnlockInfo } from '../lib/progress';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Lock, 
  ArrowRight, 
  Clock,
  ShieldAlert,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Layers,
  Play
} from 'lucide-react';

export const CoursePage = () => {
  const { courseId = 'html' } = useParams();
  const validCourseId = isValidCourseId(courseId) ? courseId : 'html';
  const course = getCourse(validCourseId);
  const { state, isCourseUnlocked: checkUnlock, getCourseStats } = useProgress();

  const modules = course.modules;
  const lessonsMap = course.lessons;
  const stats = getCourseStats ? getCourseStats(validCourseId) : {
    totalLessons: Object.keys(lessonsMap).length,
    completedLessonsCount: 0,
    completionPercentage: 0,
    isUnlocked: checkUnlock ? checkUnlock(validCourseId) : isCourseUnlocked(validCourseId, state?.completedLessons || [])
  };

  const isLocked = checkUnlock ? !checkUnlock(validCourseId) : !isCourseUnlocked(validCourseId, state?.completedLessons || []);
  const unlockInfo = getCourseUnlockInfo(validCourseId, state?.completedLessons || []);

  // Active module tab: 'all' or specific module ID (default to 'all' or first module)
  const [selectedModuleId, setSelectedModuleId] = useState('all');

  // Reset selected module when courseId changes
  useEffect(() => {
    setSelectedModuleId('all');
  }, [validCourseId]);

  const colorStyles = {
    orange: {
      badgeBg: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400',
      bar: 'bg-orange-500',
      accentText: 'text-orange-600 dark:text-orange-400',
      activeTab: 'bg-orange-600 text-white',
      border: 'border-orange-200 dark:border-orange-800'
    },
    blue: {
      badgeBg: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
      bar: 'bg-blue-600',
      accentText: 'text-blue-600 dark:text-blue-400',
      activeTab: 'bg-blue-600 text-white',
      border: 'border-blue-200 dark:border-blue-800'
    },
    yellow: {
      badgeBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
      bar: 'bg-amber-500',
      accentText: 'text-amber-600 dark:text-amber-400',
      activeTab: 'bg-amber-600 text-white',
      border: 'border-amber-200 dark:border-amber-800'
    },
    cyan: {
      badgeBg: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400',
      bar: 'bg-cyan-500',
      accentText: 'text-cyan-600 dark:text-cyan-400',
      activeTab: 'bg-cyan-600 text-white',
      border: 'border-cyan-200 dark:border-cyan-800'
    },
    emerald: {
      badgeBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
      bar: 'bg-emerald-500',
      accentText: 'text-emerald-600 dark:text-emerald-400',
      activeTab: 'bg-emerald-600 text-white',
      border: 'border-emerald-200 dark:border-emerald-800'
    }
  };

  const themeStyle = colorStyles[course.color] || colorStyles.blue;

  // Filter modules based on selectedModuleId
  const displayedModules = selectedModuleId === 'all' 
    ? modules 
    : modules.filter((m) => m.id === selectedModuleId);

  return (
    <PageLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        
        {/* Course Banner */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${themeStyle.badgeBg}`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {course.track}
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {course.title}
                </h1>
              </div>
            </div>

            {isLocked ? (
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                <Lock className="w-4 h-4" />
                Locked Stage
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                Active Curriculum
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            {course.description}
          </p>

          {/* Progress bar */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-600 dark:text-slate-400">Course Completion</span>
              <span className="text-slate-900 dark:text-white font-mono">{stats.completionPercentage}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${themeStyle.bar}`}
                style={{ width: `${stats.completionPercentage}%` }}
              />
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              {stats.completedLessonsCount} of {stats.totalLessons} lessons completed
            </div>
          </div>
        </div>

        {/* Dynamic Prerequisite Lock Notice if course is locked */}
        {isLocked && unlockInfo && unlockInfo.prerequisiteCourse && (
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-100 font-bold text-base">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>Unlock Requirement: Complete at least 70% of {unlockInfo.prerequisiteCourse.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              {unlockInfo.unlockRequirementText} You must reach 70% progress in {unlockInfo.prerequisiteCourse.title} before {course.title} lessons become accessible.
            </p>
            <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-amber-200 dark:border-amber-900/60 text-xs space-y-2">
              <div className="flex justify-between font-mono text-amber-900 dark:text-amber-200">
                <span>{unlockInfo.prerequisiteCourse.title} Progress:</span>
                <span>{unlockInfo.completedPrereqCount} / {unlockInfo.totalPrereqLessons} lessons ({unlockInfo.currentPercentage}% / 70% needed)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-amber-100 dark:bg-amber-950 overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((unlockInfo.currentPercentage / 70) * 100))}%` }}
                />
              </div>
              <div className="text-[11px] text-amber-700 dark:text-amber-400 font-mono">
                {unlockInfo.remainingCount > 0 ? `${unlockInfo.remainingCount} more lessons needed to unlock ${course.shortTitle}` : 'Ready to unlock!'}
              </div>
            </div>
            <div className="pt-1">
              <Link
                to={`/learn/${unlockInfo.prerequisiteCourse.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Jump to {unlockInfo.prerequisiteCourse.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Modules Breakdown with Interactive Selection */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {course.shortTitle} Curriculum Topics
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select a module below to view its specific topics and lessons.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400">
              {modules.length} Modules Total
            </div>
          </div>

          {/* Interactive Module Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedModuleId('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedModuleId === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              All Modules ({modules.length})
            </button>

            {modules.map((mod) => {
              const completedCount = mod.lessonIds.filter((id) =>
                state?.completedLessons?.includes(id)
              ).length;
              const isSelected = selectedModuleId === mod.id;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                    isSelected
                      ? `${themeStyle.activeTab} shadow-sm`
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>Mod {mod.moduleNumber}: {mod.title}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {completedCount}/{mod.lessonIds.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Displayed Modules Content */}
          <div className="space-y-4">
            {displayedModules.map((mod) => {
              const completedCount = mod.lessonIds.filter((id) =>
                state?.completedLessons?.includes(id)
              ).length;
              const isModuleComplete = completedCount === mod.lessonIds.length && mod.lessonIds.length > 0;
              const firstLessonId = mod.lessonIds[0];

              return (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  {/* Module Header */}
                  <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-850">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold font-mono ${themeStyle.accentText}`}>
                          MODULE {mod.moduleNumber}
                        </span>
                        {mod.isFundamentals && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                            Required Fundamental
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                        {mod.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                        <span>{completedCount} / {mod.lessonIds.length} Finished</span>
                        {isModuleComplete ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                        )}
                      </div>

                      {!isLocked && firstLessonId && (
                        <Link
                          to={`/learn/${validCourseId}/${mod.id}/${firstLessonId}`}
                          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{completedCount > 0 ? 'Resume' : 'Start'}</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Lessons list inside module */}
                  <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {mod.lessonIds.map((lessonId) => {
                      const lesson = lessonsMap[lessonId];
                      if (!lesson) return null;
                      const isCompleted = state?.completedLessons?.includes(lesson.id);

                      return (
                        <Link
                          key={lesson.id}
                          to={isLocked ? '#' : `/learn/${validCourseId}/${mod.id}/${lesson.id}`}
                          onClick={(e) => {
                            if (isLocked) {
                              e.preventDefault();
                              window.scrollTo({ top: 100, behavior: 'smooth' });
                            }
                          }}
                          className={`flex items-center justify-between p-4 transition-colors text-xs sm:text-sm group ${
                            isLocked 
                              ? 'cursor-not-allowed opacity-60 bg-slate-50/20' 
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            ) : isLocked ? (
                              <Lock className="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-400 flex-shrink-0" />
                            )}
                            <div className="truncate">
                              <span className="font-mono text-slate-400 mr-2">
                                #{lesson.lessonNumber}
                              </span>
                              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {lesson.title}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 flex-shrink-0 text-xs text-slate-400 font-mono">
                            <span className="hidden sm:flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {lesson.estimatedMinutes}m
                            </span>
                            {!isLocked && (
                              <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            )}
                          </div>
                        </Link>
                      );
                    })}
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
