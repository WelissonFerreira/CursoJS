function verificaNumero(numero) {
    if (numero > 0) {
        return 'POSITIVO'
    } else if (numero == 0) {
        return 'ZERO'
    } else {
        return 'NEGATIVO'
    }

}

let numero = 7

let resultado = verificaNumero(numero)

console.log(`O número ${numero} é ${resultado}`)