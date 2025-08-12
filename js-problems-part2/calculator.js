function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "operation is not allowed.Only add,sutract,multiply,divide allowed";
  }
}

const result = calculator(8, 7, "add");
console.log(result);

const result2 = calculator(5, 7, "subtract");
console.log(result2);

const result3 = calculator(7, 7, "multiply");
console.log(result3);

const result4 = calculator(8, 8, "divide");
console.log(result4);
