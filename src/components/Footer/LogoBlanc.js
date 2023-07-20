import logoBlanc from '../../assets/LOGO-blanc.png'
import styles from "./Footer.module.css";

const logoBlancImage = {
    alt: 'logo-blanc-kasa'
};

function LogoBlanc() {
    return (
        <img className={styles.img} src={logoBlanc} alt={logoBlancImage.alt} />
    );
}

export default LogoBlanc;