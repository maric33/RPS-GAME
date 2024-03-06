const comp = ['rock', 'paper', 'scissors'];
const player = 'paper';


function getComputerChoice(){
    const randomize = Math.floor(Math.random() *2);
    const choice = comp[randomize];
    console.log(randomize);
    console.log(choice);
    
}

getComputerChoice();