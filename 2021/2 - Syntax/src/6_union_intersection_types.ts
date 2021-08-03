/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Union and intersection types
// --------------------------------------------------------------------------------------

// Union types (|)
// --------------------------------------------------------------------------------------
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

// %inferred-type: "a" | "b" | "c" | "d"
type Union1 = A | B;

// Syntactically, we can also put a | in front of the first component of a union type. That is
// convenient when a type definition spans multiple lines:
type C =
  | 'a'
  | 'b'
  | 'c'
;

// Unions of object types
// --------------------------------------------------------------------------------------
type ObjectTypeA = {
  propA: bigint,
  sharedProp: string,
};

type ObjectTypeB = {
  propB: boolean,
  sharedProp: string,
};

type Union2 = ObjectTypeA | ObjectTypeB;

function func(arg: Union2) {
  // 'sharedProp' is a property that is shared by all component types (ObjectTypeA and ObjectTypeB)
  // Therefore, we can safely access it.
  console.log(arg.sharedProp);

  // However, 'propA' is a property that is not shared by all components. To access this property we
  // need a type guard.

  // @ts-error: Property 'propA' does not exist on type 'Union2'.
  // console.log(arg.propA);  // Cannot access before type guard

  if ('propA' in arg) {
    // %inferred-type: ObjectTypeA
    console.log(arg.propA);
  }

  if ('propB' in arg) {
    // %inferred-type: ObjectTypeB
    console.log(arg.propB);
  }
}

// Intersection types (&)
// --------------------------------------------------------------------------------------
// The members of the result are members of both operands
type D = 'a' | 'b' | 'c';
type E = 'b' | 'c' | 'd';

// %inferred-type: "b" | "c"
type Intersection = D & E;

// Using intersection types for mixins
// --------------------------------------------------------------------------------------
// If we are mixin in an object type Named into another type Obj, then we need an intersection type
interface Named {
  first: string;
}

// This works
/* function addName(obj1: Record<string, unknown>, first: string): Record<string, unknown> & Named {
  const namedObj = obj1 as (Record<string, unknown> & Named);
  namedObj.first = first;
  return namedObj;
} */

// Alternative using 'extends'
function addName<Obj extends Record<string, unknown>>(obj1: Obj, first: string): Obj & Named {
  const namedObj = obj1 as (Obj & Named);
  namedObj.first = first;
  return namedObj;
}

const obj = {
  last: 'Kohn',
};

// %inferred-type: { last: string; } & Named
console.log(addName(obj, 'Sven'));
