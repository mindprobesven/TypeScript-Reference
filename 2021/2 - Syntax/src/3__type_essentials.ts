/*
TypeScript essentials
--------------------------------------------------------------------------------------

--------------------------------------------
Type annotations
--------------------------------------------
function toString(num: number): string {
  return String(num);
}

Parameter num: colon followed by number
Result of toString(): colon followed by string

Both number and string are 'type expressions' that specify the types of storage locations.

--------------------------------------------
Type inference
--------------------------------------------
Often, TypeScript can infer a static type if there is no type annotation. For example, if
we omit the return type of toString(), TypeScript infers that it is string:

// %inferred-type: (num: number) => string
function toString(num: number) {
  return String(num);
}
*/

/*
--------------------------------------------
Type aliases
--------------------------------------------
With type we can create a new name (an alias) for an existing type
*/
type Age = number;
const age: Age = 82;

console.log(age);
