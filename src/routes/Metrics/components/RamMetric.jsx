import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import styles from "./../common.module.css";

Chart.register(...registerables);

export default function RamMetric(props) {
    const canvasRef = useRef(null);
    const canvasBack = useRef(null);
    const percentageValue = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {            
        const gradient = canvasRef.current.getContext("2d").createLinearGradient(0, 200, canvasRef.current.width, canvasRef.current.height);
        gradient.addColorStop(0, "#B1FA63");
        gradient.addColorStop(0.5, "#FF8040");
        gradient.addColorStop(1, "#9881FF");

        const chart = new Chart(
            canvasRef.current.getContext("2d"),
            {
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [props.percentage, 100-props.percentage],
                            borderRadius: 10,
                            backgroundColor: [gradient, "#444444"],
                            borderWidth: 0,
                        },
                    ]
                },
                options: {
                    cutout: "90%",
                    rotation: -90,
                    circumference: 180,
                    plugins: {
                        tooltip: {
                            enabled: false
                        }
                    }
                },
            }
        );

        const chartBack = new Chart(
            canvasBack.current.getContext("2d"),
            {
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [100],
                            borderRadius: 10,
                            borderWidth: 0,
                            backgroundColor: ['#444444'],
                        },
                    ]
                },
                options: {
                    cutout: "90%",
                    rotation: -90,
                    circumference: 180,
                    plugins: {
                        tooltip: {
                            enabled: false
                        }
                    }
                },
                
            }
        );

        setTimeout(() => {
            percentageValue.current.style.width = canvasRef.current.style.width;
            const angle = props.percentage / 100 * 180;
            arrowRef.current.style.transform = `rotate(${angle}deg)`;
        }, 100);

        return (() => {
            chart.destroy();
            chartBack.destroy();
        });
    }, []);

    return (
        <div
            className={`${styles["stat-block"]} ${styles["stat-block-ram"]}`}
            style={props.styles}
        >
            <div className={styles["stat-block-title"]}>{props.title}</div>
            <canvas
                className={styles["stat-block-ram__view"]}
                ref={canvasRef}
                style={{
                    position:"absolute",
                    top: 0,
                    zIndex: 0
                }}
            ></canvas>
            <canvas
                className={styles["stat-block-ram__view"]}
                style={{
                    position:"absolute",
                    top: 0,
                    zIndex: -1
                }}
                ref={canvasBack}
            ></canvas>
            <div
                ref={percentageValue}
                className={styles["stat-block-ram__value"]}
            >
                <img
                    className={styles["stat-block-ram__arrow"]}
                    src="/img/arrow.svg"
                    alt=""
                    ref={arrowRef}
                />
                {props.percentage}
            </div>
        </div>
    )
}