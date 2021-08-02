/*
Specifying the comprehensiveness of type checking
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
*/
