export const nodeModules = [
  {
    id: 'node-module-1',
    courseId: 'nodejs',
    moduleNumber: 1,
    title: 'Node.js Runtime & Architecture',
    description: 'Understand the V8 engine, Libuv non-blocking event loop, module systems (CJS vs ESM), and core globals.',
    lessonIds: [
      'node-architecture-and-event-loop',
      'modules-commonjs-vs-esm',
      'node-globals-process-env',
      'npm-and-package-json'
    ]
  },
  {
    id: 'node-module-2',
    courseId: 'nodejs',
    moduleNumber: 2,
    title: 'Core Built-in Modules & I/O',
    description: 'Master asynchronous file system operations, path normalization, EventEmitters, and memory-efficient streams.',
    lessonIds: [
      'fs-module-and-async-file-io',
      'path-and-os-modules',
      'events-and-eventemitter',
      'streams-and-buffers'
    ]
  },
  {
    id: 'node-module-3',
    courseId: 'nodejs',
    moduleNumber: 3,
    title: 'Web Servers, REST APIs & Express.js',
    description: 'Build fast backend servers with native HTTP and Express.js, handling routing, middleware pipelines, and CRUD APIs.',
    lessonIds: [
      'http-module-and-native-server',
      'express-fundamentals-and-routing',
      'express-middleware-architecture',
      'rest-api-design-crud',
      'error-handling-and-async-wrappers'
    ]
  },
  {
    id: 'node-module-4',
    courseId: 'nodejs',
    moduleNumber: 4,
    title: 'Security, Auth & Production Deployment',
    description: 'Secure your Node applications with JWT auth, password hashing, environment variables, and production deployment patterns.',
    lessonIds: [
      'environment-configs-and-security',
      'authentication-jwt-and-passwords',
      'database-integration-prisma-mongodb',
      'debugging-testing-and-deployment'
    ]
  }
];
