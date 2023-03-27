import { useEffect, useState } from "react";
import { InputSearch } from "../../LocalizeSe-Page/Main/Inputs";
import { Card } from "./Card";
import "./style.css";

export const Main = ({ props }) => {
  /* let [responseData, setResponseData] = React.useState("");

  const fetchData = () => {
    api.get("drivers").then((response) => {
      setResponseData(response.data);
      console.log(response);
    });
  }; */

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    const carregarMotoristas = async () => {
      const response = await fetch("http://localhost:3030/drivers");
      const [drivers] = await Promise.all([response]);
      const driver = await drivers.json();
      setDriver(driver.drivers);
    };

    carregarMotoristas();
  }, []);

  return (
    <main>
      <div className="box-name-h1">
        <h1>Motoristas</h1>
      </div>
      <div className="box-input-filter">
        <InputSearch props={props}></InputSearch>
        <select name="filtros" id="select-filter-container">
          <option value="">
            <p>a</p>
          </option>
          <option value="">
            <p>b</p>
          </option>
          <option value="">
            <p>c</p>
          </option>
        </select>
      </div>
      <div className="box-motoristas-card">
        <Card driver={driver}></Card>
      </div>
    </main>
  );
};
