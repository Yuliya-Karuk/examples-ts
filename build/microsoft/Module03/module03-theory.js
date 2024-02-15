"use strict";
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
};
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
let myIceCream2;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream2[0];
console.log(myStr);
