const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let uS = document.getElementById("userscore");
let uC = document.getElementById("compscore");
const scoreBoard = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result>p");
const userChoicePictureDiv = document.getElementById("userChoicePicture");
const compChoicePictureDiv = document.getElementById("compChoicePicture");

let userScore = 0;
let compScore = 0;

const compChoice = () => {
    let choices = ["r", "p", "s"]
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

const you = "(You)".fontcolor("yellow");
const comp = "(Computer)".fontcolor("yellow");
const youWin = "You win! :-)".fontcolor("lightgreen").fontsize(10);
const youLose = "You lose! :-(".fontcolor("red").fontsize(10);
const itsADraw = "It´s a draw pal...".fontcolor("lightgrey").fontsize(10);

const putChoicePictures = (user, computer) => {
    userChoicePictureDiv.innerHTML = `<img src=\"images/${convertToWord(user)}.png\" alt="userChoicePicture" class="smallImages">`
    compChoicePictureDiv.innerHTML = `<img src=\"images/${convertToWord(computer)}.png\" alt="compChoicePicture" class="smallImages">`
}

const win = (user, computer) => {
    userScore++;
    uS.innerHTML = userScore.toString();
    result_div.innerHTML = `${convertToWord(user)} ${you} beats ${convertToWord(computer)} ${comp}. <br/> <br/> ${youWin}`;
};

const lose = (user, computer) => {
    compScore++;
    uC.innerHTML = compScore.toString();
    result_div.innerHTML = `${convertToWord(user)} ${you}  loses to  ${convertToWord(computer)} ${comp}. <br/> <br/>${youLose}`;
};

const draw = (user, computer) => {
    result_div.innerHTML = `${convertToWord(user)} ${you}   equals to  ${convertToWord(computer)}  ${comp}. <br/> <br/> ${itsADraw}`;
};

const game = (userChoice) => {
    const getComputerChoice = compChoice();
    switch (userChoice + getComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, getComputerChoice);
            putChoicePictures(userChoice, getComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, getComputerChoice);
            putChoicePictures(userChoice, getComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, getComputerChoice);
            putChoicePictures(userChoice, getComputerChoice);
            break;
    }
}

const main = () => {
    rock_div.addEventListener("click", () => {
        game("r")
    });
    paper_div.addEventListener("click", () => {
        game("p")
    });
    scissors_div.addEventListener("click", () => {
        game("s")
    });
};

main();







