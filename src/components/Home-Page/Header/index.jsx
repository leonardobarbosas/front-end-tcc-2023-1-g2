import { Logo } from "./Logo";
import { MenuBurguer } from "./MenuBurguer";
import "./style.css";

export const Header = ({ props }) => {
  return (
    <header>
      <Logo props={props}></Logo>
      <MenuBurguer props={props}></MenuBurguer>
    </header>
  );
};
