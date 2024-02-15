//for const
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumberG: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnStringG: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}


// for function
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100); - Type check error



//for class
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentityClass<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor2 = new processIdentityClass<number, string>(100, 'Hello');
processor2.process();           // Displays 'Hello'
// processor2.value = '100';  -  Type check error



//for class without interface
class processIdentity3<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor3 = new processIdentity3<number, string>(100, 'Hello');
processor3.getIdentity();      // Displays 'Hello'





class Car06 {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar06 extends Car06 {
    make = 'Electric Car';
    doors = 4
}
class Truck06 extends Car06 {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car06> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar06;
accelerate<ElectricCar06>(myElectricCar);
let myTruck = new Truck06;
accelerate<Truck06>(myTruck);