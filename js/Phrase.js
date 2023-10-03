/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * define a Phrase class to handle the creation of phrases 
 * (serve as blueprint for creating phrase objects)
 */
class Phrase {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase(); 
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseUL = document.querySelector("#phrase").firstElementChild;

        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement("li");
            phraseUL.appendChild(li);
            let char = this.phrase[i];

            if (char === " ") {
                li.className = "space";
                li.textContent = " ";
            } else if (char !== " ") {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            } 
        };
        return phraseUL;
    }
};

