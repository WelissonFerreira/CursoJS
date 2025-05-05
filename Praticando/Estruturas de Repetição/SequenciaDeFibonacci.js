let n = 7; // Número de elementos da sequência
let fib = [0, 1]; // Começa com os dois primeiros números

for (let i = 2; i < n; i++) {
    let novoNumero = fib[i - 1] + fib[i - 2]; // Soma dos dois últimos números : 
    fib.push(novoNumero); // Adiciona o novo número à sequência
}

console.log(fib); // Exibe a sequência