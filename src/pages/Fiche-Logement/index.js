import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Collapse from "../../components/Collapse";
import styles from "./FicheLogement.module.css";
import data from "../../data.json";
import Tag from "./tag";
import Carrousel from "./carrousel";

function FicheLogement() {
    return (
        <>
            <Header />
            <Carrousel />
            <div className={styles.logementHeader}>
                <div className={styles.titleHeader}>
                    <h1 className={styles.h1}>The title</h1>
                    <span className={styles.span}>Paris</span>
                    <div className={styles.tagSection}>
                    {/* {data.map(data => {
                    return(
                            <Tag name={data.tags}/>
                            )
                        })} */}
                    </div>
                </div>
                <div className={styles.host}>
                    <span className={styles.span}>Roxanne Lottier</span>
                    <img/>
                    {/* star rating */}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.collapseSection}>
                    <Collapse title="Description" description="blablabla"/>
                    <Collapse title="Equipements" description="blablabla"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement;