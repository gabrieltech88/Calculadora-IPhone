
export async function userRegister(dto) {
    try {
        fetch("http://localhost:3000/usuarios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: dto.nome,
                email: dto.email,
                senha: dto.senha
            })
        })
    } catch(err) {
        throw new Error('Algo deu errado!')
    }
}
