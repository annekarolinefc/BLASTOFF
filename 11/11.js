let A = [1, 2, 3, 4];
let B = [1, 2, 5, 8];

let intersecao = A.filter(i => B.includes(i)); //arrow function

console.log("A interseção de [" + A + "] e [" + B + "] é igual a [" + intersecao + "]")
