"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const set1 = new Set([1, 2, 'a', 'b']);
function assertTrue(condition) {
    if (!condition) {
        throw new Error();
    }
}
function func1(value) {
    assertTrue(value instanceof Set);
    assert_1.default.strictEqual(value.size, 4);
}
func1(set1);
const myPoint = {
    x: 5,
    y: 10,
};
const faultyPoint = {
    z: 3,
    y: 8,
};
function assertIsPointA(obj) {
    const condition = (typeof obj === 'object'
        && obj !== null
        && 'x' in obj
        && 'y' in obj);
    if (!condition) {
        throw new Error('This object is not of type PointA');
    }
}
function func2(obj) {
    assertIsPointA(obj);
    assert_1.default.strictEqual(obj.x, 5);
    assert_1.default.strictEqual(obj.y, 10);
}
try {
    func2(myPoint);
    func2(faultyPoint);
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=16_assertion_functions.js.map