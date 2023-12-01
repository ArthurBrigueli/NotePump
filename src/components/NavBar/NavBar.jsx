import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import logoNav from '../../img/logoNav.jpg'



const NavBar = ()=>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.container_logo}>
                <img src={logoNav} alt=""/>
            </div>
            <ul>
                <li>
                    <Link to="/NotePump">NotePump</Link>
                </li>
                <li>
                    <Link to="/MinhaLista">Minha Lista</Link>
                </li>
                <li>
                    <Link to="/NotePump">NotePump</Link>
                </li>
            </ul>
            <div className={styles.container_profile}>
                <img src={logoNav} alt=""/>
                <span>Arthur</span>
            </div>
        </nav>
    )
}


export default NavBar