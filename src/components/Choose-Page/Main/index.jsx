import { ButtonChoose } from "./Button";
import "./style.css";

export const MainChoosePage = () => {
  const propsButtonCliente = {
    nav: "/dados-adicionais-user",
    key: "usuario",
    label: "Cliente",
  };
  const propsButtonMotorista = {
    nav: "/",
    key: "motorista",
    label: "Motorista",
  };
  return (
    <main className="container-main-choose-page">
      <div className="text-container-choose-page">
        <span className="choose-text">Selecione uma opção para registrar</span>
      </div>
      <div className="buttons-container">
        <ButtonChoose props={propsButtonMotorista}></ButtonChoose>
        <ButtonChoose props={propsButtonCliente}></ButtonChoose>
      </div>
    </main>
  );
};
