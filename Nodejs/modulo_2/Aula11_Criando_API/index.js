const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json');

server.get('/', (req,res) => {
    return res.json({msg: 'API funcionando com sucesso'});
});

server.get('/filmes', (req,res) => {
    return res.json(filmes);
});

server.listen(3000, () => {
    console.log('servidor rodando..');
});