import "./style.css";

export const InputSearch = ({ props }) => {
  return (
    <div className="inputs">
      <span className="material-symbols-outlined search-cep">search</span>
      <input
        placeholder={props.placeHolder}
        type="text"
        className="input cep"
        name="cep"
        id={props.id}
      />
    </div>
  );
};
