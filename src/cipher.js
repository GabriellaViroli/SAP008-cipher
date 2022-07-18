function cipher(texto, offset) {
    let letraCifrada;
    let charCodigo;
    let resultado = "";

    for(let posLetra = 0; posLetra < texto.length; posLetra++) {
        charCodigo = (texto[posLetra].charCodeAt(0) - 65 + offset) % 26 + 65
        letraCifrada = String.fromCharCode(charCodigo)
        resultado = resultado + letraCifrada
    }

    return resultado
}
export default cipher;
