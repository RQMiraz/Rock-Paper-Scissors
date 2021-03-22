function computerPlay(){
    let options=["Rock", "Paper", "Scissors"]
    let n= Math.floor(Math.random()*3)
    return options[n];
}

let pla=0;
let com=0;

function playRound(playerSelection,computerSelection){
    const pl=playerSelection.toLowerCase()
    const cp=computerSelection.toLowerCase()

    if(pl==="rock" && cp ==="paper"){
        com++;
        return "You Lose! Paper beats Rock!"
    }
    else if(pl==="rock" && cp==="scissors"){
        pla++;
        return "You win! Rock beats Scissors!"
    }
    else if(pl==="paper" && cp=="rock"){
        pla++;
        return "You win! Paper beats Rock!"
    }
    else if(pl==="paper" && cp ==="scissors"){
        com++;
        return "You Lose! Scissors beats Paper!"
    }
    else if(pl==="scissors" && cp === "paper"){
        pla++;
        return "You win! Scissors beats Paper!"
    }
    else if(pl==="scissors" && cp==="rock"){
        com++;
        return "You lose! Rock beats Scissors"
    }
    else if(pl===cp){
        return "Tie!"
    }
    else{
        return "Need to input either rock, paper or scissors."
    }
}


function game(){
      for(let i =0; i < 5;i++){
          gameplay();
      }
      console.log("Player:"+pla+" "+"Computer:"+com);
}


function gameplay(){
    let player = prompt("Enter rock, paper or scissors");
    let computer = computerPlay();
    return console.log(playRound(player,computer));
}