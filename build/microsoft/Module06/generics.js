"use strict";
let returnNumberG = {
    value: 25,
    message: 'Hello!'
};
let returnStringG = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
class processIdentityClass {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor2 = new processIdentityClass(100, 'Hello');
processor2.process(); // Displays 'Hello'
// processor2.value = '100';  -  Type check error
//for class without interface
class processIdentity3 {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor3 = new processIdentity3(100, 'Hello');
processor3.getIdentity(); // Displays 'Hello'
class Car06 {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar06 extends Car06 {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck06 extends Car06 {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCar06;
accelerate(myElectricCar);
let myTruck = new Truck06;
accelerate(myTruck);
