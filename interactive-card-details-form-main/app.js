const formulario = document.querySelector("#formulario");
const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number-card");
const inputMeses = document.querySelector("#mes");
const inputYear = document.querySelector("#years");
const inputCvc = document.querySelector("#cvc");
const btnConfirmar = document.querySelector("#confirmar");
const inputsNumbers = document.querySelector(".solonumero");
const numberCard = document.querySelector('#number-Card')
const infoCard = document.querySelector("#info-card")

inputName.addEventListener("input", () => {
  inputName.value = inputName.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/g, "");
});

const soloNumeros = () => {
  inputsNumbers.value = inputsNumbers.value.replace(/[^0-9]/g, "");
};

const valor = () => {
    inputNumber.addEventListener('input', () => {
        const inputValue = this.value
        numberCard.textContent  = inputValue
    })
}

console.log(valor())


