const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

loginButton.addEventListener('click', (e) => {
    validateAndSubmit(e);
})

function validEmail(){
    let isValidEmail = false;
    const email = emailInput.value.trim();
    if(email.length === 0){
        emailError.innerText = "Please enter an email."
    }
    else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    .test(email) === false){
        emailError.innerText = "Email must be a valid email."
    }
    else{
        emailError.innerText = "";
        isValidEmail = true;
    }
    
    if(!isValidEmail){
        emailInput.classList.add("red-border");
        emailError.style.visibility = "visible";
    }

    return isValidEmail;
}

function validPassword(){
    let isValidPassword = false;
    const password = passwordInput.value.trim();
    if(password.length === 0){
        passwordError.innerText = "Please enter a password."
    }
    else if(password.length < 8){
        passwordError.innerText = "Password must be at least 8 characters."
    }
    else if(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/.test(password) === false){
        passwordError.innerText = "Password must contain at least one uppercase letter, one lowercase letter, and one number."
    }
    else{
        passwordError.innerText = "";
        isValidPassword = true;
    }

    if(!isValidPassword){
        passwordInput.classList.add("red-border");
        passwordError.style.visibility = "visible";
    }

    return isValidPassword;
}



function validateAndSubmit(e){
    e.preventDefault();
    emailError.innerText = "";
    passwordError.innerText = "";
    emailInput.classList.remove("red-border")
    passwordInput.classList.remove("red-border")

    let isValidEmail = validEmail();
    let isValidPassword = validPassword();

    if(isValidEmail && isValidPassword){
        window.location.href="./success.html";
    }
    else if(!isValidEmail){
        emailInput.focus();
    }
    else{
        passwordInput.focus();
    }
}
