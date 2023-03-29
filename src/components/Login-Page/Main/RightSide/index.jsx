import { Link } from "react-router-dom";
import "./style.css";

export const RightSide = () => {
  return (
    <div className="right-side">
      <span class="entry-text">Faça o login e conheça a nossa plataforma</span>
      <button type="button" class="google-register">
        <i class="fa-regular fa-g"></i>
        Continuar com Google
      </button>
      <div class="bottom-text">
        <span class="thin-text">Não tem uma conta?</span>
        <Link to="/register">
          <span class="bold-text">Registre-se</span>
        </Link>
      </div>
    </div>
  );
};
