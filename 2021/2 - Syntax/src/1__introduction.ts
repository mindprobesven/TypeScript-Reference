/*
Introduction to TypeScript
--------------------------------------------------------------------------------------
- Files produced by the TypeScript compiler:

JavaScript file: main.js
Declaration file: main.d.ts
Source map file: main.js.map

- Declaration files .d.ts
The declaration file contains type information, think .ts file minus the JavaScript code.
With .d.ts files, tools like TypeScript can provide intellisense and accurate types for
un-typed code. We profit from it if we work with plain JavaScript because it gives
us better auto-completion and more.

- To use JavaScript NPM packages from TypeScript, we need type information
Option 1: The package itself may include .d.ts files or even the complete TypeScript code.
Option 2: If it doesn’t, we may still be able to use it: DefinitelyTyped is a repository of
declaration files that people have written for plain JavaScript packages.
The declaration files of DefinitelyTyped reside in the @types namespace. Therefore, if we
need a declaration file for a package such as lodash, we have to install the package @types/lodash.

- Using TypeScript compiler for plain JavaScript files
The TypeScript compiler can also process JavaScript files.
With the option --allowJs, the TypeScript compiler copies JavaScript files in the input directory
over to the output directory. Benefit: When migrating from JavaScript to TypeScript, we can start
with a mix of JavaScript and TypeScript files and slowly convert more JavaScript files to TypeScript.

The TypeScript compiler uses static type information that is specified via 'JSDoc' comments.
If we are thorough, we can fully statically type plain JavaScript files and even derive declaration
files from them.
*/
