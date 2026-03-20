/*
definir cada arquivo como um modulo

Etapas:
1-atribuir a função criada a uma variavel
2-atribui a variavel ao medoto do modulo:
module.exports = <nome_da_variavel>
*/

var soma = function(a, b){
    return a + b;
}

//exportar a variavel de soma que contem a função soma
module.exports = soma;