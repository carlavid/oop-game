/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * create a new instance of the Game class and add event 
 * listeners for the start button and onscreen keyboard buttons
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
buttons = document.querySelectorAll("button.key");
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