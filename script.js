const maxInput = document.getElementById('max')
const minInput = document.getElementById('min')
const generateButton = document.getElementById('generate')
const div = document.getElementById('div')

generateButton.addEventListener('click', getRandomIntInclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(maxInput.value);
    max = Math.floor(minInput.value);
    if(maxInput.value.trim().length > 0 && minInput.value.trim().length > 0){
        div.innerHTML = `${Math.floor(Math.random() * (max - min + 1) + min)}`// The maximum is inclusive and the minimum is inclusive
    }; 
}