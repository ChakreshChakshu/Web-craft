import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Lock, 
  BookOpen, 
  ArrowRight
} from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { getCourse } from '../../lib/courses';
import { isCourseUnlocked, getCourseUnlockInfo } from '../../lib/progress';

export const CourseSidebar = ({
  courseId,
  modules,
  lessonsMap,
  currentLessonId,
  onSelectLesson
}) => {
  const { state, isLessonCompleted, isCourseUnlocked: checkUnlock } = useProgress();
  const course = getCourse(courseId);
  const isLocked = checkUnlock ? !checkUnlock(courseId) : !isCourseUnlocked(courseId, state?.completedLessons || []);
  const unlockInfo = getCourseUnlockInfo(courseId, state?.completedLessons || []);

  const [searchTerm, setSearchTerm] = useState('');
  
  // Expanded modules state: by default expand module containing current lesson or module 1
  const [expandedModules, setExpandedModules] = useState(() => {
    const init = {};
    modules.forEach((m) => {
      if (currentLessonId && m.lessonIds.includes(currentLessonId)) {
        init[m.id] = true;
      } else {
        init[m.id] = m.moduleNumber <= 2; // expand first 2 modules initially
      }
    });
    return init;
  });

  const toggleModule = (modId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  return (
    <aside className="w-full h-full flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-sm">
      {/* Course Header Switcher / Title */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <h2 className="font-semibold text-slate-900 dark:text-white truncate">
            {course.title}
          </h2>
        </div>
        <div className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono flex-shrink-0">
          {Object.keys(lessonsMap).length} Lessons
        </div>
      </div>

      {/* Lock Notice if Course is locked */}
      {isLocked && unlockInfo.prerequisiteCourse && (
        <div className="m-3 p-3 rounded-xl bg-[#403D39]/30 border border-[#403D39] text-[#CCC5B9] text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#FFFCF2]">
            <Lock className="w-3.5 h-3.5 text-[#EB5E28] flex-shrink-0" />
            <span>Course Locked</span>
          </div>
          <p className="leading-relaxed text-[11px]">
            {unlockInfo.unlockRequirementText}
          </p>
          <div className="pt-1">
            <Link
              to={`/learn/${unlockInfo.prerequisiteCourse.id}`}
              className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline text-[11px]"
            >
              <span>Go to {unlockInfo.prerequisiteCourse.shortTitle}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}

      {/* Lesson Search Filter */}
      <div className="p-3 border-b border-slate-100 dark:border-slate-800/60">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search ${course.shortTitle} lessons...`}
            aria-label="Search lessons"
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Module and Lesson Accordion list */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {modules.map((mod) => {
          const modLessons = mod.lessonIds
            .map((id) => lessonsMap[id])
            .filter(Boolean)
            .filter((l) =>
              searchTerm.trim()
                ? l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  l.lessonNumber.toString() === searchTerm.trim()
                : true
            );

          if (searchTerm.trim() && modLessons.length === 0) {
            return null;
          }

          const isExpanded = searchTerm.trim() ? true : !!expandedModules[mod.id];
          const completedCount = mod.lessonIds.filter((id) => isLessonCompleted(id)).length;
          const isModuleComplete = completedCount === mod.lessonIds.length && mod.lessonIds.length > 0;

          return (
            <div key={mod.id} className="rounded-lg border border-transparent hover:border-slate-100 dark:hover:border-slate-800/40">
              {/* Module Accordion Header */}
              <button
                type="button"
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-2 rounded-md text-left text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-1.5 min-w-0 pr-1">
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  )}
                  <span className="truncate">
                    Mod {mod.moduleNumber}: {mod.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-mono text-slate-400">
                  <span>
                    {completedCount}/{mod.lessonIds.length}
                  </span>
                  {isModuleComplete && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-craft-flame" />
                  )}
                </div>
              </button>

              {/* Module Lessons */}
              {isExpanded && (
                <div className="mt-1 ml-3 pl-2 border-l border-slate-200 dark:border-slate-800 space-y-0.5">
                  {modLessons.map((lesson) => {
                    const active = lesson.id === currentLessonId;
                    const completed = isLessonCompleted(lesson.id);

                    return (
                      <Link
                        key={lesson.id}
                        to={isLocked ? '#' : `/learn/${courseId}/${mod.id}/${lesson.id}`}
                        onClick={(e) => {
                          if (isLocked) {
                            e.preventDefault();
                            return;
                          }
                          if (onSelectLesson) {
                            onSelectLesson(lesson, e);
                          }
                        }}
                        className={`group flex items-center justify-between py-1.5 px-2 rounded-md text-xs transition-colors ${
                          isLocked 
                            ? 'opacity-50 cursor-not-allowed text-slate-400' 
                            : active
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold border-l-2 border-blue-600 -ml-[9px] pl-[7px]'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {completed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-craft-flame flex-shrink-0" />
                          ) : isLocked ? (
                            <Lock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 flex-shrink-0 group-hover:text-slate-400" />
                          )}
                          <span className="truncate">
                            <span className="text-slate-400 font-mono mr-1">
                              {lesson.lessonNumber}.
                            </span>
                            {lesson.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 flex-shrink-0 ml-1">
                          {lesson.estimatedMinutes}m
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
