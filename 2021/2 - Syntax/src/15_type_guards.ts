/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/space-infix-ops */
/* eslint-disable indent */

// Type guards and assertion functions
// --------------------------------------------------------------------------------------
// In TypeScript, a value can have a type that is too general for some operations –
// for example, a union type.

// The solution is to use narrowing of types with type guards and assertion functions.

import assert from 'assert';

// Narrowing via if and type guards
// --------------------------------------------------------------------------------------
// Inside the body of getScore(), we don’t know if the type of value is number or string.
// Before we do, we can’t really work with value.
function getScore1(value: number | string): number {
  // We use 'narrowing' via if and type guards
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    return value.length;
  }
  throw new Error(`Unsupported value: ${value as string}`);
}

assert.strictEqual(getScore1('*****'), 5);
assert.strictEqual(getScore1(3), 3);

// Narrowing via switch and type guards
// --------------------------------------------------------------------------------------
function getScore2(value: number | string): number {
  switch (typeof value) {
    case 'number':
      return value;
    case 'string':
      return value.length;
    default:
      throw new Error(`Unsupported value: ${value as string}`);
  }
}

assert.strictEqual(getScore2('*****'), 5);
assert.strictEqual(getScore2(3), 3);

// typeof, instanceof, Array.isArray type guards
// --------------------------------------------------------------------------------------
function func(value: Function|Date|number[]) {
  if (typeof value === 'function') {
    // %inferred-type: Function
    value;
  }

  if (value instanceof Date) {
    // %inferred-type: Date
    value;
  }

  if (Array.isArray(value)) {
    // %inferred-type: number[]
    value;
  }
}

// Checking the value of a shared property (discriminated unions)
// --------------------------------------------------------------------------------------
// In a discriminated union, the components of a union type have one or more properties in common
// (kind) whose values are different for each component. Such properties are called 'discriminants'.

// Here, .kind is a discriminant: Each components of the union type Attendee has this property, with
// a unique value.
type Teacher = { kind: 'Teacher', teacherId: string };
type Student = { kind: 'Student', studentId: string };

type Attendee = Teacher | Student;

function getID(attendee: Attendee): string {
  switch (attendee.kind) {
    case 'Teacher':
      return attendee.teacherId;
    case 'Student':
      return attendee.studentId;
    default:
      throw new Error(attendee);
  }
}

// User-defined type guards
// --------------------------------------------------------------------------------------
// Here we define our own type guard isFunction(). The return type 'value is Function' is a
// type predicate. It is part of the type signature of isFunction()
//
// A user-defined type guard must always return booleans. If isFunction(x) returns true, TypeScript
// narrows the type of the actual argument x to Function

function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

function func1(arg: unknown) {
  if (isFunction(arg)) {
    // %inferred-type: Function
    return arg;
  }
  throw new Error(`Unsupported value: ${arg as string}`);
}

// Using overloading
// --------------------------------------------------------------------------------------
function isTypeof(value: unknown, typeString: 'boolean'): value is boolean;
function isTypeof(value: unknown, typeString: 'number'): value is number;
function isTypeof(value: unknown, typeString: 'string'): value is string;
function isTypeof(value: unknown, typeString: string): boolean {
  return typeof value === typeString;
}

const value: unknown = {};
if (isTypeof(value, 'number')) {
  // %inferred-type: number
  value;
}

// Using an interface as a type map
// --------------------------------------------------------------------------------------
interface TypeMap {
  boolean: boolean;
  number: number;
  string: string;
}

function isTypeof2<T extends keyof TypeMap>(v: unknown, typeString: T): v is TypeMap[T] {
  return typeof value === typeString;
}

const value2: unknown = {};
if (isTypeof2(value2, 'number')) {
  // %inferred-type: number
  value2;
}
