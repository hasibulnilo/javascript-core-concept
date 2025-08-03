/*
* 5. Loops
    * for
    * while
    * do...while
    👉 break
    👉 continue

  for(init val; condition; update){
  // code goes here
  }
  9 * 1 = 9
  9 * 2 = 18

*/
// var count = 5
// for (var a = 1; a <= count; a++) {
// 	console.log('Count: ', a)
// }

// var num = 99
// for (var i = 1; i <= 10; i++) {
// 	// 9 * 2 = 18
// 	// var result = num + ' * ' + i + ' = ' + i * num
// 	// console.log(typeof result)
// }
// let i = 1
// while (i <= 5) {
// 	console.log('count: ', i)
// 	i++
// }

// do..while loop
// let i = 5
// do {
// 	console.log('count: ', i)
// 	i++
// } while (i < 5)

// for (let i = 1; i < 10; i++) {
// 	if (i === 5) {
// 		break
// 	}
// 	console.log(i)
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 5 || i === 8) {
// 		continue
// 	}
// 	console.log(i)
// }

// 6. Strings
//     * String
//     * Immutable
//     * toLowerCase, toUpperCase, trim
//     * slice, concat, includes
//     * Reverse a string

// var message = 'hello'

// var firstCh = message[0].toUpperCase()
// var restCh = message.slice(1) // first index, last index. a + b
// console.log(firstCh + restCh)

// var text = 'Javascript is awesome'
// console.log(text.includes('javascript')) // true/false
// var sentence = 'Hello world, welcome to the universe.'
// var convertSent = sentence.toLowerCase()
// if (convertSent.includes('hello')) {
// 	console.log('Found')
// } else {
// 	console.log('Not Found')
// }

// Reverse a string
// var text = 'Javascript is awesome'
// var temp = ''
// for (var i = 0; i < text.length; i++) {
// 	// console.log(text[i])
// 	temp = text[i] + temp
// }
// console.log(temp)
// 9. Objects
//     * Properties
//     * Methods
//     * Nesting
//     * Looping
var name = 'ismail'
var person = {
	name: 'ismail', //* key : value  = properties
	age: 20,
	isStudent: true,
	address: {
		city: 'Barishal',
		country: 'Bangladesh',
	},
}
// console.log(person)
// dot notation .
// console.log(person.name)

//  array notation []
// person['age'] = 25
// console.log(person.address.country)

// delete person.address
// console.log(person)
// for (var key in person) {
// 	console.log(key)
// 	console.log(key + ':', person[key])
// }

//

// Problem 01:
// =============
// একটি নতুন সিনেমা হলের জন্য একটি সিট প্ল্যানার তৈরি করতে হবে এই সিনেমা হলে সিটগুলো এমনভাবে ডিজাইন করা হয়েছে যে, যদি সিট নাম্বার ৩ বা ৫ ধারা বিভাজ্য হয় এবং কোন ভাগশেষ না হয় তাহলে সেটা  'প্রিমিয়াম' সিট হিসেবে গন্য হবে। অর্থাৎ, সিট নং যদি ১ হয় তাহলে সেটা হবে নরমাল সিট, যদি সিট নাম্বার হয় ৩/৫ তাহলে সেটা হবে প্রিমিয়াম সিট

// Problem: আপনার কাজ হলো একটি প্রোগ্রাম তৈরি করা, যা মোট সিট সংখ্যা (totalRows) নেবে এবং প্রতিটি সিট জন্য এটি 'নরমাল সিট' (Normal Row) নাকি 'প্রিমিয়াম সিট' (Premium Row) তা প্রিন্ট করবে। Row 1 - Normal Row, Row 4 - Premium Row

// ADVANCED: যদি সিট নরমাল হয় তাহলে প্রাইজ হবে ৫০০ টাকা আর যদি প্রিমিয়াম সিট হয় তাহলে প্রাইজ হবে ৮০০ টাকা। আপনাকে ক্যালকুলেট করে বের করতে হবে এক শোতে মোট কত টাকা আয় হবে উদাঃ Total Income: 5000 Taka
// normal:
// const totalRows = 20; // মোট কতটি সিট থাকবে
// for (let row = 1; row <= totalRows; row++) {
//     if (row % 3 === 0 || row % 5 === 0) {
//         console.log("Row " + row + " - Premium Row");
//     } else {
//         console.log("Row " + row + " - Normal Row");
//     }
// }

// =======================================================
// Advanced:
// const totalRows = 20; // মোট সিট সংখ্যা
// let totalIncome = 0;

// for (let row = 1; row <= totalRows; row++) {
//     if (row % 3 === 0 || row % 5 === 0) {
//         console.log("Row " + row + " - Premium Row (800 Taka)");
//         totalIncome += 800;
//     } else {
//         console.log("Row " + row + " - Normal Row (500 Taka)");
//         totalIncome += 500;
//     }
// }
// console.log("Total Income: " + totalIncome + " Taka");



// 
// Problem 02 : প্রোডাক্ট ট্যাগিং
// একটি অনলাইন স্টোরের জন্য আপনাকে একটি প্রোগ্রাম লিখতে হবে (productDescription) যেটা (স্ট্রিং) ইনপুট নেবে যা প্রোডাক্ট details দেখে স্বয়ংক্রিয়ভাবে কিছু ট্যাগ (Tag) অ্যাড করবে। যেমনঃ

// details

// যদি details এ "cotton" শব্দটি থাকে , তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Material: Cotton".

// যদি details এ "sale" শব্দটি থাকে , তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Category: Sale Item".

// যদি details এ "new arrival"  শব্দ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Status: New Arrival".

// যদি details এ "limited edition"  শব্দগুচ্ছ থাকে, তাহলে প্রোগ্রাম আউটপুটে দেখাবে "Availability: Limited".

// যদি কোনো শর্তই পূরণ না হয়, তাহলে একটি ডিফল্ট ট্যাগ "Tag: General"

// ADVANCED: কেস ইনসেনসিটিভ Handle করো।



// let details = "This is a new arrival Limited Edition Cotton Shirt on SALE.";

// // সব শব্দকে ছোট হরফে কনভার্ট করি
// let text = details.toLowerCase();

// let tagged = false;

// if (text.includes("cotton")) {
//     console.log("Material: Cotton");
//     tagged = true;
// }
// if (text.includes("sale")) {
//     console.log("Category: Sale Item");
//     tagged = true;
// }
// if (text.includes("new arrival")) {
//     console.log("Status: New Arrival");
//     tagged = true;
// }
// if (text.includes("limited edition")) {
//     console.log("Availability: Limited");
//     tagged = true;
// }

// if (!tagged) {
//     console.log("Tag: General");
// }













// // Problem 03:
// একটি নতুন কোম্পানি, "AlphaCorp", তাদের employee দেরকে তাদের ডেটাবেজে একসেস দেওয়ার জন্য স্বয়ংক্রিয়ভাবে একটি Unique Employee username তৈরি করতে চায়। এই username employee দের কিছু ব্যক্তিগত তথ্যের উপর ভিত্তি করে তৈরি হবে।

// আপনাকে একটি প্রোগ্রাম লিখতে হবে যা একটি employee নামে অবজেক্ট ইনপুট নেবে, যেখানে কর্মীদের তথ্য নিম্নলিখিতভাবে থাকবে:
// { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" }

// // Output:
// username: doe101@alphacorp.com

// নিয়মাবলী:
// 👉 প্রথমে lastName এর প্রথম তিনটি অক্ষর ছোট হাতের হবে।
// 👉 তারপরে employeeId হবে।
// 👉 এরপরে @ হবে
// 👉 এরপরে কোম্পানি নাম ছোট হাতের হবে
// 👉 সর্বশেষে .com হবে।



// ADVANCED: username পাশাপাশি একটি Temporary Password বানাবে
// 👉 যদি lastName তিন অক্ষরের কম হয়, তাহলে lastName এর সব অক্ষর ব্যবহার করা হবে।
// 👉 for Password generate use firstname last 3 char + # + departmentCode

// // Output:
// ID: doe101@alphacorp.com, TempPass: jn1#AC


// normal:

var employee = { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "HR" };

// Username তৈরি (lastName তিন অক্ষরের কম কিনা চেক করে)
var lastNamePart = employee.lastName.length < 3
  ? employee.lastName.toLowerCase()
  : employee.lastName.slice(0, 3).toLowerCase();

var idPart = employee.employeeId;
var companyPart = "alphacorp";

var username = lastNamePart + idPart + "@" + companyPart + ".com";
console.log(username);


// temp password: firstName এর শেষ ৩ অক্ষর (বা কম হলে পুরো নাম), ছোট হাতের + "#" + departmentCode বড় হাতের

var employee = { firstName: "John", lastName: "Doe", employeeId: 101, departmentCode: "AC" };

// Username তৈরি (lastName তিন অক্ষরের কম কিনা চেক করে)
var lastNamePart = employee.lastName.length < 3
  ? employee.lastName.toLowerCase()
  : employee.lastName.slice(0, 3).toLowerCase();

var idPart = employee.employeeId;
var companyPart = "alphacorp";

var username = lastNamePart + idPart + "@" + companyPart + ".com";

var fName = employee.firstName;
var firstNamePart;
if (fName.length < 3) {
  firstNamePart = fName.toLowerCase();
} else {
  firstNamePart = fName.slice(fName.length - 3).toLowerCase();
}

var tempPass = firstNamePart + "#" + employee.departmentCode.toUpperCase();
// Output
console.log("ID: " + username + ", TempPass: " + tempPass);

