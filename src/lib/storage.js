import { STORAGE_KEY_PROGRESS, INITIAL_HTML_PLAYGROUND, INITIAL_CSS_PLAYGROUND } from './constants';

const defaultState = {
  completedLessons: [],
  completedExercises: [],
  quizResults: {},
  editorDrafts: {
    html: INITIAL_HTML_PLAYGROUND,
    css: INITIAL_CSS_PLAYGROUND,
    applyCss: true
  },
  recentActivities: []
};

export function loadUserLearningState() {
  if (typeof window === 'undefined' || !window.localStorage) {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) {
      return defaultState;
    }
    const parsed = JSON.parse(raw);
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      completedExercises: Array.isArray(parsed.completedExercises) ? parsed.completedExercises : [],
      quizResults: typeof parsed.quizResults === 'object' && parsed.quizResults !== null ? parsed.quizResults : {},
      lastVisitedLesson: parsed.lastVisitedLesson || undefined,
      editorDrafts: {
        html: typeof parsed.editorDrafts?.html === 'string' ? parsed.editorDrafts.html : INITIAL_HTML_PLAYGROUND,
        css: typeof parsed.editorDrafts?.css === 'string' ? parsed.editorDrafts.css : INITIAL_CSS_PLAYGROUND,
        applyCss: typeof parsed.editorDrafts?.applyCss === 'boolean' ? parsed.editorDrafts.applyCss : true,
      },
      recentActivities: Array.isArray(parsed.recentActivities) ? parsed.recentActivities.slice(0, 20) : []
    };
  } catch (e) {
    console.error('Failed to load learning state from LocalStorage:', e);
    return defaultState;
  }
}

export function saveUserLearningState(state) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to persist learning state to LocalStorage:', e);
  }
}

export function clearUserLearningProgress() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY_PROGRESS);
  } catch (e) {
    console.error('Failed to clear learning state:', e);
  }
}
