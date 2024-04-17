const loader = document.querySelector(".loader-container");
const game = document.querySelector(".main-container");
const classic = document.querySelector(".classic");
const sheldon = document.querySelector(".sheldon");
const start = document.querySelector(".start");
const play = document.querySelector(".playing");
const startGame = document.querySelector(".start-game");
const logo = document.querySelector(".main-logo");
const blocker = document.querySelector(".blocker");

const resultsCont = document.querySelector(".results");
const happy = document.querySelector(".happy");
const sad = document.querySelector(".sad");
const youWin = document.querySelector(".you-win");
const youLose = document.querySelector(".you-lose");

setTimeout(()=>{
    start.addEventListener("click", ()=>{
        startGame.classList.add("hidden")
        logo.classList.add("hidden");
        play.classList.remove("hidden");
    })
    classic.addEventListener("click", ()=>{
        sheldon.classList.toggle("hidden");
        start.classList.toggle("hidden");
    });
    sheldon.addEventListener("click", ()=>{
        classic.classList.toggle("hidden");
        start.classList.toggle("hidden");
    });
    loader.classList.add("hidden");
    game.classList.remove("hidden")

},3500)

//OPTIONS

let player1="";
let player2="";

const rock1 = document.querySelector(".rock1");
const paper1 = document.querySelector(".paper1");
const scissors1 = document.querySelector(".scissors1");
const lizard1 = document.querySelector(".lizard1");
const spock1 = document.querySelector(".spock1");
rock1.addEventListener("click", ()=>{
    paper1.classList.add("hidden");
    scissors1.classList.add("hidden");
    player1 ="rock";
    blocker.classList.remove("hidden");

    battle();
});
paper1.addEventListener("click", ()=>{
    rock1.classList.add("hidden");
    scissors1.classList.add("hidden");
    player1 ="paper";
    blocker.classList.remove("hidden");

    battle();
});
scissors1.addEventListener("click", ()=>{
    paper1.classList.add("hidden");
    rock1.classList.add("hidden");
    player1 ="scissors";
    blocker.classList.remove("hidden");

    battle();
});

const rock2 = document.querySelector(".rock2");
const paper2 = document.querySelector(".paper2");
const scissors2 = document.querySelector(".scissors2");
const lizard2 = document.querySelector(".lizard2");
const spock2 = document.querySelector(".spock2");
const interrogation = document.querySelector(".interrogation");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
let points1 = 0;
let points2 = 0;

score1.innerHTML=`YOU: ${points1}`;
score2.innerHTML=`SHELDON: ${points2}`;

function battle() {

    pcChoice();
    if(player1 == player2){
        console.log("empate");

    } else if (player1 == "rock" && player2 == "scissors"){
        console.log("ganaste");
        points1+=1;
        wonOne();

    } else if (player1 == "rock" && player2 == "paper"){
        console.log("perdiste");
        points2+=1;
        lostOne();

    } else if (player1 == "paper" && player2 == "scissors"){
        console.log("perdiste");
        points2+=1;
        lostOne();

    } else if (player1 == "paper" && player2 == "rock"){
        console.log("ganaste");
        points1+=1;
        wonOne();

    } else if (player1 == "scissors" && player2 == "paper"){
        console.log("ganaste");
        points1+=1;
        wonOne();

    } else if (player1 == "scissors" && player2 == "rock"){
        console.log("perdiste");
        points2+=1;
        lostOne();

    };

    score1.innerHTML=`YOU: ${points1}`;
    score2.innerHTML=`SHELDON: ${points2}`;

    setTimeout(restart, 2700);
}

function wonOne() {
    setTimeout(()=>{
        happy.classList.remove("hidden");
        resultsCont.classList.remove("hidden");
    },700);
}

function lostOne() {
    setTimeout(()=>{
        sad.classList.remove("hidden");
        resultsCont.classList.remove("hidden");
    },700);
    
}

function pcChoice() {
    let temp = Math.floor((Math.random()*3)+1);
    interrogation.classList.add("hidden");
    if(temp == 1){
        player2 = "rock";
        rock2.classList.remove("hidden");
    } 
    else if(temp == 2){
        player2 = "paper";
        paper2.classList.remove("hidden");
    }
    else if (temp == 3){
        player2 = "scissors";
        scissors2.classList.remove("hidden");
    }

    return player2;
}

function restart() {
    const pcChoice = document.querySelectorAll(".choice");
    const playerChoice = document.querySelectorAll(".playerChoice");
    pcChoice.forEach(element => {
        if(!element.classList.contains("hidden")){
            element.classList.add("hidden");
        }
    });
    playerChoice.forEach(element => {
        if(element.classList.contains("hidden")){
            element.classList.remove("hidden");
        }
    });
    
    interrogation.classList.remove("hidden");
    blocker.classList.add("hidden");
    resultsCont.classList.add("hidden");

    if(!happy.classList.contains("hidden")){
        happy.classList.add("hidden");
    } else if (!sad.classList.contains("hidden")){
        sad.classList.add("hidden");
    }

    if (points1 == 3 || points2 == 3){
        resetGame();
    }
}

function resetGame () {
    points1 = 0;
    points2 = 0;

    play.classList.add("hidden");
    logo.classList.remove("hidden");
    startGame.classList.remove("hidden");
    start.classList.add("hidden");

    const buttons = document.querySelectorAll(".button");
    if(buttons[0].classList.contains("hidden")){
        buttons[0].classList.remove("hidden");
    } else if(buttons[1].classList.contains("hidden")){
        buttons[1].classList.remove("hidden");
    }
    score1.innerHTML=`YOU: ${points1}`;
    score2.innerHTML=`SHELDON: ${points2}`;
}

