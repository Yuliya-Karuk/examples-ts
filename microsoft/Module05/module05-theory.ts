class Car05 {
  // Properties
  private static numberOfCars: number = 0;  // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if ((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
    Car05.numberOfCars ++; // Increments the value of the static property
  }

  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return 'The color of the car is ' + this._color;
  }

  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if ((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }

  // This function performs work for the other method functions
  protected worker(): string {
    return this._make;
  }

  public static getNumberOfCars(): number {
    return Car05.numberOfCars;
  }
}

let myCar1 = new Car05('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
// console.log(myCar1._color);

// let myCar2 = new Car05('Galaxy Motors', 'red', 3);

let myCar3 = new Car05('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

console.log(Car05.getNumberOfCars());


class ElectricCar extends Car05 {
  // Properties unique to ElectricCar
  private _range: number;

  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(this.worker() + " is charging.")
  }

  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`
  }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();

console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"



interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    // static load(id: number): DogRecord {
        // code to load dog from database
        // return dog;
    // }

    save() {
        // code to save dog to database
    }
}