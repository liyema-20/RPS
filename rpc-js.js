const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
let won = false;


function computerSelection(){
    
    choose = Math.floor(Math.random() * 3);
    chosen = choices[choose];

    return chosen.toLowerCase();

}


function gamePlay(playerSelection){
    a = playerSelection;
    b = computerSelection();

    


    function loseReport(player, computer){
        x = player;
        y = computer;
        computerScore = computerScore + 1;

        document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
        document.getElementById("results").innerHTML = `You lose because ${x} beats ${y}`

        if (computerScore === 5 && won === false) {
            document.getElementById('winner').innerHTML = "Winner: Computer";
            won === true;
            return true;
        }
    }

    function winReport(player, computer){
    let x = player;
    let y = computer;
    playerScore = playerScore + 1;

    document.getElementById("playerScore").innerHTML = `Player Score: ${playerScore}`;
    document.getElementById("results").innerHTML = `You win because ${x} beats ${y}`;

    if (playerScore === 5) {
        document.getElementById('winner').innerHTML = "Winner: You";
        won === true;
        return true;
    }


    }

        if (a === b){
            document.getElementById("results").innerHTML = "DRAW";
        }
        else if (a === "rock" && b === "paper"){
            loseReport(a,b);
        }
        else if (a === "rock" && b === "scissors"){
            winReport(a,b);
        }
        else if (a === "paper" && b === "rock"){
            winReport(a,b);
        }
        else if (a === "paper" && b === "scissors"){
            loseReport(a,b);
        }
        else if (a === "scissors" && b === "rock"){
            loseReport(a,b);
        }
        else if (a === "scissors" && b === "paper"){
            winReport(a,b);
        }
        else{

            console.log("Error invalid input");
        }
}


function rockPlayed(){
    gamePlay("rock");
}

function paperPlayed(){
    gamePlay("paper");
}

function scissorsPlayed(){
    gamePlay("scissors");
}


rockButton = document.querySelector("#rock");
paperButton = document.querySelector("#paper");
scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', rockPlayed);
paperButton.addEventListener('click', paperPlayed);
scissorsButton.addEventListener('click', scissorsPlayed);


