// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


// Step 1: Declare an array of 3 tourist destinations
let touristDestinations = ['Cox’s Bazar', 'Sundarbans', 'Saint Martin'];

// Step 2: Add a new tourist destination
touristDestinations.push('Bandarban');

// Step 3: Add two more tourist destinations
touristDestinations.push('Sajek', 'Kuakata');

// Step 4: Remove the last tourist destination added
touristDestinations.pop(); // removes 'Kuakata'

// Step 5: Display the final array
console.log("Final tourist destinations:", touristDestinations);
