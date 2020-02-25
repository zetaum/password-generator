// Special characters for the password created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generate')

// Add event listener to generate button
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

