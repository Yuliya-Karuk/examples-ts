"use strict";
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
function identity2(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = identity2(100, 'Hello');
let stringValue = identity2('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
