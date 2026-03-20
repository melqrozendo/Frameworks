function RenderLista({itens}) {
    return(
        <>
        <h3>Lista de Itens:</h3>
        {
            itens.map((item) => {
                <p>{item}</p>
            })
        }
        </>
    )
}

export default RenderLista