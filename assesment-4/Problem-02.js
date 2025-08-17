// Problem-02 : Clean & Capitalize Characters.

function onlyCharacter(str) {
  // You have to write your code here

  if (typeof str !== "string") {
    return "Invalid";
  }
  let result_1 = "";
  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (character !== " ") {
      result_1 = result_1 + character.toUpperCase();
    }
  }

  return result_1;
}


// // SAMPLE OUTPUT (string)  
// console.log(onlyCharacter("  h e llo wor   ld"));
// console.log(onlyCharacter("Cy   bar- At  tac k  "));
// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
// console.log(onlyCharacter("Serv er : : Do wn"));
// console.log(onlyCharacter(["hack", "me"]));
// console.log(onlyCharacter(true));
