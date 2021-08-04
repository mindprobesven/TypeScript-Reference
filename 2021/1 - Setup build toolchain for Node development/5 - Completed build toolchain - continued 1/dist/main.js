"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const add_1 = __importDefault(require("./utils/add"));
assert_1.default.strictEqual(process.env.NODE_ENV, 'development');
assert_1.default.strictEqual(add_1.default(5, 15), 20);
//# sourceMappingURL=main.js.map