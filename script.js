window.addEventListener("load", Start); 

function start(){
console.log("start");
playerChoise();
}
function playerChoise(){
ramdomComputerChoice();
console.log("player choice");
}
function ramdomComputerChoice(){
    console.log("ramdom computer choise");
    showAnimation();
}
function showAnimation(){
    console.log('show animation');
    determineWinner();
}
function determineWinner(){
    console.log('determine the Winner');
    showWinner();

}
function playerRock(){
console.log('player choice rock');
}
function playerPaper(){
    console.log('player choice paper');

}
function playerScisser(){
    console.log('player choice scisser');
    

}
function showWinner(){
    console.log('you win')
    showLose();

}
function showLose(){
    console.log('you lose')
    showTie();
}

function showTide(){
    console.log('Tie');
}
function restartGame(){
    start();
}