import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loafDriverById } from "../../api/driver/loadDriverById";
import { loadDriverByLogin } from "../../api/driver/loadDriverByLogin";

export const Teste = () => {
  const location = useLocation();
  const email = location.state.email;
  const senha = location.state.senha;
  const [driver, setDriver] = useState([]);
  const [driverr, setDriverById] = useState([]);
  useEffect(() => {
    loadDriverByLogin(setDriver, email, senha);
  }, [email, senha]);

  useEffect(() => {
    loafDriverById(driver.id, setDriverById);
  }, [driver.id]);

  let a = driverr.nome;
  console.log(driverr);
  return (
    <>
      <div>
        <p onClick={console.log(driver)}>kkk</p>
        <p onChange={(a = driverr.nome)}>{a}</p>
      </div>
    </>
  );
};
