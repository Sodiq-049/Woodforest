const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

loginLink.addEventListener('click', ()=> {
    container.classList.add('active');
});

registerLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

// function checkPasswordStrength(password) {
//     const lengthRegex = /.{8,}/;
//     const uppercaseRegex = /[A-Z]/;
//     const numberSymbolRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;

//     const lengthCheck = lengthRegex.test(password);
//     const uppercaseCheck = uppercaseRegex.test(password);
//     const numberSymbolCheck = numberSymbolRegex.test(password);

//     let strengthMessage = "Password must contain at least 8 characters.&nbsp;";

//     if (lengthCheck) {
//         strengthMessage += "<br>Password strength: ";

//         if (numberSymbolCheck) {
//                 strengthMessage += "Strong.";
//                 document.getElementById("passwordMessage").className = "strong";
//             } else {
//                 strengthMessage += "Weak.<br>Most contain a number and symbol.";
//                 document.getElementById("passwordMessage").className = "weak";
//             }
        
//         if (uppercaseCheck) {
//             strengthMessage += "Strong.";
//             document.getElementById("passwordMessage").className = "strong"; 
//         } else {
//             strengthMessage += "<br>Must contain an uppercase letter.";
//             document.getElementById("passwordMessage").className = "weak";
//         }
//     } else {
//         document.getElementById("passwordMessage").className = ""; // Clear the class
//     }

//     document.getElementById("passwordMessage").innerHTML = strengthMessage;
// }
