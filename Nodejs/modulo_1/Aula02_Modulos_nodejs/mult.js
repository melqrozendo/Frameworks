/*
definir cada arquivo como um modulo

Etapas:
1-atribuir a função criada a uma variavel
2-atribui a variavel ao medoto do modulo:
module.exports = <nome_da_variavel>
*/

var mult = function(a, b){
    return a * b;
}

module.exports = mult;
