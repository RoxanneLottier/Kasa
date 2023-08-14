import styles from "./CoverHeader.module.css";

function CoverHeader(props) {
    return (
        <div className={styles.coverHeader}>
            <img className={styles.img} src={props.src} alt={props.name}/>
            <div className={styles.container}></div>
            <h1 className={styles.h1}>{props.title}</h1>
        </div>
    );
}

export default CoverHeader;