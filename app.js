// Selecting all 3 buttons
const playerSelect = document.querySelectorAll('button');
// Selecting the Game Score Board
const board = document.querySelector('#result');
// Creating the contents of Score board
const message = document.createElement('p');
const player = document.createElement('p');
const cpu = document.createElement('p');
const final = document.createElement('p');

// Main Game function
const game = function(rounds){
    let playerScore = 0;
    let computerScore = 0;
    // For each button click: - Run playRound() to get result array than reflect it's contents in the DOM
    playerSelect.forEach(sel=>{
        sel.addEventListener('click', function(){
            // get result[message, playerScore, cpuScore]
            const result = playRound(this.innerText);
            playerScore += result[1]; // increment score 
            computerScore += result[2]; // increment score
            // text contents of score board
            message.textContent = `Round: ${result[0]}`;
            player.textContent = `Player: ${playerScore}`;
            cpu.textContent = `CPU: ${computerScore}`;
            // append element to the board object
            board.append(message);
            board.append(player);
            board.append(cpu);
            // Append final result if the game reaches the end, and reset scores.
            let finalResult = playerScore > computerScore ? `You win the Game: player-${playerScore} VS CPU-${computerScore}` : playerScore < computerScore ? `You lose the Game: player-${playerScore} VS CPU-${computerScore}` : playerScore < computerScore ? `You lose the Game: player: ${playerScore} to CPU: ${computerScore}` : 'The Game ends in a Draw!'
            if (playerScore == rounds || computerScore == rounds){
                final.textContent = finalResult;
                board.appendChild(final);
                playerScore = 0;
                computerScore = 0;
            }else {
                final.remove(); // keep final removed if either scores != rounds
            };
        })
    });
 
}


// CPU randomly selects rock, paper or scissors
const getComputerChoice = function(){
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? "Paper" 
        : rand === 1 ? "Rock" 
        : rand === 2 ? "Scissors" 
        : "invalid";
}

// one round - function takes the player choice and cpu choice than compares and gives a point to the victor or no points to loser or draw
const playRound = function (playerSelection){
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();
    let computerScore = 0;
    let playerScore = 0;
    if (playerSelection === computerSelection){
        result = [`Draw! Your ${playerSelection} equals CPU's ${computerSelection}`,
            playerScore, 
            computerScore
        ];
        return result;
    }
    if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`, 
            playerScore, 
            computerScore 
        ];
        return result;
    }
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`, 
            playerScore, 
            computerScore
        ];
        return result;
    }
    if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        computerScore+=1
        result = [`Lost! Your ${playerSelection} loses to CPU's ${computerSelection}`,
            playerScore, 
            computerScore
            ]; 
        return result;
    }
    playerScore+=1
    result = [`Win! Your ${playerSelection} wins to CPU's ${computerSelection}`, 
        playerScore, 
        computerScore
    ]; 
    return result;
}

game(5);



