import { HeaderLogin } from "../../components/Login-Page/Header";
import { MainLogin } from "../../components/Login-Page/Main";
import "./style.css";

export const LoginPage = () => {
  return (
    <>
      <div className="body-login-page">
        <HeaderLogin></HeaderLogin>
        <MainLogin></MainLogin>
      </div>
    </>
  );
};
