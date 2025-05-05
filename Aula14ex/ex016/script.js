function contar() {
    let inicioEl = document.getElementById('bot1')
    let fimEl = document.getElementById('bot2')
    let passoEl = document.getElementById('bot3')
    let res = document.querySelector('div#res')
    res.innerHTML = ''

    if (inicioEl.value === '' || fimEl.value ==='' || passoEl.value === '') {
        res.innerHTML = `Impossível contar: Dados inválidos!`
        alert('Por favor, preencha todos os campos!')
        return
    }

    let inicio = Number(inicioEl.value)
    let fim = Number(fimEl.value)
    let passo = Number(passoEl.value)
    if (passo <= 0) {
        alert(`Passo INVÁLIDO! Considerando PASSO 1`)
        passo = 1
    } 
    
 
        
    
    if (inicio <= fim) {
        // Contagem crescente
        for (let c = inicio; c <= fim; c += passo) {
            
            res.innerHTML += `${c} &nbsp \u{1F449} `
            
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    } else {
        // Contagem regressiva
        for (let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} &nbsp \u{1F449} `
            
            
        }
        
        res.innerHTML += `\u{1F3C1}`
        
    }
    
}