// uso do useState
import {useState} from 'react'


function Condicional () {

    // adicionar um state
    const [email, setEmail] = useState()
    /*vamos manipular o email, como se fosse o email do usuario, o usuario vai digitar e ele vai virar um email default*/
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        // console.log('Testando...')
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail}
                {/* cria uma condicao de exibicao */}
                {userEmail && (
                    <div>
                        <p>O email do usúario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional