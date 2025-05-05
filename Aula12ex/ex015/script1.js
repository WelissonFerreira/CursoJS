function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('[ERRO] ! Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 16) {
                // Criança
                img.setAttribute('src', 'meninocrianca.PNG')
            } else if (idade < 28) {
                // Jovem
                img.setAttribute('src', 'adultomasc.PNG')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'masc40.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 16) {
                // Criança
                img.setAttribute('src', 'meninacrianca.PNG')
            } else if (idade < 28) {
                // Adolescente
                img.setAttribute('src', 'adultofem.PNG')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fem40.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}