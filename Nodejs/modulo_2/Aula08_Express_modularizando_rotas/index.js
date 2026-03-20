const express = require('express');
const rotas = require('./rotas/rotas');
const porta = process.env.PORT || 3000;

const app = express();
//definir ao app o uso das rotas definidas no arq rotas
app.use('/', rotas);
//definir uma rota geral, caso não encontre
app.get('*', (req, res) => {
    res.send('API em Teste!');
})

app.listen(porta, () => {
    console.log('Servidor Ativado...');
})