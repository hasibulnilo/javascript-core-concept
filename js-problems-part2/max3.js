const jim = 56;
const tim = 89;
const kim = 368;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the boss");
} else {
  console.log("kim is the kardashians");
}

//alternative easy way

const max = Math.max(12, 1, 56);
console.log("max issuing Math.max", max);
