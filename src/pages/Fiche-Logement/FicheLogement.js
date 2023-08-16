import Collapse from "../../components/Collapse/Collapse";
import styles from "./FicheLogement.module.css";
import data from "../../data.json";
import Carrousel from "../../components/Carrousel/carrousel";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/starRating";
import PageNotFound from "../404/404";

function FicheLogement() {
    const { id } = useParams();

    try {

    const logement = data.find(element => {return element.id === id});

        if (id == logement.id) {

            const equipments = logement.equipments;
            const listEquipment = equipments.map(equipment => <li key={equipment} >{equipment}</li>);

            const tags = logement.tags;
            const tagList = tags.map(tag => <li key={tag} className={styles.tag}>{tag}</li>);

            const pictures = logement.pictures;
            const rating = logement.rating;

            return (
                <>
                    <Carrousel data={pictures}/>
                    <div className={styles.logementHeader}>
                        <div className={styles.titleHeader}>
                            <h1 className={styles.h1}>{logement.title}</h1>
                            <span className={styles.span}>{logement.location}</span>
                            <ul className={styles.tagSection}>
                                {tagList}
                            </ul>
                        </div>
                        <div className={styles.hostAndRating}>
                            <StarRating data={rating} />
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
                </>
            );

        } else {
            console.log(logement.id)
            return <PageNotFound />;
        }
    } catch (error) {
        console.log(error);
        return <PageNotFound />;
    }
}

export default FicheLogement;