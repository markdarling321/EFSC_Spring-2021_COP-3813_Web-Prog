"use strict";

function start()
{
	// DECLARE ARRAY
	let grossSales = [];
}

function addLine()
{
	document
	.getElementById("salesForm")
	.insertAdjacentHTML("beforeend",
	'<label for="grossSales" class="grossSalesLine">Gross Sales: $ </label>' +
  	'<input type="text" name="grossSales" class="grossSalesLine">' +
	'<button type="button" onclick="addLine()" class="grossSalesLine"> + </button>' +
	'<button type="button" onclick="removeLine()" class="grossSalesLine"> - </button>' +
	'<br class="grossSalesLine">'
	);	
}

function removeLine()
{
	let formLineArr = document.getElementsByClassName("grossSalesLine");

	// DON'T ALLOW REMOVAL OF THE FIRST LINE
	if (formLineArr.length == 5)
		return;

	//document.querySelectorAll("#salesForm > br").length.remove();

	for (let i = 0; i < 5; i++)
		formLineArr[formLineArr.length - 1].remove();	
}

function submitForm()
{
	// DECLARE VARIABLES
	let inputArr = document.getElementsByTagName('input');
	let grossSalesArr = [];
	let bracketCount = ["0","0","0","0","0","0","0","0","0",];
	let netSalary = 0;
	let baseSalary = 200;
	let commissionRate = 0.09;

	// SCRAPE VALUES FROM INPUT FIELDS INTO SEPARATE ARRAY FOR PROCESSING
	for (let i = 0; i < inputArr.length; i++)
	{
		// TARGET INPUT FIELDS OF 'text' TYPE ONLY
		if (inputArr[i].type.toLowerCase() == 'text')
		{
			// TRANSFER DATA WE WANT TO ANOTHER ARRAY FOR EASE OF WORKING WITH
			grossSalesArr[i] = parseFloat(inputArr[i].value);
			console.log("grossSalesArr[i] = " + grossSalesArr[i]);
		}
	}

	// CALCULATE NET SALARY FOR EACH ELEMENT IN ARRAY
	for (let i = 0; i < grossSalesArr.length; i++)
	{
		// CALCULATE SALARY
		netSalary = parseFloat( (baseSalary + ( grossSalesArr[i] * commissionRate ) ) );
		console.log("netSalary = " + netSalary);

		// OVERWRITE ELEMENT'S GROSS SALES AMOUNT WITH CALCULATED NET SALARY
		grossSalesArr[i] = parseFloat(netSalary);
	}

	// DETERMINE SALARY RANGE / BRACKET COUNT FOR DATA PROVIDED
	for (let i = 0; i < grossSalesArr.length; i++)
	{
		console.log("grossSalesArr[i] = " + grossSalesArr[i]);
		if ( grossSalesArr[i] >= 200 && grossSalesArr[i] < 300 )
			bracketCount[0] = parseInt(bracketCount[0]) + 1;
		if ( grossSalesArr[i] >= 300 && grossSalesArr[i] < 400 )
			bracketCount[1] = parseInt(bracketCount[1]) + 1;
		if ( grossSalesArr[i] >= 400 && grossSalesArr[i] < 500 )
			bracketCount[2] = parseInt(bracketCount[2]) + 1;
		if ( grossSalesArr[i] >= 500 && grossSalesArr[i] < 600 )
			bracketCount[3] = parseInt(bracketCount[3]) + 1;
		if ( grossSalesArr[i] >= 600 && grossSalesArr[i] < 700 )
			bracketCount[4] = parseInt(bracketCount[4]) + 1;
		if ( grossSalesArr[i] >= 700 && grossSalesArr[i] < 800 )
			bracketCount[5] = parseInt(bracketCount[5]) + 1;
		if ( grossSalesArr[i] >= 800 && grossSalesArr[i] < 900 )
			bracketCount[6] = parseInt(bracketCount[6]) + 1;
		if ( grossSalesArr[i] >= 900 && grossSalesArr[i] < 1000 )
			bracketCount[7] = parseInt(bracketCount[7]) + 1;
		if ( grossSalesArr[i] >= 1000 )
			bracketCount[8] = parseInt(bracketCount[8]) + 1;
	}

	// DEBUG
	for (let i = 0; i < bracketCount.length; i++)
		console.log("bracketCount[i] = " + bracketCount[i]);

	// BUILD TABLE WITH PROCESSED DATA...

	// INSERT TABLE BODY & HEADER INTO RESULTS DIV
	document
	.getElementById("results")
	.innerHTML = 
	'<table id="resultsTable">' +
	'<tr><th>RANGE</th><th># EMPLOYEES</th></tr>' +
	'<tr><td>$200-299</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$300-399</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$400-499</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$500-599</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$600-699</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$700-799</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$800-899</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$900-999</td><td class="resultsColumn"></td></tr>' +
	'<tr><td>$1000+</td><td class="resultsColumn"></td></tr>' +
	'</table>'
	;

	// INSERT TABLE DATA ROW BY ROW
	for (let i = bracketCount.length - 1; i >= 0; i--)
	{
		document
		.getElementsByClassName("resultsColumn")[i]
		.innerHTML = bracketCount[i];
	}
}

function clearForm()
{
	let inputArr = document.getElementsByTagName('input');

	for (let i = 0; i < inputArr.length; i++)
	{
		if (inputArr[i].type.toLowerCase() == 'text')
		{
			inputArr[i].value = "";
		}
	}
}

function resetForm()
{
	document
	.getElementById("workspace")
	.innerHTML = 
	'<h2>Company Salary Range Counters</h2>' +
	'		<form id="salesForm">' +
	'			<label for="grossSales" class="grossSalesLine">Gross Sales: $ </label>' +
  	'			<input type="text" name="grossSales" class="grossSalesLine">' +
	'			<button type="button" onclick="addLine()" class="grossSalesLine"> + </button>' +
	'			<button type="button" onclick="removeLine()" class="grossSalesLine"> - </button>' +
	'			<br class="grossSalesLine">' +
	'		</form>' +
	'		<div id="formControls">' +
	'			<button type="button" onclick="submitForm()">SUBMIT</button>' +
	'			<button type="button" onclick="clearForm()">CLEAR</button>' +
	'			<button type="button" onclick="resetForm()">RESET</button>' +
	'		</div>' +
	'		<div id="results"></div>'
	;
}