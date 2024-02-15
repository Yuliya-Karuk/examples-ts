// 1
function filter(arr: number[], callback: (n: number) => boolean) : number[] {
  return arr.filter(callback);
}

const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]

//2
function map1(arr: number[], callback: (arg: number, index: number) => number) : number[] {
  return arr.map(callback);
}

map1([3, 9], (n) => n - 3);
// [0, 6]

map1([8, 9], (n) => n + 8);
// [16, 17]


//3
function forEach1(numbers: number[], callback: (n: number, index: number) => void): void {
  numbers.forEach((n, index) => callback(n, index));
}

forEach1([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result: number[] = [];
forEach1([1, 2, 3], (x) => result.push(x));
// [1, 2, 3]


//4
function fail(): never {
  throw new Error('wow');
}


//5
function isPlainObject(value: unknown): boolean {
  return value instanceof Object && !Array.isArray(value);
}

isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false

//6
function lessonsCount({lessons}: {lessons: string[]}) : number {
 return lessons.length;
}

const course = { lessons: ['intro', 'lala'] };
lessonsCount(course); // 2


//7
function max(first: number, ...rest: number[]): number {
  return Math.max(first, ...rest);
}

max(1,2,3);
max(234);

//8
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(data1: string | number, data2?: string): string {
  if (typeof data1 === 'number') {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  }

  return `Hi ${data1}! Happy New Year!`;
}

newYearCongratulate('John'); // Hi John! Happy New Year!
newYearCongratulate(2023, 'Mila'); // Hi Mila! Happy New Year 2023!

//9
function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }

  return value[value.length - 1] ?? '';
}

// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5
