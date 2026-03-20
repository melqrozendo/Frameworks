// criar uma função é como se fosse cirar um componentes
import Home from './Home'
import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.menuContainer}>
            <h3 className={styles.menuContent}>My first App in ReactJS</h3>
            <Home/>
        </div>
    )
}

export default Menu