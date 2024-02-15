//1
function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), init);
}

unique([9, 9, 3, 8, 8]); // [9, 3, 8]
unique(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
unique([1, 1, 3, 'oops!']); // [1, 3, 'oops!']

//2
function getField(size: number): null[][] {
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}

const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]

//3
function reverse(coll: readonly number[]): number[] {
  return coll.map((_, index) => coll[coll.length - 1 - index]);
}

reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10]

//4
type Point = [number, number, number];

function isTheSamePoint(first: Point, second: Point) : boolean {
  return (first[0] === second[0] && first[1] === second[1] && first[2] === second[2])
}

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false
