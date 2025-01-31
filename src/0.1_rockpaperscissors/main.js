let humScore = 0, compScore = 0;

function computer() {
    let n = Math.floor(Math.random() * 3);
    
    if (n == 0) {
        return "rock"
    } else if (n == 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

function playRound(hum) {
    comp = computer()
    if (hum == "rock") {
        switch (comp) {
            case "paper":
                compScore++;
                return "You lose, Computer Wins!";
            case "scissors":
                humScore++
                return "You win, Computer Loses!";
            default:
                return "Its a tie!";
        }
    } else if (hum == "paper") {
        switch (comp) {
            case "scissors":
                compScore++;
                return "You lose, Computer Wins!";
            case "rock":
                humScore++
                return "You win, Computer Loses!";
            default:
                return "Its a tie!";
        }
    } else {
        switch (comp) {
            case "rock":
                compScore++;
                return "You lose, Computer Wins!";
            case "paper":
                humScore++
                return "You win, Computer Loses!";
            default:
                return "Its a tie!";
        }
    }
}

function resetGame() {
    humScore = 0
    compScore = 0
}

// DOM Commands

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.results');

const scoreboard = document.createElement('p');
const results = document.createElement('h3')

results.textContent = "Welcome to Rock, Paper, Scissors!"
display.appendChild(results)

scoreboard.textContent = "Human : " + humScore + " - " + "Computer : " + compScore
display.appendChild(scoreboard)

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        res = playRound(btn.innerText);

        display.appendChild(results)
        results.textContent = res

        display.appendChild(scoreboard)
        scoreboard.textContent = "Human : " + humScore + " - " + "Computer : " + compScore

        if (humScore == 5 || compScore == 5) {
            if (humScore == 5) {
                confirm("Human wins the game! Try again?")
                resetGame()
            }
            else {
                confirm("Computer wins the game! Try again?")
                resetGame()
            }
        }
    });
});
