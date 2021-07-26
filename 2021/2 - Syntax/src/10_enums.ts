/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Enums
// --------------------------------------------------------------------------------------
// With enums, TypeScript lets us define types ourselves

import assert from 'assert';

// The 'member values' of enums can be numbers, strings, a mix or even omitted
// The TypeScript manual uses camel-cased names that start with uppercase letters.
enum Colors {
  Red = 0,
  Green = 1,
  Blue = 'Blue',
}

const colorPicker = (color: Colors) => color;

assert.strictEqual(colorPicker(Colors.Green), 1);
assert.strictEqual(colorPicker(Colors.Blue), 'Blue');

// Similar to JavaScript objects, we can quote the names of enum members
enum Options {
  'With-Salami',
  'With-Ham',
  'With-Chees',
}

assert.strictEqual(Options['With-Ham'], 1);

// Protecting against forgetting cases via exhaustiveness checks
// --------------------------------------------------------------------------------------
// When we accept an enum member value, we often want to make sure that:

// - We don’t receive illegal values.
// - We don’t forget to consider any enum member values. This is especially relevant if we add members later.

class UnsupportedValueError extends Error {
  constructor(value: never) {
    super(`Unsupported value: ${value as string}`);
  }
}

const getColorValue = (color: Colors) => {
  switch (color) {
    case Colors.Red:
      return 'Red color';
    case Colors.Green:
      return 'Green color';
    case Colors.Blue:
      return 'Blue color';
    default:
      // In the default case, TypeScript infers the type 'never' for 'color' because we never get there.
      // If we would forget a possible case, for example (case Colors.Blue), then we get this error:
      // Argument of type 'Colors' is not assignable to parameter of type 'never'
      throw new UnsupportedValueError(color);
  }
};
