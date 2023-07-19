import logo from '../../assets/LOGO.png'

const logoImage = {
    alt: 'logo-Kasa'
};

function Logo() {
    return (
        <img src={logo} alt={logoImage.alt} />
    );
}

export default Logo;