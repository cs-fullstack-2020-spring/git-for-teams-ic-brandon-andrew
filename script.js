//sanity
console.log('script.js loaded');

//Reference the elements needed
let aBlock = document.querySelector('.aBlock');
let bBlock = document.querySelector('.bBlock');
let dBlock = document.querySelector('.dBlock');
let changeABtn = document.querySelector('#changeABtn');
let changeBBtn = document.querySelector('#changeBBtn');
let changeDBtn = document.querySelector('#changeDBtn');

//Create a function to change the color of Box A
changeAColor = event => {
    aBlock.classList.toggle('boxAbtn');//NOTE: add the class for this later
}

//add the above function to the changeABtn as an event
changeABtn.addEventListener('click',changeAColor);

//Create a function to change the color of Box B
changeBColor = event => {
    bBlock.classList.toggle('boxBbtn');//NOTE: add the class for this later
}

//add the above function to the changeBBtn as an event
changeBBtn.addEventListener('click',changeBColor);

//Create a function to prompt the user for a word and change the text of Box D to it
changeDText = event => {
    let userInput = prompt('Enter a word:');
    dBlock.innerHTML = userInput;
}

//add the above function to the changeDBtn as an event
changeDBtn.addEventListener('click', changeDText);