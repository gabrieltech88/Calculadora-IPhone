const btnLogout = document.getElementById('logout')

btnLogout.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/auth/logout")
        console.log(response)
        if(response.ok) {
            window.location.href = '/';
        }
    } catch(err) {
        throw new Error('Login Inválido')
    }
})