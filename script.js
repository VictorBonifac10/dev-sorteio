const sortear = document.querySelector(".btn")

function sortearNum() {
    const numero1 = parseInt(document.querySelector("#num1").value);  // Isso transforma o texto "5" no número 5
    const numero2 = parseInt(document.querySelector("#num2").value);
    const numSorteado = document.querySelector(".numberSorteado");
    const aviso = document.querySelector(".msg-aviso")

    const randomNumber = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
    console.log(randomNumber)

if(isNaN(numero1) || isNaN(numero2)) { // verifica se a variel é NaN, caso for a seguinte msg abaixo aparece
        aviso.innerHTML = "É preciso selecionar um intervalo de números para o sorteio"
        numSorteado.innerHTML = "No!"

}else if(numero1 >= numero2){
        aviso.innerHTML = "É preciso que o intervalo seja de um numero menor para um numero maior"
        numSorteado.innerHTML = "No!"
        
}else{
        aviso.innerHTML = ""
        numSorteado.innerHTML = "Nº" + randomNumber
}
}
sortear.addEventListener("click", sortearNum)