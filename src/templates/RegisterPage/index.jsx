import { HeaderRegisterPage } from "../../components/Register-Page/Header";
import "./style.css";
import "../reset/reset.css";
import { MainRegisterPage } from "../../components/Register-Page/Main";

export const RegisterPage = () => {
  return (
    <>
      <div className="container-body-register-page">
        <HeaderRegisterPage></HeaderRegisterPage>
        <MainRegisterPage></MainRegisterPage>
      </div>
    </>
  );
};
