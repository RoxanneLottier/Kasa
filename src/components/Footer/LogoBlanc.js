import logoBlanc from '../../assets/LOGO-blanc.png'

const logoBlancImage = {
    alt: 'logo-blanc-kasa'
};

function LogoBlanc() {
    return (
        <img src={logoBlanc} alt={logoBlancImage.alt} />
    );
}

export default LogoBlanc;