const choices = ["rock", "paper", "scissors"];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  return choices[getRandomInteger(0,2)];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if ( playerSelection === "paper" && computerSelection === "rock") {
    return playerSelection + " covers " + computerSelection + ". You win!"
  }
  else if ( playerSelection === "rock" && computerSelection === "scissors") {
    return playerSelection + " crushes " + computerSelection + ". You win!"
  }
  else if ( playerSelection === "scissors" && computerSelection === "paper") {
    return playerSelection + " cut " + computerSelection + ". You win!"
  }
  else if ( computerSelection === "paper" && playerSelection === "rock") {
    return computerSelection + " covers " + playerSelection + ". You loose."
  }
  else if ( computerSelection === "rock" && playerSelection === "scissors") {
    return computerSelection + " crushes " + playerSelection + ". You loose."
  }
  else if ( computerSelection === "scissors" && playerSelection === "paper") {
    return computerSelection + " cut " + playerSelection + ". You loose."
  }
  else {
    return playerSelection + " = " + computerSelection + ". Tie game.";
  }

}

console.log( playRound(playerSelection, computerSelection))