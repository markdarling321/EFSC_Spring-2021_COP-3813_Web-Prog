document.writeln("<h1>Simple Calculations</h1>");

//window.alert("Hello from a window alert!");

var temp = "";
var number001 = "";
var number001 = "";

number001 = window.prompt("ENTER 1st NUMBER: ");
document.writeln("<br>1st NUMBER: " + number001);

number002 = window.prompt("ENTER 2nd NUMBER: ");
document.writeln("<br>2nd NUMBER: " + number002);

document.writeln("<br>The sum of " + number001 + " and " + number002 + " is: ");
temp = parseFloat(number001) + parseFloat(number002);
document.write(temp);

document.writeln("<br>The difference of " + number001 + " and " + number002 + " is: ");
temp = parseFloat(number001) - parseFloat(number002);
document.write(temp);

document.writeln("<br>The product of " + number001 + " and " + number002 + " is: ");
temp = parseFloat(number001) * parseFloat(number002);
document.write(temp);

document.writeln("<br>The average of " + number001 + " and " + number002 + " is: ");
temp = parseFloat((parseFloat(number001) + parseFloat(number002))/2);
document.write(temp);