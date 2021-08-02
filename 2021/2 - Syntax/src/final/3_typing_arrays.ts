/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-multi-spaces */

// Typing Arrays
// --------------------------------------------------------------------------------------
// Arrays play two roles in JavaScript (either one or both):
// List: All elements have the same type. The length of the Array varies.
// Tuple: The length of the Array is fixed. The elements generally don’t have the same type

// Arrays - List
// --------------------------------------------------------------------------------------
// An 'Array type literal' consists of the element type followed by []
const myStringArray1: string[] = ['foo', 'bar'];
const myStringArray2: (number | string)[] = ['foo', 6];

const entries1: [string, number][] = Object.entries({ a: 1 });
// %inferred-type: [string, number][]
const entries2 = Object.entries({ a: 1 });

// An interface type Array
const myStringArray3: Array<string> = ['foo', 'bar'];
const myStringArray4: Array<number | string> = ['foo', 6];

// Arrays - Tuple
// --------------------------------------------------------------------------------------
const myTuple1: [string, string, string] = ['foo', 'bar', 'zoo'];
const myTuple2: [string, string, number] = ['foo', 'bar', 6];

// Interfaces with index signature
// --------------------------------------------------------------------------------------
interface StringArray {
  [index: number]: string;
}

const myStringArray6: StringArray = ['foo', 'bar', 'zoo'];

// 'const' assertions for Arrays and type inference
// --------------------------------------------------------------------------------------
// We can suffix an Array literal with a const assertion

// %inferred-type: readonly ["igneous", "metamorphic", "sedimentary"]
const rockCategories1 = ['igneous', 'metamorphic', 'sedimentary'] as const;

// We are declaring that rockCategories won’t change. That has the following effects:
// - The Array becomes readonly – we can’t use operations that change it:
// - TypeScript infers a tuple. Compare:

// %inferred-type: string[]
const rockCategories2 = ['igneous', 'metamorphic', 'sedimentary'];
