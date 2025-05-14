let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const buttons = document.querySelectorAll("button");
const playAgainButton = document.getElementById("playAgain");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
      playGame(button.id);
    }
  });
});

function playRound(humanChoice, computerChoice) {
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultText = "You win this round!";
  } else {
    computerScore++;
    resultText = "You lose this round!";
  }

  roundCount++;
  updateUI(humanChoice, computerChoice, resultText);

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

function updateUI(humanChoice, computerChoice, resultText) {
  document.getElementById("humanScore").innerText = humanScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("roundCount").innerText = roundCount;
  document.getElementById("result").innerHTML = 
    `You chose: <strong>${humanChoice}</strong><br>Computer chose: <strong>${computerChoice}</strong><br><strong>${resultText}</strong>`;
}

function endGame() {
  let finalMessage = humanScore > computerScore 
    ? "🎉 Congratulations! You win the game!" 
    : "💻 Computer wins the game!";
  
  document.getElementById("result").innerHTML += `<br><strong>${finalMessage}</strong>`;
  playAgainButton.style.display = "block";
}

playAgainButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  document.getElementById("humanScore").innerText = humanScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("roundCount").innerText = roundCount;
  document.getElementById("result").innerText = "";
  playAgainButton.style.display = "none";
});