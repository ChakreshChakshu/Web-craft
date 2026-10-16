import { jsModules } from './modules';
import { jsLessons } from './lessonsData';

export { jsModules, jsLessons };

export function getJsLesson(lessonId) {
  return jsLessons[lessonId];
}

export function getJsModule(moduleId) {
  return jsModules.find((m) => m.id === moduleId);
}

export function getAllJsLessons() {
  return Object.values(jsLessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
}
