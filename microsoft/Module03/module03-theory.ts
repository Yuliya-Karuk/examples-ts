interface Employee1 {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee1 = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
}



interface IceCream {
  flavor: string;
  scoops: number;
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true
}

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));



// interface for array
interface IceCreamArray1 {
  [index: number]: string;
}

let myIceCream2: IceCreamArray1;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr);