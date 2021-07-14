/*
This guide builds on [ 3 - Airbnb ESLint config with TypeScript support ]

Chapter 1 - Setting up watch mode for ESLint
--------------------------------------------------------------------------------------
1. To enable watch mode for ESLint, install the eslint-watch package
npm install --save-dev eslint-watch

2. Update the package.json with the scripts:

"lint": "eslint --ext .ts src/",
"lint:watch": "esw -w --color --ext .ts src/",

By running 'npm run lint:watch', ESLint now watches for any file changes in the ./src
directory.

Chapter 2 - Setting up watch mode for the typescript compiler
--------------------------------------------------------------------------------------
1. The tsconfig.json is updated to configure watch mode for the typescript compiler.

Also, these options have been added:
- noEmitOnError: Prevents compiler output if errors are reported
- removeComments
- sourceMap: This enables the generation of source map files

Check file:
./tsconfig.json

In the package.json we add two new scripts:

"build": "tsc",
"build:watch": "tsc --watch"

By running 'npm run build:watch', typescript now watches for any file changes and
performs type-checking, as well as compiles to javascript into the ./dist directory.

Chapter 3 - Running multiple NPM scripts concurrently in a single terminal
--------------------------------------------------------------------------------------
1. We don't want to run ESLint, the TypeScript compiler and nodemon in separate terminals.
We can run all of them concurrently in a single terminal using the concurrently package.
Install it:
npm install --save-dev concurrently

2. In the package.json we add the scripts:
"dev:watch": "NODE_ENV=development nodemon --enable-source-maps dist/main.js",
"start:dev": "concurrently -p {name}-{time} -t HH:mm:ss -c yellow.bold,red.bold,blue.bold -k \"npm:lint:watch\" \"npm:build:watch\" \"npm:dev:watch\"",

Note: The --enable-source-maps flag is added to node and nodemon to enable Source Map v3
support for stack traces.

By running 'npm run start:dev', concurrently will run all the npm scripts specified in a
sinlge terminal.
Note: The command has several styling and formatting options as well as the -k flag to kill
all running processes automatically in case one crashes.

Chapter 3 - Running the production build
--------------------------------------------------------------------------------------
1. In the package.json we add the script:
"start:prod": "NODE_ENV=production node --enable-source-maps dist/main.js"

By running 'npm run start:prod' we run a node instance of the compiled app in the ./dist
directory in production mode.
*/

import add from './utils/add';

// console.log(`Running in ${process.env.NODE_ENV} mode`);
throw new Error('BLA');

console.log(add(5, 15));
