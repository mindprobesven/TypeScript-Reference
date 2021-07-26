"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func1(value) {
    return value.toFixed(2);
}
function func2(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return undefined;
}
function assertIsRegExp(arg) {
    if (!(arg instanceof RegExp)) {
        throw new TypeError(`Not a RegExp: ${arg}`);
    }
}
function func3(value) {
    assertIsRegExp(value);
    return value.test('abc');
}
//# sourceMappingURL=9_unknown_type.js.map