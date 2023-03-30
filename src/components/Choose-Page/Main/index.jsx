import { useNavigate } from "react-router-dom";
import { app } from "../../../firebase/firebaseApp";
import "./style.css";

export const MainChoosePage = () => {
  const navigation = useNavigate();
  return (
    <main className="container-main-choose-page">
      <div className="text-container-choose-page">
        <span className="choose-text">Selecione uma opção para registrar</span>
      </div>
      <div className="buttons-container">
        <button key="motorista" className="button" type="button">
          Motorista
        </button>
        <button key="usuario" className="button" type="button">
          Usuário
        </button>
      </div>
    </main>
  );
};
