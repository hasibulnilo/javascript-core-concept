// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const heights2 = [167, 190, 120, 165, 137];

let lowest = heights2[0]; // Assume first element is the smallest

for (let height of heights2) {
  if (height < lowest) {
    lowest = height;
  }
}

console.log("Lowest number is:", lowest);

