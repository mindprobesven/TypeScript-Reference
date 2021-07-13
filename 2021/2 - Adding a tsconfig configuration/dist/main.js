"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const a = 5;
function foo(value) {
    console.log(value);
}
/*
BEFORE
This should throw typescript warning:
Parameter 'value' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)

AFTER - Adding the 'noImplicitAny' rule in the tsconfig.json
Parameter 'value' implicitly has an 'any' type.ts(7006)
*/
function bar(value) {
    console.log(value);
}
foo(5);
foo('Some String');
bar(5);
bar('Some String');
console.log(constants_1.default);
