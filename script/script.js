const comp = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    const randomize = Math.floor(Math.random() *3);
    const choice = comp[randomize];
    return choice;
    }

function playGame(getComputerChoice, playerChoice){
    if (getComputerChoice === playerChoice) {
        return 'tie';
    } else if (playerChoice === 'rock' && getComputerChoice === 'scissors' || playerChoice === 'scissors' && getComputerChoice === 'paper' || playerChoice === 'paper' && getComputerChoice ==='rock') {
        return 'player';
    } else  {
        return 'computer';
    }
}

let win = playGame(getComputerChoice(), 'rock');

function gameResult() {
    if (win === 'tie'){
    console.log('Its tie. Nobody Wins'); 
} else if (win === 'player'){
    console.log('Player wins!');  
} else {
    console.log('Computer wins this time!')
}
}
console.log(win);
console.log(gameResult());

