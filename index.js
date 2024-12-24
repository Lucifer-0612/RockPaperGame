const choices =['rock','paper', 'scissior'];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random()*3)];
    result="";

    if(playerChoice===computerChoice)
    {
        result="IT'S A TIE";

    }
    else
    {
        switch(playerChoice)
        {
            case "rock":
                result=(computerChoice==="scissior"?"YOU WIN!":"YOU LOSE!");
                break;
            case "paper":
                result=(computerChoice==="rock"?"YOU WIN!":"YOU LOSE!");
                break;
            case "scissior":
                result=(computerChoice==="paper"?"YOU WIN!":"YOU LOSE!");
                break;        
            }
    }

    playerDisplay.textContent=`PLAYER:${playerChoice}`;
    computerDisplay.textContent=`COMPUTER:${computerChoice}`;
    resultDisplay.textContent= result;

    switch(result)
    {
        case "IT'S A TIE":
            resultDisplay.classList.add("greenText");
            break;
        
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break; 
    }
}

function playsound()
{
    let sound = new Audio('applause_2.mp3')
    sound.play();
}