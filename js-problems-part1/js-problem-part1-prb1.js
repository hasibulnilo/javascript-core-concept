// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit


function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(0));   // Output: 32
console.log(celsiusToFahrenheit(25));  // Output: 77