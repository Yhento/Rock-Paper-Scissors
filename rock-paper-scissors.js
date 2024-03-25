

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
  const results = document.querySelector('.results span');


function playGame(playerSelection) {

  computerSelection = getComputerChoice();

    if (playerScore !== 5 && opponentScore !== 5){
      score = playRound(computerSelection, playerSelection);
      if (playerScore == 5){
        score = `Congratulations! You've Won The Game! Final Score is You: ${playerScore} Opponent: ${opponentScore}`;
     }
     else if (opponentScore == 5) {
       score = `Sorry! You Lost! Better Luck Next Time! Final Score is You: ${playerScore} Opponent: ${opponentScore}`;
     }
    }
    
    results.innerHTML = `Result: ${score}`;
   

    
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

let game_container = document.querySelector('.game-container');

game_container.addEventListener('click', (e) => {
  let target = e.target;

  switch(target.textContent) {

      case 'Rock':
        playGame('Rock');
        break;
      
      case 'Scissors':
        playGame('Scissors');
        break;
      
      case 'Paper':
        playGame('Paper')
        break;
  };





});

