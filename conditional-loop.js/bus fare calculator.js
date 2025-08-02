/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Base fare for a regular ticket
const baseFare = 800;

// Take user input
const age = parseInt(prompt("Enter your age: "));
const studentStatus = prompt("Are you a student? (yes/no): ").toLowerCase();

// Initialize ticket s
let ticketFare = baseFare;

// Apply fare rules
if (age < 10) {
  ticketFare = 0; // Children ride free
} else if (studentStatus === "yes") {
  ticketFare = baseFare * 0.5; // 50% discount for students
} else if (age >= 60) {
  ticketFare = baseFare * 0.85; // 15% discount for seniors
}

// Show result
console.log(`\n🎟️ Your ticket fare is: ${ticketFare} Taka`);