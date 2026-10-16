export const nodeLessons = {
  'node-architecture-and-event-loop': {
    id: 'node-architecture-and-event-loop',
    lessonNumber: 1,
    title: 'Node.js Runtime & Event Loop Architecture',
    moduleId: 'node-module-1',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Understand how Node.js executes JavaScript outside the browser',
      'Learn the roles of the Google V8 engine and the Libuv C++ library',
      'Master the stages of the Node.js Event Loop (Timers, I/O, Poll, Check, Close)',
      'Distinguish between process.nextTick, microtasks, and macrotasks'
    ],
    summary: 'Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome\'s V8 engine that executes code using a non-blocking, event-driven I/O model.',
    whyItExists: 'Traditional servers (like Apache) allocate a new operating system thread per request, consuming significant RAM and stalling under heavy concurrent loads. Node.js uses a single execution thread with non-blocking I/O to handle tens of thousands of concurrent connections effortlessly.',
    howItWorks: 'V8 parses and executes JavaScript synchronously. When asynchronous tasks (file operations, network calls, crypto) are requested, Node delegates them to Libuv’s multi-threaded threadpool or kernel primitives. Upon completion, callbacks are pushed to the Event Loop phases.',
    whenToUse: [
      'Building RESTful APIs and microservices',
      'Real-time collaborative applications (WebSockets, chat, live notifications)',
      'Data streaming, proxy gateways, and server-side rendering (SSR)'
    ],
    whenNotToUse: [
      'Heavy CPU-bound computations (video encoding, complex matrix math) without Worker Threads or offloading to dedicated worker services'
    ],
    sections: [
      {
        id: 'event-loop-phases',
        heading: 'Libuv & The Event Loop Phases',
        content: 'The event loop continuously cycles through specific queues: Timers (setTimeout/setInterval) -> Pending I/O Callbacks -> Idle/Prepare -> Poll (retrieves new I/O events) -> Check (setImmediate) -> Close Callbacks. Microtasks (Promise jobs and process.nextTick) drain immediately between phase transitions.',
        codeSnippet: {
          language: 'javascript',
          title: 'Event Loop Execution Order',
          code: `console.log('1. Synchronous script start');

setTimeout(() => {
  console.log('5. setTimeout timer callback (macrotask)');
}, 0);

setImmediate(() => {
  console.log('6. setImmediate check callback');
});

Promise.resolve().then(() => {
  console.log('3. Promise microtask');
});

process.nextTick(() => {
  console.log('2. process.nextTick (highest priority microtask)');
});

console.log('4. Synchronous script end');`,
          description: 'Synchronous code runs first, followed by process.nextTick, Promise microtasks, and then Event Loop phases.'
        },
        bestPractices: [
          'Never block the event loop with synchronous long-running loops (JSON.parse on huge payloads or crypto sync methods)',
          'Use setImmediate instead of setTimeout(fn, 0) for poll-phase callback scheduling'
        ],
        commonMistakes: [
          'Confusing single-threaded JS with single-threaded Node (Libuv uses a 4-thread worker pool by default for fs and crypto operations)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Node.js Non-Blocking Architecture</h3>
<div style="font-family: monospace; background: #0f172a; padding: 16px; border-radius: 8px; color: #4ade80;">
  <div>[Thread 1: Main JS Thread] => V8 Engine (Call Stack)</div>
  <div style="margin-top: 6px; color: #38bdf8;">[Libuv C++ Engine] => Event Loop & Thread Pool (Worker 1..4)</div>
  <div style="margin-top: 6px; color: #f59e0b;">Status: Non-blocking I/O Ready</div>
</div>`,
      explanation: 'Node delegates expensive OS operations to Libuv and kernel hooks, allowing the main JS thread to keep serving client requests.'
    },
    practiceTask: {
      instruction: 'Identify the order of output between console.log, process.nextTick, and setTimeout.',
      hint: 'process.nextTick runs before any timers or macrotasks.',
      starterCode: `// Trace execution order\nconsole.log('A');\nprocess.nextTick(() => console.log('B'));\nsetTimeout(() => console.log('C'), 0);\n`
    },
    keyTakeaways: [
      'Node.js runs JS on a single main thread backed by Libuv C++ threads for system I/O.',
      'process.nextTick runs immediately after the current operation finishes, before the next event loop phase.',
      'Avoid CPU-heavy blocking operations on the main event loop.'
    ]
  },

  'modules-commonjs-vs-esm': {
    id: 'modules-commonjs-vs-esm',
    lessonNumber: 2,
    title: 'Module Systems: CommonJS (require) vs ES Modules (import)',
    moduleId: 'node-module-1',
    courseId: 'nodejs',
    estimatedMinutes: 8,
    learningObjectives: [
      'Understand the historical CommonJS module format (module.exports / require)',
      'Learn how to enable and write modern ECMAScript Modules (ESM) in Node.js',
      'Recognize key differences: synchronous vs asynchronous loading, top-level await',
      'Resolve interoperability challenges between CJS and ESM'
    ],
    summary: 'Node.js natively supports both CommonJS (the traditional require/module.exports syntax) and modern ECMAScript Modules (import/export syntax with "type": "module").',
    whyItExists: 'When Node was released in 2009, JavaScript had no native module syntax, so Node adopted CommonJS. In 2015, ES6 standardized import/export for browsers and runtimes, and Node now fully supports standard ESM.',
    howItWorks: 'CommonJS evaluates synchronously at runtime (`require()` reads and executes the file immediately). ES Modules are parsed and resolved statically in phases (loading, parsing, linking, evaluation), enabling tree-shaking and top-level await.',
    whenToUse: [
      'Use ES Modules (`"type": "module"` in package.json or `.mjs`) for all modern Node.js 18+ projects',
      'Use CommonJS (`.cjs`) when maintaining legacy codebases or using packages that lack ESM support'
    ],
    whenNotToUse: [
      'Avoid mixing `require` and `import` haphazardly in the same file without explicit interop patterns'
    ],
    sections: [
      {
        id: 'module-comparison',
        heading: 'CommonJS vs ESM Syntax Comparison',
        content: 'To use ESM in Node.js, add `"type": "module"` to `package.json` or save files with the `.mjs` extension. In ESM, `__dirname` and `__filename` are replaced by `import.meta.url`.',
        codeSnippet: {
          language: 'javascript',
          title: 'CJS vs ESM Code Structure',
          code: `// --- 1. CommonJS (math.cjs) ---
function add(a, b) { return a + b; }
module.exports = { add };

// Consuming CJS:
const { add } = require('./math.cjs');

// --- 2. Modern ES Module (math.js with "type": "module") ---
export function multiply(a, b) { return a * b; }
export default function calculator() { return 'Calculator v1'; }

// Consuming ESM:
import calc, { multiply } from './math.js';`,
          description: 'ESM uses standard export and import keywords with static analysis.'
        },
        bestPractices: [
          'Configure `"type": "module"` in new projects to use standard JS import syntax',
          'Use path utils (`fileURLToPath(import.meta.url)`) when calculating local paths in ESM'
        ],
        commonMistakes: [
          'Trying to use `__dirname` directly in an ES module (throws ReferenceError: __dirname is not defined)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>ESM Directory Resolution Helper</h3>
<pre style="background: #1e293b; color: #a5f3fc; padding: 12px; border-radius: 6px;">
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
</pre>`,
      explanation: 'In ESM mode, Node provides `import.meta.url` which converts into standard filesystem paths.'
    },
    practiceTask: {
      instruction: 'Write an ES module export for a function named `formatPrice` that formats a number into currency.',
      hint: 'Use the `export function` keyword.',
      starterCode: `// Write an ES module export\nexport function formatPrice(amount) {\n  return '$' + amount.toFixed(2);\n}\n`
    },
    keyTakeaways: [
      'CommonJS uses require() and module.exports (evaluated synchronously).',
      'ES Modules use import/export and require "type": "module" in package.json.',
      'ESM allows native top-level await without wrapping in async IIFE.'
    ]
  },

  'node-globals-process-env': {
    id: 'node-globals-process-env',
    lessonNumber: 3,
    title: 'Node Globals, process, env & Buffer',
    moduleId: 'node-module-1',
    courseId: 'nodejs',
    estimatedMinutes: 9,
    learningObjectives: [
      'Explore Node globals: process, Buffer, globalThis, and timers',
      'Manage environment variables with process.env and dotenv',
      'Handle process lifecycle events: exit, uncaughtException, SIGINT, SIGTERM',
      'Work with raw binary data using Buffer'
    ],
    summary: 'Node.js provides a set of global objects available in all modules without imports. Chief among them are process (host environment control) and Buffer (binary memory handling).',
    whyItExists: 'Server applications need direct control over environment variables, system signals (container shutdowns), memory limits, and raw binary network packets that standard browser JS does not support.',
    howItWorks: '`process` is an EventEmitter instance providing hooks into command-line arguments (`process.argv`), current working directory (`process.cwd()`), and system environment (`process.env`). `Buffer` allocates fixed-sized chunks of memory outside the V8 heap.',
    whenToUse: [
      'Accessing API keys and port numbers via `process.env.PORT`',
      'Graceful shutdown of databases and servers via `process.on("SIGTERM")`',
      'Manipulating binary images, audio streams, or cryptography with `Buffer`'
    ],
    whenNotToUse: [
      'Never hardcode production credentials or database passwords directly in source code'
    ],
    sections: [
      {
        id: 'process-and-buffer',
        heading: 'Environment Variables and Graceful Shutdown',
        content: 'Production apps read secrets and ports from `process.env`. When hosting in Docker or Kubernetes, capturing `SIGTERM` ensures active HTTP requests complete before the process exits.',
        codeSnippet: {
          language: 'javascript',
          title: 'Environment & Graceful Termination',
          code: `const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(\`Server starting in \${NODE_ENV} mode on port \${PORT}...\`);

// Handling graceful server termination
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server and database...');
  // closeDatabaseConnection().then(() => process.exit(0));
});

// Binary Buffer usage:
const buf = Buffer.from('Hello WebCraft', 'utf-8');
console.log('Hex buffer:', buf.toString('hex'));
console.log('Base64:', buf.toString('base64'));`,
          description: 'Accessing process configurations and binary operations.'
        },
        bestPractices: [
          'Use .env files locally (with dotenv) and gitignore the .env file',
          'Always validate critical environment variables on startup'
        ],
        commonMistakes: [
          'Assuming process.env values are numbers or booleans (all process.env values are strings!)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Buffer & Base64 Encoder</h3>
<div style="background: #111827; padding: 12px; border-radius: 6px; font-family: monospace; color: #f43f5e;">
  Input: "Node.js"<br>
  Hex: 4e 6f 64 65 2e 6a 73<br>
  Base64: Tm9kZS5qcw==
</div>`,
      explanation: 'Buffers allow Node.js to read and write raw bytes for network sockets and files.'
    },
    practiceTask: {
      instruction: 'Read the PORT variable from process.env with a fallback to 5000.',
      hint: 'Use the logical OR (||) operator.',
      starterCode: `// Define PORT with a fallback of 5000\nconst PORT = process.env.PORT || 5000;\n`
    },
    keyTakeaways: [
      'process.env stores all configuration variables as strings.',
      'Buffer handles binary data streams without converting to heavy strings.',
      'Listen for SIGTERM and SIGINT to gracefully close active network connections.'
    ]
  },

  'npm-and-package-json': {
    id: 'npm-and-package-json',
    lessonNumber: 4,
    title: 'NPM, Scripts, Dependencies & package.json',
    moduleId: 'node-module-1',
    courseId: 'nodejs',
    estimatedMinutes: 8,
    learningObjectives: [
      'Configure package.json metadata, scripts, and dependencies',
      'Distinguish dependencies vs devDependencies vs peerDependencies',
      'Understand semantic versioning (caret ^ vs tilde ~ vs exact versions)',
      'Manage package-lock.json for reproducible builds'
    ],
    summary: 'NPM (Node Package Manager) is the world\'s largest software registry. The package.json manifest tracks project dependencies, scripts, and build lifecycles.',
    whyItExists: 'Modern applications rely on open-source libraries. NPM standardizes package distribution, version compatibility, and automated execution scripts.',
    howItWorks: 'Running `npm install <pkg>` updates `package.json`, generates deterministic dependency tree hashes in `package-lock.json`, and downloads modules into the local `node_modules/` folder.',
    whenToUse: [
      'Adding runtime dependencies (`npm i express cors dotenv`)',
      'Adding build-time developer tools (`npm i -D nodemon vitest eslint`)',
      'Defining custom automated workflow scripts (`npm run build`, `npm run dev`)'
    ],
    whenNotToUse: [
      'Never commit node_modules to Git repository tracking'
    ],
    sections: [
      {
        id: 'semver-and-scripts',
        heading: 'Semantic Versioning (SemVer) & NPM Scripts',
        content: 'SemVer follows MAJOR.MINOR.PATCH (e.g., 2.4.1). Caret `^2.4.1` allows backwards-compatible minor and patch updates (< 3.0.0). Tilde `~2.4.1` allows patch updates only (< 2.5.0).',
        codeSnippet: {
          language: 'json',
          title: 'Sample package.json',
          code: `{
  "name": "backend-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "test": "vitest run"
  },
  "dependencies": {
    "express": "^4.19.2",
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}`,
          description: 'Package manifest with lifecycle scripts and dependency categorization.'
        },
        bestPractices: [
          'Always commit package-lock.json to version control',
          'Use `npm ci` (clean install) in CI/CD deployment pipelines for deterministic builds'
        ],
        commonMistakes: [
          'Installing build tools or test runners under production dependencies'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>SemVer Visualizer</h3>
<ul style="list-style: none; padding: 0; font-family: monospace; color: #cbd5e1;">
  <li><strong style="color: #38bdf8;">^1.2.3:</strong> Accepts 1.2.4, 1.3.0, but NOT 2.0.0</li>
  <li><strong style="color: #ec4899;">~1.2.3:</strong> Accepts 1.2.4, but NOT 1.3.0</li>
  <li><strong style="color: #10b981;">1.2.3:</strong> Locks strictly to 1.2.3</li>
</ul>`,
      explanation: 'Semantic version prefixes dictate which updates npm install can automatically download.'
    },
    practiceTask: {
      instruction: 'Add a start script that executes `node index.js`.',
      hint: 'Scripts are key-value pairs inside the scripts object.',
      starterCode: `// package.json scripts sample\n{\n  "scripts": {\n    "start": "node index.js"\n  }\n}\n`
    },
    keyTakeaways: [
      'package.json is the project manifest; package-lock.json locks exact dependency hashes.',
      'dependencies are for production runtime; devDependencies are for build/test tools.',
      'npm ci provides rapid, exact installs in production and CI/CD pipelines.'
    ]
  },

  'fs-module-and-async-file-io': {
    id: 'fs-module-and-async-file-io',
    lessonNumber: 5,
    title: 'The fs Module: Asynchronous File I/O & Promises',
    moduleId: 'node-module-2',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Read, write, append, and delete files using node:fs/promises',
      'Understand why synchronous file methods (fs.readFileSync) harm server throughput',
      'Inspect directory trees with fs.readdir and fs.stat',
      'Handle file permissions and I/O error scenarios'
    ],
    summary: 'The node:fs module provides APIs for interacting with the file system. Modern Node favors the promise-based fs/promises API with async/await.',
    whyItExists: 'Servers frequently need to read static templates, save uploaded user assets, append access logs, and generate reports without freezing network request handling.',
    howItWorks: '`node:fs/promises` wraps operating system file descriptors in asynchronous system calls executed by Libuv worker threads, returning native JavaScript promises.',
    whenToUse: [
      'Reading and writing JSON config files, log files, or text files',
      'Checking file existence with `fs.access` before processing',
      'Recursive directory creation (`mkdir(path, { recursive: true })`)'
    ],
    whenNotToUse: [
      'Never use synchronous functions (`readFileSync`, `writeFileSync`) in request handlers',
      'Do not read multi-gigabyte files into memory all at once with `readFile` (use Streams instead)'
    ],
    sections: [
      {
        id: 'fs-promises-api',
        heading: 'Reading & Writing Files with async/await',
        content: 'Import `node:fs/promises` for a clean async/await interface. Always specify encoding (`"utf-8"`) when reading text to receive a string instead of a raw Buffer.',
        codeSnippet: {
          language: 'javascript',
          title: 'Asynchronous File Operations',
          code: `import fs from 'node:fs/promises';
import path from 'node:path';

async function manageFiles() {
  const filePath = path.join(process.cwd(), 'data.txt');

  try {
    // 1. Write text to file
    await fs.writeFile(filePath, 'Hello from Node fs/promises!\\n', 'utf-8');

    // 2. Append additional data
    await fs.appendFile(filePath, 'Appended log entry at ' + new Date().toISOString());

    // 3. Read back text
    const content = await fs.readFile(filePath, 'utf-8');
    console.log('File Content:\\n', content);
  } catch (error) {
    console.error('File operation error:', error.message);
  }
}

manageFiles();`,
          description: 'Writing, appending, and reading files asynchronously without blocking.'
        },
        bestPractices: [
          'Prefix built-in modules with `node:` (e.g., `import fs from "node:fs/promises"`)',
          'Always use try/catch blocks around file operations to catch ENOENT (file not found) errors'
        ],
        commonMistakes: [
          'Omitting the "utf-8" encoding parameter in readFile, resulting in an unparsed Buffer'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>fs Operations Cheat Sheet</h3>
<div style="font-family: monospace; background: #0f172a; padding: 12px; border-radius: 6px; color: #a7f3d0;">
  <div>fs.readFile(path, 'utf-8') -> Reads string</div>
  <div>fs.writeFile(path, data) -> Overwrites file</div>
  <div>fs.appendFile(path, data) -> Appends to file</div>
  <div>fs.unlink(path) -> Deletes file</div>
  <div>fs.mkdir(dir, { recursive: true }) -> Creates folders</div>
</div>`,
      explanation: 'node:fs/promises gives full asynchronous file control with clean promise syntax.'
    },
    practiceTask: {
      instruction: 'Write an async function to read a file named "config.json" with utf-8 encoding.',
      hint: 'Use await fs.readFile(filename, "utf-8").',
      starterCode: `import fs from 'node:fs/promises';\n\nasync function readConfig() {\n  return await fs.readFile('config.json', 'utf-8');\n}\n`
    },
    keyTakeaways: [
      'Use node:fs/promises with async/await for all standard file operations.',
      'Always pass "utf-8" to readFile if you want a string rather than a raw byte Buffer.',
      'Synchronous fs methods freeze the entire server thread and should be avoided in production.'
    ]
  },

  'path-and-os-modules': {
    id: 'path-and-os-modules',
    lessonNumber: 6,
    title: 'Path Normalization & OS Utilities',
    moduleId: 'node-module-2',
    courseId: 'nodejs',
    estimatedMinutes: 8,
    learningObjectives: [
      'Safely construct cross-platform file paths using path.join and path.resolve',
      'Extract filenames, directory names, and extensions with path.basename, path.dirname, and path.extname',
      'Inspect system memory, CPU cores, and network interfaces with the node:os module',
      'Prevent directory traversal security vulnerabilities'
    ],
    summary: 'The node:path module resolves differences between operating system path separators (Windows backslash vs POSIX forward slash), while node:os provides real-time system metrics.',
    whyItExists: 'Hardcoding path strings like `"folder/file.txt"` breaks on Windows or when traversing relative directories. The path module ensures universal compatibility across all operating systems.',
    howItWorks: '`path.join()` concatenates path segments using the host platform separator (`/` on Linux/macOS, `\\` on Windows) and normalizes `.` and `..` segments. `path.resolve()` creates an absolute path from the root.',
    whenToUse: [
      'Whenever pointing to files, templates, or directories on disk',
      'Checking available system memory (`os.freemem()`) and CPU counts (`os.cpus().length`) before clustering'
    ],
    whenNotToUse: [
      'Do not perform manual string concatenation like `folder + "/" + filename`'
    ],
    sections: [
      {
        id: 'path-methods',
        heading: 'Essential Path Operations',
        content: '`path.join()` connects parts; `path.resolve()` builds an absolute path from the root directory. `path.extname()` reliably extracts file extensions.',
        codeSnippet: {
          language: 'javascript',
          title: 'Path & OS Utilities',
          code: `import path from 'node:path';
import os from 'node:os';

// 1. Cross-platform path construction
const uploadDir = path.join(process.cwd(), 'uploads', 'avatars', 'user-42.png');
console.log('Absolute target:', uploadDir);
console.log('File extension:', path.extname(uploadDir)); // .png
console.log('Base filename:', path.basename(uploadDir)); // user-42.png
console.log('Directory:', path.dirname(uploadDir));

// 2. Inspecting OS resources
console.log('Operating System:', os.type(), os.arch());
console.log('Available CPU Cores:', os.cpus().length);
console.log('Free RAM (MB):', Math.round(os.freemem() / 1024 / 1024));`,
          description: 'Constructing robust file paths and querying machine resources.'
        },
        bestPractices: [
          'Always use path.join or path.resolve when handling user-supplied upload filenames',
          'Use path.normalize to sanitize user input against directory traversal (e.g., "../../../etc/passwd")'
        ],
        commonMistakes: [
          'Using hardcoded "/" or "\\" slashes that fail across operating systems'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Cross-Platform Path Resolution</h3>
<div style="font-family: monospace; background: #1e1b4b; padding: 12px; border-radius: 6px; color: #c7d2fe;">
  path.join('src', 'components', 'App.jsx')<br>
  👉 Windows: src\\components\\App.jsx<br>
  👉 Linux/macOS: src/components/App.jsx
</div>`,
      explanation: 'The path module automatically uses the correct system delimiter.'
    },
    practiceTask: {
      instruction: 'Use path.join to combine process.cwd(), "public", and "index.html".',
      hint: 'path.join(process.cwd(), "public", "index.html")',
      starterCode: `import path from 'node:path';\n\nconst indexPath = path.join(process.cwd(), 'public', 'index.html');\n`
    },
    keyTakeaways: [
      'Never concatenate paths manually with string templates; use path.join() or path.resolve().',
      'node:os provides real-time system stats (CPUs, total RAM, free memory).',
      'Sanitize file paths to prevent directory traversal attacks.'
    ]
  },

  'events-and-eventemitter': {
    id: 'events-and-eventemitter',
    lessonNumber: 7,
    title: 'Event-Driven Architecture & EventEmitter',
    moduleId: 'node-module-2',
    courseId: 'nodejs',
    estimatedMinutes: 9,
    learningObjectives: [
      'Understand the Publish-Subscribe pattern in Node.js',
      'Create and emit custom events with the EventEmitter class',
      'Manage listeners with on(), once(), and removeListener()',
      'Avoid memory leaks caused by dangling event listeners'
    ],
    summary: 'The EventEmitter class in the node:events module is the backbone of Node.js. Sockets, HTTP servers, and streams are all EventEmitter instances.',
    whyItExists: 'Decoupling producers and consumers of actions is critical in event-driven systems. Instead of passing deep callback chains, components emit events that interested observers react to.',
    howItWorks: 'An EventEmitter maintains an internal dictionary of listener functions keyed by event name. When `emit(eventName, ...args)` is called, all registered callbacks for that event are executed synchronously in order.',
    whenToUse: [
      'Decoupled system notifications (e.g., user registered -> send email, update metrics, notify Slack)',
      'Building custom logging or auditing subsystems',
      'State change notifications in background queue workers'
    ],
    whenNotToUse: [
      'Simple sequential asynchronous flow control (use async/await promises instead of raw events)'
    ],
    sections: [
      {
        id: 'event-emitter-usage',
        heading: 'Creating and Subscribing to Events',
        content: 'Extend the `EventEmitter` class or instantiate it directly. Use `.on()` for continuous listeners and `.once()` for one-time events.',
        codeSnippet: {
          language: 'javascript',
          title: 'Custom EventEmitter Class',
          code: `import { EventEmitter } from 'node:events';

class OrderProcessor extends EventEmitter {
  placeOrder(orderId, amount) {
    console.log(\`Placing order \${orderId} for $\${amount}...\`);
    // Emit 'orderPlaced' event with payload
    this.emit('orderPlaced', { orderId, amount, timestamp: new Date() });
  }
}

const processor = new OrderProcessor();

// Listener 1: Send confirmation email
processor.on('orderPlaced', (data) => {
  console.log(\`[Email Service] Confirmation sent for order #\${data.orderId}\`);
});

// Listener 2: Update inventory analytics
processor.on('orderPlaced', (data) => {
  console.log(\`[Analytics] Logged sale of $\${data.amount}\`);
});

processor.placeOrder('ORD-9901', 149.99);`,
          description: 'Emitting custom domain events with payload arguments.'
        },
        bestPractices: [
          'Always register an "error" event listener; unhandled error events will throw uncaught exceptions and crash the process',
          'Clean up listeners with removeListener or off() when teardown occurs to prevent memory leaks'
        ],
        commonMistakes: [
          'Exceeding default 10 listener limit, causing EventEmitter memory leak warnings'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>EventEmitter Flow</h3>
<div style="font-family: monospace; background: #022c22; padding: 12px; border-radius: 6px; color: #6ee7b7;">
  [Event: 'userRegistered']<br>
  &nbsp;&nbsp;↳ Listener A: Send Email<br>
  &nbsp;&nbsp;↳ Listener B: Provision Database<br>
  &nbsp;&nbsp;↳ Listener C: Track Metric
</div>`,
      explanation: 'One event emission triggers multiple independent subscribers cleanly.'
    },
    practiceTask: {
      instruction: 'Instantiate an EventEmitter and register a listener for the "login" event.',
      hint: 'emitter.on("login", (username) => { ... })',
      starterCode: `import { EventEmitter } from 'node:events';\nconst emitter = new EventEmitter();\n\nemitter.on('login', (user) => {\n  console.log('User logged in:', user);\n});\n`
    },
    keyTakeaways: [
      'EventEmitter powers Node\'s reactive architecture (HTTP, Streams, Sockets).',
      'Always attach an .on("error") listener to avoid process crashes.',
      'Use .once() for events that should only fire a single time.'
    ]
  },

  'streams-and-buffers': {
    id: 'streams-and-buffers',
    lessonNumber: 8,
    title: 'Streams & Data Pipelines: Memory-Efficient I/O',
    moduleId: 'node-module-2',
    courseId: 'nodejs',
    estimatedMinutes: 11,
    learningObjectives: [
      'Understand why streams prevent high memory usage during large file transfers',
      'Master the four stream types: Readable, Writable, Duplex, and Transform',
      'Pipe data seamlessly with pipe() and stream.pipeline()',
      'Handle backpressure to prevent buffer flooding'
    ],
    summary: 'Streams handle reading and writing continuous data piece-by-piece in chunks, allowing Node.js to process multi-gigabyte files without overwhelming RAM.',
    whyItExists: 'Reading an 8GB file with `fs.readFile()` requires 8GB of server RAM, which will crash the Node V8 heap. Streams process data in small 64KB chunks sequentially.',
    howItWorks: 'A Readable stream pumps chunks through an internal buffer. If a Writable stream writes slower than the source reads, backpressure pauses reading until the sink drains.',
    whenToUse: [
      'Streaming video or audio to web browsers',
      'File uploads, downloads, and CSV/log processing',
      'Data transformation pipelines (compression via zlib, encryption via crypto)'
    ],
    whenNotToUse: [
      'Small configuration files (< a few megabytes) where standard fs.readFile is simpler'
    ],
    sections: [
      {
        id: 'stream-pipeline',
        heading: 'Creating Stream Pipelines with stream.pipeline',
        content: 'The modern `pipeline` utility from `node:stream/promises` connects streams, manages backpressure, and handles errors with automatic stream destruction.',
        codeSnippet: {
          language: 'javascript',
          title: 'Compressing a File via Streams',
          code: `import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';

async function compressFile(sourcePath, destPath) {
  try {
    await pipeline(
      fs.createReadStream(sourcePath),  // Readable stream (chunk source)
      zlib.createGzip(),                // Transform stream (compression)
      fs.createWriteStream(destPath)    // Writable stream (chunk destination)
    );
    console.log('File compressed successfully without excessive RAM usage!');
  } catch (error) {
    console.error('Pipeline failed:', error.message);
  }
}

compressFile('large-server-logs.txt', 'large-server-logs.txt.gz');`,
          description: 'Streaming an uncompressed file through gzip straight to disk.'
        },
        bestPractices: [
          'Always use stream/promises `pipeline` rather than manual `.pipe()` to prevent resource leaks when errors occur',
          'Tune `highWaterMark` option if dealing with specific network throughput constraints'
        ],
        commonMistakes: [
          'Using old `.pipe()` without error handlers on all intermediate streams'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Stream Data Chunking</h3>
<div style="font-family: monospace; background: #172554; padding: 12px; border-radius: 6px; color: #93c5fd;">
  [Source File 2GB] ──> [Chunk 64KB] ──> [Gzip Filter] ──> [Output File]<br>
  Memory Consumption: ~64KB constant RAM!
</div>`,
      explanation: 'Streams maintain near-zero memory footprint regardless of file size.'
    },
    practiceTask: {
      instruction: 'Create a readable stream for a file named "input.txt".',
      hint: 'fs.createReadStream("input.txt")',
      starterCode: `import fs from 'node:fs';\nconst stream = fs.createReadStream('input.txt');\n`
    },
    keyTakeaways: [
      'Streams process data chunk-by-chunk, keeping memory usage constant and low.',
      'Always prefer stream/promises pipeline() over raw .pipe() for safe error handling.',
      'Transform streams let you modify or compress data on the fly.'
    ]
  },

  'http-module-and-native-server': {
    id: 'http-module-and-native-server',
    lessonNumber: 9,
    title: 'The Native HTTP Module & Raw Server Creation',
    moduleId: 'node-module-3',
    courseId: 'nodejs',
    estimatedMinutes: 9,
    learningObjectives: [
      'Create a native HTTP web server using node:http',
      'Inspect incoming requests (req.url, req.method, req.headers)',
      'Construct HTTP responses (res.writeHead, res.end, status codes)',
      'Understand how frameworks like Express are built on top of node:http'
    ],
    summary: 'Node.js includes a built-in node:http module that can create production-grade HTTP servers without external dependencies.',
    whyItExists: 'Before web frameworks exist, the runtime must parse TCP sockets, parse HTTP request strings, and write formatted HTTP response headers back across the wire.',
    howItWorks: '`http.createServer((req, res) => ...)` listens on a specified port. Every incoming HTTP connection instantiates a `req` (IncomingMessage, a Readable stream) and `res` (ServerResponse, a Writable stream).',
    whenToUse: [
      'Understanding low-level HTTP mechanics and web architecture',
      'Building ultra-lightweight microservices without external dependencies',
      'Writing custom proxy servers and mock servers for automated testing'
    ],
    whenNotToUse: [
      'Complex enterprise web applications with hundreds of routes (use Express, Fastify, or NestJS)'
    ],
    sections: [
      {
        id: 'native-server-code',
        heading: 'Creating an HTTP Server with JSON Routing',
        content: 'Check `req.url` and `req.method` to route requests, set appropriate status codes, and return JSON content headers.',
        codeSnippet: {
          language: 'javascript',
          title: 'Native HTTP JSON Server',
          code: `import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === '/api/health' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
    return;
  }

  if (url === '/api/echo' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ received: JSON.parse(body) }));
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Native HTTP server listening at http://localhost:\${PORT}\`);
});`,
          description: 'Basic routing and request body parsing with native node:http.'
        },
        bestPractices: [
          'Always call res.end() to conclude every response; otherwise the client will hang indefinitely',
          'Always set accurate Content-Type and HTTP status codes (200, 201, 400, 404, 500)'
        ],
        commonMistakes: [
          'Trying to write response headers after sending the response body'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>HTTP Request / Response Lifecycle</h3>
<div style="font-family: monospace; background: #1e1b4b; padding: 12px; border-radius: 6px; color: #e0e7ff;">
  GET /api/users HTTP/1.1 ──> [http.createServer] ──> req (Readable)<br>
  HTTP/1.1 200 OK &lt;── [res.writeHead] &lt;── res (Writable)
</div>`,
      explanation: 'The native HTTP module exposes the raw streams for total control.'
    },
    practiceTask: {
      instruction: 'Create an HTTP server that returns a 200 status code with "Hello World".',
      hint: 'res.writeHead(200); res.end("Hello World");',
      starterCode: `import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World');\n});\n`
    },
    keyTakeaways: [
      'node:http creates servers using incoming request streams and outgoing response streams.',
      'Always call res.end() to finalize and transmit the HTTP response.',
      'All major Node backend frameworks are wrappers around node:http.'
    ]
  },

  'express-fundamentals-and-routing': {
    id: 'express-fundamentals-and-routing',
    lessonNumber: 10,
    title: 'Express.js Fundamentals & Declarative Routing',
    moduleId: 'node-module-3',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Initialize an Express application and define route handlers',
      'Work with route parameters (req.params) and query strings (req.query)',
      'Send JSON, HTML, and status codes using res.json() and res.status()',
      'Organize routes using express.Router() modular sub-routers'
    ],
    summary: 'Express.js is the minimalist, unopinionated, standard web framework for Node.js, providing expressive routing and middleware mechanics.',
    whyItExists: 'Native `node:http` requires manual URL parsing, tedious body streaming, and boilerplate condition trees. Express simplifies API development into clean, readable route declarations.',
    howItWorks: 'Express wraps Node\'s native `req` and `res` objects with high-level utilities like `res.json()`, `res.status()`, and provides a pattern-matching router supporting HTTP verbs (`app.get()`, `app.post()`, `app.put()`, `app.delete()`).',
    whenToUse: [
      'Building RESTful APIs for web and mobile frontends',
      'Microservices and webhook receivers',
      'Fullstack backend applications serving server-rendered templates or Single Page Applications'
    ],
    whenNotToUse: [
      'Scenarios demanding strict zero-dependency or ultra-low memory footprints (native HTTP)'
    ],
    sections: [
      {
        id: 'express-routes',
        heading: 'Parameters, Query Strings, and Router Modules',
        content: 'Express allows path variables with colons (`/users/:id`), accessible via `req.params`. Query strings (`?sort=asc`) are parsed into `req.query`.',
        codeSnippet: {
          language: 'javascript',
          title: 'Express Routing & Modular Router',
          code: `import express from 'express';

const app = express();
const userRouter = express.Router();

// Modular sub-route: /api/users/:id
userRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const { detailed } = req.query; // e.g. ?detailed=true
  
  res.status(200).json({
    id,
    name: 'Ada Lovelace',
    role: 'Engineer',
    detailed: detailed === 'true'
  });
});

// Mount router under prefix
app.use('/api/users', userRouter);

app.listen(3000, () => console.log('Express running on :3000'));`,
          description: 'Creating modular routers and reading parameters.'
        },
        bestPractices: [
          'Group related endpoints into separate route files using express.Router()',
          'Use chaining like `res.status(201).json(payload)` for clean responses'
        ],
        commonMistakes: [
          'Forgetting to return after sending a response if subsequent code continues executing'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Express URL Parameter Breakdown</h3>
<div style="font-family: monospace; background: #1e293b; padding: 12px; border-radius: 6px; color: #38bdf8;">
  Route: /products/:category/:id<br>
  URL: /products/laptops/macbook-pro?currency=usd<br><br>
  req.params = { category: 'laptops', id: 'macbook-pro' }<br>
  req.query = { currency: 'usd' }
</div>`,
      explanation: 'Express automatically parses URL segments and query strings into clean objects.'
    },
    practiceTask: {
      instruction: 'Create an Express route that responds to GET /api/ping with { pong: true }.',
      hint: 'app.get("/api/ping", (req, res) => res.json({ pong: true }))',
      starterCode: `import express from 'express';\nconst app = express();\n\napp.get('/api/ping', (req, res) => {\n  res.json({ pong: true });\n});\n`
    },
    keyTakeaways: [
      'Express simplifies route declarations (get, post, put, delete, patch).',
      'Use express.Router() to split large APIs into clean, maintainable feature modules.',
      'req.params captures URL segments; req.query captures search queries.'
    ]
  },

  'express-middleware-architecture': {
    id: 'express-middleware-architecture',
    lessonNumber: 11,
    title: 'Middleware Architecture & Pipeline Execution',
    moduleId: 'node-module-3',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Understand the signature of an Express middleware: (req, res, next)',
      'Learn how the next() function passes execution down the pipeline',
      'Use built-in middlewares like express.json() and express.static()',
      'Write custom authentication and request logger middlewares'
    ],
    summary: 'Middleware functions have access to the request object, response object, and the next middleware function in the application’s request-response cycle.',
    whyItExists: 'Cross-cutting concerns (logging, authentication, JSON parsing, rate limiting) shouldn\'t be copied into every individual route handler. Middleware provides a clean pipeline where requests pass through a sequence of filters.',
    howItWorks: 'Middlewares execute sequentially. A middleware can modify `req` or `res`, terminate the request by sending a response, or call `next()` to hand off control to the next registered handler.',
    whenToUse: [
      'Parsing request bodies with `express.json()` and `express.urlencoded()`',
      'Validating user auth tokens (JWT verification middleware)',
      'Logging requests and response durations',
      'Serving static frontend assets with `express.static("public")`'
    ],
    whenNotToUse: [
      'Do not forget to either call `next()` or send a response; otherwise the request hangs forever'
    ],
    sections: [
      {
        id: 'middleware-pipeline',
        heading: 'Custom Middlewares and Pipeline Execution',
        content: 'Register middlewares globally with `app.use()` or attach them to specific routes. Passing an argument into `next(err)` skips all remaining standard middlewares and jumps directly to error handlers.',
        codeSnippet: {
          language: 'javascript',
          title: 'Custom Middleware Example',
          code: `import express from 'express';
const app = express();

// 1. Built-in body parser middleware
app.use(express.json());

// 2. Custom logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`[\${req.method}] \${req.originalUrl} - \${res.statusCode} (\${duration}ms)\`);
  });
  next(); // Pass to next middleware!
});

// 3. Route-specific Guard middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }
  next();
};

app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ secretData: 'Confidential system metrics' });
});`,
          description: 'Middleware execution flow with request timing and authentication guards.'
        },
        bestPractices: [
          'Place body-parsing middlewares (express.json()) near the top of your app before route definitions',
          'Return immediately after sending error responses inside middleware (e.g., `return res.status(...)`)'
        ],
        commonMistakes: [
          'Calling next() after already having called res.send() or res.json(), causing "Cannot set headers after they are sent to the client" errors'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Middleware Pipeline Waterfall</h3>
<div style="font-family: monospace; background: #1e293b; padding: 12px; border-radius: 6px; color: #a5f3fc;">
  Request ──> [express.json()] ──> [Logger] ──> [requireAuth] ──> [Route Handler] ──> Response
</div>`,
      explanation: 'Each middleware processes the request and calls next() to pass control down.'
    },
    practiceTask: {
      instruction: 'Create a simple middleware that attaches a timestamp to req.requestTime.',
      hint: 'req.requestTime = Date.now(); next();',
      starterCode: `const timeTracker = (req, res, next) => {\n  req.requestTime = Date.now();\n  next();\n};\n`
    },
    keyTakeaways: [
      'Middlewares have (req, res, next) parameters.',
      'Always call next() unless sending an immediate HTTP response.',
      'Order of app.use() declarations dictates execution order.'
    ]
  },

  'rest-api-design-crud': {
    id: 'rest-api-design-crud',
    lessonNumber: 12,
    title: 'Building a RESTful CRUD API',
    moduleId: 'node-module-3',
    courseId: 'nodejs',
    estimatedMinutes: 12,
    learningObjectives: [
      'Implement full CRUD operations (Create, Read, Update, Delete) with Express',
      'Follow REST conventions for HTTP methods (GET, POST, PUT, PATCH, DELETE)',
      'Use proper HTTP response status codes (200, 201, 204, 400, 404)',
      'Validate request bodies before saving records'
    ],
    summary: 'REST (Representational State Transfer) is an architectural style for designing networked APIs using standard HTTP verbs and predictable resource endpoints.',
    whyItExists: 'Having consistent resource naming and standardized HTTP verbs enables frontend apps, mobile apps, and third-party integrations to communicate seamlessly.',
    howItWorks: 'Resources are named with plural nouns (`/api/items`). GET reads items, POST creates an item (returning 201 Created), PUT/PATCH updates, and DELETE removes (returning 204 No Content).',
    whenToUse: [
      'Designing database-backed web APIs',
      'CRUD applications for e-commerce, blogging, task managers, and dashboards'
    ],
    whenNotToUse: [
      'Complex polymorphic graph queries with deep nesting where GraphQL or RPC may be preferred'
    ],
    sections: [
      {
        id: 'crud-implementation',
        heading: 'Complete CRUD Endpoint Implementation',
        content: 'Here is a clean implementation of an in-memory task API following REST principles.',
        codeSnippet: {
          language: 'javascript',
          title: 'Express REST CRUD Example',
          code: `import express from 'express';
const app = express();
app.use(express.json());

let tasks = [
  { id: '1', title: 'Learn Node.js', completed: false }
];

// 1. GET /api/tasks - Read all
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 2. POST /api/tasks - Create
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTask = { id: String(Date.now()), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. PATCH /api/tasks/:id - Partial Update
app.patch('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.completed !== undefined) task.completed = req.body.completed;
  res.json(task);
});

// 4. DELETE /api/tasks/:id - Remove
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send(); // 204 No Content
});`,
          description: 'Standard REST endpoints with validation and proper HTTP statuses.'
        },
        bestPractices: [
          'Use plural nouns for resource paths: `/api/users`, `/api/orders`',
          'Return 201 for successful creation and 204 for successful deletions without response body'
        ],
        commonMistakes: [
          'Using verbs in URL paths like `/api/getTasks` or `/api/deleteTask/1` instead of HTTP methods'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>REST HTTP Verbs Mapping</h3>
<table style="width:100%; border-collapse: collapse; font-family: monospace; font-size: 13px; color: #e2e8f0;">
  <tr style="border-bottom: 1px solid #334155; text-align: left;">
    <th style="padding: 6px;">Method</th><th style="padding: 6px;">Endpoint</th><th style="padding: 6px;">Status</th><th style="padding: 6px;">Action</th>
  </tr>
  <tr><td style="color:#38bdf8;">GET</td><td>/api/tasks</td><td>200</td><td>Fetch all</td></tr>
  <tr><td style="color:#4ade80;">POST</td><td>/api/tasks</td><td>201</td><td>Create new</td></tr>
  <tr><td style="color:#facc15;">PATCH</td><td>/api/tasks/:id</td><td>200</td><td>Update fields</td></tr>
  <tr><td style="color:#f87171;">DELETE</td><td>/api/tasks/:id</td><td>204</td><td>Delete item</td></tr>
</table>`,
      explanation: 'REST routes leverage standard HTTP verbs to describe actions cleanly.'
    },
    practiceTask: {
      instruction: 'Write an Express POST route /api/users that validates req.body.email.',
      hint: 'if (!req.body.email) return res.status(400).json({ error: "Email is required" });',
      starterCode: `app.post('/api/users', (req, res) => {\n  const { email } = req.body;\n  if (!email) return res.status(400).json({ error: 'Email is required' });\n  res.status(201).json({ id: '1', email });\n});\n`
    },
    keyTakeaways: [
      'REST APIs use plural nouns for routes and HTTP verbs for actions.',
      'Use 201 Created for POST and 204 No Content for DELETE.',
      'Always validate client input before updating application state or database.'
    ]
  },

  'error-handling-and-async-wrappers': {
    id: 'error-handling-and-async-wrappers',
    lessonNumber: 13,
    title: 'Centralized Error Handling & Async Middlewares',
    moduleId: 'node-module-3',
    courseId: 'nodejs',
    estimatedMinutes: 9,
    learningObjectives: [
      'Write a 4-argument Express error handling middleware: (err, req, res, next)',
      'Create custom API error classes with custom status codes',
      'Prevent unhandled promise rejections using async wrapper utilities',
      'Catch 404 Route Not Found errors cleanly'
    ],
    summary: 'Express provides special error-handling middleware with four arguments (err, req, res, next) that centralizes API error reporting and prevents unhandled promise rejections.',
    whyItExists: 'Scattering try/catch blocks across dozens of route handlers leads to repetitive code and inconsistent error formats. Centralized handling guarantees every error produces a uniform JSON response.',
    howItWorks: 'When an error is passed to `next(err)` or thrown inside an async handler wrapped by an error catcher, Express skips standard route handlers and forwards the error directly to the 4-argument middleware.',
    whenToUse: [
      'Every production Express application to ensure predictable error payloads',
      'Transforming database errors (unique constraint violations) into friendly 400 messages',
      'Hiding stack traces from production clients while logging them on the server'
    ],
    whenNotToUse: [
      'Do not expose raw database internal errors or password hashes in production responses'
    ],
    sections: [
      {
        id: 'centralized-error-middleware',
        heading: 'Custom ApiError Class and Centralized Handler',
        content: 'Create an `asyncHandler` wrapper to eliminate repetitive try/catch blocks, and mount the error middleware after all route definitions.',
        codeSnippet: {
          language: 'javascript',
          title: 'Centralized Error Pipeline',
          code: `import express from 'express';
const app = express();

// Custom operational error class
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Async wrapper to forward async errors to next()
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Route example:
app.get('/api/users/:id', asyncHandler(async (req, res) => {
  const user = null; // simulate database search
  if (!user) {
    throw new ApiError(404, 'User account not found');
  }
  res.json(user);
}));

// Centralized Error Handling Middleware (must have 4 arguments!)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error('[Error Occurred]', err.stack);

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});`,
          description: 'A 4-parameter error handler guarantees consistent JSON error contracts.'
        },
        bestPractices: [
          'Always declare error handlers with all 4 parameters: `(err, req, res, next)`',
          'Only show stack traces in development mode; keep them hidden in production'
        ],
        commonMistakes: [
          'Declaring the error middleware before route definitions (it will never catch route errors!)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Express Error Pipeline</h3>
<div style="font-family: monospace; background: #2d0606; padding: 12px; border-radius: 6px; color: #fca5a5;">
  throw new ApiError(404, 'Not Found')<br>
  &nbsp;&nbsp;↳ asyncHandler catches rejection<br>
  &nbsp;&nbsp;↳ calls next(err)<br>
  &nbsp;&nbsp;↳ (err, req, res, next) formats standard JSON 404 response
</div>`,
      explanation: 'Errors bubble automatically to the central handler.'
    },
    practiceTask: {
      instruction: 'Define an Express error-handling middleware that returns status 500 and the error message.',
      hint: 'app.use((err, req, res, next) => res.status(500).json({ error: err.message }))',
      starterCode: `app.use((err, req, res, next) => {\n  res.status(500).json({ error: err.message });\n});\n`
    },
    keyTakeaways: [
      'Express error middlewares MUST have 4 parameters: (err, req, res, next).',
      'Async functions must catch rejections and pass them to next(err) or use an asyncHandler.',
      'Mount the error handler as the last middleware in your Express application.'
    ]
  },

  'environment-configs-and-security': {
    id: 'environment-configs-and-security',
    lessonNumber: 14,
    title: 'Backend Security: Helmet, CORS & Rate Limiting',
    moduleId: 'node-module-4',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Secure HTTP headers with helmet middleware',
      'Configure Cross-Origin Resource Sharing (CORS) safely',
      'Protect endpoints from brute-force and DDoS attacks with express-rate-limit',
      'Prevent injection attacks and sanitize user inputs'
    ],
    summary: 'Securing a Node.js web server requires setting protective HTTP headers, configuring CORS policies, rate limiting incoming requests, and sanitizing inputs.',
    whyItExists: 'By default, Express advertises its framework version (`X-Powered-By: Express`) and lacks security headers, leaving it vulnerable to clickjacking, cross-site scripting (XSS), and automated brute-force attempts.',
    howItWorks: '`helmet` sets modern HTTP headers (Content-Security-Policy, X-Frame-Options). `cors` allows specific frontend origins to make fetch requests. `express-rate-limit` tracks IP request counts in memory.',
    whenToUse: [
      'Every public production backend API',
      'APIs consumed by single-page web applications hosted on different domains',
      'Login, registration, and password reset endpoints to block credential stuffing'
    ],
    whenNotToUse: [
      'Do not set CORS origin to "*" on authenticated endpoints that transmit cookies or sensitive credentials'
    ],
    sections: [
      {
        id: 'security-stack',
        heading: 'Implementing the Security Middleware Stack',
        content: 'Combine Helmet, CORS, and Rate Limiting at the top of your Express application before routes.',
        codeSnippet: {
          language: 'javascript',
          title: 'Express Security Hardening',
          code: `import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

// 1. Helmet: Sets 15+ secure HTTP headers
app.use(helmet());

// 2. CORS: Restrict API access to trusted frontend domain
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

// 3. Rate Limiter: Max 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests from this IP, please try again later.' }
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' })); // Mitigate body flood attacks`,
          description: 'Production security headers, CORS origin locking, and rate limiting.'
        },
        bestPractices: [
          'Always use Helmet to strip `X-Powered-By: Express` headers',
          'Apply tighter rate limits to authentication routes (e.g., 5 attempts per 15 minutes for `/api/login`)'
        ],
        commonMistakes: [
          'Allowing CORS origin: "*" when withCredentials is true (browsers will reject the request)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Security Headers Applied by Helmet</h3>
<ul style="font-family: monospace; font-size: 13px; color: #a7f3d0; list-style: square;">
  <li><strong>X-Frame-Options:</strong> DENY (blocks clickjacking)</li>
  <li><strong>X-Content-Type-Options:</strong> nosniff (stops MIME-sniffing)</li>
  <li><strong>Strict-Transport-Security:</strong> Enforces HTTPS</li>
</ul>`,
      explanation: 'Helmet configures HTTP headers that instruct browsers to enforce strict safety policies.'
    },
    practiceTask: {
      instruction: 'Configure an express-rate-limit limiter with a 60 second window and max 10 requests.',
      hint: 'rateLimit({ windowMs: 60 * 1000, max: 10 })',
      starterCode: `import rateLimit from 'express-rate-limit';\n\nconst authLimiter = rateLimit({\n  windowMs: 60 * 1000,\n  max: 10\n});\n`
    },
    keyTakeaways: [
      'Helmet sets protective HTTP headers to guard against common web vulnerabilities.',
      'Always lock down CORS to known origin domains in production.',
      'Use rate limiting to defend against brute force login attacks and API abuse.'
    ]
  },

  'authentication-jwt-and-passwords': {
    id: 'authentication-jwt-and-passwords',
    lessonNumber: 15,
    title: 'Authentication: Password Hashing (bcrypt) & JWTs',
    moduleId: 'node-module-4',
    courseId: 'nodejs',
    estimatedMinutes: 12,
    learningObjectives: [
      'Safely hash and salt user passwords using bcrypt',
      'Understand JSON Web Token (JWT) structure: Header, Payload, Signature',
      'Generate and sign tokens with jsonwebtoken (jwt.sign)',
      'Create an auth guard middleware that verifies JWTs (jwt.verify)'
    ],
    summary: 'Stateless authentication in Node.js commonly pairs one-way cryptographic password hashing (bcrypt) with signed JSON Web Tokens (JWT) transmitted in the Authorization header.',
    whyItExists: 'Storing plaintext passwords in a database is catastrophic. Additionally, stateless JWTs eliminate the need for server-side session stores in distributed microservices.',
    howItWorks: 'Bcrypt combines a random salt with an adaptive hashing algorithm (work factor). JWTs cryptographically sign a JSON payload using an HMAC-SHA256 secret key. The server validates incoming tokens using `jwt.verify()` without querying a session database.',
    whenToUse: [
      'User signup, login, and authorization systems',
      'Protecting private API routes and microservice communication'
    ],
    whenNotToUse: [
      'Do NOT store sensitive data (passwords, social security numbers) in the JWT payload (the payload is base64 encoded and readable by anyone)'
    ],
    sections: [
      {
        id: 'auth-pipeline',
        heading: 'Password Hashing & JWT Verification',
        content: 'Hash user passwords during registration, compare them during login, and issue signed tokens with an expiration time.',
        codeSnippet: {
          language: 'javascript',
          title: 'Bcrypt & JWT Auth Workflow',
          code: `import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secure-key-123';

// 1. Password Hashing (Registration)
async function registerUser(password) {
  const saltRounds = 12;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  return passwordHash; // Store this hash in your DB
}

// 2. Password Verification & Token Generation (Login)
async function loginUser(inputPassword, storedHash, user) {
  const isMatch = await bcrypt.compare(inputPassword, storedHash);
  if (!isMatch) throw new Error('Invalid credentials');

  // Generate stateless JWT (expires in 2 hours)
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '2h' }
  );
  return token;
}

// 3. Auth Guard Middleware
function verifyAuthToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user claims to request!
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}`,
          description: 'Complete registration hash, login comparison, and token guard middleware.'
        },
        bestPractices: [
          'Always set a sensible expiration time on JWTs (`expiresIn: "1h"`)',
          'Use minimum 10-12 salt rounds with bcrypt to prevent fast GPU brute-forcing'
        ],
        commonMistakes: [
          'Storing unhashed passwords or using obsolete hash functions like MD5 or SHA1'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>JWT Token Anatomy</h3>
<div style="font-family: monospace; font-size: 13px; background: #0f172a; padding: 12px; border-radius: 6px;">
  <span style="color: #f43f5e;">eyJhbGciOiJIUzI1Ni...</span>.<span style="color: #a855f7;">eyJ1c2VySWQiOiIxMi...</span>.<span style="color: #06b6d4;">TJVA95OrM7E20RM...</span><br><br>
  🔴 <span style="color: #f43f5e;">Header</span> (Algorithm & Token Type)<br>
  🟣 <span style="color: #a855f7;">Payload</span> (Claims: userId, role, exp)<br>
  🔵 <span style="color: #06b6d4;">Signature</span> (Tamper-proof HMAC verification)
</div>`,
      explanation: 'JWTs are base64-encoded strings verified with a server secret key.'
    },
    practiceTask: {
      instruction: 'Sign a JWT containing { id: "101" } with a secret key and a 1 hour expiration.',
      hint: 'jwt.sign({ id: "101" }, secret, { expiresIn: "1h" })',
      starterCode: `import jwt from 'jsonwebtoken';\n\nconst token = jwt.sign({ id: '101' }, 'my-secret', { expiresIn: '1h' });\n`
    },
    keyTakeaways: [
      'Never store plaintext passwords; use bcrypt with at least 10 salt rounds.',
      'JWT payloads are publicly readable; only put public user IDs and roles inside.',
      'Validate incoming Bearer tokens using jwt.verify() in an authentication middleware.'
    ]
  },

  'database-integration-prisma-mongodb': {
    id: 'database-integration-prisma-mongodb',
    lessonNumber: 16,
    title: 'Database Persistence: SQL, MongoDB & ORMs',
    moduleId: 'node-module-4',
    courseId: 'nodejs',
    estimatedMinutes: 11,
    learningObjectives: [
      'Understand relational (PostgreSQL/MySQL) vs document (MongoDB) databases',
      'Connect Node.js to databases using connection pooling',
      'Use modern ORMs/ODMs like Prisma and Mongoose',
      'Manage database migrations and schema integrity'
    ],
    summary: 'Node.js applications persist data to SQL (PostgreSQL, MySQL) or NoSQL (MongoDB) databases using native drivers or modern ORMs like Prisma.',
    whyItExists: 'In-memory variables reset every time the Node process restarts. Production backends require durable persistence, transactional consistency, and connection pooling.',
    howItWorks: 'Node drivers manage an asynchronous pool of persistent TCP database connections. ORMs translate JavaScript objects into optimized SQL queries or MongoDB BSON documents.',
    whenToUse: [
      'Storing user profiles, orders, transactions, comments, and analytics',
      'Prisma for type-safe relational schemas and automated migrations',
      'MongoDB for flexible document storage and rapid prototyping'
    ],
    whenNotToUse: [
      'Do not create a new database connection per HTTP request (always use connection pooling)'
    ],
    sections: [
      {
        id: 'database-orm-example',
        heading: 'Type-Safe Data Access with Prisma ORM',
        content: 'Prisma provides a declarative schema, automated SQL migrations, and an auto-generated query client with full autocomplete.',
        codeSnippet: {
          language: 'javascript',
          title: 'Prisma Client Query Example',
          code: `import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1. Create a user with a nested post
  const newUser = await prisma.user.create({
    data: {
      email: 'grace@hopper.org',
      name: 'Grace Hopper',
      posts: {
        create: { title: 'Compilers in Node.js', published: true }
      }
    },
    include: { posts: true }
  });
  console.log('User created:', newUser);

  // 2. Query published posts with author details
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true, email: true } } }
  });
  console.log('Published posts:', posts);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());`,
          description: 'Declarative, type-safe database queries with relations.'
        },
        bestPractices: [
          'Maintain a single shared PrismaClient or database connection pool instance across your app',
          'Always disconnect clients gracefully when shutting down the server process'
        ],
        commonMistakes: [
          'Directly concatenating raw strings into SQL queries (SQL Injection risk)'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Connection Pooling Visualization</h3>
<div style="font-family: monospace; background: #0f172a; padding: 12px; border-radius: 6px; color: #a5f3fc;">
  [Express Workers] ──> [Connection Pool: 10 connections] ──> [PostgreSQL DB]<br>
  Status: Connections reused efficiently across thousands of client requests.
</div>`,
      explanation: 'Connection pooling shares open TCP connections among concurrent requests.'
    },
    practiceTask: {
      instruction: 'Instantiate a single PrismaClient and export it for use across the application.',
      hint: 'export const prisma = new PrismaClient();',
      starterCode: `import { PrismaClient } from '@prisma/client';\nexport const prisma = new PrismaClient();\n`
    },
    keyTakeaways: [
      'Always use connection pooling to avoid exhausting database connection limits.',
      'Use ORMs like Prisma for relational schemas, type safety, and automatic migrations.',
      'Never concatenate raw user input into SQL queries to prevent SQL injections.'
    ]
  },

  'debugging-testing-and-deployment': {
    id: 'debugging-testing-and-deployment',
    lessonNumber: 17,
    title: 'Debugging, Testing, PM2 & Production Deployment',
    moduleId: 'node-module-4',
    courseId: 'nodejs',
    estimatedMinutes: 10,
    learningObjectives: [
      'Debug Node.js using node --inspect and Chrome DevTools / VS Code',
      'Write automated integration tests for Express APIs with Supertest and Vitest',
      'Manage production process lifecycles with PM2 and Node Cluster module',
      'Containerize Node applications using Docker'
    ],
    summary: 'Bringing a Node.js app to production involves testing with Vitest/Supertest, debugging with Node inspector, process clustering with PM2, and containerization with Docker.',
    whyItExists: 'A single unhandled crash can shut down a Node process for all users. Production tools guarantee auto-restart, multi-core CPU utilization, and verified code health.',
    howItWorks: 'The Node cluster module and PM2 fork multiple worker instances across all CPU cores. If a worker crashes, the master process immediately spawns a replacement worker with zero downtime.',
    whenToUse: [
      'Automated CI/CD test pipelines before deployment',
      'Running production servers with PM2 (`pm2 start server.js -i max`)',
      'Containerizing microservices into Docker images'
    ],
    whenNotToUse: [
      'Do not run `node server.js` directly in production without a process supervisor like PM2, systemd, or Kubernetes'
    ],
    sections: [
      {
        id: 'testing-and-docker',
        heading: 'API Integration Testing & Dockerfile',
        content: 'Test Express endpoints without starting a live network socket using Supertest. Build small, secure Docker images using multi-stage builds.',
        codeSnippet: {
          language: 'javascript',
          title: 'Express Route Integration Test (Vitest + Supertest)',
          code: `import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';

const app = express();
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

describe('GET /api/health', () => {
  it('should return 200 and status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});`,
          description: 'Writing fast, socketless HTTP integration tests.'
        },
        bestPractices: [
          'Run Node in cluster mode or PM2 cluster mode to take advantage of multi-core servers',
          'Use Alpine or Slim Node Docker images (`node:20-alpine`) for lightweight container sizes'
        ],
        commonMistakes: [
          'Running Node as root inside Docker containers without specifying a non-root USER node'
        ]
      }
    ],
    interactiveExample: {
      html: `<h3>Production Cluster Mode</h3>
<div style="font-family: monospace; background: #064e3b; padding: 12px; border-radius: 6px; color: #a7f3d0;">
  [Master Process (Port 80)]<br>
  &nbsp;&nbsp;├── Worker 1 (CPU Core 0)<br>
  &nbsp;&nbsp;├── Worker 2 (CPU Core 1)<br>
  &nbsp;&nbsp;├── Worker 3 (CPU Core 2)<br>
  &nbsp;&nbsp;└── Worker 4 (CPU Core 3)<br>
  Result: 4x request throughput with instant self-healing!
</div>`,
      explanation: 'Process managers ensure high availability and full hardware utilization.'
    },
    practiceTask: {
      instruction: 'Write a basic health test using supertest checking for status 200.',
      hint: 'await request(app).get("/health").expect(200)',
      starterCode: `const res = await request(app).get('/health');\nexpect(res.status).toBe(200);\n`
    },
    keyTakeaways: [
      'Use node --inspect for interactive breakpoint debugging in Chrome DevTools.',
      'Supertest enables instant API testing without spinning up actual TCP ports.',
      'Use PM2 or Docker with cluster mode in production for high availability and zero downtime.'
    ]
  }
};
