// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]


const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

// Loop through each student and print name and marks
for (const student of students) {
  console.log('Name: '+student.name, 'Marks: '+ student.marks);
}

