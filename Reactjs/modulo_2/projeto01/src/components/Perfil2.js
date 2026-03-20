// uso de props pode ser substituido por structrs
function Perfil2({ nome, idade, cargo, foto }) {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Cargo: {cargo}</p>
        </div>
    )
}

export default Perfil2