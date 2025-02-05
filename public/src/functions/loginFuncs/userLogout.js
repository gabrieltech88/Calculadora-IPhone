export async function userLogout() {
    try {
        const response = await fetch("http://localhost:3000/auth/logout")

        if(response.ok) {
            window.location.replace('http://127.0.0.1:5500/public/pages/login.html')
        }
    } catch(err) {
        throw new Error('Login Inválido')
    }
}