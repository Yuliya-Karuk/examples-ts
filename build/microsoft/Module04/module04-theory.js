"use strict";
// function declaration
function addNumbers4(x, y) {
    return x + y;
}
addNumbers4(1, 2);
//function expression
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));
//arrow function
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
// Rest Parameters
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
let addNumbersT = (x, y) => x + y;
let subtractNumbersT = (x, y) => x - y;
console.log(addNumbersT(1, 2));
console.log(subtractNumbersT(1, 2));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbersT;
    }
    else {
        return subtractNumbersT;
    }
};
console.log(doCalculation('add')(1, 2));
