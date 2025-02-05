export async function userLogin(dto) {
    try {
        const response = await fetch("http://localhost:3000/auth", {
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
            window.location.replace('http://127.0.0.1:5500/public/index.html')
        }


    } catch(err) {
        throw new Error('Login Inválido')
    }
}