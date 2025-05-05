function gerar() {
    let inicio = Number(document.getElementById('bot1').value)
    let res = document.querySelector('div#res')
    res.innerHTML = ''
    if (inicio <= 0) {
        alert('Número INVÁLIDO!')
    } else {
        for (let c = 1; c <= 10; c++) {
            let resultado = inicio * c
            res.innerHTML += `${inicio} x ${c} = ${resultado} <br>`
            
            
        }
        res.innerHTML += `Tabuada: ${c}`
    }
}