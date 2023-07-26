import styles from "./FicheLogement.module.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Carrousel() {
    const { id } = useParams();
    const logement = data.find(element => {return element.id === id});
    const [activeIndex, setActiveIndex] = useState(0);

    const pictures = logement.pictures;
    const pictureList = pictures.map((picture, index) =>
        <li key={index} className={index === activeIndex ? styles.activePictures : styles.inactivePictures}>
            <img className={styles.picture} src={picture}/>
            </li>)

    const len = pictureList.length - 1;

    function onClickForward() {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    };

    function onClickBackward() {
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
    }

    return (
        <div className={styles.carrousel}>
            <ul activeindex={activeIndex} className={styles.carrouselPictures}>{pictureList}</ul>
            <div className={styles.arrowContainer}>
                <svg onClick={onClickBackward} className={styles.arrowBack} xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>
                <svg onClick={onClickForward} className={styles.arrowForward} xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>
            </div>
            <div className={styles.pictureCountContainer}>
                <span className={styles.pictureCount}>
                    {activeIndex + 1 } / {pictures.length}
                </span>
            </div>
        </div>
    );
}

export default Carrousel;