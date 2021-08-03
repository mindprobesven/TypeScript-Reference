/* eslint-disable @typescript-eslint/ban-types */

// Type assertions
// --------------------------------------------------------------------------------------
// Type assertions in TypeScript are related to type casts in other languages and performed
// via the 'as' operator.
//
// A type assertion lets us override a static type that TypeScript has computed for a value.
//
// Type assertions are a last resort and should be avoided as much as possible. They (temporarily)
// remove the safety net that the static type system normally gives us.

import assert from 'assert';

// Here we widen the type of the Array to an object.
const data1: object = ['a', 'b', 'c'];

// This type doesn't let us access any properties.

// @ts-error: Property 'length' does not exist on type 'object'
// assert.strictEqual(data1.length, 3);

// We use type assertion that data1 is an Array. Now we can access property .length
assert.strictEqual((data1 as Array<string>).length, 3);

// Asserting an interface
// --------------------------------------------------------------------------------------
// Here we temporarily change the static type of obj (object) to Named (interface).
interface Named {
  name: string;
}

function getName(obj: object): string {
  if (typeof (obj as Named).name === 'string') {
    return (obj as Named).name;
  }
  return '(Unnamed)';
}

assert.strictEqual(getName({ name: 'Sven' }), 'Sven');
assert.strictEqual(getName({ name: 5 }), '(Unnamed)');

// Asserting an index signature
// --------------------------------------------------------------------------------------
// Here we use the type assertion 'Dictonary', so that we can access the properties of a
// value whose inferred type is 'object'. That is, we are overriding the static type
// 'object' with the static type 'Dictionary'.
type Dictionary = {
  [key: string]: string;
};

const dictionary = {
  red: 0,
  green: 1,
  blue: 2,
};

function getPropertyValue(dict: unknown, key: string): string {
  // Doing this, we can help TypeScript infer the type 'object' for 'dict'
  if (typeof dict === 'object' && dict !== null && key in dict) {
    return (dict as Dictionary)[key];
  }
  throw new Error();
}

console.log(getPropertyValue(dictionary, 'blue'));
