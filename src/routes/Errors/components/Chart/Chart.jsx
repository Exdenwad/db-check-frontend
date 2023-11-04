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
    const canvas = useRef(null);
    useEffect(() => {
        const speedData = {
            datasets: [
                {
                    axis: "x",
                    data: [35, 50, 65, 50, 70, 90, 40, 65, 50, 35, 15],
                    tension: 0.5,
                    borderColor: function(context) {
                        const chart = context.chart;
                        const {ctx, chartArea} = chart;
                        if (!chartArea) {
                          // This case happens on initial chart load
                          return;
                        }
                        return getGradient(ctx, chartArea);
                    },
                }
            ]
          };
        const chart = new Chart(
            canvas.current.getContext("2d"),
            {
                type: 'line',
                data: speedData,
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            type: "linear",
                            beginAtZero: true,
                            grace: "10",
                            grid: {
                                color: ""
                            },
                            axis: "y"
                        },
                        x: {
                            type: "linear",
                            beginAtZero: true,
                            grace: "50",
                            grid: {
                                color: ""
                            },
                            axis: "x",
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
            <canvas ref={canvas} className={styles["chart-view"]}></canvas>
        </>
    );
}