/*
Desenvolver uma aplicação utilizando o protocolo http em nodejs

Etapas:
1- declarar uma variavel que receba um modulo que faz parte do node
2-Abrir um servidor HTTP e chamar a função listen (para informar qual a porta que voce deseja abrir o servidor)
3-definir uma mensagem para informar que o servidor esta rodando na sua maquina
4-abra o prompt de comando e chame esta arquivo
5-apos isso, abra o navegador e digite:
localhost:8081

>>>>Atenção
-dentro do metodo createServer() existe a função que recebe dois parametros:
-require(receber) e response(enviar)
-vamos, neste momento trabalhar com o paramentro de envio(response)

>>>>>>Para agora, toda vez que realizarmos um 'response', devemos rodar o servidor no prompt ou no terminal do vscode

*para Stop o servidor com Ctrl+c

*/
//rodando um servidor http

var http = require('http');

http.createServer(function(req, res){
    //response(enviar resposta para o usuario que acessa a api, utilizando o metodo end(<msg>);)
    res.end('Nome: Melq! Welcome to my website.');
}).listen(8081);
console.log('Servidor rodando!');