import Home from "../templates/HomePage";
import LocalizeSe from "../templates/LocalizeSePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/MotoristasPage";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home props={true} />} path="/" />
        <Route element={<LocalizeSe />} path="/localize-se" />
        <Route element={<MotoristasPage />} path="/motoristas" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
