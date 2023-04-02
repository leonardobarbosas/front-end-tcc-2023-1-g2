import "./body.css";
import "../../reset/reset.css";
import { FooterMotoristas } from "../../../components/user/Motoristas-Page/Footer";
import { MainMotoristasPage } from "../../../components/user/Motoristas-Page/Main";
import { HeaderMotoristas } from "../../../components/user/Motoristas-Page/Header";

export default function MotoristasPage({ props }) {
  return (
    <>
      <div className="body-motorista">
        <HeaderMotoristas></HeaderMotoristas>
        <MainMotoristasPage props={props}></MainMotoristasPage>
        <FooterMotoristas></FooterMotoristas>
      </div>
    </>
  );
}
