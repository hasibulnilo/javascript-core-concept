/*
 *chair --->3cft
 *table --->1cft
 *bed --->50cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perchairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const allChairWood = chairQuantity * perchairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalwood = bedQuantity * perBedWood;



  const totalWood = allChairWood + tableTotalWood + bedTotalwood; 

  return totalWood;
} 

const wood = woodQuantity(0,0,1);
console.log('wood needed', wood);


