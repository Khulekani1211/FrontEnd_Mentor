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
const customVal = document.getElementById('custom-tip');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('clicked'));
    
    button.classList.add('clicked');

    const percentage = button.getAttribute('data-percent');
    update();
  })
})

//Listening to the custom tip percentage
const customTip = document.getElementById('custom-tip');
customTip.value = '';
let realTip = 0;

customTip.addEventListener('input', (e) => {
  let tip = e.target.value;
  realTip = parseFloat(tip);
  update();
})

//Listening to the number of people input element
const numOfPeople = document.getElementById('ppl-input');
numOfPeople.value = '';
let realPeople = 0;

numOfPeople.addEventListener('input', (e) => {
  let people = e.target.value;
  realPeople = parseInt(people);
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
