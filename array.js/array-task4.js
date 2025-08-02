
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

// Variables
let names = ['Alice', 'Bob', 'Charlie'];   // array
let age = 25;                              // number
let city = "Dhaka";                        // string
let isStudent = true;                     // boolean
let scores = [85, 92, 78];                // array

// Checking if each is an array
console.log(Array.isArray(names) ? "✅ 'names' is an array." : "❌ 'names' is NOT an array.");
console.log(Array.isArray(age) ? "✅ 'age' is an array." : "❌ 'age' is NOT an array.");
console.log(Array.isArray(city) ? "✅ 'city' is an array." : "❌ 'city' is NOT an array.");
console.log(Array.isArray(isStudent) ? "✅ 'isStudent' is an array." : "❌ 'isStudent' is NOT an array.");
console.log(Array.isArray(scores) ? "✅ 'scores' is an array." : "❌ 'scores' is NOT an array.");
