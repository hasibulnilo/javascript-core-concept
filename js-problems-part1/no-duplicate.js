/*
 *array has some duplicate elements
 *[]
 */





function noDuplicate(array) {
  const unique = [];

  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }

  return unique;
}
const biriyaniKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const uniqueArray = noDuplicate( biriyaniKhor);
// const numbers = [1, 5, 61, 5, 87, 7];
console.log(uniqueArray);
