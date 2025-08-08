// create function that will return only the even numbers.
// return the sum of even.
//
//
//
//

function evenNumbersOnly(numbers) {
  let evens = [];

  // console.log(numbers);

  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log ("the even number is :", evens);
function sumOfEvenNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const number = [5, 8, 91, 24, 6];
const evens = sumOfEvenNumber(number);
console.log("sum of evens number",evens);
