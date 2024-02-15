//1
interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;
  calcFuelNeeded(distance:number): number;
}

class Car implements IVehicle{
  constructor(
    public seats: number,
    public colour: string,
    public canHavePassengers: boolean,
    public fuelPer100Kilometers: number) {
  }

  calcFuelNeeded(distance: number): number {
    return (this.fuelPer100Kilometers / 100) * distance;
  }
}

const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200)); // 40


//2
interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}

interface ISuperman extends IBird, IPlane {
  guessWho: (guess: string) => string;
}

const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};

console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane')); "It's a plane?";
console.log(superMan.guessWho('superman')); "It's a superman!";


//3
type Entry = {
  [key: string]: number
};

interface IPhonebook {
  get(key: string): number | null
  set(key: string, value: number): void
}

class Phonebook implements IPhonebook {
  private readonly entries: Entry = {};

  get(key: string): number | null {
    return key in this.entries ? this.entries[key] : null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}

const myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help'); // 911
