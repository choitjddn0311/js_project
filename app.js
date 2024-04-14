let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r' , 'p' , 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} beats ${converToWord(computerChoice)} ${smallCompWord}. You win! 🔥`;
    userChoice_div.classList.add('green_glow');
    setTimeout(() => userChoice_div.classList.remove('green_glow'), 300);
}

function lose(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} loses to ${converToWord(computerChoice)} ${smallCompWord}. You lost... `;
    userChoice_div.classList.add('red_glow');
    setTimeout(() => userChoice_div.classList.remove('red_glow'), 300);
}

function draw(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} equals ${converToWord(computerChoice)} ${smallCompWord}. It;s a draw 🌓`;
    userChoice_div.classList.add('gray_glow');
    setTimeout(() => userChoice_div.classList.remove('gray_glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
          win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
          lose(userChoice , computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
          draw(userChoice , computerChoice);
            break;
    }
}

function main () {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main();