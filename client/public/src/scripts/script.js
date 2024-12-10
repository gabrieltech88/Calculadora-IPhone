const btn = document.querySelectorAll(".btn");    
btn.forEach(btn => btn.addEventListener('click', pegarValor)); 

let listaOperacao = []

function pegarValor() {
    valorBtn = this.value;
    listaOperacao.push(valorBtn);
    mostrarNaTela(listaOperacao);
    
}

function mostrarNaTela(valorBtn) {
    const ultimoValor = valorBtn.length - 1
    const output = document.getElementById('saida');
    //console.log(output.value)

    if(valorBtn[ultimoValor] == '='){
        output.innerHTML = eval(output.innerHTML)
    } else {
        output.innerHTML = valorBtn.join('');
        return toString(output.value)
    }
}

