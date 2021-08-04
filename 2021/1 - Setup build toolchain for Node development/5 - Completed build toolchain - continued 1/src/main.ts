/*
This guide builds on [ 4 - Completed build toolchain ]

--------------------------------------------------------------------------------------

- Added support for JavaScript files in the tsconfig via allowJs and checkJs options.

- Added 'lib' option in tsconfig.

- Added 'esModuleInterop' option in tsconfig.

- Added explanations for all available source map features (inlineSources, inlineSourceMap, etc.) in tsconfig.

- Added .d.ts declaration file generation and configured the directory to emit declaration files to in tsconfig.

- Modified the 'dev:watch' script to use the package 'wait-on', which waits for the TypeScript build
process to finish emitting files before running nodemon:

./package.json
"dev:watch": "wait-on -t 15000 file:dist/main.js && NODE_ENV=development nodemon --enable-source-maps dist/main.js",
*/

import assert from 'assert';
import add from './utils/add';

assert.strictEqual(process.env.NODE_ENV, 'development');
assert.strictEqual(add(5, 15), 20);
