'use strict'


const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

let playerScore = 0;
let compScore = 0;

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = '';
    let winner = '';
    if (playerScore < 5 && compScore < 5){
       if (playerChoice === computerChoice){
        result = 'Its a tie';
    } else {
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors') ? ('You win!', playerScore++) : ('You lose!', compScore++);
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? ('You win!', playerScore++) : ('You lose!', compScore++);
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? ('You win!', playerScore++) : ('You lose!', compScore++);
                break;
         }
    } 
    } else {
        console.log('Game over! The final score is:');
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${compScore}`);
    if (playerScore > compScore) {
        winner = 'Player wins!';
        console.log('Congratulations, you won!');
    } else if (compScore > playerScore) {
        winner = 'Computer wins!'
        console.log('Sorry, the computer won!');
    } else {
        winner = 'It was a tie';
        console.log('It was a tie!');
    }
    console.log(winner);
    return winner;
    }



    
    console.log(`Computer choose ${computerChoice}`);
    console.log(result);
    console.log(`Player:${playerScore} - Computer:${compScore}`);
    
};

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));