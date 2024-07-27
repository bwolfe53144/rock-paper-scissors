/* Reference to the html file to show scoring */
const myScore = document.getElementById("myScore");
const compScore = document.getElementById("compScore");

/* Define human and computer score variables, and put them into the page starting at 0 */
let humanScore = 0;
let computerScore = 0;
myScore.innerText = humanScore;
compScore.innerText = computerScore;

/* Use querySelector to edit CSS styles to the buttons */
const rock = document.querySelector("#rock");
rock.style.cssText = "border-radius: 30px; border: 2px solid gray; color: black; background-color: white; padding: 30px; background-color:gray; margin: 40px; font-size: 30px;";

const paper= document.querySelector("#paper");
paper.style.cssText = "height: 160px; width: 100px; border: 2px solid blue; color: black; background: repeating-linear-gradient(to bottom, white 0px, white 20px, blue 20px, blue 21px); margin: 40px; font-size: 30px;";

const scissors = document.querySelector("#scissors");
scissors.style.cssText = "color: black; padding: 30px; background-image: linear-gradient(to top left, green 50%, white 50%); margin: 40px; font-size: 30px;";

/* Format the page and change some CSS styles using querySelectors */
const titlePage = document.querySelector("#titlePage");
titlePage.style.cssText = "text-align: center; font-weight: bold; font-size: 60px";

const userChoice = document.querySelector("#userChoice");
userChoice.style.cssText = "text-align: center";

const scoreboard = document.querySelector(".scoreboard");
scoreboard.style.cssText = "display: grid; grid-template-columns: 1fr 1fr; text-align: center; margin-top: 100px";

const scoreboardName = document.querySelectorAll(".scoreboardName");
scoreboardName.forEach((e) => {
    e.style.cssText = "padding: 10px; text-align: center; font-weight: bold; font-size:30px";
});

const scoreboardScore = document.querySelectorAll(".scoreboardScore");
scoreboardScore.forEach((e) => {
    e.style.cssText = "padding: 10px; text-align: center; font-size: 2em";
});

const roundText = document.getElementById("roundText");
roundText.style.cssText = "font-weight: bold; font-size: 25px; text-align: center";

/* Set up variables for the computer and added a function that randomly picks one of the array items */
const myArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomString = myArray[Math.floor(Math.random() * 3)];
    return randomString;
}

/* add an event listener that makes a choice based on which button you click */
var theChoice = document.querySelector("#userChoice");
theChoice.addEventListener("click", makeChoice, false);

/*function to play one round of rock, paper, scissors */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundText.innerText = `Computer also chose ${computerChoice}, it's a tie.`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
        || (humanChoice === 'paper' && computerChoice === 'rock') 
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore = ++humanScore
        roundText.innerText = `Computer chose ${computerChoice}, and ${humanChoice} beats ${computerChoice} so you win!!!`;
    } else {
        roundText.innerText = `Computer chose ${computerChoice}, and ${computerChoice} beats ${humanChoice} so you lose!`;
        computerScore = ++computerScore
        
    }
    myScore.innerText = humanScore;
    compScore.innerText = computerScore;
/* Stops the game by disabling buttons when a player reaches 5 */
    if (humanScore >= 5 || computerScore >= 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        if (humanScore > computerScore) {
            roundText.innerText = `You win ${humanScore} to ${computerScore}!`;
        } else {
            roundText.innerText = `The computer wins ${computerScore}-${humanScore}.`;
        }
    }
}

/* Initiate a game of rock paper scissors when the user clicks a button, then updates the score */
function makeChoice(e) {
    if (e.target !== e.currentTarget) {
    var humanSelection = e.target.id;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    e.stopPropagation();
}
