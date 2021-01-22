function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(n_rolls) {
    function run_step(step) {
        if (step <= n_rolls) {
            userScore += randomInteger(1, 6)
            botScore += randomInteger(1, 6)

            userScoreEl.innerHTML = `Your score: <b>${userScore}</b>`
            botScoreEl.innerHTML = `Bot score: <b>${botScore}</b>`

            playButton.onclick = () => run_step(step + 1)
        }

        if (step === n_rolls) {
            let res;
            if (userScore > botScore) {
                res = userWin
            } else if (userScore < botScore) {
                res = botWin
            } else {
                res = draw
            }
            resultsEl.innerHTML = res;
            resultsEl.classList.remove('hidden')

            playButton.innerText = 'One more time!'
            playButton.onclick = () => startGame(3)
        }
    }
    let userScore = 0,
        botScore = 0;

    const userScoreEl = document.getElementById('user_score')
    const botScoreEl = document.getElementById('bot_score')

    playButton.innerText = 'Roll!'
    resultsEl.classList.add('hidden')

    run_step(1)
}

const userWin = "Congrats, you <b>win</b>!";
const botWin = "Sorry, you <b>lost</b> :(";
const draw = "You have a <b>draw</b>";

const playButton = document.getElementById('play_button')
const resultsEl = document.getElementById('results')

resultsEl.innerHTML = draw;
// такая игра с классами предотвращает прыганье кнопки
resultsEl.classList.add('hidden')

playButton.innerText = 'Start the Dice!'
playButton.onclick = () => startGame(3)
