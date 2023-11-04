import { useRef, useEffect } from "react";
import { Chart } from "chart.js";
import styles from "./../common.module.css";



export default function RamMetric(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(
            canvasRef.current.getContext("2d"),
            {
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            data: [25, 75],
                            backgroundColor: [
                                "red",
                                "#444444"
                            ],
                        },
                    ]
                },
                options: {
                    cutout: "90%",
                    borderColor: "transparent",
                    rotation: -90,

                },
                
            }
        );

        return (() => {
            chart.destroy();
        });
    }, []);

    return (
        <div 
            className={`${styles["stat-block"]} ${styles["stat-block-ram"]}`}
            style={props.styles}
        >
            <img
                className={styles["stat-block-ram__gradient"]}
                src="/img/gradient.svg"
                alt=""
            />
            <div className={styles["stat-block-title"]}>{props.title}</div>
            <canvas
                className={styles["stat-block-ram__view"]}
                ref={canvasRef}
            ></canvas>
        </div>
    )
}