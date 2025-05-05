function gerar() {
    let num1 = document.getElementById('txt1')
    let tab = document.getElementById('seltab')
    
    if (num1.value == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num1.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
}