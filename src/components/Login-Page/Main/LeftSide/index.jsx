import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const LeftSide = () => {
  const [props, setProps] = useState([]);
  const navitage = useNavigate();

  const getEmail = (e) => {
    const value = e.target.value;
    setProps({ email: value });
  };
  const getPassword = (e, email) => {
    const value = e.target.value;
    setProps({ email: email, senha: value });
  };

  return (
    <div className="left-side">
      <form className="register-form">
        <span className="form-title">Crie uma Conta</span>

        <div className="input-container">
          <label htmlFor="email" className="placeholder">
            Email:
          </label>
          <input
            onChange={(e) => {
              getEmail(e);
            }}
            value={props.email}
            className="input"
            type="email"
            id="email"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="placeholder">
            Senha:
          </label>
          <input
            onChange={(e) => {
              getPassword(e, props.email);
            }}
            value={props.senha}
            className="input"
            type="password"
            id="password"
            required
          />
        </div>

        <button
          id="button-form"
          className="button-next"
          type="button"
          onClick={() => {
            navitage("/teste", { state: props });
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
