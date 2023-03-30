import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInfosUser } from "../../../../firebase/LoginRegisterGoogle/firebaseGoogleLoginRegister";
import "./style.css";

export const LeftSide = () => {
  /* const [driverGoogle, setDriverGoogle] = useState([]); */
  /* useEffect(() => {
    getInfosUser(setDriverGoogle);
  }, []); */
  const [userInfos, setUserInfos] = useState([]);
  const [final, set] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    set(userInfos.email);
  }, [userInfos]);

  console.log(final);

  return (
    <div className="left-side-register">
      <span className="entry-text">
        Cadastre-se e conheça a nossa plataforma
      </span>
      <button
        type="button"
        className="google-register"
        id="button-register-google"
        onClick={() => {
          getInfosUser(userInfos, setUserInfos);
        }}
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
