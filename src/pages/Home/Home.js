import CoverHeader from "../../components/CoverHeader/coverHeader";
import coverImage from "../../assets/Image source 1.jpg"
import Thumb from "../../components/Thumb/thumb";
import styles from "./Home.module.css";
import data from "../../data.json";

function Home() {
    return (
        <>
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
        </>
    );
};

export default Home;