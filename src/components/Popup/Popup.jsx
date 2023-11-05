import styles from "./Popup.module.css";

export default function Popup(props) {
    if (!props.isVisible) {
        return null;
    }

    return (
        <div
            className={styles["popup-wrapper"]}
        >
            <img
                src="/img/bdclosed.svg"
                alt=""
            />
            База данных не работает
        </div>
    );
}