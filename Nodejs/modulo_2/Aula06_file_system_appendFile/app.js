/*
Modulo fs(file system):

leitura e retorno do arq.html
readFile()

criação de um arquivo.txt
appendFile()
openFile

*/
const http = require('http'); //modulo http
const fs = require('fs'); //modulo fs
const porta = process.env.PORT;
// const porta = 3000;

const server = http.createServer((req, res) => {
    //atraves do modulo fs, vamos criar um arq.txt quando o servidor for chamado
    fs.appendFile('teste.txt', 'Testando Nodejs', (err) => {
        if(err)throw err
        console.log('Arquivo Criando com Sucesso!');
        res.end();
    })
})

server.listen(porta || 3000, () => {
    console.log('Servidor Ativado..');
})