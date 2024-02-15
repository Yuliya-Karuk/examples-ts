/// <reference path="module08_loans.ts" />
var LoanProgramsRef;
(function (LoanProgramsRef) {
    /*  TODO Update the calculateInterestOnlyLoanPayment function. */
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsRef.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    /*  TODO Update the calculateConventionalLoanPayment function. */
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.numberOfMonths)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsRef.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanProgramsRef || (LoanProgramsRef = {}));
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />
var interestOnlyPaymentRef = LoanProgramsRef.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPaymentRef = LoanProgramsRef.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, numberOfMonths: 180 });
console.log(interestOnlyPaymentRef); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPaymentRef); //* Returns "The conventional loan payment is 237.24"
