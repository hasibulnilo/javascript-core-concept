// console.log('today we will  learning function');

function hello() {
  // function body
  console.log("i am a function");
}

// hello(); //function keh call ditesi

function moneybag() {
  var money = 4500;

  console.log("I have " + money + " taka");
}
// moneybag();

function jogkorarmachine(input1, input2) {
  let sum = input1 + input2;
  console.log("Sum is:", sum);
  return sum;
}

const result = jogkorarmachine(10, 20);

console.log(result);

// multiplication


function gunkorarmachine(input1, input2) {
  let mul = input1 * input2;
  console.log("multiplication is:", mul);
  return mul;
}

const result2 = gunkorarmachine(10, 20);

console.log(result2);