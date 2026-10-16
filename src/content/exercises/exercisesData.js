export const exercises = [
  {
    id: 'exercise-personal-intro',
    courseId: 'html',
    moduleId: 'html-module-1',
    title: 'Personal Introduction Page',
    task: 'Construct a structured personal introduction page using foundational HTML elements.',
    difficulty: 'Beginner',
    requirements: [
      {
        id: 'req-h1',
        text: 'Include an <h1> element for the main profile name or page title',
        tag: 'h1',
        minCount: 1
      },
      {
        id: 'req-p-count',
        text: 'Include at least two <p> paragraph elements describing background and interests',
        tag: 'p',
        minCount: 2
      },
      {
        id: 'req-link',
        text: 'Include an <a> anchor link with a valid non-empty href attribute',
        tag: 'a',
        minCount: 1,
        attributesRequired: [{ name: 'href', notEmpty: true }]
      },
      {
        id: 'req-image',
        text: 'Include an <img> element with valid src and descriptive non-empty alt text',
        tag: 'img',
        minCount: 1,
        attributesRequired: [
          { name: 'src', notEmpty: true },
          { name: 'alt', notEmpty: true }
        ]
      }
    ],
    starterCode: `<!-- Personal Introduction Page -->
<div>
  <!-- Add h1, paragraphs, image with alt, and a link below -->
</div>`,
    solutionCode: `<div>
  <h1>Alex Morgan</h1>
  <p>I am a passionate software apprentice learning fullstack web development.</p>
  <p>In my spare time, I build open-source tools and write technical tutorials.</p>
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Portrait photo of Alex Morgan smiling outdoors">
  <p>
    Connect with me on <a href="https://github.com">GitHub</a>.
  </p>
</div>`,
    explanation: 'A standard personal bio requires an informative heading, descriptive paragraphs, an accessible image with alt text for screen readers, and at least one navigable hyperlink.'
  },
  {
    id: 'exercise-semantic-nav',
    courseId: 'html',
    moduleId: 'html-module-3',
    title: 'Accessible Navigation Menu',
    task: 'Create a semantic navigation header containing an unordered list of links.',
    difficulty: 'Beginner',
    requirements: [
      {
        id: 'req-nav',
        text: 'Wrap the menu within a semantic <nav> element',
        tag: 'nav',
        minCount: 1
      },
      {
        id: 'req-ul',
        text: 'Use an <ul> unordered list inside the navigation',
        tag: 'ul',
        minCount: 1
      },
      {
        id: 'req-li',
        text: 'Include at least three <li> list item elements',
        tag: 'li',
        minCount: 3
      },
      {
        id: 'req-links-count',
        text: 'Each navigation item must contain an <a> link with an href',
        tag: 'a',
        minCount: 3,
        attributesRequired: [{ name: 'href', notEmpty: true }]
      }
    ],
    starterCode: `<!-- Build a semantic navigation bar -->
<header>
  <!-- Place your <nav> with <ul>, <li>, and <a> items here -->
</header>`,
    solutionCode: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#courses">Courses</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
</header>`,
    explanation: 'Wrapping navigation links inside <nav><ul><li><a> ensures screen readers announce the landmark and the total number of items.'
  },
  {
    id: 'exercise-accessible-form',
    courseId: 'html',
    moduleId: 'html-module-6',
    title: 'Registration Form with Validation',
    task: 'Build an accessible student sign-up form with input labels, email validation, and a submit button.',
    difficulty: 'Intermediate',
    requirements: [
      {
        id: 'req-form',
        text: 'Enclose the inputs in a <form> element',
        tag: 'form',
        minCount: 1
      },
      {
        id: 'req-labels',
        text: 'Include at least two <label> elements with for attributes',
        tag: 'label',
        minCount: 2,
        attributesRequired: [{ name: 'for', notEmpty: true }]
      },
      {
        id: 'req-input-email',
        text: 'Include an <input> with type="email" and a required attribute',
        tag: 'input',
        minCount: 1,
        attributesRequired: [
          { name: 'type', pattern: /^email$/i },
          { name: 'required' }
        ]
      },
      {
        id: 'req-submit-btn',
        text: 'Include a <button> with type="submit"',
        tag: 'button',
        minCount: 1,
        attributesRequired: [{ name: 'type', pattern: /^submit$/i }]
      }
    ],
    starterCode: `<!-- Accessible Registration Form -->
<!-- Create a form with labels, text/email inputs, and submit button -->`,
    solutionCode: `<form action="/register" method="POST">
  <div>
    <label for="username">User Name</label>
    <input type="text" id="username" name="username" required>
  </div>
  <div>
    <label for="email-addr">Email Address</label>
    <input type="email" id="email-addr" name="email" required>
  </div>
  <button type="submit">Complete Registration</button>
</form>`,
    explanation: 'Labels with for attributes link directly to input IDs, allowing screen readers to announce field purposes and letting users click labels to focus fields.'
  },
  {
    id: 'exercise-data-table',
    courseId: 'html',
    moduleId: 'html-module-5',
    title: 'Data Table with Headers and Caption',
    task: 'Create an accessible HTML table that displays course modules with headers and a caption.',
    difficulty: 'Intermediate',
    requirements: [
      {
        id: 'req-table',
        text: 'Include a <table> element',
        tag: 'table',
        minCount: 1
      },
      {
        id: 'req-caption',
        text: 'Include a <caption> element explaining the table contents',
        tag: 'caption',
        minCount: 1
      },
      {
        id: 'req-th',
        text: 'Include at least two <th> column header cells',
        tag: 'th',
        minCount: 2
      },
      {
        id: 'req-td',
        text: 'Include at least four <td> data cells',
        tag: 'td',
        minCount: 4
      }
    ],
    starterCode: `<!-- Create an accessible data table -->\n`,
    solutionCode: `<table>
  <caption>Frontend Curriculum Schedule</caption>
  <thead>
    <tr>
      <th>Module Number</th>
      <th>Topic Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Module 1</td>
      <td>HTML Foundations</td>
    </tr>
    <tr>
      <td>Module 2</td>
      <td>Text & Formatting</td>
    </tr>
  </tbody>
</table>`,
    explanation: 'The caption provides context, while th cells define column or row headers recognized by assistive software.'
  },
  {
    id: 'exercise-semantic-article',
    courseId: 'html',
    moduleId: 'html-module-7',
    title: 'Semantic Blog Article',
    task: 'Structure a self-contained blog post utilizing HTML5 semantic landmark elements.',
    difficulty: 'Advanced',
    requirements: [
      {
        id: 'req-article',
        text: 'Wrap the post within an <article> element',
        tag: 'article',
        minCount: 1
      },
      {
        id: 'req-header',
        text: 'Include a <header> element containing the article title',
        tag: 'header',
        minCount: 1
      },
      {
        id: 'req-main-or-section',
        text: 'Include a <section> element dividing the content',
        tag: 'section',
        minCount: 1
      },
      {
        id: 'req-footer',
        text: 'Include a <footer> element for author credentials or date',
        tag: 'footer',
        minCount: 1
      }
    ],
    starterCode: `<!-- Construct an article with header, section, and footer -->\n`,
    solutionCode: `<article>
  <header>
    <h1>The Evolution of Web Standards</h1>
    <p>Published on October 2025 by DevTeam</p>
  </header>
  <section>
    <h2>Origins of HTML5</h2>
    <p>WHATWG and W3C united to define living standards for modern web applications.</p>
  </section>
  <footer>
    <p>Share this article or contact author@example.com</p>
  </footer>
</article>`,
    explanation: 'Semantic elements like <article>, <header>, <section>, and <footer> allow search engines and feed readers (RSS) to syndicate content accurately.'
  }
];

export function getExercise(exerciseId) {
  return exercises.find((e) => e.id === exerciseId);
}
