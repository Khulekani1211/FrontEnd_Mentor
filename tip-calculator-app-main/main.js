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
  //resetButton.disabled = false;
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
    //resetButton.disabled = false;
    console.log(percentage, typeof percentage);
  })
})

//Listening to the custom tip percentage
const customTip = document.getElementById('custom-tip');
customTip.value = '';
let realTip = 0;

customTip.addEventListener('input', (e) => {
  let tip = e.target.value;
  realTip = parseFloat(tip);
  //resetButton.disabled = false;
  console.log(realTip, typeof realTip);
})

//Listening to the number of people input element
const numOfPeople = document.getElementById('ppl-input');
numOfPeople.value = '';
let realPeople = 0;

numOfPeople.addEventListener('input', (e) => {
  let people = e.target.value;
  realPeople = parseInt(people);
  //resetButton.disabled = false;
  console.log(realPeople, typeof realPeople);
})

//Disabling the Reset button when the input elements are empty
if(billAmount.value == '' && numOfPeople.value == ''){
  resetButton.disabled = true;
}