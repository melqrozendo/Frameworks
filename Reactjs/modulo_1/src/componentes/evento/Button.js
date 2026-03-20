/*
Este componente filho altera o text com base no texto que enviado para ele.
*/
function Button(props) {
    // codificacao mais objetiva, unica linha de codigo
    return <button onClick={props.event}>{props.text}</button>
}

export default Button