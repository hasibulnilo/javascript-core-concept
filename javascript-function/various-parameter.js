// for a given string tell me whether it has even number of characters or not

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}

// evenSizedString("Dhaka");
// evenSizedString("faka");

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5 , true))

// console.log(doubleOrTriple(3, false) )

//array calling
function numberofElements(numbers) {
  const len = numbers.length;

  return len;
}

// console.log(numberofElements([12,45,78,45,121254,4,6]));

//object calling

function getAge(person) {
  const age = person.age;

  return age;
}

const person1 = {name:"niloy",age:23} ;

console.log(getAge(person1));