import valueOfPi from './constants';

/*
This should show lint error:
'a' is declared but its value is never read.ts(6133)
and
This should show typescript error:
'a' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
*/
const a = 5;

function foo(value: number) {
  console.log(value);
}

/*
This should show typescript warning:
Parameter 'value' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
*/
function bar(value) {
  console.log(value);
}

foo(5);
/*
This should show typescript error:
Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
*/
foo('Some String');

bar(5);
bar('Some String');

console.log(valueOfPi);
