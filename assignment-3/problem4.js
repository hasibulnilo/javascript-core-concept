/** Problem 04 - (Delete / Store) */
var fileName = "#exp.mp4";
//write your code here

var firstChar1 = fileName[0];

var Last3 = fileName.slice(-3);
var Last4 = fileName.slice(-4);

if (firstChar1 === "#" || Last3 === "pdf" || Last4 === "docx") {
  console.log("Store");
} else {
  console.log("Delete");
}
