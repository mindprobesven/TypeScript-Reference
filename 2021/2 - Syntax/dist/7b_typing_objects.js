"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const dictonary = {
    yes: 'sí',
    no: 'no',
    maybe: 'tal vez',
};
const translate = (dict, english) => dict[english];
assert_1.default.strictEqual(translate(dictonary, 'maybe'), 'tal vez');
//# sourceMappingURL=7b_typing_objects.js.map