/* eslint-disable @typescript-eslint/lines-between-class-members */

// Classes as types (interfaces)
// --------------------------------------------------------------------------------------

import assert from 'assert';

// The class definition creates two things:
// 1. A constructor function named Color (that can be invoked via new)
// 2. An 'interface' named Color that matches instances of Color
class Color implements RgbColor {
  name: string;
  rgbValue: [number, number, number];

  constructor(name: string, rgbValue: [number, number, number]) {
    this.name = name;
    this.rgbValue = rgbValue;
  }
}

// Here is proof that 'Color' really is an interface as we can extend it
interface RgbColor extends Color {
  rgbValue: [number, number, number];
}

const green = new Color('green', [1, 1, 1]);
assert.strictEqual(green.name, 'green');
assert.deepStrictEqual(green.rgbValue, [1, 1, 1]);
