function enviar() {
    console.log('Botão foi clicado!')
    let inp1 = document.getElementById('inpt1')
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')
    let hora = Number(inp1.value)
    
    

    res.innerHTML = `Agora são ${hora} horas`
    

    if (hora >= 0 && hora <= 12) {
        img.src = 'fotomanha.PNG'
        res.innerHTML += `<p><strong>Bom dia!</strong></p>`
        document.body.style.background = '#BE792D'
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        res.innerHTML += `<p><strong>Boa tarde!</strong></p>`
        document.body.style.background = '#B2D0E9'
        

    } else {
        img.src = 'fotonoite.PNG'
        res.innerHTML += '<p><strong>Boa noite!</strong></p>'
        document.body.style.background = '#573e5a'
        
    }
}