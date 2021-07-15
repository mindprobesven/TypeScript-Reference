"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const stringify1 = (num) => String(num);
const stringify2 = (num) => String(num);
const stringify3 = (num) => String(num);
const stringify4 = (num) => String(num);
console.log(stringify4(123));
const iWillReturnUndefined1 = () => { };
const iWillReturnUndefined2 = () => { };
const multiply1 = (num, multiplier) => {
    if (multiplier === undefined) {
        return num * 2;
    }
    return num * multiplier;
};
const multiply2 = (num, multiplier = 2) => num * multiplier;
const joinNumbers = (...nums) => nums.join('-');
console.log(joinNumbers(1, 2, 3));
assert_1.default.strictEqual(joinNumbers(1, 2, 3), '1-2-3');
//# sourceMappingURL=5_function_types.js.map