function verificar() {
    let compra = document.getElementById('txt1')
    const vip = document.getElementById('vip')
    const niver = document.getElementById('niver')
    let res = document.querySelector('div#res')
    let valor = Number(compra.value)
    let frete = 0
    res.innerHTML = ``
    
    


    if (niver.checked) {
        res.innerHTML = `Parabéns pelo seu aniversário! O frete hoje é por nossa conta!`
        return;
    }
    
    if (vip.checked && valor < 50) {
        frete = 20
        let vipdesc = 50
        let desc = (frete * vipdesc) / 100
        let valorfinal = frete - desc
        res.innerHTML += `Sua compra foi no valor de R$ ${valor.toFixed(2)} e você obteve o desconto de ${vipdesc}%. O valor final é de R$ ${valorfinal.toFixed(2)}`
        return;

    
        
    } else if (vip.checked && valor >= 50 && valor < 100) {
        frete = 15
        let vipdesc = 50
        let desc = (frete * vipdesc) / 100
        let valorfinal = frete - desc
        res.innerHTML += `Sua compra foi no valor de R$ ${valor.toFixed(2)} e você obteve o desconto de ${vipdesc}%. O valor final é de R$ ${valorfinal.toFixed(2)}`
        return;
    } else if (vip.checked && valor >= 100 && valor < 200) {
        frete = 10
        let vipdesc = 50
        let desc = (frete * vipdesc) / 100
        let valorfinal = frete - desc
        res.innerHTML += `Sua compra foi no valor de R$ ${valor.toFixed(2)} e você obteve o desconto de ${vipdesc}%. O valor final é de R$ ${valorfinal.toFixed(2)}`
        return;
    } else if (vip.checked && valor >= 200) {
        res.innerHTML = `Sua compra foi a partir de R$ 200. Seu frete é gratís!`
        return;
    }




    if (valor <= 0) {
        alert('DADOS INVÁLIDOS! Digite um valor válido acima de 0.')
        
    
    } else if (valor < 50) {
        frete = 20
        res.innerHTML = `Sua compra foi R$ ${valor.toFixed(2)} | O seu frete é R$ ${frete.toFixed(2)}`

    } else if (valor >= 50 && valor < 100) {
        frete = 15
        res.innerHTML = `Sua compra foi R$ ${valor.toFixed(2)} | O seu frete é R$ ${frete.toFixed(2)}`

    } else if (valor >= 100 && valor < 200) {
        frete = 10
        res.innerHTML = `Sua compra foi R$ ${valor.toFixed(2)} | O seu frete é R$ ${frete.toFixed(2)}`
        
    } else {
        res.innerHTML = `Sua compra foi a partir de R$ 200. Seu frete é gratís!`
    }




}




