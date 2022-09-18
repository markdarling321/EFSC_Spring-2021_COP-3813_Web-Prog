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

	// INITIALIZE NUMBER OF GUESSES WITH GLOBAL SCOPE
	numGuesses = 0;

	// APPEND GAME PLAY AREA BELOW WELCOME BANNER
	firstRun = 1;
	resetLog = 0;
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
			'<h3>Guess a number between 1 and 1000:<br><br>' +
			'<form id="gameForm"><label for="guess">ENTER GUESS: </label><br>' +
			'<input type="text" id="guess" name="guess" value="" autofocus><br><br>' +
			'<input id="submitGuessButton" onclick="guessNumber(randomNumber)" ' +
			'type="submit" value="Submit"></form></h3>';

		if (firstRun == 1)
		{
			createGuessLogBox();
		}
		
		if (resetLog == 1)
		{
			// ERASE LOG OF PREVIOUS TRIES
			document.getElementById("guessLogBox").innerHTML = "";
		}

		// AUTOFOCUS TEXT INPUT FIELD
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
		  
		if (firstRun == 1)
		{
			createGuessLogBox();
		}
		
		if (resetLog == 1)
		{
			// ERASE LOG OF PREVIOUS TRIES
			document.getElementById("guessLogBox").innerHTML = "";
		}

		// AUTOFOCUS TEXT INPUT FIELD
		document.getElementById("guess").focus();
	}
	
	// DEBUG
  	console.log("1 RANDOM NUMBER: " + randomNumber);
}

function createGuessLogBox()
{
	console.log("FIRST RUN!");
	document.getElementById("gameBox").insertAdjacentHTML("afterend",'<div id="guessLogBox"></div>');
	firstRun = 0;
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
		numGuesses += 1;
		document
    	.getElementById("guessLogBox")
		.insertAdjacentHTML("afterbegin", '<div class="guessLog">Too high, try again!<br>'+
		'(GUESS #' + numGuesses + ': ' + guess + ' )<br><br></div>');
		
		// FLAG:  RESET GUESS LOG
		resetLog = 0;
		
		createGameBox("gameBox", "", "update", randomNumber);
	}
	else if (guess < randomNumber)
	{
		numGuesses += 1;
    	document
    	.getElementById("guessLogBox")
		.insertAdjacentHTML("afterbegin", '<div class="guessLog">Too low, try again!<br>' +
		'(GUESS #' + numGuesses + ': ' + guess + ' )<br><br></div>');
		
		// FLAG:  RESET GUESS LOG
		resetLog = 0;

		createGameBox("gameBox", "", "update", randomNumber);
  	}
	else
	{
		numGuesses += 1;
		
		if (numGuesses < 10)
		{
			document
			.getElementById("guessLogBox")
			.insertAdjacentHTML("afterbegin", '<div class="guessLog">Correct!<br>' +
			'(GUESS #' + numGuesses + ': ' + guess + ' )<br><br></div>');

			document
			.getElementById("gameBox")
			.innerHTML='<div id="correctGuess">Either you know the secret or you got lucky!<br><br>' +
			'You guessed the correct number in ' + numGuesses + ' guess(es)!</div>';	
		}
		else if (numGuesses > 10)
		{
			document
			.getElementById("guessLogBox")
			.insertAdjacentHTML("afterbegin", '<div class="guessLog">Correct!<br>' +
			'(GUESS #' + numGuesses + ': ' + guess + ' )<br><br></div>');

			document
			.getElementById("gameBox")
			.innerHTML='<div id="correctGuess">You should be able to do better!<br><br>' +
			'You guessed the correct number in ' + numGuesses + ' guesses!</div>';	
		}
		else if (numGuesses == 10)
		{
			document
			.getElementById("guessLogBox")
			.insertAdjacentHTML("afterbegin", '<div class="guessLog">Correct!<br>' +
			'(GUESS #' + numGuesses + ': ' + guess + ' )<br><br></div>');
			
			document
			.getElementById("gameBox")
			.innerHTML='<div id="correctGuess">Ahah! You know the secret!<br><br>' +
			'You guessed the correct number in ' + numGuesses + ' guess(es)!</div>';	
		}
				
		// GENERATE NEW RANDOM NUMBER FOR SUBSEQUENT ROUNDS WITHOUT PAGE RELOAD
		randomNumber = generateRandomNumber(1, 1000);
		
		// RESET GUESS COUNTER
		numGuesses = 0;

		// FLAG:  RESET GUESS LOG
		resetLog = 1;

		// RESET GAME BOX FOR NEW GAME
		createGameBox("correctGuess", "afterend", "append", randomNumber);
	}
}