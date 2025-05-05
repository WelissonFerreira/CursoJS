let palavra = 'ARARA'
let palavrasminusc = palavra.toLowerCase()
let Invertida = palavrasminusc.split('').reverse().join('')

if (palavrasminusc === Invertida) {
    console.log(`${palavra} é Palíndromo! : ${Invertida}`)
} else {
    console.log(`${palavra} não é Palíndromo! : ${Invertida}`)
}

// s.toLowerCase()