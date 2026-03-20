// importando modules.css
import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <h2 className={styles.fraseContent}>Definido dados ao componetes</h2>
        </div>
    )
}

export default Frase