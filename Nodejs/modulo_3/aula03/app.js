var http = require('http');

// criando o servidor e exibindo msg atraves de uma funcao de callback
http.createServer(function(req, res) {
   res.end('Servidor Ativo!');
}).listen(8081);

console.log('Servidor rodando!');