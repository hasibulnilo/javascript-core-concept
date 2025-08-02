// -----------Structure-----------
var biriyaniPrice = 500;
// if (biriyaniPrice < 300)
// {

//     console.log("mama give me somne biriyani");
// }

// else
// {

//     console.log(" dosen't need biriyani");
// }


// multiple js

const salary = 20001;

const isBCS = true;

const height = 71;

const hasCar = true;

// if(salary > 20000 && height > 66 ){

// console.log("Su---patro");
// }


// else{

//     console.log('onno patro khuji');
// }


// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log("eso baba kobul");
// }

// else{
//     console.log("vag tui mukul");
// }
// && condition
if(salary > 20000 && height > 70 && isBCS == true){
    console.log("eso baba kobul");
}

else{
    console.log("vag tui mukul");
}


// --------COMPLEX CONDITION--------

if((salary > 25000 && hasCar == true) || isBCS == true ){
console.log ("tomar 14 gusti raji");
}

else{
    console.log("vag tui mukul");
}


//multilevel condition


const price = 5000;
// 10 % discount
 if(price >= 5000 ){

    const discount = price * 10/ 100;
    const payAmount = price - discount;
console.log(payAmount)
 }

else if (price> 2500){
// 5% discount
const discount = price * 5/ 100;
 const payAmount = price - discount;
console.log(payAmount);
}

else{
    console.log(price);
}