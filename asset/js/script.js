let player = 0;
let computer = 0;

// Get reference to the div element with class "score"
const scoreElement = document.querySelector(".score");

// Get references to all buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const result = startRound(button.id);
        //round score new line
        const paragraph = document.createElement("p");
        paragraph.textContent = result;
        scoreElement.appendChild(paragraph);

        // Check if a player or computer has reached 5 points
        if (player === 5 || computer === 5) {
            const gameResult = determineWinner();

            const finalResult = document.createElement("h1");
            finalResult.textContent = gameResult;            // Append the final result paragraph to the score element
            scoreElement.appendChild(finalResult);

            // Reset scores
            player = 0;
            computer = 0;
            // Make buttons unclickable
            buttons.forEach(button => {
                button.disabled = true;
            })
            // Add a "Play Again" button
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again";

            playAgainButton.addEventListener("click", () => {
                // Remove all child elements from the score element
                scoreElement.innerHTML = "";
                // Make buttons clickable
                buttons.forEach(button => {
                    button.disabled = false;
                })
            });
            scoreElement.appendChild(playAgainButton);
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
