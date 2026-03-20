//criar um componente Button e importando
import Button from "./evento/Button"
// Usando eventos
function Evento({numero}) {
    // criando funcao do evento
    function meuEvento(){
        console.log(`Valor adicionado a Lista: ${numero}`)
    }

    // ativando 1 evento
    function btn1() {
        console.log('Ativando primeiro Evento!')
    }

    function btn2() {
        console.log('Ativando segundo Evento!')
    }
    
    return(
        <div>
            <Button event={btn1} text="Primeiro Evento" />
            <Button event={btn2} text="Segundo Evento" />
            <button onClick={meuEvento}>Acesse</button>
        </div>
    )
}

export default Evento