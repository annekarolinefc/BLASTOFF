//CÓDIGO DE TESTE
var num = 4;
console.log("A tabuada de "+ num +" é:")
console.log(tabuada(num))

function tabuada(num){
    for(i=0; i<=10; i++){
        console.log(`${num} * ${i} = ` + (num*i))
    }
}
