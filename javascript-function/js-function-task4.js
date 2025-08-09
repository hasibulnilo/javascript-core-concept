//Task-4

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
  let count = 0;
  for (let char of binaryString) {
    if (char === "0") {
      count++;
    }
  }
  return count;
}

console.log(count_zero("1010100")); // Output: 4
