import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Errors from "./routes/Errors/Errors";
import Metrics from "./routes/Metrics/Metrics";
import { useState, useEffect } from "react";
import { config } from "./store/environment";
import Popup from "./components/Popup/Popup";

export default function App() {
    const [state, setState] = useState(Object.create(null));

    useEffect(() => {
        fetch(config.domemName + "api/metrics")
        .then((data) => data.json())
        .then((jsData) => {
            setState(jsData);
        });

        return(() => {});
    }, []);

    return (
        <>
            <Header />
            <Popup isActive={state?.["is_active"]} />
            <Routes>
                <Route index element={<Errors {...state}/>} />
                <Route path={"/metrics"} element={<Metrics {...state}/>} />
            </Routes>
        </>
    )
}
