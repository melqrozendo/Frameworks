// carregando modulo express na variavel express
const express = require("express");
// craindo uma instancia ou copia do express para a variavel app
const app = express();

// criando rota por causa da msg: Cannot GET /
app.get("/", function(req, res) {
    // Para exibir msg, chama parando de resposta res + send
    // res.send("Seja bem-vindo ao App!");
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res) {
    res.send("Minha pagina Sobre!");
});

// criando rotas dinamicas com parametros que sao enviados pelo http
app.get("/intro/:cargo", function(req, res) {
    // res.send(req.params);
    res.send(req.params.cargo);
})

// abrindo servidor, com a função listen dispara chama um evento, nisso podemos integrar uma funcao de callback
app.listen(8081, function() {
    console.log('Servidor rodado na url http://localhost:8081');
});