const person = {
    name: 'sodor uddin',
    age: 25,
    profession:'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban','cumilla','dhaka']
}


// console.log(person);
// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);
//braket notation
// thrid braket diye access kora

console.log(person['age'])
const boyos = person['age']
console.log(boyos)



// error
// console.log(person['fav places'])
const keyname = 'profession';
console.log(person[keyname])