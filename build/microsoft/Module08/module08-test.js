"use strict";
/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
/*  TODO Create LoanPrograms namespace. */
var LoanPrograms;
(function (LoanPrograms) {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    function calculateInterestOnlyLoanPayment(loanTerms) {
        let payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  TODO Update the calculateConventionalLoanPayment function. */
    function calculateConventionalLoanPayment(loanTerms) {
        let interest = calculateInterestRate(loanTerms.interestRate);
        let payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        let interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
/*  TODO Update the calculateInterestOnlyLoanPayment function. */
/*  TODO Add reference paths. */
/*  TODO Update the function calls. */
let interestOnlyPayment08 = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
let conventionalLoanPayment08 = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, numberOfMonths: 180 });
console.log(interestOnlyPayment08); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment08); //* Returns "The conventional loan payment is 237.24"
