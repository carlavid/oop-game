/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * define a Game class with methods to control
 * the flow and state of the game
 */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("I am your father"),
            new Phrase("Just keep swimming"),
            new Phrase("Hasta la vista baby"),
            new Phrase("To infinity and beyond"),
            new Phrase("Not my gumdrop buttons")
        ];
        this.activePhrase = null;

    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]; 
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = game.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, False if game wasn't won
     */
    checkForWin() {
        // check if all letters have been revealed in active phrase 
        const phraseUL = document.querySelector("ul").children;
        let isWin = true;
        
        for (let i = 0; i < phraseUL.length; i++) {
            if (phraseUL[i].classList.contains("hide")) {
                isWin = false;
            }
        };
        return isWin;
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * check if player has remaining lives and ends game is player is out
     */
    removeLife() {
        this.missed++;
        const tries = document.querySelector("img[src='images/liveHeart.png']");
        tries.src = "images/lostHeart.png";
        if (this.missed === 5) {
            this.gameOver();
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.querySelector("#overlay");
        const gameOverMsg = document.querySelector("#game-over-message");
        overlay.style.display = "block";
        overlay.classList.remove("start", "lose", "win");
        
        if (gameWon) {
            overlay.classList.add("win");
            gameOverMsg.textContent = "Yay you win!";
        } else if (!gameWon) {
            overlay.classList.add("lose");
            gameOverMsg.textContent = "Sorry you lose! Better luck next time!";
        }
        this.resetGame();

    };

    /**
    * Handles onscreen keyboard button clicks
    * @param {HTMLButtonElement} button - The clicked button element
    */
    handleInteraction(button) {
        let currentPhrase = this.activePhrase.phrase;
        button.disabled = true;

        if (!currentPhrase.includes(button.innerHTML)) {
            button.classList.add("wrong");
            this.removeLife();
        } else if (currentPhrase.includes(button.innerHTML)) {
            button.classList.add("chosen");
            game.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver(true);
            };
        } 
    }

    /**
     * Handles resetting the game 
     */
    resetGame() {
        const phraseLI = document.querySelector("#phrase").firstElementChild;
        const lostHearts = document.querySelectorAll("img[src='images/lostHeart.png']");
        phraseLI.innerHTML = "";
        
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove("chosen", "wrong");
        });

        lostHearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        })
    };
};