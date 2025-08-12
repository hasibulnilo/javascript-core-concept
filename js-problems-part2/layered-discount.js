/*
 *first100 --> 100
 *101To200 --> 90
 *above200 --> 70
 *
 */

function layeredDiscountedTotal(quantity) {
  const first100price = 100;
  const second100Price = 90;
  const avobe200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100price;
    const reamainingQuantity = quantity - 100;
    const reamainingTotal = reamainingQuantity * second100Price;
    const total = first100Total + reamainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100price;
    const second100Total = 100 * second100Price;
    const reamainingQuantity = quantity - 200;
    const reamainingTotal = reamainingQuantity * avobe200Price;
    const total = first100Total + second100Price + reamainingTotal;
    return total;
  }
}

const total = layeredDiscountedTotal(50);
console.log(total);
