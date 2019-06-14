
let game = {
    wordBank: ["Cameron", "Sloan", "Jeannie", "Edward Rooney", "Grace", "Abe Froman", "Ferris Bueller"],
    currentWord: "",
    guessesAllowed: 10,
    guessesRemaining: 0,
    numWins: 0,
    
    
    initGame : function() {
         this.numWins = document.getElementById('numWins');
         this.guessesRemaining = document.getElementById('guessesRemaining');
    }
}

game.initGame();

document.onkeyup = function(event) {
    alert (event.key);
    

  }

