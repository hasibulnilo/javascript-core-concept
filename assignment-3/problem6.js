/** Problem 06 :  (Current Salary )  */ 
var experience = 40; 
var startingSalary = 30000; 
//write your code here 
 
 
 for (var i = 1; i <= experience; i++){
    
    startingSalary += startingSalary * 0.05;



 }

  var currentSalary = startingSalary.toFixed(2)
  
  console.log(currentSalary);
 
 
 
 