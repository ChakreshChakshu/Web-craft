import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, BookOpen, ArrowRight } from 'lucide-react';

export const ContinueLearning = ({
  recommendedLesson,
  courseTitle,
  isInitialState
}) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-lg relative overflow-hidden">
      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
          <PlayCircle className="w-3.5 h-3.5" />
          <span>{isInitialState ? 'Start Your Journey' : 'Continue Learning'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {recommendedLesson.title}
        </h2>

        <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
          {recommendedLesson.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 pt-1 font-mono">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {courseTitle}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {recommendedLesson.estimatedMinutes} min estimated
          </span>
          <span>•</span>
          <span>Lesson #{recommendedLesson.lessonNumber}</span>
        </div>

        <div className="pt-2">
          <Link
            to={`/learn/${recommendedLesson.courseId}/${recommendedLesson.moduleId}/${recommendedLesson.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            <span>{isInitialState ? 'Begin First Lesson' : 'Resume Lesson'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Decorative background grid pattern */}
      <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 pointer-events-none">
        <BookOpen className="w-80 h-80" />
      </div>
    </div>
  );
};
