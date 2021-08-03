/*
Migration from JavaScript to TypeScript
--------------------------------------------------------------------------------------
The TypeScript compiler supports a mix of JavaScript and TypeScript files.

To use JavaScript files, add this to the tsconfig:

For allowing and copying JavaScript files
"allowJs": true

For type-checking JavaScript files
"checkJs": true
*/

import assert from 'assert';

// Type information is added via JSDoc comments

/**
 * @param {number} x - The first operand
 * @param {number} y - The second operand
 * @returns {number} The sum of both operands
 */
const add = (x, y) => x + y;

assert.strictEqual(add(1, 2), 3);
