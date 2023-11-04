import { Chart, registerables  } from "chart.js";
import { useEffect, useRef } from "react";

Chart.register(...registerables);

export default function ChartElement(props) {
    const canvas = useRef(null);
    useEffect(() => {
        // const chart = new Chart(
        //     canvas.current.getContext("2d"),
        //     {}
        // );

        return () => {};
    }, []);

    return (
        <div>
            <canvas ref={canvas}></canvas>
        </div>
    );
}