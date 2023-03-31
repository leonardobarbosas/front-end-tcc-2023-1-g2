import { HeaderDadosAdicionaisUser } from "../../../components/user/DadosAdicionaisUser-Page/Header";
import { MainDadosAdicionaisUser } from "../../../components/user/DadosAdicionaisUser-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export const DadosAdicionaisUserPage = () => {
  return (
    <>
      <div className="container-body-dados-adicionais-us">
        <div className="container-header-main-footer-da-user">
          <HeaderDadosAdicionaisUser></HeaderDadosAdicionaisUser>
          <MainDadosAdicionaisUser></MainDadosAdicionaisUser>
        </div>
      </div>
    </>
  );
};
