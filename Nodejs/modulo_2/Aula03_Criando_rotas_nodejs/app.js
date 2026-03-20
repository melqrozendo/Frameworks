const http = require('http');//chamada do modulo http
//definir porta, host
const porta = 3000;
const host = '127.0.0.1';//host padrão

//req (vem o conteudo da url)
//res (vai o conteudo na url)

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    //interceptando as rotas, verificando a url
    if(req.url == '/'){
        res.write('<h2>Page Home</h2>');
    }else if(req.url == '/about'){
        res.write('<h2>Page About</h2>');
    }else if(req.url == '/contact'){
        res.write('<h2>Page Contact</h2>');
    }
    res.end();
});

//listen(<porta>,<host>,<função de backlog>)
servidor.listen(porta, host, () => {
    console.log('Servidor Ativado!');//callback
});