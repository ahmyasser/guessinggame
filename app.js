let min = 1,
    max = 10,
    winningNum = getWinningNum(),
    guessesLift = 6

// load UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

// Assign UI elements
minNum.textContent = min;
maxNum.textContent = max;
// Play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again')
        window.location.reload();
});
// Create event listener for this btn
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please Enter a number between 1 and 10', 'red');
        guessInput.style.borderColor = 'red';
    } else {
        // Check for winnning number
        if (guess === winningNum) {
            // Game over you win
            gameOver(true);
        } else {
            --guessesLift;
            if (guessesLift === 0) {
                // Game Over- Lost
                gameOver(false);
            } else {
                // Wrong try again
                setMessage(`Try a gain, you have ${guessesLift} lift`, 'black');

            }
        }
    }
})

function gameOver(isWin) {
    guessInput.disabled = true;
    let msg = isWin ? `Congrats! the right Number is ${winningNum}` : `Hard luck! the right Number is ${winningNum}`;
    let color = isWin ? 'green' : 'red';
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;

}

function getWinningNum() {
    return Math.ceil(Math.random() * (max - min + 1));
}