function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const userInpute = prompt("Enter your choice (rock, paper, scissors): ");
    return userInpute;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanchoice, computerChoice) {
    const human = humanchoice.toLowerCase();
    const computer =computerChoice;

    if (human === computer) {
        console.log("It's a tie!");
    }else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    }
    else {
        console.log("You lose!");
        computerScore++;
    }

}

function playGame() {
    // Round 1
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    // Round 2
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    // Round 3
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    // Round 4
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    // Round 5
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer won the game!");
    } else {
        console.log("It's a draw overall!");
    }
}


playGame();