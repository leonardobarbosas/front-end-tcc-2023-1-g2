import { useNavigate } from "react-router-dom";
import "./style.css";

export const ButtonChoose = ({ props }) => {
  const navigation = useNavigate();
  return (
    <button
      onClick={() => {
        navigation(props.nav);
      }}
      key={props.key}
      className="button"
      type="button"
    >
      {props.label}
    </button>
  );
};
