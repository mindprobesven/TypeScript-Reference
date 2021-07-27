/* eslint-disable @typescript-eslint/no-unused-vars */

// Typing Objects (Objects-as-records)
// --------------------------------------------------------------------------------------
// TypeScript has two ways of defining object types that are very similar:
// Object type literals and Interfaces

import assert from 'assert';

// Interfaces
// --------------------------------------------------------------------------------------
// - Interfaces have to be referenced. They cannot be inlined like object type literals.
// - Interfaces with duplicate names are merged

// These two interface with equal names are merged
interface PointInterface {
  x: number,
  y?: number,
}

interface PointInterface {
  z: number,
}

const pointToString1 = (point: PointInterface) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};

assert.strictEqual(pointToString1({ x: 5, y: 10, z: 15 }), '(5, 10)');
assert.strictEqual(pointToString1({ x: 5, z: 15 }), '(5, 10)');

// Object type literals
// --------------------------------------------------------------------------------------
// - Object type literals can be used inline, while interfaces can't be
// - Type aliases with duplicate names are illegal

// Here we use an inline object type literal
const pointToString2 = (point: { x: number, y?: number }) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};

assert.strictEqual(pointToString2({ x: 5, y: 10 }), '(5, 10)');
assert.strictEqual(pointToString2({ x: 5 }), '(5, 10)');

// Here we define a type alias object type literal
type PointType = {
  x: number,
  y?: number,
};

const pointToString3 = (point: PointType) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};
assert.strictEqual(pointToString3({ x: 5, y: 10 }), '(5, 10)');
assert.strictEqual(pointToString3({ x: 5 }), '(5, 10)');

// Interfaces and object type literals can contain methods
// --------------------------------------------------------------------------------------
interface Person {
  first: string,
  last: string,
  // Method definitions and properties whose values are functions, are equivalent.
  // Property whose value is a function
  fullName(upperCaseIt: boolean): string,
  // Method definition
  // fullName: (upperCaseIt: boolean) => string,
}

const sven: Person = {
  first: 'Sven',
  last: 'Kohn',
  fullName(upperCaseIt) {
    if (upperCaseIt) {
      return `${this.first.toUpperCase()} ${this.last.toUpperCase()}`;
    }
    return `${this.first} ${this.last}`;
  },
};

assert.strictEqual(sven.fullName(true), 'SVEN KOHN');
assert.strictEqual(sven.fullName(false), 'Sven Kohn');

// Interfaces and object type literals can have read-only properties
// --------------------------------------------------------------------------------------
interface MyInterface {
  readonly prop: number
}

const obj1: MyInterface = {
  prop: 5,
};

console.log(obj1.prop); // OK can read
// @ts-error: Cannot assign to 'prop' because it is a read-only property.
// obj1.prop = 10;  // NO is read-only

// Excess property checks
// --------------------------------------------------------------------------------------
// Here we created the interface Person which uses 'open interpretation', meaning it describes
// all objects that have 'at least' properties first and last. The rawPersonData object has an
// excess property 'age', which in this case is allowed.
interface Person1 {
  first: string,
  last: string
}

const rawPersonData = {
  first: 'Sven',
  last: 'Kohn',
  age: 41,
};

const fullName = (data: Person1) => `${data.first} ${data.last}`;

assert.strictEqual(fullName(rawPersonData), 'Sven Kohn');

// However, if we use object literals directly, then excess properties are forbidden
// @ts-error: Object literal may only specify known properties, and 'age' does not exist in type 'Person1'.
/*
assert.strictEqual(fullName({
  first: 'Sven',
  last: 'Kohn',
  age: 41,
}), 'Sven Kohn');
*/

// Here is how to allow excess properties in object type literals
// One option is to assign the object literal to an intermediate variable
const obj = {
  first: 'Sven',
  last: 'Kohn',
  age: 41,
};

assert.strictEqual(fullName(obj), 'Sven Kohn');

// A second option is to use a type assertion
assert.strictEqual(fullName({
  first: 'Sven',
  last: 'Kohn',
  age: 41,
} as Person1), 'Sven Kohn');
