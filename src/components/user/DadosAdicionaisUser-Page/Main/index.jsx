import { ButtonSalvarUsuario } from "./Button";
import { FormFirstInfos } from "./FormFirstInfos";
import { FotoPerfilRegistro } from "./FotoPerfil";
import "./style.css";

export const MainDadosAdicionaisUser = () => {
  const propsSalvarUsuario = {
    key: "button-save-client",
    label: "Salvar",
    nav: "/",
  };
  return (
    <>
      <main className="container-main-da-user">
        <form className="container-form-register">
          <FotoPerfilRegistro></FotoPerfilRegistro>
          <FormFirstInfos></FormFirstInfos>
          <div className="button-save-client">
            <ButtonSalvarUsuario
              props={propsSalvarUsuario}
            ></ButtonSalvarUsuario>
          </div>
        </form>
      </main>
    </>
  );
};
