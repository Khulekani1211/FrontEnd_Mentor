//===============================
// Element references
//===============================

const form = document.getElementById('mortgage-form');

const purchasePrice = document.getElementById('loan-amount');
const paymentTerm = document.getElementById('loan-term');
const interestRate = document.getElementById('interest-rate');

const withResults = document.querySelector('.with-results')
const noResults = document.querySelector('.no-results');

const mortgageTypeGroup = document.querySelector('.mortgage-type');
const mortgageTypeRadios = document.querySelectorAll('input[name="mortgage-type"]');

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
function validateInput(value, group, type = 'number') {
  const isEmpty = value === null || value === undefined || String(value).trim() === '';
 
  let isValid = true;
  let message = '';
 
  if (isEmpty) {
    isValid = false;
    message = type === 'choice' ? 'Please select an option' : 'This field is required';
  } else if (type === 'number') {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      isValid = false;
      message = 'Must be a positive number';
    }
  }
 
  const errorEl = group.querySelector('.error-message');
 
  if (isValid) {
    group.classList.remove('error');
  } else {
    group.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
    }
  }
 
  return isValid;
}

function getCheckedMortgageType() {
  const checked = document.querySelector('input[name="mortgage-type"]:checked');
  return checked ? checked.value : null;
}
 
function validateForm() {
  // Call every check up front (not short-circuited) so all invalid
  // fields/groups get their error state applied together, not just the first.
  const results = [
    validateInput(purchasePrice.value, purchasePrice.closest('.input-group')),
    validateInput(paymentTerm.value, paymentTerm.closest('.input-group')),
    validateInput(interestRate.value, interestRate.closest('.input-group')),
    validateInput(getCheckedMortgageType(), mortgageTypeGroup, 'choice')
  ];
 
  return results.every(Boolean);
}

// Clear a field's error live, as soon as the user corrects it
[purchasePrice, paymentTerm, interestRate].forEach((input) => {
  input.addEventListener('input', () => {
    const group = input.closest('.input-group');
    if (!group.classList.contains('error')) return; // nothing to clear yet
    validateInput(input.value, group); // re-checks and clears .error if now valid
  });
});
 
mortgageTypeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    validateInput(getCheckedMortgageType(), mortgageTypeGroup, 'choice');
  });
});

//================================
// Handling Form Submit
//================================

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
        return;
    }

    const principal = parseFloat(purchasePrice.value);
    const loanTerm = parseFloat(paymentTerm.value);
    const rate = parseFloat(interestRate.value);
    const mortgageType = getCheckedMortgageType();

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

