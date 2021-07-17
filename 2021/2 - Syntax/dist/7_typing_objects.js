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
const pointToString2 = (point) => {
    if (point.y === undefined) {
        return `(${point.x}, 10)`;
    }
    return `(${point.x}, ${point.y})`;
};
assert_1.default.strictEqual(pointToString2({ x: 5, y: 10 }), '(5, 10)');
const pointToString3 = (point) => {
    if (point.y === undefined) {
        return `(${point.x}, 10)`;
    }
    return `(${point.x}, ${point.y})`;
};
assert_1.default.strictEqual(pointToString3({ x: 5, y: 10 }), '(5, 10)');
const sven = {
    first: 'Sven',
    last: 'Kohn',
    fullName(upperCaseIt) {
        return `${this.first} ${this.last}`;
    },
};
console.log(sven.fullName(true));
//# sourceMappingURL=7_typing_objects.js.map