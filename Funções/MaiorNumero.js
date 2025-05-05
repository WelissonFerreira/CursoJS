function MaiordeDoisNumeros(n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}

let n1 = 10
let n2 = 20
let resultado = MaiordeDoisNumeros(n1,n2)
console.log(`O maior número entre ${n1} e ${n2} é => ${resultado}`)

/* let resultado = MaiordeDoisNumeros(7, 5)
console.log(resultado) */