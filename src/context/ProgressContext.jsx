import React, { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { loadUserLearningState, saveUserLearningState, clearUserLearningProgress } from '../lib/storage';
import { 
  isCssUnlocked as checkCssUnlocked, 
  isJsUnlocked as checkJsUnlocked,
  isReactUnlocked as checkReactUnlocked,
  isNodeUnlocked as checkNodeUnlocked,
  isCourseUnlocked as checkCourseUnlocked,
  getCourseUnlockInfo,
  calculateCourseProgress 
} from '../lib/progress';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from './AuthContext';

export const ProgressContext = createContext(undefined);

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth();
  const [state, setState] = useState(() => loadUserLearningState());
  const [syncStatus, setSyncStatus] = useState('local'); // 'local' | 'syncing' | 'synced' | 'error'
  const isInitialSyncDone = useRef(false);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    saveUserLearningState(state);
  }, [state]);

  // Sync with Supabase on login
  useEffect(() => {
    if (!isSupabaseConfigured || !user) {
      setSyncStatus('local');
      isInitialSyncDone.current = false;
      return;
    }

    const loadRemoteProgress = async () => {
      setSyncStatus('syncing');
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.warn('Error fetching Supabase progress:', error.message);
          setSyncStatus('error');
          return;
        }

        if (data) {
          // Merge local and remote: union of completed lessons and exercises
          setState((prev) => {
            const mergedLessons = Array.from(
              new Set([...prev.completedLessons, ...(data.completed_lessons || [])])
            );
            const mergedExercises = Array.from(
              new Set([...prev.completedExercises, ...(data.completed_exercises || [])])
            );
            const mergedQuizzes = {
              ...(data.quiz_results || {}),
              ...prev.quizResults,
            };

            const merged = {
              ...prev,
              completedLessons: mergedLessons,
              completedExercises: mergedExercises,
              quizResults: mergedQuizzes,
              lastVisitedLesson: data.last_accessed_lesson
                ? {
                    courseId: data.last_accessed_course || 'html',
                    moduleId: data.last_accessed_module || 'html-module-1',
                    lessonId: data.last_accessed_lesson,
                    timestamp: Date.now(),
                  }
                : prev.lastVisitedLesson,
            };
            return merged;
          });
        }
        setSyncStatus('synced');
        isInitialSyncDone.current = true;
      } catch (err) {
        console.error('Failed to sync progress with Supabase:', err);
        setSyncStatus('error');
      }
    };

    loadRemoteProgress();
  }, [user]);

  // Push state updates to Supabase (debounced)
  useEffect(() => {
    if (!isSupabaseConfigured || !user || !isInitialSyncDone.current) return;

    const timeout = setTimeout(async () => {
      setSyncStatus('syncing');
      try {
        const { error } = await supabase.from('user_progress').upsert({
          user_id: user.id,
          completed_lessons: state.completedLessons,
          completed_exercises: state.completedExercises,
          quiz_results: state.quizResults,
          last_accessed_course: state.lastVisitedLesson?.courseId || 'html',
          last_accessed_module: state.lastVisitedLesson?.moduleId || null,
          last_accessed_lesson: state.lastVisitedLesson?.lessonId || null,
          css_unlocked: checkCssUnlocked(state.completedLessons),
          updated_at: new Date().toISOString(),
        });

        if (error) {
          console.warn('Failed to push progress to Supabase:', error.message);
          setSyncStatus('error');
        } else {
          setSyncStatus('synced');
        }
      } catch (err) {
        console.error('Error saving progress to Supabase:', err);
        setSyncStatus('error');
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [state, user]);

  const isCssUnlocked = checkCssUnlocked(state.completedLessons);
  const isJsUnlocked = checkJsUnlocked(state.completedLessons);
  const isReactUnlocked = checkReactUnlocked(state.completedLessons);
  const isNodeUnlocked = checkNodeUnlocked(state.completedLessons);

  const isCourseUnlocked = useCallback(
    (courseId) => checkCourseUnlocked(courseId, state.completedLessons),
    [state.completedLessons]
  );

  const htmlStats = calculateCourseProgress('html', state);
  const cssStats = calculateCourseProgress('css', state);
  const jsStats = calculateCourseProgress('javascript', state);
  const reactStats = calculateCourseProgress('react', state);
  const nodeStats = calculateCourseProgress('nodejs', state);

  const getCourseStats = useCallback(
    (courseId) => calculateCourseProgress(courseId, state),
    [state]
  );

  const markLessonComplete = useCallback((lessonId) => {
    setState((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newCompleted = [...prev.completedLessons, lessonId];
      
      const newCssUnlocked = checkCssUnlocked(newCompleted);
      const wasCssUnlockedBefore = checkCssUnlocked(prev.completedLessons);

      const newJsUnlocked = checkJsUnlocked(newCompleted);
      const wasJsUnlockedBefore = checkJsUnlocked(prev.completedLessons);

      const newReactUnlocked = checkReactUnlocked(newCompleted);
      const wasReactUnlockedBefore = checkReactUnlocked(prev.completedLessons);

      const newNodeUnlocked = checkNodeUnlocked(newCompleted);
      const wasNodeUnlockedBefore = checkNodeUnlocked(prev.completedLessons);

      const unlockActivities = [];
      if (newCssUnlocked && !wasCssUnlockedBefore) {
        unlockActivities.push({
          id: `act-css-${Date.now()}`,
          type: 'course_unlocked',
          title: 'Unlocked CSS3 & Modern Layout Course!',
          timestamp: Date.now(),
        });
      }
      if (newJsUnlocked && !wasJsUnlockedBefore) {
        unlockActivities.push({
          id: `act-js-${Date.now()}`,
          type: 'course_unlocked',
          title: 'Unlocked JavaScript (ES6+) Mastery Course!',
          timestamp: Date.now(),
        });
      }
      if (newReactUnlocked && !wasReactUnlockedBefore) {
        unlockActivities.push({
          id: `act-react-${Date.now()}`,
          type: 'course_unlocked',
          title: 'Unlocked React.js Components Course!',
          timestamp: Date.now(),
        });
      }
      if (newNodeUnlocked && !wasNodeUnlockedBefore) {
        unlockActivities.push({
          id: `act-node-${Date.now()}`,
          type: 'course_unlocked',
          title: 'Unlocked Node.js Backend Architecture Course!',
          timestamp: Date.now(),
        });
      }

      const newActivities = [
        {
          id: `act-${Date.now()}`,
          type: 'lesson_completed',
          title: `Completed lesson (${lessonId})`,
          timestamp: Date.now(),
        },
        ...unlockActivities,
        ...prev.recentActivities,
      ].slice(0, 20);

      return {
        ...prev,
        completedLessons: newCompleted,
        recentActivities: newActivities,
      };
    });
  }, []);

  const markLessonIncomplete = useCallback((lessonId) => {
    setState((prev) => ({
      ...prev,
      completedLessons: prev.completedLessons.filter((id) => id !== lessonId),
    }));
  }, []);

  const isLessonCompleted = useCallback(
    (lessonId) => state.completedLessons.includes(lessonId),
    [state.completedLessons]
  );

  const recordExerciseCompletion = useCallback((exerciseId) => {
    setState((prev) => {
      if (prev.completedExercises.includes(exerciseId)) return prev;
      return {
        ...prev,
        completedExercises: [...prev.completedExercises, exerciseId],
        recentActivities: [
          {
            id: `act-ex-${Date.now()}`,
            type: 'exercise_passed',
            title: `Passed practical exercise`,
            timestamp: Date.now(),
          },
          ...prev.recentActivities,
        ].slice(0, 20),
      };
    });
  }, []);

  const recordQuizResult = useCallback((quizId, score, total, passed) => {
    setState((prev) => {
      const percentage = Math.round((score / total) * 100);
      return {
        ...prev,
        quizResults: {
          ...prev.quizResults,
          [quizId]: {
            score,
            total,
            percentage,
            passed,
            completedAt: Date.now(),
          },
        },
        recentActivities: [
          {
            id: `act-quiz-${Date.now()}`,
            type: 'quiz_passed',
            title: `Completed assessment quiz (${score}/${total})`,
            timestamp: Date.now(),
          },
          ...prev.recentActivities,
        ].slice(0, 20),
      };
    });
  }, []);

  const setLastVisitedLesson = useCallback((courseId, moduleId, lessonId) => {
    setState((prev) => ({
      ...prev,
      lastVisitedLesson: {
        courseId,
        moduleId,
        lessonId,
        timestamp: Date.now(),
      },
    }));
  }, []);

  const updateEditorDrafts = useCallback((html, css, applyCss) => {
    setState((prev) => ({
      ...prev,
      editorDrafts: {
        html,
        css,
        applyCss,
      },
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    clearUserLearningProgress();
    setState(loadUserLearningState());
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        state,
        syncStatus,
        isCourseUnlocked,
        isCssUnlocked,
        isJsUnlocked,
        isReactUnlocked,
        isNodeUnlocked,
        htmlStats,
        cssStats,
        jsStats,
        reactStats,
        nodeStats,
        getCourseStats,
        markLessonComplete,
        markLessonIncomplete,
        isLessonCompleted,
        recordExerciseCompletion,
        recordQuizResult,
        setLastVisitedLesson,
        updateEditorDrafts,
        resetAllProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
