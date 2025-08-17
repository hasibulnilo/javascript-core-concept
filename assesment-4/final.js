// Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {

// You have to write your code here

if (typeof fare !== "number" || fare <= 0) {

return "Invalid";

}

let sarCharge = fare * (20/ 100);

let serviceCharge = 30;

let totals = fare + sarCharge + serviceCharge;

return totals;

}

// // SAMPLE OUTPUT ( number / invalid )

// console.log(totalFine(200));

// console.log(totalFine(0));

// console.log(totalFine(50));

// console.log(totalFine(552));

// console.log(totalFine(-35));

// console.log(totalFine("65"));

// console.log(totalFine("Gorib tai ticket katinai"));

// Problem-02 : Clean & Capitalize Characters.

function onlyCharacter(str) {

// You have to write your code here

if (typeof str !== "string") {

return "Invalid";

}

let result_1 = "";

for (let i = 0; i < str.length; i++) {

let character = str[i];

if (character !== " ") {

result_1 = result_1 + character.toUpperCase();

}

}

return result_1;

}

// // SAMPLE OUTPUT (string)

// console.log(onlyCharacter(" h e llo wor ld"));

// console.log(onlyCharacter("Cy bar- At tac k "));

// console.log(onlyCharacter(" ha ck m e 1 @ru.c n "));

// console.log(onlyCharacter("Serv er : : Do wn"));

// console.log(onlyCharacter(["hack", "me"]));

// console.log(onlyCharacter(true));

//Problem-03 : FIFA Best Team Award.

function bestTeam(player1, player2) {

// You have to write your code here

if (

typeof player1 !== "object" ||

typeof player2 !== "object" ||

player1 === null ||

player2 === null

) {

return "Invalid";

}

let total1 = player1.foul + player1.cardY + player1.cardR;

let total2 = player2.foul + player2.cardY + player2.cardR;

if (total1 < total2) {

return player1.name;

} else if (total2 < total1) {

return player2.name;

} else {

return "Tie";

}

}

// // SAMPLE OUTPUT (string)

// console.log(

// bestTeam(

// { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },

// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }

// )

// );

// console.log(

// bestTeam(

// { name: "Germany", foul: 12, cardY: 0, cardR: 0 },

// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }

// )

// );

// console.log(

// bestTeam(

// { name: "Germany", foul: 10, cardY: 1, cardR: 1 },

// { name: "France", foul: 10, cardY: 2, cardR: 1 }

// )

// );

// console.log(

// bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")

// );

// Problem-04: Same Same But Different.

function isSame(arr1, arr2) {

// You have to write your code here

if (!Array.isArray(arr1) || !Array.isArray(arr2)) {

return "Invalid";

}

if (arr1.length !== arr2.length) {

return false;

}

for (let i = 0; i < arr1.length; i++) {

if (arr1[i] !== arr2[i]) {

return false;

}

}

return true;

}

// // SAMPLE OUTPUT (boolean/string)

// console.log(isSame([1, 2, 3], [1, 2, 3]));

// console.log(isSame([34, 5, 7, 9], [34, 5, 7]));

// console.log(isSame([1, undefined, 3], [1, null, 3]));

// console.log(isSame([1, 4, 5], [1, 4, 5]));

// console.log(isSame([1, "4", 4], [1, 4, 4]));

// console.log(isSame([2, 5, 6], 256));

// console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));

// Problem-05: Exam Result Report Generator.

function resultReport(marks) {

// You have to write your code here

if (!Array.isArray(marks)) {

return "Invalid";

}

if (marks.length == 0) {

return { finalScore: 0 , pass: 0, fail: 0 };

}

let passCount = 0;

let failCount = 0;

let total = 0;

for (let i = 0; i < marks.length; i++) {

let mark = marks[i];

total = total + mark;

if (mark >= 40) {

passCount++;

} else {

failCount++;

}

}

let avg = Math.round(total / marks.length);

return {

finalScore: avg,

pass: passCount,

fail: failCount,

};

}

// // SAMPLE OUTPUT ( object / string )

// console.log(resultReport([]));

// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));

// console.log(resultReport([99, 87, 67, 12, 87]));

// console.log(resultReport([99]));

// console.log(resultReport(100));