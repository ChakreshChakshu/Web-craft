import { cssModules } from './modules';
import { cssLessons } from './lessonsData';

export { cssModules, cssLessons };

export function getCssLesson(lessonId) {
  return cssLessons[lessonId];
}

export function getCssModule(moduleId) {
  return cssModules.find((m) => m.id === moduleId);
}

export function getAllCssLessons() {
  return Object.values(cssLessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
}
