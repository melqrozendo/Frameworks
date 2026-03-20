import Button from "./evento/Button"

function Evento() {

    function meuEvento () {
        console.log('Ativando primeiro evento!')
    }
    function segundoEvento () {
        console.log('Ativando o segundo evento!')
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            {/* criar um componente de button */}
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            {/* <button onClick={meuEvento}>Ativar</button> */}
        </div>
    )
}

export default Evento