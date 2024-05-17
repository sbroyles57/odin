const choices = ["rock", "paper", "scissors"];
const roundCount = 5;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  return choices[getRandomInteger(0, 2)];
}

function getHumanChoice() {
  let tmp = prompt("Rock, paper, scissors. 1, 2, 3, Go:");
  let humanChoice = tmp.trim().toLowerCase();

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

  for ( let i = 0; i < roundCount; ++i ) {
    result = playRound(getHumanChoice(), getComputerChoice());

    console.log(result);

    if (result.includes("win")) {
      ++humanScore;
    } 
    
    if (result.includes("loose")) {
      ++computerScore;
    } 
    
    if (result.includes("Tie")) {
      ++tieCount;
    } 
    
    if (result.includes("error")) {
      console.log(result);
    }
  }

  console.log("W-L-T: " + humanScore + "-" + computerScore + "-" + tieCount);

  if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You did not win. :(");
  }
}

playGame();
