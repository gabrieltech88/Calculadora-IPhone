import { registerRequest } from "../functions/cadastroFuncs/registerRequest.js";
const form = document.getElementById("form");
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")

form.addEventListener("submit", () => {
    event.preventDefault();

    const nome = inputNome.value 
    const email = inputEmail.value 
    const senha = inputSenha.value 

    console.log(nome, email, senha)

    registerRequest({nome, email, senha})
})