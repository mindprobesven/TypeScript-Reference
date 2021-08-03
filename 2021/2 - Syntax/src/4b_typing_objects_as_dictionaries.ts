/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Typing Objects (Objects-as-dictionaries)
// --------------------------------------------------------------------------------------

import assert from 'assert';

// String keys
// --------------------------------------------------------------------------------------
// We use an index signature here to express that TranslationDict is for objects that map
// string keys to string values
interface TranslationDict {
  [key: string]: string,
}

const dictonary = {
  yes: 'sí',
  no: 'no',
  maybe: 'tal vez',
};

const translate = (dict: TranslationDict, english: string): string => dict[english];

assert.strictEqual(translate(dictonary, 'maybe'), 'tal vez');

// Number keys
// --------------------------------------------------------------------------------------
// We use an index signature here to express that ColorsDictionary is for objects that map
// number keys to string values
interface ColorsDictionary {
  [key: number]: string,
}

const colorsDictionary = {
  1: 'red',
  2: 'orange',
  3: 'blue',
};

const getColorByID = (dict: ColorsDictionary, id: number): string => dict[id];

assert.strictEqual(getColorByID(colorsDictionary, 2), 'orange');
