let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const drawGame = () => {
  msg.innerText = "Game Draw. Play Again";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, UserChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win!  your ${UserChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You loose ${compChoice} beats your ${UserChoice}`;
    msg.style.backgroundColor = "Red ";
  }
};
const playGame = (UserChoice) => {
  console.log("user choice", UserChoice);
  const compChoice = genCompChoice();
  console.log("comp choice", compChoice);
  if (UserChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;
    if (UserChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (UserChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, UserChoice, compChoice);
  }
};
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");

    playGame(UserChoice);
  });
});
