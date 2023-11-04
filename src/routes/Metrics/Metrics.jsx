import Counter from "./components/Counter";
import styles from "./common.module.css";
import RamMetric from "./components/RamMetric";

export default function Metrics() {
    return (
        <div className={styles.stat}>
            <Counter
                title={"Количество соединений"}
                value={"300"}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}
            />
            <Counter
                title={"Количество соединений"}
                value={"300"}
                styles={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 1,
                    gridRowEnd: 2
                }}
            />
            <RamMetric
                title={"PostgreSQL память"}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 4
                }}
            />
            <Counter
                title={"Самая длинная операция"}
                value={"10 сек"}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 4,
                    gridRowEnd: 5
                }}
            />
            <Counter
                title={"Среднее время отклика"}
                value={"5 сек"}
                styles={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 5,
                    gridRowEnd: 6
                }}
            />
        </div>
    );
}