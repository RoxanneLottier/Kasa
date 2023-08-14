import { Link } from "react-router-dom";
import styles from "./404.module.css";

function PageNotFound() {
    return (
        <>
            <div className={styles.div}>
                <span className={styles.span}>404</span>
                <p className={styles.p}>Oups! La page que vous demandez n'existe pas.</p>
                <Link className={styles.link} to="/">
                    <p>Retourner sur la page d’accueil</p>
                </Link>
            </div>
        </>
    );
}

export default PageNotFound;