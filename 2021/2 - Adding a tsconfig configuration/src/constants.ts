/*
This should show lint error:
Type number trivially inferred from a number literal, remove type annotation.eslint@typescript-eslint/no-inferrable-types
*/
const valueOfPi: number = 3.14;

export default valueOfPi;
