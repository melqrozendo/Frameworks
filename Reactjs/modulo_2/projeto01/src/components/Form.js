// quando o forms for envianto ele dispara um evento
function Form() {

    function cadastroUsuario(e) {
        // usando metodo para para evento de submit e executar a acao seguinte
        e.preventDefault()
        // aqui podemos add um requisicao ajax
        console.log(`Usuário cadastrado com sucesso!`);
    }

    return (
        <div>
            <h3>Meu Cadastro:</h3>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome:"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form