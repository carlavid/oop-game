/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Event listener to handle clicks on the start button
 */
let game;
const startBtn = document.querySelector("#btn__reset");
startBtn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});


/**
 * Event listener to handle clicks on any of the onscreen keyboard buttons
 */
const buttons = document.querySelectorAll("button.key");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        button = e.target;
        game.handleInteraction(button);
    });   
});


/**
 * Event listener to handle user entering guesses with keyboard keys
 */
document.addEventListener("keydown", e => {
    if (document.querySelector("#overlay").style.display !== "none") {
        return;
    };
    buttons.forEach(button => {
        if (button.disabled) {
            e.preventDefault();
            return;
        } else if (e.key.toLowerCase() === button.innerHTML) {
            game.handleInteraction(button);
        }
    });
});

/**
 * Animate game over message
 */
const gameOverMsg = document.querySelector("#game-over-message");

setInterval(() => {
    gameOverMsg.style.visibility = (gameOverMsg.style.visibility === 'hidden' ? 'visible' : 'hidden');
}, 500);