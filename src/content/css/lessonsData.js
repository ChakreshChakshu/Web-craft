 export const cssLessons = {
  "what-is-css": {
    "id": "what-is-css",
    "lessonNumber": 1,
    "title": "What Is CSS?",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how What Is CSS? interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for What Is CSS?",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "What Is CSS? is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "what-is-css-concept",
        "heading": "Understanding What Is CSS?",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "what-is-css-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "What Is CSS? Style Rules",
          "description": "Standard syntax pattern for what is css?"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>What Is CSS?</h2>\n  <p>Exploring what is css? styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating what is css?.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: What Is CSS? */\n"
    },
    "keyTakeaways": [
      "What Is CSS? controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "inline-internal-and-external-css": {
    "id": "inline-internal-and-external-css",
    "lessonNumber": 2,
    "title": "Inline, Internal, and External CSS",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Inline, Internal, and External CSS interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Inline, Internal, and External CSS",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Inline, Internal, and External CSS is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "inline-internal-and-external-css-concept",
        "heading": "Understanding Inline, Internal, and External CSS",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "inline-internal-and-external-css-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Inline, Internal, and External CSS Style Rules",
          "description": "Standard syntax pattern for inline, internal, and external css"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Inline, Internal, and External CSS</h2>\n  <p>Exploring inline, internal, and external css styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating inline, internal, and external css.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Inline, Internal, and External CSS */\n"
    },
    "keyTakeaways": [
      "Inline, Internal, and External CSS controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "css-syntax": {
    "id": "css-syntax",
    "lessonNumber": 3,
    "title": "CSS Syntax",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how CSS Syntax interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for CSS Syntax",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "CSS Syntax is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "css-syntax-concept",
        "heading": "Understanding CSS Syntax",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "css-syntax-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "CSS Syntax Style Rules",
          "description": "Standard syntax pattern for css syntax"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>CSS Syntax</h2>\n  <p>Exploring css syntax styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating css syntax.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: CSS Syntax */\n"
    },
    "keyTakeaways": [
      "CSS Syntax controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "selectors": {
    "id": "selectors",
    "lessonNumber": 4,
    "title": "Selectors",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Selectors interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Selectors",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Selectors is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "selectors-concept",
        "heading": "Understanding Selectors",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "selectors-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Selectors Style Rules",
          "description": "Standard syntax pattern for selectors"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Selectors</h2>\n  <p>Exploring selectors styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating selectors.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Selectors */\n"
    },
    "keyTakeaways": [
      "Selectors controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "element-class-and-id-selectors": {
    "id": "element-class-and-id-selectors",
    "lessonNumber": 5,
    "title": "Element, Class, and ID Selectors",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Element, Class, and ID Selectors interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Element, Class, and ID Selectors",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Element, Class, and ID Selectors is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "element-class-and-id-selectors-concept",
        "heading": "Understanding Element, Class, and ID Selectors",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "element-class-and-id-selectors-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Element, Class, and ID Selectors Style Rules",
          "description": "Standard syntax pattern for element, class, and id selectors"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Element, Class, and ID Selectors</h2>\n  <p>Exploring element, class, and id selectors styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating element, class, and id selectors.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Element, Class, and ID Selectors */\n"
    },
    "keyTakeaways": [
      "Element, Class, and ID Selectors controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "combining-selectors": {
    "id": "combining-selectors",
    "lessonNumber": 6,
    "title": "Combining Selectors",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Combining Selectors interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Combining Selectors",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Combining Selectors is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "combining-selectors-concept",
        "heading": "Understanding Combining Selectors",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "combining-selectors-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Combining Selectors Style Rules",
          "description": "Standard syntax pattern for combining selectors"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Combining Selectors</h2>\n  <p>Exploring combining selectors styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating combining selectors.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Combining Selectors */\n"
    },
    "keyTakeaways": [
      "Combining Selectors controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "css-comments": {
    "id": "css-comments",
    "lessonNumber": 7,
    "title": "CSS Comments",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 5,
    "learningObjectives": [
      "Understand how CSS Comments interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for CSS Comments",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "CSS Comments is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "css-comments-concept",
        "heading": "Understanding CSS Comments",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "css-comments-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "CSS Comments Style Rules",
          "description": "Standard syntax pattern for css comments"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>CSS Comments</h2>\n  <p>Exploring css comments styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating css comments.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: CSS Comments */\n"
    },
    "keyTakeaways": [
      "CSS Comments controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "cascade-and-specificity-basics": {
    "id": "cascade-and-specificity-basics",
    "lessonNumber": 8,
    "title": "Cascade and Specificity Basics",
    "moduleId": "css-module-1",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how Cascade and Specificity Basics interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Cascade and Specificity Basics",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Cascade and Specificity Basics is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "cascade-and-specificity-basics-concept",
        "heading": "Understanding Cascade and Specificity Basics",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "cascade-and-specificity-basics-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Cascade and Specificity Basics Style Rules",
          "description": "Standard syntax pattern for cascade and specificity basics"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Cascade and Specificity Basics</h2>\n  <p>Exploring cascade and specificity basics styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating cascade and specificity basics.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Cascade and Specificity Basics */\n"
    },
    "keyTakeaways": [
      "Cascade and Specificity Basics controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "colors": {
    "id": "colors",
    "lessonNumber": 9,
    "title": "Colors",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Colors interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Colors",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Colors is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "colors-concept",
        "heading": "Understanding Colors",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "colors-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Colors Style Rules",
          "description": "Standard syntax pattern for colors"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Colors</h2>\n  <p>Exploring colors styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating colors.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Colors */\n"
    },
    "keyTakeaways": [
      "Colors controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "background-colors": {
    "id": "background-colors",
    "lessonNumber": 10,
    "title": "Background Colors",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Background Colors interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Background Colors",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Background Colors is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "background-colors-concept",
        "heading": "Understanding Background Colors",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "background-colors-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Background Colors Style Rules",
          "description": "Standard syntax pattern for background colors"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Background Colors</h2>\n  <p>Exploring background colors styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating background colors.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Background Colors */\n"
    },
    "keyTakeaways": [
      "Background Colors controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "fonts-and-font-families": {
    "id": "fonts-and-font-families",
    "lessonNumber": 11,
    "title": "Fonts and Font Families",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Fonts and Font Families interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Fonts and Font Families",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Fonts and Font Families is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "fonts-and-font-families-concept",
        "heading": "Understanding Fonts and Font Families",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "fonts-and-font-families-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Fonts and Font Families Style Rules",
          "description": "Standard syntax pattern for fonts and font families"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Fonts and Font Families</h2>\n  <p>Exploring fonts and font families styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating fonts and font families.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Fonts and Font Families */\n"
    },
    "keyTakeaways": [
      "Fonts and Font Families controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "font-sizes": {
    "id": "font-sizes",
    "lessonNumber": 12,
    "title": "Font Sizes",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Font Sizes interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Font Sizes",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Font Sizes is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "font-sizes-concept",
        "heading": "Understanding Font Sizes",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "font-sizes-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Font Sizes Style Rules",
          "description": "Standard syntax pattern for font sizes"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Font Sizes</h2>\n  <p>Exploring font sizes styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating font sizes.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Font Sizes */\n"
    },
    "keyTakeaways": [
      "Font Sizes controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "font-weights": {
    "id": "font-weights",
    "lessonNumber": 13,
    "title": "Font Weights",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Font Weights interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Font Weights",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Font Weights is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "font-weights-concept",
        "heading": "Understanding Font Weights",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "font-weights-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Font Weights Style Rules",
          "description": "Standard syntax pattern for font weights"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Font Weights</h2>\n  <p>Exploring font weights styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating font weights.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Font Weights */\n"
    },
    "keyTakeaways": [
      "Font Weights controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "text-alignment": {
    "id": "text-alignment",
    "lessonNumber": 14,
    "title": "Text Alignment",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Text Alignment interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Text Alignment",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Text Alignment is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "text-alignment-concept",
        "heading": "Understanding Text Alignment",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "text-alignment-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Text Alignment Style Rules",
          "description": "Standard syntax pattern for text alignment"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Text Alignment</h2>\n  <p>Exploring text alignment styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating text alignment.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Text Alignment */\n"
    },
    "keyTakeaways": [
      "Text Alignment controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "line-height": {
    "id": "line-height",
    "lessonNumber": 15,
    "title": "Line Height",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Line Height interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Line Height",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Line Height is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "line-height-concept",
        "heading": "Understanding Line Height",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "line-height-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Line Height Style Rules",
          "description": "Standard syntax pattern for line height"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Line Height</h2>\n  <p>Exploring line height styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating line height.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Line Height */\n"
    },
    "keyTakeaways": [
      "Line Height controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "text-decoration": {
    "id": "text-decoration",
    "lessonNumber": 16,
    "title": "Text Decoration",
    "moduleId": "css-module-2",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Text Decoration interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Text Decoration",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Text Decoration is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "text-decoration-concept",
        "heading": "Understanding Text Decoration",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "text-decoration-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Text Decoration Style Rules",
          "description": "Standard syntax pattern for text decoration"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Text Decoration</h2>\n  <p>Exploring text decoration styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating text decoration.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Text Decoration */\n"
    },
    "keyTakeaways": [
      "Text Decoration controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "width-and-height": {
    "id": "width-and-height",
    "lessonNumber": 17,
    "title": "Width and Height",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Width and Height interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Width and Height",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Width and Height is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "width-and-height-concept",
        "heading": "Understanding Width and Height",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "width-and-height-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Width and Height Style Rules",
          "description": "Standard syntax pattern for width and height"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Width and Height</h2>\n  <p>Exploring width and height styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating width and height.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Width and Height */\n"
    },
    "keyTakeaways": [
      "Width and Height controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "margin": {
    "id": "margin",
    "lessonNumber": 18,
    "title": "Margin",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Margin interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Margin",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Margin is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "margin-concept",
        "heading": "Understanding Margin",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "margin-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Margin Style Rules",
          "description": "Standard syntax pattern for margin"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Margin</h2>\n  <p>Exploring margin styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating margin.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Margin */\n"
    },
    "keyTakeaways": [
      "Margin controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "padding": {
    "id": "padding",
    "lessonNumber": 19,
    "title": "Padding",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Padding interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Padding",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Padding is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "padding-concept",
        "heading": "Understanding Padding",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "padding-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Padding Style Rules",
          "description": "Standard syntax pattern for padding"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Padding</h2>\n  <p>Exploring padding styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating padding.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Padding */\n"
    },
    "keyTakeaways": [
      "Padding controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "borders": {
    "id": "borders",
    "lessonNumber": 20,
    "title": "Borders",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Borders interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Borders",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Borders is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "borders-concept",
        "heading": "Understanding Borders",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "borders-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Borders Style Rules",
          "description": "Standard syntax pattern for borders"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Borders</h2>\n  <p>Exploring borders styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating borders.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Borders */\n"
    },
    "keyTakeaways": [
      "Borders controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "box-sizing": {
    "id": "box-sizing",
    "lessonNumber": 21,
    "title": "Box Sizing",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Box Sizing interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Box Sizing",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Box Sizing is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "By default in the legacy W3C box model (content-box), adding padding or borders expands the overall physical size of an element beyond its declared width, frequently breaking grid layouts.",
    "howItWorks": "box-sizing: border-box recalculates width and height to absorb padding and border thickness inside the declared dimension, leaving margin as the only external spacing.",
    "whenToUse": [
      "Apply universally via * { box-sizing: border-box; } at the top of every modern stylesheet"
    ],
    "whenNotToUse": [
      "Rarely use content-box except when reproducing legacy components designed around content sizing"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Universal Box Sizing Reset vs Default Content Box Bug",
        "correct": "* {\n  box-sizing: border-box;\n}\n.box {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n  /* Total width: exactly 100px! */\n}",
        "incorrect": "/* Default content-box */\n.box {\n  width: 100px;\n  padding: 10px;\n  border: 5px solid black;\n  /* Total width: 100 + 20 + 10 = 130px! Breaks parent grid */\n}",
        "explanation": "With border-box, an element with width: 100px will stay 100px wide regardless of padding or borders added."
      }
    ],
    "sections": [
      {
        "id": "box-sizing-concept",
        "heading": "Understanding Box Sizing",
        "content": "By default in the legacy W3C box model (content-box), adding padding or borders expands the overall physical size of an element beyond its declared width, frequently breaking grid layouts.\n\nbox-sizing: border-box recalculates width and height to absorb padding and border thickness inside the declared dimension, leaving margin as the only external spacing.",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "box-sizing-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Box Sizing Style Rules",
          "description": "Standard syntax pattern for box sizing"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Box Sizing</h2>\n  <p>Exploring box sizing styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating box sizing.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Box Sizing */\n"
    },
    "keyTakeaways": [
      "Box Sizing controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "border-radius": {
    "id": "border-radius",
    "lessonNumber": 22,
    "title": "Border Radius",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 6,
    "learningObjectives": [
      "Understand how Border Radius interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Border Radius",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Border Radius is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "border-radius-concept",
        "heading": "Understanding Border Radius",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "border-radius-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Border Radius Style Rules",
          "description": "Standard syntax pattern for border radius"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Border Radius</h2>\n  <p>Exploring border radius styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating border radius.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Border Radius */\n"
    },
    "keyTakeaways": [
      "Border Radius controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "box-shadows": {
    "id": "box-shadows",
    "lessonNumber": 23,
    "title": "Box Shadows",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Box Shadows interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Box Shadows",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Box Shadows is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "box-shadows-concept",
        "heading": "Understanding Box Shadows",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "box-shadows-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Box Shadows Style Rules",
          "description": "Standard syntax pattern for box shadows"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Box Shadows</h2>\n  <p>Exploring box shadows styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating box shadows.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Box Shadows */\n"
    },
    "keyTakeaways": [
      "Box Shadows controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "overflow": {
    "id": "overflow",
    "lessonNumber": 24,
    "title": "Overflow",
    "moduleId": "css-module-3",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Overflow interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Overflow",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Overflow is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "overflow-concept",
        "heading": "Understanding Overflow",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "overflow-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Overflow Style Rules",
          "description": "Standard syntax pattern for overflow"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Overflow</h2>\n  <p>Exploring overflow styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating overflow.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Overflow */\n"
    },
    "keyTakeaways": [
      "Overflow controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "display": {
    "id": "display",
    "lessonNumber": 25,
    "title": "Display",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Display interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Display",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Display is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "display-concept",
        "heading": "Understanding Display",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "display-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Display Style Rules",
          "description": "Standard syntax pattern for display"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Display</h2>\n  <p>Exploring display styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating display.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Display */\n"
    },
    "keyTakeaways": [
      "Display controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "block-and-inline-elements": {
    "id": "block-and-inline-elements",
    "lessonNumber": 26,
    "title": "Block and Inline Elements",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Block and Inline Elements interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Block and Inline Elements",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Block and Inline Elements is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "block-and-inline-elements-concept",
        "heading": "Understanding Block and Inline Elements",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "block-and-inline-elements-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Block and Inline Elements Style Rules",
          "description": "Standard syntax pattern for block and inline elements"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Block and Inline Elements</h2>\n  <p>Exploring block and inline elements styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating block and inline elements.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Block and Inline Elements */\n"
    },
    "keyTakeaways": [
      "Block and Inline Elements controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "inline-block": {
    "id": "inline-block",
    "lessonNumber": 27,
    "title": "Inline-Block",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Inline-Block interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Inline-Block",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Inline-Block is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "inline-block-concept",
        "heading": "Understanding Inline-Block",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "inline-block-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Inline-Block Style Rules",
          "description": "Standard syntax pattern for inline-block"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Inline-Block</h2>\n  <p>Exploring inline-block styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating inline-block.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Inline-Block */\n"
    },
    "keyTakeaways": [
      "Inline-Block controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "position": {
    "id": "position",
    "lessonNumber": 28,
    "title": "Position",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how Position interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Position",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Position is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "position-concept",
        "heading": "Understanding Position",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "position-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Position Style Rules",
          "description": "Standard syntax pattern for position"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Position</h2>\n  <p>Exploring position styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating position.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Position */\n"
    },
    "keyTakeaways": [
      "Position controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "z-index": {
    "id": "z-index",
    "lessonNumber": 29,
    "title": "Z-Index",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Z-Index interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Z-Index",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Z-Index is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "z-index-concept",
        "heading": "Understanding Z-Index",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "z-index-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Z-Index Style Rules",
          "description": "Standard syntax pattern for z-index"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Z-Index</h2>\n  <p>Exploring z-index styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating z-index.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Z-Index */\n"
    },
    "keyTakeaways": [
      "Z-Index controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "flexbox-fundamentals": {
    "id": "flexbox-fundamentals",
    "lessonNumber": 30,
    "title": "Flexbox Fundamentals",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how Flexbox Fundamentals interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Flexbox Fundamentals",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Flexbox Fundamentals is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.",
    "howItWorks": "Setting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
    "whenToUse": [
      "Use Flexbox for 1-dimensional layouts (a row of buttons, a navigation bar, centering an element, vertical card stacks)"
    ],
    "whenNotToUse": [
      "Do not use Flexbox for full 2-dimensional page layouts with coordinated rows and columns; use CSS Grid for that"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Modern Flexbox Centering vs Legacy Margin/Float Hacks",
        "correct": ".center-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}",
        "incorrect": ".center-container {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
        "explanation": "Flexbox cleanly centers items on both axes with two declarative properties without taking elements out of normal document flow."
      }
    ],
    "sections": [
      {
        "id": "flexbox-fundamentals-concept",
        "heading": "Understanding Flexbox Fundamentals",
        "content": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.\n\nSetting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "flexbox-fundamentals-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Flexbox Fundamentals Style Rules",
          "description": "Standard syntax pattern for flexbox fundamentals"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Flexbox Fundamentals</h2>\n  <p>Exploring flexbox fundamentals styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating flexbox fundamentals.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Flexbox Fundamentals */\n"
    },
    "keyTakeaways": [
      "Flexbox Fundamentals controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "flex-direction": {
    "id": "flex-direction",
    "lessonNumber": 31,
    "title": "Flex Direction",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Flex Direction interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Flex Direction",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Flex Direction is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.",
    "howItWorks": "Setting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
    "whenToUse": [
      "Use Flexbox for 1-dimensional layouts (a row of buttons, a navigation bar, centering an element, vertical card stacks)"
    ],
    "whenNotToUse": [
      "Do not use Flexbox for full 2-dimensional page layouts with coordinated rows and columns; use CSS Grid for that"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Modern Flexbox Centering vs Legacy Margin/Float Hacks",
        "correct": ".center-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}",
        "incorrect": ".center-container {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
        "explanation": "Flexbox cleanly centers items on both axes with two declarative properties without taking elements out of normal document flow."
      }
    ],
    "sections": [
      {
        "id": "flex-direction-concept",
        "heading": "Understanding Flex Direction",
        "content": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.\n\nSetting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "flex-direction-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Flex Direction Style Rules",
          "description": "Standard syntax pattern for flex direction"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Flex Direction</h2>\n  <p>Exploring flex direction styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating flex direction.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Flex Direction */\n"
    },
    "keyTakeaways": [
      "Flex Direction controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "justify-content": {
    "id": "justify-content",
    "lessonNumber": 32,
    "title": "Justify Content",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Justify Content interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Justify Content",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Justify Content is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "justify-content-concept",
        "heading": "Understanding Justify Content",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "justify-content-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Justify Content Style Rules",
          "description": "Standard syntax pattern for justify content"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Justify Content</h2>\n  <p>Exploring justify content styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating justify content.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Justify Content */\n"
    },
    "keyTakeaways": [
      "Justify Content controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "align-items": {
    "id": "align-items",
    "lessonNumber": 33,
    "title": "Align Items",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Align Items interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Align Items",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Align Items is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "align-items-concept",
        "heading": "Understanding Align Items",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "align-items-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Align Items Style Rules",
          "description": "Standard syntax pattern for align items"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Align Items</h2>\n  <p>Exploring align items styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating align items.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Align Items */\n"
    },
    "keyTakeaways": [
      "Align Items controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "flex-wrap": {
    "id": "flex-wrap",
    "lessonNumber": 34,
    "title": "Flex Wrap",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Flex Wrap interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Flex Wrap",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Flex Wrap is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.",
    "howItWorks": "Setting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
    "whenToUse": [
      "Use Flexbox for 1-dimensional layouts (a row of buttons, a navigation bar, centering an element, vertical card stacks)"
    ],
    "whenNotToUse": [
      "Do not use Flexbox for full 2-dimensional page layouts with coordinated rows and columns; use CSS Grid for that"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Modern Flexbox Centering vs Legacy Margin/Float Hacks",
        "correct": ".center-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}",
        "incorrect": ".center-container {\n  position: relative;\n}\n.child {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}",
        "explanation": "Flexbox cleanly centers items on both axes with two declarative properties without taking elements out of normal document flow."
      }
    ],
    "sections": [
      {
        "id": "flex-wrap-concept",
        "heading": "Understanding Flex Wrap",
        "content": "Before CSS Flexible Box Layout (Flexbox), horizontal alignment and vertical centering required brittle floats, clearfix hacks, and display: table tricks. Flexbox provides a 1-dimensional layout engine for space distribution.\n\nSetting display: flex turns the element into a flex container and its children into flex items. Items align along the main axis (governed by justify-content) and cross axis (governed by align-items).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "flex-wrap-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Flex Wrap Style Rules",
          "description": "Standard syntax pattern for flex wrap"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Flex Wrap</h2>\n  <p>Exploring flex wrap styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating flex wrap.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Flex Wrap */\n"
    },
    "keyTakeaways": [
      "Flex Wrap controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "css-grid-fundamentals": {
    "id": "css-grid-fundamentals",
    "lessonNumber": 35,
    "title": "CSS Grid Fundamentals",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how CSS Grid Fundamentals interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for CSS Grid Fundamentals",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "CSS Grid Fundamentals is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "css-grid-fundamentals-concept",
        "heading": "Understanding CSS Grid Fundamentals",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "css-grid-fundamentals-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "CSS Grid Fundamentals Style Rules",
          "description": "Standard syntax pattern for css grid fundamentals"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>CSS Grid Fundamentals</h2>\n  <p>Exploring css grid fundamentals styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating css grid fundamentals.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: CSS Grid Fundamentals */\n"
    },
    "keyTakeaways": [
      "CSS Grid Fundamentals controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "grid-columns-and-rows": {
    "id": "grid-columns-and-rows",
    "lessonNumber": 36,
    "title": "Grid Columns and Rows",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Grid Columns and Rows interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Grid Columns and Rows",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Grid Columns and Rows is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "grid-columns-and-rows-concept",
        "heading": "Understanding Grid Columns and Rows",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "grid-columns-and-rows-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Grid Columns and Rows Style Rules",
          "description": "Standard syntax pattern for grid columns and rows"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Grid Columns and Rows</h2>\n  <p>Exploring grid columns and rows styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating grid columns and rows.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Grid Columns and Rows */\n"
    },
    "keyTakeaways": [
      "Grid Columns and Rows controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "gap-and-alignment": {
    "id": "gap-and-alignment",
    "lessonNumber": 37,
    "title": "Gap and Alignment",
    "moduleId": "css-module-4",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Gap and Alignment interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Gap and Alignment",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Gap and Alignment is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "gap-and-alignment-concept",
        "heading": "Understanding Gap and Alignment",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "gap-and-alignment-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Gap and Alignment Style Rules",
          "description": "Standard syntax pattern for gap and alignment"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Gap and Alignment</h2>\n  <p>Exploring gap and alignment styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating gap and alignment.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Gap and Alignment */\n"
    },
    "keyTakeaways": [
      "Gap and Alignment controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "viewport-and-responsive-layouts": {
    "id": "viewport-and-responsive-layouts",
    "lessonNumber": 38,
    "title": "Viewport and Responsive Layouts",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Viewport and Responsive Layouts interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Viewport and Responsive Layouts",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Viewport and Responsive Layouts is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "viewport-and-responsive-layouts-concept",
        "heading": "Understanding Viewport and Responsive Layouts",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "viewport-and-responsive-layouts-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Viewport and Responsive Layouts Style Rules",
          "description": "Standard syntax pattern for viewport and responsive layouts"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Viewport and Responsive Layouts</h2>\n  <p>Exploring viewport and responsive layouts styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating viewport and responsive layouts.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Viewport and Responsive Layouts */\n"
    },
    "keyTakeaways": [
      "Viewport and Responsive Layouts controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "relative-units": {
    "id": "relative-units",
    "lessonNumber": 39,
    "title": "Relative Units",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Relative Units interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Relative Units",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Relative Units is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "relative-units-concept",
        "heading": "Understanding Relative Units",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "relative-units-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Relative Units Style Rules",
          "description": "Standard syntax pattern for relative units"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Relative Units</h2>\n  <p>Exploring relative units styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating relative units.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Relative Units */\n"
    },
    "keyTakeaways": [
      "Relative Units controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "media-queries": {
    "id": "media-queries",
    "lessonNumber": 40,
    "title": "Media Queries",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how Media Queries interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Media Queries",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Media Queries is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "media-queries-concept",
        "heading": "Understanding Media Queries",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "media-queries-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Media Queries Style Rules",
          "description": "Standard syntax pattern for media queries"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Media Queries</h2>\n  <p>Exploring media queries styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating media queries.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Media Queries */\n"
    },
    "keyTakeaways": [
      "Media Queries controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "mobile-first-design": {
    "id": "mobile-first-design",
    "lessonNumber": 41,
    "title": "Mobile-First Design",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Mobile-First Design interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Mobile-First Design",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Mobile-First Design is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "mobile-first-design-concept",
        "heading": "Understanding Mobile-First Design",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "mobile-first-design-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Mobile-First Design Style Rules",
          "description": "Standard syntax pattern for mobile-first design"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Mobile-First Design</h2>\n  <p>Exploring mobile-first design styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating mobile-first design.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Mobile-First Design */\n"
    },
    "keyTakeaways": [
      "Mobile-First Design controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "responsive-images": {
    "id": "responsive-images",
    "lessonNumber": 42,
    "title": "Responsive Images",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Responsive Images interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Responsive Images",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Responsive Images is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "responsive-images-concept",
        "heading": "Understanding Responsive Images",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "responsive-images-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Responsive Images Style Rules",
          "description": "Standard syntax pattern for responsive images"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Responsive Images</h2>\n  <p>Exploring responsive images styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating responsive images.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Responsive Images */\n"
    },
    "keyTakeaways": [
      "Responsive Images controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "responsive-navigation": {
    "id": "responsive-navigation",
    "lessonNumber": 43,
    "title": "Responsive Navigation",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Responsive Navigation interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Responsive Navigation",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Responsive Navigation is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "responsive-navigation-concept",
        "heading": "Understanding Responsive Navigation",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "responsive-navigation-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Responsive Navigation Style Rules",
          "description": "Standard syntax pattern for responsive navigation"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Responsive Navigation</h2>\n  <p>Exploring responsive navigation styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating responsive navigation.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Responsive Navigation */\n"
    },
    "keyTakeaways": [
      "Responsive Navigation controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "building-responsive-cards": {
    "id": "building-responsive-cards",
    "lessonNumber": 44,
    "title": "Building Responsive Cards",
    "moduleId": "css-module-5",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Building Responsive Cards interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Building Responsive Cards",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Building Responsive Cards is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "building-responsive-cards-concept",
        "heading": "Understanding Building Responsive Cards",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "building-responsive-cards-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Building Responsive Cards Style Rules",
          "description": "Standard syntax pattern for building responsive cards"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Building Responsive Cards</h2>\n  <p>Exploring building responsive cards styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating building responsive cards.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Building Responsive Cards */\n"
    },
    "keyTakeaways": [
      "Building Responsive Cards controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "pseudo-classes": {
    "id": "pseudo-classes",
    "lessonNumber": 45,
    "title": "Pseudo-Classes",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Pseudo-Classes interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Pseudo-Classes",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Pseudo-Classes is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "pseudo-classes-concept",
        "heading": "Understanding Pseudo-Classes",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "pseudo-classes-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Pseudo-Classes Style Rules",
          "description": "Standard syntax pattern for pseudo-classes"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Pseudo-Classes</h2>\n  <p>Exploring pseudo-classes styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating pseudo-classes.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Pseudo-Classes */\n"
    },
    "keyTakeaways": [
      "Pseudo-Classes controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "hover-and-focus-states": {
    "id": "hover-and-focus-states",
    "lessonNumber": 46,
    "title": "Hover and Focus States",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 7,
    "learningObjectives": [
      "Understand how Hover and Focus States interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Hover and Focus States",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Hover and Focus States is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "hover-and-focus-states-concept",
        "heading": "Understanding Hover and Focus States",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "hover-and-focus-states-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Hover and Focus States Style Rules",
          "description": "Standard syntax pattern for hover and focus states"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Hover and Focus States</h2>\n  <p>Exploring hover and focus states styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating hover and focus states.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Hover and Focus States */\n"
    },
    "keyTakeaways": [
      "Hover and Focus States controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "pseudo-elements": {
    "id": "pseudo-elements",
    "lessonNumber": 47,
    "title": "Pseudo-Elements",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Pseudo-Elements interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Pseudo-Elements",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Pseudo-Elements is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "pseudo-elements-concept",
        "heading": "Understanding Pseudo-Elements",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "pseudo-elements-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Pseudo-Elements Style Rules",
          "description": "Standard syntax pattern for pseudo-elements"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Pseudo-Elements</h2>\n  <p>Exploring pseudo-elements styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating pseudo-elements.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Pseudo-Elements */\n"
    },
    "keyTakeaways": [
      "Pseudo-Elements controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "css-transitions": {
    "id": "css-transitions",
    "lessonNumber": 48,
    "title": "CSS Transitions",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how CSS Transitions interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for CSS Transitions",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "CSS Transitions is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "css-transitions-concept",
        "heading": "Understanding CSS Transitions",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "css-transitions-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "CSS Transitions Style Rules",
          "description": "Standard syntax pattern for css transitions"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>CSS Transitions</h2>\n  <p>Exploring css transitions styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating css transitions.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: CSS Transitions */\n"
    },
    "keyTakeaways": [
      "CSS Transitions controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "transform": {
    "id": "transform",
    "lessonNumber": 49,
    "title": "Transform",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how Transform interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Transform",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Transform is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "transform-concept",
        "heading": "Understanding Transform",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "transform-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Transform Style Rules",
          "description": "Standard syntax pattern for transform"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Transform</h2>\n  <p>Exploring transform styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating transform.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Transform */\n"
    },
    "keyTakeaways": [
      "Transform controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "css-variables": {
    "id": "css-variables",
    "lessonNumber": 50,
    "title": "CSS Variables",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 8,
    "learningObjectives": [
      "Understand how CSS Variables interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for CSS Variables",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "CSS Variables is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "css-variables-concept",
        "heading": "Understanding CSS Variables",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "css-variables-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "CSS Variables Style Rules",
          "description": "Standard syntax pattern for css variables"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>CSS Variables</h2>\n  <p>Exploring css variables styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating css variables.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: CSS Variables */\n"
    },
    "keyTakeaways": [
      "CSS Variables controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "basic-animations": {
    "id": "basic-animations",
    "lessonNumber": 51,
    "title": "Basic Animations",
    "moduleId": "css-module-6",
    "courseId": "css",
    "estimatedMinutes": 9,
    "learningObjectives": [
      "Understand how Basic Animations interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Basic Animations",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Basic Animations is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "basic-animations-concept",
        "heading": "Understanding Basic Animations",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "basic-animations-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Basic Animations Style Rules",
          "description": "Standard syntax pattern for basic animations"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Basic Animations</h2>\n  <p>Exploring basic animations styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating basic animations.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Basic Animations */\n"
    },
    "keyTakeaways": [
      "Basic Animations controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "styled-profile-card": {
    "id": "styled-profile-card",
    "lessonNumber": 52,
    "title": "Styled Profile Card",
    "moduleId": "css-module-7",
    "courseId": "css",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Understand how Styled Profile Card interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Styled Profile Card",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Styled Profile Card is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "styled-profile-card-concept",
        "heading": "Understanding Styled Profile Card",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "styled-profile-card-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Styled Profile Card Style Rules",
          "description": "Standard syntax pattern for styled profile card"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Styled Profile Card</h2>\n  <p>Exploring styled profile card styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating styled profile card.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Styled Profile Card */\n"
    },
    "keyTakeaways": [
      "Styled Profile Card controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "responsive-navigation-bar": {
    "id": "responsive-navigation-bar",
    "lessonNumber": 53,
    "title": "Responsive Navigation Bar",
    "moduleId": "css-module-7",
    "courseId": "css",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Understand how Responsive Navigation Bar interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Responsive Navigation Bar",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Responsive Navigation Bar is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "responsive-navigation-bar-concept",
        "heading": "Understanding Responsive Navigation Bar",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "responsive-navigation-bar-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Responsive Navigation Bar Style Rules",
          "description": "Standard syntax pattern for responsive navigation bar"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Responsive Navigation Bar</h2>\n  <p>Exploring responsive navigation bar styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating responsive navigation bar.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Responsive Navigation Bar */\n"
    },
    "keyTakeaways": [
      "Responsive Navigation Bar controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "product-card": {
    "id": "product-card",
    "lessonNumber": 54,
    "title": "Product Card",
    "moduleId": "css-module-7",
    "courseId": "css",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Understand how Product Card interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Product Card",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Product Card is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "product-card-concept",
        "heading": "Understanding Product Card",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "product-card-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Product Card Style Rules",
          "description": "Standard syntax pattern for product card"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Product Card</h2>\n  <p>Exploring product card styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating product card.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Product Card */\n"
    },
    "keyTakeaways": [
      "Product Card controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "student-registration-form": {
    "id": "student-registration-form",
    "lessonNumber": 55,
    "title": "Student Registration Form",
    "moduleId": "css-module-7",
    "courseId": "css",
    "estimatedMinutes": 11,
    "learningObjectives": [
      "Understand how Student Registration Form interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Student Registration Form",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Student Registration Form is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "student-registration-form-concept",
        "heading": "Understanding Student Registration Form",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "student-registration-form-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Student Registration Form Style Rules",
          "description": "Standard syntax pattern for student registration form"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Student Registration Form</h2>\n  <p>Exploring student registration form styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating student registration form.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Student Registration Form */\n"
    },
    "keyTakeaways": [
      "Student Registration Form controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  },
  "responsive-landing-page": {
    "id": "responsive-landing-page",
    "lessonNumber": 56,
    "title": "Responsive Landing Page",
    "moduleId": "css-module-7",
    "courseId": "css",
    "estimatedMinutes": 12,
    "learningObjectives": [
      "Understand how Responsive Landing Page interacts with the CSS Cascade and Render Tree",
      "Master modern syntax rules and property declarations for Responsive Landing Page",
      "Identify best practices and avoid common specificity or layout bugs"
    ],
    "summary": "Responsive Landing Page is an essential tool in your CSS toolkit. Learn the underlying rendering mechanics, property values, and practical UI implementation.",
    "whyItExists": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.",
    "howItWorks": "The browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
    "whenToUse": [
      "Use CSS to control visual layout, spacing, typography, colors, and responsive adaptations across viewports",
      "Keep styling decoupled in external stylesheets or scoped component classes"
    ],
    "whenNotToUse": [
      "Do not use inline style attributes across large applications; use class selectors for maintainability",
      "Do not use !important to fix specificity conflicts; organize selectors with equal or proper specificity"
    ],
    "attributesTable": [
      {
        "name": "property",
        "type": "css-prop",
        "description": "The visual property being configured",
        "example": "color, margin, display"
      },
      {
        "name": "value",
        "type": "css-val",
        "description": "The unit, keyword, or color definition",
        "example": "16px, #2563eb, flex"
      }
    ],
    "comparisons": [
      {
        "title": "Maintainable Class Selector vs Brittle Inline Styles",
        "correct": ".card {\n  padding: 24px;\n  border-radius: 8px;\n  background: #ffffff;\n}",
        "incorrect": "<div style=\"padding: 24px; border-radius: 8px; background: #ffffff;\">...</div>",
        "explanation": "Inline styles cannot be shared across multiple elements, cannot respond to media queries or pseudo-classes (:hover), and have artificially high specificity (1-0-0-0)."
      }
    ],
    "sections": [
      {
        "id": "responsive-landing-page-concept",
        "heading": "Understanding Responsive Landing Page",
        "content": "Before CSS, web pages mixed presentation tags (<font>, <center>, bgcolor) into HTML. CSS was created by Håkon Wium Lie and Bert Bos in 1996 to separate content structure from visual design, enabling responsive layouts and reusable stylesheets.\n\nThe browser parses CSS text into the CSS Object Model (CSSOM). It calculates specificity and inheritance during the Cascade, combines the DOM and CSSOM into the Render Tree, and computes box geometry (Layout/Reflow) before drawing pixels (Paint).",
        "syntax": "selector {\n  property: value;\n}",
        "realWorldUsage": "Used across modern design systems, web applications, and responsive component libraries.",
        "bestPractices": [
          "Keep selectors specific enough to prevent unwanted leakage without over-specifying",
          "Use relative units like rem, em, and percentages for responsive typography and spacing",
          "Organize CSS declarations into logical groups (positioning, box model, typography, visual)"
        ],
        "commonMistakes": [
          "Using !important as a shortcut instead of understanding selector specificity",
          "Hardcoding pixel widths that cause horizontal overflow on mobile screens"
        ]
      },
      {
        "id": "responsive-landing-page-code-walkthrough",
        "heading": "Syntax & Practical Usage",
        "content": "Review the clean syntax pattern below to understand how these styles apply:",
        "codeSnippet": {
          "language": "css",
          "code": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
          "title": "Responsive Landing Page Style Rules",
          "description": "Standard syntax pattern for responsive landing page"
        },
        "expectedOutputNote": "Applies styling in the live preview when the CSS toggle is active."
      }
    ],
    "interactiveExample": {
      "html": "<div class=\"container\">\n  <h2>Responsive Landing Page</h2>\n  <p>Exploring responsive landing page styling rules.</p>\n</div>",
      "css": "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}",
      "explanation": "Toggle 'Apply CSS' in the playground to observe how these rules transform the raw HTML document."
    },
    "practiceTask": {
      "instruction": "Write CSS rules demonstrating responsive landing page.",
      "hint": "Apply styles to classes or element selectors as shown above.",
      "starterCode": "/* Practice: Responsive Landing Page */\n"
    },
    "keyTakeaways": [
      "Responsive Landing Page controls visual presentation independently of HTML markup",
      "Combine selectors, properties, and values following CSS standard specifications",
      "Verify rendered designs across multiple device widths and color modes"
    ]
  }
};
