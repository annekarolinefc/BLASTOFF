//CÓDIGO DE TESTE
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