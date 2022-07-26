import cipher from './cipher.js';

let btnCifre = document.getElementById("btnCifre")
let btnDecifre = document.getElementById("btnDecifre")
let inputCriptografia = document.getElementById("criptografia")
let inputDescriptografia = document.getElementById("descriptografia")
let inputOffset = document.getElementById("casas")

btnCifre.onclick = function encode () {
    let offset = parseInt(inputOffset.value)
    let valorDigitado = inputCriptografia.value.toUpperCase()
    let valorCifrado = cipher.encode(offset, valorDigitado)
    inputDescriptografia.value = valorCifrado
}

btnDecifre.onclick = function decode () {
    let offset = parseInt(inputOffset.value)
    let valorDigitado = inputDescriptografia.value.toUpperCase()
    let valorDecifrado = cipher.decode(offset, valorDigitado)
    inputCriptografia.value = valorDecifrado

} 