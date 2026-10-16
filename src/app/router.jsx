import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { CoursePage } from '../pages/CoursePage';
import { LessonPage } from '../pages/LessonPage';
import { PlaygroundPage } from '../pages/PlaygroundPage';
import { PracticePage } from '../pages/PracticePage';
import { ProgressPage } from '../pages/ProgressPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/learn" element={<Navigate to="/learn/html" replace />} />
      
      {/* HTML Course Routes */}
      <Route path="/learn/:courseId" element={<CoursePage />} />
      <Route path="/learn/:courseId/:moduleId/:lessonId" element={<LessonPage />} />

      {/* Primary Tool Pages */}
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/progress" element={<ProgressPage />} />

      {/* 404 Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
