
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function isLetter(inputChr) {
    let letters = /^[a-zA-Z]+$/;
    if (inputChr.match(letters)) {
        return true;
    }
    else { 
        return false; 
    }
}

let game = {
    wordBank: ["Cameron", "Sloan", "Jeannie", "Edward Rooney", "Grace", "Abe Froman", "Ferris Bueller"],
    currentWord: "", // chosen from the word bank
    displayedWord: "", // only showing the letters that have been guessed
    started: false,
    guessesAllowed: 10,
    guessesRemaining: 0,
    wrongLetters: "",
    numWins: 0,
    audioPlayer: "",
    bigImage: "",

    // variables linked to screen elements
    txtInstructions: "",
    txtDisplayedWord: "",
    txtGuessesRemaining: "",
    txtWrongLetters: "",
    txtNumWins: "",
    
    init: function() {
        console.log("init function");
        this.txtInstructions = document.getElementById('instructions');
        this.txtNumWins = document.getElementById('num-wins');
        this.txtGuessesRemaining = document.getElementById('guesses-remaining');
        this.txtDisplayedWord = document.getElementById('displayed-word');
        this.txtWrongLetters = document.getElementById('wrong-letters');
        this.audioPlayer = document.getElementsByTagName('audio')[0];
        this.bigImage = document.getElementById('bigImage');
    },

    start: function() {
        console.log("start function");
        this.started = true;
        this.txtInstructions.textContent = "Type a letter to guess!"; // Clear txtInstructions from screen
        this.chooseWord();
        this.guessesRemaining = this.guessesAllowed;
        this.wrongLetters = "";
        this.updateScreen();
        this.audioPlayer.pause();
        this.audioPlayer.controls = false;
        
    },

    chooseWord: function() {
        this.currentWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toLowerCase();
        console.log("current word: " + this.currentWord);
        this.displayedWord = ('_').repeat(this.currentWord.length);
        if (this.currentWord.includes(' ')) { // show spaces
            let i = 0
            while (this.currentWord.indexOf(' ', i) > -1) {
                this.displayedWord = replaceAt(this.displayedWord, this.currentWord.indexOf(' ', i), ' ');
                i = this.currentWord.indexOf(' ', i) + 1;
            }
        }
    },

    guess: function(letter) {
        console.log("guess: " + letter);
        // Check if key is a letter
        if (this.currentWord.includes(letter)) {
            console.log("good guess!");
            let i = 0
            while (this.currentWord.indexOf(letter, i) > -1) {
                this.displayedWord = replaceAt(this.displayedWord, this.currentWord.indexOf(letter, i), letter);
                i = this.currentWord.indexOf(letter, i) + 1;
            }
            if (this.displayedWord === this.currentWord) {
                this.txtInstructions.textContent = "You win! Nice job. Press any key to play again.";
                this.numWins++;
                this.started = false;
                this.audioPlayer.play();
                this.audioPlayer.controls = true;
                this.bigImage.src = "assets/images/ferris-bueller.jpg";
            }
        } else if (!this.wrongLetters.includes(letter)) { // ignore wrong guesses that have already been made
            console.log("bad guess!");
            this.guessesRemaining--;
            console.log("guesses remaining: " + this.guessesRemaining);
            this.wrongLetters += letter;
        }
        this.updateScreen();

        if (this.guessesRemaining <= 0) {
            this.txtInstructions.textContent = "You lose! The correct answer was" + this.currentWord.toUpperCase() + ". Press any key to play again.";
            this.started = false;
        }
    },

    updateScreen: function() {
        this.txtDisplayedWord.textContent = this.displayedWord.toUpperCase();
        this.txtGuessesRemaining.textContent = this.guessesRemaining;
        this.txtWrongLetters.textContent = this.wrongLetters.toUpperCase();
        this.txtNumWins.textContent = this.numWins;
    }

};

game.init();

document.onkeyup = function(event) {
    if (!game.started) {
        game.start();
    } else if (isLetter(event.key)) {
        game.guess(event.key);
    }
}


  

