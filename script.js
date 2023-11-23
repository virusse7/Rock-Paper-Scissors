let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Write rock, paper, or scissors to play: ");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

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

    for (let rounds = 0; rounds < 5; rounds++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log("You choose: " + playerChoice);
        console.log("Computer choose: " + computerChoice);
    }
    if (playerScore > computerScore) {
        console.log("You won");
    } else if (computerScore === playerScore) {
        console.log("Tie");
    } else {
        console.log("You lost");
    }
}
game();
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
// console.log(playerScore + " : " + computerScore);

