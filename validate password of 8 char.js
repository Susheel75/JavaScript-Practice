/* 

Write a function to validate a password that is at least
8 characters long and contains an
uppercase letter, a lowercase letter, a digit, and a 
special character

*/

function validatePassword(password) {

    if (password.length < 8) {
        return false;
    }

    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}

var a = 'Sush8081';
var b = 'Sush8081@';
var c = 'Sush8081@#';
var d = 'Susheel';
console.log(validatePassword(a));
console.log(validatePassword(b));
console.log(validatePassword(c));
console.log(validatePassword(d));
