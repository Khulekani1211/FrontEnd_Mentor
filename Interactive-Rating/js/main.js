//Variables for DOM Seletion
const rateContainer = document.querySelector('.container')
const rateSubmitContainer = document.querySelector('.rate-submitted')
const ratings = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('button');
const score = document.getElementById('score')

//Make the submit button disabled by default
submitBtn.disabled = true

//Initialising the rating selected
let rateSelected = null

//Listening to the Rate selected
ratings.forEach(rate => {
  rate.addEventListener('click', () => {
    (document.querySelector('.selected')) ? document.querySelector('.selected').classList.remove('selected') : '';
    rate.classList.add('selected');

    submitBtn.disabled = false;
    rateSelected = rate.innerHTML.valueOf()
    console.log(rateSelected)

  })
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(rateSelected !== null){
    rateContainer.style.display = 'none'
    rateSubmitContainer.style.display = 'block'
    score.innerHTML = `You have selected ${rateSelected} of 5`
  }
  
})