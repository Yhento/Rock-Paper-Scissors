// CREATE a Function called getComputerChoice that returns Rock, Paper, or Scissors as a string.

function getComputerChoice() {

    // CREATE an array called computerChoices and add Rock Paper and Scissors to it. 

    const computerChoices = ['Rock', 'Paper', 'Scissors'];

    // Get Random Choice from the computerChoices and assign it to a variable called choice.

    const randomIndex = Math.floor(Math.random() * computerChoices.length);

    const choice = computerChoices[randomIndex];

    return choice;

// END of getComputerChoice Function
};

// Create a variable called opponentScore and set it to 0;
let opponentScore = 0;

// Create a variable called playerScore and set it to 0;
let playerScore = 0;

let draws = 0;

// CREATE a Function called playGame that calls playRound five times to play five rounds.
function playGame() {

  // LOOP until roundsPlayed equals 5.

  for ( let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {

    // CALL the Function (getComputerChoice) to select Rock, Paper, or Scissors at random and assign it to a variable called computerSelection.

    computerSelection = getComputerChoice();

    let playerSelection = '';
    
    // LOOP until userInput is Rock Paper or Scissors.

    let isRockPaperScissors = false;
    while (!isRockPaperScissors) {

      // GET userInput and Convert it to lowercase before capitalizing the first Letter.

      playerSelection = prompt("Please choose Rock Paper or Scissors")

      playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLocaleLowerCase();

      console.log(playerSelection);
      
  

      // IF userInput is either Rock, Paper, Or Scissors, proceed to exit the loop. Otherwise get userInputAgain.
      if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {

        isRockPaperScissors = true;

      }

    // ENDLOOP
    };

    // Play the Round and assign the results to a variable score.
    
    let score = playRound(computerSelection, playerSelection);

    // Print results to the console.

    console.log(score);
    
  // ENDLOOP
  };

  playerScore > opponentScore ? console.log(`Victory is yours! You won ${playerScore} out of 5 games with ${draws} draws!`) :
  playerScore < opponentScore ? console.log(`A Miserable Defeat! Your opponent won ${opponentScore} out of 5 games with ${draws} draws!`)
                              : console.log (`The result is a tie!`);
    
  
  
  // CREATE a Function called playRound that takes the variables playerSelection and computerSelection and outputs a Win, Draw, or Loss
  function playRound(computerChoice, playerChoice){

    switch (playerChoice) {

      // IF playerSelection is "Rock"

      case 'Rock':

        // IF opponentSelection is Rock return "A Draw! Rock cancels Rock."

        if (computerChoice == 'Rock') {
          draws += 1;
          return `A Draw! Rock cancels Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`;
        }

        // IF opponentSelection is Paper return "You lose! Paper beats Rock. Add 1 to Opponent Score"

        else if (computerChoice == 'Paper') {
          opponentScore += 1;
          return `You lose Paper beats Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`;
        }
        // IF opponentSelection is Scissors return "You win! Rock beats Scissors! Add 1 to My Score"

        else if (computerChoice == 'Scissors') {
          playerScore += 1;
          return `You Win! Rock beats Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;      

      // IF playerSelection is "Paper"

      case 'Paper':

        // IF opponentSelection is Rock return "You Win! Paper beats Rock! Add 1 to My Score"

        if (computerChoice == 'Rock') {
          playerScore += 1;
          return `You Win! Paper beats Rock. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        // IF opponentSelection is Paper return "A Draw! Paper cancels Paper."

        else if (computerChoice == 'Paper'){
          draws += 1;
          return `A Draw! Paper cancels Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        // If opponentSelection is Scissors return "You lose! Scissors beats Paper Add 1 to Opponents Score"

        else if (computerChoice == 'Scissors'){
          opponentScore += 1;
          return `You lose! Scissors beats Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;

      // IF playerSelection is "Scissors"

      case 'Scissors':

        // IF opponentSelection is Rock return "You lose! Rock beats Scissors! Add 1 to Opponents Score"

        if (computerChoice == 'Rock') {
          opponentScore += 1;
          return `You lose! Rock beats Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        // IF opponentSelection is Paper return "You win! Scissors beats Paper! Add 1 to My Score"

        else if (computerChoice == 'Paper'){
          playerScore += 1;
          return `You Win! Scissors beats Paper. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }

        // IF opponentSelection is Scissors return "A Draw. Scissors cancels Scissors"

        else if (computerChoice == 'Scissors') {
          draws += 1;
          return `A Draw. Scissors cancels Scissors. Your Score: ${playerScore} Opponent Score: ${opponentScore}`
        }
        break;
    };
    // END OF playRound FUNCTION
  };
};
// END of playGame Function
playGame();