function Perfil(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Cargo: {props.cargo}</p>
        </div>
    )
}

export default Perfil