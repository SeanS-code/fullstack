let compScore = 0, humScore = 0

function human() {
    let res = prompt("rock, paper or scissors?")

    if (res === "rock" || res === "paper" || res === "scissors") {
        return res
    }

    alert("input rock, paper or scissors thank you!")
    return human()
}

function computer() {
    let n = Math.floor(Math.random() * 3);
    
    if (n == 0) {
        console.log("Computer : Rock")
        return "rock"
    } else if (n == 1) {
        console.log("Computer : Scissors")
        return "scissors"
    } else {
        console.log("Computer : Paper")
        return "paper"
    }
}

function playRound(hum, comp) {
    if (hum == "rock") {
        switch (comp) {
            case "paper":
                console.log("You lose :(, Computer Wins!")
                return compScore++;
            case "scissors":
                console.log("You win :), Computer Loses!")
                return humScore++;
            default:
                console.log("Its a tie!")
                return 0;
        }
    } else if (hum == "paper") {
        switch (comp) {
            case "scissors":
                console.log("You lose :(, Computer Wins!")
                return compScore++;
            case "rock":
                console.log("You win :), Computer Loses!")
                return humScore++;
            default:
                console.log("Its a tie!")
                return 0;
        }
    } else {
        switch (comp) {
            case "rock":
                console.log("You lose :(, Computer Wins!")
                return compScore++;
            case "paper":
                console.log("You win :), Computer Loses!")
                return humScore++;
            default:
                console.log("Its a tie!")
                return 0;
        }
    }
}

function resetGame() {
    humScore = 0
    compScore = 0
    playGame()
}

function playGame() {
    while (humScore != 3 && compScore != 3) {
        let humSel = human().toLowerCase()
        let comSel = computer()

        playRound(humSel, comSel)
        console.log("--- Score ---"+"\n"+"Computer: "+compScore+"\n"+"Player: "+humScore)
    }

    if (humScore == 3) {
        if (confirm("You won the game! Play again?"))
            return resetGame()
    } else {
        if (confirm("Computer wins the game! Try again?"))
            return resetGame()
    }
}

/* Main Section */
playGame()