/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


// Load prompt-sync
const prompt = require('prompt-sync')();

// Take input from the user
const num1 = parseFloat(prompt("Enter first number (num1): "));
const num2 = parseFloat(prompt("Enter second number (num2): "));

let result;

// // Using if-else
// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }
// console.log("Result using if-else:", result);

// Using ternary operator
const resultTernary = num1 > num2 ? num1 * 2 : num1 + num2;
console.log("Result using ternary operator:", resultTernary);
