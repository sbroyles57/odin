const choices = ["rock", "paper", "scissors"];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  return choices[getRandomInteger(0, 2)];
}

function getHumanChoice() {
  let tmp = prompt("Rock, paper, scissors. 1, 2, 3, Go:");
  let humanChoice = tmp.trim().toLowerCase();
  // console.log(humanChoice);
  if (choices.includes(humanChoice)) {
    return humanChoice;
  } else {
    // entry error
    return tmp;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return playerSelection + " covers " + computerSelection + ". You win!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerSelection + " crushes " + computerSelection + ". You win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerSelection + " cut " + computerSelection + ". You win!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return computerSelection + " covers " + playerSelection + ". You loose.";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return computerSelection + " crushes " + playerSelection + ". You loose.";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return computerSelection + " cut " + playerSelection + ". You loose.";
  } else if (playerSelection === computerSelection) {
    return playerSelection + " = " + computerSelection + ". Tie.";
  } else {
    return "[ " + playerSelection + " ]" + " Entry error. Try again.";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieCount = 0;

  for (let roundCount = 0; roundCount < 5; roundCount++) {
    result = playRound(getHumanChoice(), getComputerChoice());

    console.log(result);

    if (result.includes("win")) {
      ++humanScore;
    } else if (result.includes("loose")) {
      ++computerScore;
    } else if (result.includes("error")) {
      //skip round
    } else {
      ++tieCount;
    }
    // console.log(roundCount);
  }
  console.log("W-L-T: " + humanScore + "-" + computerScore + "-" + tieCount);

  if (humanScore > computerScore) {
    return "You win!";
  } else {
    return "You did not win. :(";
  }
}

console.log(playGame());
