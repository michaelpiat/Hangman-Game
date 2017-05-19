

// create an array of possible words
var possibleWords = ["canada", "mexico", "russia", "china", "bolivia",
"jordan", "italy", "sweden", "cuba", "afghanistan", "argentina", "australia", 
"brazil", "belgium", "bulgaria", "coratia", "cyprus", "denmark", "israel", "kenya", 
"jamaica", "luxembourg", "liberia", "mali", "mongolia", "norway", "poland", "qatar", "tajikistan"]; 

//Create a functions to choose a random word
var gameWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

	
//an array for letters guessed by user
var guessedLetters = [];	

//var for number of guesses left
var guessesLeft = 12; 

//Displays _ _ _ and the letters as they are being guessed correctly
var gameWordDisplay = "";

//starts on ends game
var gameRunning = false;

//number of wins
var numberWins = 0;


//function that checks the user guess aganist the game word
//also displays word in _ _ _ and right letters guessed
function answerCheck() {
	gameWordDisplay = ""; 

//loops through the game word 
for (var i = 0; i < gameWord.length; i++) {

	//check the letters guessed by the user agains each position of the game word
	if (guessedLetters.includes(gameWord.charAt(i))) {

		//if the letter is there, displays it at the position
		gameWordDisplay += gameWord.charAt(i);
		//if not, replaces the display with _ _ _
	} else {
		gameWordDisplay += "_";

	}
}
}	


$("#get-started").html("Press any key to get started!");
$("#wins").html("Wins: " + numberWins);
$("#letters-guessed").html("Letters already guessed: " + guessedLetters);


//starts when the user pushes a key. 
document.onkeyup = function(event) {

$("#get-started").html("Start guessing!");
$("#word-display").html(gameWordDisplay);
$("#letters-guessed").html("Letters already guessed: " + guessedLetters);
$("#number-of-guesses").html("Guesses left: " + guessesLeft);


 if (gameRunning === false) {
 	//starts the game 
 	gameRunning = true; 
 	//resets the number of guesses each time the game starts
 	guessesLeft = 12;
 	//resets the array of already guessed letters
 	guessedLetters = [];
 	//picks a new word each time the game resets
 	gameWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
 	answerCheck();
 	$("#word-display").html(gameWordDisplay);
 	return;
 }
 	//converts key to lowcase.
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	//prevents user from guessing the same letter
	if (guessedLetters.includes(userGuess)) return;
		//Creates and array of user guesses
		guessedLetters.push(userGuess);

	answerCheck();

	//when the display/user gussed word is the same as the game word, game stops. 
	if (gameWordDisplay === gameWord) {
		gameRunning = false;
		//number of wins increases
		numberWins++;
		$("#wins").html("Wins: " + numberWins);
		$("#word-display").html(gameWordDisplay);
		alert("You win!");
		$("#letters-guessed").empty();
		$("#get-started").html("Press any key to play again!");
		return;

	}
		//counts number of attmepts left
		guessesLeft--;
		console.log(guessesLeft);

	
//keeps track of number of guesses left.
//stops game if out of guesses.
	if (guessesLeft === 0) {
		gameRunning = false; 
		alert("You are out of attmepts");
		$("#letters-guessed").empty();
		$("#get-started").html("Press any key to play again!");
		
	}





}









