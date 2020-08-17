let min = 1,
    max = 10,
    winningNum = 2,
    guessesLift = 3;

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

// Create event lestiner for this btn
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please Enter a number between 1 and 10', 'red');
        guessInput.style.borderColor = 'red';
    } else {
        // Check for winnning number
        if (guess === winningNum) {
            guessInput.disabled = true;
            guessInput.style.borderColor = 'green';
            setMessage(`Congrats! the right Number is ${guess}`, 'green');
        } else {
            if (guessesLift > 0) {
                guessesLift--;
                setMessage(`Try a gain, you have ${guessesLift} lift`, 'black');
            } else {
                guessInput.disabled = true;
                setMessage(`Hard luck! the right Number is ${winningNum}`, 'red');
            }
        }
    }
})

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;

}