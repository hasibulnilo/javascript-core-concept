// let price = 25;
// let comp_price = price;
// comp_price =20;
// console.log(price);
// console.log(comp_price);



//array or object non-primtive can not be copy in the copy-varible same each other .
const products =[25,25,25];

// const comp_products = products;
 const comp_products = [];


 for (const product of products ){

comp_products .push(product);

 }


comp_products[0] = 15;
products[1]= 55;
  


// console.log(products);

// console.log(comp_products);



const numbers =[1,2,3,4];


// const  new_numbers = Array.from(numbers);

// const new_numbers = [].concat(numbers); 
const new_numbers = [...numbers];


numbers.push(8);

console.log(numbers)
console.log(new_numbers);


//shallow copy vs deep copy

