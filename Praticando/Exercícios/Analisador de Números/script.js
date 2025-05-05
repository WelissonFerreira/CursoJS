let txtNumber = document.getElementById('txtNumber')
let botaoEnviar = document.getElementById('botaoEnviar')
let select = document.getElementById('idlista')
let lista = []
const botaoFinalizar = document.getElementById('botaoFinalizar')
let res = document.querySelector('div#res')
const botaoZerar = document.getElementById('botaoZerar')


function numeroEntre1e100(numero) {
    if (numero >= 1 && numero <= 100) {
        return true;
    } else {
        return false;
    }
    
}

function existeArray(numero) {
    if (lista.includes(numero)) {
        return true
    } else {
        return false
    }
}


botaoEnviar.addEventListener('click', processarNumero)

function processarNumero() {
    let numero = Number(txtNumber.value)
    let verificarNumero = numeroEntre1e100(numero)

    if (verificarNumero) {
        if (existeArray(numero)) {
            alert(`Número já adicionado!`)
    
            
        } else {
            lista.unshift(numero)
            let novoOption = document.createElement('option')
            novoOption.value = numero
            select.appendChild(novoOption)
            novoOption.textContent = `Valor adicionado ${numero}`
        }
    
    }  else {
        alert(`[ERRO]! Número inválido! Digite um número entre 1 e 100!`)
    }
    /*  Quando o usuario enviar o número,
    esvazia o campo de texto para não precisar
    apagar manualmente
    */
    txtNumber.value = ''
    txtNumber.focus()
    
}

// PARTE 2 ================================

function numerosdigitados(lista){
    let resultadoLista = lista.length
    return resultadoLista

}

function maiornumero(lista) {
    let maiorV = 1
    
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > maiorV) {
            maiorV = lista[i]
        } else {
            
        }
    }
    return maiorV
    
}

function menornumero(lista) {
    let menorV = 100
    for (i = 0; i < lista.length; i++) {
        if(lista[i] < menorV)
            menorV = lista[i]
    }
    return menorV
}

function somarvalores(lista) {
    let totalSoma = 0
    for (i = 0; i < lista.length; i++) {
        totalSoma += lista[i]
    }
    return totalSoma
}

function mediavalores(lista) {
    let Soma = 0
    for (i = 0; i < lista.length; i++) {
        Soma += lista[i]
    }
    quantidadevalores = lista.length
    let MediaValores = Soma / quantidadevalores 
    return MediaValores
}


botaoFinalizar.addEventListener('click', () => {
    function verificardigitados()  {

        if (lista.length === 0) {
            alert('[ERRO]! Nenhum número adicionado!')
            return;
        }
    
        res.textContent = ''

        let quantidadenumeros = numerosdigitados(lista)
        let MaiorNumero = maiornumero(lista)
        let MenorNumero = menornumero(lista)
        let SomarValores = somarvalores(lista)
        let MediaValores = mediavalores(lista)
        res.textContent = `Números digitados: ${quantidadenumeros} - Maior número digitado: ${MaiorNumero} - Menor número digitado: ${MenorNumero} - Soma de todos os valores: ${SomarValores} - Média dos valores: ${MediaValores}`
        
        /* Zerar lista ao clicar em Finalizar (Opcional) 
        lista = []
        select.innerHTML = ''; */

    }
    
    botaoZerar.addEventListener('click', zerar) 
        function zerar() {
        lista = []
        select.innerHTML = ''
        res.textContent = ''
        }
    

    verificardigitados() 
    




})

