/** Problem -01 ( Divide the Asset ) */

var area = 2060;

//write your code here

var sharein2Brothers = area / 2;

console.log(sharein2Brothers);

/** Problem -02 ( Cycle or Laptop ) */

var money = 45000;

//write your code here

if (money >= 25000) {

console.log("Laptop");

} else if (money >= 10000) {

console.log("Cycle");

} else {

console.log("Chocolate");

}

/** Problem -03 ( Medicine Planner ) */

var lastDay = 6;

//write your code here

for (var day = 1; day <= lastDay; day++) {

if (day % 3 === 0) {

console.log(day + " - medicine");

} else {

console.log(day + " - rest");

}

}

/** Problem 04 - (Delete / Store) */

var fileName = "#exp.mp4";

//write your code here

var firstChar1 = fileName[0];

var last_3 = fileName.slice(-3);

var last_4 = fileName.slice(-4);

if (firstChar1 === "#" || last_3 === "pdf" || last_4 === "docx") {

console.log("Store");

} else {

console.log("Delete");

}

/** Problem 05 - ( PH Email Generator ) */

var student = { name: "monu", roll: 99, department: "eee" };

//write your code here

var email =

student["name"] + student["roll"] +"."+ student["department"] + "@ph.ac.bd";

console.log(email);

/** Problem 06 : (Current Salary ) */

var experience = 40;

var startingSalary = 30000;

//write your code here

for (var i = 1; i <= experience; i++) {

startingSalary = startingSalary + (startingSalary * 0.05);

}

var currentSalary = startingSalary;

console.log(currentSalary.toFixed(2));