// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Submit Button event listener for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'green');
    }

    if (guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, You win!`, 'green');
    } else {

    }
});

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}