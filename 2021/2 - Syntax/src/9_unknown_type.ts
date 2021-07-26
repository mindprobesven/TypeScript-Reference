/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// The 'unknown' type
// --------------------------------------------------------------------------------------
// The type 'unknown' is a type-safe version of the type any.
// Where 'any' allows us to do anything, unknown is much more restrictive.

import assert from 'assert';

// Before we can perform any operation on values of type unknown, we must first narrow
// their types via:
// --------------------------------------------------------------------------------------

// Type assertions
// --------------------------------------
function func1(value: unknown) {
  // @ts-error: Object is of type 'unknown'.
  // return value.toFixed(2);

  return (value as number).toFixed(2); // OK
}

// Type guards
// --------------------------------------
function func2(value: unknown) {
  // @ts-error: Object is of type 'unknown'.
  // return value.length;

  if (typeof value === 'string') {
    // %inferred-type: string
    return value.length; // OK
  }

  return undefined;
}

// Assertion functions
// --------------------------------------

/** An assertion function */
function assertIsRegExp(arg: unknown): asserts arg is RegExp {
  if (!(arg instanceof RegExp)) {
    throw new TypeError(`Not a RegExp: ${(arg as string)}`);
  }
}

function func3(value: unknown) {
  // @ts-error: Object is of type 'unknown'.
  // return value.test('abc');

  assertIsRegExp(value);

  // %inferred-type: RegExp
  return value.test('abc');
}
