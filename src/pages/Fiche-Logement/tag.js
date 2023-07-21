import styles from "./FicheLogement.module.css";

function Tag(props) {
    return (
        <div className={styles.tag}>
            <span>{props.name}</span>
        </div>
    );
}

export default Tag;