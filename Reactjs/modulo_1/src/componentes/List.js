// importar fragmento
import Item from './Item'

function List(){
    return (
        <>
            <h2>Minha Lista</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Renault" ano_lancamento={1964}/>
                <Item marca="Fiat" ano_lancamento={1999}/>
            </ul>
        </>
    )
}

export default List