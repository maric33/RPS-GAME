'use strict'

const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

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

}

// Determine the winner of a single round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
        console.log('tie');
return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
  console.log('player wins!');
    return 'player';
  } else {
  console.log('computer wins!');
    return 'computer';
  }
}