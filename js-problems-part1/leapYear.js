// year wiil be leap year if the year is divisible by 4.

//simple logic
function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLipi = isLeapYear(2043);

// console.log(isLipi);

//those year that is not divisible by 100, if the year is divisible by 4:then it will be a leap year.
//those year that is divisible by 100 & divisible by 400 it will be leap year.
function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  // if(year % 100 === 0 && year % 400 === 0){
  //     return true;
  //} return false;
  else if (year % 100 === 0 && year % 400 === 0) { //sudu 400 diye divisible korleo hoi 100 diye nah korleo hbe!
    return true;
  } else {
    return false;
  }
}

const isLeap = isLeapYear2(2100);

const isLeap2 = isLeapYear2(2400);

const isLeap3 = isLeapYear2(1900);

const isLeap4 = isLeapYear2(2052);

console.log(isLeap, isLeap2, isLeap3, isLeap4);
