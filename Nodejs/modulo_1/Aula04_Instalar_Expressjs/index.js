//declarar uma variavel que receba o modulo do express
const express = require("express");
//declarar uma variavel que receba a função express(); ao fazer isso 'instanciamos' ou criamos uma copia do express para a variavel 'app'
const app = express();

//criando uma rota para aplicação com o metodo: get() e adicionando uma função de callback
app.get("/", function(req, res){
    //para exibir uma msg, chamamos o parametro de resposta (res é um objeto que esta sendo passado para esta função)
    res.send('<h1>Seja bem-vindo ao meu app!</h1>');
});

//criando outra rota para a aplicação
app.get("/blog", function(req, res){
    //podemos adicionar uma pagina de texto, pagina html, etc
    res.send("Seja bem-vindo ao meu blog");
});

//criando uma ROTA DINAMICA
app.get("/hello/:cargo/:nome", function(req, res){
    //res.send(req.params);
    //só podemos usar a função send(); uma vez
    res.send('<h2> Ola '+req.params.nome+'</h2>'+'<p> do setor de: '+req.params.cargo+'</p>');
});


//para abrir um servidor com o express  vamos utilizar o metodo listen(<numero da porta>); veja que abaixo desse metodo nao pode ter codigo
//para exibir uma msg no terminal de que o servidor esta rodando, temos que criar uma função de callback
app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081')
});//ultima linha do codigo