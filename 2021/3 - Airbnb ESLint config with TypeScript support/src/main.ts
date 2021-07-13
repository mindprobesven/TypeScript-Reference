import valueOfPi from './constants';

const a = 5;

function foo(value: number) {
  console.log(value);
}

function bar(value) {
  console.log(value);
}

foo(5);
foo('Some String');

bar(5);
bar('Some String');

console.log(valueOfPi);
