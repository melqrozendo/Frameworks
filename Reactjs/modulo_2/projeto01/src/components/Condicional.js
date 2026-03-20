import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        // ao usuario digitar ele preenche o setUserEmail
        setUserEmail(email)
        // console.log(userEmail)
    }

    function limparEmail() {
        // preencher com vazio
        setUserEmail('')
    }
    
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                type="text" 
                placeholder="Digite o seu e-mail..."
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário foi: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional