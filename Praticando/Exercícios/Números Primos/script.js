function verificar() {
    let num1 = document.getElementById('txt1')
    let res = document.querySelector('div#res')
    let num = Number(num1.value)
    res.innerHTML = '<p> </p>'

    if (num == 1 || num < 1) {
        res.innerHTML = `O número ${num} não é primo`
        return;
    } for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            res.innerHTML = `O número ${num} não é primo`
            return;
        }
    }

        res.innerHTML = `O número ${num} é primo!`

}

    
    
    
