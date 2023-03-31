import { HeaderChoosePage } from "../../components/Choose-Page/Header";
import { MainChoosePage } from "../../components/Choose-Page/Main";
import "./style.css";
import "../reset/reset.css";

export default function ChoosePage() {
  const props = {
    url: "/register",
  };

  return (
    <div className="container-body-choose-page">
      <div className="container-header-main-choose">
        <HeaderChoosePage props={props}></HeaderChoosePage>
        <MainChoosePage></MainChoosePage>
      </div>
    </div>
  );
}
