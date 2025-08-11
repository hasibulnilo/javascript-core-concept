const highest = [65, 66, 68, 72, 78, 60, 65];

function getMax(numbers) {
  //  console.log(numbers);
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(highest);

console.log("max value is", max);



//min number

// const lowest = [65, 66, 68, 72, 78, 60, 65];

// function getMax(numbers2) {
//   //  console.log(numbers);
//   let min = numbers2[0];
//   for (const num of numbers2) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// const min = getMax(lowest);

// console.log("min value is", min);
