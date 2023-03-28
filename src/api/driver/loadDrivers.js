import api from "../api";

export const carregarMotoristas = async (setDriver) => {
  const response = await api.get("drivers");
  const [drivers] = await Promise.all([response.data]);
  setDriver(drivers.drivers);
};
