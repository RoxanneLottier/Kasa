import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Nav(props) {
    return (
       <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li><NavLink className={({ isActive }) => (isActive ? styles.linkSelected : styles.link)} to="/">Accueil</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? styles.linkSelected : styles.link)} to="/a-propos">A Propos</NavLink></li>
            </ul>
       </nav>
    );
}

export default Nav;