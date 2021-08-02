"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _StringBuilder_data, _StringBuilder2_data;
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function repeat(str, times) {
    return str.repeat(times);
}
assert_1.default.strictEqual(repeat('*', 5), '*****');
const stringify1 = (num) => String(num);
const stringify2 = (num) => String(num);
const stringify3 = (num) => String(num);
const repeat1 = (str, times) => str.repeat(times);
function repeat2(str, times) {
    return str.repeat(times);
}
const repeat2Func = repeat2;
const multiply1 = (num, multiplier) => {
    if (multiplier === undefined) {
        return num * 2;
    }
    return num * multiplier;
};
const multiply2 = (num, multiplier = 2) => num * multiplier;
const iWillReturnUndefined1 = () => { };
const iWillReturnUndefined2 = () => { };
const joinNumbers = (...nums) => nums.join('-');
console.log(joinNumbers(1, 2, 3));
assert_1.default.strictEqual(joinNumbers(1, 2, 3), '1-2-3');
class StringBuilder {
    constructor() {
        _StringBuilder_data.set(this, '');
    }
    add(value) {
        __classPrivateFieldSet(this, _StringBuilder_data, __classPrivateFieldGet(this, _StringBuilder_data, "f") + String(value), "f");
        return this;
    }
    get data() {
        return __classPrivateFieldGet(this, _StringBuilder_data, "f");
    }
}
_StringBuilder_data = new WeakMap();
const sb = new StringBuilder();
sb
    .add('Are you ')
    .add(41)
    .add(' years old?: ')
    .add(true);
assert_1.default.strictEqual(sb.data, 'Are you 41 years old?: true');
class StringBuilder2 {
    constructor() {
        _StringBuilder2_data.set(this, '');
        this.add = (value) => {
            __classPrivateFieldSet(this, _StringBuilder2_data, __classPrivateFieldGet(this, _StringBuilder2_data, "f") + String(value), "f");
            return this;
        };
    }
    get data() {
        return __classPrivateFieldGet(this, _StringBuilder2_data, "f");
    }
}
_StringBuilder2_data = new WeakMap();
const sb1 = new StringBuilder2();
sb1
    .add('Are you ')
    .add(41)
    .add(' years old?: ')
    .add(true);
assert_1.default.strictEqual(sb1.data, 'Are you 41 years old?: true');
//# sourceMappingURL=5_function_types.js.map