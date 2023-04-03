import { MainContractPage } from "../../../components/Contract-Page/Main";
import "../../reset/reset.css";
import { FooterContractPage } from "../../../components/Contract-Page/Footer";
import "./body.css";

export default function ContractPage() {
  return (
    <>
      <div className="container-main-footer-contract">
        <MainContractPage></MainContractPage>
        <FooterContractPage></FooterContractPage>
      </div>
    </>
  );
}
