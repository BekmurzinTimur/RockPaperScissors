let pScore = 0;
let cScore = 0;
let winner;
let scoreText = document.querySelector('p');
function computerPlay () {
    let value = Math.floor(Math.random() * 3);
    console.log(value);
    switch (value){
      case 0:
      return "rock";
      case 1:
      return "paper";
      case 2:
      return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
    {
        return `Draw. ${playerSelection} vs ${computerSelection} \n Score is: ${pScore} : ${cScore}`; 
    }
    if (playerSelection + '-' + computerSelection == "rock-paper" || 
        playerSelection + '-' + computerSelection == "paper-scissors" || 
        playerSelection + '-' + computerSelection == "scissors-rock") 
    {
        cScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection} \n Score is: ${pScore} : ${cScore}`;
    }

    if (playerSelection + '-' + computerSelection == `rock-scissors` || 
        playerSelection + '-' + computerSelection == `scissors-paper` || 
        playerSelection + '-' + computerSelection == `paper-rock`) 
    {
        pScore++;
        return `You Won! ${playerSelection} beats ${computerSelection} \n Score is: ${pScore} : ${cScore}`;
    }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => 
{
    onClickEvent('rock');
});

paper.addEventListener('click', () => 
{
    onClickEvent('paper');
});

scissors.addEventListener('click', () => 
{
    onClickEvent('scissors');
});

function onClickEvent (playerChoice) {
    if (winner == null) {
        playRound(playerChoice, computerPlay ())
        scoreText.textContent = `Current score ${pScore}:${cScore}`;
        if (pScore == 5) 
        {
            winner = "Player"; scoreText.textContent = `You Won. Score ${pScore}:${cScore}`;
        }
        if (cScore == 5) 
        {
            winner = "Computer"; scoreText.textContent = `You Lost Score ${pScore}:${cScore}`;
        }
    }
}

