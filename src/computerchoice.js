const choices = ["rock", "paper", "scissors"];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const computerChoice = () => {
  let choiceIndex = getRandomInt(0, 2);
  return choices[choiceIndex];
};

export const compareChoices = (playerChoice, compChoice) => {
  console.log(playerChoice);
  if (playerChoice === compChoice) return "IT'S A DRAW";

  if (playerChoice === "scissors") {
    if (compChoice === "paper") return "YOU WIN";
    else if (compChoice === "rock") return "YOU LOSE";
  }

  if (playerChoice === "paper") {
    if (compChoice === "rock") return "YOU WIN";
    else if (compChoice === "scissors") return "YOU LOSE";
  }

  if (playerChoice === "rock") {
    if (compChoice === "scissors") return "YOU WIN";
    else if (compChoice === "paper") return "YOU LOSE";
  }
};
