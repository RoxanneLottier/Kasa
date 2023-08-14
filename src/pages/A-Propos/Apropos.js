import CoverHeader from "../../components/CoverHeader/coverHeader";
import coverImage from "../../assets/Image source 2.jpg";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./APropos.module.css";

function APropos() {
    return (
        <>
            <CoverHeader src={coverImage} name="the-mountains-when-it-snows" title=""/>
            <div className={styles.content}>
                <Collapse title="Fiabilité">
                    <p className={styles.paragraph}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                                    régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <br/>
                <Collapse title="Respect">
                    <p className={styles.paragraph}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                          perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <br/>
                <Collapse title="Service">
                    <p className={styles.paragraph}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                          perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <br/>
                <Collapse title="Sécurité">
                    <p className={styles.paragraph}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                          également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </>
    );
}

export default APropos;