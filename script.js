// =======================
// Global Score Variables
// =======================
let userScore = 0;
let computerScore = 0;

// =======================
// Get Random Computer Choice
// =======================
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex)
  return choices[randomIndex];
}

// =======================
// Play Function
// =======================
function play(userChoice) {
  let count = 5;
  const resultText = document.getElementById("resultText");
  resultText.innerText = "Make your move";
  const timerEl = document.querySelector("#timer");
  timerEl.innerText = "Computer is selecting his choice " + count + "...";

  const interval = setInterval(() => {
    count--;
    if (count >= 0) {
      timerEl.innerText = "Computer is selecting his choice " + count + "...";
    }

    if (count < 0) {
      clearInterval(interval);

      const computerChoice = getComputerChoice();
      timerEl.innerText = "Computer chose: " + computerChoice;

      // Decide winner and update scores
      decideWinner(userChoice, computerChoice);
    }
  }, 1000);
}

// =======================
// Decide Winner & Update Score
// =======================
function decideWinner(user, computer) {
  const resultText = document.getElementById("resultText");
   

  if (user === computer) {
    resultText.innerText = `Draw! Both chose ${user}`;
    return;
  }

  if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    userScore++;
    resultText.innerText = `You Win! ${user} beats ${computer}`;
  } else {
    computerScore++;
    resultText.innerText = `You Lose! ${computer} beats ${user}`;
  }

  // Update Score UI
  updateScoreUI();
}

// =======================
// Update Score on Screen
// =======================
function updateScoreUI() {
  document.getElementById("userScore").innerText = `Your Score: ${userScore}`;
  document.getElementById("computerScore").innerText=`Computer Score: ${computerScore}`;
}

// =======================
// Button Functions
// =======================
function rock() {
  play("Rock");
}

function paper() {
  play("Paper");
}

function scissors() {
  play("Scissors");
}