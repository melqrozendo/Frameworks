const express = require('express');
const rotas = express.Router();

//criar um json (database virtual)
let userInfo=[
    {'user': 'Edificio01', 'info': 'Sistema01'},
    {'user': 'Edificio02', 'info': 'Sistema02'},
    {'user': 'Edificio03', 'info': 'Sistema03'},
    {'user': 'Edificio04', 'info': 'Sistema04'},
    {'user': 'Edificio05', 'info': 'Sistema05'},
    {'user': 'Edificio06', 'info': 'Sistema06'},
    {'user': 'Edificio07', 'info': 'Sistema07'},
]

//definir rota do tipo get() na raiz
rotas.get('/', (req, res) => {
    res.json({hello: 'Seja bem-vindo'})
})

//definir parametros a rota
rotas.get('/:userid', (req, res) => {
    //user vai receber o paramentro de entrada na url
    const user = req.params.userid;
    //userV vai verificar se encontra no json a chave igual ao parametro de entrada
    const userV = userInfo.find(i=>i.user == user);
    if(!userV){
        res.status(404).json(
            {erro: 'Usuario nao encontrado', userP: user}
        )
    }else{
        res.status(200).json(userV)
    }
})

//definir o modulo de exportação do arq
module.exports = rotas;
