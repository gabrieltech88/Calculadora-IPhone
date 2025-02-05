import { userRegister } from "../functions/cadastroFuncs/userRegister.js";
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
    console.log(request)

    const alert = document.createElement("div")
    form.appendChild(alert)

    if(request.ok) {
        alert.classList.add("alert-sucess")
        alert.innerText = "Cadastro Realizado com sucesso";
    } else {
        alert.classList.add("alert-negative");
        alert.innerText = "Cadastro falhou em ser efetuado";
    }
    console.log(alert)
    console.log(alert.classList.contains('alert-sucess'))
    console.log(alert.classList.contains('alert-negative'))

    inputNome.value = "";
    inputEmail.value = "";
    inputSenha.value = "";
})