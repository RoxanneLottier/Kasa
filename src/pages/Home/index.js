import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import CoverHeader from "../../components/coverHeader";
import image from "../../assets/Image source 1.jpg"

function Home() {
    return (
        <>
            <Header />
            <CoverHeader src={image} name="the-sea-in-fall" title="Chez vous, partout et ailleurs"/>
            <Footer />
        </>
    );
};

export default Home;