import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import CoverHeader from "../../components/coverHeader";
import coverImage from "../../assets/Image source 2.jpg";
import Collapse from "../../components/Collapse";
import styles from "./APropos.module.css";

function APropos() {
    return (
        <>
            <Header />
            <CoverHeader src={coverImage} name="the-mountains-when-it-snows" title=""/>
            <div className={styles.content}>
                <Collapse title="Fiabilité"
                          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                                    régulièrement vérifiées par nos équipes."/>
                <br/>
                <Collapse title="Respect"
                          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                          perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <br/>
                <Collapse title="Service"
                          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                          perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <br/>
                <Collapse title="Sécurité"
                          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                          également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
            <Footer />
        </>
    );
}

export default APropos;