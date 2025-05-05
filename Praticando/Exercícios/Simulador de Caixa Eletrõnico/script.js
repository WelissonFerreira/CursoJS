function saque() {
    let num1 = document.getElementById('txt1')
    let res = document.querySelector('div#res')
    res.innerHTML = '<p> </p>'
    n1 = Number(num1.value)
    
    if (num1.value == 0) {
        alert('Digite um número válido!')
    } else if (n1 % 10 === 0)  {
        
        // Notas de 100
        let notas100 = Math.floor(n1 / 100)
        let resto100 = n1 - (notas100 * 100) 
        // Notas de 50
        let notas50 = Math.floor(resto100 / 50)
        let resto50 = resto100 - (notas50 * 50)
        // Notas de 20
        let notas20 = Math.floor(resto50 / 20)
        let resto20 = resto50 - (notas20 * 20)
        //Notas de 10
        let notas10 = Math.floor(resto20 / 10)
        let resto10 = resto20 - (notas10 * 10)

        res.innerHTML += `Para o seu saque de ${n1}. Foram utilizados as notas: <p>R$ 100: ${notas100} | R$ 50: ${notas50} | R$ 20: ${notas20} | R$ 10: ${notas10} </p>`
        
    } else {
        alert('Valor inválido. Digite valores multiplos de 10. Notas disponíveis: 100 | 50 | 20 | 10 ')
    }
    
}

