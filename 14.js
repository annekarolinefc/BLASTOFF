let palavra = "osso";
let palavraDireita = palavra;
//console.log(palavaraDireita)
let palavaraEsquerda = palavraDireita.split("").reverse()
//console.log(palavaraEsquerda)
if(palavraDireita===palavaraEsquerda){
    console.log("São palindromas.")
} else{
    console.log("Não são palindromas")
}

/*


function Palindromo(palavra){
    var direita = [];
    var esquerda = [];
    for (i=0;i<palavra.length; i++){
        direita.unshift(palavra.charAt(i))
    }
    console.log(`Palavra da direita para esquerda é: ${direita}`)
    for (i=palavra.length-1; i>=0; i--){
        esquerda.push(palavra.charAt(i))
    }
    console.log(`Palavra da esquerda para a direita é: ${esquerda}`)
}

console.log(Palindromo(palavra))
*/