import { parse, parseFragment } from 'parse5';

function traverseNodes(node, callback) {
  if (!node) return;
  if (node.tagName) {
    callback(node);
  }
  if (node.childNodes && Array.isArray(node.childNodes)) {
    for (const child of node.childNodes) {
      traverseNodes(child, callback);
    }
  }
}

function getNodeText(node) {
  if (!node) return '';
  if (node.nodeName === '#text' && typeof node.value === 'string') {
    return node.value;
  }
  let text = '';
  if (node.childNodes && Array.isArray(node.childNodes)) {
    for (const child of node.childNodes) {
      text += getNodeText(child);
    }
  }
  return text;
}

export function validateHtmlStructure(html, requirements) {
  if (!html || !html.trim()) {
    return {
      allPassed: false,
      scorePercentage: 0,
      results: requirements.map((req) => ({
        requirementId: req.id,
        requirementText: req.text,
        passed: false,
        message: 'No code submitted. Please write your HTML solution.'
      })),
      error: 'Empty code submission'
    };
  }

  let root;
  try {
    // If full document (contains <!DOCTYPE or <html), use parse; otherwise parseFragment
    if (html.toLowerCase().includes('<!doctype') || html.toLowerCase().includes('<html')) {
      root = parse(html);
    } else {
      root = parseFragment(html);
    }
  } catch (err) {
    return {
      allPassed: false,
      scorePercentage: 0,
      results: requirements.map((req) => ({
        requirementId: req.id,
        requirementText: req.text,
        passed: false,
        message: `HTML Parser Error: ${err.message || 'Malformed HTML syntax'}`
      })),
      error: 'Parse error'
    };
  }

  // Collect all elements in a flat list
  const elements = [];
  traverseNodes(root, (el) => elements.push(el));

  const results = requirements.map((req) => {
    // 1. Tag matching
    if (req.tag) {
      const targetTag = req.tag.toLowerCase();
      const matched = elements.filter((el) => el.tagName.toLowerCase() === targetTag);
      const min = req.minCount ?? 1;

      if (matched.length < min) {
        return {
          requirementId: req.id,
          requirementText: req.text,
          passed: false,
          message: min === 1 
            ? `Missing <${targetTag}> element. Found 0.` 
            : `Expected at least ${min} <${targetTag}> elements, but found ${matched.length}.`
        };
      }

      if (req.maxCount !== undefined && matched.length > req.maxCount) {
        return {
          requirementId: req.id,
          requirementText: req.text,
          passed: false,
          message: `Expected at most ${req.maxCount} <${targetTag}> elements, but found ${matched.length}.`
        };
      }

      // Check attributes required on the matched elements
      if (req.attributesRequired && req.attributesRequired.length > 0) {
        for (const attrReq of req.attributesRequired) {
          const hasAttr = matched.some((el) => {
            const attr = el.attrs.find((a) => a.name.toLowerCase() === attrReq.name.toLowerCase());
            if (!attr) return false;
            if (attrReq.notEmpty && (!attr.value || !attr.value.trim())) return false;
            if (attrReq.pattern && !attrReq.pattern.test(attr.value)) return false;
            return true;
          });

          if (!hasAttr) {
            return {
              requirementId: req.id,
              requirementText: req.text,
              passed: false,
              message: attrReq.notEmpty
                ? `<${targetTag}> requires a non-empty '${attrReq.name}' attribute.`
                : `<${targetTag}> is missing required '${attrReq.name}' attribute.`
            };
          }
        }
      }

      // Check text inside elements
      if (req.mustContainText) {
        const hasText = matched.some((el) => {
          const text = getNodeText(el).trim();
          if (typeof req.mustContainText === 'string') {
            return text.toLowerCase().includes(req.mustContainText.toLowerCase());
          } else if (req.mustContainText instanceof RegExp) {
            return req.mustContainText.test(text);
          }
          return false;
        });

        if (!hasText) {
          return {
            requirementId: req.id,
            requirementText: req.text,
            passed: false,
            message: `<${targetTag}> content does not match expected text.`
          };
        }
      }

      // Check children tags if specified
      if (req.childrenTags && req.childrenTags.length > 0) {
        for (const childTag of req.childrenTags) {
          const hasChild = matched.some((el) => {
            let foundChild = false;
            traverseNodes(el, (child) => {
              if (child !== el && child.tagName.toLowerCase() === childTag.toLowerCase()) {
                foundChild = true;
              }
            });
            return foundChild;
          });

          if (!hasChild) {
            return {
              requirementId: req.id,
              requirementText: req.text,
              passed: false,
              message: `<${targetTag}> must contain child element <${childTag}>.`
            };
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
