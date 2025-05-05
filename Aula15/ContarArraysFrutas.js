let frutas = ['Manga', 'Mamão', 'Jaca', 'Acerola', 'Abacate']
let quantidade = frutas.length
frutas.sort()
console.log(`Quantidade de Frutas: ${quantidade}`)

for (i = 0; i < frutas.length; i++) {
    if (frutas[i][1] == 'a') {
        console.log(`Frutas que a segunda letra é a: ${frutas[i]}`)
    } 

    if (frutas[i][0,1,2,3,4] == 'o') {
        console.log(`Frutas que tem a letra "o" : ${frutas[i]}`)
    }
}