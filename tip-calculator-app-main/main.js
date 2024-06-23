//On load settings

document.addEventListener("DOMContentLoaded", function (){
  const resetButton = document.getElementById('reset-button');

  //Disable the reset button
  resetButton.disabled = true;
})

//Handling the bill input
const billAmount = document.getElementById('bill-amount');
billAmount.value = '';
let realBill = 0;

//Event Listener for the bill input
billAmount.addEventListener('change', (e) => {
  const bill = e.target.value;
  realBill = parseFloat(bill);
  console.log(bill, typeof bill);
  console.log(realBill, typeof realBill);
})

//Making the clicked button active
const buttons = document.querySelectorAll('.tips button');
const customVal = document.getElementById('custom-tip');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('clicked'));
    
    button.classList.add('clicked');

    const percentage = button.getAttribute('data-percent');
    console.log(percentage, typeof percentage);
  })
})

//Listening to the custom tip percentage
const customTip = document.getElementById('custom-tip');
customTip.value = '';
let realTip = 0;

customTip.addEventListener('change', (e) => {
  let tip = e.target.value;
  realTip = parseFloat(tip);
  console.log(realTip, typeof realTip);
})

//Listening to the number of people input element
const numOfPeople = document.getElementById('ppl-input');
numOfPeople.value = '';

numOfPeople.addEventListener('change', (e) => {
  let people = e.target.value;
  console.log(people);
})