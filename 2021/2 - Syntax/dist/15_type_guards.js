"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function getScore1(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return value.length;
    }
    throw new Error(`Unsupported value: ${value}`);
}
assert_1.default.strictEqual(getScore1('*****'), 5);
assert_1.default.strictEqual(getScore1(3), 3);
function getScore2(value) {
    switch (typeof value) {
        case 'number':
            return value;
        case 'string':
            return value.length;
        default:
            throw new Error(`Unsupported value: ${value}`);
    }
}
assert_1.default.strictEqual(getScore2('*****'), 5);
assert_1.default.strictEqual(getScore2(3), 3);
function func(value) {
    if (typeof value === 'function') {
        value;
    }
    if (value instanceof Date) {
        value;
    }
    if (Array.isArray(value)) {
        value;
    }
}
function getID(attendee) {
    switch (attendee.kind) {
        case 'Teacher':
            return attendee.teacherId;
        case 'Student':
            return attendee.studentId;
        default:
            throw new Error(attendee);
    }
}
function isFunction(value) {
    return typeof value === 'function';
}
function func1(arg) {
    if (isFunction(arg)) {
        return arg;
    }
    throw new Error(`Unsupported value: ${arg}`);
}
function isTypeof(value, typeString) {
    return typeof value === typeString;
}
const value = {};
if (isTypeof(value, 'number')) {
    value;
}
function isTypeof2(v, typeString) {
    return typeof value === typeString;
}
const value2 = {};
if (isTypeof2(value2, 'number')) {
    value2;
}
//# sourceMappingURL=15_type_guards.js.map