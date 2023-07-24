import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Collapse from "../../components/Collapse";
import styles from "./FicheLogement.module.css";
import data from "../../data.json";
import Tag from "./tag";
import Carrousel from "./carrousel";
import { useParams } from "react-router-dom";

function FicheLogement() {
    const { id } = useParams();
    const logement = data.find(element => {return element.id === id});

    const equipments = logement.equipments;
    console.log(equipments);
    const listEquipment = equipments.map(equipment => <li>{equipment}</li>);

    const tags = logement.tags;
    const tagList = tags.map(tag => <li className={styles.tag}>{tag}</li>);
    console.log(tags)

    return (
        <>
            <Header />
            <Carrousel />
            <div className={styles.logementHeader}>
                <div className={styles.titleHeader}>
                    <h1 className={styles.h1}>{logement.title}</h1>
                    <span className={styles.span}>{logement.location}</span>
                    <ul className={styles.tagSection}>
                        {tagList}
                    </ul>
                </div>
                <div className={styles.host}>
                    <span className={styles.hostName}>{logement.host.name}</span>
                    <img className={styles.hostImg} src={logement.host.picture}/>
                    {/* star rating */}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.collapseSection}>
                    <Collapse title="Description" description={logement.description}/>
                    <Collapse title="Equipements" description={listEquipment}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement;