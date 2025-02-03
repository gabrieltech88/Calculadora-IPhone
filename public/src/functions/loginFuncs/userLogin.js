export async function userLogin(dto) {
    try {
        const response = await fetch("http://localhost:3000/usuarios/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: dto.email,
                senha: dto.password
            })
        })

        if(response.ok) {
            window.location.replace('http://localhost:5500/public/pages/index.html')
        }


    } catch(err) {
        throw new Error('Login Inválido')
    }
}