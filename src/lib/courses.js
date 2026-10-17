import { htmlModules, htmlLessons } from '../content/html';
import { cssModules, cssLessons } from '../content/css';
import { jsModules, jsLessons } from '../content/javascript';
import { reactModules, reactLessons } from '../content/react';
import { nodeModules, nodeLessons } from '../content/nodejs';

export const COURSES = {
  html: {
    id: 'html',
    title: 'HTML5 Fundamentals',
    shortTitle: 'HTML',
    track: 'Foundational Track',
    badge: 'Structure',
    order: 1,
    prerequisiteId: null,
    unlockPercentageRequired: 0,
    status: 'active',
    isComingSoon: false,
    description: 'Learn modern semantic HTML5, accessible document architecture, multimedia elements, and forms from scratch.',
    color: 'orange',
    accentColor: '#ea580c',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-950/40',
    borderLight: 'border-orange-200',
    borderDark: 'dark:border-orange-900',
    textLight: 'text-orange-600',
    textDark: 'dark:text-orange-400',
    modules: htmlModules,
    lessons: htmlLessons,
  },
  css: {
    id: 'css',
    title: 'CSS3 & Modern Layout',
    shortTitle: 'CSS',
    track: 'Styling & Layout Track',
    badge: 'Styling',
    order: 2,
    prerequisiteId: 'html',
    unlockPercentageRequired: 70,
    status: 'active',
    isComingSoon: false,
    description: 'Master Flexbox, CSS Grid, custom properties, animations, and responsive web design systems.',
    color: 'blue',
    accentColor: '#2563eb',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-950/40',
    borderLight: 'border-blue-200',
    borderDark: 'dark:border-blue-900',
    textLight: 'text-blue-600',
    textDark: 'dark:text-blue-400',
    modules: cssModules,
    lessons: cssLessons,
  },
  javascript: {
    id: 'javascript',
    title: 'JavaScript (ES6+) Mastery',
    shortTitle: 'JavaScript',
    track: 'Logic & Scripting Track',
    badge: 'Language',
    order: 3,
    prerequisiteId: 'css',
    unlockPercentageRequired: 70,
    status: 'coming_soon',
    isComingSoon: true,
    description: 'Master modern ES6+ syntax, closures, promises, async/await, functional array methods, and OOP patterns (Coming Soon).',
    color: 'yellow',
    accentColor: '#eab308',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-950/40',
    borderLight: 'border-amber-200',
    borderDark: 'dark:border-amber-900',
    textLight: 'text-amber-600',
    textDark: 'dark:text-amber-400',
    modules: jsModules,
    lessons: jsLessons,
  },
  react: {
    id: 'react',
    title: 'React.js Components & Hooks',
    shortTitle: 'React',
    track: 'Frontend Framework Track',
    badge: 'Frontend',
    order: 4,
    prerequisiteId: 'javascript',
    unlockPercentageRequired: 70,
    status: 'coming_soon',
    isComingSoon: true,
    description: 'Build production-grade UIs using JSX, component state, custom hooks, context, memoization, and forms (Coming Soon).',
    color: 'cyan',
    accentColor: '#06b6d4',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-950/40',
    borderLight: 'border-cyan-200',
    borderDark: 'dark:border-cyan-900',
    textLight: 'text-cyan-600',
    textDark: 'dark:text-cyan-400',
    modules: reactModules,
    lessons: reactLessons,
  },
  nodejs: {
    id: 'nodejs',
    title: 'Node.js & Backend Architecture',
    shortTitle: 'Node.js',
    track: 'Backend & API Track',
    badge: 'Backend',
    order: 5,
    prerequisiteId: 'react',
    unlockPercentageRequired: 70,
    status: 'coming_soon',
    isComingSoon: true,
    description: 'Engineer high-throughput servers with the V8 event loop, streams, Express.js REST APIs, JWT auth, and production tooling (Coming Soon).',
    color: 'emerald',
    accentColor: '#059669',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/40',
    borderLight: 'border-emerald-200',
    borderDark: 'dark:border-emerald-900',
    textLight: 'text-emerald-600',
    textDark: 'dark:text-emerald-400',
    modules: nodeModules,
    lessons: nodeLessons,
  }
};

export const ACTIVE_COURSE_IDS = ['html', 'css'];
export const COMING_SOON_COURSE_IDS = ['javascript', 'react', 'nodejs'];

export const COURSE_ORDER = ['html', 'css', 'javascript', 'react', 'nodejs'];

export const COURSE_LIST = COURSE_ORDER.map((id) => COURSES[id]);
export const ACTIVE_COURSE_LIST = ACTIVE_COURSE_IDS.map((id) => COURSES[id]);

export function getCourse(courseId) {
  return COURSES[courseId] || COURSES.html;
}

export function isValidCourseId(courseId) {
  return Boolean(COURSES[courseId]);
}

export function isCourseActive(courseId) {
  return ACTIVE_COURSE_IDS.includes(courseId);
}

export function getCourseModules(courseId) {
  return getCourse(courseId).modules;
}

export function getCourseLessons(courseId) {
  return getCourse(courseId).lessons;
}

export function getCourseLesson(courseId, lessonId) {
  const course = getCourse(courseId);
  return course.lessons[lessonId];
}
