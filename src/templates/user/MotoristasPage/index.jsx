import { HeaderMotoristas } from "../../../components/Motoristas-Page/Header";
import "./body.css";
import "../../reset/reset.css";
import { Main } from "../../../components/Motoristas-Page/Main";
import { FooterMotoristas } from "../../../components/Motoristas-Page/Footer";

export default function MotoristasPage({ props }) {
  return (
    <>
      <div className="body-motorista">
        <HeaderMotoristas></HeaderMotoristas>
        <Main props={props}></Main>
        <FooterMotoristas></FooterMotoristas>
      </div>
    </>
  );
}
