const button = document.getElementById('submit-button');

button.addEventListener("click", () => {
    const userData = button.value;

    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        body: JSON.stringify(userData)
    })

})