import { htmlModules } from './modules';
import { htmlLessons } from './lessonsData';

export { htmlModules, htmlLessons };

export function getHtmlLesson(lessonId) {
  return htmlLessons[lessonId];
}

export function getHtmlModule(moduleId) {
  return htmlModules.find((m) => m.id === moduleId);
}

export function getAllHtmlLessons() {
  return Object.values(htmlLessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
}

export function getHtmlFundamentalsLessonIds() {
  // Modules 1, 2, 3, 4
  const fundamentalsModules = htmlModules.filter((m) => m.isFundamentals);
  return fundamentalsModules.flatMap((m) => m.lessonIds);
}
