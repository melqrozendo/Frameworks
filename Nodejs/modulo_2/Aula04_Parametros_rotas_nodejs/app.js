const http = require('http');//chamada do modulo http
//definir porta, host
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

//req (vem o conteudo da url)
//res (vai o conteudo na url)

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //interceptando rotas de parametros de entrada na url
    res.write(req.url);
    //definindo paramentros de entrada na url
    const p = url.parse(req.url, true).query;
    console.log(p);
    res.write('</br>' + p.nome);
    res.write('</br>' + p.profissao);
    
    res.end();
});

//navegador: 127.0.0.1:3000/?nome=melq&profissao=programador

//listen(<porta>,<host>,<função de backlog/callback>)
servidor.listen(porta, host, () =>{
    console.log('Servidor Ativado!');
});