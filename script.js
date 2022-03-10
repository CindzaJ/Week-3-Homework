// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

 // The different Arrays:
 var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
 
  var resultArray = [];
  var userArray = [];

 //Pop up confirmations
  var numCharacter = prompt ("How many characters would you like between 6 and 128?")
  var numbers = confirm ("Do you want numbers in your password?");
  var uppercases = confirm ("Would you like any Uppercases in your password?");
  var lowercases = confirm ("Would you like any Lowercases in your password?");
  var characters = confirm ("Would you like any Special characters in your password?");
}
// Add event listener to generate button
{generateBtn.addEventListener("click", generatePassword);
  var generatePassword = document.getElementById ("generate password");
}
// Get random index from array of options
function writePassword (l,characters) {
  var password = "";
  for(var i=0; i <l; i++){
    password += characters.charAt((Math.random()*characters.length));
  }
  return password;

}
