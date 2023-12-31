import { Link } from "react-router-dom";
import styles from "./Thumb.module.css";

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