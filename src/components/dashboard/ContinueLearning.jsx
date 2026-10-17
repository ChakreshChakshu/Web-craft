import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock, BookOpen, ArrowRight } from 'lucide-react';

export const ContinueLearning = ({
  recommendedLesson,
  courseTitle,
  isInitialState
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#2E2D2A] via-[#252422] to-[#1C1B19] border border-[#403D39] text-[#FFFCF2] shadow-xl relative overflow-hidden">
      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EB5E28]/15 border border-[#EB5E28]/30 text-[#EB5E28] text-xs font-semibold">
          <PlayCircle className="w-3.5 h-3.5" />
          <span>{isInitialState ? 'Start Your Journey' : 'Continue Learning'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFCF2]">
          {recommendedLesson.title}
        </h2>

        <p className="text-xs sm:text-sm text-[#CCC5B9] leading-relaxed">
          {recommendedLesson.summary}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#CCC5B9]/80 pt-1 font-mono">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-[#EB5E28]" />
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
            className="craft-btn-primary text-xs sm:text-sm px-6 py-3"
          >
            <span>{isInitialState ? 'Begin First Lesson' : 'Resume Lesson'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Decorative background grid pattern */}
      <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-5 pointer-events-none text-[#FFFCF2]">
        <BookOpen className="w-80 h-80" />
      </div>
    </div>
  );
};
