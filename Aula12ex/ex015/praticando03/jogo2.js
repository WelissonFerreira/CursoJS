let tentativas = 0
let numAleatorio = Math.floor(Math.random() * 10) + 1

function verificar() {
    let bt1 = document.getElementById('bot1')
    let res = document.querySelector('div#res')
    let n1 = Number(bt1.value)
    if (numAleatorio != n1) {
        tentativas ++
       
        
        res.innerHTML = `<p>Você começa com 3 tentativas!</p> Você errou! Você usou ${tentativas} tentativas. Tente novamente! `
    
    } else {
        res.innerHTML = `Você acertou! número aleatório: ${numAleatorio}`

    } if (tentativas >= 3) {
        res.innerHTML = `<p> Você usou ${tentativas} tentativas!</p> Não há tentativas restantes. Reinicie o jogo!`
        document.querySelector('input[type=button]').disabled = true
    }
}