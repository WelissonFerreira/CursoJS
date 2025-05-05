function contador() {
    let res = document.querySelector('div#res')
    res.innerHTML = `Contagem <br>`
    for (let c = 1; c <= 5; c++) {
        res.innerHTML += `${c}`    
    }
    alert('TESTE')
    
}