import { nodeModules } from './modules';
import { nodeLessons } from './lessonsData';

export { nodeModules, nodeLessons };

export function getNodeLesson(lessonId) {
  return nodeLessons[lessonId];
}

export function getNodeModule(moduleId) {
  return nodeModules.find((m) => m.id === moduleId);
}

export function getAllNodeLessons() {
  return Object.values(nodeLessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
}
