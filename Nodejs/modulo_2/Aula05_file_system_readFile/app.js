/*
Modulo fs(file system):

leitura e retorno do arq.html
readFile()

criação de um arquivo.txt
appendFile()

*/
const http = require('http'); //modulo http
const fs = require('fs'); //modulo fs
const porta = process.env.PORT; //escolher porta de desenvolvimento
// const porta = 3000;

const server = http.createServer((req, res) => {
    //atraves do modulo fs, vamos retornar o arq.html quando o servidor for chamado e anexa-lo em arquivo
    fs.readFile('index.html', (err, arquivo) => {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

server.listen(porta || 3000, () => {
    console.log('Servidor Ativado..');
})