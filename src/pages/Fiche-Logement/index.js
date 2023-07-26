import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Collapse from "../../components/Collapse";
import styles from "./FicheLogement.module.css";
import data from "../../data.json";
import Tag from "./tag";
import Carrousel from "./carrousel";
import { useParams } from "react-router-dom";
import StarRating from "./starRating";

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
                <div className={styles.hostAndRating}>
                    <StarRating />
                    <div className={styles.host}>
                        <span className={styles.hostName}>{logement.host.name}</span>
                        <img className={styles.hostImg} src={logement.host.picture}/>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.collapseSection}>
                    <Collapse title="Description">
                        <p className={styles.collapseParagraph}>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Equipements">
                        <ul className={styles.list}>{listEquipment}</ul>
                    </Collapse>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FicheLogement;