/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Function Types
--------------------------------------------------------------------------------------
*/

import assert from 'assert';

/*
--------------------------------------------
Function types
--------------------------------------------
This is an example of a function type, this type comprises every function that accepts
a single parameter of type number and returns a string.

Normally, we must specify 'parameter' types for functions. But in this case, the type of
num can be inferred from the function type and we can omit it.
*/
const stringify1: (num: number) => string = (num) => String(num);

// If the function type is omitted, then the paramater must have a type annotation. TypeScript will
// try to infer a return type from the arrow function.
const stringify2 = (num: number) => String(num);

// Here a return type of 'string' for the function has been specified explicitly.
const stringify3 = (num: number) : string => String(num);

// Here we created an alias for a function type
type SomeFunctionType = (num: number) => string;
const stringify4: SomeFunctionType = (num) => String(num);
console.log(stringify4(123));

/*
--------------------------------------------
Function return types and the special return type void
--------------------------------------------
TypeScript can usually infer the return types of functions, but specifying them explicitly is allowed
and occasionally useful (at the very least, it doesn’t do any harm).

void is a special return type for a function: It tells TypeScript that the function always returns undefined.
*/
// Implicitly return void
const iWillReturnUndefined1 = () => {};
// Explicity return void
const iWillReturnUndefined2 = (): void => {};

/*
--------------------------------------------
Optional parameters and default values
--------------------------------------------
*/
// A question mark after an identifier means that the parameter is optional.
// Here the parameter 'multiplier' is optional and inferred either as number of undefined
// %inferred: multiply: (num: number, multiplier?: number | undefined) => number
const multiply1 = (num: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return num * 2;
  }
  return num * multiplier;
};

// Here the parameter 'multiplier' has a default value. Default values make parameters automatically optional!
// %inferred: multiply2: (num: number, multiplier?: number) => number
const multiply2 = (num: number, multiplier = 2) => num * multiplier;

/*
--------------------------------------------
Rest parameters
--------------------------------------------
Their static types must be Arrays (lists or tuples):
*/
const joinNumbers = (...nums: number[]): string => nums.join('-');
console.log(joinNumbers(1, 2, 3));

assert.strictEqual(joinNumbers(1, 2, 3), '1-2-3');
