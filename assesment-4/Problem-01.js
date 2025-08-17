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



// // SAMPLE OUTPUT  ( number / invalid ) 
// console.log(totalFine(200));
// console.log(totalFine(0)); 
// console.log(totalFine(50)); 
// console.log(totalFine(552)); 
// console.log(totalFine(-35)); 
// console.log(totalFine("65")); 
// console.log(totalFine("Gorib tai ticket katinai")); 
