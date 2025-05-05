let idade = 18
console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('Você não vota')
} else if (idade >= 16 && idade < 18)  {
    console.log('Seu voto é opcional')

} else if (idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Vota vota!')
}