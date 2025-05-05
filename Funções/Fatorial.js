function FatorialdoN(numero,fatorial) {
    
    for (i = 1; i <= numero; i++) {
    fatorial = fatorial * i
    }

    return fatorial
}

let numero = 5
let fatorial = 1

let resultado = FatorialdoN(numero, fatorial)

console.log(`O fatorial de ${numero} é ${resultado}`)


