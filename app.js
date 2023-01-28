// CPU randomly selects rock, paper or scissors
const getComputerChoice = function(){
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? "Paper" : rand === 1 ? "Rock" : rand === 2 ? "Scissors" : "invalid";
}

// one round - function takes the player choice and cpu choice than compares and gives a point to the victor or no points to loser or draw
const playRound = function (playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let computerScore = 0;
    let playerScore = 0;
    if (playerSelection === computerSelection){
        result = [`Draw! Your ${playerSelection} equals CPU's ${computerSelection}`, playerScore, computerScore]
        return result
    }
    if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`, playerScore, computerScore ]
        return result
    }
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`, playerScore, computerScore] 
        return result
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`, playerScore, computerScore] 
        return result
    }
    playerScore+=1
    result = [`Win! Your ${playerSelection} wins to CPU's ${computerSelection}`, playerScore, computerScore] 
    return result
}

// a game - takes number of rounds to play, prompts the player to select each round, increments the scores and returns the final result of the game according to scores
const game = function(numberRounds){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<numberRounds; i++ ){
        const player = prompt("Rock, Paper or Scissors?:");
        const computer = getComputerChoice();
        const result = playRound(player, computer);
        alert(result[0])
        playerScore += result[1];
        computerScore += result[2];
    }
    return playerScore > computerScore ? `You win the Game: player-${playerScore} VS CPU-${computerScore}` : playerScore < computerScore ? `You lose the Game: player-${playerScore} VS CPU-${computerScore}` : playerScore < computerScore ? `You lose the Game: player: ${playerScore} to CPU: ${computerScore}` : 'The Game ends in a Draw!'
}

console.log(game(5));

