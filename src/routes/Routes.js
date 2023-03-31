import Home from "../templates/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/user/MotoristasPage";
import { LoginPage } from "../templates/LoginPage";
import { RegisterPage } from "../templates/RegisterPage";
import LocalizeSe from "../templates/user/LocalizeSePage";
import ChoosePage from "../templates/ChoosePage";
import Contract from "../templates/user/Contract-page";
import { DadosAdicionaisUserPage } from "../templates/user/DadosAdicionaisUserPage";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route Component={LoginPage} path="/login" />
        <Route Component={RegisterPage} path="/register" />
        <Route Component={ChoosePage} path="/choose-page" />
        <Route
          Component={DadosAdicionaisUserPage}
          path="/dados-adicionais-user"
        />
        <Route element={<Home props={true} />} path="/" />
        <Route element={<MotoristasPage props={true} />} path="/motoristas" />
        <Route element={<LocalizeSe />} path="/localize-se" />
        <Route Component={Contract} path="/contract" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
