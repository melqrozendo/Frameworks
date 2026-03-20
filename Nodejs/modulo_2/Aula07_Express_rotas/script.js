/*
Criando rotas com Express no nodejs
*/
const express = require('express');
const app = express();

const porta = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Seja-bem vindo ao site!');
})
app.get('/about', (req, res) => {
    res.json({user: 'Rozendo'});
})

app.listen(porta || 3300, () => {
    console.log('Servido rodando..');
})