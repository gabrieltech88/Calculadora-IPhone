export function alerts(fatherElement, status, page) {
    const alert = document.createElement("div")
    fatherElement.appendChild(alert)

    const text = document.createElement("p")
    alert.appendChild(text)

    console.log(status)
    if(status) {
        alert.classList.add(`alert-sucess`);
        text.innerText = `${page} realizado com sucesso!`;
    } else {
        alert.classList.add(`alert-negative`);
        text.innerText = `${page} não realizado por inválides dos dados`;
    }

    setTimeout(() => {
        alert.remove();
    }, 2000)
}

