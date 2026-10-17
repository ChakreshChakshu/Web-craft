import { validateHtmlStructure } from './html-validation';
import { validateCssStructure } from './css-validation';

/**
 * Universal Exercise Evaluator
 * Evaluates both HTML AST structure and CSS declaration rules.
 */
export function evaluateExerciseSubmission(exercise, htmlCode = '', cssCode = '') {
  const htmlRequirements = exercise.requirements || [];
  const cssRequirements = exercise.cssRequirements || [];

  let htmlResult = { allPassed: true, scorePercentage: 100, results: [] };
  let cssResult = { allPassed: true, scorePercentage: 100, results: [] };

  if (htmlRequirements.length > 0) {
    htmlResult = validateHtmlStructure(htmlCode, htmlRequirements);
  }

  if (cssRequirements.length > 0) {
    cssResult = validateCssStructure(cssCode, cssRequirements);
  }

  const combinedResults = [
    ...htmlResult.results.map((r) => ({ ...r, category: 'HTML' })),
    ...cssResult.results.map((r) => ({ ...r, category: 'CSS' }))
  ];

  const totalRequirements = combinedResults.length;
  const passedCount = combinedResults.filter((r) => r.passed).length;
  const allPassed = totalRequirements > 0 ? passedCount === totalRequirements : false;
  const scorePercentage = totalRequirements > 0 ? Math.round((passedCount / totalRequirements) * 100) : 0;

  return {
    allPassed,
    scorePercentage,
    passedCount,
    totalCount: totalRequirements,
    results: combinedResults,
    htmlResult,
    cssResult
  };
}
