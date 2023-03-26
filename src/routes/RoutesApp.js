import Home from "../templates/HomePage";
import LocalizeSe from "../templates/LocalizeSePage";
import { HashRouter, Route, Routes } from "react-router-dom";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home props={true} />} path="/" />
        <Route Component={LocalizeSe} path="/localize-se" />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
