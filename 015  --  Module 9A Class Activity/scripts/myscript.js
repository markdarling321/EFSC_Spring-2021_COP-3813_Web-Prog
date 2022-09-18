function start()
{
	// DECLARE ARRAY
	var userIntegers = [];
	
	// PROCESS USER INPUT
	for (i = 0; i < 5; i++)
	{
		userIntegers[i] = parseInt(prompt("ENTER AN INTEGER: ",""));
	}

	// CREATE WORKSPACE IN HTML DOCUMENT
	document
    .getElementById("doStuff")
    .insertAdjacentHTML(
      "afterbegin",
      '<div style="float: left;" id="unsortedDiv"></div>' +
	  '<div style="float: left;" id="sortedDiv"></div>'
    );

	// INSERT TABLE 1
	document
	.getElementById("unsortedDiv")
	.insertAdjacentHTML(
	  "afterbegin",
	  '<table id="unsortedTable">' +
	  '<tr><th colspan="2">UNSORTED TABLE</th></tr>' +
	  '<tr><th>ELEMENT</th><th>#</th></tr>' +
	  '</table><br>'
	);

	// INSERT TABLE 2
	document
	.getElementById("sortedDiv")
	.insertAdjacentHTML(
	  "afterbegin",
	  '<table id="sortedTable">' +
	  '<tr><th colspan="2">SORTED TABLE</th></tr>' +
	  '<tr><th>ELEMENT</th><th>#</th></tr>' +
	  '</table>'
	);

	// PROCESS TABLE 1
	for (i = 0; i < userIntegers.length; i++)
	{
		document
		.getElementById("unsortedTable")
		.insertAdjacentHTML(
		  "beforeend",
		  '<tr><td>' + i + '</td><td>' + userIntegers[i] + '</td></tr>'
		);
	}

	// NUMERICALLY SORT THE ARRAY IN ASCENDING ORDER
	var sortedIntegers = userIntegers.sort(function(a, b){return a - b});
	
	// PROCESS TABLE 2
	for (i = 0; i < sortedIntegers.length; i++)
	{
		document
		.getElementById("sortedTable")
		.insertAdjacentHTML(
		  "beforeend",
		  '<tr><td>' + i + '</td><td>' + sortedIntegers[i] + '</td></tr>'
		);
	}
}