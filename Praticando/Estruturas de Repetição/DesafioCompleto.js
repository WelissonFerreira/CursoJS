let numero = 121
let ehPrimo = true
let fatorial = 1
let numeroString = numero.toString()
let arraynumero = numeroString.split('')
let arrayinvertido = arraynumero.reverse()
let stringinvertida = arrayinvertido.join('')
// Verificação de números primos
if (numero < 2) {
    ehPrimo = false
    
}

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        ehPrimo = false
    }               
}      

    if (ehPrimo) {
    console.log(`${numero} é Primo!`)

    } else {
    console.log(`${numero} não é Primo!`)
    }
        
    // Verificação de Par ou Impar
    if (numero % 2 == 0) {
        console.log(`${numero} é PAR!`)
    } else {
        console.log(`${numero} é IMPAR!`)
    }
    // Fatorial
    for (let i = numero; i >= 1; i--) {
        fatorial = fatorial * i
        
    }
        console.log(`O fatorial de ${numero} é ${fatorial}`)

        if (numeroString == stringinvertida) {
            console.log(`${numeroString} é Palíndromo!`)
        } else {
            console.log(`${numeroString} não é Palíndromo!`)
        }