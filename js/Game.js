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
}