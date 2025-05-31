const sortear = document.querySelector(".btn")

function sortearNum() {
    const numero1 = parseInt(document.querySelector("#num1").value);  // Isso transforma o texto "5" no número 5
    const numero2 = parseInt(document.querySelector("#num2").value);
    const numSorteado = document.querySelector(".numberSorteado");
    const aviso = document.querySelector(".msg-aviso")

    const randomNumber = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
    console.log(randomNumber)

    numSorteado.innerHTML = "Nº" + randomNumber

if(isNaN(numero1) || isNaN(numero2)) { // verifica se a variel é NaN, caso for a seguinte msg abaixo aparece
        aviso.innerHTML = "É preciso selecionar um intervalo de números para o sorteio"
    }else{
        console.log("tudo certo seu numero é " + randomNumber)
        aviso.innerHTML = ""
    }
}

sortear.addEventListener("click", sortearNum)