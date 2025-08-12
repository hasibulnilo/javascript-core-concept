function multiply(num1, num2) {
  if (typeof num1 !== "number") {
    return "please provide a number";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply("h", 7);
// console.log(result);

//---------------------------

function fullName(first, second) {
  if (typeof first !== "string") {
    return "first name should be string";
  } else if (typeof second !== "string") {
    return "second Name should be a string";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName(9, "Sohan");
// console.log(full);

//-------------------------------------

function getPrice(product) {
  if (typeof product !== "object") {
    return "Please provide an object";
  }

  const price = product.price;
  return price;
}

const price = getPrice({ name: "chulkani dandi", price: 35, color: "blue" });
// console.log(price);

//------------------------------------

function getSecond(numbers) {
  if (Array.isArray(numbers) == false) {
    return "please provide a array";
  }

  const second = numbers[1];

  return second;
}

const second = getSecond([13,23,56]);
console.log(second);
