import { reactModules } from './modules';
import { reactLessons } from './lessonsData';

export { reactModules, reactLessons };

export function getReactLesson(lessonId) {
  return reactLessons[lessonId];
}

export function getReactModule(moduleId) {
  return reactModules.find((m) => m.id === moduleId);
}

export function getAllReactLessons() {
  return Object.values(reactLessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
}
