import "./style.css";

export const MenuBurguer = () => {
  return (
    <nav>
      <a href="/" className="menu-burguer-container">
        <i className="menu-burguer"></i>
      </a>
      <ul className="text-container">
        <li className="nav-itens">Motoristas</li>
        <li className="nav-itens">Contate-nos</li>
        <li className="nav-itens">Seus Contratos</li>
      </ul>
    </nav>
  );
};
