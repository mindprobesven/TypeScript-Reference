"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _MyClass2_instances, _MyClass2_privateField, _MyClass2_privateMethod, _MyClass3_data;
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class MyClass1 {
    constructor(value) {
        this.privateProperty = value;
    }
    testMethod() {
        return this.privateProperty + this.privateProperty;
    }
    get privatePropertyValue() {
        return this.privateProperty;
    }
    static accessPrivateMembers() {
        const inst = new MyClass1('foo');
        assert_1.default.strictEqual(inst.privateProperty, 'foo');
        assert_1.default.strictEqual(inst.testMethod(), 'foofoo');
    }
}
MyClass1.accessPrivateMembers();
const inst1 = new MyClass1('foo');
assert_1.default.strictEqual(inst1.privatePropertyValue, 'foo');
class MyClass2 {
    constructor(value) {
        _MyClass2_instances.add(this);
        _MyClass2_privateField.set(this, void 0);
        __classPrivateFieldSet(this, _MyClass2_privateField, value, "f");
    }
    get privateFieldValue() {
        return __classPrivateFieldGet(this, _MyClass2_privateField, "f");
    }
    static accessPrivateMembers() {
        const inst = new MyClass2('foo');
        assert_1.default.strictEqual(__classPrivateFieldGet(inst, _MyClass2_privateField, "f"), 'foo');
        assert_1.default.strictEqual(__classPrivateFieldGet(inst, _MyClass2_instances, "m", _MyClass2_privateMethod).call(inst), 'foofoo');
    }
}
_MyClass2_privateField = new WeakMap(), _MyClass2_instances = new WeakSet(), _MyClass2_privateMethod = function _MyClass2_privateMethod() {
    return __classPrivateFieldGet(this, _MyClass2_privateField, "f") + __classPrivateFieldGet(this, _MyClass2_privateField, "f");
};
MyClass2.accessPrivateMembers();
const inst2 = new MyClass2('bar');
assert_1.default.strictEqual(inst2.privateFieldValue, 'bar');
class Person {
    constructor(first) {
        this.first = first;
    }
    get firstName() {
        return this.first;
    }
}
class Employee extends Person {
    constructor(first, title) {
        super(first);
        this.title = title;
    }
    get employeeInfo() {
        return `${this.first} - ${this.title}`;
    }
}
const sven = new Employee('Sven', 'CTO');
assert_1.default.strictEqual(sven.firstName, 'Sven');
assert_1.default.strictEqual(sven.employeeInfo, 'Sven - CTO');
class MyClass3 {
    constructor(data) {
        _MyClass3_data.set(this, void 0);
        __classPrivateFieldSet(this, _MyClass3_data, data, "f");
    }
    static create(data) {
        return new this(data);
    }
    getData() {
        return __classPrivateFieldGet(this, _MyClass3_data, "f");
    }
}
_MyClass3_data = new WeakMap();
const inst3 = MyClass3.create('bar');
assert_1.default.strictEqual(inst3.getData(), 'bar');
class MyClass4 {
    constructor(props) {
        Object.assign(this, props);
    }
}
const inst4 = new MyClass4({ first: 'Sven', last: 'Kohn' });
assert_1.default.strictEqual(inst4.first, 'Sven');
class MyClass5 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
//# sourceMappingURL=12a_class_definitions.js.map