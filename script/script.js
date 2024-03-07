'use strict'

const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => playRound('rock'));

paperBtn.addEventListener('click', () => playRound('paper'));

scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Generate a random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a single round of the game
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  if (result === 'player') {
    playerScore++;
  } else if (result === 'computer') {
    computerScore++;
  }
  console.log('Computer choosen ' + computerChoice,',', result);
  

}

// Determine the winner of a single round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
return 'It is tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'Player wins!';
  } else {
    return 'Computer wins!';
  }
}