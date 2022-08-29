function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let count = 0;
    let finished = false;
    return function (guess) {
        while (!finished) {
            count++;
            if (guess > num) return `${guess} is too high!`;
            if (guess < num) return `${guess} is too low!`;
            if (guess === num) {
                finished = true;
                return `You win! You found ${num} in ${count} guesses.`;
            }
        }
        return ("The game is over, you already won!");
    }
}

module.exports = { guessingGame };
