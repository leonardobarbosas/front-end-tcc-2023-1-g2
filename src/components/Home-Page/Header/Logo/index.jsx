import "material-symbols";
import "./style.css";

export const Logo = ({ props }) => {
  return (
    <div className="logo-container">
      <a href="/">
        <div className="logo-content">
          <div className="ball">
            <span className="material-symbols-outlined">airport_shuttle</span>
          </div>
          <div className={props}>
            <span className="name">Vanbora</span>
          </div>
        </div>
      </a>
    </div>
  );
};
