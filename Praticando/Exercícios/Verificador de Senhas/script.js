function checar() {
    let senha = document.getElementById('txt1')
    let res = document.querySelector('div#res')
    res.innerHTML = ''
    
    // Verificando se a senha tem pelo menos 8 caracteres
    if (senha.value.length >= 8) {
        res.innerHTML += ` <p> \u2714 A senha tem oito ou mais caracteres   `
    } else {
        res.innerHTML += ` \u274C A senha tem menos de 8 caracteres`
    }

     // Verificando se a senha tem pelo menos uma letra maiúscula
    if (/[A-Z]/.test(senha.value)) {
        res.innerHTML += `<p>\u2714 A senha tem letra MAIÚSCULA`
    } else {
        res.innerHTML += `\u274C A senha não tem letra MAIÚSCULA`
    }

    if (/[a-z]/.test(senha.value)) {
        res.innerHTML += ` <p> \u2714 A senha tem letra minúscula    `
    } else {
        res.innerHTML += ` \u274C A senha não tem letra minúscula`
    }

     if (/[!@#$%¨&*()_\-+]/.test(senha.value)) {
        res.innerHTML += `<p>\u2714 A senha tem caracteres especiais `
    } else {
        res.innerHTML += `   \u274C A senha não tem caracteres especiias`
    } 

    if (/[0-9]/.test(senha.value)) {
        res.innerHTML += ` <p>  \u2714 A senha tem números!`
    } else {
        res.innerHTML += `  \u274C A senha não tem números`
    }

    if (senha.value.length >= 8 && /[A-Z]/.test(senha.value) && /[a-z]/.test(senha.value) && /[!@#$%¨&*()_\-+]/.test(senha.value) && /[0-9]/.test(senha.value)) {
        res.innerHTML += `<p> Sua senha está segura! `
    } else {
        res.innerHTML += ` Sua senha não está segura! Tente novamente!`
        
    }
    
        
    }
        
   
    
