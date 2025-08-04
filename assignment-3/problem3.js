/** Problem -03 ( Medicine Planner ) */ 
var lastDay = 6 ; 
//write your code here 


for (var Day = 1; Day<=lastDay ; Day++ ){
if (Day % 3 ===0 ){

console.log(Day+" - medicine");

}
else{

console.log(Day+ " - rest");

}

}