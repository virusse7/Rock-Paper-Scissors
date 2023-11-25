
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerChoice;
let computerChoice;

function playerSelectRock() {
    const rock = document.querySelector(".rockButton");
    rock.addEventListener("click", () => {
        playerChoice = "Rock";
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
}

function playerSelectPaper() {
    const paper = document.querySelector(".paperButton");
    paper.addEventListener("click", () => {
        playerChoice = "Paper";
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
}

function playerSelectScissors() {
    const scissors = document.querySelector(".scissorsButton");
    scissors.addEventListener("click", () => {
        playerChoice = "Scissors";
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
}

function displayResult(result) {
    const container = document.querySelector(".result");
    const resultText = `Round ${rounds}: ${result}`;
    container.textContent = resultText;
    console.log(resultText);
}

function showScore(playerScore, computerScore) {
    scoreContainer = document.querySelector(".score");
    scoreContainer.textContent = (playerScore + " : " + computerScore);
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    rounds++;
    if (playerChoice === computerChoice) {
        displayResult("Draw");
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;
        displayResult("You won!");
    } else {
        computerScore++;
        displayResult("You lost");
    }
    showScore(playerScore, computerScore);
}

function endGame() {
    if (playerScore === 5) {
        console.log("You won a game");
    } else if (computerScore === 5) {
        console.log("You lost a game");
    }
}

function game() {
    playerSelectRock();
    playerSelectPaper();
    playerSelectScissors();
    showScore(playerScore, computerScore);
}

game();