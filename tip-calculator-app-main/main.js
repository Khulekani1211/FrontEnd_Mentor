//On load settings
document.addEventListener("DOMContentLoaded", function (){
  const resetButton = document.getElementById('reset-button');

  //Disable the reset button
  resetButton.disabled = true;
})

//Making the cliecked button active
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