var num = 4;

function fatorial(num){
    var resultadoFatorial;
    for(i=1; i<=num; i--){
        resultadoFatorial = resultadoFatorial + num*i;
        console.log(`${num}`)
    }
}

console.log(fatorial(2));