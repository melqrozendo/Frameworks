/*Importar um outro arquivo */
import Frase from './Frase'
function Intro() {
    return (
        <div>
            <p>Introdução ao JS</p>
            <Frase/>
        </div>
    )
}

export default Intro