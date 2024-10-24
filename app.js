let userScore = 0;  // Tracks the user's score
let computerScore = 0;  // Tracks the computer's score

// Query selectors for UI elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

// Event listener for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);  // Trigger the game logic with the user's choice
    });
});

// Generates computer's random choice of rock, paper, or scissors
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);  // Ensures the random number is within the correct range
    return options[randomIndex];
};

// Handles a draw scenario
const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again.";  // Updates message for draw
    msg.style.backgroundColor = "rgb(8, 8, 56)";  // Styling for draw scenario
};

// Determines and displays the winner
const showWinner = (userWin, computerChoice, userChoice) => {
    if (userWin) {
        userScore++;  // Increment user score if user wins
        userScorePara.innerText = userScore;  // Update UI for user score
        console.log("You Win");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;  // Display win message
        msg.style.backgroundColor = "green";  // Green color for win
    } else {
        computerScore++;  // Increment computer score if user loses
        computerScorePara.innerText = computerScore;  // Update UI for computer score
        console.log("You lose");
        msg.innerText = `You lost! ${computerChoice} beats your ${userChoice}`;  // Display lose message
        msg.style.backgroundColor = "red";  // Red color for lose
    }
};

// Main function to run the game
const playGame = (userChoice) => {
    console.log("user-choice =", userChoice);
    const computerChoice = genCompChoice();  // Generate computer's choice
    console.log("computer-choice =", computerChoice);

    // Check if it's a draw
    if (userChoice === computerChoice) {
        drawGame();  // Handle draw scenario
    } else {
        let userWin;
        // Determine the outcome based on user choice
        switch (userChoice) {
            case "rock":
                userWin = (computerChoice === "scissors");  // Rock beats scissors
                break;
            case "paper":
                userWin = (computerChoice === "rock");  // Paper beats rock
                break;
            case "scissors":
                userWin = (computerChoice === "paper");  // Scissors beat paper
                break;
            default:
                console.error("Invalid user choice");
                return;
        }

        showWinner(userWin, computerChoice, userChoice);  // Show the result
    }
};

// Additional enhancement: Reset the game
const resetGame = () => {
    userScore = 0;  // Reset user score
    computerScore = 0;  // Reset computer score
    userScorePara.innerText = userScore;  // Update UI
    computerScorePara.innerText = computerScore;  // Update UI
    msg.innerText = "Choose your option!";  // Reset message
    msg.style.backgroundColor = "";  // Reset message color
};

// Add reset button event listener (if you have a reset button in your HTML)
document.querySelector("#reset").addEventListener("click", resetGame);
