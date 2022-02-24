const choices = ["Rock", "Paper", "Scissors"];


function computerSelection(){
    
    choose = Math.floor(Math.random() * 3);
    chosen = choices[choose];

    return chosen.toLowerCase();

}

function playerSelection(){
    playerChoice = prompt("Choose Rock, Paper, Scissors");

    return playerChoice.toLowerCase();
}

function gamePlay(){
    a = playerSelection();
    b = computerSelection();

function loseReport(player, computer){
    x = player;
    y = computer;

    console.log(`You lose because ${y} beats ${x}`);
}

function winReport(player, computer){
    x = player;
    y = computer;

    console.log(`You win because ${x} beats ${y}`);
}

    if (a === b){
        console.log("Draw");
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

function game(){
    for(let i = 0; i < 5; i++){
        gamePlay();
    }
}