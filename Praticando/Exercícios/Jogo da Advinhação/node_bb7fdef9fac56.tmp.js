let chances = 5
let palavrasecreta = "banana"
console.log(`Bem-Vindo ao jogo da Advinhação!`)
console.log(`A palavra secreta é: _ _ _ _ _ _`)


// Esse comando importa o módulo nativo do Node.js chamado readline.
// Ele serve pra ler entradas do teclado (stdin) e escrever saídas no terminal (stdout).

const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout

})

rl.question('Digite uma letra: ') , (letra) => {
    if (letra == palavrasecreta) {
        console.log(`Palavra secreta: ${letra}`)
    }
}

// /[a-z]/