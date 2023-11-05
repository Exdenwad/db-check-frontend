import styles from "./Warnings.module.css";

function getMessages(args = []) {
    return args?.map((el, idx) => {
        return (
            <div className={styles["error_container"]} key={idx}>
                <img src="img/error.svg" alt="error" />
                <p className={styles["error_container_text"]}>
                    {`[${el?.data ?? " "}] ${el?.description}`}
                </p>
            </div>
        );
    });
}

export default function Warnings(props) {
    return (
        <div className={styles.content}>
        <div className={styles["errors_row"]}>
            <p className={styles["errors_row_title"]}>
                Предупреждения
            </p>
            <p className={styles["errors_row_count"]}>
                Количество: {props?.allerts?.length ?? 0}
            </p>
        </div>
        {getMessages(props?.allerts)}
    </div>
    );
}