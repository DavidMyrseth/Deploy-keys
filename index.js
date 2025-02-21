function btn_clicked(){
    const useNumbers = document.getElementById('use-numbers').checked;
    const useUppercase = document.getElementById('use-uppercase-letters').checked;
    const useSpecialSymbols = document.getElementById('use-special-symbols').checked;
    const passwordLength = parseInt(document.getElementById('password-length').value);

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialSymbols = '!@#$%^&*';
    let characters = lowercaseLetters;

    if (useNumbers) {
        characters += numbers;
    }
    if (useUppercase) {
        characters += uppercaseLetters;
    }
    if (useSpecialSymbols) {
        characters += specialSymbols;
    }

    function generatePassword() {
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }
        return password;
    }

    const password = generatePassword();
    document.getElementById('password').textContent = password;
}
