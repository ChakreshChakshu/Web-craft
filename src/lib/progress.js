import { COURSES, COURSE_ORDER, ACTIVE_COURSE_IDS, getCourse, isValidCourseId } from './courses';
import { exercises } from '../content/exercises/exercisesData';
import { quizzes } from '../content/quizzes/quizzesData';

export function getCourseCompletionPercentage(courseId, completedLessons = []) {
  const course = getCourse(courseId);
  const lessonsRecord = course?.lessons || {};
  const total = Object.keys(lessonsRecord).length;
  if (total === 0) return 0;
  const completedCount = Object.keys(lessonsRecord).filter((id) =>
    completedLessons.includes(id)
  ).length;
  return Math.round((completedCount / total) * 100);
}

export function getHtmlCourseProgressPercentage(completedLessons = []) {
  return getCourseCompletionPercentage('html', completedLessons);
}

export function isCourseUnlocked(courseId, completedLessons = []) {
  const course = getCourse(courseId);
  if (!course) return false;
  // If course is coming soon / disabled, it is not unlocked
  if (course.isComingSoon) return false;
  if (courseId === 'html') return true;
  if (!course.prerequisiteId) return true;

  // Prerequisite course must have reached at least 70%
  const prereqPercentage = getCourseCompletionPercentage(course.prerequisiteId, completedLessons);
  return prereqPercentage >= (course.unlockPercentageRequired || 70);
}

export function isCssUnlocked(completedLessons = []) {
  return isCourseUnlocked('css', completedLessons);
}

export function isJsUnlocked() {
  return false;
}

export function isReactUnlocked() {
  return false;
}

export function isNodeUnlocked() {
  return false;
}

export function getCourseUnlockInfo(courseId, completedLessons = []) {
  const course = getCourse(courseId);
  if (!course) {
    return {
      isUnlocked: false,
      isComingSoon: false,
      requiredPercentage: 0,
      currentPercentage: 0,
      prerequisiteCourse: null,
      completedPrereqCount: 0,
      totalPrereqLessons: 0,
      remainingCount: 0,
      unlockRequirementText: 'Invalid course'
    };
  }

  if (course.isComingSoon) {
    return {
      isUnlocked: false,
      isComingSoon: true,
      requiredPercentage: 0,
      currentPercentage: 0,
      prerequisiteCourse: null,
      completedPrereqCount: 0,
      totalPrereqLessons: 0,
      remainingCount: 0,
      unlockRequirementText: 'Coming Soon — This track is currently in development. Enhance your foundational skills in HTML5 and CSS3 first!'
    };
  }

  if (!course.prerequisiteId) {
    return {
      isUnlocked: true,
      isComingSoon: false,
      requiredPercentage: 0,
      currentPercentage: 100,
      prerequisiteCourse: null,
      completedPrereqCount: 0,
      totalPrereqLessons: 0,
      remainingCount: 0,
      unlockRequirementText: 'Always accessible'
    };
  }

  const prereqCourse = getCourse(course.prerequisiteId);
  const totalPrereqLessons = Object.keys(prereqCourse.lessons || {}).length;
  const completedPrereqCount = Object.keys(prereqCourse.lessons || {}).filter((id) =>
    completedLessons.includes(id)
  ).length;

  const currentPercentage = totalPrereqLessons > 0
    ? Math.round((completedPrereqCount / totalPrereqLessons) * 100)
    : 0;

  const requiredPercentage = course.unlockPercentageRequired || 70;
  const isUnlocked = currentPercentage >= requiredPercentage;
  const requiredLessonsCount = Math.ceil(totalPrereqLessons * (requiredPercentage / 100));
  const remainingCount = Math.max(0, requiredLessonsCount - completedPrereqCount);

  return {
    isUnlocked,
    prerequisiteCourse: prereqCourse,
    currentPercentage,
    requiredPercentage,
    completedPrereqCount,
    totalPrereqLessons,
    requiredLessonsCount,
    remainingCount,
    unlockRequirementText: `Complete at least ${requiredPercentage}% of the ${prereqCourse.shortTitle} course to unlock ${course.title}.`
  };
}

export function getHtmlFundamentalsProgress(completedLessons = []) {
  const unlockInfo = getCourseUnlockInfo('css', completedLessons);
  return {
    completed: unlockInfo.completedPrereqCount,
    total: unlockInfo.totalPrereqLessons,
    percentage: unlockInfo.currentPercentage,
    requiredPercentage: unlockInfo.requiredPercentage,
    requiredLessonsCount: unlockInfo.requiredLessonsCount,
    isUnlocked: unlockInfo.isUnlocked,
    remainingCount: unlockInfo.remainingCount
  };
}

export function calculateCourseProgress(courseId, state) {
  const course = getCourse(courseId);
  const lessonsRecord = course.lessons || {};
  const totalLessons = Object.keys(lessonsRecord).length;
  const completedLessonsList = state?.completedLessons || [];

  const completedCount = Object.keys(lessonsRecord).filter((id) =>
    completedLessonsList.includes(id)
  ).length;

  const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const courseExercises = exercises.filter((e) => e.courseId === courseId || e.moduleId?.startsWith(courseId));
  const completedExercisesList = state?.completedExercises || [];
  const completedExercisesCount = courseExercises.filter((e) =>
    completedExercisesList.includes(e.id)
  ).length;

  const courseQuizzes = quizzes.filter((q) => q.courseId === courseId || q.moduleId?.startsWith(courseId));
  const quizResults = state?.quizResults || {};
  const quizzesCompletedCount = courseQuizzes.filter(
    (q) => quizResults[q.id]?.passed
  ).length;

  const unlockInfo = getCourseUnlockInfo(courseId, completedLessonsList);

  return {
    courseId,
    totalLessons,
    completedLessonsCount: completedCount,
    completionPercentage,
    isUnlocked: unlockInfo.isUnlocked,
    unlockRequirementText: !unlockInfo.isUnlocked ? unlockInfo.unlockRequirementText : undefined,
    unlockInfo,
    totalExercises: courseExercises.length,
    completedExercisesCount,
    totalQuizzes: courseQuizzes.length,
    quizzesCompletedCount
  };
}

export function getAdjacentLessons(currentCourseId, currentLessonId) {
  const course = getCourse(currentCourseId);
  const lessonsRecord = course.lessons || {};
  const list = Object.values(lessonsRecord).sort((a, b) => a.lessonNumber - b.lessonNumber);
  const currentIndex = list.findIndex((l) => l.id === currentLessonId);

  if (currentIndex === -1) {
    return {};
  }

  return {
    previousLesson: currentIndex > 0 ? list[currentIndex - 1] : undefined,
    nextLesson: currentIndex < list.length - 1 ? list[currentIndex + 1] : undefined
  };
}

export function getRecommendedLesson(state) {
  const completedLessons = state?.completedLessons || [];

  for (const cid of ACTIVE_COURSE_IDS) {
    if (!isCourseUnlocked(cid, completedLessons)) continue;
    const course = getCourse(cid);
    const list = Object.values(course.lessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
    const firstUnfinished = list.find((l) => !completedLessons.includes(l.id));
    if (firstUnfinished) {
      return {
        lesson: firstUnfinished,
        courseTitle: course.title,
        courseId: cid
      };
    }
  }

  // Fallback to first HTML lesson
  const htmlCourse = getCourse('html');
  const htmlList = Object.values(htmlCourse.lessons).sort((a, b) => a.lessonNumber - b.lessonNumber);
  return {
    lesson: htmlList[0],
    courseTitle: htmlCourse.title,
    courseId: 'html'
  };
}
