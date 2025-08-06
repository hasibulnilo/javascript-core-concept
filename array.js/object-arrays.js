const numbers = [1,2,43,54,4];
const palyers = [{},{},{}];
const employees = [

{name: 'ashik', designation: 'Content Writer', salary: 25000},
{name:'Atik', designation: 'developer', salary: 29000 },
{name:'Abdul rahim', designation: 'digital marketer', salary: 29000}
];


employees[0].name='Niloy';
// console.log(employees[0]);
// console.log(employees[1].salary);
// for( const employee of employees ){

// console.log(employee.salary,employee.designation);

// }



for ( const emp of employees){

const person = emp;

const personInfo = person.name + ': ' + person.salary;

console.log(personInfo);

}