
let playerScore = 0;
let computerScore = 0;

function playerSelectRock() {
    const rock = document.querySelector(".rockButton");
    rock.addEventListener("click", () => {
        playerChoice = "Rock";
        computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
    })
}

function playerSelectPaper() {
    const paper = document.querySelector(".paperButton");
    paper.addEventListener("click", () => {
        playerChoice = "Paper";
        computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
    })
}

function playerSelectScissors() {
    const scissors = document.querySelector(".scissorsButton");
    scissors.addEventListener("click", () => {
        playerChoice = "Scissors";
        computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
    })
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

let playerChoice;
let computerChoice;

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++;
            return "You lost";
        } else {
            playerScore++;
            return "You won";
        }
    }
    if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++;
            return "You lost";
        } else {
            playerScore++;
            return "You won";
        }
    }
    if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++;
            return "You lost";
        } else {
            playerScore++;
            return "You won";
        }
    }
    if (playerChoice !== computerChoice) {
        return "Please choose correct choice";
    }
}



function game() {
    let playerChoice, computerChoice;

    playRound(playerChoice, computerChoice);
    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("You choose: " + playerChoice);
    console.log("Computer choose: " + computerChoice);

    if (playerScore > computerScore) {
        console.log("You won");
    } else if (computerScore === playerScore) {
        console.log("Tie");
    } else {
        console.log("You lost");
    }
}
playerSelectRock();
playerSelectPaper();
playerSelectScissors();
// game();
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
// console.log(playerScore + " : " + computerScore);

