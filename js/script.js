const button = document.querySelector(".botao-login")

// Animação form login
const inputs = document.querySelectorAll(".input");
const inputEmFoco = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}

const inputSemFoco = ({ target }) => {

    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }
}

const preenchimentoLogin = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 8) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }
}

inputs.forEach((input) => input.addEventListener("focus", inputEmFoco));
inputs.forEach((input) => input.addEventListener("focusout", inputSemFoco));
inputs.forEach((input) => input.addEventListener("input", preenchimentoLogin));