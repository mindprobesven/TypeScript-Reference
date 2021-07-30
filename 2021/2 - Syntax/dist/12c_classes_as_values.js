"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function createPoint1(PointClass, x, y) {
    return new PointClass(x, y);
}
const inst1 = createPoint1(Point, 3, 6);
assert_1.default.ok(inst1 instanceof Point);
function createPoint2(PointClass, x, y) {
    return new PointClass(x, y);
}
const inst2 = createPoint2(Point, 3, 6);
assert_1.default.ok(inst2 instanceof Point);
function createPoint3(PointClass, x, y) {
    return new PointClass(x, y);
}
const inst3 = createPoint3(Point, 3, 6);
assert_1.default.ok(inst3 instanceof Point);
//# sourceMappingURL=12c_classes_as_values.js.map