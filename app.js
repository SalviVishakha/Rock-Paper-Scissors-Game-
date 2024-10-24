let userscore = 0;  // Tracks the user's score
let computerscore = 0;  // Tracks the computer's score

// Query selectors for UI elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

// Event listener for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);  // Trigger the game logic with the user's choice
    });
});

// Generates computer's random choice of rock, paper, or scissors
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * option.length);  // Ensures the random number is within the correct range
    return option[randidx];
};

// Handles a draw scenario
const drawgame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again.";  // Updates message for draw
    msg.style.backgroundColor = "rgb(8, 8, 56)";  // Styling for draw scenario
};

// Determines and displays the winner
const showwinner = (userwin, computerchoice, userchoice) => {
    if (userwin) {
        userscore++;  // Increment user score if user wins
        userscorepara.innerText = userscore;  // Update UI for user score
        console.log("You Win");
        msg.innerText = `You win! Your ${userchoice} beats ${computerchoice}`;  // Display win message
        msg.style.backgroundColor = "green";  // Green color for win
    } else {
        computerscore++;  // Increment computer score if user loses
        computerscorepara.innerText = computerscore;  // Update UI for computer score
        console.log("You lose");
        msg.innerText = `You lost! ${computerchoice} beats your ${userchoice}`;  // Display lose message
        msg.style.backgroundColor = "red";  // Red color for lose
    }
};

// Main function to run the game
const playgame = (userchoice) => {
    console.log("user-choice =", userchoice);
    const computerchoice = gencompchoice();  // Generate computer's choice
    console.log("computer-choice =", computerchoice);

    // Check if it's a draw
    if (userchoice === computerchoice) {
        drawgame();  // Handle draw scenario
    } else {
        let userwin;
        // Determine the outcome based on user choice
        switch (userchoice) {
            case "rock":
                userwin = (computerchoice === "scissors");  // Rock beats scissors
                break;
            case "paper":
                userwin = (computerchoice === "rock");  // Paper beats rock
                break;
            case "scissors":
                userwin = (computerchoice === "paper");  // Scissors beat paper
                break;
            default:
                console.error("Invalid user choice");
                return;
        }

        showwinner(userwin, computerchoice, userchoice);  // Show the result
    }
};
