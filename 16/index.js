function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    let userScore = 0,
        botScore = 0;

    for (let i = 0; i < 3; i++){
        userScore += randomInteger(1, 6)
    }

    for (let i = 0; i < 3; i++){
        botScore += randomInteger(1, 6)
    }

    const scores = `User score: ${userScore}\n` +
                   `Bot score: ${botScore}`

    if (userScore > botScore){
        alert(scores + "\n" + userWin);
    }
    else if (userScore < botScore){
        alert(scores + "\n" + botWin);
    }
    else {
        alert(scores + "\n" + draw);
    }
}

const userWin = "Congrats, you have won";
const botWin = "Sorry, bot has won, try one more time";
const draw = "You had a draw";

document.getElementById('play_button').addEventListener('click', startGame)
document.addEventListener('keypress', e => e.key === 'Enter' && startGame())
