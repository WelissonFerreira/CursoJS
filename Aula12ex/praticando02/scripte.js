let saldo = 0

function depositar() {
    
    let txt1 = document.getElementById('dep')
    res = document.querySelector('div#res')
    n1 = Number(txt1.value)

    if (n1 <= 0) {
        alert('[ERRO]Você digitou 0 ou valor negativo. Não é válido!')  
        
    } else {
        saldo += n1
        res.innerHTML = `<p>Você depositou <strong>R$ ${n1.toFixed(2)}</strong> com sucesso!</p>`
        res.innerHTML += `<p>Seu novo saldo é <strong>R$ ${saldo.toFixed(2)}</strong></p>`
    }
    
    

    
    
    
}

function sacar() {
    let txt2 = document.getElementById('saq')
    res = document.querySelector('div#res')
    n2 = Number(txt2.value)

    if (n2 > saldo) {
        res.innerHTML += `Você não tem saldo suficiente para realizar esse saque.`
        res.innerHTML += ` Saldo: <strong>R$ ${saldo.toFixed(2)}</strong> | Saque solicitado: <strong>R$ ${n2.toFixed(2)}</strong>`
    } else {
        saldo -= n2
        res.innerHTML = `<p>Seu novo saldo é <strong>R$ ${saldo.toFixed(2)}</strong></p>`
    }
        

}