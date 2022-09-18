"use strict";
function start()
{
	// DECLARE ARRAY
	let userStrings = [];
	
	// PROCESS USER INPUT
	for (let i = 0; i < 5; i++)
	{
		userStrings[i] = prompt((i + 1) + ". ENTER AN STRING: ","");
	}

	// CREATE WORKSPACE IN HTML DOCUMENT
	document
    .getElementById("doStuff")
    .insertAdjacentHTML(
      "afterbegin",
      '<div style="float: left;" id="myStuffDiv"></div>'
	);

	// INSERT TABLE 1
	document
	.getElementById("myStuffDiv")
	.insertAdjacentHTML(
	  "afterbegin",
	  '<table id="palindromeTable">' +
	  '<tr><th colspan="2">Module 9B Class Activity</th></tr>' +
	  '<tr><th>STRING</th><th>PALINDROME?</th></tr>' +
	  '</table><br>'
	);

	// PROCESS TABLE 1
	for (let i = 0; i < userStrings.length; i++)
	{
		// DEBUG
		console.log(userStrings[i]);
		
		// DEBUG
		//let isPal = isPalindrome(userStrings, i);

		document
		.getElementById("palindromeTable")
		.insertAdjacentHTML(
		  "beforeend",
		  '<tr><td>' + userStrings[i] + '</td><td>' + isPalindrome(userStrings, i) + '</td></tr>'
		);
	}	
}

function isPalindrome(arr, index)
{
	// DEBUG
	console.log("isPalindrome()...");
	
	// GRAB SPECIFIED WORD FROM ARRAY OF WORDS
	let word = arr[index];
	
	// MAKE WORD UNIFORM CASE BEFORE CHECKING CHARACTERS
	word = word.toUpperCase();

	// DEBUG
	console.log("word = " + word);
	
	// SPLIT WORD INTO ARRAY OF CHARS
	let charArr = word.split("");
	
	// DEBUG
	for (let i = 0; i < charArr.length; i++)
		console.log(charArr[i]);
	
	// INITIALIZE RESULT VARIABLE
	let result = "";

	// ITERATE FROM END OF ARRAY TO BEGINNING
	for (let i = charArr.length - 1; i >= 0; i--)
	{
		// BUILD RESULTING STRING
		result = result.concat(charArr[i]);
	}

	// DEBUG
	console.log("result = " + result);

	// RETURN RESULTS
	if (result == word)
		return "YES";
	else
		return "NO";
}