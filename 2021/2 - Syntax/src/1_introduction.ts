/*
Introduction to TypeScript
--------------------------------------------------------------------------------------

Files produced by the TypeScript compiler
--------------------------------------------------------------------------------------
JavaScript file: main.js
Declaration file: main.d.ts   // Contains type information , .ts file minus the JS code.
Source map file: main.js.map

Using JavaScript NPM packages from TypeScript
--------------------------------------------------------------------------------------
To use JavaScript NPM packages from TypeScript, we need type information
Option 1: The package itself may include .d.ts files or even the complete TypeScript code.
Option 2: If it doesn’t, we may still be able to use it: DefinitelyTyped is a repository of
declaration files that people have written for plain JavaScript packages.
The declaration files of DefinitelyTyped reside in the @types namespace. Therefore, if we
need a declaration file for a package such as lodash, we have to install the package @types/lodash.

Strict mode
--------------------------------------------------------------------------------------
The TypeScript compiler can be configured how thorougly it checks. The maximum setting
is activated via 'strict: true'

Setting --strict to true, sets all of the following options to true:

--noImplicitAny: If TypeScript can’t infer a type, we must specify it. This mainly applies
to parameters of functions and methods: With this settings, we must annotate them.

--noImplicitThis: Complain if the type of this isn’t clear.

--alwaysStrict: Use JavaScript’s strict mode whenever possible.

--strictNullChecks: null is not part of any type (other than its own type, null) and must
be explicitly mentioned if it is a acceptable value.

--strictFunctionTypes: enables stronger checks for function types.

--strictPropertyInitialization: Properties in class definitions must be initialized, unless
they can have the value undefined.

Type annotations
--------------------------------------------------------------------------------------
function toString(num: number): string {
  return String(num);
}

Parameter num: colon followed by number
Result of toString(): colon followed by string

Both number and string are 'type expressions' that specify the types of storage locations.
*/
