import Home from "../templates/HomePage";
import LocalizeSe from "../templates/user/LocalizeSePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/user/MotoristasPage";
import { LoginPage } from "../templates/LoginPage";
import { RegisterPage } from "../templates/RegisterPage";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route Component={LoginPage} path="/login" />
        <Route Component={RegisterPage} path="/register" />
        <Route element={<Home props={true} />} path="/" />
        <Route Component={LocalizeSe} path="/localize-se" />
        <Route element={<MotoristasPage props={true} />} path="/motoristas" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
