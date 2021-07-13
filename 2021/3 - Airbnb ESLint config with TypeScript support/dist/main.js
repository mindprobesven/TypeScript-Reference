"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/*
This should throw lint error:
'a' is declared but its value is never read.ts(6133)
and
This should throw typescript error:
'a' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
*/
const a = 5;
function foo(value) {
    console.log(value);
}
/*
This should throw typescript error:
Parameter 'value' implicitly has an 'any' type.ts(7006)
*/
function bar(value) {
    console.log(value);
}
foo(5);
/*
This should throw typescript error:
Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
*/
foo('Some String');
bar(5);
bar('Some String');
console.log(constants_1.default);
