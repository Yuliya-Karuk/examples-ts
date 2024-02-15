// ENUM
enum ContractStatus {
  Permanent = 1,  // отсчет начинается с 1
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus); // 2

console.log(ContractStatus[employeeStatus]); // Temp


// Type assertion
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
    // console.log((<string>randomValue).toUpperCase()); - второй способ, но первый более предпочтительный
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}


// UNION
function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error


// Intersection
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};


//Literal
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";   - Invalid


//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


//Turple
let person1: [string, number] = ['Marcia', 35];