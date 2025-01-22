function deletar(output, listaValores) {
    const ultimoValor = listaValores.length - 1;
    listaValores.pop(ultimoValor);
    output.innerHTML = listaValores;
}

export { deletar };