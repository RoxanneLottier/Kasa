import logo from '../../assets/LOGO.png';
import styles from './Header.module.css';

const logoImage = {
    alt: 'logo-Kasa'
};

function Logo() {
    return (
        <img className={styles.img} src={logo} alt={logoImage.alt} />
    );
}

export default Logo;