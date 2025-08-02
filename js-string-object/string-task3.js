//Check whether a string contains all the vowels a, e, i, o, u


function containsAllVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerStr = str.toLowerCase();

  // Check if every vowel is present in the string
  return vowels.every(vowel => lowerStr.includes(vowel));
}

// Example usage:
const testStr = "Education is awesome!";
console.log(containsAllVowels(testStr));  // true

const testStr2 = "Hello World";
console.log(containsAllVowels(testStr2)); // false
