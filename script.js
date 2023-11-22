
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getPlayerChoice() {
    let playerAnswer = prompt("Write rock, paper, or scissors to play: ");
    playerAnswer = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
    return playerAnswer;
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {

    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You won!";
    }
    if (
        (computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Paper" && playerChoice === "Rock") ||
        (computerChoice === "Scissors" && playerChoice === "Paper")
    ) {
        return "You lost";
    }
    if (playerChoice === computerChoice) {
        return "Draw";
    }
    if (playerChoice !== computerChoice) {
        return "Please choose correct choice";
    }
}

playRound(playerChoice, computerChoice);
console.log(playerChoice);
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));
