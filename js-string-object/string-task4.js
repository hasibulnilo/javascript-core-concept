// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


const input = "Xenon and xylophone";

// Replace all lowercase 'x' with 'y' and uppercase 'X' with 'Y'
let newStr = input.replace(/x/g, 'y').replace(/X/g, 'Y');

console.log(newStr);  // Output: "Yenon and yylophone"

