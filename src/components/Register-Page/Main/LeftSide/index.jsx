import { useNavigate } from "react-router-dom";
import "./style.css";

export const LeftSide = () => {
  const navigation = useNavigate();
  return (
    <div className="left-side-register">
      <span className="entry-text">
        Cadastre-se e conheça a nossa plataforma
      </span>
      <button
        type="button"
        className="google-register"
        id="button-register-google"
      >
        Continuar com Google
      </button>
      <div className="bottom-text">
        <span className="thin-text">Já tem uma conta?</span>
        <span
          onClick={() => {
            navigation("/home");
          }}
          className="bold-text"
        >
          Entrar
        </span>
      </div>
    </div>
  );
};
