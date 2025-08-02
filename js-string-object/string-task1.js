// Count how many times a string has the letter a

const str = "I am Ariana Grande, a popular artist.";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    count++;
  }
}

console.log("Number of 'a':", count);