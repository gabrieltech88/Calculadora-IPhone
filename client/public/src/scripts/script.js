const btn = document.querySelectorAll(".btn");    
btn.forEach(btn => btn.addEventListener('click', pegarValor)); 

let listaOperacao = []

function pegarValor() {
    const valorBtn = this.value;
    listaOperacao.push(valorBtn);
    mostrarNaTela(listaOperacao);
    
}

function apagar(output) {
    output.innerHTML = 'Resultado';
    return listaOperacao = [];
}

function mostrarNaTela(listaValores) {
    console.log(listaValores.length)
    try {
        const ultimoValor = listaValores.length - 1
        const output = document.getElementById('saida');
        
        if (listaValores[ultimoValor] === 'DEL'){
            output.innerHTML = listaValores.pop('DEL');
            output.innerHTML = listaValores.pop(ultimoValor);
        }
        
        const penultimoValor = listaValores.length - 2;
        if(listaValores[ultimoValor] == '=' && listaValores[penultimoValor] == '=') {
            apagar(output);
            throw new Error('Tentiva de opereção irreconhecivel')
        }
    
        if(listaValores[ultimoValor] == '='){
            output.innerHTML = eval(output.innerHTML)
        } else if (listaValores[ultimoValor] === 'AC') {
            apagar(output);
        } else {
            output.innerHTML = listaValores.join('');
        }

    } catch(erro) {
        alert(erro, "Houve algum erro de digitiação")
    }
}

