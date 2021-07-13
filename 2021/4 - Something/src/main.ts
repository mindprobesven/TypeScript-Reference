/*
Chapter 1 - Setting up watch mode for the typescript compiler
--------------------------------------------------------------------------------------
This guide builds on [ 3 - Airbnb ESLint config with TypeScript support ]

1. The tsconfig.json is updated to configure watch mode for the typescript compiler.
Check file:
./tsconfig.json

In the package.json we add two new scripts:

"build": "tsc",
"build:watch": "tsc --watch"

By running 'npm run build:watch', typescript now watches for any file changes and
performs type-checking, as well as compiles to javascript into the ./dist directory.

Chapter 2 - Running the compiled app with nodemon in watch mode
--------------------------------------------------------------------------------------
In the package.json we add two new scripts:

"start:dev": "NODE_ENV=development nodemon dist/main.js",
"start:prod": "NODE_ENV=production nodemon dist/main.js"

Open a second terminal and run of the scritps. Nodemon will now watch for file changes
in the ./dist directory, which happen after typescript finishes compiling and then
restarts the compiled app.
*/

import add from './utils/add';

console.log(`Running in ${process.env.NODE_ENV} mode`);

console.log(add(5, 15));
