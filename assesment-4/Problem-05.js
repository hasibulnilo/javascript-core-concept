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
