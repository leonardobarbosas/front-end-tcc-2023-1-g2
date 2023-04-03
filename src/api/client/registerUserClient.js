import api from "../api";

export const registerUserClient = ({ props }) => {
  api
    .post("user", {
      nome: props.nome,
      email: props.email,
      rg: props.rg,
      cpf: props.cpf,
      cep: props.cep,
      telefone: props.telefone,
      data_nascimento: props.data_nascimento,
      senha: props.uid,
      foto: props.url_photo,
      status_usuario: props.status,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
