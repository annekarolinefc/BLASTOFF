//CODIGO DE TESTE
function fatorial(num){
    var resultadoFatorial=1; // 1 * numero do fatorial desejado
    var i=1;
    while(i<=num){
        resultadoFatorial = resultadoFatorial * i;
        i++;
    }
    console.log("Fatorial de " + num + " é: " + resultadoFatorial)
}

//FATORIAL DE 2 = 2
console.log(fatorial(2));
//FATORIAL DE 4 = 24
console.log(fatorial(4));
//FATORIAL DE 6 = 720
console.log(fatorial(6));