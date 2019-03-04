let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_id=document.getElementById("r");
const paper_id=document.getElementById("p");
const scissors_id=document.getElementById("s");

function getComputerChoice(){
    const choice=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function convertToWord(letter){
    if(letter==="r") return "Rock"
    if(letter==="p") return "Paper"
    return "Scissors";    
}

function win(user, computer){
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(user)}${smallUserWorld} beats ${convertToWord(computer)}${smallCompWorld}. Your win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(user, computer){
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(user)}${smallUserWorld} loses to ${convertToWord(computer)}${smallCompWorld}. Your lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(user, computer){
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
    result_p.innerHTML=`${convertToWord(user)}${smallUserWorld} equals ${convertToWord(computer)}${smallCompWorld}. It's a draw.!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_id.addEventListener("click", () => game("r"));
    paper_id.addEventListener("click", () => game("p"));
    scissors_id.addEventListener("click", () => game("s"));
}

main();