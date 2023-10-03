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
})