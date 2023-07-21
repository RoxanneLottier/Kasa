import styles from "./Collapse.module.css";
import { useState } from "react";
import arrowClosed from "../assets/arrow_closed.png";
import arrowOpen from "../assets/arrow_open.png";


function Collapse(props) {

    const [open, setOpen] = useState(false);

    const toogle = () => {
        setOpen(!open);
    };

    return (
    <div className={styles.collapseContainer}>
        <div className={styles.bar}>
            <h2 className={styles.h2}>{props.title}</h2>
            <img onClick={toogle} src={arrowClosed}/>
        </div>
            {open && (
                <div className= {`${styles.content} toogle`}>
                    <p className={styles.p}>{props.description}</p>
                </div>
            )}
    </div>
    );
}

export default Collapse;