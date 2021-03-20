function computerPlay(){
    let options=["Rock", "Paper", "Scissors"]
    let n= Math.floor(Math.random()*3)
    return options[n];
}

function playRound(playerSelection,computerSelection){
    const pl=playerSelection.toLowerCase()
    const cp=computerSelection.toLowerCase()

    if(pl==="rock" && cp ==="paper"){
        return "You Lose! Paper beats Rock!"
    }
    else if(pl==="rock" && cp==="scissors"){
        return "You win! Rock beats Scissors!"
    }
    else if(pl==="paper" && cp=="rock"){
        return "You win! Paper beats Rock!"
    }
    else if(pl==="paper" && cp ==="scissors"){
        return "You Lose! Scissors beats Paper!"
    }
    else if(pl==="scissors" && cp === "paper"){
        return "You win! Scissors beats Paper!"
    }
    else if(pl==="scissors" && cp==="rock"){
        return "You lose! Rock beats Scissors"
    }
    else if(pl===cp){
        return "Tie!"
    }
    else{
        return "Need to input either rock, paper or scissors."
    }
}