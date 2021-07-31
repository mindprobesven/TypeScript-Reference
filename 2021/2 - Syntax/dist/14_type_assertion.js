"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const data1 = ['a', 'b', 'c'];
assert_1.default.strictEqual(data1.length, 3);
function getName(obj) {
    if (typeof obj.name === 'string') {
        return obj.name;
    }
    return '(Unnamed)';
}
assert_1.default.strictEqual(getName({ name: 'Sven' }), 'Sven');
assert_1.default.strictEqual(getName({ name: 5 }), '(Unnamed)');
const dictionary = {
    red: 0,
    green: 1,
    blue: 2,
};
function getPropertyValue(dict, key) {
    if (typeof dict === 'object' && dict !== null && key in dict) {
        return dict[key];
    }
    throw new Error();
}
console.log(getPropertyValue(dictionary, 'blue'));
//# sourceMappingURL=14_type_assertion.js.map