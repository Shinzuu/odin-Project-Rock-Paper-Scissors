let player = 0;
let computer = 0;

// Get references to all buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = startRound(button.id);
        console.log(result);

        // Check if a player or computer has reached 5 points
        if (player === 5 || computer === 5) {
            const gameResult = determineWinner();
            console.log(gameResult);

            // Reset scores
            player = 0;
            computer = 0;
        }
    });
});

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function startRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (computerChoice === playerChoice) {
        return "It's a tie! Both picked " + computerChoice.toUpperCase();
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

function determineWinner() {
    if (player > computer) {
        return "You win the game! " + player + " - " + computer;
    } else if (player < computer) {
        return "You lose the game! " + player + " - " + computer;
    } else {
        return "It's a tie! " + player + " - " + computer;
    }
}
