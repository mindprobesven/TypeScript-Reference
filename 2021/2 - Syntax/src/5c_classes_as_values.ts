/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/lines-between-class-members */

// Classes as values
// --------------------------------------------------------------------------------------

import assert from 'assert';

// The type operator typeof
// --------------------------------------------------------------------------------------
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// We can’t use the type Point for PointClass: It matches instances of class Point, not class Point itself.
// Instead, we need to use the type operator typeof
function createPoint1(PointClass: typeof Point, x: number, y: number) {
  return new PointClass(x, y);
}

const inst1 = createPoint1(Point, 3, 6);
assert.ok(inst1 instanceof Point);

// Constructor type literals
// --------------------------------------------------------------------------------------
// A constructor type literal is a function type literal with a prefixed 'new'. The prefix indicates that
// PointClass is a function that must be invoked via new.
function createPoint2(PointClass: new (x: number, y: number) => Point, x: number, y: number) {
  return new PointClass(x, y);
}

const inst2 = createPoint2(Point, 3, 6);
assert.ok(inst2 instanceof Point);

// Object type literals with construct signatures
// --------------------------------------------------------------------------------------
function createPoint3(PointClass: { new (x: number, y: number): Point }, x: number, y: number) {
  return new PointClass(x, y);
}

const inst3 = createPoint3(Point, 3, 6);
assert.ok(inst3 instanceof Point);
