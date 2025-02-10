export async function userLogout() {
    try {
        const response = await fetch("http://localhost:3000/auth/logout")

    } catch(err) {
        throw new Error('Login Inválido')
    }
}