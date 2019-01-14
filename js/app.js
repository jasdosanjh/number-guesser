// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(max, min),
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

// Submit button event listerner for playing again
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Submit button event listener for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'green');
    }
    // Check if won
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, You win!`);
    } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
        // Game over - lost
        gameOver(false, `You lose. The correct number was ${winningNum}.`);
    } else {
        // Game continues - incorrect answer
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get random winning number
function getRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}