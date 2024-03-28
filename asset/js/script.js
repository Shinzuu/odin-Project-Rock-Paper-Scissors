function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]; // lowercase choices
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playerSelection() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function startRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection();
    if (computerChoice === playerChoice) {
        return "It's a tie! Both picked " + computerChoice.toUpperCase(); // toUpperCase for consistency
    } else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
    ) {
        player++;
        return "You win! " + playerChoice.toUpperCase() + " beats " + computerChoice.toUpperCase();
    } else {
        computer++;
        return "You lose! " + computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
    }
}

function playGame() {
    let round = 1;
    while (round <= 5) {
        console.log("Round " + round+" of 5");
        console.log(startRound());
        round++;
    }
    console.log("Score is :\n Player: " + player + "\n Computer: " + computer + "\n Ties: " + (5 - player - computer));
    if (player > computer) {
        console.log("You win the game!");
    } else if (player === computer) {
        console.log("It's a tie!");
    } else {
        console.log("You lose the game!");
    }

    
    console.log("x~~~Game over!~~~x");
}

let player = 0;
let computer = 0;
playGame();
