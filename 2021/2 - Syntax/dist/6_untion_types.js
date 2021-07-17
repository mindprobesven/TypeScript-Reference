"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const addMe1 = (a, b) => {
    const num = 10;
    if (b === undefined) {
        return a + num;
    }
    return a + b;
};
assert_1.default.strictEqual(addMe1(5, 10), 15);
assert_1.default.strictEqual(addMe1(5), 15);
const addMe2 = (a, b = 10) => a + b;
assert_1.default.strictEqual(addMe2(5, 10), 15);
assert_1.default.strictEqual(addMe2(5), 15);
const addMe3 = (a, b) => {
    const num = 10;
    if (b === undefined) {
        return a + num;
    }
    return a + b;
};
assert_1.default.strictEqual(addMe3(5, 10), 15);
assert_1.default.strictEqual(addMe3(5, undefined), 15);
const addMe4 = (a, b) => {
    const num = 10;
    if (b === null) {
        return a + num;
    }
    return a + b;
};
assert_1.default.strictEqual(addMe4(5, 10), 15);
assert_1.default.strictEqual(addMe4(5, null), 15);
//# sourceMappingURL=6_untion_types.js.map