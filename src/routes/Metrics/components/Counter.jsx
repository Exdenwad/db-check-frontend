import styles from "./../common.module.css";

export default function Counter(props) {
    return (
        <div
            className={`${styles["stat-block"]} ${styles["stat-block-counter"]}`}
            style={props.styles}
        >
            <div className={styles["stat-block-title"]}>
                {props.title}
                <img
                    className={styles["stat-block-counter__img"]}
                    src="img/star.svg" alt="star"
                />
            </div>
            <div className={styles["stat-block-counter__value"]}>
                {props.value}
            </div>
        </div>
    );

}