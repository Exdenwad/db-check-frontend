import {Route, Routes} from "react-router-dom";
import { MainPage } from "./routes/index";
import { Dashboards } from "./routes/Dasboards/Dashboards";

function App() {

  return (
    <>
        <Routes>
            <Route index element={<MainPage />}/>
            <Route path={"/test"} element={<Dashboards />}/>
        </Routes>
    </>
  )
}

export default App
