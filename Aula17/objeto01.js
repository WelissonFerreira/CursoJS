let amigo = {nome: 'Welisson',
sexo:'M',
peso: 75.4,
engordar(p) {
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)