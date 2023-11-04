import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
const navigate = useNavigate();
return (
        <div className={styles.navbar}>
            <div className={`${styles["button-wrapper"]} ${window.location.pathname === "/" ? styles["button-wrapper_active"] : ""}`}>
                <button onClick={()=> navigate("/")}
                    className={styles.button}
                    >Ошибки</button>
            </div>

            <div className={`${styles["button-wrapper"]} ${window.location.pathname === "/metrics" ? styles["button-wrapper_active"] : ""}`}>
                <button onClick={()=> navigate("/metrics")}
                    className={styles.button}
                    >Метрики</button>
            </div>
        </div>
    );
}
