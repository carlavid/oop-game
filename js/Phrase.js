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
                li.classList.add("hide", "letter", char);
                li.textContent = char;
            } 
        };
        return phraseUL;
    };

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - Letter to check
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);

    };

    /**
     * Displays passed letter on screen after a match is found 
     * @param {string} letter - Letter to display
     */
    showMatchedLetter(letter) {
        const isMatch = this.checkLetter(letter);
        const matchedLetters = document.querySelectorAll(`.${letter}`);

        matchedLetters.forEach(letter => {
            if (isMatch) {
                letter.classList.remove("hide");
                letter.classList.add("show");
            }
        })
    };
};

