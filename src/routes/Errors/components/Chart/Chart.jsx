import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";
import styles from "./Chart.module.css";

Chart.register(...registerables);

function getGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(0, chartArea.left, 100, chartArea.right);
    gradient.addColorStop(0, "#B1FA63");
    gradient.addColorStop(0.3, "#FE7733");
    gradient.addColorStop(0.6, "#9881FF");
    return gradient;
}

export default function ChartElement(props) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const gradient = canvasRef.current.getContext("2d").createLinearGradient(0, 200, canvasRef.current.width, canvasRef.current.height);
        gradient.addColorStop(0, "#B1FA63");
        gradient.addColorStop(0.5, "#FF8040");
        gradient.addColorStop(1, "#9881FF");

        const chart = new Chart(
            canvasRef.current.getContext("2d"),
            {
                type: 'line',
                data: {
                    datasets: [
                        {
                            borderColor: gradient,
                            data: [
                                {
                                    x: '15',
                                    y: 50
                                },
                                {
                                    x: '30',
                                    y: 70
                                },
                                {
                                    x: '45',
                                    y: 60
                                },
                                {
                                    x: '60 сек',
                                    y: 40
                                },
                            ],
                            cubicInterpolationMode: 'monotone',
                            tension: 0.1,
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    scales: {
                        y: {
                            axis: "y",
                            ticks: {
                                color: "#FFFFFFCC"
                            },
                            grid: {
                                display: false
                            },
                            border: {
                                color: "#FFFFFFCC"
                            }
                        },
                        x: {
                            axis: "x",
                            ticks: {
                                color: "#FFFFFFCC"
                            },
                            grid: {
                                display: false
                            },
                            border: {
                                color: "#FFFFFFCC"
                            }
                        }
                    }
                }
            }
        );

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className={styles["chart-wrapper"]}></canvas>
        </>
    );
}