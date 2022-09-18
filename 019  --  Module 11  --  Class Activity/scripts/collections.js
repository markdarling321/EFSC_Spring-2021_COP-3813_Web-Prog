// Fig. 12.14: collections.js 
// Script to demonstrate using the links collection. 
function processLinks()
{
	var linksList = document.links; // get the document's links
	var contents = "<ul>";

	// concatenate each link to contents
	for ( var i = 0; i < linksList.length; ++i )
	{
		var currentLink = linksList[ i ];
		contents += "<li><a href='" + currentLink.href + "'>" + 
			currentLink.innerHTML + "</li>";
	} // end for

	contents += "</ul>";
	document.getElementById( "links" ).innerHTML = contents;
} // end function processLinks

window.addEventListener( "load", processLinks, false );