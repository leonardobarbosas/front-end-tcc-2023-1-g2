import { InputContainer } from "./InputContainter";
import "./style.css";

export const MainContractPage = ({ props }) => {
  return (
    <main className="box-all-main-contract">
      <header>
        <span className="contrate-name">Contrato</span>
      </header>
      <div className="container-inputs-contrate">
        <div className="input-contents">
          <div className="input-container">
            <label htmlFor="password" className="placeholder">
              Escola:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-contract-type"
            >
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="password" className="placeholder">
              Tipo de transporte:
            </label>
            <select
              className="selects"
              name="filtros"
              id="select-filter-container-school"
            >
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
            </select>
          </div>
        </div>
        --------------------------------------------------------
        <div className="input-contents">
          <InputContainer
            props={{
              classNameLabel: "placeholder",
              nameInput: "Nome do responsável",
              classNameInput: "input-contract",
            }}
          />
          <InputContainer
            props={{
              classNameLabel: "placeholder",
              nameInput: "Nome do passageiro",
              classNameInput: "input-contract",
            }}
          />
          <InputContainer
            props={{
              classNameLabel: "placeHolder",
              nameInput: "Idade do passageiro:",
              classNameInput: "input-contract",
            }}
          />
        </div>
        -------------------------------------------------------
        <div className="input-container">
          <label htmlFor="password" className="placeholder">
            Tipo de pagamento:
          </label>
          <select
            className="selects"
            name="filtros"
            id="select-filter-container-school"
          >
            <option value="">a</option>
            <option value="">b</option>
            <option value="">c</option>
          </select>
        </div>
      </div>
    </main>
  );
};
