import styles from "./Collapse.module.css";
import { useState, useRef } from "react";


function Collapse(props) {

    //Hook state set to false
    const [open, setOpen] = useState(false);

    //Toogle function set to closed used on onClick to toogle between open and closed
    const toogle = () => {
        setOpen(!open);
    };

    // declare the useRef hook. Used to stock the value of the size of the div when collapse is open
    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);

    return (
    <div className={styles.collapseContainer}>
        <div className={styles.bar}>
            <h2 className={styles.h2}>{props.title}</h2>
            <svg className={open ? styles.arrowDown : styles.arrowUp} onClick={toogle} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white"/>
            </svg>
        </div>
        <div ref={contentRef}
             style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}
             className={open ? styles.contentShow : styles.contentParent}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default Collapse;