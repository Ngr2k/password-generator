let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#Valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let length = sliderElement.value;
    let novaSenha = "";
    for (let i = 0; i < length; i++) {
        novaSenha += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    password.innerHTML = novaSenha;
    containerPassword.classList.remove("hide"); // Exibe o container de senha
}