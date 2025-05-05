function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.PNG'
        document.body.style.background = "rgb(255, 165, 0)"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(30, 110, 110)'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.PNG'
        document.body.style.background = `rgb(48, 12, 12)`
    }
}


