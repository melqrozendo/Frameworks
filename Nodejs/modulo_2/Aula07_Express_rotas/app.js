/*
Criando rotas com Express no nodejs
*/
const http = require('http');
const porta = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode=200;
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.end('Teste express no nodejs');
})

server.listen(porta || 3300, () => {
    console.log('Servidor Ativado..');
})