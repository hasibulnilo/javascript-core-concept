// /***

// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk
// */

const prompt = require('prompt-sync')();
let burgerPrice = parseFloat(prompt("Enter the total burger price (Tk):"));

if (burgerPrice > 500) {
  console.log("You get a free Coke!");
} else {
  console.log("Coke price: 30 Tk");
}
             