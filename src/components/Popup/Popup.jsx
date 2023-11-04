import {useEffect, useState } from "react";
import styles from "./Popup.module.css";

export default function Popup(props) {
    const [isVisible, setIsVisible] = useState(false);

    console.log(props);
    useEffect(() => {
        if (props?.isActive === true) {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 3000);
        }
    }, []);

    return (
        <div
            className={`${styles["popup-wrapper"]} ${isVisible ? styles["popup-wrapper_active"] : ""}`}
        >
            <img
                src="/img/bdclosed.svg"
                alt=""
            />
            База данных не работает
        </div>
    );
}