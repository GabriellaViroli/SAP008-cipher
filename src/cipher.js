function encode(offset, texto) {
    if (typeof offset != "number") {
        throw TypeError()
    }
    if (typeof texto != "string") {
        throw TypeError()
    }

    let letraCifrada;
    let charCodigo;
    let resultado = "";

    for(let posLetra = 0; posLetra < texto.length; posLetra++) {
        charCodigo = (texto.charCodeAt(posLetra) - 65 + offset) % 26 + 65
        letraCifrada = String.fromCharCode(charCodigo)
        resultado = resultado + letraCifrada
    }

    return resultado
}

function decode(offset, texto) {
    if (typeof offset != "number") {
        throw TypeError()
    }
    if (typeof texto != "string") {
        throw TypeError()
    }
    let letraCifrada;
    let charCodigo;
    let resultado = "";

    for(let posLetra = 0; posLetra < texto.length; posLetra++) {
        charCodigo = (texto.charCodeAt(posLetra) - 90 - offset) % 26 + 90
        letraCifrada = String.fromCharCode(charCodigo)
        resultado = resultado + letraCifrada
    }
    return resultado
}

const cipher = {encode, decode}
export default cipher;