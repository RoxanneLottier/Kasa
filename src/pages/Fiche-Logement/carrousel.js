import styles from "./FicheLogement.module.css";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";

function Carrousel() {
    return (
        <div className={styles.carrousel}>
            <img src={arrowLeft}/>
            <img src={arrowRight}/>
        </div>
    );
}

export default Carrousel;