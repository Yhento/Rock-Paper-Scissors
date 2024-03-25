

function getComputerChoice() {

  const computerChoices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  const choice = computerChoices[randomIndex];

    return choice;
};




function playGame() {
  // Test
  let opponentScore = 0;
  let playerScore = 0;
  let draws = 0;

  for ( let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {

    
    computerSelection = getComputerChoice();

    let playerSelection = '';
    let isRockPaperScissors = false;

    while (!isRockPaperScissors) {

      playerSelection = prompt("Please choose Rock Paper or Scissors")

      playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLocaleLowerCase();

      console.log(playerSelection);
      
  
      if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {

        isRockPaperScissors = true;

      }

    };
    
    let score = playRound(computerSelection, playerSelection);

    console.log(score);
    
  };

  playerScore > opponentScore ? console.log(`Victory is yours! You won ${playerScore} out of 5 games with ${draws} draws!`) :
  playerScore < opponentScore ? console.log(`A Miserable Defeat! Your opponent won ${opponentScore} out of 5 games with ${draws} draws!`)
                              : console.log (`The result is a tie!`);

  function playRound(computerChoice, playerChoice){

    switch (playerChoice) {


      case 'Rock':

        if (computerChoice == 'Rock') {
          draws += 1;
          return `A Draw! Rock cancels Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`;
        }

        else if (computerChoice == 'Paper') {
          opponentScore += 1;
          return `You lose Paper beats Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`;
        }

        else if (computerChoice == 'Scissors') {
          playerScore += 1;
          return `You Win! Rock beats Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;      


      case 'Paper':

        if (computerChoice == 'Rock') {
          playerScore += 1;
          return `You Win! Paper beats Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        else if (computerChoice == 'Paper'){
          draws += 1;
          return `A Draw! Paper cancels Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        else if (computerChoice == 'Scissors'){
          opponentScore += 1;
          return `You lose! Scissors beats Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;

      case 'Scissors':

        if (computerChoice == 'Rock') {
          opponentScore += 1;
          return `You lose! Rock beats Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        else if (computerChoice == 'Paper'){
          playerScore += 1;
          return `You Win! Scissors beats Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        else if (computerChoice == 'Scissors') {
          draws += 1;
          return `A Draw. Scissors cancels Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;
    };

  };
};
playGame();