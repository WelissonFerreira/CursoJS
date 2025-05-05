function promocao() {
    let rescond = document.querySelector('div#rescond')

    rescond.innerHTML = `<h4>Condições para descontos:</h4> <p>VIP: 10%</p> <p>Dia de promoção: 5%</p> <p>2 ou mais itens: 5%</p> <p>Bônus: Valor da compra a partir de R$ 200: Frete grátis.</p>`
}



function enviar() {
    let valcompra = document.getElementById('valcompra')
    let qintens = document.getElementById('qitens')
    let vip = document.getElementById('vip')
    let promo = document.getElementById('promo')
    let res = document.querySelector('div#res')
    let compra = Number(valcompra.value)
    let itens = Number(qintens.value)
    let descvip = 10
    let descpromo = 5
    let descitens = 5
    let totaldesc = 0
    res.innerHTML = ''
    let frete = 20

    if (compra <= 0) {
        alert('DADOS INVÁLIDOS! Digite um valor acima de 0')
        return;
    }

    
    if (vip.checked && promo.checked && itens >= 2) {
        let desc1 = (compra * descvip) / 100
        let resdesc1 = compra - desc1  
        let desc2 = (resdesc1 * descpromo) / 100
        let resdesc2 = resdesc1 - desc2
        let desc3 = (resdesc2 * descitens) / 100
        totaldesc = resdesc2 - desc3
        res.innerHTML += `<p>Você se  encaixa nas 3 condições! O valor da compra com desconto é R$ ${totaldesc.toFixed(2)}`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `Valor do frete: R$ ${frete.toFixed(2)}. Parabéns! Você obteve frete grátis! </p>`
        } else {
            res.innerHTML += `O valor do frete foi R$ ${frete.toFixed(2)}</p>`
            
        }
        
    } else if (vip.checked && promo.checked) {
        let desc1 = (compra * descvip) / 100
        let resdesc1 = compra - desc1
        let desc2 = (resdesc1 * descpromo) / 100
        totaldesc = resdesc1 -  desc2
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: VIP, Dia de promoção. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            frete = 20
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }

    } else if (vip.checked && itens >= 2) {
        let desc1 = (compra * descvip) / 100
        let resdesc1 = compra - desc1
        let desc2 = (resdesc1 * descitens) / 100
        totaldesc = resdesc1 -  desc2
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: VIP, 2 ou mais Itens. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }
    } else if (vip.checked) {
        let desc1 = (compra * descvip) / 100
        let resdesc1 = compra - desc1
        totaldesc = resdesc1
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: VIP. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }
    } else if (promo.checked && itens >= 2) {
        let desc1 = (compra * descpromo) / 100
        let resdesc1 = compra - desc1
        let desc2 = (resdesc1 * descitens) / 100
        totaldesc = resdesc1 -  desc2
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: Promo, 2 ou mais Itens. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }
    } else if (promo.checked) {
        let desc1 = (compra * descpromo) / 100
        let resdesc1 = compra - desc1
        totaldesc = resdesc1
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: Promo. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }
    } else if (itens >= 2) {
        let desc1 = (compra * descitens) / 100
        let resdesc1 = compra - desc1
        totaldesc = resdesc1
        res.innerHTML += `<p>Você se encaixa nas seguintes promoções: 2 ou mais Itens. O valor total da compra é R$ ${totaldesc.toFixed(2)} </p>`
        if (totaldesc >= 200) {
            frete = 0
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }
    } else {
        res.innerHTML += `<p>O valor total da compra é R$ ${compra.toFixed(2)} </p>`
        if (compra >= 200) {
            frete = 0
            res.innerHTML += `Como sua compra foi a partir de R$ 200,00. O valor do frete é R$ ${frete.toFixed(1)}. Parabéns! Você obteve frete gratís!`
        } else {
            res.innerHTML += `O valor do frete é R$ ${frete.toFixed(2)}`
        }

    }
     
        

}