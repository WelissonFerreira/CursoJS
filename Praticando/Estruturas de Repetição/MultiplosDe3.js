/* Múltiplos de 3 com While:
let i = 1
let f = 30
let n = 3

while (i <= f) {
    if (i % 3 == 0) {
        console.log(`${i} é múltiplo de ${n}`)
    } else {
        console.log(`${i} não é múltiplo de ${n}`)
    }
    i++
} */

    // Múltiplos de 3 com For:
    let f = 30
    let n = 3

    for (i = 1; i <= f; i++) {
        if (i % 3 == 0) {
            console.log(`${i} é múltiplo de ${n}`)
        } else {
            console.log(`${i} não é múltiplo de ${n}`)
        }
    }