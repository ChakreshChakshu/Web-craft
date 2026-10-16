export const jsLessons = {
  'let-const-and-block-scope': {
    id: 'let-const-and-block-scope',
    lessonNumber: 1,
    title: 'let, const, and Block Scoping',
    moduleId: 'js-module-1',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Understand the difference between var, let, and const',
      'Master block scoping and how it prevents variable leakage',
      'Understand the Temporal Dead Zone (TDZ) and hoisting behavior',
      'Learn best practices for variable immutability'
    ],
    summary: 'ES6 introduced let and const to replace function-scoped var with block-scoped declarations, eliminating hoisting bugs and variable leakage.',
    whyItExists: 'Before ES6, JavaScript only had var, which was function-scoped. Variables declared inside if blocks or loops leaked to the entire outer function, causing accidental overwrites and closure bugs.',
    howItWorks: 'let and const create bindings that are strictly bound to the enclosing pair of curly braces ({ ... }). They are hoisted to the top of the block but remain uninitialized in a Temporal Dead Zone until execution reaches their declaration line.',
    whenToUse: [
      'Default to const for all variable declarations to guarantee reference immutability',
      'Use let only when a variable needs to be reassigned (e.g., loop counters, accumulators)',
      'Never use var in modern JavaScript applications'
    ],
    whenNotToUse: [
      'Do not assume const freezes object properties — it only prevents reassigning the variable itself (use Object.freeze for deep immutability)',
      'Do not access let or const before their declaration line'
    ],
    sections: [
      {
        id: 'scope-comparison',
        heading: 'Block Scope vs Function Scope',
        content: 'A block is any chunk of code between opening and closing curly braces. In ES6, variables declared with let and const cannot escape their enclosing block.',
        codeSnippet: {
          language: 'javascript',
          title: 'Block Scope Demonstration',
          code: `function testScope() {
  if (true) {
    var functionScoped = 'Available everywhere in function';
    let blockScoped = 'Only available inside this if block';
    const constantVal = 'Permanent reference';
  }
  console.log(functionScoped); // Works!
  // console.log(blockScoped); // ReferenceError: blockScoped is not defined
}`,
          description: 'let and const respect if, for, while, and arbitrary code blocks.'
        },
        bestPractices: [
          'Always declare variables at the smallest possible scope',
          'Use const as default, switch to let only when reassignment is needed'
        ],
        commonMistakes: [
          'Trying to reassign a const variable: const x = 1; x = 2; // TypeError',
          'Accessing a variable in the Temporal Dead Zone before declaration'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>JavaScript Block Scope Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #38bdf8; border-radius: 8px;"></div>
<script>
  let count = 10;
  if (true) {
    let count = 20; // Shadows outer count within this block
    document.getElementById('output').innerHTML = 'Inner Block count: ' + count;
  }
  document.getElementById('output').innerHTML += '<br>Outer Block count: ' + count;
</script>`,
      explanation: 'Notice how the inner let variable shadows the outer one without overwriting it.'
    },
    practiceTask: {
      instruction: 'Declare a const variable named "appName" and a let variable named "version".',
      hint: 'Remember: const is used for values that will not be reassigned, while let is for mutable values.',
      starterCode: `// Declare appName as const and version as let\nconst appName = "WebCraft";\nlet version = 1.0;\n`
    },
    keyTakeaways: [
      'let and const are block-scoped ({}); var is function-scoped.',
      'const prevents reassignment of the variable binding, not internal mutation of objects.',
      'Accessing let/const before initialization triggers a Temporal Dead Zone ReferenceError.'
    ]
  },

  'arrow-functions-and-lexical-this': {
    id: 'arrow-functions-and-lexical-this',
    lessonNumber: 2,
    title: 'Arrow Functions and Lexical this',
    moduleId: 'js-module-1',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Write concise arrow function syntax with implicit returns',
      'Understand lexical this binding versus dynamic this',
      'Know when NOT to use arrow functions (methods, prototypes, constructors)'
    ],
    summary: 'Arrow functions provide a compact syntax for function expressions and lexically bind the this keyword to the enclosing scope.',
    whyItExists: 'In ES5, traditional functions created their own this based on how they were called, requiring workarounds like var self = this; or .bind(this) inside callbacks.',
    howItWorks: 'Arrow functions do not define their own this context. Instead, they capture the this value of the enclosing lexical execution context at the time they are created.',
    whenToUse: [
      'For short callback functions in array methods like .map(), .filter(), and .reduce()',
      'Inside class methods and timer callbacks where you want this to refer to the class instance',
      'For concise one-liner utility calculations'
    ],
    whenNotToUse: [
      'Do not use arrow functions for object methods that need access to the object via this',
      'Do not use arrow functions as constructor functions with new (they have no prototype property)'
    ],
    sections: [
      {
        id: 'syntax-and-returns',
        heading: 'Arrow Function Syntax & Return Rules',
        content: 'Arrow functions offer concise syntax: omit parentheses for single parameters, and omit curly braces for implicit returns.',
        codeSnippet: {
          language: 'javascript',
          title: 'Syntax variations',
          code: `// Multi-line with explicit return
const multiply = (a, b) => {
  return a * b;
};

// Single expression with implicit return
const square = x => x * x;

// Returning an object literal requires parentheses
const makeUser = (name, age) => ({ name, age });

// Array processing
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);`,
          description: 'Parentheses around object literals prevent the curly braces from being interpreted as a function block.'
        },
        bestPractices: [
          'Use implicit returns for simple, single-expression transforms',
          'Wrap returned object literals in parentheses: () => ({ key: value })'
        ],
        commonMistakes: [
          'Forgetting parentheses when returning an object literal: () => { a: 1 } returns undefined',
          'Using arrow functions as DOM event handlers that rely on this for the event target'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Arrow Functions & Array Methods</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #4ade80; border-radius: 8px;"></div>
<script>
  const prices = [10, 25, 40, 100];
  const withTax = prices.map(price => (price * 1.18).toFixed(2));
  document.getElementById('output').innerHTML = 'Original: ' + prices.join(', ') + '<br>With 18% Tax: ' + withTax.join(', ');
</script>`,
      explanation: 'Array.prototype.map using an arrow function creates transformed values with minimal boilerplate.'
    },
    practiceTask: {
      instruction: 'Create an arrow function named calculateDiscount that accepts price and percentage and returns the discounted price.',
      hint: 'Use the syntax: const calculateDiscount = (price, pct) => price - (price * pct / 100);',
      starterCode: `const calculateDiscount = (price, percentage) => {\n  // return discounted price\n};\n`
    },
    keyTakeaways: [
      'Arrow functions have no this, arguments, super, or new.target bindings.',
      'this inside an arrow function always points to the surrounding lexical context.',
      'One-liners with no curly braces return their expression value implicitly.'
    ]
  },

  'template-literals-and-tag-functions': {
    id: 'template-literals-and-tag-functions',
    lessonNumber: 3,
    title: 'Template Literals and Tagged Templates',
    moduleId: 'js-module-1',
    courseId: 'javascript',
    estimatedMinutes: 6,
    learningObjectives: [
      'Use backtick syntax for string interpolation and multi-line strings',
      'Embed complex JavaScript expressions inside ${...}',
      'Understand how tagged template functions parse strings'
    ],
    summary: 'Template literals allow embedded expressions, multi-line strings, and custom string formatting without clumsy string concatenation.',
    whyItExists: 'Before template literals, building multi-line strings or dynamic text required cumbersome + operators and newline escape sequences (\\n).',
    howItWorks: 'Template literals use backticks (`) instead of quotes. Text inside ${expression} is evaluated as JavaScript and converted to a string.',
    whenToUse: [
      'Creating dynamic strings with variables or computed expressions',
      'HTML templating and building multi-line SQL or GraphQL queries',
      'Writing tagged templates for styling (e.g. styled-components) or localization'
    ],
    whenNotToUse: [
      'For static strings with no expressions, standard quotes are fine and slightly faster to parse'
    ],
    sections: [
      {
        id: 'interpolation',
        heading: 'Expression Interpolation',
        content: 'You can insert any valid JavaScript expression inside ${...}, including ternary operators, function calls, and object lookups.',
        codeSnippet: {
          language: 'javascript',
          title: 'Template Literal Features',
          code: `const user = { name: 'Sarah', score: 92 };

// Expression interpolation with ternary
const statusMessage = \`User \${user.name} has \${user.score >= 70 ? 'Passed' : 'Failed'}.\`;

// Clean multi-line strings
const emailTemplate = \`
Hello \${user.name},

Congratulations on completing your assessment!
Your current score is: \${user.score}%.
\`;`,
          description: 'No need for string concatenation with + operators.'
        },
        bestPractices: [
          'Use template literals for any string requiring dynamic values or formatting',
          'Keep embedded expressions short and readable; extract complex logic into variables beforehand'
        ],
        commonMistakes: [
          'Using single or double quotes instead of backticks (`), causing ${...} to be printed literally'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Template Literal Interpolation</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e1b4b; color: #c7d2fe; border-radius: 8px;"></div>
<script>
  const item = 'Mechanical Keyboard';
  const qty = 2;
  const unitPrice = 75;
  document.getElementById('output').innerHTML = \`Order Summary:<br>- Item: \${item}<br>- Subtotal: $\${qty * unitPrice} ($75 x \${qty})\`;
</script>`,
      explanation: 'Expressions inside ${...} evaluate mathematical operations dynamically inside the string.'
    },
    practiceTask: {
      instruction: 'Write a template literal that prints "Welcome, [username]! You have [count] unread messages."',
      hint: 'Use `Welcome, ${username}! You have ${count} unread messages.`',
      starterCode: `function formatGreeting(username, count) {\n  return \`\`;\n}\n`
    },
    keyTakeaways: [
      'Enclosed in backticks (`) rather than single or double quotes.',
      'Supports multi-line text naturally without \\n concatenation.',
      'Any valid JavaScript expression can be placed inside ${...}.'
    ]
  },

  'object-and-array-destructuring': {
    id: 'object-and-array-destructuring',
    lessonNumber: 4,
    title: 'Object and Array Destructuring',
    moduleId: 'js-module-1',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Unpack values from arrays and properties from objects into distinct variables',
      'Assign default values during destructuring',
      'Rename variables with alias syntax (prop: newName)',
      'Destructure nested objects and function parameters'
    ],
    summary: 'Destructuring provides a concise syntax for extracting properties from objects and elements from arrays into distinct variables.',
    whyItExists: 'Extracting data from large nested API payloads previously required repetitive boilerplate lines like const name = user.profile.name;.',
    howItWorks: 'Destructuring patterns mirror object and array literal syntax on the left side of an assignment operator.',
    whenToUse: [
      'Receiving function arguments (e.g. React component props: ({ title, subtitle }))',
      'Extracting specific fields from database queries or API responses',
      'Swapping variables without a temporary variable: [a, b] = [b, a]'
    ],
    whenNotToUse: [
      'Over-nesting destructuring beyond 2-3 levels makes code difficult to read'
    ],
    sections: [
      {
        id: 'destructuring-patterns',
        heading: 'Common Destructuring Patterns',
        content: 'Learn how to destructure arrays, objects, rename properties, and set fallbacks.',
        codeSnippet: {
          language: 'javascript',
          title: 'Object & Array Destructuring',
          code: `// Object destructuring with renaming and default values
const config = { theme: 'dark', timeout: 5000 };
const { theme, timeout, port = 8080, theme: activeTheme } = config;

// Function parameter destructuring
function renderCard({ title, isFeatured = false }) {
  console.log(title, isFeatured);
}

// Array destructuring
const coords = [37.7749, -122.4194];
const [latitude, longitude] = coords;

// Variable swapping
let x = 1, y = 2;
[x, y] = [y, x]; // x is now 2, y is now 1`,
          description: 'Destructuring makes function signatures self-documenting.'
        },
        bestPractices: [
          'Use default values to safeguard against undefined properties',
          'Destructure function parameters to make options objects transparent'
        ],
        commonMistakes: [
          'Attempting to destructure null or undefined triggers a TypeError',
          'Confusing renaming syntax ({ prop: newVarName }) with object key:value declaration'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Destructuring Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #f87171; border-radius: 8px;"></div>
<script>
  const response = {
    status: 200,
    data: { id: 101, username: 'dev_alex', role: 'admin' }
  };
  const { data: { username, role } } = response;
  document.getElementById('output').innerHTML = \`User: \${username} | Role: \${role}\`;
</script>`,
      explanation: 'Nested destructuring extracts fields directly from nested payloads in one statement.'
    },
    practiceTask: {
      instruction: 'Destructure the properties "name" and "email" with a default value of "No email" from the user object.',
      hint: 'Use const { name, email = "No email" } = user;',
      starterCode: `const user = { name: "John" };\n// Destructure name and email here\n`
    },
    keyTakeaways: [
      'Object destructuring matches by key name; array destructuring matches by index order.',
      'Default values prevent undefined errors if a property is missing.',
      'Destructuring in function signatures clarifies expected parameters.'
    ]
  },

  'rest-parameters-and-spread-syntax': {
    id: 'rest-parameters-and-spread-syntax',
    lessonNumber: 5,
    title: 'Rest Parameters and Spread Syntax',
    moduleId: 'js-module-1',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Collect variable arguments into arrays using rest parameters (...args)',
      'Clone and merge arrays and objects with spread syntax (...obj)',
      'Understand shallow copy limitations vs deep copying'
    ],
    summary: 'The three-dots operator (...) operates as rest parameters to gather elements into an array, or as spread syntax to unpack elements into an array or object.',
    whyItExists: 'Old JavaScript relied on the pseudo-array arguments object and Object.assign() or Array.prototype.concat(), which were verbose and unintuitive.',
    howItWorks: 'In parameter lists, ...rest gathers remaining arguments into a real Array. In expressions, ...spread expands iterable elements or object enumerable properties in place.',
    whenToUse: [
      'Creating immutable copies of state in React or Redux: { ...state, count: state.count + 1 }',
      'Combining multiple arrays: [...arr1, ...arr2]',
      'Writing variadic functions that accept any number of arguments'
    ],
    whenNotToUse: [
      'Remember that spread only creates a shallow copy; nested objects still share references'
    ],
    sections: [
      {
        id: 'rest-vs-spread',
        heading: 'Rest vs Spread in Action',
        content: 'Understand when the three dots pack values together (rest) and when they unpack them (spread).',
        codeSnippet: {
          language: 'javascript',
          title: 'Rest & Spread Patterns',
          code: `// Rest: collects indefinite arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread with arrays
const fruits = ['apple', 'banana'];
const allFood = ['pizza', ...fruits, 'tacos']; // ['pizza', 'apple', 'banana', 'tacos']

// Spread with objects (shallow copy & merge)
const defaults = { host: 'localhost', port: 3000 };
const overrides = { port: 8080, secure: true };
const finalConfig = { ...defaults, ...overrides };
// { host: 'localhost', port: 8080, secure: true }`,
          description: 'Properties on the right overwrite matching properties on the left.'
        },
        bestPractices: [
          'Use rest parameters instead of the legacy arguments object',
          'Use object spread for shallow cloning and state updates'
        ],
        commonMistakes: [
          'Placing rest parameter anywhere other than the last position in function parameters',
          'Assuming object spread performs deep cloning of nested child objects'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Object Spread Immutability</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #a78bfa; border-radius: 8px;"></div>
<script>
  const original = { title: 'Clean Code', pages: 464 };
  const updated = { ...original, pages: 500, rating: 4.8 };
  document.getElementById('output').innerHTML = 'Original Pages: ' + original.pages + '<br>Updated Pages: ' + updated.pages + '<br>Rating: ' + updated.rating;
</script>`,
      explanation: 'Object spread copies properties immutably, preserving the original object untouched.'
    },
    practiceTask: {
      instruction: 'Write a function mergeArrays that accepts two arrays and returns a single merged array using spread syntax.',
      hint: 'Return [...arr1, ...arr2];',
      starterCode: `function mergeArrays(arr1, arr2) {\n  return [];\n}\n`
    },
    keyTakeaways: [
      'Rest (...) gathers multiple elements into a single array.',
      'Spread (...) unpacks an iterable into individual elements or properties.',
      'Object spread provides an elegant pattern for immutable state updates.'
    ]
  },

  'enhanced-object-literals': {
    id: 'enhanced-object-literals',
    lessonNumber: 6,
    title: 'Enhanced Object Literals',
    moduleId: 'js-module-2',
    courseId: 'javascript',
    estimatedMinutes: 6,
    learningObjectives: [
      'Use property value shorthands when keys and variable names match',
      'Define concise object methods without the function keyword',
      'Use computed property names with bracket syntax [expr]'
    ],
    summary: 'ES6 streamlined object creation with property shorthands, concise method syntax, and computed property keys.',
    whyItExists: 'In ES5, declaring objects with variables or dynamic keys required repetitive code: { name: name, age: age } and creating the object before adding dynamic keys.',
    howItWorks: 'If variable name matches object property name, specify it once. Methods omit the : function boilerplate. Computed keys evaluate inside brackets [] at initialization.',
    whenToUse: [
      'Building return objects from factory functions or hooks',
      'Setting dynamic keys based on constants, action types, or form inputs',
      'Writing clean service and module objects'
    ],
    whenNotToUse: [
      'Do not use shorthand if key name must differ from variable name'
    ],
    sections: [
      {
        id: 'object-enhancements',
        heading: 'Shorthand Syntax in Practice',
        content: 'Observe the reduction in boilerplate with modern object literal enhancements.',
        codeSnippet: {
          language: 'javascript',
          title: 'Enhanced Object Literals',
          code: `const username = 'charlie';
const role = 'moderator';
const dynamicKey = 'lastLogin_' + Date.now();

const user = {
  // Property shorthand (replaces username: username)
  username,
  role,

  // Method shorthand (replaces greet: function() {})
  greet() {
    return \`Hello from \${this.username}\`;
  },

  // Computed property key
  [dynamicKey]: new Date().toISOString()
};`,
          description: 'Computed keys evaluate at runtime during object instantiation.'
        },
        bestPractices: [
          'Group property shorthands together at the top of the object definition',
          'Use computed properties when handling dynamic form input names'
        ],
        commonMistakes: [
          'Forgetting that concise methods use standard this binding (unlike arrow functions)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Enhanced Object Literals Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #38bdf8; border-radius: 8px;"></div>
<script>
  const course = 'JavaScript ES6';
  const hours = 10;
  const courseObj = {
    course,
    hours,
    getInfo() { return this.course + ' (' + this.hours + ' hrs)'; }
  };
  document.getElementById('output').innerHTML = courseObj.getInfo();
</script>`,
      explanation: 'Property and method shorthands keep object definitions clean and concise.'
    },
    practiceTask: {
      instruction: 'Create an object using property shorthand with variables "title" and "author".',
      hint: 'const book = { title, author };',
      starterCode: `const title = "Clean Architecture";\nconst author = "Robert C. Martin";\n// Create book object here\n`
    },
    keyTakeaways: [
      'When key and variable name match, declare once: { name } instead of { name: name }.',
      'Methods can be defined directly without the function keyword: run() { ... }.',
      'Computed property names [key]: value enable dynamic keys directly inside the literal.'
    ]
  },

  'functional-array-methods-map-filter-reduce': {
    id: 'functional-array-methods-map-filter-reduce',
    lessonNumber: 7,
    title: 'Modern Array Methods: map, filter, reduce',
    moduleId: 'js-module-2',
    courseId: 'javascript',
    estimatedMinutes: 10,
    learningObjectives: [
      'Transform array data with map() without mutating the original array',
      'Filter elements conditionally with filter()',
      'Aggregate and accumulate values with reduce()',
      'Chain array methods for readable declarative pipelines'
    ],
    summary: 'map, filter, and reduce form the core triumvirate of functional data processing in modern JavaScript, eliminating imperative for loops.',
    whyItExists: 'Traditional for loops require managing loop indices, mutable counters, and temporary arrays, introducing off-by-one errors and state mutation.',
    howItWorks: 'Higher-order methods accept callback functions and return fresh arrays or accumulated results, preserving original arrays immutably.',
    whenToUse: [
      'map: Transforming each item into a new representation (e.g. converting data to JSX elements)',
      'filter: Selecting a subset of items meeting a truthy condition',
      'reduce: Calculating sums, group-bys, or reducing an array to an object'
    ],
    whenNotToUse: [
      'Do not use map if you do not use the returned array (use forEach or for...of instead)'
    ],
    sections: [
      {
        id: 'array-pipeline',
        heading: 'Declarative Array Processing',
        content: 'Chaining array methods creates intuitive, self-explanatory data transformation pipelines.',
        codeSnippet: {
          language: 'javascript',
          title: 'map, filter, and reduce in action',
          code: `const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true }
];

// 1. Filter: only in-stock items
const available = products.filter(p => p.inStock);

// 2. Map: extract names
const names = available.map(p => p.name);

// 3. Reduce: compute total inventory value of in-stock items
const totalInventoryValue = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);

console.log(totalInventoryValue); // 1074`,
          description: 'Always specify an initial value (e.g. 0) for reduce.'
        },
        bestPractices: [
          'Always provide an initial accumulator value to reduce()',
          'Keep callbacks pure without mutating external state',
          'Break long chains into named intermediate variables if readability drops'
        ],
        commonMistakes: [
          'Forgetting to return a value from the map callback, producing an array of undefined',
          'Omitting the initial value in reduce, which causes it to default to the first element'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Array Pipeline: Filter & Map</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #fbbf24; border-radius: 8px;"></div>
<script>
  const scores = [45, 82, 91, 64, 78, 55];
  const passingGrades = scores
    .filter(score => score >= 70)
    .map(score => score + ' (Passed)');
  document.getElementById('output').innerHTML = 'Passing Scores:<br>' + passingGrades.join('<br>');
</script>`,
      explanation: 'Filter extracts passing grades (>= 70), and map formats each score into a display string.'
    },
    practiceTask: {
      instruction: 'Use .filter() and .map() on an array of numbers to double all even numbers.',
      hint: 'numbers.filter(n => n % 2 === 0).map(n => n * 2);',
      starterCode: `const numbers = [1, 2, 3, 4, 5, 6];\n// Return doubled even numbers\n`
    },
    keyTakeaways: [
      'map transforms 1-to-1: always returns an array of the exact same length.',
      'filter tests condition: returns an array containing only matching elements.',
      'reduce aggregates: combines array items into any target data structure.'
    ]
  },

  'sets-and-maps-data-structures': {
    id: 'sets-and-maps-data-structures',
    lessonNumber: 8,
    title: 'Sets and Maps Data Structures',
    moduleId: 'js-module-2',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Store unique values of any type with Set',
      'Remove duplicate elements from arrays using new Set()',
      'Store key-value pairs with arbitrary key types using Map',
      'Compare Map performance and features versus plain Objects'
    ],
    summary: 'Set provides unique collections with O(1) membership lookups, while Map provides ordered key-value mappings that allow any data type as keys.',
    whyItExists: 'Plain JavaScript objects only support strings and symbols as keys, and checking array uniqueness required O(n^2) loops with indexOf.',
    howItWorks: 'Set and Map use hash tables under the hood for near-instant O(1) additions, deletions, and lookups (.has()).',
    whenToUse: [
      'Set: De-duplicating arrays, managing lists of active user IDs, tags, or selection sets',
      'Map: Caching/memoization, when keys are dynamic objects/functions, frequent additions/deletions'
    ],
    whenNotToUse: [
      'Use plain objects when you need simple JSON serialization or fixed known properties'
    ],
    sections: [
      {
        id: 'sets-and-maps-code',
        heading: 'Working with Set and Map',
        content: 'Explore the modern API methods for Sets and Maps.',
        codeSnippet: {
          language: 'javascript',
          title: 'Set and Map API',
          code: `// Set: unique values
const tags = new Set(['javascript', 'react', 'javascript', 'css']);
tags.add('nodejs');
console.log(tags.size); // 3 (duplicate 'javascript' was ignored)
console.log(tags.has('react')); // true

// Fast array deduplication
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4, 5]

// Map: keys can be any type (even objects!)
const cache = new Map();
const userObj = { id: 42 };

cache.set(userObj, { profileLoaded: true });
console.log(cache.get(userObj)); // { profileLoaded: true }
console.log(cache.has(userObj)); // true`,
          description: 'Map retains insertion order when iterating with for...of.'
        },
        bestPractices: [
          'Use [...new Set(array)] as the idiomatic pattern for array deduplication',
          'Use Map when keys are frequently added and removed for better performance than objects'
        ],
        commonMistakes: [
          'Using square brackets cache[key] instead of cache.set(key, val) / cache.get(key) on a Map'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Set Deduplication Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #22d3ee; border-radius: 8px;"></div>
<script>
  const rawList = ['apple', 'orange', 'banana', 'apple', 'banana', 'mango'];
  const uniqueList = [...new Set(rawList)];
  document.getElementById('output').innerHTML = 'Raw: ' + rawList.join(', ') + '<br>Unique: ' + uniqueList.join(', ');
</script>`,
      explanation: 'new Set() automatically strips duplicate elements in O(n) linear time.'
    },
    practiceTask: {
      instruction: 'Write a function deduplicate that accepts an array and returns an array with duplicates removed using Set.',
      hint: 'Return [...new Set(array)];',
      starterCode: `function deduplicate(arr) {\n  return [];\n}\n`
    },
    keyTakeaways: [
      'Set stores unique values and provides fast O(1) .has() checks.',
      '[...new Set(arr)] is the fastest, cleanest way to remove duplicates from an array.',
      'Map accepts any type as keys and preserves insertion order.'
    ]
  },

  'symbols-and-for-of-iterables': {
    id: 'symbols-and-for-of-iterables',
    lessonNumber: 9,
    title: 'Symbols and Iterables with for...of',
    moduleId: 'js-module-2',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Understand Symbol as a unique, immutable primitive data type',
      'Use Symbols for private/hidden object properties',
      'Iterate over arrays, strings, sets, and maps using for...of',
      'Understand the Symbol.iterator protocol'
    ],
    summary: 'Symbols provide guaranteed unique identifiers for object properties, while the iterable protocol enables clean iteration with for...of loops.',
    whyItExists: 'String-based object keys risked collisions across libraries, and for...in loops exposed prototype properties and index keys unexpectedly.',
    howItWorks: 'Every Symbol() call returns a completely unique primitive. An object is iterable if it implements a method at [Symbol.iterator].',
    whenToUse: [
      'Symbols: Defining internal or metadata properties that shouldn\'t conflict with normal keys',
      'for...of: Iterating directly over values of arrays, sets, maps, strings, or NodeLists'
    ],
    whenNotToUse: [
      'Do not use for...in to iterate over array values (it iterates over object keys/indices as strings)'
    ],
    sections: [
      {
        id: 'symbols-iterables',
        heading: 'Symbol and for...of Usage',
        content: 'Symbols and the iteration protocol power modern language features.',
        codeSnippet: {
          language: 'javascript',
          title: 'Symbols and for...of',
          code: `// Symbols are always unique
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false

// Non-enumerable property keys
const user = {
  name: 'Taylor',
  [id1]: 'secret-uuid-1234'
};
console.log(Object.keys(user)); // ['name'] (symbol key is hidden!)

// for...of loops iterate over values
const techStack = ['JavaScript', 'React', 'Node.js'];
for (const tech of techStack) {
  console.log(tech);
}`,
          description: 'for...of extracts values, while for...in extracts keys.'
        },
        bestPractices: [
          'Use for...of for sequential iteration over array values',
          'Use well-known symbols (e.g. Symbol.iterator) to make custom objects iterable'
        ],
        commonMistakes: [
          'Calling new Symbol(), which throws a TypeError (Symbol is a primitive function, not a constructor)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>for...of Iteration</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #e2e8f0; border-radius: 8px;"></div>
<script>
  const frameworkMap = new Map([
    ['React', 'UI Library'],
    ['Express', 'Backend Framework'],
    ['Vite', 'Build Tool']
  ]);
  let result = '';
  for (const [name, type] of frameworkMap) {
    result += name + ': ' + type + '<br>';
  }
  document.getElementById('output').innerHTML = result;
</script>`,
      explanation: 'for...of combined with destructuring unpacks entries from Maps directly.'
    },
    practiceTask: {
      instruction: 'Write a for...of loop that calculates the total length of an array of words.',
      hint: 'Loop with for (const word of words) and add word.length to total.',
      starterCode: `function totalWordLength(words) {\n  let total = 0;\n  // Write for...of loop here\n  return total;\n}\n`
    },
    keyTakeaways: [
      'Symbol() creates unique identifiers that prevent property collisions.',
      'Symbol properties are not listed in for...in or Object.keys().',
      'for...of iterates over values of any iterable object.'
    ]
  },

  'javascript-event-loop-and-microtasks': {
    id: 'javascript-event-loop-and-microtasks',
    lessonNumber: 10,
    title: 'The Event Loop, Call Stack & Microtasks',
    moduleId: 'js-module-3',
    courseId: 'javascript',
    estimatedMinutes: 10,
    learningObjectives: [
      'Understand the single-threaded nature of JavaScript and the Call Stack',
      'Differentiate between Macro Tasks (setTimeout) and Micro Tasks (Promises)',
      'Trace execution order of synchronous vs asynchronous code',
      'Avoid blocking the main thread'
    ],
    summary: 'The JavaScript Event Loop coordinates execution between the synchronous Call Stack, the Microtask Queue (Promises), and the Macrotask Queue (timers, I/O).',
    whyItExists: 'JavaScript runs on a single main thread. Without non-blocking asynchronous coordination, network requests or timers would freeze the user interface.',
    howItWorks: 'Synchronous code runs on the Call Stack immediately. When the stack empties, the Event Loop empties the entire Microtask Queue (Promises, queueMicrotask) before picking the next Macrotask (setTimeout, setInterval).',
    whenToUse: [
      'Understanding execution timing in complex async workflows',
      'Diagnosing race conditions and unexpected render timings',
      'Using queueMicrotask() for deferred actions before UI repaints'
    ],
    whenNotToUse: [
      'Do not write CPU-heavy blocking loops on the main thread; offload to Web Workers'
    ],
    sections: [
      {
        id: 'event-loop-order',
        heading: 'Execution Order & Queue Priorities',
        content: 'Microtasks always take priority over macrotasks when the call stack clears.',
        codeSnippet: {
          language: 'javascript',
          title: 'Event Loop Execution Priority',
          code: `console.log('1: Synchronous start');

setTimeout(() => {
  console.log('4: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask (Promise)');
});

console.log('2: Synchronous end');

// Output:
// 1: Synchronous start
// 2: Synchronous end
// 3: Microtask (Promise)
// 4: Macrotask (setTimeout)`,
          description: 'Even with 0ms delay, setTimeout runs after all microtasks resolve.'
        },
        bestPractices: [
          'Keep synchronous functions fast to prevent UI stutter and frame drops',
          'Remember that Promise callbacks (.then) run before setTimeout(..., 0)'
        ],
        commonMistakes: [
          'Assuming setTimeout(..., 0) executes immediately before the next line of code'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Event Loop Priority Test</h3>
<button id="runBtn" style="padding: 6px 14px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer;">Run Priority Test</button>
<div id="output" style="font-family: monospace; margin-top: 10px; padding: 12px; background: #0f172a; color: #38bdf8; border-radius: 8px;">Click button above</div>
<script>
  document.getElementById('runBtn').addEventListener('click', () => {
    const out = document.getElementById('output');
    out.innerHTML = '';
    const log = (msg) => out.innerHTML += msg + '<br>';

    log('1. Sync Start');
    setTimeout(() => log('4. Macrotask (Timer)'), 0);
    Promise.resolve().then(() => log('3. Microtask (Promise)'));
    log('2. Sync End');
  });
</script>`,
      explanation: 'Click the button to observe how Promise microtasks preempt timer macrotasks.'
    },
    practiceTask: {
      instruction: 'Predict the order of execution for synchronous code, Promise.then, and setTimeout.',
      hint: 'Stack (Sync) -> Microtasks (Promises) -> Macrotasks (Timers)',
      starterCode: `// Trace the execution order:\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\n// Order: A, C, B\n`
    },
    keyTakeaways: [
      'JavaScript has one Call Stack: code executes run-to-completion.',
      'Microtasks (Promises) run immediately when the Call Stack empties.',
      'Macrotasks (setTimeout, I/O) run one at a time after all pending microtasks are cleared.'
    ]
  },

  'promises-creation-and-chaining': {
    id: 'promises-creation-and-chaining',
    lessonNumber: 11,
    title: 'Promises: Creation, Chaining & Errors',
    moduleId: 'js-module-3',
    courseId: 'javascript',
    estimatedMinutes: 9,
    learningObjectives: [
      'Instantiate new Promises with resolve and reject handlers',
      'Understand the three Promise states: pending, fulfilled, and rejected',
      'Chain asynchronous steps with .then()',
      'Handle failures reliably with .catch() and cleanup with .finally()'
    ],
    summary: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation, providing a clean alternative to callback hell.',
    whyItExists: 'Nested callbacks ("callback hell" or "pyramid of doom") made error handling and sequential async execution unmaintainable in early JavaScript.',
    howItWorks: 'A Promise wraps asynchronous work. Calling resolve(value) transitions state to fulfilled, while calling reject(error) transitions to rejected. State transitions are permanent.',
    whenToUse: [
      'Wrapping asynchronous APIs (e.g. FileReader, geolocation, timers)',
      'Sequencing asynchronous steps where each depends on the previous result'
    ],
    whenNotToUse: [
      'For complex multi-step pipelines, async/await is generally cleaner and easier to read'
    ],
    sections: [
      {
        id: 'promise-chaining',
        heading: 'Creating and Chaining Promises',
        content: 'Learn the Promise constructor pattern and how returning values inside .then() passes data forward.',
        codeSnippet: {
          language: 'javascript',
          title: 'Promise Lifecycle and Chaining',
          code: `function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('Delay must be positive'));
    } else {
      setTimeout(() => resolve(\`Completed in \${ms}ms\`), ms);
    }
  });
}

delay(500)
  .then(result => {
    console.log(result);
    return 'Step 2 Data'; // Passes value to the next .then()
  })
  .then(step2 => {
    console.log(step2);
  })
  .catch(err => {
    console.error('Handled error:', err.message);
  })
  .finally(() => {
    console.log('Cleanup logic executed');
  });`,
          description: '.catch() handles any error thrown in any preceding step of the chain.'
        },
        bestPractices: [
          'Always append a .catch() at the end of a Promise chain',
          'Always return values or Promises inside .then() callbacks to preserve the chain'
        ],
        commonMistakes: [
          'Nesting promises inside .then() instead of returning them, recreating callback hell',
          'Forgetting to reject with an Error object instead of a raw string'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Promise Resolution Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #4ade80; border-radius: 8px;">Waiting for promise...</div>
<script>
  new Promise((resolve) => setTimeout(() => resolve('Data loaded successfully!'), 1000))
    .then(msg => document.getElementById('output').innerHTML = msg);
</script>`,
      explanation: 'The Promise resolves after 1 second, updating the DOM inside the .then callback.'
    },
    practiceTask: {
      instruction: 'Create a function fetchUser that returns a Promise resolving with { id: 1, name: "Alice" } after 100ms.',
      hint: 'return new Promise(resolve => setTimeout(() => resolve(...), 100));',
      starterCode: `function fetchUser() {\n  return new Promise((resolve, reject) => {\n    // Resolve with user object\n  });\n}\n`
    },
    keyTakeaways: [
      'Promises have three states: Pending, Fulfilled, Rejected.',
      'Returning a value in .then() automatically wraps it in a resolved Promise.',
      '.catch() catches errors from any step earlier in the chain.'
    ]
  },

  'async-await-and-error-handling': {
    id: 'async-await-and-error-handling',
    lessonNumber: 12,
    title: 'Async/Await Syntax & Error Handling',
    moduleId: 'js-module-3',
    courseId: 'javascript',
    estimatedMinutes: 9,
    learningObjectives: [
      'Write synchronous-looking asynchronous code with async and await',
      'Handle asynchronous errors gracefully with try/catch blocks',
      'Avoid accidental sequential waterfalls by running independent promises concurrently'
    ],
    summary: 'async/await is syntactic sugar built on top of Promises, allowing developers to structure asynchronous logic using standard sequential control flow.',
    whyItExists: 'Long Promise chains with multiple .then() calls become hard to read when handling complex branching, loops, and try/catch error handling.',
    howItWorks: 'An async function always returns a Promise. The await keyword pauses function execution until the awaited Promise settles, unpacking its resolved value.',
    whenToUse: [
      'Writing API consumers, database operations, and file operations',
      'Handling sequential steps where step B requires data from step A',
      'Using standard try/catch blocks for uniform synchronous and asynchronous error handling'
    ],
    whenNotToUse: [
      'Avoid awaiting independent tasks sequentially when they could run concurrently with Promise.all()'
    ],
    sections: [
      {
        id: 'async-await-flow',
        heading: 'try/catch and Concurrency',
        content: 'Structure clean async functions and avoid common performance pitfalls.',
        codeSnippet: {
          language: 'javascript',
          title: 'Clean async/await with Error Handling',
          code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load user:', error.message);
    throw error; // Re-throw or return fallback data
  }
}

// Concurrency: Avoid serial waterfalls for independent calls!
async function loadDashboard() {
  // Bad: Slow waterfall (takes timeA + timeB)
  // const user = await fetchUser();
  // const posts = await fetchPosts();

  // Good: Parallel execution (takes max(timeA, timeB))
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
}`,
          description: 'Run independent async tasks concurrently with Promise.all.'
        },
        bestPractices: [
          'Always wrap await calls in try/catch or ensure the caller handles rejections',
          'Run independent asynchronous calls in parallel with Promise.all()'
        ],
        commonMistakes: [
          'Using await in top-level files without type="module" enabled',
          'Accidental waterfalling: awaiting independent requests one after another'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Async/Await Simulation</h3>
<button id="loadBtn" style="padding: 6px 14px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer;">Load Data</button>
<div id="output" style="font-family: monospace; margin-top: 10px; padding: 12px; background: #0f172a; color: #34d399; border-radius: 8px;">Idle</div>
<script>
  const fakeApi = () => new Promise(res => setTimeout(() => res('User Profile: Sarah Connor'), 800));
  document.getElementById('loadBtn').addEventListener('click', async () => {
    const out = document.getElementById('output');
    out.innerText = 'Loading...';
    try {
      const data = await fakeApi();
      out.innerText = data;
    } catch (e) {
      out.innerText = 'Error: ' + e.message;
    }
  });
</script>`,
      explanation: 'The async click listener awaits fakeApi() cleanly without nested .then() callbacks.'
    },
    practiceTask: {
      instruction: 'Write an async function getProfile that calls an async fetchProfile() and returns the username.',
      hint: 'const profile = await fetchProfile(); return profile.username;',
      starterCode: `async function getProfile(fetchProfile) {\n  // Await fetchProfile and return username\n}\n`
    },
    keyTakeaways: [
      'async functions always return a Promise implicitly.',
      'await unwraps the resolved value of a Promise or throws an exception on rejection.',
      'Use try/catch for robust, readable error handling.'
    ]
  },

  'promise-combinators-all-race-any': {
    id: 'promise-combinators-all-race-any',
    lessonNumber: 13,
    title: 'Promise Combinators: all, allSettled, race, any',
    moduleId: 'js-module-3',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Coordinate multiple parallel promises with Promise.all()',
      'Inspect complete outcomes without short-circuiting using Promise.allSettled()',
      'Return the fastest response with Promise.race()',
      'Return the first successful fulfillment with Promise.any()'
    ],
    summary: 'Promise combinators orchestrate multiple asynchronous tasks concurrently, providing tailored strategies for all-or-nothing, fault-tolerant, or fastest-response scenarios.',
    whyItExists: 'Complex applications frequently need to load multiple data resources simultaneously or query redundant endpoints with timeout fallbacks.',
    howItWorks: 'Combinators take an iterable of Promises and return a single unified Promise governed by specific resolution and rejection rules.',
    whenToUse: [
      'Promise.all: When every request is strictly mandatory (short-circuits on first rejection)',
      'Promise.allSettled: When you want results from all tasks regardless of whether some failed',
      'Promise.race: Request timeouts (racing an API call against a timer)',
      'Promise.any: Reaching multiple mirrors/CDNs, resolving with the first successful answer'
    ],
    whenNotToUse: [
      'Do not use Promise.all if one non-critical failure shouldn\'t crash the entire screen'
    ],
    sections: [
      {
        id: 'combinators-comparison',
        heading: 'Combinator Comparison Table',
        content: 'Understand when to use each combinator based on failure tolerance.',
        codeSnippet: {
          language: 'javascript',
          title: 'Promise Combinators in Code',
          code: `const p1 = fetch('/api/user');
const p2 = fetch('/api/notifications');

// 1. All or nothing
const [user, notifs] = await Promise.all([p1, p2]);

// 2. Fault tolerant: wait for all to settle
const results = await Promise.allSettled([p1, p2]);
results.forEach(res => {
  if (res.status === 'fulfilled') console.log(res.value);
  if (res.status === 'rejected') console.warn(res.reason);
});

// 3. Race against a timeout
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout exceeded')), ms)
  );
  return Promise.race([promise, timeout]);
}`,
          description: 'Promise.allSettled is ideal for batch operations that should not fail as a whole.'
        },
        bestPractices: [
          'Use Promise.allSettled() when rendering dashboards where some widgets may fail independently',
          'Use Promise.race() for network request timeout wrappers'
        ],
        commonMistakes: [
          'Using Promise.all for independent batch uploads, where one failure halts everything'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Promise.allSettled Demo</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #a5b4fc; border-radius: 8px;">Running...</div>
<script>
  const success = Promise.resolve('Service A: Online');
  const failure = Promise.reject('Service B: Offline');

  Promise.allSettled([success, failure]).then(results => {
    let html = '';
    results.forEach(r => {
      html += r.status === 'fulfilled' ? '✅ ' + r.value : '❌ ' + r.reason;
      html += '<br>';
    });
    document.getElementById('output').innerHTML = html;
  });
</script>`,
      explanation: 'Promise.allSettled collects both success and failure states without throwing.'
    },
    practiceTask: {
      instruction: 'Combine three promises with Promise.all and return the combined results array.',
      hint: 'return Promise.all([p1, p2, p3]);',
      starterCode: `function loadAll(p1, p2, p3) {\n  return Promise.all([]);\n}\n`
    },
    keyTakeaways: [
      'Promise.all: Fails fast on the first rejection.',
      'Promise.allSettled: Never rejects; returns status array ({ status, value/reason }).',
      'Promise.race: Settles with the first settled promise (fulfilled or rejected).',
      'Promise.any: Resolves with the first fulfilled promise, ignoring rejections.'
    ]
  },

  'fetch-api-and-network-requests': {
    id: 'fetch-api-and-network-requests',
    lessonNumber: 14,
    title: 'The Fetch API & HTTP Requests',
    moduleId: 'js-module-3',
    courseId: 'javascript',
    estimatedMinutes: 9,
    learningObjectives: [
      'Make HTTP GET and POST requests using the native fetch() API',
      'Handle JSON payloads with response.json()',
      'Check response.ok for HTTP error status codes (404, 500)',
      'Set custom headers and request options (Authorization, Content-Type)'
    ],
    summary: 'The Fetch API is the modern native browser interface for executing asynchronous HTTP network requests and interacting with REST APIs.',
    whyItExists: 'The old XMLHttpRequest (XHR) API was notoriously verbose, event-driven, and did not support modern Promise workflows.',
    howItWorks: 'fetch(url, options) returns a Promise resolving to a Response object. Crucially, fetch only rejects on network failures, NOT on HTTP 404 or 500 errors.',
    whenToUse: [
      'Fetching data from REST APIs and web services',
      'Submitting forms asynchronously via JSON POST requests',
      'Streaming large file downloads or uploads'
    ],
    whenNotToUse: [
      'If you need built-in interceptors or automatic request retries, libraries like Axios or wrapper abstractions can help'
    ],
    sections: [
      {
        id: 'fetch-usage',
        heading: 'GET and POST Requests with fetch()',
        content: 'Understand response parsing and header configuration.',
        codeSnippet: {
          language: 'javascript',
          title: 'Modern fetch API Patterns',
          code: `// GET Request with error checking
async function getArticles() {
  const response = await fetch('https://api.example.com/articles');
  if (!response.ok) {
    throw new Error(\`HTTP Error \${response.status}: \${response.statusText}\`);
  }
  const data = await response.json();
  return data;
}

// POST Request with JSON Body & Headers
async function createArticle(articleData) {
  const response = await fetch('https://api.example.com/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer my-jwt-token'
    },
    body: JSON.stringify(articleData)
  });
  return response.json();
}`,
          description: 'Always check if (!response.ok) before parsing response.json().'
        },
        bestPractices: [
          'Always verify response.ok before parsing body data',
          'Include Content-Type: application/json when sending JSON request bodies'
        ],
        commonMistakes: [
          'Assuming fetch rejects on 404/500 errors (it resolves; only network dropouts reject)',
          'Forgetting to JSON.stringify() the object in request body'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Fetch API Simulation</h3>
<button id="fetchBtn" style="padding: 6px 14px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer;">Fetch Sample Post</button>
<div id="output" style="font-family: monospace; margin-top: 10px; padding: 12px; background: #0f172a; color: #38bdf8; border-radius: 8px;">Click to fetch</div>
<script>
  document.getElementById('fetchBtn').addEventListener('click', async () => {
    const out = document.getElementById('output');
    out.innerText = 'Requesting...';
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!res.ok) throw new Error('Status: ' + res.status);
      const post = await res.json();
      out.innerHTML = '<strong>' + post.title + '</strong><br>' + post.body;
    } catch(err) {
      out.innerText = 'Fetch error: ' + err.message;
    }
  });
</script>`,
      explanation: 'Fetches real JSON data from jsonplaceholder and updates the DOM dynamically.'
    },
    practiceTask: {
      instruction: 'Write an async function postData(url, data) that sends a POST request with headers and JSON stringified body.',
      hint: 'method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)',
      starterCode: `async function postData(url, data) {\n  const response = await fetch(url, {\n    // Configure POST request\n  });\n  return response.json();\n}\n`
    },
    keyTakeaways: [
      'fetch() returns a Promise resolving to an HTTP Response object.',
      'Check response.ok (status 200–299) to verify HTTP success.',
      'Call response.json() or response.text() to unpack the body stream.'
    ]
  },

  'es6-classes-and-inheritance': {
    id: 'es6-classes-and-inheritance',
    lessonNumber: 15,
    title: 'ES6 Classes, Inheritance & Private Fields',
    moduleId: 'js-module-4',
    courseId: 'javascript',
    estimatedMinutes: 9,
    learningObjectives: [
      'Define ES6 classes with constructors and methods',
      'Extend classes using extends and super()',
      'Use static methods and getters/setters',
      'Encapsulate private state using hash private fields (#field)'
    ],
    summary: 'ES6 classes provide an intuitive syntax for object-oriented programming in JavaScript, sitting cleanly atop prototypical inheritance.',
    whyItExists: 'Prototype-based inheritance in ES5 required complex Function.prototype and Object.create boilerplate that confused developers from classical OOP backgrounds.',
    howItWorks: 'Classes in JavaScript are functions under the hood. Methods are attached to Class.prototype, and static methods are attached to the constructor function directly.',
    whenToUse: [
      'Modeling domain entities, state machines, and data structures',
      'Building utility toolkits and extensible component classes',
      'Encapsulating private internal state with #privateField'
    ],
    whenNotToUse: [
      'Do not force classes where simple functions and object literals are more straightforward'
    ],
    sections: [
      {
        id: 'class-syntax',
        heading: 'Classes, Super & Private State',
        content: 'Modern class syntax includes constructors, methods, getters, and private fields.',
        codeSnippet: {
          language: 'javascript',
          title: 'Class Declaration and Inheritance',
          code: `class Vehicle {
  // Private field (cannot be accessed outside class!)
  #vinNumber;

  constructor(make, model, vin) {
    this.make = make;
    this.model = model;
    this.#vinNumber = vin;
  }

  // Getter
  get description() {
    return \`\${this.make} \${this.model}\`;
  }

  // Method
  start() {
    return \`\${this.description} engine started.\`;
  }
}

// Subclass inheritance
class ElectricCar extends Vehicle {
  constructor(make, model, vin, batteryKwh) {
    super(make, model, vin); // Calls parent constructor!
    this.batteryKwh = batteryKwh;
  }

  // Method override
  start() {
    return \`\${this.description} powered on silently.\`;
  }
}`,
          description: 'Private fields starting with # are enforced at the language level.'
        },
        bestPractices: [
          'Always call super() first in derived subclass constructors before accessing this',
          'Use #private fields instead of legacy underscore conventions (_private)'
        ],
        commonMistakes: [
          'Trying to instantiate a class without new: Person(); // TypeError',
          'Referencing this before calling super() in a child constructor'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>ES6 Class Inheritance</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #38bdf8; border-radius: 8px;"></div>
<script>
  class User {
    constructor(name) { this.name = name; }
    getRole() { return 'Standard User'; }
  }
  class Admin extends User {
    getRole() { return 'Super Admin (Full Access)'; }
  }
  const admin = new Admin('Taylor');
  document.getElementById('output').innerHTML = admin.name + ' - ' + admin.getRole();
</script>`,
      explanation: 'The Admin subclass inherits the name property and overrides the getRole method.'
    },
    practiceTask: {
      instruction: 'Create a Rectangle class with width and height properties and an area() method.',
      hint: 'class Rectangle { constructor(w, h) { this.w = w; this.h = h; } area() { return this.w * this.h; } }',
      starterCode: `class Rectangle {\n  // Implement constructor and area()\n}\n`
    },
    keyTakeaways: [
      'class is clean syntactic sugar over prototype-based inheritance.',
      'extends sets up prototype chains; super() calls the parent constructor.',
      'Prefixing with # creates true private class variables.'
    ]
  },

  'es-modules-import-and-export': {
    id: 'es-modules-import-and-export',
    lessonNumber: 16,
    title: 'ES Modules: Import, Export & Code Splitting',
    moduleId: 'js-module-4',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Export and import named variables, functions, and classes',
      'Use default exports and understand when to choose named vs default',
      'Rename imports with as aliases',
      'Dynamically import modules on demand with import()'
    ],
    summary: 'ES Modules (ESM) are the official standardized module system for JavaScript, supporting static analysis, tree-shaking, and asynchronous dynamic loading.',
    whyItExists: 'Before standard ES Modules, JavaScript relied on fragmented third-party module formats like CommonJS (Node.js) and AMD (RequireJS), which prevented browser optimization.',
    howItWorks: 'import statements are statically evaluated before code runs, enabling build tools (like Vite) to eliminate dead code (tree-shaking). Dynamic import() returns a Promise.',
    whenToUse: [
      'Organizing code into reusable, modular files in frontend and backend',
      'Code splitting large components or heavy libraries with import()'
    ],
    whenNotToUse: [
      'Do not mix CommonJS (module.exports) and ES Modules (export default) in the same file'
    ],
    sections: [
      {
        id: 'esm-patterns',
        heading: 'Named vs Default Exports',
        content: 'Understand syntax patterns for modular code sharing.',
        codeSnippet: {
          language: 'javascript',
          title: 'ES Module Syntax',
          code: `// --- mathUtils.js ---
// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// Default export
export default function multiply(a, b) { return a * b; }

// --- app.js ---
// Importing default and named exports together
import multiply, { PI, add as sum } from './mathUtils.js';

// Dynamic import for code splitting
async function loadChart() {
  const { Chart } = await import('./heavyChartLibrary.js');
  new Chart().render();
}`,
          description: 'Named exports allow IDEs to autocomplete imports reliably.'
        },
        bestPractices: [
          'Prefer named exports over default exports for better refactoring and IDE auto-imports',
          'Use dynamic import() for heavy modules that are only needed on user interaction'
        ],
        commonMistakes: [
          'Attempting to conditionally use top-level import statements inside an if block (use dynamic import() instead)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>ES Modules Structure</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #1e293b; color: #a5f3fc; border-radius: 8px;">
export { helperA, helperB };<br>
import { helperA } from './helpers.js';
</div>`,
      explanation: 'ES Modules enforce clear interfaces between files and allow bundlers to strip unused code.'
    },
    practiceTask: {
      instruction: 'Write export statements for a named function capitalize and a default class App.',
      hint: 'export function capitalize(str) { ... } export default class App { ... }',
      starterCode: `// Export capitalize as named and App as default\nfunction capitalize(s) { return s.toUpperCase(); }\nclass App {}\n`
    },
    keyTakeaways: [
      'ES Modules are the official standard in both browsers and modern Node.js.',
      'Named exports ({ a, b }) facilitate tree-shaking; default exports export a single primary entity.',
      'dynamic import() loads modules asynchronously at runtime.'
    ]
  },

  'closures-and-lexical-scope': {
    id: 'closures-and-lexical-scope',
    lessonNumber: 17,
    title: 'Closures and Lexical Scope',
    moduleId: 'js-module-4',
    courseId: 'javascript',
    estimatedMinutes: 9,
    learningObjectives: [
      'Understand what a closure is and how it retains outer variables',
      'Create private state and factory functions using closures',
      'Avoid memory leaks and loop closure pitfalls',
      'Understand how React hooks rely on closures'
    ],
    summary: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment, allowing it to remember variables after the outer function has returned.',
    whyItExists: 'Closures enable data privacy, function currying, event handling callbacks, and stateful hooks without relying on global variables.',
    howItWorks: 'When a function is declared inside another function, the inner function maintains an internal link to the outer scope\'s variable environment in memory.',
    whenToUse: [
      'Encapsulating private variables and creating factory functions',
      'Event handlers and timer callbacks that need access to surrounding state',
      'Memoization and caching functions'
    ],
    whenNotToUse: [
      'Be mindful of memory: keeping large closures alive unnecessarily prevents garbage collection'
    ],
    sections: [
      {
        id: 'closure-patterns',
        heading: 'Creating Private State with Closures',
        content: 'Observe how closures maintain private counters without exposing the variable.',
        codeSnippet: {
          language: 'javascript',
          title: 'Closure Counter Factory',
          code: `function createCounter(initialValue = 0) {
  // 'count' is private and cannot be modified directly from outside!
  let count = initialValue;

  return {
    increment() { count++; return count; },
    decrement() { count--; return count; },
    getValue() { return count; }
  };
}

const counterA = createCounter(10);
console.log(counterA.increment()); // 11
console.log(counterA.increment()); // 12
console.log(counterA.getValue());  // 12
// counterA.count is undefined (protected!)`,
          description: 'Each counter instance has its own independent closure scope.'
        },
        bestPractices: [
          'Use closures to encapsulate private variables that external code should not tamper with',
          'Remember that React hooks (like useState) use closures under the hood'
        ],
        commonMistakes: [
          'Stale closures in React useEffect when dependency arrays are omitted'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Closure Counter Demo</h3>
<button id="incBtn" style="padding: 6px 14px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer;">Increment Counter</button>
<div id="output" style="font-family: monospace; margin-top: 10px; padding: 12px; background: #0f172a; color: #a5b4fc; border-radius: 8px;">Count: 0</div>
<script>
  function makeCounter() {
    let count = 0;
    return () => ++count;
  }
  const countUp = makeCounter();
  document.getElementById('incBtn').addEventListener('click', () => {
    document.getElementById('output').innerText = 'Count: ' + countUp();
  });
</script>`,
      explanation: 'The countUp function retains access to the private count variable across clicks.'
    },
    practiceTask: {
      instruction: 'Create a createGreeter(greeting) function that returns a function taking a name and returning `${greeting}, ${name}!`.',
      hint: 'function createGreeter(greeting) { return (name) => `${greeting}, ${name}!`; }',
      starterCode: `function createGreeter(greeting) {\n  // Return inner function\n}\n`
    },
    keyTakeaways: [
      'A closure gives an inner function access to an outer function\'s scope.',
      'Closures preserve outer variables in memory even after the outer function finishes executing.',
      'Fundamental to functional programming, callbacks, and React hooks.'
    ]
  },

  'higher-order-functions-and-currying': {
    id: 'higher-order-functions-and-currying',
    lessonNumber: 18,
    title: 'Higher-Order Functions and Currying',
    moduleId: 'js-module-4',
    courseId: 'javascript',
    estimatedMinutes: 8,
    learningObjectives: [
      'Define higher-order functions (functions that accept or return functions)',
      'Understand the concept of currying and partial application',
      'Compose reusable utility pipelines',
      'Understand function purity and immutability'
    ],
    summary: 'Higher-order functions treat functions as first-class citizens, unlocking function composition, middleware architectures, and currying.',
    whyItExists: 'Writing monolithic functions with repetitive parameters creates brittle code. Higher-order functions allow assembling complex behaviors from small, focused utilities.',
    howItWorks: 'Since JavaScript functions are first-class values, they can be passed as arguments, assigned to variables, and returned from other functions.',
    whenToUse: [
      'Creating reusable middleware pipelines (Express middleware, Redux middleware)',
      'Building configurable validation or logging wrappers',
      'Functional composition and data pipelines'
    ],
    whenNotToUse: [
      'Over-currying simple functions adds unnecessary cognitive overhead'
    ],
    sections: [
      {
        id: 'currying-example',
        heading: 'Currying & Function Composition',
        content: 'Currying translates a function callable with multiple arguments into a chain of functions callable with single arguments.',
        codeSnippet: {
          language: 'javascript',
          title: 'Currying and Function Decorators',
          code: `// Normal function
const add = (a, b) => a + b;

// Curried function
const curriedAdd = a => b => a + b;
const addFive = curriedAdd(5);
console.log(addFive(10)); // 15
console.log(addFive(20)); // 25

// Practical: Configurable logger higher-order function
const createLogger = prefix => message => {
  console.log(\`[\${prefix}] \${new Date().toISOString()}: \${message}\`);
};

const authLog = createLogger('AUTH');
authLog('User signed in'); // [AUTH] 2026-10-15...: User signed in`,
          description: 'Currying creates reusable specialized functions from general ones.'
        },
        bestPractices: [
          'Keep higher-order utilities small and focused on a single responsibility',
          'Use currying when the first argument changes infrequently (e.g. configuration or IDs)'
        ],
        commonMistakes: [
          'Confusing currying (unary functions) with partial application (functions with any number of arguments)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Curried Discount Calculator</h3>
<div id="output" style="font-family: monospace; padding: 12px; background: #0f172a; color: #f472b6; border-radius: 8px;"></div>
<script>
  const applyDiscount = discount => price => price - (price * discount);
  const blackFriday = applyDiscount(0.3); // 30% off
  const result1 = blackFriday(100);
  const result2 = blackFriday(250);
  document.getElementById('output').innerHTML = '$100 with 30% off: $' + result1 + '<br>$250 with 30% off: $' + result2;
</script>`,
      explanation: 'applyDiscount(0.3) creates a specialized blackFriday discount function ready to apply to any price.'
    },
    practiceTask: {
      instruction: 'Write a curried function multiply(a)(b) that returns their product.',
      hint: 'const multiply = a => b => a * b;',
      starterCode: `const multiply = (a) => (b) => {\n  // return product\n};\n`
    },
    keyTakeaways: [
      'Higher-order functions accept functions as arguments or return them as results.',
      'Currying converts f(a, b) into f(a)(b).',
      'Enables functional composition, partial application, and clean middleware layers.'
    ]
  }
};
