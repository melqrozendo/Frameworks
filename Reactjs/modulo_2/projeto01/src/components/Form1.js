// importanto usestate
import { useState } from "react";
// quando o forms for envianto ele dispara um evento
function Form() {

    function cadastroUsuario(e) {
        // usando metodo para para evento de submit e executar a acao seguinte
        // aqui podemos add um requisicao ajax
        e.preventDefault()
        console.log(`Usuario: ${name}`);
        console.log(`Senha: ${password}`);
        console.log(`Usuário cadastrado com sucesso!`);
    }

    // State: o que vouler & o que vai alterar
    const [ name, setName ] = useState()
    const [ password, setPassword ] = useState()


    return (
        <div>
            <h3>Meu Cadastro:</h3>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome:" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha:"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form