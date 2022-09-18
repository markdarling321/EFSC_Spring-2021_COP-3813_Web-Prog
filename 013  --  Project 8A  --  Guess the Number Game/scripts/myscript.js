// DECLARE RANDOM NUMBER IN GLOBAL SCOPE SO ALL FUNCTIONS HAVE ACCESS
function generateRandomNumber(lower, upper)
{
	// GLOBAL SCOPE FOR randomNumber BY EXLCUDING 'var'
	randomNumber = Math.floor(Math.random() * upper + lower);
	return randomNumber;
}

function submitName()
{
	// READ FIRST & LAST NAME FROM INPUT FIELDS
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	
	// DISPLAY WELCOME BANNER WITHOUT RESETTING PAGE
	document
	.getElementById("nameForm")
	.innerHTML = "<h2 id=\"welcomeBanner\">Welcome, " + fname + " " + lname + "!</h2>";

	// GENERATE INITIAL RANDOM NUMBER
	var randomNumber = generateRandomNumber(1, 1000);
	//DEBUG
	console.log("INITIAL RANDOM NUMBER: " + randomNumber);

	// APPEND GAME PLAY AREA BELOW WELCOME BANNER
	createGameBox("welcomeBanner","afterend","append", randomNumber);
}

function createGameBox(element, where, updateAppend, randomNumber)
{
	if (updateAppend == "update")
	{
		//DEBUG
		console.log("UPDATE");

    	// CREATE & APPEND GAME PLAY AREA AT SPECIFIED POSITION FOR DESIRED ELEMENT
		document.getElementById(element).innerHTML =
			'<div id="gameBox"><h3>Guess a number between 1 and 1000:<br><br>' +
			'<form id="gameForm"><label for="guess">ENTER GUESS: </label><br>' +
			'<input type="text" id="guess" name="guess" value="" autofocus><br><br>' +
			'<input id="submitGuessButton" onclick="guessNumber(randomNumber)" ' +
			'type="submit" value="Submit"></form></h3></div>';
		document.getElementById("guess").focus();
	}
	else
	{
		//DEBUG
		console.log("APPEND");
		
		// CREATE & APPEND GAME PLAY AREA AT SPECIFIED POSITION FOR DESIRED ELEMENT
		document
    	.getElementById(element)
      	.insertAdjacentHTML(
			where,
			'<div id="gameBox"><h3>Guess a number between 1 and 1000:<br><br>' +
			'<form id="gameForm"><label for="guess">ENTER GUESS: </label><br>' +
			'<input type="text" id="guess" name="guess" value="" autofocus><br><br>' +
			'<input id="submitGuessButton" onclick="guessNumber(randomNumber)" ' +
			'type="submit" value="Submit"></form></h3></div>'
	  	);
		document.getElementById("guess").focus();
	}
	
	// DEBUG
  	console.log("1 RANDOM NUMBER: " + randomNumber);
}

function guessNumber(randomNumber)
{
	// DEBUG
	console.log("2 RANDOM NUMBER: " + randomNumber);

	// READ USER'S GUESS FROM INPUT FIELD
	var guess = document.getElementById("guess").value;
	
	// DEBUG
	console.log("GUESS: " + guess);

	// REPORT CONFIRMATION BY UPDATING gameForm WITH NEW innerHTML
	document.getElementById("gameForm").innerHTML = "GUESS RECEIVED!";

	// PROCESS GUESS & DISPLAY RESULTS
	if (guess > randomNumber)
	{
		createGameBox("gameBox", "", "update", randomNumber);
		document
    	.getElementById("gameForm")
		.insertAdjacentHTML("afterend", '<div id="tooHigh">Too high, try again!</div>');
	}
	else if (guess < randomNumber)
	{
		createGameBox("gameBox", "", "update", randomNumber);
    	document
    	.getElementById("gameForm")
    	.insertAdjacentHTML("afterend", '<div id="tooLow">Too low, try again!</div>');
  	}
	else
	{
		document
		.getElementById("gameBox")
		.innerHTML='<div id="correctGuess">Congratulations! You guessed the number!</div>';
		
		// GENERATE NEW RANDOM NUMBER FOR SUBSEQUENT ROUNDS WITHOUT PAGE RELOAD
		randomNumber = generateRandomNumber(1,1000);
		
		createGameBox("correctGuess","afterend","append", randomNumber);
	}
}