/* eslint-disable no-multi-spaces */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
----------------------------------------------------------------------------------------
Optional, default, undefined and null parameters
----------------------------------------------------------------------------------------
*/

import assert from 'assert';

/*
--------------------------------------------
Making omissions optional
--------------------------------------------
*/

// If the parameter is optional, it can be omitted. In that case, it has the value undefined:
// %inferred: addMe1: (a: number, b?: number | undefined) => number
const addMe1 = (a: number, b?: number) => {
  const num = 10;
  if (b === undefined) {
    return a + num;
  }
  return a + b;
};

assert.strictEqual(addMe1(5, 10), 15);
assert.strictEqual(addMe1(5), 15);

// If the parameter has a default value, that value is used when the parameter is either omitted or set to undefined:
// %inferred: addMe2: (a: number, b?: number) => number
const addMe2 = (a: number, b = 10) => a + b;

assert.strictEqual(addMe2(5, 10), 15);
assert.strictEqual(addMe2(5), 15);

/*
--------------------------------------------
Making omissions explicit using 'null' or 'undefined'
--------------------------------------------
In TypeScript, undefined and null are handled by separate, disjoint types. We need union types such as
undefined|string and null|string, if we want to allow them.
*/

// If the parameter has a union type, it CAN'T be omitted, but we can set it to undefined:
// %inferred: addMe3: (a: number, b: undefined | number) => number
const addMe3 = (a: number, b: undefined | number) => {
  const num = 10;
  if (b === undefined) {
    return a + num;
  }
  return a + b;
};

assert.strictEqual(addMe3(5, 10), 15);
assert.strictEqual(addMe3(5, undefined), 15);

// Alternative using 'null'
// %inferred: addMe4: (a: number, b: null | number) => number
const addMe4 = (a: number, b: null | number) => {
  const num = 10;
  if (b === null) {
    return a + num;
  }
  return a + b;
};

assert.strictEqual(addMe4(5, 10), 15);
assert.strictEqual(addMe4(5, null), 15);
