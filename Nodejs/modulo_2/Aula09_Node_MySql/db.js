const conectar = async () => {
    //verificação
    if(global.conexao && global.conexao.state != 'disconected'){
        return global.conexao;
    }
    //atribuir a mysql a string de conexao
    const mysql = require('mysql2/promise');
    const con = mysql.createConnection("mysql://root:bootyg22@localhost:3306/cadastro");
    console.log('Database connected..');
    //definir uma conexao global
    global.conexao = con;
    return con;
}

// conectar();

//definir as funçoes de manipulação do banco: select, insert, updade, delete

//SELECT**
const selectClientes = async ()=>{
    const con = await conectar();
    const [linhas] = await con.query('SELECT * FROM pessoas');
    return await linhas;
}


//INSERT**
const insertClientes = async(cliente) => {
    const con = await conectar();
    const sql = 'INSERT INTO pessoas (nome, idade) VALUES (?,?)';
    const valores = [cliente.nome, cliente.idade];
    await con.query(sql, valores);
}


//UPDATE**
const updateClientes = async(nome, cliente) => {
    const con = await conectar();
    const sql = 'UPDATE pessoas SET nome=?, idade=? WHERE nome=?';
    const valores = [cliente.nome, cliente.idade, nome];
    //verificação
    console.log(nome);
    console.log(cliente.nome);
    console.log(cliente.idade);
    await con.query(sql, valores);
}

//DELETE**
const deleteClientes = async(nome, cliente) => {
    const con = await conectar();
    const sql = 'DELETE FROM pessoas WHERE nome=?';
    const valores = [nome];
    await con.query(sql, valores);
}

//definir a exportação do modulo
// module.exports = {}

//definir a exportação da função select
module.exports = {selectClientes, insertClientes, updateClientes, deleteClientes}