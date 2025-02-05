import { userLogout } from "../functions/loginFuncs/userLogout.js"
const btn = document.getElementById('logout')


btn.addEventListener("click", () => {
    userLogout();
})

