
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


var first = prompt("enter first number");
var second = prompt("enter second number");
var sum = Number(first) + Number(second);
alert("The sum is: " + sum);


// BONUS: Make a program that can subtract, multiply, and also divide!

var sub = Number(first) - Number(second);
alert("The difference is: " + sub);

var mult = Number(first) * Number(second);
alert("The answer is: " + mult);

var div = Number(first) / Number(second);
alert("The answer is: " + div);