let computer_choice;
let human_choice;
let computer_rounds = 0;
let human_rounds = 0;

let rounds = prompt("Enter the number of rounds you want to play");

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return Number(prompt("Enter a choice: 0)Rock 1)Scissors 2)Paper"));
}

function compareChoices(computer, human) {
  switch (computer) {
    case 0:
      console.log("Computer choice: Rock");
      break;
    case 1:
      console.log("Computer choice: Scissors");
      break;
    case 2:
      console.log("Computer choice: Paper");
      break;
    default:
      break;
  }

  switch (human) {
    case 0:
      console.log("Human choice: Rock");
      break;
    case 1:
      console.log("Human choice: Scissors");
      break;
    case 2:
      console.log("Human choice: Paper");
      break;
    default:
      break;
  }

  // 0 = Rock, 1 = Scissors, 2 = Paper
  if (computer === human) {
    console.log("It's a tie!");
  } else if ((computer === 0 && human === 1) || (computer === 1 && human === 2) || (computer === 2 && human === 0)) {
    console.log("Computer wins!");
    computer_rounds++;
  } else {
    console.log("You win!");
    human_rounds++;
  }
}

console.log("Number of rounds: ", rounds);

for (let i = 1; i <= rounds; i++) {
  console.log("Round number: " + i);

  computer_choice = getComputerChoice();
  human_choice = getHumanChoice();

  compareChoices(computer_choice, human_choice);
  
}

console.log("Human rounds: ", human_rounds);
console.log("Computer rounds: ", computer_rounds);

