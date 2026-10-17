import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { CourseSidebar } from '../components/layout/CourseSidebar';
import { LessonContent } from '../components/lesson/LessonContent';
import { TableOfContents } from '../components/lesson/TableOfContents';
import { LessonNavigation } from '../components/lesson/LessonNavigation';
import { IncompleteLessonModal } from '../components/lesson/IncompleteLessonModal';
import { useProgress } from '../hooks/useProgress';
import { getCourse, isValidCourseId } from '../lib/courses';
import { getAdjacentLessons, isCourseUnlocked, getCourseUnlockInfo } from '../lib/progress';
import { 
  Menu, 
  X, 
  Lock, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export const LessonPage = () => {
  const { courseId = 'html', moduleId, lessonId } = useParams();

  const navigate = useNavigate();
  const validCourseId = isValidCourseId(courseId) ? courseId : 'html';
  const course = getCourse(validCourseId);
  const { 
    state,
    isLessonCompleted, 
    markLessonComplete, 
    markLessonIncomplete, 
    setLastVisitedLesson,
    isCourseUnlocked: checkUnlock
  } = useProgress();

  const modules = course.modules;
  const lessonsMap = course.lessons;
  const lesson = lessonId ? lessonsMap[lessonId] : undefined;
  
  // Find current module safely (by moduleId param or by matching lessonId)
  const currentModule = (moduleId ? modules.find((m) => m.id === moduleId) : null) || 
    modules.find((m) => lesson && m.lessonIds.includes(lesson.id)) || 
    modules[0];

  // Mobile sidebar drawer state
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Incomplete lesson confirmation popup state
  const [incompleteModalOpen, setIncompleteModalOpen] = useState(false);
  const [targetNextLesson, setTargetNextLesson] = useState(null);

  useEffect(() => {
    if (lesson && currentModule) {
      setLastVisitedLesson(validCourseId, currentModule.id, lesson.id);
    }
  }, [lesson, currentModule, validCourseId, setLastVisitedLesson]);

  // If lesson doesn't exist, show helpful message
  if (!lesson) {
    return (
      <PageLayout>
        <div className="text-center py-20 space-y-4 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            Lesson Not Found
          </h2>
          <p className="text-sm text-slate-500">
            The requested lesson could not be found in the {course.title} curriculum.
          </p>
          <Link
            to={`/learn/${validCourseId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {course.shortTitle} Curriculum</span>
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Check if course is coming soon
  if (course.isComingSoon) {
    return (
      <PageLayout>
        <div className="max-w-xl mx-auto py-16 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mx-auto flex items-center justify-center shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
              Track In Development
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pt-2">
              {course.title} is Coming Soon
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
              This track is currently disabled so students can focus on enhancing their skills in HTML5 Fundamentals and CSS3 Modern Layouts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/learn/html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Practice HTML5</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/learn/css"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Explore CSS3 Layouts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Check if course is locked
  const isLocked = checkUnlock ? !checkUnlock(validCourseId) : !isCourseUnlocked(validCourseId, state?.completedLessons || []);
  const unlockInfo = getCourseUnlockInfo(validCourseId, state?.completedLessons || []);

  if (isLocked && unlockInfo.prerequisiteCourse) {
    return (
      <PageLayout>
        <div className="max-w-xl mx-auto py-16 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-200 dark:bg-slate-800 text-craft-flame mx-auto flex items-center justify-center shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {course.title} is Locked
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {unlockInfo.unlockRequirementText}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
            <div className="flex justify-between font-mono text-slate-700 dark:text-slate-300">
              <span>{unlockInfo.prerequisiteCourse.title} Progress:</span>
              <span>{unlockInfo.completedPrereqCount} / {unlockInfo.totalPrereqLessons} ({unlockInfo.currentPercentage}% / 70% required)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-craft-flame transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((unlockInfo.currentPercentage / 70) * 100))}%` }}
              />
            </div>
          </div>

          <div>
            <Link
              to={`/learn/${unlockInfo.prerequisiteCourse.id}`}
              className="craft-btn-primary px-6 py-2.5 text-sm"
            >
              <span>Continue {unlockInfo.prerequisiteCourse.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const isCompleted = isLessonCompleted(lesson.id);
  const { previousLesson, nextLesson } = getAdjacentLessons(validCourseId, lesson.id);

  const handleToggleComplete = () => {
    if (isCompleted) {
      markLessonIncomplete(lesson.id);
    } else {
      markLessonComplete(lesson.id);
    }
  };

  // Next lesson interception for incomplete lessons
  const handleNextClick = (targetLesson) => {
    setTargetNextLesson(targetLesson);
    setIncompleteModalOpen(true);
  };

  const handleConfirmWithoutMarking = () => {
    if (targetNextLesson) {
      const target = targetNextLesson;
      setIncompleteModalOpen(false);
      setTargetNextLesson(null);
      navigate(`/learn/${validCourseId}/${target.moduleId}/${target.id}`);
    }
  };

  const handleMarkCompleteAndProceed = () => {
    markLessonComplete(lesson.id);
    if (targetNextLesson) {
      const target = targetNextLesson;
      setIncompleteModalOpen(false);
      setTargetNextLesson(null);
      navigate(`/learn/${validCourseId}/${target.moduleId}/${target.id}`);
    }
  };

  const handleSidebarSelectLesson = (clickedLesson, e) => {
    if (clickedLesson && clickedLesson.id !== lesson.id && !isCompleted && clickedLesson.id === nextLesson?.id) {
      if (e) e.preventDefault();
      handleNextClick(clickedLesson);
      return;
    }
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      {/* Mobile top floating bar to toggle curriculum sidebar */}
      <div className="lg:hidden sticky top-16 z-30 flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs shadow-sm">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium"
        >
          <Menu className="w-4 h-4" />
          <span>Curriculum Modules</span>
        </button>
        <span className="font-mono text-slate-400">
          Lesson #{lesson.lessonNumber}
        </span>
      </div>

      {/* Main 3-column Layout */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto flex">
        
        {/* Left Sticky Course Sidebar (Desktop) */}
        <div className="hidden lg:block w-72 h-[calc(100vh-4rem)] sticky top-16 flex-shrink-0">
          <CourseSidebar
            courseId={validCourseId}
            modules={modules}
            lessonsMap={lessonsMap}
            currentLessonId={lesson.id}
            onSelectLesson={handleSidebarSelectLesson}
          />
        </div>

        {/* Mobile Sidebar Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <div className="relative w-80 max-w-[80vw] h-full bg-white dark:bg-slate-900 shadow-2xl z-10 flex flex-col">
              <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400">Course Index</span>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <CourseSidebar
                  courseId={validCourseId}
                  modules={modules}
                  lessonsMap={lessonsMap}
                  currentLessonId={lesson.id}
                  onSelectLesson={handleSidebarSelectLesson}
                />
              </div>
            </div>
          </div>
        )}

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 lg:px-12">
          <LessonContent lesson={lesson} module={currentModule} />
          
          <LessonNavigation
            previousLesson={previousLesson}
            nextLesson={nextLesson}
            courseId={validCourseId}
            isCompleted={isCompleted}
            onToggleComplete={handleToggleComplete}
            onNextClick={handleNextClick}
          />
        </main>

        {/* Right Sticky Table of Contents (Desktop wide) */}
        <div className="hidden xl:block w-64 h-[calc(100vh-4rem)] sticky top-16 p-6 overflow-y-auto flex-shrink-0 border-l border-slate-200 dark:border-slate-800">
          <TableOfContents
            lesson={lesson}
            isCompleted={isCompleted}
            onToggleComplete={handleToggleComplete}
          />
        </div>

      </div>

      {/* Confirmation Modal when navigating without marking complete */}
      <IncompleteLessonModal
        isOpen={incompleteModalOpen}
        onClose={() => {
          setIncompleteModalOpen(false);
          setTargetNextLesson(null);
        }}
        onConfirmWithoutMarking={handleConfirmWithoutMarking}
        onMarkCompleteAndProceed={handleMarkCompleteAndProceed}
        currentLessonTitle={lesson.title}
        nextLessonTitle={targetNextLesson?.title}
      />

    </div>
  );
};
