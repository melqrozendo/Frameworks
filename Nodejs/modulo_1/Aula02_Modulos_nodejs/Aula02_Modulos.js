/*
Modulos (dividir o programa em varios arquivos)
-tambem chamada de refatoração de codigo
Exemplo1: criar uma calculadora
-podemos criar uma calculadora com as funçoes declaradas em um unico arquivo

Exemplo2: criar uma calculadora
-podemos criar varios arquivis com respectivas funcoes integradas e transformadas em module.
-apos isso cria uma arquivo principal para receber as funçoes desses arquivos.
*/
function soma(a, b){
    return a + b;
}

function subt(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

console.log(soma(3,4));