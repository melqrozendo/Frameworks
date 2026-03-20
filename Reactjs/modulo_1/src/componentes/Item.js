// definido a variaves do tipo string e number:
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// definindo tipos
Item.protoType = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

// definindo default
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento : 0,
}


export default Item