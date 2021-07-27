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
const colorsDictionary = {
    1: 'red',
    2: 'orange',
    3: 'blue',
};
const getColorByID = (dict, id) => dict[id];
assert_1.default.strictEqual(getColorByID(colorsDictionary, 2), 'orange');
//# sourceMappingURL=7b_typing_objects_as_dictionaries.js.map