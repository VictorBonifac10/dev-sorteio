
const sortear = document.querySelector(".btn")

function sortearNum() {
    const numero1 = parseInt(document.querySelector("#num1").value);  // Isso transforma o texto "5" no número 5
    const numero2 = parseInt(document.querySelector("#num2").value);

    //console.log(numero1)
    //console.log(numero2)

    const randomNumber = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
    console.log(randomNumber)
}

sortear.addEventListener("click", sortearNum)