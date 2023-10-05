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
        game.handleInteraction(button)
    });   
});


/**
 * Event listener to handle user entering guesses with keyboard keys
 */
document.addEventListener("keydown", e => {
    buttons.forEach(button => {
        if (e.key === button.innerHTML) {
            game.handleInteraction(button);
        };
    })
});