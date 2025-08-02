// Count how many times a string has the letter a or A


const str = "Ariana Grande is a great Artist";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'A') {
    count++;
  }
}

console.log("Total 'a' or 'A':", count);