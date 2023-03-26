import Home from "../templates/HomePage";
import LocalizeSe from "../templates/LocalizeSePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MotoristasPage from "../templates/MotoristasPage";

function RoutesApp() {
  var props = {
    placeHolder: "",
  };

  return (
    <HashRouter>
      <Routes>
        <Route element={<Home props={true} />} path="/" />
        <Route element={<LocalizeSe props={props} />} path="/localize-se" />
        <Route element={<MotoristasPage props={props} />} path="/motoristas" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
