// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // 3 (e, o, o)
console.log(countVowels("Javascript")); // 3 (a, a, i)
