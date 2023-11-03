import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./routes/index";
import { Dashboards } from "./routes/Dasboards/Dashboards";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<MainPage />} />
                <Route path={"/test"} element={<Dashboards />} />
            </Routes>
        </>
    )
}
