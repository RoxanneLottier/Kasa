import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import CoverHeader from "../../components/coverHeader";
import coverImage from "../../assets/Image source 1.jpg"
import Thumb from "./thumb";
import styles from "./Home.module.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";

function Home() {
    return (
        <>
            <Header />
            <CoverHeader src={coverImage} name="the-sea-in-fall" title="Chez vous, partout et ailleurs"/>

            <section className={styles.thumbSection}>
                {data.map(data => {
                    return(
                            <Thumb  title={data.title}
                                    src={data.cover}
                                    key={data.id}
                                    value={data.id}/>
                    )
                })}
            </section>
            <Footer />
        </>
    );
};

export default Home;