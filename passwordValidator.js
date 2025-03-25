const readlineSync = require('readline-sync');

// Function to check if password meets all conditions
function isValidPassword(password) {
    let hasUppercase = false;
    let hasNumber = false;

    if (password.length < 8) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (!hasUppercase && char === char.toUpperCase() && isNaN(char)) {
            hasUppercase = true;
        }
        if (!hasNumber && !isNaN(char)) {
            hasNumber = true;
        }
    }

    return hasUppercase && hasNumber;
}

// Prompt until a valid password is entered
let password;
do {
    password = readlineSync.question("Enter a password: ");

    if (isValidPassword(password)) {
        console.log("✅ Success! Your password is valid.");
    } else {
        console.log("❌ Invalid password. It must be at least 8 characters long, contain at least one uppercase letter, and one number.");
    }

} while (!isValidPassword(password));
