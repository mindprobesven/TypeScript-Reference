"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const pointToString1 = (point) => {
    if (point.y === undefined) {
        return `(${point.x}, 10)`;
    }
    return `(${point.x}, ${point.y})`;
};
assert_1.default.strictEqual(pointToString1({ x: 5, y: 10 }), '(5, 10)');
assert_1.default.strictEqual(pointToString1({ x: 5 }), '(5, 10)');
const pointToString2 = (point) => {
    if (point.y === undefined) {
        return `(${point.x}, 10)`;
    }
    return `(${point.x}, ${point.y})`;
};
assert_1.default.strictEqual(pointToString2({ x: 5, y: 10 }), '(5, 10)');
assert_1.default.strictEqual(pointToString2({ x: 5 }), '(5, 10)');
const pointToString3 = (point) => {
    if (point.y === undefined) {
        return `(${point.x}, 10)`;
    }
    return `(${point.x}, ${point.y})`;
};
assert_1.default.strictEqual(pointToString3({ x: 5, y: 10 }), '(5, 10)');
assert_1.default.strictEqual(pointToString3({ x: 5 }), '(5, 10)');
const sven = {
    first: 'Sven',
    last: 'Kohn',
    fullName(upperCaseIt) {
        if (upperCaseIt) {
            return `${this.first.toUpperCase()} ${this.last.toUpperCase()}`;
        }
        return `${this.first} ${this.last}`;
    },
};
assert_1.default.strictEqual(sven.fullName(true), 'SVEN KOHN');
assert_1.default.strictEqual(sven.fullName(false), 'Sven Kohn');
//# sourceMappingURL=7_typing_objects%20copy.js.map