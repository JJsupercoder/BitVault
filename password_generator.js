// 1 - nums
// 2 - upperand lowercase alphabets
// 3 - n/2 or n+1/2 string rest int
// 4 - n/3 string 2n/3 special char 3n/3 int
// 5 - Random overloaded 



// var password=document.getElementById("password");

function generatePassword(passwordLength, complexity) {
    var digits = "0123456789";
    var alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!@#$%^&*()";

    var allChars = digits + alphabets +specialCharacters;

    var password = "";
    
    switch (complexity){
        case 1:
            for (var i = 0; i <= passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * digits.length);
                password += digits.substring(randomNumber, randomNumber +1);
            }
            break;

        case 2:
            for (var i = 0; i <= passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * alphabets.length);
                password += alphabets.substring(randomNumber, randomNumber +1);
            }
            break;

        case 3:
            var numOfChars = Math.ceil(passwordLength/2);
            var numOfInt = passwordLength - numOfChars;

            for (var i = 0; i < numOfChars; i++) {
                var randomNumber1 = Math.floor(Math.random() * alphabets.length);
                password += alphabets.substring(randomNumber1, randomNumber1 +1);
            }
            for (var j = 0; j < numOfInt; j++) {
                var randomNumber2 = Math.floor(Math.random() * digits.length);
                password += digits.substring(randomNumber2, randomNumber2 +1);
            }
            break;

        case 4:
            var numOfChars = Math.ceil(passwordLength/3);
            var numOfSpecialChars = Math.ceil((passwordLength - numOfChars)/2);
            var numOfInt = passwordLength - numOfChars - numOfSpecialChars;
            

            for (var i = 0; i < numOfChars; i++) {
                var randomNumber1 = Math.floor(Math.random() * alphabets.length);
                password += alphabets.substring(randomNumber1, randomNumber1 +1);
            }
            for (var j = 0; j < numOfInt; j++) {
                var randomNumber2 = Math.floor(Math.random() * digits.length);
                password += specialCharacters.substring(randomNumber2, randomNumber2 +1);
            }
            for (var j = 0; j < numOfInt; j++) {
                var randomNumber3 = Math.floor(Math.random() * digits.length);
                password += digits.substring(randomNumber3, randomNumber3 +1);
            }
            
            break;

        case 5:
            for (var i = 0; i <= passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * allChars.length);
                password += allChars.substring(randomNumber, randomNumber +1);
            }
            break;

        default:
            break;
    }
    return password;
 }
    

 // document.getElementById("password").value = password;


// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");  
// }