//===============================
// Element references
//===============================

const form = document.getElementById('mortgage-form');

const purchasePrice = document.getElementById('loan-amount');
const paymentTerm = document.getElementById('loan-term');
const interestRate = document.getElementById('interest-rate');

const withResults = document.getElementById('result');
const noResults = document.querySelector('.no-result');

const monthlyRepayment = document.getElementById('detail-monthly-amount');
const totalPayment = document.getElementById('detail-total-payment');

//The "Clear All" button
const clearAll = document.querySelector('.cal-head a');

//===============================
// Mortgage Calculation
//===============================
function calculateRepayments(p, n, r, type){
    //p = Principal Amount
    //n = loan term in years
    //r = annual rate
    //type = Interest-Only or Full Repayment 
    
    const monthlyRate = r / 100 / 12;
    const totalPaymentMonths = n * 12;

    if(type === 'interest-only'){
        const monthlyPayment = p * monthlyRate;
        const totalPayment = monthlyPayment * totalPaymentMonths;
        return {monthlyPayment, totalPayment}
    }

}