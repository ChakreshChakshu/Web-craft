export const quizzes = [
  {
    id: 'quiz-html-mod-1',
    courseId: 'html',
    moduleId: 'html-module-1',
    title: 'HTML Foundations Assessment',
    description: 'Test your understanding of basic document structure, DOCTYPE, elements, attributes, and headings.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q1',
        question: 'What does the <!DOCTYPE html> declaration do at the beginning of a file?',
        options: [
          'It links the external CSS stylesheet',
          'It instructs the browser to render the document in modern standards mode',
          'It creates a title in the browser tab',
          'It tells JavaScript which version of ECMAScript to execute'
        ],
        correctIndex: 1,
        explanation: '<!DOCTYPE html> is the HTML5 doctype preamble that prevents browsers from switching into legacy quirks mode.'
      },
      {
        id: 'q2',
        question: 'Which element is an empty (void) element that has no closing tag in HTML5?',
        options: [
          '<p>',
          '<img>',
          '<title>',
          '<section>'
        ],
        correctIndex: 1,
        explanation: 'The <img> tag is a void element; it cannot have children or a closing </img> tag.'
      },
      {
        id: 'q3',
        question: 'Why should you choose heading levels (h1 through h6) based on document outline rather than visual size?',
        options: [
          'Because browsers disable CSS on headings',
          'Because assistive technologies and search engines rely on headings for navigation hierarchy',
          'Because h1 tags cannot be styled with CSS',
          'Because h6 tags load faster than h1 tags'
        ],
        correctIndex: 1,
        explanation: 'Headings establish document semantics and keyboard/screen-reader navigation. Visual appearance should always be governed by CSS.'
      },
      {
        id: 'q4',
        question: 'Where should all visible UI elements be placed within an HTML document?',
        options: [
          'Inside the <head> tag',
          'Inside the <body> tag',
          'Directly before <!DOCTYPE html>',
          'Inside the <meta> tag'
        ],
        correctIndex: 1,
        explanation: 'All visible content rendered to the user belongs exclusively inside the <body> container.'
      },
      {
        id: 'q5',
        question: 'What is the correct syntax for an HTML comment?',
        options: [
          '// This is a comment',
          '/* This is a comment */',
          '<!-- This is a comment -->',
          '# This is a comment'
        ],
        correctIndex: 2,
        explanation: 'HTML comments use <!-- to open and --> to close.'
      }
    ]
  },
  {
    id: 'quiz-html-mod-2',
    courseId: 'html',
    moduleId: 'html-module-2',
    title: 'Text & Formatting Assessment',
    description: 'Evaluate your knowledge of strong importance, semantic emphasis, quotations, and character entities.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q2-1',
        question: 'What is the semantic difference between <strong> and <b>?',
        options: [
          'There is no difference; they are identical',
          '<strong> conveys urgent semantic importance; <b> merely draws visual attention without extra importance',
          '<b> is modern HTML5, while <strong> is deprecated',
          '<strong> only works in screen readers'
        ],
        correctIndex: 1,
        explanation: '<strong> represents high semantic importance (announced with altered tone by screen readers), whereas <b> is purely typographic offset.'
      },
      {
        id: 'q2-2',
        question: 'Which HTML entity correctly represents the ampersand character (&)?',
        options: [
          '&amp;',
          '&and;',
          '&percent;',
          '&char;'
        ],
        correctIndex: 0,
        explanation: '&amp; is the standardized named character entity for the ampersand symbol.'
      },
      {
        id: 'q2-3',
        question: 'Which element is intended for quoting extended multi-line passages from an external source?',
        options: [
          '<q>',
          '<blockquote>',
          '<cite>',
          '<em>'
        ],
        correctIndex: 1,
        explanation: '<blockquote> is used for long quotations set off from main text, while <q> is for inline quotes.'
      }
    ]
  },
  {
    id: 'quiz-html-mod-3',
    courseId: 'html',
    moduleId: 'html-module-3',
    title: 'Links & Navigation Assessment',
    description: 'Verify your understanding of hyperlinks, targets, security attributes, and navigation landmarks.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q3-1',
        question: 'When using target="_blank" to open links in a new window, what security attribute should you add?',
        options: [
          'rel="noopener noreferrer"',
          'security="safe"',
          'crossorigin="anonymous"',
          'sandbox="strict"'
        ],
        correctIndex: 0,
        explanation: 'rel="noopener noreferrer" prevents reverse tabnabbing by ensuring the new page cannot access window.opener.'
      },
      {
        id: 'q3-2',
        question: 'Which protocol prefix creates a link that opens the user default email client?',
        options: [
          'email://',
          'mailto:',
          'sendto:',
          'smtp:'
        ],
        correctIndex: 1,
        explanation: 'The mailto: scheme (e.g. href="mailto:name@domain.com") opens email client software.'
      },
      {
        id: 'q3-3',
        question: 'Why is descriptive link text like "Download 2025 Financial Report" better than "Click Here"?',
        options: [
          'It is required by CSS compilers',
          'It allows screen reader users navigating links out of context to know the destination',
          'Short link text causes network latency',
          'Browsers do not support two-word links'
        ],
        correctIndex: 1,
        explanation: 'Screen reader users can browse lists of links out of context; descriptive link labels provide clear intent.'
      }
    ]
  },
  {
    id: 'quiz-html-mod-6',
    courseId: 'html',
    moduleId: 'html-module-6',
    title: 'HTML Forms & Inputs Assessment',
    description: 'Test your understanding of form inputs, labels, validation constraints, and accessible button types.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q6-1',
        question: 'How do you explicitly bind a <label> to an <input> element?',
        options: [
          'By matching the label name attribute with the input class',
          'By matching the label for attribute with the input id attribute',
          'By giving them identical title attributes',
          'By placing them on the same line in source code'
        ],
        correctIndex: 1,
        explanation: 'The label\'s for attribute must match the input\'s id attribute.'
      },
      {
        id: 'q6-2',
        question: 'What is the default type attribute of a <button> element inside a <form>?',
        options: [
          'type="button"',
          'type="reset"',
          'type="submit"',
          'type="clickable"'
        ],
        correctIndex: 2,
        explanation: 'Inside a form, a button without an explicit type defaults to type="submit", triggering form submission.'
      },
      {
        id: 'q6-3',
        question: 'Which input type is specifically designed to provide mobile keyboards with the @ symbol and .com keys?',
        options: [
          '<input type="text">',
          '<input type="email">',
          '<input type="url">',
          '<input type="search">'
        ],
        correctIndex: 1,
        explanation: 'type="email" optimizes the on-screen keyboard on smartphones and provides built-in browser format validation.'
      }
    ]
  },
  {
    id: 'quiz-css-mod-1',
    courseId: 'css',
    moduleId: 'css-module-1',
    title: 'CSS Selectors & Specificity Assessment',
    description: 'Test your understanding of the CSS cascade, specificity weight calculations, inheritance, and selector types.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q-css-1',
        question: 'Which of the following selectors carries the highest specificity weight in CSS?',
        options: [
          'header nav a',
          '.nav-link:hover',
          '#primary-navigation',
          'div.menu > ul > li'
        ],
        correctIndex: 2,
        explanation: 'An ID selector (#id) has a specificity weight of (1, 0, 0), beating any combination of classes, pseudo-classes, or tag elements.'
      },
      {
        id: 'q-css-2',
        question: 'What does the universal selector * match in a stylesheet?',
        options: [
          'Only the root <html> element',
          'Every single element in the DOM tree',
          'Only elements that have no class applied',
          'Only direct children of the <body>'
        ],
        correctIndex: 1,
        explanation: 'The * universal selector matches all elements of any type in the document.'
      },
      {
        id: 'q-css-3',
        question: 'Which CSS property is inherited by default from parent elements to child elements?',
        options: [
          'padding',
          'border',
          'color',
          'margin'
        ],
        correctIndex: 2,
        explanation: 'Typography and text color properties (such as color, font-family, font-size) naturally cascade and inherit, whereas box-model dimensions do not.'
      }
    ]
  },
  {
    id: 'quiz-css-mod-2',
    courseId: 'css',
    moduleId: 'css-module-2',
    title: 'CSS Box Model & Positioning Assessment',
    description: 'Verify your mastery over margins, padding, box-sizing: border-box, and standard CSS position schemes.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q-css-2-1',
        question: 'When an element has box-sizing: border-box, what elements are included inside the declared width and height?',
        options: [
          'Only the content box',
          'Content, padding, and border',
          'Content, padding, border, and margin',
          'Padding and margin only'
        ],
        correctIndex: 1,
        explanation: 'border-box includes the element content, padding, and border within the specified width/height dimensions. Margins remain external.'
      },
      {
        id: 'q-css-2-2',
        question: 'What happens when you declare position: absolute on an element without any positioned ancestor?',
        options: [
          'The element is hidden from display',
          'The element positions itself relative to the initial containing block (viewport/html)',
          'The element behaves identical to position: static',
          'The element centers automatically'
        ],
        correctIndex: 1,
        explanation: 'position: absolute searches up the DOM tree for the nearest ancestor with a position other than static; if none exists, it positions relative to the viewport/document.'
      },
      {
        id: 'q-css-2-3',
        question: 'Which position value acts like relative until a scroll threshold is met, then behaves like fixed?',
        options: [
          'position: sticky',
          'position: static',
          'position: absolute',
          'position: dynamic'
        ],
        correctIndex: 0,
        explanation: 'position: sticky toggles between relative and fixed positioning based on the user scroll offset inside its parent scrolling container.'
      }
    ]
  },
  {
    id: 'quiz-css-mod-3',
    courseId: 'css',
    moduleId: 'css-module-3',
    title: 'Flexbox Layout Mastery Assessment',
    description: 'Demonstrate your command of the Flexbox axes, alignment properties, and flex item distribution.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q-css-3-1',
        question: 'In a default flex container (flex-direction: row), which property aligns flex items along the vertical cross axis?',
        options: [
          'justify-content',
          'align-items',
          'flex-wrap',
          'align-content'
        ],
        correctIndex: 1,
        explanation: 'justify-content controls alignment along the main axis (horizontal in row mode), while align-items governs alignment along the cross axis (vertical in row mode).'
      },
      {
        id: 'q-css-3-2',
        question: 'What is the shorthand syntax flex: 1 1 auto equivalent to?',
        options: [
          'flex-grow: 1, flex-shrink: 1, flex-basis: auto',
          'flex-order: 1, flex-direction: 1, flex-wrap: auto',
          'flex-gap: 1px, flex-margin: 1px, flex-width: auto',
          'flex-basis: 1, flex-grow: 1, flex-align: auto'
        ],
        correctIndex: 0,
        explanation: 'The flex shorthand represents flex-grow, flex-shrink, and flex-basis in order.'
      },
      {
        id: 'q-css-3-3',
        question: 'Which property prevents flex items from shrinking below their content size when space is restricted?',
        options: [
          'flex-shrink: 0',
          'flex-grow: 0',
          'flex-basis: 0',
          'flex-wrap: nowrap'
        ],
        correctIndex: 0,
        explanation: 'Setting flex-shrink: 0 ensures an item retains its declared or intrinsic width and refuses to compress.'
      }
    ]
  },
  {
    id: 'quiz-css-mod-4',
    courseId: 'css',
    moduleId: 'css-module-4',
    title: 'CSS Grid Architecture Assessment',
    description: 'Test your understanding of two-dimensional CSS Grid layouts, fractional units, and responsive templates.',
    passingScorePercent: 75,
    questions: [
      {
        id: 'q-css-4-1',
        question: 'What is the primary difference between CSS Grid and Flexbox?',
        options: [
          'Grid is only for typography while Flexbox is for layout',
          'Grid is inherently two-dimensional (rows AND columns simultaneously), while Flexbox is one-dimensional (row OR column)',
          'Flexbox does not support the gap property',
          'Grid cannot be nested inside another Grid'
        ],
        correctIndex: 1,
        explanation: 'Grid is designed for two-dimensional layouts where alignment occurs across rows and columns simultaneously. Flexbox excels at one-dimensional linear streams.'
      },
      {
        id: 'q-css-4-2',
        question: 'What does the fr unit represent in CSS Grid track definitions?',
        options: [
          'Frame rate per second',
          'Fixed resolution units measured in physical millimeters',
          'A fraction of the available free space in the grid container',
          'Font-relative ratio calculated from rem units'
        ],
        correctIndex: 2,
        explanation: 'The fr unit represents a fraction of the unused free space remaining in the grid container after fixed tracks are allocated.'
      },
      {
        id: 'q-css-4-3',
        question: 'What does grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) achieve?',
        options: [
          'Creates exactly 200 columns',
          'Creates a fluid responsive grid where columns automatically wrap and fill available space without media queries',
          'Limits the grid width to 200px maximum',
          'Centers a single column in the screen'
        ],
        correctIndex: 1,
        explanation: 'repeat(auto-fit, minmax(200px, 1fr)) is the classic responsive grid pattern: columns shrink to 200px, wrap when needed, and stretch evenly to fill remaining space.'
      }
    ]
  },
  {
    id: 'quiz-css-mod-5',
    courseId: 'css',
    moduleId: 'css-module-7',
    title: 'Responsive Web Design & Units Assessment',
    description: 'Demonstrate your knowledge of viewport meta tags, media query breakpoints, and modern responsive CSS functions.',
    passingScorePercent: 70,
    questions: [
      {
        id: 'q-css-5-1',
        question: 'Why is <meta name="viewport" content="width=device-width, initial-scale=1.0"> required for responsive CSS?',
        options: [
          'It tells the browser to download mobile stylesheet files',
          'It prevents mobile browsers from rendering at desktop 980px zoom and matches layout width to screen pixels',
          'It enables CSS Flexbox on iOS devices',
          'It speeds up JavaScript execution on mobile'
        ],
        correctIndex: 1,
        explanation: 'Without the viewport meta tag, mobile browsers default to rendering pages in a desktop virtual viewport (typically 980px wide) and scaling it down.'
      },
      {
        id: 'q-css-5-2',
        question: 'What is the advantage of using rem units over px for typography and spacing?',
        options: [
          'rem units render faster on GPU',
          'rem units scale respect user browser font size preferences for accessibility',
          'rem units cannot be overridden by CSS',
          'rem units work only inside media queries'
        ],
        correctIndex: 1,
        explanation: 'rem units are relative to the root font size. If a visually impaired user increases their browser default font size from 16px to 24px, rem-based layouts scale proportionally.'
      },
      {
        id: 'q-css-5-3',
        question: 'What does the CSS function clamp(1rem, 2.5vw, 2.5rem) calculate?',
        options: [
          'It produces an animated transition between 1rem and 2.5rem',
          'It clamps the value between a minimum of 1rem, a preferred fluid scale of 2.5vw, and a maximum of 2.5rem',
          'It averages the three values together',
          'It selects the smallest value among the three'
        ],
        correctIndex: 1,
        explanation: 'clamp(min, preferred, max) provides fluid responsive sizing that scales dynamically with viewport width while respecting strict minimum and maximum boundaries.'
      }
    ]
  }
];

export function getQuiz(quizId) {
  return quizzes.find((q) => q.id === quizId);
}

