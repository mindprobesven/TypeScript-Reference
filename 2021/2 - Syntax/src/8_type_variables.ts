/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Type variables and generic types
// --------------------------------------------------------------------------------------

import assert from 'assert';

// With 'type' we can create an 'alias' for an existing type.
// --------------------------------------------------------------------------------------
type StringOrNumberType = number | string;

const num1: StringOrNumberType = 5;
const string1: StringOrNumberType = 'Sven';

// We can use 'type paramaters' to create type factories
// --------------------------------------------------------------------------------------
// In TypeScript, it is common to use a single uppercase character (such as T, I, and O)
// for a type parameter. However, any legal JavaScript identifier is allowed and longer names
// often make code easier to understand.
type TypeFactory<T> = T;
type NumberType = TypeFactory<number>;
type StringType = TypeFactory<string>;

const num2: NumberType = 5;
const string2: StringType = 'Sven';

// Here we create an interface factory as a container for values.
// --------------------------------------------------------------------------------------
// One or more 'type paramaters' can be introduced between angle brackets.
// Here the type for 'value' can be either a string or a number.
interface ValueContainer<T> {
  value: T;
}

const someObject1: ValueContainer<string | number> = {
  value: 'Sven',
};

const someObject2: ValueContainer<string | number> = {
  value: 5,
};

// Here we create a generic class with a type parameter
// --------------------------------------------------------------------------------------
class SimpleStack<T> {
  #data: Array<T> = [];

  push(x: T): void {
    this.#data.push(x);
  }

  get length() {
    return this.#data.length;
  }
}

// Here the class is instantiated with a 'type parameter' value 'string'
const stringStack = new SimpleStack<string>();
stringStack.push('Sven');
stringStack.push('Barbara');
assert.strictEqual(stringStack.length, 2);

// Maps
// --------------------------------------------------------------------------------------
const myMap1: Map<boolean, string> = new Map([
  [false, 'no'],
  [true, 'yes'],
]);

// Thanks to type inference (based on the argument of new Map()), we can omit the type parameters:
// %inferred-type: Map<boolean, string>
const myMap2 = new Map([
  [false, 'no'],
  [true, 'yes'],
]);

// Type variables for functions and methods
// --------------------------------------------------------------------------------------

// Functions with type parameters
// -----------------------------------------
function someFunction<T>(x: T): T {
  return x;
}

// %inferred-type: number
// function someFunction<number>(x: number): number
const value1 = someFunction<number>(123);

// %inferred-type: 123
// function someFunction<123>(x: 123): 123
// Note that TypeScript inferred the type 123, which is a set with one number and more specific than the type number.
const value2 = someFunction(123);

// Arrow functions with type parameters
// -----------------------------------------
const someArrowFunction = <T>(x: T): T => x;

// Object methods with type parameters
// -----------------------------------------
const obj = {
  // Method definition
  method1<T>(x: T): T {
    return x;
  },
  // Property whose value is a function
  method2: <T>(x: T): T => x,
};

assert.strictEqual(obj.method1<number>(5), 5);
assert.strictEqual(obj.method1<string>('Sven'), 'Sven');

assert.strictEqual(obj.method2<number>(5), 5);
assert.strictEqual(obj.method2<string>('Sven'), 'Sven');

// const stringToArray = <T>(arr: T): T[] => [arr.split(' ')];
const valueToArray = <T>(value: T): T[] => {
  console.log(typeof value);

  if (typeof value === 'string') {
    console.log(value.split(' '));
    const foo = value.split(' ');
    return new Array<T>().concat(foo);
  }

  if (typeof value === 'number') {
    return new Array<T>().fill(value);
  }
  return [];
  // const foo = String(arr).split(' ');
  // const newArr = new Array<T>();
  // newArr.push(5);
  // return new Array<T>().push('f');
  // const foo = (<string><unknown>arr).split(' ');
  // return new Array<T>().fill(foo);
  // return new Array<T>().fill(arr);
};

valueToArray<string>('S v e n');
valueToArray<number>(555);
// console.log(new Array<string>().concat('S v e n'.split(' ')));
