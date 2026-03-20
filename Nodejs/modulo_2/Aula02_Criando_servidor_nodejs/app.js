//dependencia 'http' do proprio node
const http = require('http');

//definindo uma arrow function (funcão anonima)
http.createServer((request, response) => {
    //ao criar o servidor a resposta no cabeçalho:
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.writeHead(200, {'Content-Type': 'text/json'});
    
    //a resposta no corpo do texto
    response.write('Servidor Ativado..');
    //finalizando resposta a requisição
    response.end();
}).listen(1337);