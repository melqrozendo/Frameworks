//definir uma função auto-executavel
(async () => {
    //requisitando o modulo db
    const db = require('./db');

    //definir a consulta de INSERT
    // console.log('Inserir novo cliente:');
    // await db.insertClientes({nome:'Joana', idade:'35'});

    //definir a consulta de UPDATE
    // const nome = 'Joana';
    // await db.updateClientes(nome, {nome:'Joana', idade:'53'});
    // console.log('cliente ' + nome + ' atualizado');

    //definir a consulta de DELETE
    // const nome = 'Joana';
    // await db.deleteClientes(nome);
    // console.log('cliente ' + nome + ' deletado');

    //definir a consulta de SELECT
    console.log('Obter todos os clientes:');
    const clientes = await db.selectClientes();
    console.log(clientes);
})();
