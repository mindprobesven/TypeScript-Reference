"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _SimpleStack_data;
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const num1 = 5;
const string1 = 'Sven';
const num2 = 5;
const string2 = 'Sven';
const someObject1 = {
    value: 'Sven',
};
const someObject2 = {
    value: 5,
};
class SimpleStack {
    constructor() {
        _SimpleStack_data.set(this, []);
    }
    push(x) {
        __classPrivateFieldGet(this, _SimpleStack_data, "f").push(x);
    }
    get length() {
        return __classPrivateFieldGet(this, _SimpleStack_data, "f").length;
    }
}
_SimpleStack_data = new WeakMap();
const stringStack = new SimpleStack();
stringStack.push('Sven');
stringStack.push('Barbara');
assert_1.default.strictEqual(stringStack.length, 2);
const myMap1 = new Map([
    [false, 'no'],
    [true, 'yes'],
]);
const myMap2 = new Map([
    [false, 'no'],
    [true, 'yes'],
]);
function someFunction(x) {
    return x;
}
const value1 = someFunction(123);
const value2 = someFunction(123);
const someArrowFunction = (x) => x;
const obj = {
    method1(x) {
        return x;
    },
    method2: (x) => x,
};
assert_1.default.strictEqual(obj.method1(5), 5);
assert_1.default.strictEqual(obj.method1('Sven'), 'Sven');
assert_1.default.strictEqual(obj.method2(5), 5);
assert_1.default.strictEqual(obj.method2('Sven'), 'Sven');
const valueToArray = (value) => {
    console.log(typeof value);
    if (typeof value === 'string') {
        console.log(value.split(' '));
        return new Array();
    }
    if (typeof value === 'number') {
        console.log(value);
        return [value];
    }
    return [];
};
valueToArray('S v e n');
valueToArray(555);
//# sourceMappingURL=8_type_variables.js.map