import { HeaderChoosePage } from "../../components/Choose-Page/Header";
import { MainChoosePage } from "../../components/Choose-Page/Main";
import "./style.css";
import "../reset/reset.css";

export default function ChoosePage() {
  return (
    <div className="container-body-choose-page">
      <div className="container-header-main">
        <HeaderChoosePage></HeaderChoosePage>
        <MainChoosePage></MainChoosePage>
      </div>
    </div>
  );
}
