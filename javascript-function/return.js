function TenTimes(number) {
  const result = number * 10;
  return result;
}

function cutHalf(number) {
  const half = number / 2;

  return half;
}

TenTimes(5); //not working beacuse for return function. 

const output = TenTimes(5);
console.log(output);
