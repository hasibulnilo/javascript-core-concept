// /*** 

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

// // 

// Import prompt-sync
const prompt = require('prompt-sync')();

// Ask user for input
let weight = parseFloat(prompt("Enter your weight in kilograms: "));
let height = parseFloat(prompt("Enter your height in meters: "));

// Calculate BMI
let bmi = weight / (height * height);

// Output BMI
console.log(`Your BMI is: ${bmi.toFixed(2)}`);

// Nested if-else to determine health category
if (bmi < 18.5) {
  console.log("You are underweight.");
} else {
  if (bmi <= 24.9) {
    console.log("You are normal.");
  } else {
    if (bmi <= 29.9) {
      console.log("You are overweight.");
    } else {
      console.log("You are obese.");
    }
  }
}


