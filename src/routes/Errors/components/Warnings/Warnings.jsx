import styles from "./Warnings.module.css";

function getMessages(args) {
    return args.map((_, idx) => {
        return (
            <div className={styles["error_container"]} key={idx}>
                <img src="img/error.svg" alt="error" />
                <p className={styles["error_container_text"]}>
                    Слишком долгое ожидание ответа на запрос
                </p>
            </div>
        );
    });
}

export default function Warnings(props) {
    props = [1, 2, 3, 4];
    return (
        <div className={styles.content}>
        <div className={styles["errors_row"]}>
            <p className={styles["errors_row_title"]}>
                Критические ошибки
            </p>
            <p className={styles["errors_row_count"]}>
                Количество: {props.length}
            </p>
        </div>
        {getMessages(props)}
    </div>
    );
}