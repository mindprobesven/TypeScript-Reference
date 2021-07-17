/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Typing Objects
--------------------------------------------------------------------------------------
*/

import assert from 'assert';

type PointType = {
  x: number;
  y?: number;
};

interface PointInterface {
  x: number;
  y?: number;
}

const pointToString1 = (point: { x: number, y?: number }) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};

assert.strictEqual(pointToString1({ x: 5, y: 10 }), '(5, 10)');

const pointToString2 = (point: PointType) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};
assert.strictEqual(pointToString2({ x: 5, y: 10 }), '(5, 10)');

const pointToString3 = (point: PointInterface) => {
  if (point.y === undefined) {
    return `(${point.x}, 10)`;
  }
  return `(${point.x}, ${point.y})`;
};
assert.strictEqual(pointToString3({ x: 5, y: 10 }), '(5, 10)');

interface Person {
  first: string,
  last: string,
  fullName: (upperCaseIt: boolean) => string,
}

const sven: Person = {
  first: 'Sven',
  last: 'Kohn',
  fullName(upperCaseIt) {
    return `${this.first} ${this.last}`;
  },
};

console.log(sven.fullName(true));
