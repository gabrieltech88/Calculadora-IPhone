import { userLogin } from "../functions/loginFuncs/userLogin.js"
import { alerts } from "../functions/alerts.js"
const btn = document.getElementById('button')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('senha')
const form = document.getElementById("form")

form.addEventListener("submit", async () => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    const request = await userLogin({email, password})
    console.log(request)
    if(request == false) {
        alerts(form, request, "Login")
    }
    
    emailInput.value = "";
    passwordInput.value = "";
})