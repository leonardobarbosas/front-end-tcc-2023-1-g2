import { Logo } from "../../Home-Page/Header/Logo";
import { MenuBurguer } from "../../Home-Page/Header/MenuBurguer";

import {
  faWhatsapp,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact-us">
          <div className="icon-contact">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Whatsapp</span>
          </div>
          <div className="icon-contact">
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </div>

          <div className="icon-contact">
            <FontAwesomeIcon icon={faYoutube} />
            <span>Youtube</span>
          </div>
        </div>
        <div className="footer-localization">
          <div>
            <MenuBurguer />
          </div>
          <div className="logo-footer">
            <Logo />
            <span>©Copyright 2023 - Vanbora</span>
          </div>
        </div>
        <div className="localization-company">
          <div>
            <span>Avenida dos Autonomistas, nº 1496</span>
          </div>
          <div>
            <span>Vila Yara, Osasco/SP - CEP 06.020-902</span>
          </div>
        </div>
      </footer>
    </>
  );
};
