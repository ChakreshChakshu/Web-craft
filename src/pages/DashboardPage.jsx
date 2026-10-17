import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { useProgress } from '../hooks/useProgress';
import { CourseCard } from '../components/dashboard/CourseCard';
import { ContinueLearning } from '../components/dashboard/ContinueLearning';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { getRecommendedLesson, getCourseUnlockInfo } from '../lib/progress';
import { COURSE_LIST, ACTIVE_COURSE_LIST } from '../lib/courses';
import { htmlModules } from '../content/html';
import { cssModules } from '../content/css';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Terminal, 
  Lock, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';

export const DashboardPage = () => {
  const { state, isCourseUnlocked, getCourseStats, isCssUnlocked } = useProgress();
  const recommended = getRecommendedLesson(state);
  const isInitial = (state?.completedLessons || []).length === 0;

  // Find the next locked active course in the sequence to show an informative banner (e.g. CSS if locked)
  const nextLockedCourse = ACTIVE_COURSE_LIST.find((c) => !isCourseUnlocked(c.id));
  const unlockInfo = nextLockedCourse ? getCourseUnlockInfo(nextLockedCourse.id, state?.completedLessons || []) : null;

  return (
    <PageLayout>
      <div className="space-y-10">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>HTML5 &amp; CSS3 Interactive Mastery Path</span>
            </div>
            <h1 className="craft-h1 text-3xl sm:text-4xl tracking-tight">
              WebCraft Learning Dashboard
            </h1>
            <p className="craft-body text-sm mt-1 max-w-2xl leading-relaxed">
              Enhance your web development fundamentals: master semantic HTML5 markup, accessibility, forms, and modern CSS3 layout systems (Flexbox, Grid, and responsive UI design).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/playground"
              className="craft-btn-secondary text-xs sm:text-sm px-4 py-2.5"
            >
              <Terminal className="w-4 h-4 text-blue-600" />
              <span>Open Code Playground</span>
            </Link>
          </div>
        </div>

        {/* Hero: Continue Learning Banner */}
        <ContinueLearning
          recommendedLesson={recommended.lesson}
          courseTitle={recommended.courseTitle}
          isInitialState={isInitial}
        />

        {/* Sequential Course Unlock Alert Banner for CSS */}
        {nextLockedCourse && unlockInfo && unlockInfo.prerequisiteCourse && (
          <div className="p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-800 dark:text-slate-200">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-craft-flame">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm block text-slate-900 dark:text-white">
                  {nextLockedCourse.title} is Locked
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Requirement: Complete at least 70% of {unlockInfo.prerequisiteCourse.title} (currently {unlockInfo.currentPercentage}% — {unlockInfo.completedPrereqCount}/{unlockInfo.totalPrereqLessons} lessons completed).
                </span>
              </div>
            </div>

            <Link
              to={`/learn/${unlockInfo.prerequisiteCourse.id}`}
              className="inline-flex items-center gap-1 font-semibold text-blue-700 dark:text-blue-400 hover:underline flex-shrink-0"
            >
              <span>Continue {unlockInfo.prerequisiteCourse.shortTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Primary Courses Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Web Design &amp; Development Tracks
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Core track: HTML5 Fundamentals ➔ CSS3 &amp; Modern Layout (70% pass threshold to unlock CSS). JavaScript, React, &amp; Node.js tracks coming soon.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              2 Active Tracks • 3 Coming Soon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_LIST.map((course, idx) => {
              const stats = getCourseStats ? getCourseStats(course.id) : {
                totalLessons: Object.keys(course.lessons).length,
                completedLessonsCount: 0,
                completionPercentage: 0,
                isUnlocked: isCourseUnlocked(course.id),
                isComingSoon: course.isComingSoon
              };

              return (
                <CourseCard
                  key={course.id}
                  courseId={course.id}
                  title={course.title}
                  subtitle={course.isComingSoon ? `Upcoming • ${course.badge}` : `Stage ${idx + 1} • ${course.badge}`}
                  stats={{ ...stats, isComingSoon: course.isComingSoon }}
                  description={course.description}
                />
              );
            })}
          </div>
        </div>

        {/* Quick Stats & Activity Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Module summary cards (2 cols) */}
          <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            
            {/* HTML Modules Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
                  <span>HTML5 Foundation Modules</span>
                </h3>
                <Link
                  to="/learn/html"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all HTML modules →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {htmlModules.slice(0, 4).map((mod) => {
                  const completedCount = mod.lessonIds.filter((id) =>
                    state?.completedLessons?.includes(id)
                  ).length;
                  const isComplete = completedCount === mod.lessonIds.length && mod.lessonIds.length > 0;

                  return (
                    <Link
                      key={mod.id}
                      to={`/learn/html/${mod.id}/${mod.lessonIds[0]}`}
                      className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-850 transition-colors block"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Mod {mod.moduleNumber}: {mod.title}
                        </span>
                        {isComplete && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-craft-flame" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                        {mod.description}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{completedCount} / {mod.lessonIds.length} lessons</span>
                        <span>{mod.lessonIds.length > 0 ? Math.round((completedCount / mod.lessonIds.length) * 100) : 0}%</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CSS Modules Preview */}
            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                  <span>CSS3 &amp; Modern Layout Modules</span>
                </h3>
                <Link
                  to="/learn/css"
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View all CSS modules →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cssModules.slice(0, 4).map((mod) => {
                  const completedCount = mod.lessonIds.filter((id) =>
                    state?.completedLessons?.includes(id)
                  ).length;
                  const isComplete = completedCount === mod.lessonIds.length && mod.lessonIds.length > 0;

                  return (
                    <Link
                      key={mod.id}
                      to={isCssUnlocked ? `/learn/css/${mod.id}/${mod.lessonIds[0]}` : '/learn/css'}
                      className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-850 transition-colors block"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Mod {mod.moduleNumber}: {mod.title}
                        </span>
                        {isComplete ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-craft-flame" />
                        ) : !isCssUnlocked ? (
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        ) : null}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mb-2">
                        {mod.description}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{completedCount} / {mod.lessonIds.length} lessons</span>
                        <span>{mod.lessonIds.length > 0 ? Math.round((completedCount / mod.lessonIds.length) * 100) : 0}%</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Activity Feed (1 col) */}
          <div className="lg:col-span-1">
            <RecentActivity activities={state?.recentActivities || []} />
          </div>

        </div>

      </div>
    </PageLayout>
  );
};
