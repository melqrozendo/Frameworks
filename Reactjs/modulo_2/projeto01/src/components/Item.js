// usando fragments 

// importanto proptypes
import PropTypes from 'prop-types'

function Item({ marca, fabricacao }) {
    return (
        <>
            <li>{marca} - {fabricacao}</li>
        </>
    )
}

// validação a nivel de programação
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    frabricacao: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Sem Marca',
    fabricacao: 0
}

export default Item