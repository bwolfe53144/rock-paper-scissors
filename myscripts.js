const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomString = myArray[Math.floor(Math.random() * 3)];
    console.log(randomString);
    return randomString;
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors", '');
    choice = choice.toLowerCase();
    if (choice !== 'paper' && choice !=='rock' && choice !== 'scissors') {
        alert(`You didn't pick rock paper or scissors, you gave the computer a free win!`);
    } else {
        console.log(choice);
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert(`Computer also chose ${computerChoice}, it's a tie.`);
        } else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
            || (humanChoice === 'paper' && computerChoice === 'rock') 
            || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore = ++humanScore
            alert(`Computer chose ${computerChoice}, and ${humanChoice} beats ${computerChoice} so you win!!!`);
        } else {
            alert(`Computer chose ${computerChoice}, and ${computerChoice} beats ${humanChoice} so you lose!`);
            computerScore = ++computerScore
        }
        rounds = rounds++
    }

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    alert(`Score- You: ${humanScore}  Computer: ${computerScore}`);
}

for (i = 0; i < 5; ++i) {
    playGame();
}






    


