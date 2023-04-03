import { useNavigate } from "react-router-dom";
import { ButtonProximoRegister } from "./Button";
import "./style.css";

export const RightSide = () => {
  const navigation = useNavigate();

  const propsProximo = {
    key: "button-form",
    label: "Próximo",
    nav: "/choose-page",
  };
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
          <ButtonProximoRegister props={propsProximo}></ButtonProximoRegister>
        </div>
      </form>
    </div>
  );
};
