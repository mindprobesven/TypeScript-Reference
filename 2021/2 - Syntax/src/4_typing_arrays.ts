/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-multi-spaces */
/*
Typing Arrays
--------------------------------------------------------------------------------------
Arrays play two roles in JavaScript (either one or both):

List: All elements have the same type. The length of the Array varies.
Tuple: The length of the Array is fixed. The elements generally don’t have the same type
*/

/*
--------------------------------------------
Arrays as lists
--------------------------------------------
*/

// %inferred-type: number[]
const arr0 = [5, 7];

const arr1: number[] = [];
const arr2: Array<number> = [];

/*
--------------------------------------------
Arrays as tuples
--------------------------------------------
For example: A two-dimensional point in an array or the result of Object.entries(obj)
*/

const arr3: [number, number] = [5, 7];

const entries1: [string, number][] = Object.entries({ a: 1 });
// %inferred-type: [string, number][]
const entries2 = Object.entries({ a: 1 });
