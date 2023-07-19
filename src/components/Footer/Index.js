import LogoBlanc from "./LogoBlanc";
import Copyright from "./Copyright";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <LogoBlanc />
            <Copyright />
        </footer>
    );
}

export default Footer;