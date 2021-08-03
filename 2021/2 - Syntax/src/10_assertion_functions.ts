// Assertion functions
// --------------------------------------------------------------------------------------
// An assertion function checks if its parameter fulfills certain criteria and throws an
// exception if it doesn’t.
//
// TypeScript’s type inference provides special support for assertion functions, if we mark such
// functions with assertion signatures as return types.
//
// There are two kinds of assertion signatures:
//
// Asserting a boolean argument: asserts «cond»
// Asserting the type of an argument: asserts «arg» is «type»

import assert from 'assert';

// Asserting a boolean argument: asserts «cond»
// --------------------------------------------------------------------------------------
const set1 = new Set([1, 2, 'a', 'b']);

function assertTrue(condition: boolean): asserts condition {
  if (!condition) {
    throw new Error();
  }
}

function func1(value: unknown) {
  assertTrue(value instanceof Set);
  // %inferred-type: Set<any>
  assert.strictEqual(value.size, 4);
}

func1(set1);

// Asserting the type of an argument: asserts «arg» is «type»
// --------------------------------------------------------------------------------------
// In the following example, the assertion signature 'asserts obj is PointA' states that the
// parameter 'obj' must have the type PointA. Otherwise, an exception is thrown.
type PointA = { x: number, y: number };
type PointB = { z: number, y: number };

const myPoint: PointA = {
  x: 5,
  y: 10,
};

const faultyPoint: PointB = {
  z: 3,
  y: 8,
};

function assertIsPointA(obj: unknown): asserts obj is PointA {
  const condition = (
    typeof obj === 'object'
    && obj !== null
    && 'x' in obj
    && 'y' in obj
  );

  if (!condition) {
    throw new Error('This object is not of type PointA');
  }
}

function func2(obj: unknown) {
  assertIsPointA(obj);
  // %inferred-type: PointA
  assert.strictEqual(obj.x, 5);
  assert.strictEqual(obj.y, 10);
}

try {
  func2(myPoint);
  // This will throw an error because faultyPoint is of type PointB
  func2(faultyPoint);
} catch (error) {
  console.log((error as Error).message);
}
