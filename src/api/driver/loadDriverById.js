import api from "../api";

export const loafDriverById = async (id, setDriverById) => {
  const response = await api.get(`user/${id}`);
  const [driver] = await Promise.all([response]);
  setDriverById(driver.data.user);
};
