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
  }
];

export function getQuiz(quizId) {
  return quizzes.find((q) => q.id === quizId);
}
