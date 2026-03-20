// craindo fragments
import Item from "./Item"

function List() {
    return (
        <>
            <ul>
                <Item marca="Ferrari" fabricacao={2025}/>
                <Item marca="Fiat" fabricacao={2026}/>
                <Item marca="Renault" fabricacao={2015}/>
                <Item />
            </ul>
        </>
    )
}

export default List