function enviar() {
    let numAleatorio = Math.floor(Math.random() * 10) + 1
    let botao1 = document.getElementById('bt1')
    let res = document.querySelector('div#res')
    let n1 = Number(botao1.value)



    if (n1 != numAleatorio) {
        res.innerHTML = `<p> O número gerado é ${numAleatorio}</p> Você errou. Tente novamente!`
    } else {
        res.innerHTML = `<p>  O número gerado é ${numAleatorio}</p> Você acertou! Parabéns!`
    }
}