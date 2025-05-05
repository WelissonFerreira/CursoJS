num = 1945
let numString = num.toString()
let arrayDeCaracteres = numString.split('')
let arrayInvertido = arrayDeCaracteres.reverse()

let stringInvertida = arrayInvertido.join('')

if (numString == stringInvertida) {
    console.log(`${num} é Palíndromo: ${stringInvertida}`)
} else {
    console.log(`${num} não é Palíndromo! ${stringInvertida}`)
}