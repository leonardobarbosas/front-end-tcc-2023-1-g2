import { useNavigate } from "react-router-dom";
import { Logo } from "../../Home-Page/Header/Logo";
import "./style.css";

export const HeaderChoosePage = ({ props }) => {
  const navigation = useNavigate();

  return (
    <>
      <header className="header-choose-page">
        <Logo></Logo>
        <div className="container-button-voltar">
          <p
            onClick={() => {
              navigation(props.url);
            }}
          >
            Voltar
          </p>
        </div>
      </header>
    </>
  );
};
