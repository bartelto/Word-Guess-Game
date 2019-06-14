//var instr = document.getElementById('instructions');

let game = {
    wordBank: ["Cameron", "Sloan", "Jeannie", "Edward Rooney", "Grace", "Abe Froman", "Ferris Bueller"],
    currentWord: "",
    displayedWord: "",
    started: false,
    guessesAllowed: 10,
    guessesRemaining: 0,
    numWins: 0,
    instructions: "",
    
    
    init: function() {
        console.log("init function");
        this.instructions = document.getElementById('instructions');
        this.numWins = document.getElementById('numWins');
        this.guessesRemaining = document.getElementById('guessesRemaining');
        this.displayedWord = document.getElementById('displayedWord');
    },

    start: function() {
        console.log("start function");
        this.started = true;
        this.instructions.textContent = "Type a letter to guess!"; // Clear instructions from screen
        this.chooseWord();
        this.guessesRemaining = this.guessesAllowed;
    },

    chooseWord: function() {
        this.currentWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        console.log("current word: " + this.currentWord);
        this.displayedWord.textContent = ('_').repeat(this.currentWord.length);
        //this.displayedWord.textContent = "Todd";
    },

    guess: function(letter) {
        console.log("guess: " + letter);
        // Check if key is a letter

    },

    updateDisplayedWord: function() {

    }

};

game.init();
//instr.textContent = "hello";

document.onkeyup = function(event) {
    if (!game.started) {
        game.start();
    } else {
        game.guess(event.key);
    }
    

  }

