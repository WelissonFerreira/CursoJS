let fatorial = 1;
let n = 5;

for (let i = n; i >= 1; i--) {
    console.log(`Antes: fatorial = ${fatorial}, i = ${i}`);
    fatorial = fatorial * i;
    console.log(`Depois: fatorial = ${fatorial}`);
}

console.log(`Resultado final: O fatorial de ${n} é ${fatorial}`);