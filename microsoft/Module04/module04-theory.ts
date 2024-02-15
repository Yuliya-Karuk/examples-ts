// function declaration
function addNumbers4 (x: number, y: number): number {
  return x + y;
}
addNumbers4(1, 2);

//function expression
let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));

//arrow function
let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}


//Deconstructed object parameters
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});


// Rest Parameters
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}


//type
type calculator = (x: number, y: number) => number;
let addNumbersT: calculator = (x: number, y: number): number => x + y;
let subtractNumbersT: calculator = (x: number, y: number): number => x - y;

console.log(addNumbersT(1, 2));
console.log(subtractNumbersT(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbersT;
    } else {
        return subtractNumbersT;
    }
}

console.log(doCalculation('add')(1, 2))

//interface
interface Calculator {
  (x: number, y: number): number;
}