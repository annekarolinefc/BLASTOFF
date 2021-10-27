let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [];
for (i=0; i<A.length; i++){
    if(A[i]%2==0){
        arr.push(A[i]);
    }
}
console.log(arr);