import { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export const FotoPerfilRegistro = () => {
  const [card, setCardFile] = useState();
  const [classImg, setClassImg] = useState("none");
  const [classIcon, setClassIcon] = useState("true");

  return (
    <div className="container-foto-perfil">
      <label className="form-picture-label">
        <p>Foto de Perfil:</p>
        <input
          onChange={(e) => {
            OnChangeFunction(e, setCardFile, setClassImg, setClassIcon);
          }}
          className="input-picture"
          type="file"
        />
        <div className={`${classIcon} container-icon-picture`}>
          <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
        </div>
        <img className={`img-preview ${classImg}`} src={card} alt="teste" />
      </label>
    </div>
  );
};

const OnChangeFunction = (
  e,
  setCardFile,
  setClassForImage,
  setClassForIcon
) => {
  var file = new FileReader();
  file.onload = (e) => {
    setClassForIcon("none");
    document.querySelector(".img-preview").src = e.target.result;
  };

  setClassForImage("true");
  setCardFile(file.readAsDataURL(e.target.files[0]));
};
