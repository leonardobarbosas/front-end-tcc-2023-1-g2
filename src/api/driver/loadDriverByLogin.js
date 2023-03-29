import api from "../api";

export const loadDriverByLogin = async (setTeste, email, password) => {
  const response = await api.post("user/login", {
    email: email,
    senha: password,
  });
  const [driver] = await Promise.all([response]);
  setTeste(driver.data);
};
