// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(
  findLongestWord("I am learning Programming to become a programmer")
);
// Output: Programming
