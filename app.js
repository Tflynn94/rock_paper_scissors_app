let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("userScore");
let computerScoreSpan = document.getElementById("computerScore");
let scoreBoardDiv = document.querySelector(".scoreBoard");
let resultP = document.querySelector(".result > p");
let rockDiv = document.getElementById("rock");
let paperDiv = document.getElementById("paper");
let scissorsDiv = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber =(Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToUpper(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `You picked ${convertToUpper(userChoice)}, comp picked  ${convertToUpper(computerChoice)}. you win!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `You picked ${convertToUpper(userChoice)}, comp picked  ${convertToUpper(computerChoice)}. you lose!`
}

function draw(userChoice, computerChoice) {
    resultP.innerHTML = `You picked ${convertToUpper(userChoice)}, comp picked  ${convertToUpper(computerChoice)}. it's a draw!`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
          win(userChoice, computerChoice);
          break;
        case "rockpaper":
        case "paperscissors":
        case "scissorspaper":
          lose(userChoice, computerChoice);
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          draw(userChoice, computerChoice);
          break;
    }
}

function main(){
    rockDiv.addEventListener('click', function() {
        game("rock")
    })

    paperDiv.addEventListener('click', function() {
        game("paper")
    })

    scissorsDiv.addEventListener('click', function() {
        game("scissors")
    })
}

main();