/*let soma = 0
let numeros = [1, 2, 3, 4, 5]
    for (let i = 0; i < numeros.length; i++) {
        console.log(`${numeros[i]}`)
        soma += numeros[i] 
    }

    console.log(`Resultado da soma de cada número ${soma}`)
*/

let soma = 0
let numeros = [1, 2, 3, 4, 5]
    for (let numero of numeros) {
        console.log(`${numero}`)
        soma += numero
    }
    console.log(`O resultado da soma é ${soma}`)