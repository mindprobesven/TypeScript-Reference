"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class Color {
    constructor(name, rgbValue) {
        this.name = name;
        this.rgbValue = rgbValue;
    }
}
const green = new Color('green', [1, 1, 1]);
assert_1.default.strictEqual(green.name, 'green');
assert_1.default.deepStrictEqual(green.rgbValue, [1, 1, 1]);
//# sourceMappingURL=12b_classes_as_types.js.map