import { apagar } from "./functions/apagar.js";
import { deletar } from "./functions/deletar.js";
import { calcular } from "./functions/calcular.js"

const btn = document.querySelectorAll(".btn");  
const ac = document.getElementById("ac");
const del = document.getElementById("del");

btn.forEach(btn => btn.addEventListener('click', pegarValor)); 

let listaOperacao = []

function pegarValor() {
    const valorBtn = this.value;
    listaOperacao.push(valorBtn);
    mostrarNaTela(listaOperacao);
    
}

function mostrarNaTela(listaValores) {
    try {
        const ultimoValor = listaValores.length - 1
        const penultimoValor = listaValores.length - 2;
        const output = document.getElementById('saida');

        ac.onclick = () => {
            apagar(output, listaValores);
        }
        
        del.onclick = () => {
            deletar(output, listaValores);
        }


        if(listaValores[ultimoValor] == '='){
            calcular(output, listaValores);
        } else {
            output.innerHTML = listaValores.join('');
        }

    } catch(erro) {
        alert(erro, "Houve algum erro de digitiação")
    }
    console.log(listaValores);
}

