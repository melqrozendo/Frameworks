/*
Arquivo Principal:

para carregar os modulos neste arquivo principal vamos utilizar a função:
require('./<nome_do_arquivo>')

Etapas:
1- atribuir a uma variavel declarada neste arq um modulo
2-exibir o resultado na tela do prompt
*/
var SomaFunc = require('./soma');
var SubtFunc = require('./subt');
var MultFunc = require('./mult');
var DivFunc = require('./div');

console.log(SomaFunc(5,4));
console.log(SubtFunc(6,8));
console.log(MultFunc(3,9));
console.log(DivFunc(4,3));