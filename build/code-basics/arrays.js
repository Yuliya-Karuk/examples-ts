"use strict";
//1
function unique(coll) {
    const init = [];
    return coll.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), init);
}
unique([9, 9, 3, 8, 8]); // [9, 3, 8]
unique(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
unique([1, 1, 3, 'oops!']); // [1, 3, 'oops!']
//2
function getField(size) {
    const field = Array(size).fill(null).map(() => Array(size).fill(null));
    return field;
}
const field1 = getField(1);
console.log(field1);
// [[null]]
const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]
//3
function reverse(coll) {
    return coll.map((_, index) => coll[coll.length - 1 - index]);
}
reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10]
function isTheSamePoint(first, second) {
    return (first[0] === second[0] && first[1] === second[1] && first[2] === second[2]);
}
const p1 = [1, 3, 4];
const p2 = [1, 3, 4];
const p3 = [0, 8, 4];
isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
