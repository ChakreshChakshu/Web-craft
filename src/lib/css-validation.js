/**
 * CSS Validation Engine for WebCraft
 * Parses and verifies student CSS rules, declarations, properties, and media queries.
 */

/**
 * Strips comments from CSS string
 */
function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

/**
 * Normalizes CSS value by stripping extra whitespace, quotes, and semicolons
 */
function normalizeValue(val) {
  if (!val) return '';
  return val.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Extracts rule blocks from raw CSS
 * Returns map of selector -> declarations object
 */
export function parseCssDeclarations(css) {
  const clean = stripCssComments(css);
  const rules = {};
  const mediaQueries = [];

  // Match @media blocks first
  const mediaRegex = /@media\s*([^{]+)\{([\s\S]*?\})\s*\}/gi;
  let mediaMatch;
  while ((mediaMatch = mediaRegex.exec(clean)) !== null) {
    mediaQueries.push({
      condition: mediaMatch[1].trim(),
      rawContent: mediaMatch[2]
    });
  }

  // Strip media queries to parse standard rules
  const nonMediaCss = clean.replace(mediaRegex, '');

  // Match standard selector { ... }
  const ruleRegex = /([^{}]+)\{([^}]+)\}/g;
  let match;
  while ((match = ruleRegex.exec(nonMediaCss)) !== null) {
    const rawSelectors = match[1].split(',');
    const body = match[2];

    const decls = {};
    const declPairs = body.split(';');
    for (const pair of declPairs) {
      const colonIdx = pair.indexOf(':');
      if (colonIdx > 0) {
        const prop = pair.slice(0, colonIdx).trim().toLowerCase();
        const val = normalizeValue(pair.slice(colonIdx + 1));
        if (prop && val) {
          decls[prop] = val;
        }
      }
    }

    for (const rawSel of rawSelectors) {
      const sel = rawSel.trim().toLowerCase();
      if (sel) {
        rules[sel] = { ...(rules[sel] || {}), ...decls };
      }
    }
  }

  return { rules, mediaQueries, rawCss: clean };
}

/**
 * Validates student CSS against exercise requirements
 * @param {string} css - The student's CSS submission
 * @param {Array} requirements - Array of requirement objects
 */
export function validateCssStructure(css, requirements) {
  if (!requirements || requirements.length === 0) {
    return { allPassed: true, scorePercentage: 100, results: [] };
  }

  if (!css || !css.trim()) {
    return {
      allPassed: false,
      scorePercentage: 0,
      results: requirements.map((req) => ({
        requirementId: req.id,
        requirementText: req.text,
        passed: false,
        message: 'No CSS submitted. Please write your CSS styles.'
      })),
      error: 'Empty CSS submission'
    };
  }

  const { rules, mediaQueries, rawCss } = parseCssDeclarations(css);
  const normalizedRaw = rawCss.toLowerCase();

  const results = requirements.map((req) => {
    // 1. Raw CSS regex / substring check
    if (req.rawPattern) {
      const matches = req.rawPattern instanceof RegExp 
        ? req.rawPattern.test(rawCss) 
        : normalizedRaw.includes(req.rawPattern.toLowerCase());

      if (!matches) {
        return {
          requirementId: req.id,
          requirementText: req.text,
          passed: false,
          message: req.errorMessage || `Missing expected pattern '${req.rawPattern}'.`
        };
      }
    }

    // 2. Media query check
    if (req.mediaQueryRequired) {
      const hasMedia = mediaQueries.some((m) => {
        if (req.mediaCondition) {
          return m.condition.toLowerCase().includes(req.mediaCondition.toLowerCase());
        }
        return true;
      });

      if (!hasMedia) {
        return {
          requirementId: req.id,
          requirementText: req.text,
          passed: false,
          message: req.errorMessage || `Missing responsive @media query with '${req.mediaCondition || 'screen'}'.`
        };
      }
    }

    // 3. Selector check
    if (req.selector) {
      const targetSelector = req.selector.trim().toLowerCase();
      
      // Look for exact selector or sub-selector match
      const matchedKey = Object.keys(rules).find((sel) => {
        if (sel === targetSelector) return true;
        // Also check if comma separated or compound
        return sel.split(/\s+/).includes(targetSelector) || sel.includes(targetSelector);
      });

      if (!matchedKey) {
        return {
          requirementId: req.id,
          requirementText: req.text,
          passed: false,
          message: `Selector '${req.selector}' not found in your stylesheet.`
        };
      }

      const declarations = rules[matchedKey];

      // Check required CSS declarations
      if (req.declarations && Array.isArray(req.declarations)) {
        for (const declReq of req.declarations) {
          const propName = declReq.property.toLowerCase();
          const actualVal = declarations[propName];

          if (!actualVal) {
            return {
              requirementId: req.id,
              requirementText: req.text,
              passed: false,
              message: `Selector '${req.selector}' is missing required property '${declReq.property}'.`
            };
          }

          if (declReq.expectedValue) {
            const expectedNorm = normalizeValue(declReq.expectedValue);
            const matchesVal = declReq.expectedValue instanceof RegExp
              ? declReq.expectedValue.test(actualVal)
              : actualVal === expectedNorm || actualVal.includes(expectedNorm);

            if (!matchesVal) {
              return {
                requirementId: req.id,
                requirementText: req.text,
                passed: false,
                message: `'${declReq.property}' on '${req.selector}' is set to '${actualVal}', expected '${declReq.expectedValue}'.`
              };
            }
          }
        }
      }
    }

    return {
      requirementId: req.id,
      requirementText: req.text,
      passed: true,
      message: 'Passed'
    };
  });

  const passedCount = results.filter((r) => r.passed).length;
  const allPassed = passedCount === requirements.length;
  const scorePercentage = Math.round((passedCount / requirements.length) * 100);

  return {
    allPassed,
    scorePercentage,
    results
  };
}
