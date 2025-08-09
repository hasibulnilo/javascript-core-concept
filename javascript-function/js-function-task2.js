// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function processNumber(num) {
  if (num % 2 !== 0) {
    // Odd চেক
    return num * 2;
  } else {
    // Even হলে
    return num / 2;
  }
}

// উদাহরণ:
console.log(processNumber(7)); // Output: 14 (কারণ odd, তাই ×2)
console.log(processNumber(8)); // Output: 4 (কারণ even, তাই ÷2)
