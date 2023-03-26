import { Footer } from "../../components/LocalizeSe-Page/Footer";
import { Main } from "../../components/LocalizeSe-Page/Main";
import "../reset/reset.css";
import "./body.css";

function LocalizeSe({ props }) {
  return (
    <>
      <div className="body-localize-se">
        <Main props={props}></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default LocalizeSe;
