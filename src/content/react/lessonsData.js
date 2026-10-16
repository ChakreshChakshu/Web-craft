export const reactLessons = {
  'what-is-react-and-virtual-dom': {
    id: 'what-is-react-and-virtual-dom',
    lessonNumber: 1,
    title: 'What is React & The Virtual DOM',
    moduleId: 'react-module-1',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Understand the component-driven paradigm of React',
      'Explain how the Virtual DOM enables high-performance reconciliation (Fiber)',
      'Understand declarative versus imperative UI updates',
      'Learn how React synchronizes the real browser DOM with Virtual DOM trees'
    ],
    summary: 'React is a declarative, component-based JavaScript library for building user interfaces. It uses an in-memory Virtual DOM to minimize costly real DOM manipulations.',
    whyItExists: 'Directly querying and mutating the real DOM with vanilla JavaScript (document.getElementById, innerHTML) is computationally slow and error-prone as applications scale.',
    howItWorks: 'When component state changes, React renders a new lightweight Virtual DOM tree in memory, diffs it against the previous tree (reconciliation algorithm), and calculates the minimal set of real DOM operations to apply.',
    whenToUse: [
      'Building dynamic single-page web applications (SPAs) and interactive dashboards',
      'Creating reusable UI component design systems',
      'Managing complex UI state that updates frequently'
    ],
    whenNotToUse: [
      'For simple static landing pages with zero client-side interactivity, vanilla HTML/CSS is lighter'
    ],
    sections: [
      {
        id: 'vdom-diffing',
        heading: 'Declarative UI & The Reconciliation Process',
        content: 'With React, you describe what the UI should look like for a given state, rather than step-by-step manipulating elements.',
        codeSnippet: {
          language: 'jsx',
          title: 'Declarative Component Example',
          code: `// Declarative: You describe the desired state
function WelcomeBadge({ username, isOnline }) {
  return (
    <div className="badge">
      <h2>Hello, {username}!</h2>
      <span className={isOnline ? 'status-online' : 'status-offline'}>
        {isOnline ? 'Active Now' : 'Offline'}
      </span>
    </div>
  );
}`,
          description: 'React updates the real DOM automatically whenever props or state change.'
        },
        bestPractices: [
          'Think in components: break your user interface into small, single-responsibility units',
          'Keep components pure: given the same inputs (props), they should return the same JSX'
        ],
        commonMistakes: [
          'Directly manipulating the real DOM with document.querySelector inside React components'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>React Component Simulation</h3>
<div id="vdom-root" style="padding: 16px; border: 1px solid #3b82f6; border-radius: 8px; background: #0f172a; color: #93c5fd; font-family: sans-serif;">
  <h4 style="margin: 0 0 8px 0;">Virtual DOM State</h4>
  <p id="vdom-status" style="margin: 0; font-size: 14px;">Rendered via Virtual DOM diffing.</p>
</div>`,
      explanation: 'React components return description objects (Virtual DOM) that get efficiently applied to the screen.'
    },
    practiceTask: {
      instruction: 'Define a simple functional React component Header that renders an <h1> with the text "Welcome to React".',
      hint: 'function Header() { return <h1>Welcome to React</h1>; }',
      starterCode: `function Header() {\n  // Return JSX heading\n}\n`
    },
    keyTakeaways: [
      'React uses a declarative component model to describe UI state.',
      'The Virtual DOM minimizes slow browser DOM recalculations via diffing.',
      'Components are reusable, self-contained building blocks.'
    ]
  },

  'jsx-syntax-and-rules': {
    id: 'jsx-syntax-and-rules',
    lessonNumber: 2,
    title: 'JSX Syntax & Rules',
    moduleId: 'react-module-1',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Understand how JSX compiles to React.createElement() calls',
      'Follow the three essential rules of JSX (single parent/fragments, close tags, camelCase)',
      'Embed JavaScript expressions inside JSX using curly braces {}'
    ],
    summary: 'JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files, providing compile-time type safety and full language power.',
    whyItExists: 'Separating markup and logic into separate files (HTML and JS) created artificial separation. In modern UI development, rendering logic and markup are inherently coupled.',
    howItWorks: 'Babel/Vite transpiles JSX like <h1 className="title">Hi</h1> into React.createElement("h1", { className: "title" }, "Hi").',
    whenToUse: [
      'Everywhere when authoring React components',
      'Embedding dynamic variables, ternary conditions, and formatted text directly inside templates'
    ],
    whenNotToUse: [
      'JSX cannot contain raw if/else statements or for loops directly inside return tags (use ternary and map instead)'
    ],
    sections: [
      {
        id: 'jsx-rules',
        heading: 'The Core Rules of JSX',
        content: '1. Single Root Element (use Fragments <>...</> if needed).\n2. Close All Tags (<img />, <input />, <br />).\n3. camelCase Attributes (className instead of class, htmlFor instead of for).',
        codeSnippet: {
          language: 'jsx',
          title: 'JSX Rules in Practice',
          code: `function UserCard({ name, avatarUrl }) {
  // Use React Fragment <>...</> to group siblings without extra DOM wrappers
  return (
    <>
      <div className="user-card">
        {/* All tags must close explicitly */}
        <img src={avatarUrl} alt={name} className="avatar-img" />
        <h3 style={{ color: '#2563eb', fontWeight: 600 }}>{name.toUpperCase()}</h3>
      </div>
    </>
  );
}`,
          description: 'Inline styles in JSX require a JavaScript object: style={{ color: "red" }}.'
        },
        bestPractices: [
          'Use React Fragments (<> ... </>) to avoid unnecessary <div> wrapper soup in the DOM',
          'Use className instead of HTML class attribute'
        ],
        commonMistakes: [
          'Writing class instead of className',
          'Forgetting to close self-closing tags like <input> or <img>'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>JSX Expression Evaluation</h3>
<div id="output" style="font-family: sans-serif; padding: 12px; background: #1e293b; color: #38bdf8; border-radius: 8px;">
  <strong>User:</strong> Jane Doe (Admin: <span style="color: #4ade80;">Yes</span>)
</div>`,
      explanation: 'Expressions inside curly braces evaluate directly to produce dynamic markup.'
    },
    practiceTask: {
      instruction: 'Create a component Profile with a fragment containing an <h2> and an <img /> with a self-closing tag and className="avatar".',
      hint: 'return <><h2>Profile</h2><img className="avatar" src="..." alt="User" /></>;',
      starterCode: `function Profile() {\n  return (\n    // Add Fragment with h2 and img\n  );\n}\n`
    },
    keyTakeaways: [
      'JSX looks like HTML but possesses the full power of JavaScript.',
      'Must return a single root element (or Fragment <>...</>).',
      'HTML attributes become camelCase (className, tabIndex, onClick).'
    ]
  },

  'functional-components-and-props': {
    id: 'functional-components-and-props',
    lessonNumber: 3,
    title: 'Functional Components & Props',
    moduleId: 'react-module-1',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Write reusable functional components',
      'Pass data down using props and destructure them cleanly',
      'Use the special children prop for component composition',
      'Assign default prop values'
    ],
    summary: 'Components accept arbitrary inputs called props and return React elements describing what should appear on screen.',
    whyItExists: 'Props enable component reusability. A single Button or Card component can be customized for hundreds of different use cases by passing different props.',
    howItWorks: 'React gathers all attributes passed to a JSX tag into a single JavaScript object called props and passes it as the first argument to the component function.',
    whenToUse: [
      'Passing configuration, data, labels, and event handler callbacks from parent to child',
      'Building wrapper components (Card, Modal, Layout) that wrap nested markup via children'
    ],
    whenNotToUse: [
      'Props are read-only (immutable)! Never mutate a prop inside a child component'
    ],
    sections: [
      {
        id: 'props-composition',
        heading: 'Passing & Destructuring Props',
        content: 'Learn how to pass strings, numbers, objects, and nested children to components.',
        codeSnippet: {
          language: 'jsx',
          title: 'Component with Props and Children',
          code: `// Button component accepting props with defaults
function Button({ variant = 'primary', size = 'md', onClick, children }) {
  const baseClasses = 'btn font-semibold rounded-lg transition-colors';
  const variantClass = variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-800';

  return (
    <button onClick={onClick} className={\`\${baseClasses} \${variantClass}\`}>
      {/* 'children' renders whatever is placed between opening and closing tags */}
      {children}
    </button>
  );
}

// Usage in parent component
function App() {
  return (
    <Button variant="primary" onClick={() => alert('Clicked!')}>
      <span>🚀 Get Started</span>
    </Button>
  );
}`,
          description: 'The children prop allows components to serve as generic wrappers.'
        },
        bestPractices: [
          'Destructure props directly in the component signature for readability',
          'Use the children prop to build composable container elements'
        ],
        commonMistakes: [
          'Attempting to reassign or mutate props directly (props.title = "New")'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Props Composition Simulation</h3>
<div style="display: flex; gap: 8px;">
  <button style="padding: 6px 12px; background: #2563eb; color: white; border: none; border-radius: 6px;">Primary</button>
  <button style="padding: 6px 12px; background: #e2e8f0; color: #1e293b; border: none; border-radius: 6px;">Secondary</button>
</div>`,
      explanation: 'The same component styled conditionally depending on the variant prop received.'
    },
    practiceTask: {
      instruction: 'Create an Alert component that accepts "type" and "message" props and renders a div with the message.',
      hint: 'function Alert({ type, message }) { return <div className={`alert-${type}`}>{message}</div>; }',
      starterCode: `function Alert({ type, message }) {\n  // Return alert div\n}\n`
    },
    keyTakeaways: [
      'Props are read-only inputs passed from parent to child components.',
      'Use destructuring with defaults for clean, readable component APIs.',
      'The children prop renders nested elements inside container components.'
    ]
  },

  'conditional-rendering-patterns': {
    id: 'conditional-rendering-patterns',
    lessonNumber: 4,
    title: 'Conditional Rendering Patterns',
    moduleId: 'react-module-1',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Render different JSX based on conditions using ternary operators',
      'Use short-circuit evaluation (&&) for inline conditionals safely',
      'Use early returns for loading, error, and empty states',
      'Avoid the common "0 rendered to screen" bug with &&'
    ],
    summary: 'In React, conditional rendering works using standard JavaScript operators: if statements, ternary operators (? :), and logical AND (&&).',
    whyItExists: 'User interfaces constantly change based on authentication status, network loading states, empty lists, and error feedback.',
    howItWorks: 'React ignores boolean false, null, and undefined values when rendering, meaning elements evaluating to false simply disappear from the DOM.',
    whenToUse: [
      'Showing spinners while data is loading: if (loading) return <Spinner />;',
      'Switching between logged-in user profile and "Sign In" buttons',
      'Toggling tooltips, dropdowns, and modals'
    ],
    whenNotToUse: [
      'Do not use count && <Badge /> when count can be 0 (0 is falsy, but renders "0" to the screen!)'
    ],
    sections: [
      {
        id: 'conditional-patterns',
        heading: 'Common Conditional Patterns',
        content: 'Master ternary operators and short-circuit evaluation in JSX.',
        codeSnippet: {
          language: 'jsx',
          title: 'Conditional Rendering in React',
          code: `function Dashboard({ user, isLoading, messagesCount }) {
  // 1. Early Return for Loading State
  if (isLoading) {
    return <div className="spinner">Loading dashboard...</div>;
  }

  return (
    <div>
      {/* 2. Ternary Operator (if / else) */}
      {user ? (
        <h1>Welcome back, {user.name}!</h1>
      ) : (
        <button>Sign In</button>
      )}

      {/* 3. Logical AND (render if condition is true) */}
      {/* SAFE: Use boolean comparison count > 0 rather than raw number! */}
      {messagesCount > 0 && (
        <span className="badge">{messagesCount} New Messages</span>
      )}
    </div>
  );
}`,
          description: 'Always use explicit boolean checks like count > 0 with &&.'
        },
        bestPractices: [
          'Use early returns for major screen state branches (Loading, Error, 404)',
          'Use ternary (? :) for mutually exclusive UI states (Login / Logout)'
        ],
        commonMistakes: [
          'Using items.length && <List /> when length is 0 (renders a rogue "0" on the webpage)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Conditional Badge Render</h3>
<div id="output" style="font-family: sans-serif; padding: 12px; background: #0f172a; color: #f8fafc; border-radius: 8px;">
  Inbox <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">5 New</span>
</div>`,
      explanation: 'The notification badge renders conditionally only when unread messages exist.'
    },
    practiceTask: {
      instruction: 'Write a component StatusIndicator that accepts isOnline prop and renders "Online" in green or "Offline" in red using a ternary operator.',
      hint: 'return <span>{isOnline ? "Online" : "Offline"}</span>;',
      starterCode: `function StatusIndicator({ isOnline }) {\n  // Return ternary conditional JSX\n}\n`
    },
    keyTakeaways: [
      'Ternary (? :) is best for choosing between two alternate UI components.',
      'Logical AND (&&) conditionally includes an element if the expression is truthy.',
      'Always cast numbers to booleans (count > 0 && ...) to avoid printing 0.'
    ]
  },

  'rendering-lists-and-the-key-prop': {
    id: 'rendering-lists-and-the-key-prop',
    lessonNumber: 5,
    title: 'Rendering Lists & The Key Prop',
    moduleId: 'react-module-1',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Transform array data into JSX lists using Array.prototype.map()',
      'Understand why unique key props are mandatory for list items',
      'Avoid using array index as key when list order can change',
      'Understand reconciliation performance in list diffing'
    ],
    summary: 'Lists of data are rendered in React by mapping over arrays and returning JSX elements, each equipped with a unique key prop.',
    whyItExists: 'When list items are added, removed, or reordered, React needs an identifier to know which DOM elements to keep, update, or destroy without re-rendering the whole list.',
    howItWorks: 'The key prop gives elements a stable identity across renders. During reconciliation, React matches keys in the new Virtual DOM with keys in the old Virtual DOM.',
    whenToUse: [
      'Rendering dynamic feeds, tables, menu options, and search results',
      'Using unique database IDs (e.g. item.id) as the key value'
    ],
    whenNotToUse: [
      'Avoid using array indices (key={index}) if items can be sorted, filtered, or deleted (causes state mismatch bugs)'
    ],
    sections: [
      {
        id: 'list-rendering',
        heading: 'Mapping Lists with Keys',
        content: 'Learn how to map over arrays and provide stable keys.',
        codeSnippet: {
          language: 'jsx',
          title: 'List Mapping Example',
          code: `const courses = [
  { id: 'c1', title: 'HTML Foundations', category: 'Frontend' },
  { id: 'c2', title: 'CSS Mastery', category: 'Styling' },
  { id: 'c3', title: 'Modern JavaScript', category: 'Programming' }
];

function CourseList() {
  return (
    <ul className="course-list">
      {courses.map((course) => (
        // Key MUST be on the outermost element returned by map!
        <li key={course.id} className="course-item">
          <h4>{course.title}</h4>
          <span className="badge">{course.category}</span>
        </li>
      ))}
    </ul>
  );
}`,
          description: 'The key prop must be specified on the outermost element in the map callback.'
        },
        bestPractices: [
          'Always use stable, unique IDs from your data (e.g., item.id, item.uuid) as keys',
          'Place the key prop on the root JSX element returned from the map function'
        ],
        commonMistakes: [
          'Using Math.random() as key, which forces React to recreate the entire DOM on every render',
          'Using array index as key when list items can be deleted or re-ordered'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>List Rendering with Keys</h3>
<ul style="padding-left: 20px; font-family: sans-serif; color: #cbd5e1;">
  <li style="margin-bottom: 4px;">🚀 JavaScript ES6 (key: "js")</li>
  <li style="margin-bottom: 4px;">⚛️ React.js (key: "react")</li>
  <li style="margin-bottom: 4px;">🟢 Node.js (key: "node")</li>
</ul>`,
      explanation: 'Stable keys allow React to track which items change without repainting unchanged items.'
    },
    practiceTask: {
      instruction: 'Write a component UserList that maps over an array of users [{ id, name }] and renders an <li> for each user with their name and id as key.',
      hint: 'users.map(u => <li key={u.id}>{u.name}</li>)',
      starterCode: `function UserList({ users }) {\n  return (\n    <ul>\n      {/* Map users with keys */}\n    </ul>\n  );\n}\n`
    },
    keyTakeaways: [
      'Render lists by calling array.map() and returning JSX elements.',
      'Every item in a rendered list requires a unique, stable key prop.',
      'Keys help React differentiate which items changed, were added, or were removed.'
    ]
  },

  'usestate-and-state-immutability': {
    id: 'usestate-and-state-immutability',
    lessonNumber: 6,
    title: 'useState Hook & State Immutability',
    moduleId: 'react-module-2',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Declare local component state using the useState hook',
      'Update state with direct values and functional updater callbacks',
      'Follow immutability rules when updating object and array state',
      'Understand asynchronous state batching in React 18+'
    ],
    summary: 'The useState hook lets functional components declare state variables that persist across renders and trigger UI updates when modified.',
    whyItExists: 'Ordinary variables declared in functions disappear as soon as the function returns. useState allows components to "remember" user interactions.',
    howItWorks: 'Calling useState(initial) returns [currentState, setStateFunction]. Calling setState schedules a re-render. React compares new state with old state via Object.is.',
    whenToUse: [
      'Managing user inputs, toggle switches, form fields, and modal visibility',
      'Storing fetched data, filters, and active tab selections'
    ],
    whenNotToUse: [
      'Do not put values in state if they can be calculated on-the-fly from existing props or state'
    ],
    sections: [
      {
        id: 'usestate-usage',
        heading: 'State Updates & Immutability Rules',
        content: 'Never mutate state directly! Always create fresh copies using spread operators.',
        codeSnippet: {
          language: 'jsx',
          title: 'useState Patterns',
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alex', role: 'student' });
  const [items, setItems] = useState(['HTML', 'CSS']);

  // Functional update: Safe when new state depends on previous state!
  const increment = () => {
    setCount(prev => prev + 1);
  };

  // Updating an object: Must spread previous properties!
  const updateRole = (newRole) => {
    setUser(prev => ({ ...prev, role: newRole }));
  };

  // Updating an array: Must return fresh array!
  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  return <button onClick={increment}>Count: {count}</button>;
}`,
          description: 'Always use the spread operator to create new object/array copies for state.'
        },
        bestPractices: [
          'Use functional updates setCount(prev => prev + 1) when new state relies on previous state',
          'Treat state as read-only; never do state.push() or state.name = "new"'
        ],
        commonMistakes: [
          'Mutating state directly (e.g. items.push(newItem); setItems(items);) which skips re-rendering because object reference is unchanged!'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>React useState Counter</h3>
<div style="display: flex; align-items: center; gap: 12px;">
  <button id="decBtn" style="padding: 6px 12px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">-1</button>
  <span id="counterVal" style="font-size: 18px; font-weight: bold; font-family: monospace;">0</span>
  <button id="incBtn" style="padding: 6px 12px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer;">+1</button>
</div>
<script>
  let c = 0;
  const update = () => document.getElementById('counterVal').innerText = c;
  document.getElementById('incBtn').onclick = () => { c++; update(); };
  document.getElementById('decBtn').onclick = () => { c--; update(); };
</script>`,
      explanation: 'Calling setState updates the internal value and triggers a component re-render.'
    },
    practiceTask: {
      instruction: 'Create a component Toggle that manages an isOpen boolean state with useState and toggles it on button click.',
      hint: 'const [isOpen, setIsOpen] = useState(false); <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>',
      starterCode: `import { useState } from 'react';\n\nfunction Toggle() {\n  // Implement isOpen state and toggle button\n}\n`
    },
    keyTakeaways: [
      'useState returns a tuple: [stateValue, stateUpdaterFunction].',
      'Never mutate state directly: always return a fresh copy using spread (...).',
      'Use functional state updates (prev => prev + 1) for reliable concurrent updates.'
    ]
  },

  'useeffect-lifecycle-and-cleanups': {
    id: 'useeffect-lifecycle-and-cleanups',
    lessonNumber: 7,
    title: 'useEffect Hook: Lifecycles & Cleanups',
    moduleId: 'react-module-2',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Synchronize components with external systems (APIs, timers, event listeners)',
      'Master the dependency array rules: no dependencies, empty array [], and specific dependencies [prop]',
      'Implement cleanup functions to prevent memory leaks',
      'Avoid infinite re-render loops with useEffect'
    ],
    summary: 'The useEffect hook lets you perform side effects in functional components, such as data fetching, subscriptions, DOM mutations, and timers.',
    whyItExists: 'Rendering should remain pure with no side effects. Side effects must occur after React updates the DOM to prevent race conditions and performance degradation.',
    howItWorks: 'useEffect(callback, dependencies) runs its callback after the component renders. If dependencies change between renders, React runs the cleanup function from the previous render, then runs the effect again.',
    whenToUse: [
      'Fetching data from a backend server when a component mounts',
      'Setting up window resize, scroll, or keyboard event listeners',
      'Managing intervals and timers (setInterval, setTimeout)'
    ],
    whenNotToUse: [
      'Do not use useEffect to calculate state from other state (calculate it during rendering instead)'
    ],
    sections: [
      {
        id: 'useeffect-patterns',
        heading: 'Dependency Array & Cleanup Functions',
        content: 'Understand when the effect runs and how cleanup functions prevent memory leaks.',
        codeSnippet: {
          language: 'jsx',
          title: 'useEffect Patterns',
          code: `import { useState, useEffect } from 'react';

function Timer({ isRunning }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    // Side effect: Setup interval
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function: Runs when component unmounts or before re-running!
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]); // Re-runs effect only when isRunning changes!

  return <div>Elapsed: {seconds}s</div>;
}`,
          description: 'The return function cleans up timers or subscriptions before the component unmounts.'
        },
        bestPractices: [
          'Always clean up subscriptions, event listeners, and timers in the return function',
          'Include all reactive values (props, state) read by the effect inside the dependency array'
        ],
        commonMistakes: [
          'Omitting the dependency array entirely, causing the effect to run on EVERY single render',
          'Updating state inside an effect without dependencies, causing an infinite loop'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>useEffect Clock Simulation</h3>
<div id="clock-display" style="font-family: monospace; font-size: 18px; color: #38bdf8; padding: 12px; background: #0f172a; border-radius: 8px;">00:00:00</div>
<script>
  setInterval(() => {
    document.getElementById('clock-display').innerText = new Date().toLocaleTimeString();
  }, 1000);
</script>`,
      explanation: 'useEffect manages interval timers and ensures they get cleaned up when the component leaves the screen.'
    },
    practiceTask: {
      instruction: 'Write an effect that adds a window "resize" event listener and removes it in the cleanup function.',
      hint: 'window.addEventListener("resize", handler); return () => window.removeEventListener("resize", handler);',
      starterCode: `useEffect(() => {\n  const handleResize = () => console.log(window.innerWidth);\n  // Add listener and return cleanup\n}, []);\n`
    },
    keyTakeaways: [
      'useEffect runs after render to synchronize with external systems.',
      '[] runs once on mount; [dep1, dep2] runs when dependencies change; no array runs on every render.',
      'Return a cleanup function to cancel subscriptions, intervals, and event listeners.'
    ]
  },

  'handling-events-and-synthetic-events': {
    id: 'handling-events-and-synthetic-events',
    lessonNumber: 8,
    title: 'Event Handling & Synthetic Events',
    moduleId: 'react-module-2',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Attach event handlers using camelCase props (onClick, onChange, onSubmit)',
      'Understand React\'s cross-browser SyntheticEvent wrapper',
      'Pass arguments to event handlers cleanly',
      'Prevent default browser actions with e.preventDefault()'
    ],
    summary: 'React wraps native browser events in a cross-browser SyntheticEvent object, providing consistent event behavior across all browsers.',
    whyItExists: 'Native browser event implementations have historical discrepancies across browsers. React normalizes them under the W3C spec and uses event delegation for top performance.',
    howItWorks: 'React attaches a single listener per event type at the root DOM container. When an event fires, React dispatches a pooled SyntheticEvent through the component tree.',
    whenToUse: [
      'Form submissions (e.preventDefault() to stop page reloads)',
      'Button clicks, keyboard shortcuts, mouse hover interactions, and input typing'
    ],
    whenNotToUse: [
      'Do not invoke the handler immediately during render: onClick={handleClick()} (must be onClick={handleClick})'
    ],
    sections: [
      {
        id: 'events-code',
        heading: 'Event Handling Patterns',
        content: 'Understand passing function references vs calling functions.',
        codeSnippet: {
          language: 'jsx',
          title: 'Event Handling Syntax',
          code: `function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser from refreshing the page!
    console.log('Form submitted safely via AJAX');
  };

  const handleDelete = (id, e) => {
    console.log('Deleting item ID:', id);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Pass function reference */}
      <button type="submit">Submit</button>

      {/* Pass argument with inline arrow function */}
      <button type="button" onClick={(e) => handleDelete(42, e)}>
        Delete Item 42
      </button>
    </form>
  );
}`,
          description: 'Pass function references onClick={fn}, not function invocations onClick={fn()}.'
        },
        bestPractices: [
          'Always call e.preventDefault() on form submit handlers',
          'Name event props as on[Event] and handlers as handle[Event] (e.g. onSelect and handleSelect)'
        ],
        commonMistakes: [
          'Writing onClick={handleClick()} which calls the function immediately during render and causes infinite loops'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Event Handling Demo</h3>
<button id="eventBtn" style="padding: 6px 14px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">Click Me</button>
<span id="clickCount" style="margin-left: 12px; font-family: monospace; color: #4ade80;">Clicks: 0</span>
<script>
  let clicks = 0;
  document.getElementById('eventBtn').onclick = () => {
    clicks++;
    document.getElementById('clickCount').innerText = 'Clicks: ' + clicks;
  };
</script>`,
      explanation: 'React attaches event listeners declaratively directly in the JSX.'
    },
    practiceTask: {
      instruction: 'Create a Form component with an onSubmit handler that prevents the default reload behavior.',
      hint: 'const handleSubmit = (e) => { e.preventDefault(); }; <form onSubmit={handleSubmit}>',
      starterCode: `function LoginForm() {\n  // Implement handleSubmit with preventDefault\n  return <form>...</form>;\n}\n`
    },
    keyTakeaways: [
      'Event names in React are camelCase (onClick, onKeyDown).',
      'Pass a function reference, not an executed function call.',
      'e.preventDefault() stops default browser actions (like page reloads on form submit).'
    ]
  },

  'controlled-vs-uncontrolled-forms': {
    id: 'controlled-vs-uncontrolled-forms',
    lessonNumber: 9,
    title: 'Controlled vs Uncontrolled Forms',
    moduleId: 'react-module-2',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Build controlled form components driven by React state',
      'Handle multiple form inputs with a single dynamic change handler',
      'Use uncontrolled inputs with useRef when state is unnecessary',
      'Validate inputs in real-time as users type'
    ],
    summary: 'Controlled components have their value driven by React state via value and onChange, making state the "single source of truth".',
    whyItExists: 'HTML form elements normally maintain their own internal DOM state. In React, keeping form data in component state enables instant validation, formatting, and submission handling.',
    howItWorks: 'An input is controlled when it receives value={state} and an onChange={(e) => setState(e.target.value)} handler.',
    whenToUse: [
      'Controlled: Live input validation, disabling submit buttons dynamically, input masking (e.g. credit cards)',
      'Uncontrolled: Simple forms, file uploads (<input type="file" /> is always uncontrolled)'
    ],
    whenNotToUse: [
      'Do not toggle between controlled and uncontrolled by setting value to undefined'
    ],
    sections: [
      {
        id: 'controlled-form',
        heading: 'Multi-Input Controlled Form',
        content: 'Manage an entire form with a unified state object and computed property names.',
        codeSnippet: {
          language: 'jsx',
          title: 'Controlled Form Component',
          code: `import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    role: 'developer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>
    </form>
  );
}`,
          description: 'Computed [name]: value updates matching keys in state dynamically.'
        },
        bestPractices: [
          'Use controlled inputs for any form requiring live validation or conditioned submit buttons',
          'Initialize controlled input state with an empty string "" instead of undefined'
        ],
        commonMistakes: [
          'Starting state with undefined or null, triggering the "component is changing an uncontrolled input to be controlled" warning'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Live Controlled Input Mirror</h3>
<input id="demoInput" type="text" placeholder="Type something..." style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white;">
<p style="font-family: sans-serif; color: #94a3b8;">Mirror: <span id="demoOutput" style="color: #38bdf8;"></span></p>
<script>
  const inp = document.getElementById('demoInput');
  const out = document.getElementById('demoOutput');
  inp.oninput = () => out.innerText = inp.value;
</script>`,
      explanation: 'As you type, React updates state and mirrors the exact value back to the UI.'
    },
    practiceTask: {
      instruction: 'Create an input with value bound to state "query" and an onChange handler updating "query".',
      hint: '<input value={query} onChange={(e) => setQuery(e.target.value)} />',
      starterCode: `const [query, setQuery] = useState('');\n// Return controlled input\n`
    },
    keyTakeaways: [
      'Controlled components bind input value to React state via value and onChange.',
      'State serves as the single source of truth for the input\'s contents.',
      'Enables real-time validation, character counting, and conditioned formatting.'
    ]
  },

  'useref-and-dom-references': {
    id: 'useref-and-dom-references',
    lessonNumber: 10,
    title: 'useRef Hook: DOM Access & Persistent Values',
    moduleId: 'react-module-3',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Access real DOM nodes directly using ref callbacks and useRef',
      'Store mutable values that persist across renders WITHOUT triggering re-renders',
      'Manage focus, text selection, and measure DOM elements',
      'Differentiate useRef from useState'
    ],
    summary: 'useRef returns a mutable ref object whose .current property persists across renders without triggering a re-render when mutated.',
    whyItExists: 'Sometimes components need to store timer IDs or manipulate imperative DOM APIs (focusing an input, measuring element width) without re-rendering.',
    howItWorks: 'useRef(initialValue) produces a plain JavaScript object { current: initialValue } that React retains in memory throughout the component\'s lifetime.',
    whenToUse: [
      'Focusing inputs automatically on modal open: inputRef.current.focus()',
      'Storing interval/timeout IDs, previous state values, or WebSocket instances',
      'Integrating third-party imperative DOM libraries (D3, Chart.js, Leaflet)'
    ],
    whenNotToUse: [
      'Do not use useRef for data that should trigger a re-render when updated (use useState)'
    ],
    sections: [
      {
        id: 'useref-patterns',
        heading: 'Focus Management & Value Persistence',
        content: 'Learn how to focus DOM elements and store mutable instances.',
        codeSnippet: {
          language: 'jsx',
          title: 'useRef for Focus and Timers',
          code: `import { useRef, useEffect } from 'react';

function SearchInput() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // Focus the input automatically on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Track render count without triggering another re-render!
  renderCount.current += 1;

  return (
    <div>
      <input ref={inputRef} placeholder="Search..." />
      <span>Renders: {renderCount.current}</span>
    </div>
  );
}`,
          description: 'Mutating ref.current does NOT trigger a component re-render.'
        },
        bestPractices: [
          'Do not read or write ref.current during render (except for initialization); use it inside effects or event handlers'
        ],
        commonMistakes: [
          'Using useRef where useState is needed, expecting the UI to update when .current changes'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>DOM Focus with useRef</h3>
<input id="targetInput" type="text" placeholder="Click button to focus me" style="padding: 6px 12px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white;">
<button id="focusBtn" style="margin-left: 8px; padding: 6px 12px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer;">Focus Input</button>
<script>
  document.getElementById('focusBtn').onclick = () => document.getElementById('targetInput').focus();
</script>`,
      explanation: 'useRef lets components invoke imperative DOM methods like focus() directly.'
    },
    practiceTask: {
      instruction: 'Create an input element bound to inputRef and focus it inside a button click handler.',
      hint: 'const inputRef = useRef(null); <button onClick={() => inputRef.current.focus()}>Focus</button>',
      starterCode: `function AutoFocus() {\n  const inputRef = useRef(null);\n  // Implement focus button\n}\n`
    },
    keyTakeaways: [
      'useRef creates a persistent container: { current: value }.',
      'Modifying .current does not trigger a component re-render.',
      'Used for direct DOM access (focus, scroll) and persistent timer/instance storage.'
    ]
  },

  'usememo-and-usecallback-optimization': {
    id: 'usememo-and-usecallback-optimization',
    lessonNumber: 11,
    title: 'useMemo & useCallback: Performance Optimization',
    moduleId: 'react-module-3',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Cache expensive calculation results with useMemo',
      'Cache stable function reference identities with useCallback',
      'Optimize child components with React.memo',
      'Avoid premature optimization when overhead exceeds benefits'
    ],
    summary: 'useMemo caches the result of an expensive calculation, while useCallback caches a function definition between renders.',
    whyItExists: 'Every render executes the component function from top to bottom, recreating all inline functions and recalculating expressions, which causes unnecessary re-renders in memoized children.',
    howItWorks: 'useMemo(computeFn, [deps]) returns the cached result until dependencies change. useCallback(fn, [deps]) returns the cached function instance.',
    whenToUse: [
      'useMemo: Filtering or sorting large datasets (thousands of rows)',
      'useCallback: Passing callbacks to memoized child components (React.memo)',
      'Stable dependency objects passed into useEffect dependency arrays'
    ],
    whenNotToUse: [
      'Do not wrap every function in useCallback; the hook overhead is often higher than simple function recreation'
    ],
    sections: [
      {
        id: 'memo-callback-patterns',
        heading: 'useMemo and useCallback in Practice',
        content: 'Understand when caching is warranted.',
        codeSnippet: {
          language: 'jsx',
          title: 'Optimization Hooks',
          code: `import { useState, useMemo, useCallback, memo } from 'react';

// Memoized Child: Only re-renders if props change!
const ExpensiveItem = memo(function ExpensiveItem({ item, onDelete }) {
  return <li onClick={() => onDelete(item.id)}>{item.name}</li>;
});

function ProductCatalog({ products }) {
  const [filter, setFilter] = useState('');

  // 1. useMemo: Only re-sorts when products or filter change!
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  }, [products, filter]);

  // 2. useCallback: Gives onDelete a stable function identity
  const handleDelete = useCallback((id) => {
    console.log('Delete item:', id);
  }, []); // Empty deps: stable forever!

  return <ul>{filteredProducts.map(p => <ExpensiveItem key={p.id} item={p} onDelete={handleDelete} />)}</ul>;
}`,
          description: 'ExpensiveItem avoids re-rendering because handleDelete retains a stable reference.'
        },
        bestPractices: [
          'Measure performance first before adding useMemo and useCallback',
          'Pair useCallback with React.memo on child components to see real benefits'
        ],
        commonMistakes: [
          'Using useCallback without React.memo on the receiving child component (does nothing to prevent child re-renders!)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Memoization Concept</h3>
<div id="output" style="font-family: sans-serif; padding: 12px; background: #0f172a; color: #a78bfa; border-radius: 8px;">
  Filtered 10,000 items -> <strong>Cached in memory</strong> (re-calculation skipped on unrelated state change)
</div>`,
      explanation: 'useMemo skips recalculation when its dependencies remain unchanged.'
    },
    practiceTask: {
      instruction: 'Wrap an expensive calculation calculateTotal(items) with useMemo depending on [items].',
      hint: 'const total = useMemo(() => calculateTotal(items), [items]);',
      starterCode: `const total = useMemo(() => {\n  // return calculateTotal(items)\n}, []);\n`
    },
    keyTakeaways: [
      'useMemo caches calculated values; useCallback caches function definitions.',
      'Only beneficial for genuinely expensive calculations or when passing callbacks to React.memo children.',
      'Both hooks accept dependency arrays governing when cache invalidates.'
    ]
  },

  'usereducer-complex-state-management': {
    id: 'usereducer-complex-state-management',
    lessonNumber: 12,
    title: 'useReducer: Complex State Management',
    moduleId: 'react-module-3',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Manage complex multi-subvalue state using useReducer',
      'Follow the Redux pattern: state, actions, and pure reducer functions',
      'Dispatch actions to trigger deterministic state transitions',
      'Compare useState vs useReducer tradeoffs'
    ],
    summary: 'useReducer is an alternative to useState for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one.',
    whyItExists: 'When a component has multiple state variables that update together, multiple useState calls lead to scattered logic and synchronization bugs.',
    howItWorks: 'const [state, dispatch] = useReducer(reducer, initialState). Calling dispatch(action) passes current state and action to the pure reducer function to produce next state.',
    whenToUse: [
      'Forms with many interrelated fields, steps, and validation flags',
      'Shopping carts, data tables with pagination/filtering/sorting',
      'When state updates follow specific business rules and action types'
    ],
    whenNotToUse: [
      'Simple primitive values (booleans, strings, single numbers) are cleaner with useState'
    ],
    sections: [
      {
        id: 'reducer-pattern',
        heading: 'Reducer Function Architecture',
        content: 'Reducers must be pure functions: (state, action) => nextState.',
        codeSnippet: {
          language: 'jsx',
          title: 'useReducer Shopping Cart Example',
          code: `import { useReducer } from 'react';

const initialState = { items: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      throw new Error(\`Unhandled action type: \${action.type}\`);
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return <button onClick={() => addItem({ id: 1, price: 20 })}>Total: {state.total}</button>;
}`,
          description: 'Actions describe what happened; the reducer decides how state changes.'
        },
        bestPractices: [
          'Keep reducer functions pure with no side effects or random numbers',
          'Use clear uppercase action types: ADD_ITEM, REMOVE_ITEM'
        ],
        commonMistakes: [
          'Mutating state directly inside a reducer instead of returning fresh objects'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>useReducer Dispatch Simulator</h3>
<div id="cartDisplay" style="font-family: monospace; padding: 12px; background: #0f172a; color: #38bdf8; border-radius: 8px;">Cart Total: $0 (0 items)</div>
<div style="margin-top: 8px; display: flex; gap: 8px;">
  <button id="add10" style="padding: 4px 10px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">Add $10 Book</button>
  <button id="clearCart" style="padding: 4px 10px; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;">Clear</button>
</div>
<script>
  let total = 0, count = 0;
  const render = () => document.getElementById('cartDisplay').innerText = 'Cart Total: $' + total + ' (' + count + ' items)';
  document.getElementById('add10').onclick = () => { total += 10; count++; render(); };
  document.getElementById('clearCart').onclick = () => { total = 0; count = 0; render(); };
</script>`,
      explanation: 'Dispatching actions triggers clean, centralized state updates.'
    },
    practiceTask: {
      instruction: 'Write a reducer that handles "INCREMENT" and "DECREMENT" actions for a numeric count state.',
      hint: 'switch (action.type) { case "INCREMENT": return { count: state.count + 1 }; ... }',
      starterCode: `function counterReducer(state, action) {\n  switch (action.type) {\n    // Implement cases\n  }\n}\n`
    },
    keyTakeaways: [
      'useReducer centralizes complex state transitions into a single pure function.',
      'dispatch({ type, payload }) decouples event handling from state update logic.',
      'Ideal for state objects with multiple interrelated fields.'
    ]
  },

  'react-context-api-and-global-state': {
    id: 'react-context-api-and-global-state',
    lessonNumber: 13,
    title: 'React Context API & Global State',
    moduleId: 'react-module-3',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Solve the "prop drilling" problem with React Context',
      'Create contexts with createContext and consume them with useContext',
      'Wrap component trees with custom Provider components',
      'Combine Context with useState/useReducer for lightweight global state'
    ],
    summary: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
    whyItExists: 'Passing props through 5-10 intermediate components that don\'t need the data themselves (prop drilling) makes refactoring painful and components tightly coupled.',
    howItWorks: 'createContext() establishes a context object. Context.Provider supplies a value. Any descendant component anywhere in that sub-tree can call useContext(Context) to read it.',
    whenToUse: [
      'Global themes (dark/light mode)',
      'Current authenticated user session and permissions',
      'Application language/locale preferences',
      'Global progress tracking or shopping cart state'
    ],
    whenNotToUse: [
      'Do not use Context for frequently-updating high-velocity data (causes all consumer components to re-render)'
    ],
    sections: [
      {
        id: 'context-architecture',
        heading: 'Creating and Consuming Context',
        content: 'Follow the Provider + Custom Hook pattern for clean, reusable context modules.',
        codeSnippet: {
          language: 'jsx',
          title: 'Theme Context Provider Pattern',
          code: `import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Custom Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Consumer Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// 4. Any deep child component:
function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current: {theme}</button>;
}`,
          description: 'A custom hook provides safety checking and clean imports for consumers.'
        },
        bestPractices: [
          'Export a custom hook (e.g. useTheme()) instead of exporting the raw context object',
          'Throw a helpful error if the hook is called outside its Provider'
        ],
        commonMistakes: [
          'Passing a new object literal directly to value={{ a, b }} on every render without memoization'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Context Simulation</h3>
<div id="themeBox" style="padding: 16px; border-radius: 8px; background: #0f172a; color: #f8fafc; font-family: sans-serif;">
  <span>Theme: <strong>Dark Mode</strong></span>
</div>`,
      explanation: 'Context provides global variables across the entire React component hierarchy.'
    },
    practiceTask: {
      instruction: 'Create a custom hook useAuth that calls useContext(AuthContext) and checks for null.',
      hint: 'const ctx = useContext(AuthContext); if (!ctx) throw new Error(...); return ctx;',
      starterCode: `export function useAuth() {\n  // Implement useContext check\n}\n`
    },
    keyTakeaways: [
      'Context avoids prop drilling by broadcasting values across the component tree.',
      'Composed of createContext, Context.Provider, and the useContext hook.',
      'Best suited for global settings like auth, themes, language, and user progress.'
    ]
  },

  'custom-hooks-reusable-logic': {
    id: 'custom-hooks-reusable-logic',
    lessonNumber: 14,
    title: 'Custom Hooks: Extracting Reusable Logic',
    moduleId: 'react-module-4',
    courseId: 'react',
    estimatedMinutes: 9,
    learningObjectives: [
      'Extract duplicate stateful logic into custom use... functions',
      'Compose multiple built-in hooks (useState, useEffect, useCallback) inside custom hooks',
      'Follow the Rules of Hooks within custom hook functions',
      'Build real-world utilities like useWindowSize, useLocalStorage, and useFetch'
    ],
    summary: 'Custom hooks let you extract component logic into reusable functions, sharing stateful logic (not state itself) between components.',
    whyItExists: 'In early React, sharing stateful logic required complex patterns like Higher-Order Components (HOCs) or Render Props ("wrapper hell"). Custom hooks make logic sharing as simple as calling a function.',
    howItWorks: 'A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. Each component that calls a custom hook gets its own isolated state.',
    whenToUse: [
      'Data fetching: useFetch(url)',
      'Browser APIs: useLocalStorage(key), useMediaQuery(query), useOnlineStatus()',
      'Form management: useForm(initialValues)'
    ],
    whenNotToUse: [
      'Functions that do not call any React hooks should be standard utility functions, not hooks'
    ],
    sections: [
      {
        id: 'custom-hook-example',
        heading: 'Building a useLocalStorage Hook',
        content: 'Create a hook that syncs component state with the browser\'s LocalStorage.',
        codeSnippet: {
          language: 'jsx',
          title: 'useLocalStorage Custom Hook',
          code: `import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Read initial value from localStorage or fallback
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [key, value]);

  return [value, setValue];
}

// Usage in any component:
function Settings() {
  const [theme, setTheme] = useLocalStorage('app_theme', 'dark');
  return <button onClick={() => setTheme('light')}>Theme: {theme}</button>;
}`,
          description: 'Any component calling useLocalStorage gets synchronized storage reactivity.'
        },
        bestPractices: [
          'Always prefix custom hook names with "use" so linters can enforce the Rules of Hooks',
          'Return tuples [value, setter] or objects { data, loading, error } for easy consumption'
        ],
        commonMistakes: [
          'Assuming custom hooks share state globally between components (they share logic, not state!)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Custom Hook: useOnlineStatus</h3>
<div id="netStatus" style="font-family: sans-serif; padding: 12px; background: #064e3b; color: #6ee7b7; border-radius: 8px;">
  🟢 Online - Connected to Internet
</div>`,
      explanation: 'Custom hooks abstract browser event listeners into clean one-line hooks.'
    },
    practiceTask: {
      instruction: 'Write a custom hook useToggle(initial = false) that returns [value, toggle] where toggle flips the boolean state.',
      hint: 'const [val, setVal] = useState(initial); const toggle = () => setVal(v => !v); return [val, toggle];',
      starterCode: `function useToggle(initial = false) {\n  // Implement useToggle\n}\n`
    },
    keyTakeaways: [
      'Custom hooks must start with the "use" prefix.',
      'They share stateful logic between components, while keeping state instances separate.',
      'Combine built-in hooks (useState, useEffect) to create elegant, clean APIs.'
    ]
  },

  'suspense-and-lazy-loading-code-splitting': {
    id: 'suspense-and-lazy-loading-code-splitting',
    lessonNumber: 15,
    title: 'Code Splitting with React.lazy & Suspense',
    moduleId: 'react-module-4',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Reduce initial bundle size using dynamic imports and React.lazy()',
      'Provide smooth fallback loading UI using <Suspense fallback={...}>',
      'Implement route-based code splitting for faster page loads',
      'Handle chunk loading errors'
    ],
    summary: 'React.lazy and Suspense enable route-based and component-based code splitting, downloading code chunks only when the user navigates to them.',
    whyItExists: 'Single-page apps bundled into a single massive JavaScript file force users to download code for entire apps before seeing the first page.',
    howItWorks: 'React.lazy takes a dynamic import() function and returns a lazy component. When rendered, Suspense displays fallback UI while the chunk downloads over the network.',
    whenToUse: [
      'Route-based code splitting (e.g. splitting /admin, /dashboard, /editor routes)',
      'Heavy third-party components (rich text editors, charts, video players)'
    ],
    whenNotToUse: [
      'Do not lazy-load small critical UI components needed on initial page paint'
    ],
    sections: [
      {
        id: 'lazy-syntax',
        heading: 'Route-Based Code Splitting',
        content: 'Lazy load route pages with Suspense boundaries.',
        codeSnippet: {
          language: 'jsx',
          title: 'React.lazy & Suspense Example',
          code: `import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load route pages as separate chunks
const HomePage = lazy(() => import('./pages/HomePage'));
const CoursePage = lazy(() => import('./pages/CoursePage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div className="page-loader">Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}`,
          description: 'Webpack/Vite splits each lazy-imported component into an independent bundle.'
        },
        bestPractices: [
          'Place Suspense boundaries around route components or major UI sections',
          'Design skeleton screens or spinners for the fallback prop'
        ],
        commonMistakes: [
          'Using React.lazy on components that are not exported as default exports (lazy requires default exports)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Suspense Fallback Concept</h3>
<div style="font-family: sans-serif; padding: 12px; background: #0f172a; border-radius: 8px;">
  <div style="color: #94a3b8; font-size: 13px;">Fallback: Skeleton Screen displayed -> Chunk arrives (200ms) -> Component rendered.</div>
</div>`,
      explanation: 'Suspense seamlessly displays fallbacks while asynchronous chunks load.'
    },
    practiceTask: {
      instruction: 'Declare a lazy component LazyPlayground that imports "./Playground" and wrap it in a Suspense boundary.',
      hint: 'const LazyPlayground = lazy(() => import("./Playground")); <Suspense fallback={<p>Loading...</p>}><LazyPlayground /></Suspense>',
      starterCode: `// Define LazyPlayground and Suspense wrapper\n`
    },
    keyTakeaways: [
      'React.lazy() dynamically imports components on-demand.',
      '<Suspense fallback={...}> renders fallback UI while lazy chunks download.',
      'Significantly reduces initial page load times and bundle sizes.'
    ]
  },

  'error-boundaries-and-fallbacks': {
    id: 'error-boundaries-and-fallbacks',
    lessonNumber: 16,
    title: 'Error Boundaries & Graceful Degradation',
    moduleId: 'react-module-4',
    courseId: 'react',
    estimatedMinutes: 8,
    learningObjectives: [
      'Catch JavaScript runtime errors during rendering with Error Boundaries',
      'Display fallback UI instead of crashing the entire React component tree',
      'Log errors to monitoring services (Sentry, LogRocket)',
      'Differentiate render errors from async/event handler errors'
    ],
    summary: 'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.',
    whyItExists: 'In React 16+, an uncaught error inside any component unmounts the ENTIRE React tree, leaving users with a blank white screen.',
    howItWorks: 'Error boundaries implement static getDerivedStateFromError() to render fallback UI and componentDidCatch() to log error reports.',
    whenToUse: [
      'Wrapping major features (e.g. sidebar, editor, dashboard widgets) so one crash doesn\'t break the whole app',
      'Around third-party integrations and dynamic user-generated content'
    ],
    whenNotToUse: [
      'Error boundaries do NOT catch errors in event handlers, async code (setTimeout/fetch), or server-side rendering (use try/catch there)'
    ],
    sections: [
      {
        id: 'error-boundary-class',
        heading: 'Creating an Error Boundary Component',
        content: 'Error boundaries must currently be implemented as class components.',
        codeSnippet: {
          language: 'jsx',
          title: 'ErrorBoundary Implementation',
          code: `import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  // Update state so the next render shows fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Log error to telemetry service
  componentDidCatch(error, errorInfo) {
    console.error('Logged to error reporting:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback p-6 bg-red-50 text-red-900 rounded-xl">
          <h3>Something went wrong in this widget.</h3>
          <button onClick={() => this.setState({ hasError: false })}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}`,
          description: 'Wrap individual UI sections with <ErrorBoundary> to isolate crashes.'
        },
        bestPractices: [
          'Place Error Boundaries at strategic points (e.g. per-route or per-widget) to prevent full-screen crashes',
          'Include a "Try Again" or "Reload" button in the fallback UI'
        ],
        commonMistakes: [
          'Expecting Error Boundaries to catch async errors inside useEffect or fetch calls (they only catch render-time errors)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Error Boundary Fallback UI</h3>
<div style="font-family: sans-serif; padding: 12px; background: #450a0a; border: 1px solid #dc2626; color: #fca5a5; border-radius: 8px;">
  <strong>⚠️ Widget Crashed</strong>: Rest of the dashboard remains fully interactive!
</div>`,
      explanation: 'Error boundaries catch exceptions in child components, isolating crashes.'
    },
    practiceTask: {
      instruction: 'Wrap a buggy component <BrokenWidget /> inside an <ErrorBoundary> tag.',
      hint: '<ErrorBoundary><BrokenWidget /></ErrorBoundary>',
      starterCode: `// Wrap BrokenWidget with ErrorBoundary\n`
    },
    keyTakeaways: [
      'Error boundaries prevent an entire React app from crashing on render errors.',
      'Implemented using getDerivedStateFromError and componentDidCatch.',
      'Only catch errors during rendering, lifecycle methods, and constructors.'
    ]
  }
};
