// importando hook
import {useState} from 'react'

function Form() {

    // adicionar
    function cadastrarUsuario(e){
        e.preventDefault() /*para o evento de envio para o backend */
        console.log(`Usuario ${name} foi cadastrado com senha: ${password}`)

    }

    // defininco constantes de atribuição do campo e de alteracao do campo
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            {/* disparar um evento submit */}
            <form onSubmit={cadastrarUsuario}>
                {/* campo nome */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome:" onChange={(e) => setName(e.target.value)}/>
                </div>
                {/* campo password */}
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha:" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {/* campo submit */}
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form