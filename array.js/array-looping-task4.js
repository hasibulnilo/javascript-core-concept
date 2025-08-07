// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';

const words = statement.split(' ');        // স্ট্রিং → শব্দে ভাঙা
const reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);            // পেছন থেকে শব্দ গুলো একে একে নেওয়া
}

const reversedStatement = reversedWords.join(' ');  // শব্দগুলো → একসাথে জোড়া
console.log(reversedStatement);


// another

const statement2 = 'I am a hard working person';

console.log(statement.split(' ').reverse().join(' '));
