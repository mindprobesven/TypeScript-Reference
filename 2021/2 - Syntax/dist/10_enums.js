"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors["Blue"] = "Blue";
})(Colors || (Colors = {}));
const colorPicker = (color) => color;
assert_1.default.strictEqual(colorPicker(Colors.Green), 1);
assert_1.default.strictEqual(colorPicker(Colors.Blue), 'Blue');
var Options;
(function (Options) {
    Options[Options["With-Salami"] = 0] = "With-Salami";
    Options[Options["With-Ham"] = 1] = "With-Ham";
    Options[Options["With-Chees"] = 2] = "With-Chees";
})(Options || (Options = {}));
assert_1.default.strictEqual(Options['With-Ham'], 1);
class UnsupportedValueError extends Error {
    constructor(value) {
        super(`Unsupported value: ${value}`);
    }
}
const getColorValue = (color) => {
    switch (color) {
        case Colors.Red:
            return 'Red color';
        case Colors.Green:
            return 'Green color';
        case Colors.Blue:
            return 'Blue color';
        default:
            throw new UnsupportedValueError(color);
    }
};
//# sourceMappingURL=10_enums.js.map