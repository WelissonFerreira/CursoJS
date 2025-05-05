let somapar = 0
let somaimpar = 0
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros) {
    console.log(`${numero}`)

    if (numero % 2 == 0) {
        somapar += numero
        
        
    } else {
        somaimpar += numero
    }
}
    console.log(`O resultado da soma de números pares é ${somapar}`)
    console.log(`O resultado da soma de números impares é ${somaimpar}`)