document.writeln("<h1>Project 7  --  Week's Retail Value</h1>");

//window.alert("Hello from a window alert!");

var input = "";
var temp = "";
var productNumber = "";
var productQuantity = "";
var unitPrice = "";
var totalPrice

do {
	productNumber = window.prompt("ENTER PRODUCT NUMBER: ");
	productQuantity = window.prompt("ENTER PRODUCT QUANTITY: ");

	switch (productNumber)
	{
		case "1":
			unitPrice = parseFloat(2.98);
			totalPrice = parseFloat(productQuantity) * parseFloat(unitPrice);
			break;
		
		case "2":
			unitPrice = parseFloat(4.5);
			totalPrice = parseFloat(productQuantity) * parseFloat(unitPrice);
			break;
		
		case "3":
			unitPrice = parseFloat(9.98);
			totalPrice = parseFloat(productQuantity) * parseFloat(unitPrice);
			break;
		
		case "4":
			unitPrice = parseFloat(4.49);
			totalPrice = parseFloat(productQuantity) * parseFloat(unitPrice);
			break;
		
		case "5":
			unitPrice = parseFloat(6.87);
			totalPrice = parseFloat(productQuantity) * parseFloat(unitPrice);
			break;
  }
	  productNumber = parseFloat(productNumber).toFixed(2);
	  productQuantity = parseFloat(productQuantity).toFixed(2);
	  unitPrice = parseFloat(unitPrice).toFixed(2);
	  totalPrice = parseFloat(totalPrice).toFixed(2);
	document.writeln("<br>PRODUCT: " + productNumber);
	document.writeln("<br>QUANTITY: " + productQuantity);
	document.writeln("<br>PRICE: $" + unitPrice);
	document.writeln("<br>TOTAL: $" + totalPrice + "<br>");
	
	input = window.prompt("PRESS ENTER TO CONTINUE OR Q TO STOP ENTERING VALUES");
} while ( input != "q" );