

function getComputerChoice() {

  const computerChoices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  const choice = computerChoices[randomIndex];

    return choice;
};

  let opponentScore = 0;
  let playerScore = 0;
  let draws = 0;
  let score = '';


function playGame(playerSelection) {

  

  

    
    computerSelection = getComputerChoice();

    (playerScore !== 5 && opponentScore !== 5) ? score = playRound(computerSelection, playerSelection) 
                                               : playerScore > opponentScore ? score = "Congratulations! You've Won!"
                                                                             : score = "We're Sorry! You Lost!"
    

    console.log(score);
    
  

          

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