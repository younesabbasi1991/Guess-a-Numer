'use strict';

/* 
all varaiable you need: 
- reset botton  
- qurect number input 
- guess num input 
- geuss num botton 
- message 
- score 
- high score input 

*/

// define all variabels
let randomNum;
const resetBtn = document.querySelector('#reset-btn');
const correctNum = document.querySelector('#right-number-input');
const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('#message');
const score = document.querySelector('#score');
const highScore = document.querySelector('#high-score');

const background = document.querySelector('.container-fluid');

highScore.textContent = 0;
score.textContent = 20;
message.textContent = 'Start Guessing';

randomNum = Math.floor(Math.random() * (20 - 1) + 1);

checkBtn.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('#guess-num-input').value);

  if (!guessInput) {
    message.textContent = 'Please Enter a number';
  } else if (guessInput >= 20 || guessInput < 1) {
    message.textContent = 'Please Enter a number between 1 - 20';
  } else if (guessInput > randomNum) {
    message.textContent = 'Too High! ⬆️';
    score.textContent--;
  } else if (guessInput < randomNum) {
    message.textContent = 'Too Low! ⬇️';
    score.textContent--;
  } else if (guessInput === randomNum) {
    message.textContent = 'Youn won 🎇';
    background.classList.add('won');
    if (Number(highScore.textContent) < Number(score.textContent)) {
      highScore.textContent = score.textContent;
    }
  }
});

resetBtn.addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * (20 - 1) + 1);
  score.textContent = 20;
  message.textContent = 'Start Guessing';
  background.classList.remove('won');
  document.querySelector('#guess-num-input').value = '';
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  console.log(e);
});
