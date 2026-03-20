// Aplicando definicao de modulos em nodejs: 
/*
function soma(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function multi(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}

console.log(sub(2,4));
*/

// Para carregar um funcao de um modulo
var somaFunc = require("./soma");
var subFunc = require("./sub");

console.log(somaFunc(1,4));
console.log(subFunc(20,7));