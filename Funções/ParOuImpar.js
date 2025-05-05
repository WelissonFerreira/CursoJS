function isPar(numero) {
    if (numero % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let numero = 7
let resposta = isPar(numero)
console.log(`O número ${numero} é ${resposta}`)