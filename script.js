const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nuber = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + nuber + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nuber[Math.floor(Math.random() * nuber.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length) {
       password += allChars[Math.floor(Math.random() * allChars.length)]; 
    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}