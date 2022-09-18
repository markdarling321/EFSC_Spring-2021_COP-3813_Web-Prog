document.writeln("<h1>Hello!</h1>");

//window.alert("Hello from a window alert!");

var input = "";
var accountNumber = "";
var currentBalance = 0;
var totalMonthCharges = 0;
var totalMonthCredits = 0;
var creditLimit = 0;
var newBalance = 0;

accountNumber = window.prompt("ENTER ACCOUNT NUMBER: ");
document.writeln("ACCOUNT NUMBER: #" + accountNumber);

input = window.prompt("WHAT IS YOUR CURRENT CREDIT LIMIT? $");
creditLimit = parseFloat(input);
document.writeln("<br>(+) CURRENT CREDIT LIMIT: $" + creditLimit);

input = window.prompt("WHAT IS YOUR CURRENT BALANCE? $");
currentBalance = parseFloat(input);
document.writeln("<br><br>(-) CURRENT BALANCE OWED: $" + currentBalance);

input = window.prompt("WHAT ARE YOUR TOTAL MONTHLY CHARGES? $");
totalMonthCharges = parseFloat(input);
document.writeln("<br>(-) TOTAL MONTHLY CHARGES: $" + totalMonthCharges);

input = window.prompt("WHAT ARE YOUR TOTAL MONTHLY CREDITS? $");
totalMonthCredits = parseFloat(input);
document.writeln("<br>(+) TOTAL MONTHLY CREDITS: $" + totalMonthCredits);



document.writeln("<br><br><br><br>CALCULATING RESULTS...<br><br><br><br>");
newBalance = currentBalance + totalMonthCharges - totalMonthCredits;

if (newBalance < 0)
{
	document.writeln("WARNING! YOU OVER-PAID YOUR BALANCE!<br><br>");
	document.writeln(" NEW BALANCE: $" + newBalance);
	document.writeln("<br>__________________________<br>");
	document.writeln("CREDIT LIMIT: $" + creditLimit);
}
else if (newBalance == 0)
{
  document.writeln("PERFECT! YOU PAID YOUR BALANCE OFF COMPLETELY!<br><br>");
  document.writeln("NEW BALANCE: $" + newBalance);
  document.writeln("<br>__________________________<br>");
  document.writeln("CREDIT LIMIT: $" + creditLimit);
}
else if (newBalance > 0 && newBalance < creditLimit)
{
  document.writeln("EVERYTHING LOOKS GOOD!<br><br>");
  document.writeln("NEW BALANCE: $" + newBalance);
  document.writeln("<br>__________________________<br>");
  document.writeln("CREDIT LIMIT: $" + creditLimit);
}
else if (newBalance > 0 && newBalance == creditLimit)
{
  document.writeln("CREDIT LIMIT REACHED! PHWEW, THAT WAS CLOSE!!!<br><br>");
  document.writeln("NEW BALANCE: $" + newBalance);
  document.writeln("<br>__________________________<br>");
  document.writeln("CREDIT LIMIT: $" + creditLimit);
}
else if (newBalance > 0 && newBalance > creditLimit)
{
  document.writeln("WARNING! CREDIT LIMIT EXCEEDED!!!<br><br>");
  document.writeln("NEW BALANCE: $" + newBalance);
  document.writeln("<br>__________________________<br>");
  document.writeln("CREDIT LIMIT: $" + creditLimit);
}