import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import logoNav from '../../img/logoNav.jpg'
import { useState } from 'react';
import { useAuth } from '../../../Context/AuthContext';


const NavBar = ()=>{


    const [menuToggle, setMenuToggle] = useState(false)
    const { token, logout } = useAuth();


    const handleToggle = ()=>{
        setMenuToggle(!menuToggle)
    }

    return(
        <nav className={styles.navbar}>
            <div className={styles.container_logo}>
                <img src={logoNav} alt=""/>
            </div>
            <div className={`${styles.container_nav} ${menuToggle && styles.OpenMenu}`}>
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
                    <span>{token && (
                        <button onClick={logout}>Logout</button>
                    )}</span>
                </div>
            </div>
            <div className={styles.menuToggle} onClick={handleToggle}>
                &#9776;
            </div>
        </nav>
    )
}


export default NavBar