/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Typing Functions
// --------------------------------------------------------------------------------------

import assert from 'assert';

// Function declarations
// --------------------------------------------------------------------------------------
// The return value (string) is inferred by default and can be omitted here.
// function repeat(str: string, times: number): string {
function repeat(str: string, times: number) {
  return str.repeat(times);
}

assert.strictEqual(repeat('*', 5), '*****');

// Arrow functions
// --------------------------------------------------------------------------------------
// With Function type signature
const stringify1: (num: number) => string = (num) => String(num);

// If the function type is omitted, then the paramater must have a type annotation. TypeScript will
// try to infer a return type from the arrow function.
const stringify2 = (num: number) => String(num);

// Here a return type of 'string' for the function has been specified explicitly.
const stringify3 = (num: number) : string => String(num);

// Interfaces and Type aliases with call signatures
// --------------------------------------------------------------------------------------
interface Repeat {
  (str: string, times: number): string;
}

// Checking an arrow function
const repeat1: Repeat = (str, times) => str.repeat(times);

// Checking function declarations
// Requires assigning the function to a type-annotated variable
function repeat2(str: string, times: number) {
  return str.repeat(times);
}
const repeat2Func: Repeat = repeat2;

// Optional parameters and default values
// --------------------------------------------------------------------------------------
// A question mark after an identifier means that the parameter is optional.
// Here the parameter 'multiplier' is optional and inferred either as number or undefined
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

// Function return types and the special return type void
// --------------------------------------------------------------------------------------
// TypeScript can usually infer the return types of functions, but specifying them explicitly is allowed
// and occasionally useful (at the very least, it doesn’t do any harm).

// 'void' is a special return type for a function: It tells TypeScript that the function always returns undefined.
// Implicitly return void
const iWillReturnUndefined1 = () => {};
// Explicity return void
const iWillReturnUndefined2 = (): void => {};

// Rest parameters
// --------------------------------------------------------------------------------------
// Their static types must be Arrays (lists or tuples):
const joinNumbers = (...nums: number[]): string => nums.join('-');
console.log(joinNumbers(1, 2, 3));

assert.strictEqual(joinNumbers(1, 2, 3), '1-2-3');

// Overloading methods
// --------------------------------------------------------------------------------------
class StringBuilder {
  #data = '';

  add(value: boolean): this;
  add(value: number): this;
  add(value: string): this;
  add(value: unknown): this {
    this.#data += String(value);
    return this;
  }

  get data() {
    return this.#data;
  }
}

const sb = new StringBuilder();

sb
  // (method) StringBuilder.add(value: string): this (+2 overloads)
  .add('Are you ')
  .add(41)
  .add(' years old?: ')
  .add(true);

assert.strictEqual(sb.data, 'Are you 41 years old?: true');

// Overloading properties as arrow functions using an interface
// --------------------------------------------------------------------------------------
interface Add {
  (value: boolean): StringBuilder2;
  (value: number): StringBuilder2;
  (value: string): StringBuilder2;
}

class StringBuilder2 {
  #data = '';

  add: Add = (value: unknown) => {
    this.#data += String(value);
    return this;
  };

  get data() {
    return this.#data;
  }
}

const sb1 = new StringBuilder2();
sb1
  // (value: string) => StringBuilder2 (+2 overloads)
  .add('Are you ')
  .add(41)
  .add(' years old?: ')
  .add(true);

assert.strictEqual(sb1.data, 'Are you 41 years old?: true');
