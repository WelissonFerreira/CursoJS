let cidades = ['Maceió', 'Palhoça', 'Balneário Camboriú', 'Sergipe']
cidades.unshift('São Paulo', 'Arapiraca')
for (let i = 0; i < cidades.length; i++) {
    console.log(`Cidades: ${cidades[i]}`)
}