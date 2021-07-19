/* eslint-disable @typescript-eslint/no-unused-vars */

// Typing Objects
// --------------------------------------------------------------------------------------

import assert from 'assert';

// Typing objects via interfaces
// --------------------------------------------------------------------------------------
interface PointInterface {
  x: number;
  y?: number;
}

const pointToString1 = (point: PointInterface) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};

assert.strictEqual(pointToString1({ x: 5, y: 10 }), '(5, 10)');
assert.strictEqual(pointToString1({ x: 5 }), '(5, 10)');

// Object literal types
// --------------------------------------------------------------------------------------
// Object literal types are anonymous interfaces
type PointType = {
  x: number;
  y?: number;
};

const pointToString2 = (point: PointType) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};
assert.strictEqual(pointToString2({ x: 5, y: 10 }), '(5, 10)');
assert.strictEqual(pointToString2({ x: 5 }), '(5, 10)');

// Object literal types can be used inline
// --------------------------------------------------------------------------------------
const pointToString3 = (point: { x: number, y?: number }) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};

assert.strictEqual(pointToString3({ x: 5, y: 10 }), '(5, 10)');
assert.strictEqual(pointToString3({ x: 5 }), '(5, 10)');

// Interfaces can contain methods
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
