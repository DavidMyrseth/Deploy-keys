// Password generation function
function generatePassword(length, useNumbers, useUppercase, useSpecialChars) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characters = lowerCaseLetters;

    if (useNumbers) characters += numbers;
    if (useUppercase) characters += upperCaseLetters;
    if (useSpecialChars) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

// Copy password to clipboard
function copyToClipboard() {
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            alert('Parool kopeeritakse lõikelauale!');
        })
        .catch(err => {
            alert('Kopeerimisviga: ' + err);
        });
}

// Event listeners for buttons
function PasswordSecurity(password) {
    const securityMessage = document.getElementById('security-message');

    if (password.length < 8) {
        securityMessage.textContent = "Nõrk parool";
        securityMessage.style.color = "red";
    } else {
        securityMessage.textContent = "Hea parool";
        securityMessage.style.color = "green";
    }
}
//
document.getElementById('generate-btn').addEventListener('click', function() {
    const passwordLength = parseInt(document.getElementById('password-length').value);
    const useNumbers = document.getElementById('use-numbers').checked;
    const useUppercase = document.getElementById('use-uppercase-letters').checked;
    const useSpecialChars = document.getElementById('use-special-symbols').checked;

    if (passwordLength < 6 || passwordLength > 120) {
        alert('Salasõna pikkus peaks olema vahemikus 6 kuni 120 tähemärki.!');
        return;
    }

    const password = generatePassword(passwordLength, useNumbers, useUppercase, useSpecialChars);
    document.getElementById('password').textContent = password;

    PasswordSecurity(password);
});

document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

