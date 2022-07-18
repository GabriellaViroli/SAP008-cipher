import cipher from './cipher.js';

let btnCifre = document.getElementById("btnCifre")

btnCifre.onclick = function() {
    let offset = parseInt(document.getElementById("casas").value)
    let valorDigitado = criptografia.value.toUpperCase()
    let valorCifrado = cipher(valorDigitado, offset)
    console.log(valorCifrado)

}
