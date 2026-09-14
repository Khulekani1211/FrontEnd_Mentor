//===============================
// Element references
//===============================

const form = document.getElementById('mortgage-form');

const purchasePrice = document.getElementById('loan-amount');
const paymentTerm = document.getElementById('loan-term');
const interestRate = document.getElementById('interest-rate');

const withResults = document.querySelector('.with-results')
const noResults = document.querySelector('.no-results');

const monthlyRepayment = document.getElementById('detail-monthly-amount');
const totalToPay = document.getElementById('detail-total-payment');

//The "Clear All" button
const clearAll = document.querySelector('.cal-head a');

//Error State DOM Listeners
const errorMsg = document.querySelectorAll('.error-message');
console.log(errorMsg)

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
    }else{
        //Calculating Total Monthly Repayments
        const rateFactor = Math.pow(1 + monthlyRate, totalPaymentMonths);
        const monthlyPayment = (p * monthlyRate * rateFactor) / (rateFactor -1);
        const totalPayment = monthlyPayment * totalPaymentMonths;

        return {monthlyPayment, totalPayment}
    }

    

}

//==========================
// Toggle Results Screen
//==========================

function showResults(){
    withResults.style.display = 'block';
    noResults.style.display = 'none';
}

function showNoResults(){
    withResults.style.display = 'none';
    noResults.style.display = 'block';
}

//===========================
// Clear All Functionality
//===========================

clearAll.addEventListener('click', (e) => {
    e.preventDefault();

    form.reset();
    showNoResults();
})

//=====================================
// Initializing state on page reload
//=====================================
showNoResults();

//=================================
// Formatting the Amount display
//=================================
function formatAmount(value){
    return value.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}

//=================================
// Input Validation
//=================================
function validateInput(p, n, r){
    //p = Principal Amount
    //n = loan term in years
    //r = annual rate
    //type = Interest-Only or Full Repayment 

    if(!p || !n || !r || p <= 0 || n <= 0 || r <= 0){
        errorMsg.every((item) => {
            item.style.display = 'block';
        })
    }



}

//================================
// Handling Form Submit
//================================

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const principal = parseFloat(purchasePrice.value);
    const loanTerm = parseFloat(paymentTerm.value);
    const rate = parseFloat(interestRate.value);
    const mortgageType = document.querySelector('input[name="mortgage-type"]:checked').value;


    validateInput(
        principal,
        loanTerm,
        rate
    )

    const {monthlyPayment, totalPayment} = calculateRepayments(
        principal,
        loanTerm,
        rate,
        mortgageType
    )

    monthlyRepayment.textContent = formatAmount(monthlyPayment);
    totalToPay.textContent = formatAmount(totalPayment);

    showResults();
});

