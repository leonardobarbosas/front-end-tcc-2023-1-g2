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
      const response = await fetch("http://localhost:3030/users");
      const drivers = await response.json();
      setDriver(drivers.users);
    };

    carregarMotoristas();
  }, []);

  console.log(
    driver.map((index) => {
      return index.nome;
    })
  );

  return (
    <main>
      <div className="box-name-h1">
        <h1>Motoristas</h1>
      </div>
      <div className="box-input-filter">
        <InputSearch props={props}></InputSearch>
      </div>
      <div className="box-motoristas-card">
        <Card props={driver}></Card>
      </div>
    </main>
  );
};
