let str = "hello world! this is chatgpt.";
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}

let capitalizedStr = words.join(' ');

console.log(capitalizedStr);
// Output: "Hello World! This Is Chatgpt."