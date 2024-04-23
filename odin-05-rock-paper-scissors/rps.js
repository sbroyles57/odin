const choices = ["rock", "paper", "scissors"];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  return choices[getRandomInteger(0,2)];
}

function getHumanChoice() {
  let tmp = prompt("Rock, paper, scissors. 1, 2, 3, Go:");
  let humanChoice = tmp.trim().toLowerCase();
  console.log(humanChoice);
  if(choices.includes(humanChoice)) {
    return humanChoice;
  }
  else {
    // entry error
    return tmp;
  }
}

// const playerSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

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
  else if ( playerSelection === computerSelection ) {
    return playerSelection + " = " + computerSelection + ". Tie.";
  }
  else {
    return "[ " + playerSelection + " ]" + " Entry error. Try again."
  }

}

function playGame() {
  const roundCount = 5;
  let humanScore = 0;
  let computerScore = 0;
  let tieCount = 0;

  while( roundCount > 1 ) {
    let result = playRound(getHumanChoice(), getComputerChoice());

    console.log( result );

    if( result.includes( "win" ) ) {

      ++humanScore;
    }
    else if ( result.includes( "loose" ) ) {
      ++computerScore;
    }
    else {
      ++tieCount;
    }   
    --roundCount;
    return "W-L-T: " + humanScore + "-" + computerScore + "-" + tieCount;
  }

  console.log( playGame(), `You ${ humanScore > computerScore ? ' won the game!' : ' did not win. :( '}` );
}

