//On load settings
const resetButton = document.getElementById('reset-button');
document.addEventListener("DOMContentLoaded", function (){
  //Disable the reset button
  resetButton.disabled = true;
})

//Handling the bill input
const billAmount = document.getElementById('bill-amount');
billAmount.value = '';
let realBill = 0;

//Event Listener for the bill input
billAmount.addEventListener('input', (e) => {
  const bill = e.target.value;
  realBill = parseFloat(bill);
  update();
})

//Making the clicked button active
const buttons = document.querySelectorAll('.tips button');
//const customVal = document.getElementById('custom-tip');
let realTip = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('clicked'));
    
    button.classList.add('clicked');

    realTip = parseFloat(button.getAttribute('data-percent'));
    customTip.value = '';
    update();
  })
})

//Listening to the custom tip percentage
const customTip = document.getElementById('custom-tip');
customTip.value = '';

customTip.addEventListener('input', (e) => {
  let tip = e.target.value;
  realTip = parseFloat(tip);
  update();
})

//Listening to the number of people input element
const numOfPeople = document.getElementById('ppl-input');
numOfPeople.value = '';
let realPeople = 0;
const zeroInput = document.querySelector('.zero-ppl'); // Is the span for zero input validation
const invalidInput = document.querySelector('.invalid-ppl'); // Is the span for non-zero input validation

numOfPeople.addEventListener('input', (e) => {
  let people = parseInt(e.target.value);
  realPeople = people > 0 ? people : 0;
  const pattern = /^[a-zA-Z1-9!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|`~\-=\s]+$/;
  //console.log(people > 0)
  if(realPeople > 0 || e.target.value == ''){
    numOfPeople.classList.remove('validate')
    invalidInput.style.display = 'none';
    zeroInput.style.display = 'none';
  }
  else if(pattern.test(e.target.value)){
    numOfPeople.classList.add('validate')
    invalidInput.style.display = 'block';
    //console.log('correct')
  }
  else{
    numOfPeople.classList.add('validate')
    zeroInput.style.display = 'block';
    invalidInput.style.display = 'none';
    //console.log('not correct')
  }
  

  update();
})

//Calculating the tip per person and the total amount per person
const tipAmount = (bill, tip, numOfPpl) => {
  return (bill*tip/100)/numOfPpl;
}

const totalBill = (bill, tip, numOfPpl) => {
  return (bill + (bill*tip/100))/numOfPpl;
}

//Updating the results as the input changes.
const update = () => {
  if(realBill > 0 && realTip > 0 && realPeople > 0){
    const tipPerPerson = tipAmount(realBill, realTip, realPeople);
    const totalPerPerson = totalBill(realBill, realTip, realPeople);

    document.getElementById("tipTotal").textContent = tipPerPerson.toFixed(2);
    document.getElementById("billTotal").textContent = totalPerPerson.toFixed(2);
    resetButton.disabled = false; 
  }else{
    document.getElementById("tipTotal").textContent = '0.00';
    document.getElementById("billTotal").textContent = '0.00';
    resetButton.disabled = true;
  }
}

resetButton.addEventListener('click', () => {
  billAmount.value = '';
  buttons.forEach(btn => btn.classList.remove('clicked'));
  customTip.value = '';
  numOfPeople.value = '';
  document.getElementById("tipTotal").textContent = '0.00';
  document.getElementById("billTotal").textContent = '0.00';
  resetButton.disabled = true;
})

