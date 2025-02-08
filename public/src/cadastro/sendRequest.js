import { userRegister } from "../functions/cadastroFuncs/userRegister.js";
import { alerts } from "../functions/alerts.js"
const form = document.getElementById("form");
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")

form.addEventListener("submit", async () => {
    event.preventDefault();

    const nome = inputNome.value 
    const email = inputEmail.value 
    const senha = inputSenha.value 

    console.log(nome, email, senha)

    const request = await userRegister({nome, email, senha})
    //console.log(request)
    alerts(form, request, "Cadastro");
    
    inputNome.value = "";
    inputEmail.value = "";
    inputSenha.value = "";
})