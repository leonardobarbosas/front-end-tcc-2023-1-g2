import { FooterLocalizesePage } from "../../../components/user/LocalizeSe-Page/Footer";
import { MainLocalizesePage } from "../../../components/user/LocalizeSe-Page/Main";
import "../../reset/reset.css";
import "./body.css";

export default function LocalizeSe() {
  return (
    <>
      <div className="body-localize-se">
        <MainLocalizesePage></MainLocalizesePage>
        <FooterLocalizesePage></FooterLocalizesePage>
      </div>
    </>
  );
}
