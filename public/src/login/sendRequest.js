import { userLogin } from "../functions/loginFuncs/userLogin.js"
const btn = document.getElementById('button')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

btn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    userLogin({email, password})
})