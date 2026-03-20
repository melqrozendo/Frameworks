function UseStruct({marca, modelo, ano, valor}) {
    return (
        <div>
            <h3>Concessionaria Recife</h3>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
            <p>Ano: {ano}</p>
            <p>Valor: R${valor}</p>
        </div>
    )
}

export default UseStruct