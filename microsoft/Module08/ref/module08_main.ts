/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />

let interestOnlyPaymentRef = LoanProgramsRef.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPaymentRef = LoanProgramsRef.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, numberOfMonths: 180});
console.log(interestOnlyPaymentRef);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPaymentRef);     //* Returns "The conventional loan payment is 237.24"