// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, size) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / size;
}

// উদাহরণ:
const arr = [10, 20, 30, 40, 50];
console.log(make_avg(arr, arr.length)); // Output: 30
