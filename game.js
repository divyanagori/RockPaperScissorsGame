let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".container");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})

const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let indx = Math.floor(Math.random() * 3);
    return options[indx]
}


let mess = document.querySelector("#mess");
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("User win");
        mess.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        mess.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;

    } else {
        console.log("Comp Win");
         mess.innerText = `You Lose! Comp ${compChoice} beats ${userChoice}`
         mess.style.backgroundColor ="darkred";
         compScore++;
         compScorePara.innerText = compScore;
    }
}

const drawGame = () => {
    console.log("game was draw");
     mess.innerText = "Game was Draw"
     mess.style.backgroundColor = "darkslategray";
}

const playGame = (userChoice) => {
    console.log("user choices = ", userChoice);
    let compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);
  

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

