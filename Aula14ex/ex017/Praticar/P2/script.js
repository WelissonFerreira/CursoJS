function contador() {
    let res = document.querySelector('div#res')

    for (let c = 10; c >= 1; c--)
        res.innerHTML += `${c} <br>`
}