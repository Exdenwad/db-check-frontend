import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Errors from "./routes/Errors/Errors";
import Metrics from "./routes/Metrics/Metrics";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Errors />} />
                <Route path={"/metrics"} element={<Metrics />} />
            </Routes>
        </>
    )
}
