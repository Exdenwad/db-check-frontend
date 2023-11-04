import Counter from "./components/Counter";
import styles from "./common.module.css";
import RamMetric from "./components/RamMetric";
import { useEffect, useState } from "react";
import { config } from "../../store/environment";

function cropNumberSymbols(number, sizeAfterPoint, suffix = "") {
    if(!number) {
        return "неизвестно";
    }

    if (number === 0) {
        return `${number} ${suffix}`;
    }

    return `${number.toFixed(sizeAfterPoint)} ${suffix}`
}

export default function Metrics(props) {
    const [status, setStatus] = useState(Object.create(null));
    useEffect(() => {
        fetch(`https://api.telegram.org/bot${config.tgBotToken}/getMe`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((jsData) => {
                if (jsData?.ok) {
                    setStatus("ok");
                } else {
                    setStatus("tg");
                }
            })
            .catch((err) => {
                setStatus("err");
            });
        return (() => {});
    }, []);
    return (
        <div className={styles.stat}>
            <Counter
                title={"Бот SusMonitoring"}
                additionalClass={styles["stat-block_gap"]}
                value={
                    <div className={styles["stat-block-bot-status"]}>
                        <div className={styles["stat-block-bot-status__item"]}>
                            <img
                                src={
                                    `/img/status/${status === "ok" ? "ok_filled" : "ok_empty"}.svg`
                                }
                                alt=""
                            />
                            Работает
                        </div>
                        <div className={styles["stat-block-bot-status__item"]}>
                            <img
                                src={
                                    `/img/status/${status === "tg" ? "tg_filled" : "tg_empty"}.svg`
                                }
                                alt=""
                            />
                            Проблемы с ТГ
                        </div>
                        <div className={styles["stat-block-bot-status__item"]}>
                            <img
                                src={
                                    `/img/status/${status === "err" ? "err_filled" : "err_empty"}.svg`
                                }
                                alt=""
                            />
                            Не работает
                        </div>
                    </div>
                }
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}
            />
            <Counter
                title={"Количество соединений"}
                value={props?.["conns_num"] ?? 0}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 2,
                    gridRowEnd: 3
                }}
            />
            <Counter
                title={"Запросы в секунду"}
                value={props?.["operations"] ?? 0}
                styles={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 3
                }}
            />
            <RamMetric
                title={"PostgreSQL память"}
                percentage={
                    props?.["disk_usage_percantage"] ?? 0
                }
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 3,
                    gridRowEnd: 5
                }}
            />
            <Counter
                title={"Самая длинная операция"}
                value={cropNumberSymbols(props?.["max_operation_duration"], 5, "сек")}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 5,
                    gridRowEnd: 6
                }}
            />
            <Counter
                title={"Среднее время отклика"}
                value={cropNumberSymbols(props?.["mean_response_time"], 5, "сек")}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 6,
                    gridRowEnd: 7
                }}
            />
            <Counter
                title={"В ожидании"}
                value={cropNumberSymbols(props?.["idle_conns"], 1, "%")}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 7,
                    gridRowEnd: 8
                }}
            />
            <Counter
                title={"Откаты транзакций"}
                value={props?.["rollbacks"] ?? 0}
                styles={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 7,
                    gridRowEnd: 8
                }}
            />
        </div>
    );
}