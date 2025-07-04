function getComputerChoice() {
    let desition = Math.random();

    if (desition < 0.3) {
        return "rock";
    }
    else if (desition >= 0.3 && desition < 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("DRAW");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer WINS");
            computerScore++;
        }
        else {
            console.log("Human WINS");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Human WINS");
            humanScore++;
        }
        else {
            console.log("Computer WINS");
            computerScore++;
        }
    }
    else {
        if (computerChoice === "rock"){
            console.log("Computer WINS");
            computerScore++;
        }
        else {
            console.log("Human WINS");
            humanScore++;
        }
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Human WINS the game");
    }
    else if (humanScore < computerScore) {
        console.log("Computer WINS the game");
    }
    else {
        console.log("No one wins");
    }
}

playGame();