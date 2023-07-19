import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Nav() {
    return (
       <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li><Link className={styles.link} to="/">Accueil</Link></li>
                <li><Link className={styles.link} to="/a-propos">A Propos</Link></li>
            </ul>
       </nav>
    );
}

export default Nav;