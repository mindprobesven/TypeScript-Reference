"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func1(arg) {
    console.log(arg.sharedProp);
    if ('propA' in arg) {
        console.log(arg.propA);
    }
    if ('propB' in arg) {
        console.log(arg.propB);
    }
}
function addName(obj1, first) {
    const namedObj = obj1;
    namedObj.first = first;
    return namedObj;
}
const obj = {
    last: 'Kohn',
};
console.log(addName(obj, 'Sven'));
//# sourceMappingURL=17_union_intersection_types.js.map