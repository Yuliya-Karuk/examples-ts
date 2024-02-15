"use strict";
class Car {
    constructor(seats, colour, canHavePassengers, fuelPer100Kilometers) {
        this.seats = seats;
        this.colour = colour;
        this.canHavePassengers = canHavePassengers;
        this.fuelPer100Kilometers = fuelPer100Kilometers;
    }
    calcFuelNeeded(distance) {
        return (this.fuelPer100Kilometers / 100) * distance;
    }
}
const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200)); // 40
const superMan = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};
console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane'));
"It's a plane?";
console.log(superMan.guessWho('superman'));
"It's a superman!";
class Phonebook {
    constructor() {
        this.entries = {};
    }
    get(key) {
        return key in this.entries ? this.entries[key] : null;
    }
    set(key, value) {
        this.entries[key] = value;
    }
}
const myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help'); // 911
