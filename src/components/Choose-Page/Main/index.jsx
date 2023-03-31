import { useNavigate } from "react-router-dom";
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
        <button
          onClick={() => {
            navigation("/dados-adicionais-user");
          }}
          key="usuario"
          className="button"
          type="button"
        >
          Cliente
        </button>
      </div>
    </main>
  );
};
