import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import { Link } from "react-router-dom";
import styles from "./404.module.css";

function PageNotFound() {
    return (
        <>
            <Header />
            <div className={styles.div}>
                <span className={styles.span}>404</span>
                <p className={styles.p}>Oups! La page que vous demandez n'existe pas.</p>
                <p><Link className={styles.link} to="/">Retourner sur la page d’accueil</Link></p>
            </div>
            <Footer />
        </>
    );
}

export default PageNotFound;