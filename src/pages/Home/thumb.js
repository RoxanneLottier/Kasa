import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import data from "../../data.json"

function Thumb(props) {
    return (
        <figure className={styles.figure} value={props.value}>
            <Link className={styles.link} to={`/fiche-logement/${props.value}`}>
                <img className={styles.img} src={props.src} alt={props.name}/>
                <div className={styles.container}></div>
                <figcaption className={styles.figcaption}>{props.title}</figcaption>
            </Link>
        </figure>
    );
};

export default Thumb;