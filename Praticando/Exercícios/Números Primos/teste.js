let num = 17
let ehPrimo = true;

if (num == 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        ehPrimo = false;
        break;
    }
    }
}

if (ehPrimo) {
    console.log(`${num} é primo!`)
} else {
    console.log(`${num} não é primo!`)
}