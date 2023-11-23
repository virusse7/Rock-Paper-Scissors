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
            return "You lost";
        } else {
            return "You won";
        }
    }
    if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            return "You lost"; // scissors wins
        } else {
            return "You won";
        }
    }
    if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            return "You lost";
        } else {
            return "You won";
        }
    }
    if (playerChoice !== computerChoice) {
        return "Please choose correct choice";
    }
}

function game() {
    let playerChoice, computerChoice;
    let results = [];

    for (let rounds = 0; rounds < 5; rounds++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        if (playerScore < 5 || computerScore < 5) {
            const result = playRound(playerChoice, computerChoice);
            playRound(playerChoice, computerChoice);
            results.push(result);
            console.log(rounds);
            console.log(results);
        }
    }
}
game();
// console.log(playerScore + " : " + computerScore);

