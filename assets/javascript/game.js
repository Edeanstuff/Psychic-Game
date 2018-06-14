var totalWins = 0;
var $totalLose = 0;
var allowedGuess = 9;
var $guessRemain = 9;
var $totalGuesses = [];
var choiceMade = null;


var possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
$(document).ready(function() {


function compLetter() {
    for(i =0; i< possible.length; i++ ) {
        var computerGuess = possible[Math.floor(Math.random() * possible.length)];
        return computerGuess;
    }
}
    $(document).on("keypress", function(key) {
        var totalGuess = $("<span>");
        key = String.fromCharCode(key).toLowerCase();
        totalGuesses.append(totalGuess.text());
        // guessesRemain--;
        // $(this).append(guessesRemain);
    });
});
    if (guessesRemain > 0){
        if (userGuess == computerGuess){
                totalWins++;
                prepend('#win').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesRemain == 0){
            totalLose++;
            document.querySelector('#lose').innerHTML = "Losses: " + totalLose;
            alert("Sorry, you're not psychic, try again.");
            reset();
        }