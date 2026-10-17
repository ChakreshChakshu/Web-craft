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
  },
  {
    id: 'exercise-flexbox-card',
    courseId: 'css',
    moduleId: 'css-module-3',
    title: 'Flexbox Centering & Alignment',
    task: 'Use Flexbox properties to center a content card both vertically and horizontally inside a container, and align card items.',
    difficulty: 'Beginner',
    starterCode: `<div class="container">
  <div class="card">
    <h2>Flexbox Mastery</h2>
    <p>Centered both horizontally and vertically.</p>
    <button class="btn">Explore Track</button>
  </div>
</div>`,
    starterCss: `/* 1. Turn .container into a flex container with 100vh height and center its card */
.container {
  min-height: 250px;
  background-color: #f1f5f9;
  /* Add display, justify-content, and align-items below */
}

/* 2. Turn .card into a flex column with gap */
.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  /* Add display, flex-direction, and gap below */
}

.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}`,
    solutionCss: `.container {
  min-height: 250px;
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}`,
    requirements: [
      {
        id: 'req-html-card',
        text: 'Contains .container with nested .card',
        tag: 'div',
        minCount: 2
      }
    ],
    cssRequirements: [
      {
        id: 'req-css-container-flex',
        text: '.container must have display: flex',
        selector: '.container',
        declarations: [{ property: 'display', expectedValue: 'flex' }]
      },
      {
        id: 'req-css-container-justify',
        text: '.container must have justify-content: center',
        selector: '.container',
        declarations: [{ property: 'justify-content', expectedValue: 'center' }]
      },
      {
        id: 'req-css-container-align',
        text: '.container must have align-items: center',
        selector: '.container',
        declarations: [{ property: 'align-items', expectedValue: 'center' }]
      },
      {
        id: 'req-css-card-direction',
        text: '.card must have display: flex and flex-direction: column',
        selector: '.card',
        declarations: [
          { property: 'display', expectedValue: 'flex' },
          { property: 'flex-direction', expectedValue: 'column' }
        ]
      }
    ],
    explanation: 'Setting display: flex with justify-content: center and align-items: center perfectly centers children along both the main and cross axes.'
  },
  {
    id: 'exercise-css-grid-gallery',
    courseId: 'css',
    moduleId: 'css-module-4',
    title: 'Responsive Grid Layout',
    task: 'Construct a responsive multi-column layout using CSS Grid with repeat, minmax, and gap properties.',
    difficulty: 'Intermediate',
    starterCode: `<div class="grid-gallery">
  <div class="gallery-item">Item 1</div>
  <div class="gallery-item">Item 2</div>
  <div class="gallery-item">Item 3</div>
  <div class="gallery-item">Item 4</div>
</div>`,
    starterCss: `.grid-gallery {
  /* Set display to grid */
  /* Use grid-template-columns with repeat and minmax (or auto-fit) */
  /* Add gap */
  padding: 16px;
}

.gallery-item {
  background: #3b82f6;
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}`,
    solutionCss: `.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  padding: 16px;
}

.gallery-item {
  background: #3b82f6;
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}`,
    requirements: [
      {
        id: 'req-html-grid',
        text: 'Contains .grid-gallery with at least 4 .gallery-item elements',
        tag: 'div',
        minCount: 5
      }
    ],
    cssRequirements: [
      {
        id: 'req-css-grid-display',
        text: '.grid-gallery must have display: grid',
        selector: '.grid-gallery',
        declarations: [{ property: 'display', expectedValue: 'grid' }]
      },
      {
        id: 'req-css-grid-cols',
        text: '.grid-gallery must configure grid-template-columns with repeat()',
        selector: '.grid-gallery',
        declarations: [{ property: 'grid-template-columns', expectedValue: /repeat/i }]
      },
      {
        id: 'req-css-grid-gap',
        text: '.grid-gallery must define gap spacing',
        selector: '.grid-gallery',
        declarations: [{ property: 'gap' }]
      }
    ],
    explanation: 'CSS Grid repeat(auto-fit, minmax(min, 1fr)) creates an intrinsically responsive layout without requiring manual media queries.'
  },
  {
    id: 'exercise-box-model',
    courseId: 'css',
    moduleId: 'css-module-2',
    title: 'Box Model & Padding Control',
    task: 'Apply universal box-sizing: border-box, and style the box element with padding, border, and border-radius.',
    difficulty: 'Beginner',
    starterCode: `<div class="box-preview">
  <div class="box">
    <h3>Box Model Component</h3>
    <p>Margins, borders, and padding properly configured.</p>
  </div>
</div>`,
    starterCss: `/* 1. Apply border-box sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Configure .box padding, margin, and border */
.box {
  background-color: #f8fafc;
  /* Add padding, margin, border, and border-radius below */
}`,
    solutionCss: `*, *::before, *::after {
  box-sizing: border-box;
}

.box {
  background-color: #f8fafc;
  padding: 20px;
  margin: 16px;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
}`,
    requirements: [
      {
        id: 'req-html-box',
        text: 'Contains .box element with heading and paragraph',
        tag: 'div',
        minCount: 2
      }
    ],
    cssRequirements: [
      {
        id: 'req-css-border-box',
        text: 'Apply box-sizing: border-box',
        rawPattern: /box-sizing\s*:\s*border-box/i
      },
      {
        id: 'req-css-box-padding',
        text: '.box must have padding defined',
        selector: '.box',
        declarations: [{ property: 'padding' }]
      },
      {
        id: 'req-css-box-radius',
        text: '.box must have border-radius for rounded corners',
        selector: '.box',
        declarations: [{ property: 'border-radius' }]
      }
    ],
    explanation: 'box-sizing: border-box includes padding and border within the elements total width and height, preventing overflow bugs.'
  },
  {
    id: 'exercise-responsive-nav',
    courseId: 'css',
    moduleId: 'css-module-7',
    title: 'Responsive Navigation with Media Queries',
    task: 'Create a navigation bar that stacks vertically on mobile screens using an @media query.',
    difficulty: 'Intermediate',
    starterCode: `<nav class="navbar">
  <div class="logo">BrandLogo</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,
    starterCss: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #0f172a;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
}

/* Add @media query below for max-width (e.g. 640px or 768px) */
/* Inside media query, set .navbar and .nav-links to flex-direction: column */
`,
    solutionCss: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #0f172a;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 16px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
}

@media (max-width: 640px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .nav-links {
    flex-direction: column;
    gap: 8px;
  }
}`,
    requirements: [
      {
        id: 'req-html-nav',
        text: 'Contains <nav> landmark with .nav-links',
        tag: 'nav',
        minCount: 1
      }
    ],
    cssRequirements: [
      {
        id: 'req-css-media-query',
        text: 'Define @media query with max-width',
        mediaQueryRequired: true,
        mediaCondition: 'max-width'
      },
      {
        id: 'req-css-flex-direction',
        text: 'Use flex-direction: column for stacked layout on mobile',
        rawPattern: /flex-direction\s*:\s*column/i
      }
    ],
    explanation: 'Media queries enable adaptive interfaces that switch from row-based layouts on wide screens to column-based stacks on compact displays.'
  },
  {
    id: 'exercise-hero-banner',
    courseId: 'css',
    moduleId: 'css-module-6',
    title: 'CSS Custom Properties (Variables)',
    task: 'Declare CSS custom properties in :root and consume them for theming the hero banner.',
    difficulty: 'Intermediate',
    starterCode: `<div class="hero">
  <h1 class="hero-title">Elevate Your Web Craft</h1>
  <p class="hero-subtitle">Interactive browser-based frontend education.</p>
  <button class="hero-cta">Get Started</button>
</div>`,
    starterCss: `/* 1. Define custom properties in :root */
:root {
  /* Define --primary-color and --hero-bg */
}

/* 2. Use var(--...) in the hero rules */
.hero {
  padding: 40px;
  text-align: center;
}

.hero-title {
  font-size: 28px;
}

.hero-cta {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}`,
    solutionCss: `:root {
  --primary-color: #2563eb;
  --hero-bg: #eff6ff;
}

.hero {
  background-color: var(--hero-bg);
  padding: 40px;
  text-align: center;
}

.hero-title {
  color: var(--primary-color);
  font-size: 28px;
}

.hero-cta {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}`,
    requirements: [
      {
        id: 'req-html-hero',
        text: 'Contains .hero with heading and button',
        tag: 'div',
        minCount: 1
      }
    ],
    cssRequirements: [
      {
        id: 'req-css-custom-props',
        text: 'Declare CSS variables using -- prefix in :root',
        rawPattern: /--[a-z0-9-_]+\s*:/i
      },
      {
        id: 'req-css-var-function',
        text: 'Consume CSS variables using the var() function',
        rawPattern: /var\(--[a-z0-9-_]+\)/i
      }
    ],
    explanation: 'CSS Custom Properties (:root { --var: value; }) provide dynamic, cascading variables that power scalable design tokens and themes.'
  }
];

export function getExercise(exerciseId) {
  return exercises.find((e) => e.id === exerciseId);
}

