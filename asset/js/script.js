let player = 0;
let computer = 0;

// Get reference to the div element with class "score"
const scoreElement = document.querySelector(".score");

// Get references to all images
const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", () => {
        if (player === 5 || computer === 5) return; // If the game is already over, do nothing

        const result = startRound(image.id);
        // Round score new line
        const paragraph = document.createElement("p");
        paragraph.textContent = result;
        scoreElement.appendChild(paragraph);

        // Check if a player or computer has reached 5 points
        if (player === 5 || computer === 5) {
            // Make images unclickable
            images.forEach(img => {
                img.removeEventListener("click", clickHandler);
            });

            const gameResult = determineWinner();

            const finalResult = document.createElement("h1");
            finalResult.textContent = gameResult;            // Append the final result paragraph to the score element
            scoreElement.appendChild(finalResult);

            // Add a "Play Again" button
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again";
            playAgainButton.classList.add("play-again-button"); // Add class to the button

            playAgainButton.addEventListener("click", () => {
                // Remove all child elements from the score element
                scoreElement.innerHTML = "";
                // Reset scores
                player = 0;
                computer = 0;
                // Make images clickable again
                images.forEach(img => {
                    img.addEventListener("click", clickHandler);
                });
            });
            scoreElement.appendChild(playAgainButton);
        }
    });
});

function clickHandler() {
    // No action needed here, click event is handled in the main event listener
}

images.forEach(img => {
    img.addEventListener("click", clickHandler);
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
