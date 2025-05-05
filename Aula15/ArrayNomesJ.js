let nomesJ = ['Jothan', 'João', 'Ricardo', 'Pedro', 'Juninho','Marcelo']
nomesJ.sort()

for (let i = 0; i < nomesJ.length; i++) {
    if (nomesJ[i][0] == 'J') {
        console.log(`Nomes que se iniciam com J: ${nomesJ[i]}`)
    } else {
        console.log(`Outros nomes: ${nomesJ[i]}`)
    }
}
