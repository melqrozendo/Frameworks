const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Servidor Ativado..');
    res.end();
}).listen(3001, () => {console.log('Server rodando..')});