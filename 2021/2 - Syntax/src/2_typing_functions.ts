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
const stringify3 = (num: number): string => String(num);

// Interfaces and Type aliases with function call signatures
// --------------------------------------------------------------------------------------
interface Repeat {
  (str: string, times: number): string;
}

// Checking an arrow function
const repeat1: Repeat = (str, times) => str.repeat(times);

// Checking function declarations
// Requires first assigning the function to a type-annotated variable
function repeat2(str: string, times: number) {
  return str.repeat(times);
}
const repeat2Func: Repeat = repeat2;

// Optional, default, undefined and null parameters
// --------------------------------------------------------------------------------------
// A question mark after an identifier means that the parameter is optional.
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

// Making omissions explicit using 'null' or 'undefined'
// In TypeScript, undefined and null are handled by separate, disjoint types. We need union types such as
// undefined | string and null | string, if we want to allow them.
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

// Function return types and the special return type void
// --------------------------------------------------------------------------------------
// TypeScript can usually infer the return types of functions, but specifying them explicitly is allowed.

// 'void' is a special return type for a function: It tells TypeScript that the function always returns undefined.
// Implicitly return void
const iWillReturnUndefined1 = () => {};
// Explicity return void
const iWillReturnUndefined2 = (): void => {};

// Rest parameters
// --------------------------------------------------------------------------------------
// Their static types must be Arrays (lists or tuples):
const joinNumbers = (...nums: number[]): string => nums.join('-');

assert.strictEqual(joinNumbers(1, 2, 3), '1-2-3');

// Overloading functions using an interface
// --------------------------------------------------------------------------------------
// Here we are overloading a function to accept different sets of params.
interface Foo {
  (num1: number, num2: number): string | number;
  (num1: number): string | number;
}

const foo: Foo = (num1: unknown, num2?: unknown): string | number => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return String(num1 + num2);
  }

  if (!num2 && typeof num1 === 'number') {
    return num1;
  }

  throw new Error('Unsupported type');
};

assert.strictEqual(foo(5), 5);
assert.strictEqual(foo(5, 10), '15');

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

// Overloading arrow functions as properties using an interface
// --------------------------------------------------------------------------------------
interface Add {
  (value: boolean): StringBuilder2;
  (value: number): StringBuilder2;
  (value: string): StringBuilder2;
}

class StringBuilder2 {
  #data = '';

  add: Add = (value: unknown): this => {
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
