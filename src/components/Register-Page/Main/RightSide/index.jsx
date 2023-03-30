import { useNavigate } from "react-router-dom";
import "./style.css";

export const RightSide = () => {
  const navigation = useNavigate();
  return (
    <div className="right-side-register">
      <form className="register-form">
        <span className="form-title">Crie uma Conta</span>
        <div className="input-container">
          <label htmlFor="name" className="placeHolder">
            Nome:
          </label>
          <input type="text" id="name" className="input" />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="placeHolder">
            Email:
          </label>
          <input type="email" id="email" className="input" />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="placeHolder">
            Senha:
          </label>
          <input type="password" id="password" className="input" />
          <button
            onClick={() => {
              navigation("/choose-page");
            }}
            id="button-form"
            className="button-next"
            type="button"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};
