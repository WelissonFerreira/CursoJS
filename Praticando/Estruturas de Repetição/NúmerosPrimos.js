let num = 7

if (num == 1 || num < 1) {
    console.log(`O número ${num} não é primo!`)
    return;
    
}

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(`${num} não é Primo!`)
        return;
    } 
   
}


    


console.log(`${num} é Primo!`)