import { InputContainer } from "../../../../Contract-Page/Main/InputContainter";
import "./style.css";

export const FormFirstInfos = () => {
  return (
    <>
      <div className="container-inputs-more-infos">
        <div className="container-rg-cpf">
          <InputContainer
            props={{
              classNameLabel: "placeholder",
              nameInput: "RG",
              classNameInput: "inputs-more-infos",
            }}
          />
          <InputContainer
            props={{
              classNameLabel: "placeholder",
              nameInput: "CPF",
              classNameInput: "inputs-more-infos",
            }}
          />
        </div>
        <div></div>
      </div>
    </>
  );
};
