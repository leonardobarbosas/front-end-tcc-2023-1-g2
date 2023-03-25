import { Logo } from "./Logo";
import { MenuBurguer } from "./MenuBurguer";
import "./style.css";

export const Header = () => {
  return (
    <header>
      <Logo></Logo>
      <MenuBurguer></MenuBurguer>
    </header>
  );
};
