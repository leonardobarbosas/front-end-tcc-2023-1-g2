import { useState } from "react";
import "./style.css";

export const FotoPerfilRegistro = () => {
  const [card, setCardFile] = useState();

  const [classImg, setClassImg] = useState("none");

  return (
    <div className="container-foto-perfil">
      <label className="form-picture-label">
        <p>Foto de Perfil:</p>
        <input
          onChange={(e) => {
            OnChangeFunction(e, setCardFile, setClassImg);
          }}
          className="input-picture"
          type="file"
        />
        <img className={`img-preview ${classImg}`} src={card} alt="teste" />
      </label>
    </div>
  );
};

const OnChangeFunction = (e, setCardFile, setClassForImage) => {
  var file = new FileReader();
  file.onload = (e) => {
    document.querySelector(".img-preview").src = e.target.result;
  };
  setClassForImage("true");
  setCardFile(file.readAsDataURL(e.target.files[0]));
};
