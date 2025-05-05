function encontrarMaior(numeros) {
let Maior = 0
for (let i = 0; i < numeros.length; i++) {

if (numeros[i] > Maior) {
Maior = numeros[i]
} 

}
return Maior
}


let arraydeNumeros = [10, 5, 7, 25, 15]
let resultado = encontrarMaior(arraydeNumeros)
console.log(`O maior número do Array é ${resultado}`)

