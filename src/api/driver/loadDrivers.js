import api from "../api";

export const carregarMotoristas = (setDriver) => {
  api
    .get("/drivers")
    .then((response) => {
      setDriver(response.data.driver);
    })
    .catch((err) => {
      console.log("Erro: " + err);
    });
};
